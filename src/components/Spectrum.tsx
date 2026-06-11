"use client";

import { motion, useReducedMotion } from "framer-motion";

const EASE = [0.23, 1, 0.32, 1] as const;
const VIEWPORT = { once: true, margin: "0px 0px -15% 0px" } as const;

/**
 * The progress spectrum: a single jade gradient line a student lands somewhere
 * on, with four labeled milestones. The line draws in on scroll and the stops
 * fade up in sequence, so it reads as the line passing each milestone.
 *
 * - Desktop/tablet (sm+): horizontal line, stops evenly spaced.
 * - Mobile: a clean vertical line — same stops, no horizontal scroll.
 * - Honors `prefers-reduced-motion` (renders fully drawn, no movement).
 */
export function Spectrum({ stops }: { stops: readonly string[] }) {
  const reduce = useReducedMotion();

  // Stagger so each stop appears roughly as the drawing line reaches it.
  const stopDelay = (i: number) =>
    reduce ? 0 : 0.12 + (i / Math.max(stops.length - 1, 1)) * 0.5;

  const stopMotion = (i: number) => ({
    initial: { opacity: reduce ? 1 : 0, y: reduce ? 0 : 8 },
    whileInView: { opacity: 1, y: 0 },
    viewport: VIEWPORT,
    transition: { duration: reduce ? 0 : 0.28, delay: stopDelay(i), ease: EASE },
  });

  const dotClass =
    "block h-3.5 w-3.5 rounded-full border-2 border-jade bg-cream";

  return (
    <div className="mt-10 sm:mt-14">
      {/* Horizontal — tablet and up */}
      <ol className="relative hidden grid-cols-4 sm:grid">
        <motion.span
          aria-hidden="true"
          style={{ transformOrigin: "left" }}
          className="absolute left-[12.5%] right-[12.5%] top-[6px] block h-0.5 rounded-full bg-gradient-to-r from-jade/25 via-jade to-jade-deep"
          initial={{ scaleX: reduce ? 1 : 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={VIEWPORT}
          transition={{ duration: reduce ? 0 : 0.7, ease: EASE }}
        />
        {stops.map((label, i) => (
          <motion.li
            key={label}
            className="group relative z-10 flex flex-col items-center text-center"
            {...stopMotion(i)}
          >
            <span
              aria-hidden="true"
              className={`${dotClass} transition-[background-color,transform] duration-200 ease-out group-hover:bg-jade [@media(hover:hover)]:group-hover:scale-110`}
            />
            <span className="mt-4 max-w-[11ch] text-sm font-medium leading-snug text-charcoal-soft transition-colors duration-200 group-hover:text-charcoal">
              {label}
            </span>
          </motion.li>
        ))}
      </ol>

      {/* Vertical — mobile */}
      <ol className="relative space-y-7 sm:hidden">
        {stops.map((label, i) => {
          const isLast = i === stops.length - 1;
          return (
            <motion.li
              key={label}
              className="relative flex items-center gap-4"
              {...stopMotion(i)}
            >
              {!isLast && (
                <motion.span
                  aria-hidden="true"
                  style={{ transformOrigin: "top" }}
                  className="absolute left-[6px] top-1/2 block h-[calc(100%+1.75rem)] w-0.5 rounded-full bg-gradient-to-b from-jade to-jade/40"
                  initial={{ scaleY: reduce ? 1 : 0 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={VIEWPORT}
                  transition={{
                    duration: reduce ? 0 : 0.4,
                    delay: stopDelay(i),
                    ease: EASE,
                  }}
                />
              )}
              <span aria-hidden="true" className={`relative z-10 shrink-0 ${dotClass}`} />
              <span className="text-base font-medium leading-snug text-charcoal">
                {label}
              </span>
            </motion.li>
          );
        })}
      </ol>
    </div>
  );
}
