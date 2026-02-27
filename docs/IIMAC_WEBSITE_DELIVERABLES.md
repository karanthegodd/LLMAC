# IIMAC Website Redesign — Week 1 Deliverables

**Prepared for:** IIMAC (IIM Alumni Canada)  
**Date:** February 2025  
**Structure:** As guided — Research → References → Layout → Sitemap → Scope Lock

---

## 1. IIMAC Mission, Vision & Positioning Review

### Current Stated Position

| Element | Content |
|--------|---------|
| **Mission** | To build a highly valued brand and community for alumni of all Indian Institutes of Management living in Canada, facilitating professional and personal opportunities that help alumni meaningfully integrate and contribute to Canadian society. |
| **Vision** | To be a member-focused organization which brings together alumni of all Indian Institutes of Management based in Canada by supporting the social and professional aspirations of the members. |
| **Positioning** | A non-profit connecting and engaging a vibrant community of IIM alumni based in Canada — 520+ members, presence in every major city. Fosters social, cultural, and business relationships; elevates the IIM brand in Canada; makes a positive impact on local communities. |

### Key Offerings (from iimalumnicanada.ca)

- Networking & mentorship (Welcome Chats, Buddy Programs, Industry Networking)
- Events & workshops for personal/professional development
- Member benefits and partner offers
- Community engagement campaigns
- Social and cultural events

### Suggested Refinements for Website Messaging

- Lead with “Unite. Grow. Impact.” as the primary tagline (Brand Kit).
- Make “Canada” and “Canadian integration” visible in hero and About.
- Emphasize pan-IIM (all 21 IIMs) as a differentiator.
- Clarify “member-focused” and “vibrant community” with concrete examples (events, stats, testimonials).

---

## 2. Reference Alumni / Professional Websites — Review of 3 Sites

### Reference 1: IIM Americas (iimamericas.org)

| Aspect | Observation |
|--------|-------------|
| **Audience** | Pan-Americas, 10,000+ alumni |
| **Structure** | Minimal: Hero → About → Objectives → Officers → Join CTA |
| **Strengths** | Clear value prop (“leaders, learners, changemakers”); prominent Join CTA; objectives listed |
| **Gaps** | No events, no directory, no careers/jobs |
| **Takeaway for IIMAC** | Keep objectives explicit; strong hero with single CTA |

### Reference 2: IIM Alumni Singapore (iimalumni.sg)

| Aspect | Observation |
|--------|-------------|
| **Audience** | 3,000+ alumni in Singapore |
| **Structure** | Hero → Vision quote → Pillars (No Mo FOMO, Every Event 50% Less, Find Purpose, Join Event) → What’s Happening → Volunteer CTA |
| **Strengths** | Clear pillars; annual events package; volunteer-focused; branded initiatives (IIMPact, INSPire, IIMPulse, IIMChat) |
| **Gaps** | Event grid is sparse; no clear Careers section |
| **Takeaway for IIMAC** | Use value pillars; highlight volunteer opportunities; connect to India–Canada collaboration |

### Reference 2b: IIM Society (iimsociety.org)

| Aspect | Observation |
|--------|-------------|
| **Audience** | Global IIM Society members |
| **Structure** | Community hub: Newsroom, Events, Gallery, Latest Members |
| **Strengths** | Member-centric; news and events |
| **Gaps** | Login-gated; less public marketing |
| **Takeaway for IIMAC** | Consider member-only areas for Phase 2 |

### Reference 3: Harvard Alumni (alumni.harvard.edu)

| Aspect | Observation |
|--------|-------------|
| **Audience** | Global Harvard alumni |
| **Structure** | Hero news + featured stories → News cards → Events grid → Alumni resources / Harvard Looks Forward |
| **Strengths** | Content-rich; news-first; events by date; member login; advocacy/resources |
| **Gaps** | Very content-heavy; may be too complex for a smaller org |
| **Takeaway for IIMAC** | Events grid and “Resources” pattern; avoid over-complexity |

### Best-Practice Alignment (2024 Alumni Web Benchmarks)

- Alumni directory for networking
- Event management and promotion
- Career networking (jobs, mentorship)
- Member resources (blog, calendar)
- Social integration
- Success stories / impact
- Fast load and accessible UX
- Intuitive nav and clear CTAs

---

## 3. Recommended Layout — Finalized Approach

### Chosen Direction: **Hybrid of IIM Americas + IIM Singapore**

Rationale:

- IIM Americas: Clear, simple, focused on “Join” and objectives.
- IIM Singapore: Pillar-based value, volunteer, events.
- Harvard: Events grid and resources, but simplified.

### Layout Principles

1. **Hero** — Single, strong headline; primary tagline; one primary CTA.
2. **Trust bar** — Stats strip (520+, 21 IIMs, 20+ events).
3. **Value pillars** — 4 cards (Network, Events, Career, Business).
4. **About** — Short mission/vision; “Learn more” link.
5. **Events** — Grid/list; link to full events page.
6. **Testimonials** — 2–3 community voices.
7. **CTA** — “Ready to Join?” with Register button.
8. **Sponsors** — Logo strip (separate from IIMs).
9. **IIMs bar** — 21 IIMs represented as a moving logo strip.

### Page-Level Layout Summary

