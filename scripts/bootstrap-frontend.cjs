const { spawnSync } = require('child_process');
const path = require('path');
const fs = require('fs');

const frontendRoot = path.resolve(__dirname, '..', '..', 'frontend');
const backendRoot = path.resolve(__dirname, '..');
const npmCommand = process.platform === 'win32' ? 'npm.cmd' : 'npm';

function copyDir(sourcePath, destinationPath) {
  if (!fs.existsSync(sourcePath)) {
    return;
  }

  fs.rmSync(destinationPath, { recursive: true, force: true });
  fs.cpSync(sourcePath, destinationPath, { recursive: true });
}

function run(command, args) {
  const result = spawnSync(command, args, {
    stdio: 'inherit',
    cwd: frontendRoot,
  });

  if (result.status !== 0) {
    const exitCode = typeof result.status === 'number' ? result.status : 1;
    process.exit(exitCode);
  }
}

run(npmCommand, ['install']);
run(npmCommand, ['run', 'build']);

copyDir(path.join(frontendRoot, 'dist'), path.join(backendRoot, 'dist'));
copyDir(path.join(frontendRoot, 'public'), path.join(backendRoot, 'public'));