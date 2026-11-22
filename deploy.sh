#!/usr/bin/env bash

set -e
cd ~/portfolio
git pull
podman build --pull -t localhost/portfolio:latest .
systemctl --user daemon-reload
systemctl --user restart portfolio
echo "Deployed successfully!"
