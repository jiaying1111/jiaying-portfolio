#!/bin/bash
cd "$(dirname "$0")"
export PATH="/usr/local/bin:/opt/homebrew/bin:$PATH"
if [ -s "$HOME/.nvm/nvm.sh" ]; then
  # shellcheck source=/dev/null
  . "$HOME/.nvm/nvm.sh"
  nvm use 2>/dev/null || true
fi
if [ ! -f package.json ]; then
  echo "找不到 package.json。请用完整作品集项目打开此文件夹（含 src/、public/）。"
  echo "Missing package.json — restore the full jiaying-portfolio repo here first."
  read -r -p "Press Enter to close…"
  exit 1
fi
if [ ! -f node_modules/next/dist/server/lib/start-server.js ]; then
  echo "Installing dependencies…"
  if [ -f package-lock.json ]; then npm ci; else npm install; fi || exit 1
fi
echo "Starting preview at http://localhost:3005"
echo "Press Ctrl+C to stop."
open "http://localhost:3005/artwork/future-reality" 2>/dev/null || true
exec npx next dev -p 3005
