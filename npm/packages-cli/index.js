#!/usr/bin/env node
const fs = require("fs");
const path = require("path");
const prettier = require("prettier");
let prettierrc = path.join(process.cwd(),".prettierrc")
const prettierConfigPath = require.resolve(prettierrc);
const chalk = require("chalk");

const inDirectoryPath = path.join(process.cwd(), "packages");
const outDirectoryPath = path.join(__dirname, ".packages", "packages.js");
const outDirectoryMtaPath = path.join(__dirname, ".packages", "packages.meta.js");

function createPackagesCode(mName) {
  return `
  export const ${createVarName(mName)} = () => {
    return import("@package/${mName}");
  };
`;
}

function createVarName(mName) {
  return mName.match(/[a-z0-9]+/g, "").join("");
}

function getPackagesMeta(mName) {
  let mNamePath = path.resolve(process.cwd(), "packages", mName, "package.json");
  let meta = {
    icon: "",
    text: "未知",
    coName: ""
  };
  try {
    let file = fs.readFileSync(mNamePath, { encoding: "utf8" });
    let json = JSON.parse(file);
    let { componentMeta = {} } = json;
    // meta = Object.assign(meta, componentMeta);
    meta["text"] = componentMeta.name || "未知";
    meta["coName"] = createVarName(mName);
    return meta;
  } catch (error) {
    console.error("文件解析失败，检查文件是否存在！");
  }
  return meta;
}

function prettierFiles(files = []) {
  let didError = false;

  files.forEach((file) => {
    const options = prettier.resolveConfig.sync(file, {
      config: prettierConfigPath
    });
    const fileInfo = prettier.getFileInfo.sync(file);
    if (fileInfo.ignored) {
      return;
    }
    try {
      const input = fs.readFileSync(file, "utf8");
      const withParserOptions = {
        ...options,
        parser: fileInfo.inferredParser
      };
      const output = prettier.format(input, withParserOptions);
      if (output !== input) {
        fs.writeFileSync(file, output, "utf8");
        console.log(chalk.green(`prettier ${file}`));
      }
    } catch (e) {
      didError = true;
    }
  });

  if (didError) {
    process.exit(1);
  }
}

function bootstrap() {
  let code = "";
  let metas = [];
try {
  fs.readdirSync(inDirectoryPath).filter((mName) => {
    if (fs.statSync(path.join(inDirectoryPath, mName)).isDirectory()) {
      // packages.js
      code += createPackagesCode(mName);
      // packages.meta.js
      let meta = getPackagesMeta(mName);
      metas.push(meta);
    }
  });

  fs.writeFileSync(outDirectoryPath, code);
  console.log(chalk.hex("#1890FF")(`created ${outDirectoryPath}`));
  fs.writeFileSync(outDirectoryMtaPath, `export default ${JSON.stringify([{ title: "开打", items: metas }])}`);
  console.log(chalk.hex("#1890FF")(`created ${outDirectoryMtaPath}`));
  prettierFiles([outDirectoryPath, outDirectoryMtaPath]);
  console.log(chalk.hex("#1890FF")("file created success!"));
} catch (error) {
  throw error
}
}


bootstrap();
