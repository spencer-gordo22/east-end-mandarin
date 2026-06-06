type Tone = "dark" | "light";

type LogoProps = {
  /** "stacked" (footer / large), "compact" (nav), or "icon" (mark only). */
  variant?: "stacked" | "compact" | "icon";
  /** "light" recolors for dark backgrounds (e.g. the footer). */
  tone?: Tone;
  className?: string;
};

/**
 * East End Mandarin — "Editorial Wordmark" logo.
 * - Wordmark set in Cormorant Garamond, tracked caps.
 * - The 文 mark set in Noto Serif SC, jade.
 */
export function Logo({ variant = "compact", tone = "dark", className }: LogoProps) {
  if (variant === "icon") return <LogoIcon tone={tone} className={className} />;
  if (variant === "stacked")
    return <LogoStacked tone={tone} className={className} />;
  return <LogoCompact tone={tone} className={className} />;
}

/** Compact horizontal lockup for the nav: 文 + tracked caps on one line. */
function LogoCompact({ tone, className }: { tone: Tone; className?: string }) {
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

/** Full stacked lockup: hairline + 文 + hairline, EAST END / MANDARIN, tagline. */
function LogoStacked({ tone, className }: { tone: Tone; className?: string }) {
  const rule = tone === "light" ? "bg-cream/35" : "bg-charcoal/55";
  const wen = tone === "light" ? "text-cream" : "text-jade";
  const word = tone === "light" ? "text-cream" : "text-charcoal";
  const tag = tone === "light" ? "text-cream/60" : "text-jade";
  return (
    <span className={`inline-flex flex-col items-center ${className ?? ""}`}>
      {/* wordmark group — its width sets the hairline-rule span */}
      <span className="inline-flex flex-col items-stretch">
        <span className="flex items-center gap-3">
          <span className={`h-px flex-1 ${rule}`} />
          <span
            aria-hidden="true"
            className={`font-noto leading-none ${wen}`}
            style={{ fontSize: "1.05rem" }}
          >
            文
          </span>
          <span className={`h-px flex-1 ${rule}`} />
        </span>
        <span
          className={`mt-2.5 pl-[0.18em] text-center font-cormorant font-medium uppercase leading-[1.06] tracking-[0.18em] ${word}`}
          style={{ fontSize: "1.6rem" }}
        >
          <span className="block">East End</span>
          <span className="block">Mandarin</span>
        </span>
      </span>
      <span
        className={`mt-2.5 text-center uppercase leading-none tracking-[0.34em] ${tag}`}
        style={{ fontSize: "0.62rem" }}
      >
        Mandarin Tutoring
      </span>
    </span>
  );
}

/** Mark only: jade 文 inside a thin charcoal hairline circle (favicon source). */
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
