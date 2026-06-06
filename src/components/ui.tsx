import type { ReactNode } from "react";
import { Reveal } from "@/components/Reveal";

/** Short jade rule used as a warm section accent above headings. */
export function Rule({ className }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={`block h-[3px] w-10 rounded-full bg-jade ${className ?? ""}`}
    />
  );
}

type SectionHeaderProps = {
  title: string;
  intro?: string;
  align?: "left" | "center";
  className?: string;
};

/** Jade rule + serif title (+ optional intro), revealed on scroll. */
export function SectionHeader({
  title,
  intro,
  align = "left",
  className,
}: SectionHeaderProps) {
  const isCenter = align === "center";
  return (
    <Reveal
      className={`${isCenter ? "mx-auto max-w-2xl text-center" : "max-w-2xl"} ${
        className ?? ""
      }`}
    >
      <Rule className={isCenter ? "mx-auto" : ""} />
      <h2 className="mt-6 text-balance font-serif text-3xl leading-[1.1] tracking-tight text-charcoal sm:text-4xl lg:text-[2.875rem]">
        {title}
      </h2>
      {intro ? (
        <p className="mt-5 text-pretty text-lg leading-relaxed text-charcoal-soft">
          {intro}
        </p>
      ) : null}
    </Reveal>
  );
}

type CtaButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
};

/** Pill call-to-action link. Relies on the global :focus-visible ring. */
export function CtaButton({
  href,
  children,
  variant = "primary",
  className,
}: CtaButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full text-base font-medium transition duration-150 ease-out active:scale-[0.97]";
  const styles =
    variant === "primary"
      ? "bg-jade px-7 py-3.5 text-white shadow-sm hover:-translate-y-0.5 hover:bg-jade-deep hover:shadow-md"
      : "border border-line-strong px-7 py-3.5 text-charcoal hover:border-jade hover:text-jade";
  return (
    <a href={href} className={`${base} ${styles} ${className ?? ""}`}>
      {children}
    </a>
  );
}

/** Inline text link with an animated arrow. */
export function ArrowLink({
  href,
  children,
  className,
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={`group inline-flex items-center gap-1.5 font-medium text-jade transition-colors hover:text-jade-deep ${
        className ?? ""
      }`}
    >
      {children}
      <span
        aria-hidden="true"
        className="transition-transform duration-200 ease-out group-hover:translate-x-1"
      >
        →
      </span>
    </a>
  );
}
