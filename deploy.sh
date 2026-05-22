#!/usr/bin/env bash

set -e
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"
cd ~/portfolio
git pull
npm ci --omit=dev
npm run build
echo "Deployed successfully!"
