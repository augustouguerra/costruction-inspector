-- ─────────────────────────────────────────────────────────────────────────────
-- ENUMS
-- ─────────────────────────────────────────────────────────────────────────────
CREATE TYPE trade_type AS ENUM (
  'plumber', 'electrician', 'carpenter', 'painter',
  'hvac', 'mason', 'tiler', 'glazier', 'general', 'unknown'
);

CREATE TYPE issue_status AS ENUM (
  'open', 'acknowledged', 'in_progress', 'resolved', 'rejected'
);

CREATE TYPE user_role AS ENUM (
  'architect', 'tradesperson', 'project_manager', 'admin'
);

-- ─────────────────────────────────────────────────────────────────────────────
-- USER PROFILES
-- ─────────────────────────────────────────────────────────────────────────────
CREATE TABLE public.user_profiles (
  id          UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  full_name   TEXT NOT NULL,
  role        user_role NOT NULL DEFAULT 'tradesperson',
  trade       trade_type,
  avatar_url  TEXT,
  phone       TEXT,
  created_at  TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at  TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- ─────────────────────────────────────────────────────────────────────────────
-- FCM TOKENS
-- ─────────────────────────────────────────────────────────────────────────────
CREATE TABLE public.fcm_tokens (
  id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id     UUID NOT NULL REFERENCES public.user_profiles(id) ON DELETE CASCADE,
  token       TEXT NOT NULL UNIQUE,
  platform    TEXT NOT NULL CHECK (platform IN ('android', 'ios')),
  created_at  TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at  TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- ─────────────────────────────────────────────────────────────────────────────
-- PROJECTS
-- ─────────────────────────────────────────────────────────────────────────────
CREATE TABLE public.projects (
  id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name            TEXT NOT NULL,
  address         TEXT,
  description     TEXT,
  owner_id        UUID NOT NULL REFERENCES public.user_profiles(id),
  cover_image_url TEXT,
  is_active       BOOLEAN NOT NULL DEFAULT true,
  created_at      TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at      TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE public.project_members (
  project_id  UUID NOT NULL REFERENCES public.projects(id) ON DELETE CASCADE,
  user_id     UUID NOT NULL REFERENCES public.user_profiles(id) ON DELETE CASCADE,
  role        user_role NOT NULL DEFAULT 'architect',
  joined_at   TIMESTAMPTZ NOT NULL DEFAULT now(),
  PRIMARY KEY (project_id, user_id)
);

-- ─────────────────────────────────────────────────────────────────────────────
-- FLOORS
-- ─────────────────────────────────────────────────────────────────────────────
CREATE TABLE public.floors (
  id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  project_id  UUID NOT NULL REFERENCES public.projects(id) ON DELETE CASCADE,
  number      INTEGER NOT NULL,
  label       TEXT NOT NULL,
  created_at  TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE (project_id, number)
);

-- ─────────────────────────────────────────────────────────────────────────────
-- APARTMENTS
-- ─────────────────────────────────────────────────────────────────────────────
CREATE TABLE public.apartments (
  id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  floor_id    UUID NOT NULL REFERENCES public.floors(id) ON DELETE CASCADE,
  identifier  TEXT NOT NULL,
  created_at  TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE (floor_id, identifier)
);

-- ─────────────────────────────────────────────────────────────────────────────
-- ROOMS
-- ─────────────────────────────────────────────────────────────────────────────
CREATE TABLE public.rooms (
  id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  apartment_id    UUID NOT NULL REFERENCES public.apartments(id) ON DELETE CASCADE,
  name            TEXT NOT NULL,
  created_at      TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- ─────────────────────────────────────────────────────────────────────────────
-- ISSUES / TASKS
-- ─────────────────────────────────────────────────────────────────────────────
CREATE TABLE public.issues (
  id                    UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  room_id               UUID NOT NULL REFERENCES public.rooms(id) ON DELETE CASCADE,
  created_by            UUID NOT NULL REFERENCES public.user_profiles(id),
  assigned_trade        trade_type NOT NULL DEFAULT 'unknown',
  assigned_to           UUID REFERENCES public.user_profiles(id),
  status                issue_status NOT NULL DEFAULT 'open',
  title                 TEXT,
  description           TEXT,
  audio_file_url        TEXT,
  transcription_raw     TEXT,
  detection_confidence  FLOAT,
  priority              INTEGER DEFAULT 2,
  resolved_at           TIMESTAMPTZ,
  created_at            TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at            TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- ─────────────────────────────────────────────────────────────────────────────
-- ISSUE PHOTOS
-- ─────────────────────────────────────────────────────────────────────────────
CREATE TABLE public.issue_photos (
  id           UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  issue_id     UUID NOT NULL REFERENCES public.issues(id) ON DELETE CASCADE,
  storage_path TEXT NOT NULL,
  uploaded_by  UUID NOT NULL REFERENCES public.user_profiles(id),
  created_at   TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- ─────────────────────────────────────────────────────────────────────────────
-- ISSUE COMMENTS
-- ─────────────────────────────────────────────────────────────────────────────
CREATE TABLE public.issue_comments (
  id         UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  issue_id   UUID NOT NULL REFERENCES public.issues(id) ON DELETE CASCADE,
  author_id  UUID NOT NULL REFERENCES public.user_profiles(id),
  body       TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- ─────────────────────────────────────────────────────────────────────────────
-- NOTIFICATION LOG
-- ─────────────────────────────────────────────────────────────────────────────
CREATE TABLE public.notification_log (
  id           UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  issue_id     UUID REFERENCES public.issues(id) ON DELETE SET NULL,
  recipient_id UUID NOT NULL REFERENCES public.user_profiles(id),
  fcm_token    TEXT,
  title        TEXT NOT NULL,
  body         TEXT NOT NULL,
  sent_at      TIMESTAMPTZ NOT NULL DEFAULT now(),
  status       TEXT NOT NULL DEFAULT 'sent'
);
