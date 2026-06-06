import type { ReactNode } from "react";

type SectionProps = {
  id?: string;
  /** Background tone — alternate between sections for gentle rhythm. */
  tone?: "cream" | "sand";
  children: ReactNode;
  className?: string;
};

/**
 * Standard full-bleed section: alternating surface + a centered ~1180px
 * content container with consistent, generous vertical padding.
 */
export function Section({
  id,
  tone = "cream",
  children,
  className,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`scroll-mt-24 ${tone === "sand" ? "bg-sand" : "bg-cream"} ${
        className ?? ""
      }`}
    >
      <div className="mx-auto w-full max-w-[1180px] px-6 py-20 sm:px-8 sm:py-28 lg:py-32">
        {children}
      </div>
    </section>
  );
}
