/**
 * Static verification for the /kho-tai-lieu page (read-only).
 *
 * Guards:
 *  1. `.env.example` documents both Drive variables; no NEXT_PUBLIC_ Drive key
 *     anywhere in src.
 *  2. `src/lib/drive.ts` is read-only (files.list only), never throws,
 *     and uses the Cache Components APIs (`use cache` + cacheTag + cacheLife).
 *  3. No route handler under src/app/api.
 *  4. The page exports static metadata, has exactly one <h1> in its import
 *     tree, and keeps `fetch(` / `mailto:` out of page.tsx.
 *  5. Every local hub section id has a matching DOM id in the page or the
 *     browser component (SubNav anchors resolve).
 *  6. No useSearchParams in the new route.
 *  7. `fetch(` appears only in src/lib/drive.ts inside src.
 *  8. Download URLs are type-aware (Google-native export / usercontent
 *     confirm=t), the #xem-truoc anchor lives in page.tsx (all statuses),
 *     and truncated vs failedFolders stay separate.
 *  9. Behavior tests for parseFolderName / docTypeFromMime, plus no .env in
 *     the working tree.
 *
 * Run: node tests/verify-library.js
 */

const fs = require("fs");
const path = require("path");
const { execFileSync } = require("node:child_process");
const { pathToFileURL } = require("node:url");

const ROOT = path.resolve(__dirname, "..");
const SRC = path.join(ROOT, "src");
const PAGE_DIR = path.join(SRC, "app", "kho-tai-lieu");
const PAGE_FILE = path.join(PAGE_DIR, "page.tsx");
const BROWSER_FILE = path.join(PAGE_DIR, "library-browser.tsx");
const DRIVE_FILE = path.join(SRC, "lib", "drive.ts");
const ENV_EXAMPLE = path.join(ROOT, ".env.example");

const problems = [];
const info = [];
const warn = (msg) => problems.push(msg);
const ok = (msg) => info.push(msg);

const read = (file) => (fs.existsSync(file) ? fs.readFileSync(file, "utf8") : "");

function walk(dir, out = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(p, out);
    else out.push(p);
  }
  return out;
}

function rel(p) {
  return path.relative(ROOT, p).replace(/\\/g, "/");
}

const codeFiles = walk(SRC).filter((f) => /\.(tsx|ts)$/.test(f));
const allFiles = walk(SRC);

/* ---------------------------------------------- 0. required files exist */

const required = [PAGE_FILE, BROWSER_FILE, DRIVE_FILE, ENV_EXAMPLE];
for (const file of required) {
  if (!fs.existsSync(file)) {
    warn(`[files] missing required file ${rel(file)}`);
  }
}
if (problems.length === 0) ok("[files] page, browser, drive lib and .env.example exist");

const pageSrc = read(PAGE_FILE);
const browserSrc = read(BROWSER_FILE);
const driveSrc = read(DRIVE_FILE);
const librarySrc = read(path.join(SRC, "data", "library.ts"));

/* --------------------------------------------------- 1. env & key safety */

const envSrc = read(ENV_EXAMPLE);
for (const name of ["GOOGLE_DRIVE_API_KEY", "GOOGLE_DRIVE_FOLDER_ID"]) {
  if (!new RegExp(`^${name}=`, "m").test(envSrc)) {
    warn(`[env] .env.example missing "${name}="`);
  }
}
if (envSrc.includes("NEXT_PUBLIC_GOOGLE")) {
  warn("[env] .env.example exposes a NEXT_PUBLIC_ Google key");
} else {
  ok("[env] .env.example documents both Drive variables, server-only");
}

const publicKeyFiles = codeFiles.filter((f) =>
  read(f).includes("NEXT_PUBLIC_GOOGLE"),
);
if (publicKeyFiles.length) {
  warn(
    `[env] NEXT_PUBLIC_GOOGLE found in ${publicKeyFiles.map(rel).join(", ")} (key would leak to the client bundle)`,
  );
} else {
  ok("[env] no NEXT_PUBLIC_GOOGLE reference in src");
}

const envReaders = codeFiles.filter((f) =>
  /process\.env\.GOOGLE_DRIVE_(API_KEY|FOLDER_ID)/.test(read(f)),
);
const unexpectedReaders = envReaders.filter((f) => f !== DRIVE_FILE);
if (unexpectedReaders.length) {
  warn(
    `[env] Drive env vars read outside src/lib/drive.ts: ${unexpectedReaders.map(rel).join(", ")}`,
  );
} else {
  ok("[env] Drive env vars are read only in src/lib/drive.ts");
}

