/**
 * Static verification for the 10-hub INNTECH platform (read-only).
 *
 * Checks:
 *  1. CSS-module class references resolve to a class defined in that module.
 *     (Also reports defined-but-never-referenced classes as notes.)
 *  2. Every `hub.sections` anchor in src/data/hubs.ts exists as an id in the
 *     matching page (ids collected from the page + its imported tsx/ts files).
 *  3. Every literal in-page anchor href (#...) has a matching id in the page
 *     that renders it.
 *  4. Every literal internal route link (/path or /path#anchor) points to a
 *     real page file and, when an anchor is present, to an existing id there.
 *  5. Forms mail out to inntechclub@gmail.com with per-hub subjects; no
 *     fetch / XMLHttpRequest / API route in the form code path.
 *  6. Marketplace sample products carry exactly one "Mẫu" badge per card.
 *  7. Next 16 hygiene: no useSearchParams, no deprecated <Image priority>.
 *  8. Exactly one <h1> per page (page + rendered components).
 *  9. Every page exports static metadata.
 *
 * Run: node tests/verify-platform.js
 */

const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const SRC = path.join(ROOT, "src");

const problems = [];
const info = [];
const notes = [];

const warn = (msg) => problems.push(msg);
const ok = (msg) => info.push(msg);
const note = (msg) => notes.push(msg);

/* ---------------------------------------------------------------- helpers */

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

const allFiles = walk(SRC);
const codeFiles = allFiles.filter((f) => /\.(tsx|ts)$/.test(f));
const cssModules = allFiles.filter((f) => f.endsWith(".module.css"));

/** Class selectors defined in a CSS module (flattened across at-rules). */
function classNamesInCss(cssPath) {
  const css = fs.readFileSync(cssPath, "utf8");
  const names = new Set();
  const cleaned = css.replace(/\/\*[\s\S]*?\*\//g, "");
  const re = /\.(-?[A-Za-z_][A-Za-z0-9_-]*)/g;
  let m;
  while ((m = re.exec(cleaned)) !== null) names.add(m[1]);
  return names;
}

const cssImportRe =
  /import\s+(?:type\s+)?(\w+)\s*(?:,\s*\{\s*([^}]*)\s*\})?\s*from\s+["']([^"']*\.module\.css)["']/g;

function moduleImportsFor(file) {
  const src = fs.readFileSync(file, "utf8");
  const imports = [];
  let m;
  const re = new RegExp(cssImportRe.source, "g");
  while ((m = re.exec(src)) !== null) {
    const spec = m[3];
    const abs = spec.startsWith("@/")
      ? path.join(SRC, spec.slice(2))
      : path.resolve(path.dirname(file), spec);
    imports.push({
      varName: m[1],
      abs,
      classNames: fs.existsSync(abs) ? classNamesInCss(abs) : null,
    });
  }
  // Source with import statements removed, so import specifiers such as
  // "hub-ui.module.css" are never mistaken for `ui.module` class references.
  const refSource = src
    .split("\n")
    .filter((line) => !line.includes(".module.css"))
    .join("\n");
  return { src, refSource, imports };
}

