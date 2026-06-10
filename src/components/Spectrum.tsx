"use client";

import { motion, useReducedMotion } from "framer-motion";

const EASE = [0.23, 1, 0.32, 1] as const;
const VIEWPORT = { once: true, margin: "0px 0px -15% 0px" } as const;

/**
 * The teaching "spectrum": a jade line that draws in on scroll with labeled
 * stops. Horizontal on desktop, vertical on mobile (no cramped labels, no
 * horizontal scroll). Honors prefers-reduced-motion.
 */
export function Spectrum({
  stops,
  caption,
}: {
  stops: readonly string[];
  caption: string;
}) {
  const reduce = useReducedMotion();

  const dot = (
    <span className="h-3.5 w-3.5 shrink-0 rounded-full border-2 border-jade bg-cream" />
  );

  return (
    <div>
      {/* Desktop — horizontal */}
      <div className="relative hidden md:block">
        <span className="absolute inset-x-[10%] top-[7px] h-px bg-line" />
        <motion.span
          className="absolute inset-x-[10%] top-[7px] h-px origin-left bg-jade"
          initial={reduce ? false : { scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.6, ease: EASE }}
        />
        <ol className="relative grid grid-cols-5">
          {stops.map((stop, i) => (
            <motion.li
              key={stop}
              className="flex flex-col items-center px-2 text-center"
              initial={reduce ? false : { opacity: 0, y: 6 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEWPORT}
              transition={{ duration: 0.3, delay: 0.2 + i * 0.08, ease: EASE }}
            >
              {dot}
              <span className="mt-3 text-sm font-medium leading-snug text-charcoal">
                {stop}
              </span>
            </motion.li>
          ))}
        </ol>
      </div>

      {/* Mobile — vertical */}
      <div className="relative md:hidden">
        <span className="absolute bottom-3 left-[7px] top-3 w-px bg-line" />
        <motion.span
          className="absolute bottom-3 left-[7px] top-3 w-px origin-top bg-jade"
          initial={reduce ? false : { scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.6, ease: EASE }}
        />
        <ol className="relative space-y-6">
          {stops.map((stop, i) => (
            <motion.li
              key={stop}
              className="flex items-center gap-4"
              initial={reduce ? false : { opacity: 0, x: 6 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={VIEWPORT}
              transition={{ duration: 0.3, delay: 0.15 + i * 0.08, ease: EASE }}
            >
              {dot}
              <span className="text-base font-medium text-charcoal">{stop}</span>
            </motion.li>
          ))}
        </ol>
      </div>

      <p className="mt-9 max-w-xl text-pretty leading-relaxed text-charcoal-soft">
        {caption}
      </p>
    </div>
  );
}
