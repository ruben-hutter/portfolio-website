#!/usr/bin/env bash

set -e
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"
cd ~/portfolio
git pull
npm ci --omit=dev
npm run build

if ! cmp -s server/Caddyfile /etc/caddy/Caddyfile; then
  sudo caddy validate --config server/Caddyfile
  sudo cp server/Caddyfile /etc/caddy/Caddyfile
  sudo systemctl reload caddy
  echo "Caddy config updated and reloaded."
fi

echo "Deployed successfully!"
