-- Create sponsors table
CREATE TABLE public.sponsors (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  sponsor_name TEXT NOT NULL,
  logo_url TEXT NOT NULL,
  tier TEXT NOT NULL,
  description TEXT,
  website_url TEXT,
  display_order INTEGER DEFAULT 0,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.sponsors ENABLE ROW LEVEL SECURITY;

-- Allow anyone to view active sponsors
CREATE POLICY "Anyone can view active sponsors"
ON public.sponsors
FOR SELECT
USING (is_active = true);

-- Admins can manage sponsors
CREATE POLICY "Admins can insert sponsors"
ON public.sponsors
FOR INSERT
WITH CHECK (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins can update sponsors"
ON public.sponsors
FOR UPDATE
USING (has_role(auth.uid(), 'admin'::app_role))
WITH CHECK (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins can delete sponsors"
ON public.sponsors
FOR DELETE
USING (has_role(auth.uid(), 'admin'::app_role));

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_sponsors_updated_at
BEFORE UPDATE ON public.sponsors
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Insert sample sponsor data
INSERT INTO public.sponsors (sponsor_name, logo_url, tier, description, website_url, display_order) VALUES
('ICICI Bank Canada', 'https://images.unsplash.com/photo-1556155092-490a1ba16284?w=400&h=200&fit=crop', 'Premier', 'Our premier sponsor, ICICI Bank Canada, has been instrumental in supporting IIMAC''s mission of empowering professionals and building a stronger Indo-Canadian business community.', 'https://www.icicibank.ca', 1),
('Maple Wealth Management', 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=200&fit=crop', 'Gold', 'Founded by IIM Ahmedabad alumni, providing bespoke financial advisory services in Toronto.', 'https://example.com', 2),
('Northern Legal Associates', 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400&h=200&fit=crop', 'Alumni Partner', 'Full-service law firm led by IIM Bangalore alumni, specializing in corporate and immigration law.', 'https://example.com', 3),
('TechVenture Consulting', 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=200&fit=crop', 'Silver', 'Strategy consulting firm founded by IIM Calcutta alumni, helping startups scale across North America.', 'https://example.com', 4),
('Indo-Canadian Realty Group', 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=200&fit=crop', 'Alumni Partner', 'Leading real estate brokerage in GTA, founded by IIM Lucknow alumni with 15+ years of experience.', 'https://example.com', 5),
('Pinnacle Data Solutions', 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=200&fit=crop', 'Gold', 'AI and data analytics firm established by IIM Indore alumni, serving Fortune 500 clients.', 'https://example.com', 6);