/**
 * Static verification for the site-wide reveal animation (read-only).
 *
 * Guards:
 *  1. globals.css exposes the approved tokens, drops the old 1.05s timing,
 *     hides stagger children only while unrevealed, and ships print /
 *     reduced-motion / failsafe / instant overrides.
 *  2. scroll-reveal.tsx uses the current selector, top-edge trigger, scope
 *     grouping, focusin / hashchange / visibilitychange handling, failsafe
 *     handshake, breakpoint re-observe and full cleanup.
 *  3. layout.tsx installs the 3s beforeInteractive failsafe script.
 *  4. Shared hub components carry the reveal attributes.
 *  5. Home uses hero variants, 4 reveal scopes and token-based delays.
 *  6. Header/footer/sub-nav/library browser stay animation-free, and no
 *     reveal attribute sits inside the library <Suspense> boundary.
 *  7. All 11 routes mount ScrollReveal.
 *  8. No animation library was added.
 *  9. package.json verify runs this script.
 *
 * Run: node tests/verify-reveal.js
 */

const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");

const problems = [];
const info = [];

const warn = (msg) => problems.push(msg);
const ok = (msg) => info.push(msg);

const read = (file) =>
  fs.existsSync(path.join(ROOT, file))
    ? fs.readFileSync(path.join(ROOT, file), "utf8")
    : "";

/** Extract the body of the first block that starts with `marker`. */
function blockAfter(source, marker) {
  const start = source.indexOf(marker);
  if (start === -1) return "";

  const open = source.indexOf("{", start);
  if (open === -1) return "";

  let depth = 0;
  for (let index = open; index < source.length; index += 1) {
    if (source[index] === "{") depth += 1;
    if (source[index] === "}") {
      depth -= 1;
      if (depth === 0) return source.slice(open + 1, index);
    }
  }

  return source.slice(open + 1);
}

const css = read("src/app/globals.css");
const scrollReveal = read("src/components/scroll-reveal.tsx");
const layout = read("src/app/layout.tsx");
const home = read("src/app/page.tsx");
const homeCss = read("src/app/page.module.css");
const marketplace = read("src/app/marketplace/page.tsx");
const filterGrid = read("src/components/hub/filter-grid.tsx");
const libraryBrowser = read("src/app/kho-tai-lieu/library-browser.tsx");
const libraryPage = read("src/app/kho-tai-lieu/page.tsx");

/* ------------------------------------------------------- 1. globals.css */

const cssTokens = [
  ["--reveal-duration", "700ms"],
  ["--reveal-stagger", "70ms"],
  ["--reveal-ease", "cubic-bezier(0.22, 0.61, 0.36, 1)"],
  ["--reveal-delay-cap", "420ms"],
  ["--reveal-hero-duration", "700ms"],
  ["--reveal-hero-title-opacity", "0.3"],
  ["--reveal-hero-visual-opacity", "0.6"],
];

const escapeRe = (value) => value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

for (const [token, value] of cssTokens) {
  if (!new RegExp(`${escapeRe(token)}:\\s*${escapeRe(value)}`).test(css)) {
    warn(`[css] missing token ${token}: ${value}`);
  }
}

for (const keyframe of ["revealHeroTitle", "revealHeroVisual"]) {
  if (!new RegExp(`@keyframes\\s+${keyframe}\\b`).test(css)) {
    warn(`[css] missing @keyframes ${keyframe}`);
  }
}

const h1Block = blockAfter(css, "[data-hero] > h1:nth-child(n)");
if (!/animation-delay:\s*var\(--reveal-hero-stagger\)/.test(h1Block)) {
  warn("[css] hero h1 must start at var(--reveal-hero-stagger) (60ms)");
}

const instantBlock = blockAfter(css, "[data-reveal].is-instant");
if (!/animation-duration:\s*0ms/.test(instantBlock)) {
  warn("[css] .is-instant must zero animation-duration");
}
if (!/animation-delay:\s*0ms/.test(instantBlock)) {
  warn("[css] .is-instant must zero animation-delay");
}

if (/1\.05s/.test(css)) {
  warn("[css] old 1.05s timing is still present");
}

if (!/\[data-reveal-stagger\]:not\(\.is-revealed\)\s*>\s*\*/.test(css)) {
  warn("[css] missing stagger hidden state");
}

if (!/nth-child\(n\+8\)/.test(css)) {
  warn("[css] missing stagger cap selector nth-child(n+8)");
}

