# Sponsorship Page – Brand Visuals Enhancement

## Sections updated

| Section | Updates |
|--------|--------|
| **1) Trusted by Leading Brands** | **New section.** Placed after “Ideal Collaboration Areas” and before “Example Member Benefits & Sample Offers”. Title: “Trusted by Leading Brands”; subtitle: “Example partner brands across banking, mobility, real estate, telecom, and more.” Logo grid: 15 brands, 2–5 columns (responsive), same-height cells, grayscale + 70% opacity by default; hover: full color, full opacity, slight lift, border emphasis. |
| **2) Example Member Benefits & Sample Offers** | **Redesigned.** “Sample offers” is now card-based: each row = logo (left) + brands + short description (right). Card has soft background, border, hover lift and shadow. Logo from Clearbit; fallback = first letter of category name if image fails. |
| **3) Sponsorship Overview + Partnership Tiers** | **Enhanced.** Each tier card now includes an “Includes brand visibility” line with an eye icon and copy: “Logo on event banners, website, and gala backdrop.” Cards have hover lift (`-translate-y-0.5`) and shadow. |
| **4) Partnership Activation Opportunities** | **Redesigned.** Each of the 5 activations is an image + text split: professional event photo (left or right, alternating) + text card with icon and title. Images use subtle parallax on scroll (desktop, disabled when `prefers-reduced-motion`). Photos are lazy-loaded. |
| **Existing sponsor sections** | Premier Sponsor and Alumni Businesses & Supporters: all logos use `loading="lazy"` and `decoding="async"`. No layout or content changes. |

---

## Where logos were added

| Location | What |
|---------|------|
| **Trusted by Leading Brands** | Single section with a grid of 15 partner logos (ICICI Canada, SBI Canada, Scotiabank, CIBC, RBC, Enterprise, Avis, Hertz, Century 21, Royal LePage, RE/MAX, Bell, Rogers, Tim Hortons, Starbucks). Each logo is in a fixed-height card; Clearbit logo URL per brand; fallback = first letter of brand name. |
| **Sample offers (under Example Member Benefits)** | Five offer cards: each has one logo on the left (Clearbit by category: banking, car rental, real estate, telecom, coffee) and text on the right. Same fallback if logo fails. |
| **Tier cards** | No new logo image. Added an “Includes brand visibility” line with an Eye icon and short copy only. |

---

## Image assets used

| Asset type | Source | Usage |
|------------|--------|--------|
| **Partner / brand logos** | Clearbit Logo API: `https://logo.clearbit.com/<domain>` | “Trusted by Leading Brands” grid and “Sample offers” cards. Domains: icicibank.com, sbicard.com, scotiabank.com, cibc.com, rbc.com, enterprise.com, avis.com, hertz.com, century21.com, royallepage.ca, remax.ca, bell.ca, rogers.com, timhortons.com, starbucks.com. No local SVG or PNG files; all logos loaded from Clearbit. |
| **Event / activation photos** | Unsplash (hotlinked, optimized `w=800&q=80`) | Partnership Activation Opportunities: 5 images, one per activation. 1) Gala: `photo-1511578314322-379afb476865`. 2) Networking: `photo-1540575467063-178a50c2df87`. 3) Roundtable: `photo-1591115765373-5207764f72e7`. 4) Community/cultural: `photo-1529156069898-49953e39b3ac`. 5) Workshop: `photo-1560472354-b33ff0c44a43`. |
| **Sponsor logos (existing)** | Supabase `sponsors` (logo_url) | Unchanged; only added `loading="lazy"` and `decoding="async"` for performance. |

---

## Files modified / created

| File | Change |
|------|--------|
| **`src/data/partnerBrands.ts`** | **Created.** Exports `PARTNER_BRANDS_LOGO_GRID` (15 brands + domain for Clearbit), `SAMPLE_OFFERS_WITH_LOGO` (5 offers with name, brands, domain, description), and `ACTIVATION_IMAGES` (5 titles + Unsplash image URL + alt). |
| **`src/pages/Partners.tsx`** | **Modified.** Imports partner data and `useScroll` / `useTransform`. Adds `PartnerLogo` (Clearbit + fallback, grayscale/hover styles) and `ActivationCard` (image + text, parallax). New section “Trusted by Leading Brands”; updated tier cards (visibility line); Sample offers as logo-left cards; Activation as image+text blocks with parallax. All relevant images use `loading="lazy"` and `decoding="async"`. |

---

## Performance

- All partner and activation images use `loading="lazy"` and `decoding="async"`.
- Parallax uses Framer Motion `useScroll`/`useTransform`; no extra image requests.
- Clearbit logos are loaded on demand; failed loads fall back to initial letter (no broken images).
- Unsplash URLs use `w=800&q=80` to limit size.

---

## Premium look

- Logo grid: fixed cell height (`h-24`), even spacing, no stretching (object-contain).
- Default state: grayscale + reduced opacity; hover: color + lift + shadow.
- Sample offer cards: consistent logo size, clear hierarchy (brands + description).
- Activation: alternating image/text layout, rounded images, subtle parallax only when motion is allowed.
- White space and section spacing unchanged; no extra clutter.
