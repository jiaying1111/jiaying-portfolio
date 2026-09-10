#!/usr/bin/env bash
# One-time bootstrap on a fresh Tencent Cloud Lighthouse (Ubuntu 22.04).
# Run as root or with sudo: bash deploy/remote-setup.sh
set -euo pipefail

APP_DIR="${APP_DIR:-/var/www/jiaying-portfolio}"

export DEBIAN_FRONTEND=noninteractive
apt-get update
apt-get install -y curl ca-certificates gnupg nginx git rsync ufw

# Node 22 LTS (stable on Ubuntu; Next 16 works fine)
if ! command -v node >/dev/null 2>&1; then
  curl -fsSL https://deb.nodesource.com/setup_22.x | bash -
  apt-get install -y nodejs
fi

npm install -g pm2

mkdir -p "$APP_DIR" /var/www/certbot
ufw allow OpenSSH || true
ufw allow 80/tcp || true
ufw allow 443/tcp || true
ufw --force enable || true

echo "Node $(node -v) / npm $(npm -v)"
echo "App dir: $APP_DIR"
echo "Next: copy the repo into $APP_DIR, add .env.local, then:"
echo "  cd $APP_DIR && npm ci && npm run build"
echo "  pm2 start deploy/ecosystem.config.cjs && pm2 save && pm2 startup"
echo "  # then install nginx config from deploy/nginx-portfolio.conf"
