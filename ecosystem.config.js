module.exports = {
  apps: [
    {
      name: "bug-free-space-meme",
      script: "npm",
      args: "run start",
      instances: "max",
      exec_mode: "cluster",
      env: {
        NODE_ENV: "production",
        PORT: 3000
      },
      error_file: "logs/error.log",
      out_file: "logs/out.log",
      log_file: "logs/combined.log",
      time_format: "YYYY-MM-DD HH:mm:ss",
      merge_logs: true,
      max_memory_restart: "500M",
      restart_delay: 4000,
      max_restarts: 10,
      min_uptime: "10m",
      autorestart: true,
      watch: false,
      ignore_watch: ["node_modules", "logs", "data"],
      env_development: {
        NODE_ENV: "development"
      },
      env_production: {
        NODE_ENV: "production"
      }
    }
  ]
};
