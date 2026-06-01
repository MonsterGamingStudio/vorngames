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
