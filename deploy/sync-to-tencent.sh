#!/usr/bin/env bash
# Sync local build artifacts + source to Tencent Lighthouse and restart PM2.
#
# Usage:
#   export CN_HOST=ubuntu@1.2.3.4
#   export CN_PATH=/var/www/jiaying-portfolio   # optional
#   ./deploy/sync-to-tencent.sh
#
# Requires: ssh key access to the Lighthouse instance.
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
CN_HOST="${CN_HOST:?Set CN_HOST, e.g. export CN_HOST=ubuntu@1.2.3.4}"
CN_PATH="${CN_PATH:-/var/www/jiaying-portfolio}"

cd "$ROOT"
npm run check

rsync -az --delete \
  --exclude '.git' \
  --exclude '.env.local' \
  --exclude '.vercel' \
  --exclude 'node_modules' \
  --exclude '.next' \
  --exclude 'public/images/home/experience-cards/.npm' \
  "$ROOT/" "$CN_HOST:$CN_PATH/"

ssh "$CN_HOST" "bash -s" <<EOF
set -euo pipefail
cd '$CN_PATH'
npm ci --omit=dev
npm run build
pm2 startOrReload deploy/ecosystem.config.cjs
pm2 save
EOF

echo "China mirror updated on $CN_HOST:$CN_PATH"
