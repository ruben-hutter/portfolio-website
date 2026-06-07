#!/usr/bin/env bash

set -e
cd ~/portfolio
git pull
podman build -t localhost/portfolio:latest .
systemctl --user daemon-reload
systemctl --user restart portfolio

if ! cmp -s server/Caddyfile /etc/caddy/Caddyfile; then
	sudo caddy validate --config server/Caddyfile
	sudo cp server/Caddyfile /etc/caddy/Caddyfile
	sudo systemctl reload caddy
	echo "Caddy config updated and reloaded."
fi

echo "Deployed successfully!"
