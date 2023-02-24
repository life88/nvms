"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.run = run;
var _child_process = require("child_process");
var fs = _interopRequireWildcard(require("fs"));
var path = _interopRequireWildcard(require("path"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function readNodeVersion(cwd) {
  const rcPath = path.resolve(cwd, '.nvmrc');
  if (fs.existsSync(rcPath)) {
    return fs.readFileSync(rcPath).toString();
  } else {
    console.log('No .nvmrc file found.');
    process.exit(0);
  }
}
function switchNodeVersion(version) {
  try {
    (0, _child_process.execSync)(`nvm use ${version}`, {
      stdio: 'inherit'
    });
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