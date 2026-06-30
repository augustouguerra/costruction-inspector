# Construction Inspector — Project Context

## What This App Does

A mobile-first construction inspection tool. Architects and project managers log defects by recording audio or taking photos in specific rooms of a building. The backend transcribes audio via OpenAI Whisper, detects which trade (plumber, electrician, etc.) should handle the issue, and notifies matching tradespeople via FCM push notifications.

---

## Repository Layout

```
/
├── backend/       NestJS API (TypeScript, Prisma, PostgreSQL)
├── app/           Flutter mobile app (Riverpod, Dio)
├── supabase/      DEPRECATED — Edge Functions replaced by backend; migrations superseded by Prisma
```

---

## Backend (`backend/`)

**Stack:** NestJS 11 · Prisma 5 · PostgreSQL · JWT auth · Multer (file uploads) · OpenAI SDK

**Start:**
```bash
cd backend
npm run start:dev     # watch mode, port 3000
npm run build         # compile to dist/
npm run start:prod    # run compiled
```

**Global prefix:** all routes are under `/api` (set in `main.ts`).

**Auth:** JWT Bearer tokens. `JwtAuthGuard` protects all routes except `POST /api/auth/register` and `POST /api/auth/login`. The JWT payload carries `{ sub: userId, email }`.

**Modules and routes:**

| Module | Routes |
|---|---|
| auth | `POST /api/auth/register`, `POST /api/auth/login`, `GET /api/auth/profile`, `PATCH /api/auth/profile` |
| projects | `GET/POST /api/projects`, `GET/PATCH/DELETE /api/projects/:id`, `POST /api/projects/:id/members` |
| floors | `GET/POST /api/projects/:projectId/floors` |
| apartments | `GET/POST /api/floors/:floorId/apartments` |
| rooms | `GET/POST /api/apartments/:apartmentId/rooms` |
| issues | `GET /api/rooms/:roomId/issues`, `POST /api/issues`, `GET/DELETE /api/issues/:id`, `PATCH /api/issues/:id/status`, `POST /api/issues/:id/process-audio`, `POST/GET /api/issues/:id/photos`, `POST /api/issues/:id/comments` |
| notifications | `POST /api/notifications/register-token`, `DELETE /api/notifications/unregister-token` |

**Key services:**
- `AudioService` — calls OpenAI Whisper (`whisper-1`, language `es`), detects trade from keyword scoring, generates a short title. Lives in `backend/src/issues/audio.service.ts`.
- `PrismaService` — thin wrapper over `@prisma/client`, injected globally via `PrismaModule`.

**File uploads:** stored under `backend/uploads/` and served statically at `/uploads/*`. Multer uses in-memory storage; the service writes to disk.

**Environment variables (backend):**
```
DATABASE_URL=postgresql://...
JWT_SECRET=...
OPENAI_API_KEY=...
FCM_SERVER_KEY=...
PORT=3000        # optional, defaults to 3000
```

**Prisma:**
```bash
cd backend
npx prisma migrate dev    # apply migrations
npx prisma generate       # regenerate client after schema changes
npx prisma studio         # GUI browser
```

---

## Domain Model (Prisma schema)

Hierarchy: **Project → Floor → Apartment → Room → Issue**

| Model | Key fields |
|---|---|
| `User` | `role` (architect / tradesperson / project_manager / admin), `trade` (nullable, set for tradespeople) |
| `Project` | owned by a User; has members via `ProjectMember` |
| `Floor` | belongs to Project; has `number` + `label` |
| `Apartment` | belongs to Floor; identified by `identifier` string |
| `Room` | belongs to Apartment; named (predefined list in Flutter) |
| `Issue` | belongs to Room; has `assignedTrade`, `status`, `audioFileUrl`, `transcriptionRaw`, `detectionConfidence` |
| `IssuePhoto` | many per Issue |
| `IssueComment` | many per Issue |
| `FcmToken` | per User per device/platform |
| `NotificationLog` | records each FCM push sent |

**Enums:**
- `UserRole`: `architect`, `tradesperson`, `project_manager`, `admin`
- `TradeType`: `plumber`, `electrician`, `carpenter`, `painter`, `hvac`, `mason`, `tiler`, `glazier`, `general`, `unknown`
- `IssueStatus`: `open`, `acknowledged`, `in_progress`, `resolved`, `rejected`

---

## Flutter App (`app/`)

**Stack:** Flutter · Riverpod (state management) · Dio (HTTP) · Freezed (data classes) · `flutter_dotenv` · `flutter_secure_storage`

**Architecture:** Feature-per-folder under `lib/presentation/`. Each feature has:
- `screens/` — UI widgets
- `providers/` — Riverpod `StateNotifierProvider` or `FutureProvider`
- `data/repositories/` — calls `ApiClient`
- `data/models/` — Freezed + `json_serializable` models

**API client:** `app/lib/core/services/api_client.dart`. Reads `API_URL` from `.env` (default `http://10.0.2.2:3000/api` for Android emulator). Attaches JWT via `Authorization: Bearer` interceptor. Token persisted in `FlutterSecureStorage`.

**Environment (app):** create `app/.env`:
```
API_URL=http://10.0.2.2:3000/api   # Android emulator → host
# or http://localhost:3000/api       # iOS simulator / web
```

**Screens:**
- Auth: login, register
- Projects list → project detail → floor/apartment/room drill-down
- Room detail → issue list → issue detail (photos, comments, status)
- Recording sheet — records audio, uploads via `POST /issues/:id/process-audio`
- Notifications screen
- Profile screen

**Code generation** (run after changing Freezed models or adding `@JsonSerializable`):
```bash
cd app
dart run build_runner build --delete-conflicting-outputs
```

---

## Deprecated: `supabase/`

The `supabase/functions/` folder contains two Deno Edge Functions (`process-audio`, `send-notification`) that were the original implementation. Both are fully replaced by the NestJS backend. The `supabase/migrations/` SQL files are historical; **Prisma is the authoritative schema source**. The entire `supabase/` folder can be deleted without affecting the running app.

---

## Audio / Trade Detection Flow

1. Flutter records audio → uploads as multipart to `POST /api/issues/:id/process-audio`
2. Backend saves file to disk, calls `AudioService.transcribe()` → OpenAI Whisper (Spanish)
3. `AudioService.detectTrade()` scores Spanish keywords per trade → picks best match
4. Issue updated with `transcriptionRaw`, `title`, `assignedTrade`, `detectionConfidence`
5. `NotificationsService` queries `FcmToken` for users with matching `trade`, sends FCM via legacy HTTP API, logs to `NotificationLog`

---

## Common Gotchas

- **Android emulator to host:** use `10.0.2.2` not `localhost` in `API_URL`.
- **Prisma client must be regenerated** after any schema change: `npx prisma generate`.
- **JWT secret must match** between backend `.env` and any token issued — rotating it invalidates all sessions.
- **FCM legacy HTTP API** (`fcm.googleapis.com/fcm/send`) is used — Google deprecated it in June 2024 in favor of FCM v1 HTTP API. May need migration.
- **`supabase/` folder** — leave in place (git history) but do not deploy or invoke its functions.
