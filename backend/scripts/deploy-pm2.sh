#!/usr/bin/env bash
set -euo pipefail

cd "$(dirname "$0")/.."

echo "==> Postgres (Docker)"
docker compose -f docker-compose.postgres.yml up -d

echo "==> Dependencies & build"
npm ci
npx prisma migrate deploy
npm run build

echo "==> PM2"
if pm2 describe vorngames-api >/dev/null 2>&1; then
  pm2 reload ecosystem.config.cjs --update-env
else
  pm2 start ecosystem.config.cjs
fi

pm2 save
echo "Done. API should listen on PORT from .env (default 3000)."
