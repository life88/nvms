import { execSync } from 'child_process';
import * as fs from 'fs';
import path from 'pathe';

function readNodeVersion(cwd: string) {
  try {
    return fs.readFileSync(path.resolve(cwd, '.nvmrc')).toString();
  } catch (e) {
    console.log('Failed to read .nvmrc file:', e);
    process.exit(0);
  }
}

function switchNodeVersion(version: string) {
  try {
    execSync(`nvm use ${version}`, { stdio: 'inherit' });
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

export { run };
