/** @type {import('pm2').StartOptions} */
module.exports = {
  apps: [
    {
      name: 'vorngames-api',
      cwd: __dirname,
      script: 'dist/main.js',
      instances: 1,
      exec_mode: 'fork',
      autorestart: true,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
      },
    },
  ],
};
