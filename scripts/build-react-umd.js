const path = require("path");
const webpack = require("webpack");

const outDir = path.join(__dirname, "..", "vendor", "react-umd");

function compile(options) {
  return new Promise((resolve, reject) => {
    webpack(
      {
        mode: "production",
        ...options,
      },
      (err, stats) => {
        if (err) {
          reject(err);
          return;
        }
        if (stats.hasErrors()) {
          reject(
            new Error(stats.toJson().errors.map((e) => e.message).join("\n"))
          );
          return;
        }
        resolve();
      }
    );
  });
}

async function main() {
  await compile({
    entry: require.resolve("react"),
    output: {
      path: outDir,
      filename: "react.production.min.js",
      library: {
        name: "React",
        type: "umd",
      },
      globalObject: "window",
    },
  });

  await compile({
    entry: path.join(__dirname, "react-dom-umd-entry.js"),
    externals: {
      react: "React",
    },
    output: {
      path: outDir,
      filename: "react-dom.production.min.js",
      library: {
        name: "ReactDOM",
        type: "umd",
      },
      globalObject: "window",
    },
  });
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
