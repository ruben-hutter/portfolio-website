# TODO

## Security & Server (VPS — buba)

Already in place:
- [x] UFW firewall — active, ports 22/80/443 only
- [x] Caddy — automatic HTTPS with auto-renewing TLS
- [x] SSH — key-only authentication (PasswordAuthentication no)
- [x] Unattended security upgrades — active
- [x] NTP — chrony running

Still to do:
- [ ] Enable Fail2ban (installed but inactive) — `sudo systemctl enable --now fail2ban`
- [ ] Add security headers in Caddy (CSP, X-Content-Type-Options, X-Frame-Options, Referrer-Policy)
- [ ] Add rate limiting in Caddy
- [ ] Consider changing SSH port from 22 (optional, reduces noise)

## Backups & Reliability

- [ ] Set up automated backups of `/home/ubuntu/portfolio/dist`
- [ ] Back up Caddy config (`/etc/caddy/Caddyfile`) and any server configs
- [ ] Back up crontabs and systemd units
- [ ] Define backup rotation and off-site storage (e.g., rsync to another machine, S3, or Borg/Restic)
- [ ] Document disaster recovery procedure (rebuild steps for the VPS)

## Monitoring & Operations

- [ ] Set up uptime monitoring (UptimeRobot free tier or self-hosted)
- [ ] Set up disk/memory usage alerting
- [ ] Set up log monitoring for suspicious activity (or use Fail2ban logs + alerts)

## Website Features

- [ ] Add analytics (GoatCounter or similar privacy-friendly option)
- [ ] Add personal page — interests, hobbies, about me (consider separate subdomain)
- [ ] Add statistics page — XContest data, paragliding stats, etc.