/** Collect ids from a page plus the component/data modules it imports. */
function collectPagePool(pageFile, regexKind) {
  const ids = new Set();
  const files = [pageFile];
  const seen = new Set([pageFile]);
  const queue = [pageFile];
  while (queue.length) {
    const f = queue.shift();
    if (!fs.existsSync(f)) continue;
    const src = fs.readFileSync(f, "utf8");
    for (const m of src.matchAll(/from\s+"(@\/[^"]+|\.[^"]+)"/g)) {
      const spec = m[1];
      const base = spec.startsWith("@/")
        ? path.join(SRC, spec.slice(2))
        : path.resolve(path.dirname(f), spec);
      for (const cand of [base, `${base}.tsx`, `${base}.ts`]) {
        if (
          fs.existsSync(cand) &&
          fs.statSync(cand).isFile() &&
          /\.(tsx|ts)$/.test(cand) &&
          !seen.has(cand)
        ) {
          seen.add(cand);
          files.push(cand);
          queue.push(cand);
        }
      }
    }
  }
  for (const f of files) {
    const src = fs.readFileSync(f, "utf8");
    for (const m of src.matchAll(/\bid=("[^"]+"|\{`[^`]+`\})/g)) {
      let val = m[1];
      if (val.startsWith("{")) {
        val = val.slice(1, -1); // strip braces of `id={`...`}`
        val = val.replace(/^`|`$/g, "");
        if (val.includes("${")) continue; // dynamic id, cannot verify
      } else {
        val = val.slice(1, -1); // strip quotes
      }
      ids.add(val);
    }
    if (regexKind === "alsoObjectIds") {
      for (const m of src.matchAll(/\bid:\s*["'`]([^"'`]+)["'`]/g)) ids.add(m[1]);
    }
  }
  return { ids, files };
}

/* ------------------------------------------ 1. CSS class reference checks */

/** referenced[varName per (file,module)] -> union of referenced classes */
const moduleUsage = new Map(); // absCssPath -> Set of referenced class names

for (const file of codeFiles.filter((f) => f.endsWith(".tsx"))) {
  const { refSource, imports } = moduleImportsFor(file);
  if (imports.length === 0) continue;
  for (const mod of imports) {
    if (mod.classNames === null) {
      warn(`[css] ${rel(file)}: imports missing module ${rel(mod.abs)}`);
      continue;
    }
    if (!moduleUsage.has(mod.abs)) moduleUsage.set(mod.abs, new Set());
    const used = moduleUsage.get(mod.abs);
    const refRe = new RegExp(`\\b${mod.varName}\\.(-?[A-Za-z_][A-Za-z0-9_-]*)`, "g");
    let m;
    while ((m = refRe.exec(refSource)) !== null) {
      used.add(m[1]);
      if (!mod.classNames.has(m[1])) {
        warn(
          `[css] ${rel(file)}: class "${m[1]}" referenced via ${mod.varName} is NOT defined in ${rel(mod.abs)}`
        );
      }
    }
  }
}

// Defined but never referenced (dead classes) — informational.
for (const cssPath of cssModules) {
  const defined = classNamesInCss(cssPath);
  const used = moduleUsage.get(cssPath);
  const imported = [...moduleUsage.keys()].includes(cssPath);
  if (!imported) {
    note(`[css] module never imported by any component: ${rel(cssPath)}`);
    continue;
  }
  const dead = [...defined].filter((c) => !used.has(c));
  if (dead.length) {
    note(`[css] unused classes in ${rel(cssPath)}: ${dead.join(", ")}`);
  }
}

/* -------------------------------------------------- 2. hub.sections anchors */

const hubsPath = path.join(SRC, "data", "hubs.ts");
const hubsSrc = fs.readFileSync(hubsPath, "utf8");

function parseHubs() {
  const hubs = [];
  const hubRe =
    /id:\s*"([^"]+)",[\s\S]*?href:\s*"([^"]+)"[\s\S]*?sections:\s*\[([\s\S]*?)\]\s*,?\s*\}/g;
  let m;
  while ((m = hubRe.exec(hubsSrc)) !== null) {
    const ids = [...m[3].matchAll(/id:\s*"([^"]+)"/g)].map((x) => x[1]);
    hubs.push({ id: m[1], href: m[2], sections: ids });
  }
  return hubs;
}

const hubs = parseHubs();
if (hubs.length !== 10) {
  warn(`[hubs] expected 10 hubs parsed from hubs.ts, got ${hubs.length}`);
}

const pageForRoute = (route) => {
  if (route === "/") return path.join(SRC, "app", "page.tsx");
  return path.join(SRC, "app", route, "page.tsx");
};

for (const hub of hubs) {
  const pageFile = pageForRoute(hub.href);
  if (!fs.existsSync(pageFile)) {
    warn(`[hubs] ${hub.href}: page file missing`);
    continue;
  }
  const { ids: idPool } = collectPagePool(pageFile, "alsoObjectIds");
  const missing = hub.sections.filter((section) => !idPool.has(section));
  if (missing.length) {
    for (const section of missing) {
      warn(`[anchor] ${hub.href}: hub.sections anchor "#${section}" has no matching id in page`);
    }
  } else {
    ok(`[anchor] ${hub.href}: ${hub.sections.length} section anchors verified`);
  }
}

/* ------------------------------------------- 3/4. anchors + internal links */

const routeDirs = fs
  .readdirSync(path.join(SRC, "app"), { withFileTypes: true })
  .filter((e) => e.isDirectory() && !e.name.startsWith("_"))
  .map((e) => e.name)
  .filter((n) => fs.existsSync(path.join(SRC, "app", n, "page.tsx")));

const routeSet = new Set(["/", ...routeDirs.map((d) => `/${d}`)]);

const anchorRe = /(?:href=|href:\s*)["'`](#[^"'`]+)["'`]/g;
const linkRe = /(?:href=|href:\s*)["'`](\/[A-Za-z0-9\-/#]*)["'`]/g;

/** Which page files (probably) render this component file? */
function pagesRendering(componentFile) {
  const base = path.basename(componentFile, path.extname(componentFile));
  const pages = [];
  for (const route of routeSet) {
    const pf = pageForRoute(route);
    if (fs.readFileSync(pf, "utf8").includes(base)) pages.push(pf);
  }
  return pages;
}

for (const file of codeFiles.filter((f) => f.endsWith(".tsx"))) {
  const src = fs.readFileSync(file, "utf8");

  // In-page literal anchors
  for (const m of src.matchAll(anchorRe)) {
    const anchor = m[1].slice(1);
    const relToApp = path.relative(path.join(SRC, "app"), file);
    let pageFiles = [];
    if (relToApp.endsWith("page.tsx") && !relToApp.startsWith("..")) {
      pageFiles = [file];
    } else if (relToApp.startsWith("..")) {
      pageFiles = pagesRendering(file);
    }
    for (const pageFile of pageFiles) {
      const { ids } = collectPagePool(pageFile);
      if (!ids.has(anchor)) {
        warn(`[anchor] ${rel(file)}: "#${anchor}" has no matching id in ${rel(pageFile)}`);
      }
    }
  }

  // Literal internal route links
  for (const m of src.matchAll(linkRe)) {
    const href = m[1];
    const [route, anchor] = href.split("#");
    if (!routeSet.has(route)) {
      warn(`[link] ${rel(file)}: internal link "${href}" does not match any route (${[...routeSet].join(", ")})`);
      continue;
    }
    if (anchor) {
      const pf = pageForRoute(route);
      const { ids } = collectPagePool(pf);
      if (!ids.has(anchor)) {
        warn(`[link] ${rel(file)}: "${href}" anchor "#${anchor}" not found in ${rel(pf)}`);
      }
    }
  }
}

ok(`[link] routes discovered: ${[...routeSet].join(", ")}`);

/* ------------------------------------------------- 5. form / mailto checks */

// Resolvable email constants (ground truth: site.ts + THONGTIN §3).
const KNOWN_EMAILS = new Set([
  "inntechclub@gmail.com", // club inbox (src/data/site.ts)
  "nlchai@ntt.edu.vn", // president contact (THONGTIN §3, used on /about)
]);
const CLUB_EMAIL = "inntechclub@gmail.com";

/** Resolve simple const chains in a file (const x = "…"; const x = y;). */
function constMapFor(file) {
  const map = new Map();
  const src = fs.readFileSync(file, "utf8");
  for (const m of src.matchAll(/const\s+(\w+)\s*=\s*"([^"]*)"/g)) map.set(m[1], m[2]);
  for (const m of src.matchAll(/const\s+(\w+)\s*=\s*(\w+);/g)) {
    if (!map.has(m[1]) && map.has(m[2])) map.set(m[1], map.get(m[2]));
  }
  return map;
}

/** Map of imported name -> value for "@/data/site" (and "@/data/metadata"). */
function importBindingMap(file) {
  const map = new Map();
  const src = fs.readFileSync(file, "utf8");
  for (const m of src.matchAll(
    /import\s*\{([^}]+)\}\s*from\s*"(@\/data\/[^"]+|@\/components\/[^"]+)"/g
  )) {
    const names = m[1].split(",").map((s) => s.trim().split(/\s+as\s+/)[0]).filter(Boolean);
    const spec = m[2];
    const abs = path.join(SRC, spec.slice(2));
    for (const name of names) {
      const candidate = [abs, `${abs}.ts`, `${abs}.tsx`].find(
        (c) => fs.existsSync(c) && fs.statSync(c).isFile()
      );
      if (candidate) {
        const cm = constMapFor(candidate);
        if (cm.has(name)) map.set(name, cm.get(name));
      }
    }
  }
  return map;
}

function resolveRecipient(file, raw) {
  const name = raw.startsWith("${") ? raw.slice(2, -1) : raw;
  if (!/^\w+$/.test(name)) return raw; // literal string
  const bindings = importBindingMap(file);
  if (bindings.has(name)) return bindings.get(name);
  const cm = constMapFor(file);
  if (cm.has(name)) return cm.get(name);
  return null; // unresolvable
}

const mailtos = [];
for (const file of codeFiles) {
  const src = fs.readFileSync(file, "utf8");
  // Only quoted string literals; skips regex literals like /^(mailto:|tel:)/.
  for (const m of src.matchAll(/["'`]mailto:([^"'`]+)["'`]/g)) {
    const full = m[1];
    const rawTo = full.split("?")[0].trim();
    const params = full.includes("?") ? full.slice(full.indexOf("?") + 1) : "";
    mailtos.push({ file: rel(file), rawTo, params });
  }
  if (/\bfetch\s*\(|XMLHttpRequest|axios/.test(src) && src.includes("mailto:")) {
    warn(`[form] ${rel(file)}: network call detected in file with mailto form/link`);
  }
}

const apiDir = path.join(SRC, "app", "api");
if (fs.existsSync(apiDir)) {
  warn("[form] src/app/api exists — server endpoints were added");
} else {
  ok("[form] no src/app/api routes; forms are mailto-based");
}

for (const m of mailtos) {
  const fileAbs = path.join(ROOT, m.file);
  const resolved = resolveRecipient(fileAbs, m.rawTo);
  if (resolved === null) {
    // Recipients passed as component props (e.g. RequestForm's `to`) are
    // verified at every call site by the RequestForm contract check below.
    const propName = m.rawTo.startsWith("${") ? m.rawTo.slice(2, -1) : null;
    const srcHere = fs.readFileSync(fileAbs, "utf8");
    if (propName && new RegExp(`\\b${propName}\\s*:\\s*string\\b`).test(srcHere)) {
      note(`[form] ${m.file}: mailto recipient is prop "${propName}" — verified at call sites`);
      continue;
    }
    warn(`[form] ${m.file}: mailto recipient "${m.rawTo}" could not be resolved statically`);
    continue;
  }
  if (!KNOWN_EMAILS.has(resolved)) {
    warn(`[form] ${m.file}: mailto target "${resolved}" is not a known/sourced address`);
  }
}

ok(
  `[form] mailto targets: ${[
    ...new Set(
      mailtos
        .map((m) => resolveRecipient(path.join(ROOT, m.file), m.rawTo))
        .filter(Boolean)
    ),
  ].join(", ")}`
);

// RequestForm contract: every call site passes to=<club email> + a subject.
const requestFormFiles = codeFiles.filter((f) =>
  fs.readFileSync(f, "utf8").includes("<RequestForm")
);
for (const file of requestFormFiles) {
  const src = fs.readFileSync(file, "utf8");
  const callRe = /<RequestForm([\s\S]*?)\/>/g;
  let m;
  let calls = 0;
  while ((m = callRe.exec(src)) !== null) {
    calls++;
    const props = m[1];
    const toMatch = props.match(/\bto=\{([^}]*)\}/);
    const subjectMatch = props.match(/\bsubject="([^"]*)"/);
    if (!toMatch) {
      warn(`[form] ${rel(file)}: RequestForm call missing required "to" prop`);
    } else {
      const resolved = resolveRecipient(file, toMatch[1].trim());
      if (resolved === null) {
        warn(`[form] ${rel(file)}: RequestForm "to={${toMatch[1].trim()}}" could not be resolved`);
      } else if (resolved !== CLUB_EMAIL) {
        warn(`[form] ${rel(file)}: RequestForm "to" resolves to "${resolved}" (expected ${CLUB_EMAIL})`);
      }
    }
    if (!subjectMatch) {
      warn(`[form] ${rel(file)}: RequestForm call missing "subject" prop (per-hub subjects required)`);
    }
  }
  if (calls) {
    ok(`[form] ${rel(file)}: ${calls} RequestForm call(s) checked (to + subject contract)`);
  }
}

/* ------------------------------------- 6. marketplace "Mẫu" badge duplication */

const mpPage = path.join(SRC, "app", "marketplace", "page.tsx");
const mpSrc = fs.readFileSync(mpPage, "utf8");
const dataFile = path.join(SRC, "data", "marketplace.ts");
const dataSrc = fs.readFileSync(dataFile, "utf8");

const MAU = "M[\\u1EA0-\\u1EFF]u"; // M + any Vietnamese-diacritic a + u (locator)
const CORRECT_MAU = "M\u1EABu"; // the Vietnamese word "mẫu" (ẫ = U+1EAB, ngã tone)

// The badge must be spelled with the correct diacritic everywhere it appears.
for (const file of codeFiles) {
  const src = fs.readFileSync(file, "utf8");
  for (const m of src.matchAll(new RegExp(`"(${MAU})"`, "g"))) {
    if (m[1] !== CORRECT_MAU) {
      const cps = [...m[1]].map((c) => "U+" + c.codePointAt(0).toString(16)).join(" ");
      warn(
        `[marketplace] ${rel(file)}: badge word "${m[1]}" (${cps}) is not the correct Vietnamese word (expected ${CORRECT_MAU})`
      );
    }
  }
}

const sampleCount = [...dataSrc.matchAll(/sample:\s*true/g)].length;
const cleanStrip = new RegExp(
  `item\\.sample\\s*&&\\s*item\\.badge\\s*===\\s*"${MAU}"\\s*\\?\\s*\\{\\s*\\.\\.\\.item,\\s*badge:\\s*undefined\\s*\\}`
).test(mpSrc);

if (!cleanStrip) {
  warn('[marketplace] sample "Mẫu" badge stripping not found in marketplace/page.tsx');
} else {
  ok(`[marketplace] ${sampleCount} sample products get their "Mẫu" data badge stripped before rendering`);
}

// HubCard must render exactly one sample-driven badge + one badge-prop badge.
const hubCardSrc = fs.readFileSync(path.join(SRC, "components", "hub", "hub-card.tsx"), "utf8");
const badgeSpans = [...hubCardSrc.matchAll(new RegExp(`item\\.sample\\s*&&\\s*<span[^>]*>\\s*${MAU}\\s*<\\/span>`, "g"))];
const badgeFromItemBadge = [...hubCardSrc.matchAll(/item\.badge\s*&&\s*<span[^>]*>\{item\.badge\}/g)];
if (badgeSpans.length !== 1 || badgeFromItemBadge.length !== 1) {
  warn("[marketplace] HubCard badge logic changed; re-verify single 'Mẫu' per sample card");
} else {
  ok("[marketplace] HubCard renders one 'Mẫu' badge per sample card (sample-driven, badge prop separate)");
}

// The group-level badge in the sample section heading is allowed (exactly 1).
const groupBadges = [...mpSrc.matchAll(new RegExp(`<span[^>]*>${MAU}<\\/span>`, "g"))].length;
if (groupBadges > 1) {
  warn(`[marketplace] ${groupBadges} group-level "Mẫu" badges in marketplace/page.tsx (expected at most 1)`);
}

/* --------------------------------------------------------- Next 16 hygiene */

for (const file of codeFiles) {
  const src = fs.readFileSync(file, "utf8");
  if (/useSearchParams\s*\(/.test(src)) {
    warn(`[next16] ${rel(file)}: useSearchParams used (must be static-only platform)`);
  }
  if (/<Image[\s\S]*?\spriority[\s>/]/.test(src)) {
    warn(`[next16] ${rel(file)}: <Image priority> is deprecated in Next 16 — use preload`);
  }
}

/* ------------------------------------------- 7. one h1 per page + metadata */

for (const route of routeSet) {
  const pf = pageForRoute(route);
  const { files } = collectPagePool(pf);
  let h1 = 0;
  for (const f of files) {
    const s = fs.readFileSync(f, "utf8");
    h1 += [...s.matchAll(/<h1[\s>]/g)].length;
  }
  if (h1 !== 1) {
    warn(`[a11y] ${route}: expected exactly 1 <h1>, found ${h1}`);
  } else {
    ok(`[a11y] ${route}: single <h1>`);
  }
  const pfSrc = fs.readFileSync(pf, "utf8");
  // "/" inherits root layout metadata; every hub page must define its own.
  const metaSources =
    route === "/" ? [pfSrc, fs.readFileSync(path.join(SRC, "app", "layout.tsx"), "utf8")] : [pfSrc];
  const hasMeta = metaSources.some(
    (s) => /export\s+const\s+metadata|generateMetadata/.test(s) || /from\s+"@\/data\/metadata"/.test(s)
  );
  if (!hasMeta) {
    warn(`[meta] ${route}: no static metadata export found`);
  } else {
    ok(`[meta] ${route}: static metadata present`);
  }
}

/* ------------------------------------------------------------------ output */

console.log("=== INNTECH platform static verification ===\n");
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
if (notes.length) {
  console.log(`NOTES (informational, not failures) (${notes.length}):`);
  for (const line of notes) console.log("  ℹ " + line);
  console.log("");
}
if (!problems.length) {
  console.log("No problems found.");
}
process.exitCode = problems.length ? 1 : 0;
