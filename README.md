# Vorn Games

Монорепозиторий: React-фронт (`vorn-games-front`) и NestJS API (`backend`) с авторизацией через Steam.

## Требования

- Node.js 22+
- Docker (для PostgreSQL)
- [Steam Web API Key](https://steamcommunity.com/dev/apikey)

## Быстрый старт

### 1. База данных

```bash
cd backend
cp .env.example .env
# Укажите STEAM_API_KEY и JWT_SECRET в .env
docker compose up -d postgres
npm install
npm run prisma:migrate
```

PostgreSQL доступен на `localhost:5433` (порт 5433 выбран, чтобы не конфликтовать с локальным Postgres на 5432).

### 2. Backend

```bash
cd backend
npm run start:dev
```

- API: http://localhost:3000/api
- Swagger: http://localhost:3000/api/docs

### 3. Frontend

```bash
cd vorn-games-front
npm install
npm run dev
```

Фронт: http://localhost:5173 — запросы к `/api` проксируются на backend (см. `vite.config.ts`).

## Docker (API + Postgres)

```bash
cd backend
cp .env.example .env
docker compose up -d --build
```

## Production на VPS: Postgres в Docker + API через PM2

Быстрее, чем каждый раз собирать Docker-образ API (на слабом VPS `docker build` может занимать 5+ минут). Обновление — `git pull`, `npm ci`, `npm run build`, `pm2 reload` (~1–2 мин).

### Один раз на сервере

```bash
# Node 22
curl -fsSL https://deb.nodesource.com/setup_22.x | sudo -E bash -
sudo apt install -y nodejs

sudo npm install -g pm2
pm2 startup   # выполнить команду, которую выведет pm2

cd ~/back/vorngames/backend
cp .env.example .env
nano .env
```

В `.env` для PM2:

```env
POSTGRES_PASSWORD=...
DATABASE_URL=postgresql://postgres:ВАШ_ПАРОЛЬ@127.0.0.1:5433/vorn_games
STEAM_REALM=https://www.vorngames.com
STEAM_RETURN_URL=https://www.vorngames.com/api/auth/steam/callback
FRONTEND_URL=https://www.vorngames.com
```

Если раньше крутился API в Docker — остановите его, Postgres можно оставить или перейти на отдельный compose:

```bash
docker compose -f docker-compose.prod.yml stop api
docker compose -f docker-compose.postgres.yml up -d
chmod +x scripts/deploy-pm2.sh
./scripts/deploy-pm2.sh
```

nginx по-прежнему проксирует `/api` на `http://127.0.0.1:3000`.

### Обновление после `git pull`

```bash
cd backend
./scripts/deploy-pm2.sh
# или вручную: npm ci && npx prisma migrate deploy && npm run build && pm2 reload vorngames-api
```

| Способ | Сборка API | Типичное обновление |
|--------|------------|---------------------|
| Docker (`docker-compose.prod.yml`) | Внутри образа, долго | `docker compose build` |
| PM2 + Postgres в Docker | `npm run build` на хосте | `pm2 reload` |

## Переменные окружения

### backend/.env

| Переменная | Описание |
|------------|----------|
| `DATABASE_URL` | PostgreSQL connection string |
| `JWT_SECRET` | Секрет для JWT в cookie |
| `STEAM_API_KEY` | Ключ Steam Web API |
| `STEAM_REALM` | URL бэкенда (например `http://localhost:3000`) |
| `STEAM_RETURN_URL` | `{STEAM_REALM}/api/auth/steam/callback` |
| `FRONTEND_URL` | URL фронта для редиректа после логина |

### vorn-games-front/.env

| Переменная | Описание |
|------------|----------|
| `VITE_API_URL` | URL API в production (в dev используется Vite proxy) |

## API

| Method | Path | Описание |
|--------|------|----------|
| GET | `/api/auth/steam` | Редирект на Steam |
| GET | `/api/auth/steam/callback` | Callback, установка cookie |
| GET | `/api/auth/me` | Текущий пользователь (cookie) |
| POST | `/api/auth/logout` | Выход |

Пользователь в БД: `username`, `avatarUrl`, `balance` (RUB).
