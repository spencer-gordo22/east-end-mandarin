type Tone = "dark" | "light";

type LogoProps = {
  /** "wordmark" = 文 + tracked caps (nav, footer). "icon" = mark only (favicon). */
  variant?: "wordmark" | "icon";
  /** "light" recolors for dark backgrounds (e.g. the footer). */
  tone?: Tone;
  className?: string;
};

/**
 * East End Mandarin logo.
 * - Wordmark: a small jade 文 (Noto Serif SC) + "East End Mandarin" in tracked
 *   Cormorant Garamond caps, on one line.
 * - Icon: the 文 inside a thin hairline circle (favicon source).
 */
export function Logo({ variant = "wordmark", tone = "dark", className }: LogoProps) {
  if (variant === "icon") return <LogoIcon tone={tone} className={className} />;
  return <LogoWordmark tone={tone} className={className} />;
}

function LogoWordmark({ tone, className }: { tone: Tone; className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 ${className ?? ""}`}>
      <span
        aria-hidden="true"
        className={`font-noto leading-none ${tone === "light" ? "" : "text-jade"}`}
        style={{ fontSize: "1.15em" }}
      >
        文
      </span>
      <span className="pl-[0.18em] font-cormorant font-medium uppercase leading-none tracking-[0.18em]">
        East End Mandarin
      </span>
    </span>
  );
}

/** Mark only: 文 inside a thin hairline circle (favicon source). */
function LogoIcon({ tone, className }: { tone: Tone; className?: string }) {
  return (
    <span
      role="img"
      aria-label="East End Mandarin"
      className={`inline-flex items-center justify-center rounded-full border ${
        tone === "light" ? "border-cream/60" : "border-charcoal/70"
      } ${className ?? "h-9 w-9"}`}
    >
      <span
        aria-hidden="true"
        className={`font-noto leading-none ${tone === "light" ? "text-cream" : "text-jade"}`}
        style={{ fontSize: "1.1rem" }}
      >
        文
      </span>
    </span>
  );
}
