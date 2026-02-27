-- Add membership tracking fields to registrations table
ALTER TABLE public.registrations 
ADD COLUMN membership_start_date TIMESTAMP WITH TIME ZONE,
ADD COLUMN membership_end_date TIMESTAMP WITH TIME ZONE,
ADD COLUMN last_payment_date TIMESTAMP WITH TIME ZONE,
ADD COLUMN is_active BOOLEAN DEFAULT true,
ADD COLUMN renewal_count INTEGER DEFAULT 0,
ADD COLUMN imported BOOLEAN DEFAULT false;

-- Create enum for transaction types
CREATE TYPE public.transaction_type AS ENUM ('new', 'renewal');

-- Create membership_transactions table for payment history
CREATE TABLE public.membership_transactions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  registration_id UUID NOT NULL REFERENCES public.registrations(id) ON DELETE CASCADE,
  transaction_id TEXT NOT NULL,
  payment_date TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  amount DECIMAL(10, 2),
  membership_period_start DATE NOT NULL,
  membership_period_end DATE,
  transaction_type public.transaction_type NOT NULL DEFAULT 'new',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  notes TEXT
);

-- Enable Row Level Security on membership_transactions
ALTER TABLE public.membership_transactions ENABLE ROW LEVEL SECURITY;

-- Create RLS policies for membership_transactions
CREATE POLICY "Admins can view all transactions"
ON public.membership_transactions
FOR SELECT
USING (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins can insert transactions"
ON public.membership_transactions
FOR INSERT
WITH CHECK (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins can update transactions"
ON public.membership_transactions
FOR UPDATE
USING (has_role(auth.uid(), 'admin'::app_role))
WITH CHECK (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins can delete transactions"
ON public.membership_transactions
FOR DELETE
USING (has_role(auth.uid(), 'admin'::app_role));

-- Create index for faster lookups
CREATE INDEX idx_membership_transactions_registration_id ON public.membership_transactions(registration_id);
CREATE INDEX idx_registrations_is_active ON public.registrations(is_active);
CREATE INDEX idx_registrations_membership_end_date ON public.registrations(membership_end_date);

-- Create function to calculate membership end date
CREATE OR REPLACE FUNCTION public.calculate_membership_end_date(
  p_membership_type TEXT,
  p_start_date TIMESTAMP WITH TIME ZONE
)
RETURNS TIMESTAMP WITH TIME ZONE
LANGUAGE plpgsql
IMMUTABLE
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

-- Create function to update membership dates when status changes to approved
CREATE OR REPLACE FUNCTION public.handle_membership_approval()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  -- When status changes to 'approved' and membership dates are not set
  IF NEW.status = 'approved' AND OLD.status != 'approved' THEN
    IF NEW.membership_start_date IS NULL THEN
      NEW.membership_start_date = now();
      NEW.last_payment_date = now();
      NEW.membership_end_date = calculate_membership_end_date(NEW.membership_type, now());
      NEW.is_active = true;
      
      -- Create initial transaction record
      INSERT INTO public.membership_transactions (
        registration_id,
        transaction_id,
        payment_date,
        membership_period_start,
        membership_period_end,
        transaction_type
      ) VALUES (
        NEW.id,
        NEW.transaction_id,
        now(),
        NEW.membership_start_date::DATE,
        NEW.membership_end_date::DATE,
        'new'
      );
    END IF;
  END IF;
  
  RETURN NEW;
END;
$$;

-- Create trigger for membership approval
CREATE TRIGGER on_membership_approved
BEFORE UPDATE ON public.registrations
FOR EACH ROW
EXECUTE FUNCTION public.handle_membership_approval();