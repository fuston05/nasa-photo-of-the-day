const { spawnSync } = require('child_process');
const dotenv = require('dotenv');

dotenv.config();

const command = process.argv[2];
const supportedCommands = ['start', 'build', 'test'];

if (!supportedCommands.includes(command)) {
  console.error(`Expected one of these react-scripts commands: ${supportedCommands.join(', ')}`);
  process.exitCode = 1;
} else {
  const nodeOptions = (process.env.NODE_OPTIONS || '').trim();
  const legacyOpenSSLFlag = '--openssl-legacy-provider';
  const env = {
    ...process.env,
    NODE_OPTIONS: nodeOptions.split(/\s+/).includes(legacyOpenSSLFlag)
      ? nodeOptions
      : [nodeOptions, legacyOpenSSLFlag].filter(Boolean).join(' ')
  };
  const script = require.resolve(`react-scripts/scripts/${command}`);
  const result = spawnSync(process.execPath, [script, ...process.argv.slice(3)], {
    env,
    stdio: 'inherit'
  });

  if (result.error) {
    console.error(`Failed to run react-scripts ${command}:`, result.error);
    process.exitCode = 1;
  } else if (result.signal) {
    console.error(`react-scripts ${command} terminated by signal ${result.signal}`);
    process.exitCode = 1;
  } else {
    process.exitCode = result.status;
  }
}