if (!/var\(--reveal-delay-cap\)/.test(css)) {
  warn("[css] stagger cap does not use var(--reveal-delay-cap)");
}

const printBlock = blockAfter(css, "@media print");
if (!printBlock.includes("[data-reveal-stagger] > *")) {
  warn("[css] print override missing stagger children");
}
if (!printBlock.includes("[data-hero]")) {
  warn("[css] print override missing hero");
}

const reducedBlock = blockAfter(css, "@media (prefers-reduced-motion: reduce)");
if (!reducedBlock.includes("[data-hero]")) {
  warn("[css] prefers-reduced-motion override missing hero");
}

if (!/html\.reveal-fallback/.test(css)) {
  warn("[css] missing html.reveal-fallback override");
}

if (problems.length === 0) {
  ok("[css] tokens, stagger, print/reduced/fallback overrides");
}

/* -------------------------------------------------- 2. scroll-reveal.tsx */

const revealChecks = [
  ["selector data-reveal-stagger", /data-reveal-stagger/],
  ["threshold 0", /threshold:\s*0\b/],
  ["focusin", /focusin/],
  ["hashchange", /hashchange/],
  ["visibilitychange", /visibilitychange/],
  ["legacy addListener fallback", /addListener/],
  ["revealActive handshake", /revealActive/],
  ["failsafe timer handshake", /__revealFailsafeTimer/],
  ["observer cleanup", /disconnect\(\)/],
];

for (const [label, pattern] of revealChecks) {
  if (!pattern.test(scrollReveal)) {
    warn(`[scroll-reveal] missing ${label}`);
  }
}

if (problems.length === 0) {
  ok("[scroll-reveal] selector, triggers, failsafe, cleanup");
}

/* --------------------------------------------------------- 3. layout.tsx */

if (!/strategy="beforeInteractive"/.test(layout)) {
  warn('[layout] missing strategy="beforeInteractive"');
}
if (!/reveal-fallback/.test(layout)) {
  warn("[layout] failsafe script does not add reveal-fallback");
}
if (!/3000/.test(layout)) {
  warn("[layout] failsafe script must fire after 3000ms");
}
if (!/dataset\.revealActive\s*!==\s*"1"/.test(layout)) {
  warn('[layout] failsafe script must check dataset.revealActive!=="1"');
}
if (problems.length === 0) {
  ok("[layout] beforeInteractive failsafe script");
}

/* --------------------------------------------------- 4. shared components */

const componentChecks = [
  ["hub-hero data-hero", "src/components/hub/hub-hero.tsx", /data-hero/],
  [
    "hub-hero data-hero-visual",
    "src/components/hub/hub-hero.tsx",
    /data-hero-visual/,
  ],
  [
    "section-heading data-reveal",
    "src/components/hub/section-heading.tsx",
    /data-reveal/,
  ],
  [
    "cross-hub-cta data-reveal",
    "src/components/hub/cross-hub-cta.tsx",
    /data-reveal/,
  ],
  [
    "request-form data-reveal",
    "src/components/hub/request-form.tsx",
    /data-reveal/,
  ],
  ["filter-grid data-reveal", "src/components/hub/filter-grid.tsx", /data-reveal/],
  [
    "filter-grid data-reveal-stagger",
    "src/components/hub/filter-grid.tsx",
    /data-reveal-stagger/,
  ],
  [
    "hub-directory data-reveal-stagger",
    "src/components/hub/hub-directory.tsx",
    /data-reveal-stagger/,
  ],
];

for (const [label, file, pattern] of componentChecks) {
  if (!pattern.test(read(file))) {
    warn(`[component] missing ${label}`);
  }
}

if (problems.length === 0) {
  ok("[components] hero, headings, cta, form, filter grid, directory");
}

/* ------------------------------------------------------------ 5. Home page */

if (!/data-hero/.test(home)) {
  warn("[home] missing data-hero");
}
if (!/data-hero-visual/.test(home)) {
  warn("[home] missing data-hero-visual");
}

const scopeCount = (home.match(/data-reveal-scope/g) || []).length;
if (scopeCount < 4) {
  warn(`[home] expected >= 4 data-reveal-scope, found ${scopeCount}`);
}

if (!/var\(--reveal-stagger\)/.test(home)) {
  warn("[home] revealDelay does not use var(--reveal-stagger)");
}
if (/70ms/.test(home)) {
  warn("[home] literal 70ms still present");
}

