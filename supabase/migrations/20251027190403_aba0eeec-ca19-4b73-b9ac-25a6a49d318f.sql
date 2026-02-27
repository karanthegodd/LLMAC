-- Fix function search path for calculate_membership_end_date
CREATE OR REPLACE FUNCTION public.calculate_membership_end_date(
  p_membership_type TEXT,
  p_start_date TIMESTAMP WITH TIME ZONE
)
RETURNS TIMESTAMP WITH TIME ZONE
LANGUAGE plpgsql
IMMUTABLE
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  IF p_membership_type = 'Lifetime' THEN
    RETURN NULL;
  ELSE
    -- Annual membership: add 1 year to start date
    RETURN p_start_date + INTERVAL '1 year';
  END IF;
END;
$$;