| Page | Layout notes |
|------|--------------|
| **Home** | Hero → Stats → IIMs bar → About → Why Join (4 pillars) → Events preview → Community voices → CTA → Sponsors |
| **About** | Mission/vision, history, board, initiatives |
| **Events** | Upcoming + past; filters; register CTA |
| **Membership** | Benefits, tiers, how to join, FAQ |
| **Contact** | Form + email; social links |

---

## 4. Sample Section Order Using Sitemap

### Sitemap (Proposed)

```
/
├── /                    Home
├── /about               About IIMAC
├── /events              Events & News
├── /membership          Membership
├── /resources           Resources (placeholder / future)
├── /contact             Contact
├── /register            Register / Join
├── /auth                Login / Member Portal
├── /partners            Partners & Sponsors
├── /distinguished-alumni Distinguished Alumni
├── /iims/:slug          IIM Detail (21 IIMs)
└── /registration-confirmation
```

### Section Order on Home Page (Aligned to Sitemap & Layout)

| # | Section | Purpose | Maps To |
|---|---------|---------|---------|
| 1 | Header / Nav | Logo, nav links, Join CTA | Global |
| 2 | Hero | “Unite. Grow. Impact.” + intro + primary CTA | / |
| 3 | Key Stats | 520+ members, 21 IIMs, 20+ events | Trust |
| 4 | IIMs Bar | Moving strip of 21 IIM logos (click → /iims/:slug) | /iims/:slug |
| 5 | About IIMAC | Short overview + mission; “Learn more” | /about |
| 6 | Why Join | 4 pillars (Network, Events, Career, Business) | Value prop |
| 7 | Events Preview | Upcoming events; “View all” | /events |
| 8 | Community Voices | 2–3 testimonials | Social proof |
| 9 | Call to Action | “Ready to Join?” + Register | /register |
| 10 | Sponsors | Our Proud Sponsors logo strip | /partners |
| 11 | Footer | Logo, Quick Links, Social, Copyright | Global |

### Nav Structure

- **Primary:** About | Events | Membership | Resources | Contact  
- **CTA:** Join / Login → /#cta or /register

---

## 5. Scope Lock — In-Scope vs Out-of-Scope

### In-Scope (Phase 1)

| Item | Notes |
|------|-------|
| Home page | Hero, Stats, IIMs bar, About, Why Join, Events preview, Testimonials, CTA, Sponsors |
| About page | Mission, vision, history, board (if desired) |
| Events page | Listing, filters, registration links |
| Membership page | Benefits, tiers, how to join |
| Contact page | Form, email, social links |
| Register / Join | Registration flow |
| Partners / Sponsors | Logo display, sponsor management |
| IIM detail pages | 21 IIMs; click from bar → detail page with info entry |
| Responsive design | Mobile-first; hamburger nav |
| Brand Kit | Colors, fonts, logo usage |
| WordPress-ready structure | Sections as blocks; minimal hardcoded content |

### Out-of-Scope (Phase 1)

| Item | Notes |
|------|-------|
| Member directory | Needs auth, privacy, search — Phase 2 |
| Job board / Careers | “Coming Soon” for now |
| Full CMS integration | WordPress conversion later |
| Payment gateway | Membership payment flows — Phase 2 |
| Alumni portal (auth) | Login/My Community — Phase 2 |
| Blog / News | Could be Phase 2 |
| Multi-language | English only in Phase 1 |
| Distinguished Alumni CMS | Static or manual for Phase 1 |

### Phase 2 Candidates (Future)

- Member directory with search/filters
- Job board and mentorship matching
- Payment and membership renewal
- Blog / News
- Member portal (profile, preferences)

---

## Appendix A: Quick Reference — Competitor Comparison

| Feature | IIM Americas | IIM Singapore | Harvard | IIMAC (Proposed) |
|---------|--------------|---------------|---------|------------------|
| Hero CTA | Join | Subscribe / Join | Login / Register | Join / Login |
| Stats | No | No | No | Yes (520+, 21 IIMs, 20+ events) |
| Value pillars | Objectives | 4 pillars | Resources | 4 pillars |
| Events | No | Yes | Yes | Yes |
| Testimonials | No | Vision quote | News | Yes |
| IIMs represented | No | No | N/A | Yes (21 IIMs bar) |
| Sponsors | No | Partners | No | Yes |
| Volunteer CTA | No | Yes | Yes | Optional |

---

## Appendix B: Files & Routes (Current Codebase)

| Route | File | Status |
|-------|------|--------|
| / | Home.tsx | ✅ Implemented |
| /about | About.tsx | ✅ Exists |
| /events | Events.tsx | ✅ Exists |
| /membership | Membership.tsx | ✅ Exists |
| /contact | Contact.tsx | ✅ Exists |
| /register | Register.tsx | ✅ Exists |
| /auth | Auth.tsx | ✅ Exists |
| /partners | Partners.tsx | ✅ Exists |
| /resources | Resources.tsx | ✅ Implemented (placeholder) |
| /distinguished-alumni | DistinguishedAlumni.tsx | ✅ Exists |
| /iims/:slug | IIMDetail.tsx | ✅ Implemented |

---

*Document version 1.0 — Week 1 Deliverables*
