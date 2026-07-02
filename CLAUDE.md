# Construction Inspector — Project Context

## What This App Does

A mobile-first construction inspection tool. Architects and project managers log defects by recording audio or taking photos in specific rooms of a building. Audio recordings are stored as-is (no transcription) and can be played back later from the issue detail screen. Trade assignment and FCM notifications are out of scope for now — `Issue.assignedTrade` exists in the schema but nothing sets it automatically.

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

**Stack:** NestJS 11 · Prisma 5 · PostgreSQL · JWT auth · Multer (file uploads)

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
| issues | `GET /api/rooms/:roomId/issues`, `POST /api/issues`, `GET/DELETE /api/issues/:id`, `PATCH /api/issues/:id/status`, `POST/GET /api/issues/:id/audio`, `POST/GET /api/issues/:id/photos`, `POST /api/issues/:id/comments` |
| notifications | `POST /api/notifications/register-token`, `DELETE /api/notifications/unregister-token` |

**Key services:**
- `PrismaService` — thin wrapper over `@prisma/client`, injected globally via `PrismaModule`.

**File uploads:** stored under `backend/uploads/` and served statically at `/uploads/*`. Multer uses in-memory storage; the service writes to disk. Audio recordings live under `uploads/audio/`, one file per `IssueAudio` row (an Issue can have multiple recordings).

**Environment variables (backend):**
```
DATABASE_URL=postgresql://...
JWT_SECRET=...
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
| `Issue` | belongs to Room; has `assignedTrade` (unset unless manually assigned), `status`, `title`, `description` |
| `IssuePhoto` | many per Issue |
| `IssueAudio` | many per Issue; one row per recording, `storagePath` under `uploads/audio/` |
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
- Room detail → issue list → issue detail (photos, comments, status, playable recordings)
- Recording sheet — records audio, uploads via `POST /issues/:id/audio`, no transcription/processing step
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

## Audio Recording Flow

1. Flutter records audio (`record` package, AAC-LC `.m4a`) → creates an `Issue` → uploads the file as multipart to `POST /api/issues/:id/audio`
2. Backend writes the file to `uploads/audio/{issueId}_{timestamp}.m4a` and creates an `IssueAudio` row — no transcription, trade detection, or notification happens here
3. Issue detail screen fetches recordings via `GET /api/issues/:id/audio` and plays them back inline (`just_audio`, `AudioPlayerTile` widget)
4. An issue can have multiple recordings; each upload adds a new `IssueAudio` row rather than overwriting a prior one

`NotificationsService.notifyTrade()` and the FCM push flow still exist but nothing currently calls them — trade assignment/notification is unwired pending a manual-assignment feature.

---

## Common Gotchas

- **Android emulator to host:** use `10.0.2.2` not `localhost` in `API_URL`.
- **Prisma client must be regenerated** after any schema change: `npx prisma generate`.
- **JWT secret must match** between backend `.env` and any token issued — rotating it invalidates all sessions.
- **FCM legacy HTTP API** (`fcm.googleapis.com/fcm/send`) is used by `NotificationsService.notifyTrade()` — Google deprecated it in June 2024 in favor of FCM v1 HTTP API. May need migration. Currently unused by the audio flow (see above).
- **`supabase/` folder** — leave in place (git history) but do not deploy or invoke its functions.
