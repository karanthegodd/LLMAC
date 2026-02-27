/**
 * Moving bar of individual IIM logos. Click → IIM detail page to enter info.
 * Edge fade + pause on hover. Infinite horizontal scroll (CSS keyframes in index.css).
 */
import { useState } from "react";
import { Link } from "react-router-dom";
import { IIMS } from "@/data/iims";

export function IIMsMarquee() {
  const items = [...IIMS, ...IIMS];
  const [paused, setPaused] = useState(false);

  return (
    <section
      className="relative overflow-hidden py-10 bg-gradient-to-b from-muted/60 to-muted/40 border-y"
      aria-label="21 IIMs Represented in IIMAC"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Edge fade mask (gradient) */}
      <div
        className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-muted/60 to-transparent z-10 pointer-events-none"
        aria-hidden
      />
      <div
        className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-muted/60 to-transparent z-10 pointer-events-none"
        aria-hidden
      />
      <div
        className="marquee-track flex w-max"
        style={{
          animation: "marquee 40s linear infinite",
          animationPlayState: paused ? "paused" : "running",
        }}
      >
        {items.map((iim, index) => (
          <Link
            key={`${iim.slug}-${index}`}
            to={`/iims/${iim.slug}`}
            className="inline-flex flex-col items-center justify-center gap-1 mx-6 shrink-0 rounded-xl bg-background/95 backdrop-blur border shadow-lg hover:shadow-xl hover:scale-105 hover:border-primary/50 transition-all duration-300 min-w-[8rem] w-[8rem] px-5 py-4"
            title={`${iim.name} - Click to add info`}
          >
            <img
              src={`https://www.google.com/s2/favicons?domain=${iim.domain}&sz=48`}
              alt=""
              className="h-12 w-12 object-contain"
              loading="lazy"
            />
            <span className="text-xs font-medium text-foreground truncate w-full text-center">{iim.short}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