/* Legacy hero animation would double up with (and dim) the reveal. */
if (/fadeUp/.test(homeCss)) {
  warn("[home-css] legacy fadeUp animation/keyframes still present");
}

if (/className=\{styles\.stepsBlock\}\s+data-reveal/.test(marketplace)) {
  warn("[marketplace] stepsBlock must not wrap its stagger grid in data-reveal");
}
if (/className=\{styles\.formBlock\}\s+data-reveal/.test(marketplace)) {
  warn("[marketplace] formBlock must not duplicate RequestForm's data-reveal");
}

if (problems.length === 0) {
  ok("[home] hero variants, 4 reveal scopes, token-based delay");
}

/* ------------------------------------- 6. forbidden animation containers */

const forbidden = [
  "src/components/site-header.tsx",
  "src/components/site-footer.tsx",
  "src/components/hub/sub-nav.tsx",
  "src/app/kho-tai-lieu/library-browser.tsx",
];

for (const file of forbidden) {
  if (/data-reveal/.test(read(file))) {
    warn(`[forbidden] ${file} must not contain data-reveal`);
  }
}

const suspenseStart = libraryPage.indexOf("<Suspense");
const suspenseEnd = libraryPage.indexOf("</Suspense>");
if (suspenseStart === -1 || suspenseEnd === -1) {
  warn("[library] <Suspense> boundary not found");
} else if (
  libraryPage.slice(suspenseStart, suspenseEnd).includes("data-reveal")
) {
  warn("[library] data-reveal must not sit inside <Suspense>");
}

if (!/data-reveal-stagger/.test(filterGrid)) {
  warn("[filter-grid] results grid must use data-reveal-stagger");
}
if (!/is-instant/.test(filterGrid)) {
  warn("[filter-grid] filter changes must mark the grid is-instant");
}
if (/classList\.remove\(\s*["']is-instant["']\s*\)/.test(filterGrid)) {
  warn("[filter-grid] is-instant must persist after the first interaction");
}

if (problems.length === 0) {
  ok("[forbidden] header/footer/sub-nav/library-browser and Suspense clean");
}

/* --------------------------------------------------- 7. route coverage */

const routes = [
  "src/app/page.tsx",
  "src/app/student-hub/page.tsx",
  "src/app/learning-hub/page.tsx",
  "src/app/opportunity-hub/page.tsx",
  "src/app/project-hub/page.tsx",
  "src/app/mentor-hub/page.tsx",
  "src/app/marketplace/page.tsx",
  "src/app/community/page.tsx",
  "src/app/business-connect/page.tsx",
  "src/app/about/page.tsx",
  "src/app/kho-tai-lieu/page.tsx",
];

for (const route of routes) {
  const source = read(route);
  if (!source.includes("<ScrollReveal")) {
    warn(`[routes] ${route} does not mount ScrollReveal`);
  }
}

if (problems.length === 0) {
  ok("[routes] ScrollReveal mounted on all 11 routes");
}

/* ------------------------------------------------ 8/9. package metadata */

let pkg = null;
try {
  pkg = JSON.parse(read("package.json"));
} catch (error) {
  warn(`[package] cannot parse package.json: ${error.message}`);
}

if (pkg) {
  const installed = {
    ...(pkg.dependencies || {}),
    ...(pkg.devDependencies || {}),
  };
  const banned = ["framer-motion", "gsap", "aos", "motion", "animate.css"];

  for (const name of banned) {
    if (Object.prototype.hasOwnProperty.call(installed, name)) {
      warn(`[package] animation library "${name}" must not be added`);
    }
  }

  const verifyScript = pkg.scripts && pkg.scripts.verify;
  if (!verifyScript || !verifyScript.includes("verify-reveal.js")) {
    warn("[package] scripts.verify does not run verify-reveal.js");
  }

  if (problems.length === 0) {
    ok("[package] no animation dependency, verify script wired");
  }
}

/* ---------------------------------------------------------------- output */

console.log("=== site-wide reveal static verification ===\n");
if (info.length) {
  console.log("PASSED CHECKS:");
  for (const line of info) console.log("  PASS " + line);
  console.log("");
}
if (problems.length) {
  console.log(`PROBLEMS (${problems.length}):`);
  for (const line of problems) console.log("  FAIL " + line);
  console.log("");
}
if (!problems.length) {
  console.log("No problems found.");
}
process.exitCode = problems.length ? 1 : 0;
