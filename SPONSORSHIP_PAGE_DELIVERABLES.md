# Sponsorship Page Redesign – Deliverables

## Where the Sponsorship section lives

- **Route:** `/partners` (unchanged).
- **Page component:** `src/pages/Partners.tsx`.
- **Navigation:** Linked from Home (“Partner with IIMAC”, “View All Sponsors”) and Footer. No change to nav routes or links.

---

## Files modified

| File | Changes |
|------|--------|
| **`src/pages/Partners.tsx`** | Full redesign. Replaced previous hero + two sponsor sections with prospectus-driven content (A–I) and kept existing sponsor blocks at the end. |

**No other files were modified.** Routing, Navigation, Footer, and sponsor data fetching (Supabase) are unchanged.

---

## What was added/updated in `Partners.tsx`

1. **A) Hero** – Title “Partnering for Impact”, subtitle “Corporate Partnership & Sponsorship Prospectus 2026”, short intro paragraph (web-friendly). Uses `fadeUpBlur` / `fadeIn` with `useReducedMotion()`.

2. **B) About IIMAC + Community Snapshot** – SectionHeader + intro copy + stat grid of 6 highlights (520+ members, all IIMs, cities, events, demographics, global reach). Uses `containerStagger` + `staggerChildFadeUp`.

3. **C) Mission + Vision** – Two premium cards (Mission card, Vision card) with copy from prospectus page 3. Scroll reveal via `staggerChildFadeUp`.

4. **D) Sponsorship Overview + Partnership Tiers** – Intro with “shared value” emphasis + 5 tier cards: Platinum, Gold, Silver, Bronze, Community Partner with contribution amounts. Uses `containerStagger` + `staggerChildFadeUp`.

5. **E) Sponsorship Tier Benefits** – Responsive table (horizontal scroll on small screens) with benefit rows and tier columns (Platinum through Community). Contribution amounts in tier cards; benefits in table. `motion.div` with `whileInView` for reveal.

6. **F) Ideal Collaboration Areas** – Icon grid of 10 categories (Banking, Insurance, Real Estate, Car, Home Renovation, Childcare, Gym/Recreation, Coffee/Restaurants, Legal/Tax/Education, Telecom). Uses `containerStagger` + `staggerChildFadeUp`.

7. **G) Example Member Benefits + Sample Offers** – “Partner brands can offer” bullet list + “Sample offers” list with icons (banking, car rental, realty, telecom, coffee). List layout for better mobile behaviour.

8. **H) Partnership Activation Opportunities** – Event-style cards for: Annual Gala, Community Events, Leadership Roundtables, Cultural Picnics, Career Workshops. Uses `containerStagger` + `staggerChildFadeUp`.

9. **I) Contact** – “Contact Information” with subtitle “Directors – Partnerships & Sponsorships”. Two director cards: **Sai Krishna Chippa** (Ph +1-416-837-1646, “Connect with Sai on LinkedIn”) and **Minhaz Moin** (Ph +1-289-885-5973, “Connect with Minhaz on LinkedIn”). Website link: www.iimalumnicanada.ca.

10. **Existing sponsor sections retained** – “Premier Sponsor” (if any) and “Alumni Businesses & Supporters” still use `useQuery` for Supabase `sponsors`; layout updated to use design tokens and SectionHeader.

11. **CTA** – “Partner With IIMAC” + “Become a Sponsor” mailto (info@iimac.ca).

---

## Motion / UX

- **Scroll reveals:** SectionHeader (fadeIn + revealLine), section content (containerStagger, staggerChildFadeUp, fadeUpBlur, fadeIn) with `viewport={{ once: true }}`.
- **Reduced motion:** All motion variants come from `@/lib/motion` and take `useReducedMotion()`; hero and sections respect it (no blur / no stagger when reduced).
- **Mobile:** Responsive grid/layouts, benefits table in scrollable container, list layout for sample offers to avoid layout shift.
- **Institutions marquee:** Not touched; still in `Home.tsx` via `IIMsMarquee`. No changes to that component or route.

---

## How to verify

1. **Route:** Open `/partners` (e.g. from Home “Partner with IIMAC” or “View All Sponsors”).
2. **Content:** Scroll through A→I then Premier/Alumni sponsors then CTA; confirm all headings and copy match prospectus.
3. **Reveals:** Scroll the page; sections and cards should reveal (stagger where applicable). With “Reduce motion” enabled, transitions should be minimal or instant.
4. **Contact:** Click director phone numbers (tel: links) and LinkedIn links; click www.iimalumnicanada.ca.
5. **Sponsors:** If Supabase has active sponsors, Premier and Alumni sections should render; “Become a Sponsor” should open mailto.

---

## Summary

- **Single file modified:** `src/pages/Partners.tsx`.
- **Sponsorship page:** Same route `/partners`, same entry points; content upgraded to Corporate Partnership & Sponsorship Prospectus 2026 (A–I), existing sponsor blocks and CTA kept.
- **Design:** Uses existing design system (tokens, SectionHeader, Card, motion from `@/lib/motion`), premium institutional look, scroll reveals, and reduced-motion support.