/* Chỉ .env.example được phép tồn tại; file env thật không được nằm trong cây. */
const envFiles = [".env", ".env.local", ".env.development", ".env.production"].filter(
  (name) => fs.existsSync(path.join(ROOT, name)),
);
if (envFiles.length) {
  warn(
    `[env] ${envFiles.join(", ")} present in the working tree — only .env.example may be committed`,
  );
} else {
  ok("[env] no .env file in the working tree");
}

/* ------------------------------------------- 2. drive.ts read-only + cache */

const writePatterns = [
  /files\.create/,
  /files\.update/,
  /files\.delete/,
  /permissions\.create/,
  /uploadType=(media|multipart|resumable)/,
  /method:\s*["'](POST|PATCH|PUT|DELETE)["']/,
];
const hitWrites = writePatterns.filter((re) => re.test(driveSrc));
if (hitWrites.length) {
  warn(`[drive] write operation detected in src/lib/drive.ts (${hitWrites.join(", ")})`);
} else {
  ok("[drive] no Drive write operations (read-only files.list)");
}

if (!/use cache/.test(driveSrc)) {
  warn("[cache] src/lib/drive.ts missing the 'use cache' directive");
}
if (!/cacheTag\(\s*["']drive-library["']\s*\)/.test(driveSrc)) {
  warn('[cache] src/lib/drive.ts missing cacheTag("drive-library")');
}
if (!/cacheLife\(/.test(driveSrc)) {
  warn("[cache] src/lib/drive.ts missing cacheLife()");
}
if (/unstable_cache|export\s+const\s+revalidate/.test(driveSrc)) {
  warn("[cache] legacy unstable_cache/revalidate used instead of Cache Components");
}
if (!problems.some((p) => p.startsWith("[cache]"))) {
  ok("[cache] drive.ts uses 'use cache' + cacheTag + cacheLife");
}

const throwsOutsideCatch = /export\s+async\s+function\s+getLibrarySnapshot[\s\S]*?throw\s+/.test(
  driveSrc,
);
if (throwsOutsideCatch) {
  warn("[drive] getLibrarySnapshot may throw; it must always return a snapshot");
} else {
  ok("[drive] getLibrarySnapshot does not throw");
}

/* ------------------------------------------------- 3. no route handlers */

if (fs.existsSync(path.join(SRC, "app", "api"))) {
  warn("[api] src/app/api exists — no route handler is allowed for this feature");
} else {
  ok("[api] no src/app/api route handlers");
}

/* ------------------------------------- 4. metadata, single h1, no fetch/mailto */

if (!/export\s+const\s+metadata|generateMetadata/.test(pageSrc)) {
  warn("[meta] /kho-tai-lieu has no static metadata export");
} else {
  ok("[meta] /kho-tai-lieu exports static metadata");
}

/** Collect page + transitively imported local ts/tsx files. */
function collectPool(pageFile) {
  const files = [pageFile];
  const seen = new Set([pageFile]);
  const queue = [pageFile];
  while (queue.length) {
    const f = queue.shift();
    const src = read(f);
    for (const m of src.matchAll(/from\s+"(@\/[^"]+|\.[^"]+)"/g)) {
      const base = m[1].startsWith("@/")
        ? path.join(SRC, m[1].slice(2))
        : path.resolve(path.dirname(f), m[1]);
      for (const candidate of [base, `${base}.tsx`, `${base}.ts`]) {
        if (
          fs.existsSync(candidate) &&
          fs.statSync(candidate).isFile() &&
          /\.(tsx|ts)$/.test(candidate) &&
          !seen.has(candidate)
        ) {
          seen.add(candidate);
          files.push(candidate);
          queue.push(candidate);
        }
      }
    }
  }
  return files;
}

const pool = collectPool(PAGE_FILE);
const h1Count = pool.reduce(
  (total, f) => total + [...read(f).matchAll(/<h1[\s>]/g)].length,
  0,
);
if (h1Count !== 1) {
  warn(`[a11y] /kho-tai-lieu expected exactly 1 <h1>, found ${h1Count}`);
} else {
  ok("[a11y] /kho-tai-lieu renders exactly one <h1>");
}

if (/\bfetch\s*\(/.test(pageSrc)) {
  warn("[arch] page.tsx contains fetch( — Drive reads belong in src/lib/drive.ts");
}
if (/mailto:/.test(pageSrc)) {
  warn("[arch] page.tsx contains mailto: — RequestForm owns the mailto link");
}
if (/\bfetch\s*\(/.test(browserSrc)) {
  warn("[arch] library-browser.tsx contains fetch( — the browser must not call Drive");
}
if (!problems.some((p) => p.startsWith("[arch]"))) {
  ok("[arch] page.tsx/browser contain no fetch( or mailto: — Drive stays server-side");
}

if (!/RequestForm/.test(pageSrc) || !/<RequestForm[\s\S]*?to=\{siteEmail\}/.test(pageSrc)) {
  warn("[form] page.tsx must render <RequestForm to={siteEmail} … />");
} else if (!/subject="[^"]+"/.test(pageSrc)) {
  warn("[form] RequestForm call needs a string-literal subject");
} else {
  ok("[form] RequestForm receives siteEmail + literal subject");
}

/* ------------------------------------- 5. section ids resolve to DOM ids */

const sectionsBlock = pageSrc.match(/sections:\s*\[([\s\S]*?)\]/);
const sectionIds = sectionsBlock
  ? [...sectionsBlock[1].matchAll(/id:\s*"([^"]+)"/g)].map((m) => m[1])
  : [];

if (sectionIds.length === 0) {
  warn("[nav] page.tsx local hub has no sections (SubNav would be empty)");
}

const domIds = new Set();
for (const f of [PAGE_FILE, BROWSER_FILE, ...pool]) {
  if (!fs.existsSync(f)) continue;
  for (const m of read(f).matchAll(/\bid=("[^"]+"|\{`[^`]+`\})/g)) {
    let value = m[1];
    value = value.startsWith("{")
      ? value.slice(1, -1).replace(/^`|`$/g, "")
      : value.slice(1, -1);
    if (value.includes("${")) continue;
    domIds.add(value);
  }
}
const missingSections = sectionIds.filter((id) => !domIds.has(id));
if (missingSections.length) {
  warn(`[nav] SubNav anchors without a DOM id: ${missingSections.join(", ")}`);
} else {
  ok(`[nav] all SubNav anchors resolve (${sectionIds.join(", ")})`);
}

/* #xem-truoc phải do page.tsx render để tồn tại ở cả 3 trạng thái snapshot. */
if (!/\bid="xem-truoc"/.test(pageSrc)) {
  warn('[nav] page.tsx must render id="xem-truoc" itself (status-independent anchor)');
} else if (/\bid="xem-truoc"/.test(browserSrc)) {
  warn('[nav] duplicate id="xem-truoc" in library-browser.tsx');
} else {
  ok("[nav] #xem-truoc lives in page.tsx (ok/unconfigured/error)");
}

/* ------------------------------------------------ 6. no useSearchParams */

for (const f of [PAGE_FILE, BROWSER_FILE]) {
  if (/useSearchParams\s*\(/.test(read(f))) {
    warn(`[next16] ${rel(f)} uses useSearchParams (must stay static + stateful)`);
  }
}
if (!problems.some((p) => p.startsWith("[next16]"))) {
  ok("[next16] no useSearchParams in the new route");
}

/* --------------------------------------------- 7. fetch only in drive.ts */

const fetchFiles = codeFiles.filter((f) => /\bfetch\s*\(/.test(read(f)));
const illegalFetch = fetchFiles.filter((f) => f !== DRIVE_FILE);
if (illegalFetch.length) {
  warn(`[arch] fetch( found outside src/lib/drive.ts: ${illegalFetch.map(rel).join(", ")}`);
} else {
  ok("[arch] fetch( appears only in src/lib/drive.ts");
}

/* ------------------------------------ 8. file-type preview/download wiring */

const checks = [
  [/docs\.google\.com\/document/, "[drive] missing Google Docs preview URL"],
  [/docs\.google\.com\/presentation/, "[drive] missing Google Slides preview URL"],
  [/docs\.google\.com\/spreadsheets/, "[drive] missing Google Sheets preview URL"],
  [/drive\.google\.com\/thumbnail\?id=/, "[drive] missing Drive thumbnail URL"],
  [
    /drive\.usercontent\.google\.com\/download\?id=/,
    "[drive] missing usercontent download URL for binary files",
  ],
  [/&confirm=t/, "[drive] binary download URL must include confirm=t"],
  [
    /document\/d\/\$\{id\}\/export\?format=docx/,
    "[drive] missing Google Docs → DOCX export",
  ],
  [
    /presentation\/d\/\$\{id\}\/export\/pptx/,
    "[drive] missing Google Slides → PPTX export",
  ],
  [
    /spreadsheets\/d\/\$\{id\}\/export\?format=xlsx/,
    "[drive] missing Google Sheets → XLSX export",
  ],
];
for (const [re, message] of checks) {
  if (!re.test(driveSrc)) warn(message);
}
if (!checks.some(([re]) => !re.test(driveSrc))) {
  ok("[drive] type-aware download URLs (native export / usercontent confirm=t)");
}

if (!/failedFolders/.test(driveSrc) || !/failedFolders/.test(librarySrc)) {
  warn(
    "[drive] snapshot must expose failedFolders separately from truncated (permission/network vs caps)",
  );
} else {
  ok("[drive] truncated (caps) and failedFolders (Drive errors) are separate");
}

if (!/<img[\s>]/.test(browserSrc) || !/onError=/.test(browserSrc)) {
  warn("[ui] video thumbnail should use <img> with onError fallback");
} else {
  ok("[ui] video thumbnail falls back to a typographic tile on error");
}

/* --------------------------------- 9. behavior: parsing helpers (TS) --- */

const libraryModuleUrl = pathToFileURL(
  path.join(SRC, "data", "library.ts"),
).href;
const behaviorScript = `
import { parseFolderName, docTypeFromMime } from ${JSON.stringify(libraryModuleUrl)};
const failures = [];
const folderCases = [
  ["HK1 - CNPM", "HK1", "Công nghệ phần mềm"],
  ["Cơ sở dữ liệu - HK2 2025-2026", "HK2 · 2025-2026", "Cơ sở dữ liệu"],
  ["CNPM HK1", "HK1", "Công nghệ phần mềm"],
  ["HK2 - Mạng máy tính 2025-2026", "HK2 · 2025-2026", "Mạng máy tính"],
];
for (const [input, semester, subject] of folderCases) {
  const result = parseFolderName(input);
  if (result.semester !== semester || result.subject !== subject) {
    failures.push({ input, expected: { semester, subject }, actual: result });
  }
}
const mimeCases = [
  ["Video/mp4", "video"],
  ["image/PNG", "image"],
  ["application/vnd.google-apps.document", "doc"],
  ["application/vnd.google-apps.spreadsheet", "sheet"],
  ["application/pdf", "pdf"],
  ["Application/VND.MS-EXCEL", "sheet"],
];
for (const [input, expected] of mimeCases) {
  const actual = docTypeFromMime(input);
  if (actual !== expected) failures.push({ mime: input, expected, actual });
}
console.log(JSON.stringify({ failures }));
`;

let behaviorFailures = null;
try {
  const raw = execFileSync(
    process.execPath,
    ["--experimental-strip-types", "--input-type=module", "-e", behaviorScript],
    { encoding: "utf8", stdio: ["ignore", "pipe", "ignore"] },
  );
  behaviorFailures = JSON.parse(raw.trim()).failures;
} catch (error) {
  warn(
    "[behavior] could not import src/data/library.ts: " +
      String(error.message || error).split("\n")[0],
  );
}
if (behaviorFailures && behaviorFailures.length) {
  warn(`[behavior] helper mismatches: ${JSON.stringify(behaviorFailures)}`);
} else if (behaviorFailures) {
  ok("[behavior] parseFolderName + docTypeFromMime edge cases pass");
}

/* ---------------------------------------------------------------- output */

console.log("=== /kho-tai-lieu static verification ===\n");
if (info.length) {
  console.log("PASSED CHECKS:");
  for (const line of info) console.log("  ✔ " + line);
  console.log("");
}
if (problems.length) {
  console.log(`PROBLEMS (${problems.length}):`);
  for (const line of problems) console.log("  ✖ " + line);
  console.log("");
}
if (!problems.length) {
  console.log("No problems found.");
}
process.exitCode = problems.length ? 1 : 0;
