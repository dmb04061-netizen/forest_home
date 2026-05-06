const { spawnSync } = require('child_process');
const path = require('path');

const frontendRoot = path.resolve(__dirname, '..', '..', 'frontend');

function run(command, args) {
  const result = spawnSync(command, args, {
    stdio: 'inherit',
    cwd: frontendRoot,
    shell: true,
  });

  if (result.status !== 0) {
    const exitCode = typeof result.status === 'number' ? result.status : 1;
    process.exit(exitCode);
  }
}

run('npm', ['install']);
run('npm', ['run', 'build']);