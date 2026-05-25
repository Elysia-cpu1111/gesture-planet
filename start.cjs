const { spawn } = require('child_process');
const path = require('path');

const viteBin = path.join(__dirname, 'node_modules', '.bin', 'vite');

const p = spawn('node', [viteBin, '--host', '--clearScreen', 'false'], {
  cwd: __dirname,
  env: {
    ...process.env,
    PORT: '5173',
    NO_PROXY: '*',
    HTTPS_PROXY: '',
    HTTP_PROXY: '',
  },
  stdio: 'inherit',
});

p.on('exit', (code) => {
  console.log('Vite exited with code:', code);
  process.exit(code || 0);
});

process.on('SIGTERM', () => p.kill());
process.on('SIGINT', () => p.kill());
