/**
 * Section title with optional underline reveal (chapter-title feel).
 * Respects prefers-reduced-motion.
 */

import { motion, useReducedMotion } from "framer-motion";
import { revealLine, fadeIn } from "@/lib/motion";

type SectionHeaderProps = {
  id?: string;
  title: string;
  subtitle?: string;
  className?: string;
};

export function SectionHeader({ id, title, subtitle, className = "" }: SectionHeaderProps) {
  const reduced = useReducedMotion() ?? false;

  return (
    <div className={`text-center space-y-4 mb-14 ${className}`}>
      <motion.h2
        id={id}
        className="chapter-title text-2xl md:text-3xl font-semibold text-foreground tracking-[0.12em] inline-block"
        variants={fadeIn(reduced, { duration: 0.4 })}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
      >
        {title}
        <motion.span
          className="block h-px w-full bg-primary/50 rounded mt-3 origin-left"
          variants={revealLine(reduced, { duration: 0.5, delay: 0.12 })}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
        />
      </motion.h2>
      {subtitle && (
        <motion.p
          className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          variants={fadeIn(reduced, { duration: 0.4, delay: 0.18 })}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
