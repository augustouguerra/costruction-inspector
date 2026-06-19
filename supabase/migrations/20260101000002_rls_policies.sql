-- ─────────────────────────────────────────────────────────────────────────────
-- ENABLE RLS
-- ─────────────────────────────────────────────────────────────────────────────
ALTER TABLE public.user_profiles     ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.fcm_tokens        ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.projects          ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.project_members   ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.floors            ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.apartments        ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.rooms             ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.issues            ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.issue_photos      ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.issue_comments    ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.notification_log  ENABLE ROW LEVEL SECURITY;

-- ─────────────────────────────────────────────────────────────────────────────
-- HELPER FUNCTION
-- ─────────────────────────────────────────────────────────────────────────────
CREATE OR REPLACE FUNCTION is_project_member(p_id UUID)
RETURNS BOOLEAN LANGUAGE sql SECURITY DEFINER AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.project_members
    WHERE project_id = p_id AND user_id = auth.uid()
  );
$$;

-- ─────────────────────────────────────────────────────────────────────────────
-- USER PROFILES
-- ─────────────────────────────────────────────────────────────────────────────
CREATE POLICY "user_profiles_own"
  ON public.user_profiles FOR ALL
  USING (id = auth.uid())
  WITH CHECK (id = auth.uid());

-- Allow users to read profiles of project members they share projects with
CREATE POLICY "user_profiles_project_members_read"
  ON public.user_profiles FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM public.project_members pm1
      JOIN public.project_members pm2 ON pm1.project_id = pm2.project_id
      WHERE pm1.user_id = auth.uid() AND pm2.user_id = user_profiles.id
    )
  );

-- ─────────────────────────────────────────────────────────────────────────────
-- FCM TOKENS
-- ─────────────────────────────────────────────────────────────────────────────
CREATE POLICY "fcm_tokens_own"
  ON public.fcm_tokens FOR ALL
  USING (user_id = auth.uid())
  WITH CHECK (user_id = auth.uid());

-- ─────────────────────────────────────────────────────────────────────────────
-- PROJECTS
-- ─────────────────────────────────────────────────────────────────────────────
CREATE POLICY "projects_member_read"
  ON public.projects FOR SELECT
  USING (is_project_member(id) OR owner_id = auth.uid());

CREATE POLICY "projects_owner_insert"
  ON public.projects FOR INSERT
  WITH CHECK (owner_id = auth.uid());

CREATE POLICY "projects_owner_update"
  ON public.projects FOR UPDATE
  USING (owner_id = auth.uid());

CREATE POLICY "projects_owner_delete"
  ON public.projects FOR DELETE
  USING (owner_id = auth.uid());

-- ─────────────────────────────────────────────────────────────────────────────
-- PROJECT MEMBERS
-- ─────────────────────────────────────────────────────────────────────────────
CREATE POLICY "project_members_read"
  ON public.project_members FOR SELECT
  USING (is_project_member(project_id));

CREATE POLICY "project_members_insert"
  ON public.project_members FOR INSERT
  WITH CHECK (
    EXISTS (SELECT 1 FROM public.projects WHERE id = project_id AND owner_id = auth.uid())
  );

-- ─────────────────────────────────────────────────────────────────────────────
-- FLOORS
-- ─────────────────────────────────────────────────────────────────────────────
CREATE POLICY "floors_member_read"
  ON public.floors FOR SELECT
  USING (is_project_member(project_id));

CREATE POLICY "floors_architect_write"
  ON public.floors FOR ALL
  USING (
    EXISTS (
      SELECT 1 FROM public.project_members
      WHERE project_id = floors.project_id
        AND user_id = auth.uid()
        AND role IN ('architect', 'project_manager', 'admin')
    )
  )
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM public.project_members
      WHERE project_id = floors.project_id
        AND user_id = auth.uid()
        AND role IN ('architect', 'project_manager', 'admin')
    )
  );

-- ─────────────────────────────────────────────────────────────────────────────
-- APARTMENTS
-- ─────────────────────────────────────────────────────────────────────────────
CREATE POLICY "apartments_member_read"
  ON public.apartments FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM public.floors f WHERE f.id = floor_id AND is_project_member(f.project_id)
    )
  );

CREATE POLICY "apartments_architect_write"
  ON public.apartments FOR ALL
  USING (
    EXISTS (
      SELECT 1 FROM public.floors f
      JOIN public.project_members pm ON f.project_id = pm.project_id
      WHERE f.id = apartments.floor_id
        AND pm.user_id = auth.uid()
        AND pm.role IN ('architect', 'project_manager', 'admin')
    )
  )
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM public.floors f
      JOIN public.project_members pm ON f.project_id = pm.project_id
      WHERE f.id = floor_id
        AND pm.user_id = auth.uid()
        AND pm.role IN ('architect', 'project_manager', 'admin')
    )
  );

