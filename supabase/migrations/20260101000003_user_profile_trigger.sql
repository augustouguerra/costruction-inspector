-- Auto-create user_profiles row when a new auth user is created.
-- Runs as SECURITY DEFINER (superuser), bypassing RLS.
-- The app passes full_name, role, and trade in signUp metadata.
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
BEGIN
  INSERT INTO public.user_profiles (id, full_name, role, trade)
  VALUES (
    NEW.id,
    COALESCE(NEW.raw_user_meta_data->>'full_name', 'Unknown'),
    COALESCE((NEW.raw_user_meta_data->>'role')::user_role, 'tradesperson'),
    NULLIF(NEW.raw_user_meta_data->>'trade', '')::trade_type
  )
  ON CONFLICT (id) DO NOTHING;
  RETURN NEW;
END;
$$;

CREATE OR REPLACE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();
