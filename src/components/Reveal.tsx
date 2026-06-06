"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  /** Delay in seconds, useful for staggering siblings. */
  delay?: number;
  /** Vertical travel distance in px. */
  y?: number;
  className?: string;
};

/**
 * Subtle scroll-reveal: a quick fade + small lift into view, once.
 * - ~240ms with a strong ease-out — smooth, no flash, no bounce.
 * - Honors `prefers-reduced-motion` (renders static content, no transform).
 * - Tagged `data-reveal` so a <noscript> rule keeps content visible with JS off.
 */
export function Reveal({ children, delay = 0, y = 14, className }: RevealProps) {
  const prefersReduced = useReducedMotion();

  if (prefersReduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      data-reveal=""
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 0.24, delay, ease: [0.23, 1, 0.32, 1] }}
    >
      {children}
    </motion.div>
  );
}
