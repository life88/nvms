"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.run = void 0;
const child_process_1 = require("child_process");
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
function readNodeVersion(cwd) {
    const rcPath = path.resolve(cwd, '.nvmrc');
    if (fs.existsSync(rcPath)) {
        return fs.readFileSync(rcPath).toString();
    }
    else {
        console.log('No .nvmrc file found.');
        process.exit(0);
    }
}
function switchNodeVersion(version) {
    try {
        (0, child_process_1.execSync)(`nvm use ${version}`, { stdio: 'inherit' });
    }
    catch (e) {
        console.error(`Failed to switch to Node version ${version}:`, e);
        process.exit(0);
    }
}
function run() {
    const cwd = process.cwd();
    const version = readNodeVersion(cwd);
    switchNodeVersion(version);
}
exports.run = run;
