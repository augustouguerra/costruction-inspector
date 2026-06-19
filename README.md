# Construction Inspector

Mobile app (Flutter) for managing building inspection rounds. Architects record voice notes per room; the system transcribes them, detects the responsible trade, and pushes notifications to the matching tradesperson.

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Mobile | Flutter 3.x (Dart) |
| Backend | Supabase (PostgreSQL + Auth + Storage + Edge Functions) |
| Speech-to-Text | OpenAI Whisper API |
| Push Notifications | Firebase Cloud Messaging (FCM) |
| State Management | Riverpod |
| Navigation | go_router |

## Quick Start

### 1. Supabase Setup

1. Create a project at [supabase.com](https://supabase.com)
2. Run migrations in order:
   ```
   supabase/migrations/20260101000001_initial_schema.sql
   supabase/migrations/20260101000002_rls_policies.sql
   ```
3. Create storage buckets:
   - `audio-recordings` (private, 50 MB limit)
   - `issue-photos` (private, 10 MB limit)
4. Set edge function secrets:
   ```
   supabase secrets set OPENAI_API_KEY=sk-...
   supabase secrets set FCM_SERVER_KEY=AAAA...
   ```
5. Deploy edge functions:
   ```
   supabase functions deploy process-audio
   supabase functions deploy send-notification
   ```

### 2. Firebase Setup

1. Create a Firebase project at [console.firebase.google.com](https://console.firebase.google.com)
2. Enable Cloud Messaging
3. Download `google-services.json` → place in `app/android/app/`
4. Download `GoogleService-Info.plist` → place in `app/ios/Runner/`
5. Copy the **Server Key** from Firebase Console → Project Settings → Cloud Messaging

### 3. Flutter App

1. Copy your Supabase URL and anon key into `app/.env`:
   ```
   SUPABASE_URL=https://your-project.supabase.co
   SUPABASE_ANON_KEY=eyJ...
   ```
2. Run:
   ```
   cd app
   flutter pub get
   flutter pub run build_runner build --delete-conflicting-outputs
   flutter run
   ```

## Project Structure

```
construction-inspector/
├── app/                    # Flutter mobile app
│   └── lib/
│       ├── core/           # theme, router, services, constants
│       ├── data/           # models (Freezed) + repositories
│       ├── domain/         # enums (trade_type, issue_status, user_role)
│       └── presentation/   # screens, widgets, Riverpod providers
└── supabase/
    ├── migrations/         # PostgreSQL schema + RLS
    └── functions/          # Edge Functions (Deno/TypeScript)
        ├── process-audio/  # Whisper transcription + trade detection
        └── send-notification/  # FCM push dispatch
```

## Core Workflow

```
Architect records voice note in a room
  → Audio uploaded to Supabase Storage
  → process-audio Edge Function called
    → OpenAI Whisper transcribes audio
    → Trade detected from keywords (Spanish + English)
    → Issue updated with transcription + trade
    → Matching tradespeople notified via FCM
  → Issue appears in real-time in the room's issue list
```

## Edge Function Secrets

| Secret | Source |
|--------|--------|
| `OPENAI_API_KEY` | platform.openai.com |
| `FCM_SERVER_KEY` | Firebase Console → Project Settings → Cloud Messaging → Server Key |
