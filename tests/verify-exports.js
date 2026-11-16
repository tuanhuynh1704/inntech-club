/**
 * Report exported symbols never imported/used by any other source file.
 * (Same-file-only references and Next.js convention exports are excluded.)
 * Run: node tests/verify-exports.js
 */
const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const SRC = path.join(ROOT, "src");

function walk(dir, out = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(p, out);
    else out.push(p);
  }
  return out;
}

const files = walk(SRC).filter((f) => /\.(tsx|ts)$/.test(f));
const src = {};
for (const f of files) src[f] = fs.readFileSync(f, "utf8");

const CONVENTION = new Set(["metadata", "viewport", "generateMetadata", "dynamic", "revalidate"]);

for (const f of files) {
  const s = src[f];
  for (const m of s.matchAll(/export\s+(?:const|function|type|interface)\s+(\w+)/g)) {
    const name = m[1];
    if (CONVENTION.has(name)) continue;
    let externalUses = 0;
    for (const g of files) {
      if (g === f) continue;
      if (new RegExp("\\b" + name + "\\b").test(src[g])) externalUses++;
    }
    const localUses = (s.match(new RegExp("\\b" + name + "\\b", "g")) || []).length;
    if (externalUses === 0 && localUses <= 1) {
      console.log(
        "UNUSED-EXPORT",
        path.relative(ROOT, f).replace(/\\/g, "/"),
        name
      );
    }
  }
}
console.log("done");
