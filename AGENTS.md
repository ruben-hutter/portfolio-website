# Portfolio Website - Project Context

## What is this?
Personal portfolio website for Ruben Hutter, built with Astro and Tailwind CSS.
Live at [rubenhutter.ch](https://rubenhutter.ch).

## Tech Stack
| Layer | Tech |
|:---|:---|
| Framework | **Astro** |
| Styling | **Tailwind CSS** |
| Hosting | **VPS** (buba) — Ubuntu 26.04 |
| Container runtime | **Podman** + Quadlet (systemd user unit) |
| Container server | **nginx** (alpine) — serves static files with security headers |
| Reverse proxy | **Caddy** — automatic HTTPS, reverse proxy to container |
| Analytics | TBD (GoatCounter planned) |

## i18n
Multilingual with locales: `en`, `de`, `fr`, `it`. English is default (no prefix).

## Server (buba)
- SSH: key-only auth, port 22
- Firewall: UFW (22/80/443)
- Caddy reverse-proxies to Podman container on `localhost:8080`
- Container: nginx (alpine) serves static files with security headers
- Quadlet unit: `~/.config/containers/systemd/portfolio.container`
- Deploy: git pull + podman build + container restart via `deploy.sh`
- Unattended security upgrades: active
- See TODO.md for outstanding server tasks

## Git & Branching
- `master` branch = production
- Commit messages in English, imperative mood
- Always run lint/typecheck before committing

## Build & Dev Commands
- `npm run dev` — dev server at localhost:4321
- `npm run build` — production build to `./dist/`
- `npm run preview` — preview production build locally

## Working Conventions
- Follow `TODO.md` for current priorities
- `plans/` directory contains research/plan documents for upcoming work
- GitHub issues track actionable items
- Use `/next` command to pick up the next issue and create a plan

## Screenshots
Screenshots are saved to `~/Pictures/Screenshots/`.
