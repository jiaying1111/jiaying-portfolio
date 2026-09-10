/**
 * PM2 process file for Tencent Cloud Lighthouse (China mirror).
 * Usage on server: pm2 start deploy/ecosystem.config.cjs
 */
module.exports = {
  apps: [
    {
      name: "portfolio",
      cwd: "/var/www/jiaying-portfolio",
      script: "node_modules/next/dist/bin/next",
      args: "start -p 3000",
      instances: 1,
      exec_mode: "fork",
      env: {
        NODE_ENV: "production",
        PORT: 3000,
      },
      max_memory_restart: "512M",
      time: true,
    },
  ],
};
