var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  run: () => run
});
module.exports = __toCommonJS(src_exports);
var import_child_process = require("child_process");
var fs = __toESM(require("fs"));
var import_pathe = __toESM(require("pathe"));
function readNodeVersion(cwd) {
  const rcPath = import_pathe.default.resolve(cwd, ".nvmrc");
  if (fs.existsSync(rcPath)) {
    return fs.readFileSync(rcPath).toString();
  } else {
    console.log("No .nvmrc file found.");
    process.exit(0);
  }
}
function switchNodeVersion(version) {
  try {
    (0, import_child_process.execSync)(`nvm use ${version}`, { stdio: "inherit" });
  } catch (e) {
    console.error(`Failed to switch to Node version ${version}:`, e);
    process.exit(0);
  }
}
function run() {
  const cwd = process.cwd();
  const version = readNodeVersion(cwd);
  switchNodeVersion(version);
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  run
});