-- ─────────────────────────────────────────────────────────────────────────────
-- ROOMS
-- ─────────────────────────────────────────────────────────────────────────────
CREATE POLICY "rooms_member_read"
  ON public.rooms FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM public.apartments a
      JOIN public.floors f ON a.floor_id = f.id
      WHERE a.id = apartment_id AND is_project_member(f.project_id)
    )
  );

CREATE POLICY "rooms_architect_write"
  ON public.rooms FOR ALL
  USING (
    EXISTS (
      SELECT 1 FROM public.apartments a
      JOIN public.floors f ON a.floor_id = f.id
      JOIN public.project_members pm ON f.project_id = pm.project_id
      WHERE a.id = rooms.apartment_id
        AND pm.user_id = auth.uid()
        AND pm.role IN ('architect', 'project_manager', 'admin')
    )
  )
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM public.apartments a
      JOIN public.floors f ON a.floor_id = f.id
      JOIN public.project_members pm ON f.project_id = pm.project_id
      WHERE a.id = apartment_id
        AND pm.user_id = auth.uid()
        AND pm.role IN ('architect', 'project_manager', 'admin')
    )
  );

-- ─────────────────────────────────────────────────────────────────────────────
-- ISSUES
-- ─────────────────────────────────────────────────────────────────────────────
CREATE POLICY "issues_member_read"
  ON public.issues FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM public.rooms r
      JOIN public.apartments a ON r.apartment_id = a.id
      JOIN public.floors f ON a.floor_id = f.id
      WHERE r.id = room_id AND is_project_member(f.project_id)
    )
  );

CREATE POLICY "issues_architect_insert"
  ON public.issues FOR INSERT
  WITH CHECK (
    created_by = auth.uid() AND
    EXISTS (
      SELECT 1 FROM public.rooms r
      JOIN public.apartments a ON r.apartment_id = a.id
      JOIN public.floors f ON a.floor_id = f.id
      JOIN public.project_members pm ON f.project_id = pm.project_id
      WHERE r.id = room_id
        AND pm.user_id = auth.uid()
        AND pm.role IN ('architect', 'project_manager', 'admin')
    )
  );

CREATE POLICY "issues_update"
  ON public.issues FOR UPDATE
  USING (created_by = auth.uid() OR assigned_to = auth.uid());

-- ─────────────────────────────────────────────────────────────────────────────
-- ISSUE PHOTOS
-- ─────────────────────────────────────────────────────────────────────────────
CREATE POLICY "issue_photos_member_read"
  ON public.issue_photos FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM public.issues i
      JOIN public.rooms r ON i.room_id = r.id
      JOIN public.apartments a ON r.apartment_id = a.id
      JOIN public.floors f ON a.floor_id = f.id
      WHERE i.id = issue_id AND is_project_member(f.project_id)
    )
  );

CREATE POLICY "issue_photos_insert"
  ON public.issue_photos FOR INSERT
  WITH CHECK (uploaded_by = auth.uid());

-- ─────────────────────────────────────────────────────────────────────────────
-- ISSUE COMMENTS
-- ─────────────────────────────────────────────────────────────────────────────
CREATE POLICY "issue_comments_member_read"
  ON public.issue_comments FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM public.issues i
      JOIN public.rooms r ON i.room_id = r.id
      JOIN public.apartments a ON r.apartment_id = a.id
      JOIN public.floors f ON a.floor_id = f.id
      WHERE i.id = issue_id AND is_project_member(f.project_id)
    )
  );

CREATE POLICY "issue_comments_member_insert"
  ON public.issue_comments FOR INSERT
  WITH CHECK (
    author_id = auth.uid() AND
    EXISTS (
      SELECT 1 FROM public.issues i
      JOIN public.rooms r ON i.room_id = r.id
      JOIN public.apartments a ON r.apartment_id = a.id
      JOIN public.floors f ON a.floor_id = f.id
      WHERE i.id = issue_id AND is_project_member(f.project_id)
    )
  );

-- ─────────────────────────────────────────────────────────────────────────────
-- NOTIFICATION LOG
-- ─────────────────────────────────────────────────────────────────────────────
CREATE POLICY "notification_log_own_read"
  ON public.notification_log FOR SELECT
  USING (recipient_id = auth.uid());
