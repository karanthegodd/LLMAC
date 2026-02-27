-- Add unique constraints to prevent duplicate registrations
ALTER TABLE public.registrations 
ADD CONSTRAINT registrations_email_key UNIQUE (email);

ALTER TABLE public.registrations 
ADD CONSTRAINT registrations_phone_key UNIQUE (phone);

-- Add comments for documentation
COMMENT ON CONSTRAINT registrations_email_key ON public.registrations IS 'Ensures each email is registered only once';
COMMENT ON CONSTRAINT registrations_phone_key ON public.registrations IS 'Ensures each phone number is registered only once';