const fs = require("fs");
const path = require("path");
const { spawnSync } = require("child_process");

const root = path.join(__dirname, "..");
const vendor = path.join(root, "vendor", "react-umd");

const built = spawnSync(process.execPath, [path.join(__dirname, "build-react-umd.js")], {
  cwd: root,
  stdio: "inherit",
});
if (built.status !== 0) {
  process.exit(built.status || 1);
}

const copies = [
  ["react.production.min.js", "react"],
  ["react-dom.production.min.js", "react-dom"],
];

for (const [file, pkg] of copies) {
  const destDir = path.join(root, "node_modules", pkg, "umd");
  const src = path.join(vendor, file);
  if (!fs.existsSync(src)) {
    console.warn(`ensure-react-umd: missing ${src}`);
    continue;
  }
  if (!fs.existsSync(path.join(root, "node_modules", pkg))) {
    continue;
  }
  fs.mkdirSync(destDir, { recursive: true });
  fs.copyFileSync(src, path.join(destDir, file));
}
