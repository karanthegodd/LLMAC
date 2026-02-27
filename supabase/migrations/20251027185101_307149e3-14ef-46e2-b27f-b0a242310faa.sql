-- Fix the function to set search_path for security
DROP FUNCTION IF EXISTS public.get_member_id(uuid);

CREATE OR REPLACE FUNCTION public.get_member_id(registration_id uuid)
RETURNS text
LANGUAGE plpgsql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  reg_year integer;
  reg_created timestamp with time zone;
  seq_number integer;
BEGIN
  -- Get the year and created_at for this registration
  SELECT 
    EXTRACT(YEAR FROM created_at)::integer,
    created_at
  INTO reg_year, reg_created
  FROM public.registrations
  WHERE id = registration_id;
  
  -- Count how many registrations were created before this one in the same year
  SELECT COUNT(*) + 1
  INTO seq_number
  FROM public.registrations
  WHERE EXTRACT(YEAR FROM created_at) = reg_year
    AND created_at < reg_created;
  
  -- Return formatted member ID
  RETURN 'IIMAC-' || reg_year || '-' || LPAD(seq_number::text, 4, '0');
END;
$$;