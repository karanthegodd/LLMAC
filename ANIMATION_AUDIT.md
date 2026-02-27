# Implementation audit: Campus Arrival + Our Institutions

## A) Our Institutions marquee – restored

### Files modified

| File | What changed | Where to verify |
|------|--------------|-----------------|
| `src/index.css` | Added global `@keyframes marquee` (0% → translateX(0), 100% → translateX(-50%)) so the animation runs regardless of Tailwind purge. Added `.marquee-track` rule under `@media (prefers-reduced-motion: reduce)` to set `animation: none !important`. | Marquee runs on load; with reduced motion preference the strip is static. |
| `src/components/IIMsMarquee.tsx` | Gave the scrolling track the class `marquee-track` for reduced-motion override. Kept inline `animation` / `animationPlayState` for pause on hover. Standardized card size with `min-w-[8rem] w-[8rem]`, kept edge fade gradients and hover pause. | **Our Institutions** section: logo strip auto-scrolls horizontally, pauses on hover, left/right edge fade, uniform card width. Scroll to “Our Institutions” on Home. |

---

## B) Campus Arrival experience + motion system

### 1) Shared motion/reveal system

| File | What changed | Where to verify |
|------|--------------|-----------------|
| `src/lib/motion.ts` | Documented as the single source for section reveals, hero, and cards (EASING, DURATIONS, variants). No API changes. | All section and card animations use `@/lib/motion` (see Home.tsx, SectionHeader.tsx). |

### 2) Hero “lobby” treatment

| File | What changed | Where to verify |
|------|--------------|-----------------|
| `src/pages/Home.tsx` | Hero ref + `useScroll` + `useTransform(scrollY, [0, 600], [0, 80])` for `heroBgY`. Layer A (ambient gradient) and Layer B (grid) are `motion.div` with `style={{ y: heroBgY }}` so background moves slower on first scroll. Content container kept as `motion.div` (no y) so only background has parallax. Layer A still uses `animate-ambient-drift` when motion is allowed. | **Hero**: Scroll down from top; background (gradient + grid) moves slower than content (parallax). Typography and spacing unchanged. |

### 3) Section reveals (heading + underline draw, content stagger)

| File | What changed | Where to verify |
|------|--------------|-----------------|
| `src/components/SectionHeader.tsx` | No edits this pass; already uses `fadeIn` for heading, `revealLine` for underline (scaleX, origin-left). | **Any section with SectionHeader** (e.g. “Unite. Grow. Impact.”, “Who We Serve”, “Our Institutions”, “What We Do”): heading fades in, underline draws left→right on scroll into view. |
| `src/pages/Home.tsx` | Already uses `containerStagger` + `staggerChildFadeUp` for stats, cards, CTA; `fadeUpBlur` for event/chapter headings. | **Key Stats**, **Unite/Grow/Impact** cards, **Who We Serve**, **What We Do**, **Events**: content staggers in on scroll (once). |

### 4) Micro-interactions + reduced motion

| File | What changed | Where to verify |
|------|--------------|-----------------|
| `src/pages/Home.tsx` | No new changes; existing `MotionCard` has `whileHover`: lift (`y: -6`), shadow bloom, border emphasis. `MotionCtaButton` has shine sweep (gradient overlay animates on hover). All use `reducedMotion` to disable or simplify. | **Cards**: hover in Unite/Grow/Impact, Who We Serve, What We Do – lift, shadow, border. **CTA band**: “Join IIMAC & Grow Your Network” button – hover for scale + shine sweep. |
| `src/index.css` | `@media (prefers-reduced-motion: reduce)` disables `.animate-ambient-drift` and `.marquee-track` animation. | System “Reduce motion” on: hero ambient drift and institutions marquee stop; other motion already gated by `useReducedMotion()` in components. |

---

## C) Summary

- **Modified:** `src/index.css`, `src/components/IIMsMarquee.tsx`, `src/lib/motion.ts`, `src/pages/Home.tsx`.
- **Created:** This file (`ANIMATION_AUDIT.md`).

**Quick checks**

1. **Institutions marquee** – Open Home, scroll to “Our Institutions”. Row scrolls horizontally; hover to pause; edges fade; cards uniform width. With reduced motion: no scroll.
2. **Hero parallax** – From top of Home, scroll down; background layers drift slower than content.
3. **Section reveals** – Scroll each section into view; headings and underlines reveal; cards/stats stagger in.
4. **Card/button micro-interactions** – Hover cards (lift/shadow/border), hover CTA button (shine).
5. **Reduced motion** – Enable OS “Reduce motion”; hero drift and marquee stop; other animations respect `useReducedMotion()`.
