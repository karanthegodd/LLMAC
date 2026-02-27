/**
 * Partner logo display: tries local file, then Clearbit, then Google favicon.
 * Add custom logos in public/partner-logos/{domain}.png (e.g. scotiabank.com.png) to override.
 */

export const PARTNER_BRANDS_LOGO_GRID = [
  { name: "ICICI Canada", domain: "icicibank.com" },
  { name: "SBI Canada", domain: "sbicard.com" },
  { name: "Scotiabank", domain: "scotiabank.com" },
  { name: "CIBC", domain: "cibc.com" },
  { name: "RBC", domain: "rbc.com" },
  { name: "Enterprise", domain: "enterprise.com" },
  { name: "Avis", domain: "avis.com" },
  { name: "Hertz", domain: "hertz.com" },
  { name: "Century 21", domain: "century21.com" },
  { name: "Royal LePage", domain: "royallepage.ca" },
  { name: "RE/MAX", domain: "remax.ca" },
  { name: "Bell", domain: "bell.ca" },
  { name: "Rogers", domain: "rogers.com" },
  { name: "Tim Hortons", domain: "timhortons.ca" },
  { name: "Starbucks", domain: "starbucks.com" },
] as const;

/** Google favicon URL (reliable fallback for company logo/favicon) */
export function getFaviconUrl(domain: string, size = 128): string {
  return `https://www.google.com/s2/favicons?domain=${domain}&sz=${size}`;
}

/** Sample offers with brand logo + description (for card layout) */
export const SAMPLE_OFFERS_WITH_LOGO = [
  { name: "Preferred Banking", brands: "ICICI Canada, SBI Canada, Scotiabank, CIBC, RBC", domain: "scotiabank.com", description: "Preferred banking benefits for IIMAC members." },
  { name: "Car Rental", brands: "Enterprise, Avis, Hertz", domain: "enterprise.com", description: "Corporate car rental discounts." },
  { name: "Real Estate", brands: "Century 21, Royal LePage, RE/MAX", domain: "century21.com", description: "Realtor referral benefits." },
  { name: "Telecom", brands: "Bell, Rogers", domain: "bell.ca", description: "Special telecom plans for members." },
  { name: "Coffee & Events", brands: "Tim Hortons, Starbucks", domain: "starbucks.com", description: "Coffee vouchers and event partnerships." },
] as const;

/** Event imagery for Partnership Activation (Unsplash, optimized) */
export const ACTIVATION_IMAGES = [
  { title: "Annual Gala & Networking Evenings", img: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80", alt: "Professional gala event" },
  { title: "Community Events & Meetups", img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80", alt: "Networking meetup" },
  { title: "Leadership Roundtables & Webinars", img: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=800&q=80", alt: "Leadership roundtable" },
  { title: "Cultural & Family Picnics", img: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80", alt: "Community gathering" },
  { title: "Career & Entrepreneurship Workshops", img: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&q=80", alt: "Workshop session" },
] as const;
