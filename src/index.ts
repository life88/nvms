import { execSync } from 'child_process';
import * as fs from 'fs';
import path from 'pathe';

function readNodeVersion(cwd: string) {
  const rcPath = path.resolve(cwd, '.nvmrc');
  if (fs.existsSync(rcPath)) {
    return fs.readFileSync(rcPath).toString();
  } else {
    console.log('No .nvmrc file found.');
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
