/**
 * Centralized animation system for IIMAC.
 * Single source for section reveals, hero, cards: use EASING, DURATIONS, and variants from here.
 * All variants respect prefers-reduced-motion: only opacity/transform, minimal or no motion when reduced.
 */

import { Variants } from "framer-motion";

/** Cubic-bezier easing for premium feel */
export const EASING = {
  /** Smooth ease-out for entrances */
  easeOut: [0.33, 1, 0.68, 1] as const,
  /** Slight ease-in-out for micro-interactions */
  easeInOut: [0.65, 0, 0.35, 1] as const,
  /** Snappy for UI feedback */
  snap: [0.4, 0, 0.2, 1] as const,
  /** Ceremonial / formal */
  formal: [0.25, 0.46, 0.45, 0.94] as const,
  /** Prestige door open: slow-in, faster mid, ease-out */
  doorOpen: [0.22, 0.61, 0.36, 1] as const,
} as const;

/** Durations in seconds */
export const DURATIONS = {
  fast: 0.2,
  normal: 0.4,
  slow: 0.6,
  intro: 0.8,
} as const;

/** When reduced motion: instant (0) or minimal fade only */
function withReducedMotion<T>(
  reduced: boolean,
  value: T,
  fallback: T
): T {
  return reduced ? fallback : value;
}

/**
 * Hook-friendly: get transition config that respects reduced motion.
 * Use from components that have access to useReducedMotion().
 */
export function getTransition(
  reducedMotion: boolean,
  options: { duration?: number; delay?: number; ease?: readonly number[] }
) {
  const duration = reducedMotion ? 0 : (options.duration ?? DURATIONS.normal);
  return {
    duration,
    delay: options.delay ?? 0,
    ease: options.ease ?? EASING.easeOut,
  };
}

/** fadeUp: from below with opacity. Stagger via delay in parent. */
export function fadeUp(
  reducedMotion: boolean,
  options?: { y?: number; duration?: number; delay?: number }
): Variants {
  const y = withReducedMotion(reducedMotion, options?.y ?? 24, 0);
  const duration = withReducedMotion(reducedMotion, options?.duration ?? DURATIONS.normal, 0);
  return {
    hidden: { opacity: 0, y },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration, ease: EASING.easeOut, delay: options?.delay ?? 0 },
    },
  };
}

/** fadeIn: opacity only */
export function fadeIn(
  reducedMotion: boolean,
  options?: { duration?: number; delay?: number }
): Variants {
  const duration = withReducedMotion(reducedMotion, options?.duration ?? DURATIONS.normal, 0);
  return {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration, ease: EASING.easeOut, delay: options?.delay ?? 0 },
    },
  };
}

/** scaleIn: scale + opacity */
export function scaleIn(
  reducedMotion: boolean,
  options?: { scale?: number; duration?: number; delay?: number }
): Variants {
  const scale = withReducedMotion(reducedMotion, options?.scale ?? 0.96, 1);
  const duration = withReducedMotion(reducedMotion, options?.duration ?? DURATIONS.normal, 0);
  return {
    hidden: { opacity: 0, scale },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration, ease: EASING.easeOut, delay: options?.delay ?? 0 },
    },
  };
}

/** revealLine: underline draw (scaleX from 0 to 1). Use on a child element with origin-left. */
export function revealLine(
  reducedMotion: boolean,
  options?: { duration?: number; delay?: number }
): Variants {
  const duration = withReducedMotion(reducedMotion, options?.duration ?? DURATIONS.slow, 0);
  return {
    hidden: { opacity: 1, scaleX: 0 },
    visible: {
      opacity: 1,
      scaleX: 1,
      transition: { duration, ease: EASING.formal, delay: options?.delay ?? 0 },
    },
  };
}

/** containerStagger: children stagger with fadeUp */
export function containerStagger(
  reducedMotion: boolean,
  options?: { staggerChildren?: number; delayChildren?: number; childY?: number }
): Variants {
  const staggerChildren = withReducedMotion(reducedMotion, options?.staggerChildren ?? 0.08, 0);
  const delayChildren = options?.delayChildren ?? 0;
  return {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren,
        staggerChildren,
      },
    },
  };
}

/** Child variant for containerStagger: fadeUp with optional blur->sharp */
export function staggerChildFadeUp(reducedMotion: boolean, y = 16): Variants {
  const dy = withReducedMotion(reducedMotion, y, 0);
  const duration = withReducedMotion(reducedMotion, DURATIONS.normal, 0);
  return {
    hidden: { opacity: 0, y: dy },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration, ease: EASING.easeOut },
    },
  };
}

/** fadeUpBlur: y + opacity + blur to sharp (for section reveals). Reduced motion: no blur. */
export function fadeUpBlur(
  reducedMotion: boolean,
  options?: { y?: number; duration?: number; delay?: number }
): Variants {
  const y = withReducedMotion(reducedMotion, options?.y ?? 20, 0);
  const duration = withReducedMotion(reducedMotion, options?.duration ?? DURATIONS.normal, 0);
  const blur = withReducedMotion(reducedMotion, 4, 0);
  return {
    hidden: { opacity: 0, y, filter: blur ? `blur(${blur}px)` : "blur(0px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration, ease: EASING.easeOut, delay: options?.delay ?? 0 },
    },
  };
}
