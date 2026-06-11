import { Reveal } from "@/components/Reveal";
import { CtaButton } from "@/components/ui";
import { content } from "@/content";

// Small mode icons for the two ways to meet, shown beneath the hero CTAs.
const LOCATION_ICONS = [
  // In person — map pin
  <g key="pin">
    <path
      d="M12 21s7-5.686 7-11a7 7 0 1 0-14 0c0 5.314 7 11 7 11Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
    <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.5" />
  </g>,
  // Online — globe
  <path
    key="globe"
    d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0 0c2.5-2.2 3.8-5.3 3.8-9S14.5 5.2 12 3M12 21c-2.5-2.2-3.8-5.3-3.8-9S9.5 5.2 12 3M3.3 9h17.4M3.3 15h17.4"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  />,
];

export function Hero() {
  const { hero } = content;

  return (
    <section id="top" className="scroll-mt-24 bg-cream">
      <div className="mx-auto w-full max-w-[1180px] px-6 pb-20 pt-16 sm:px-8 md:pb-28 md:pt-24 lg:pb-32 lg:pt-28">
        <Reveal>
          <h1 className="text-balance font-serif text-[2.5rem] font-medium leading-[1.07] tracking-tight text-charcoal sm:text-5xl lg:text-6xl">
            {hero.title}
          </h1>
        </Reveal>
        <Reveal delay={0.06}>
          <p className="mt-7 max-w-3xl text-pretty text-lg leading-relaxed text-charcoal-soft sm:text-xl">
            {hero.subhead}
          </p>
        </Reveal>
        <Reveal delay={0.12}>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <CtaButton href={hero.primaryCta.href}>
              {hero.primaryCta.label}
            </CtaButton>
            <CtaButton href={hero.secondaryCta.href} variant="secondary">
              {hero.secondaryCta.label}
            </CtaButton>
          </div>
        </Reveal>
        <Reveal delay={0.18}>
          <ul className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-8">
            {hero.locations.map((loc, i) => (
              <li
                key={loc.label}
                className="flex items-center gap-2.5 text-base text-charcoal"
              >
                <span
                  aria-hidden="true"
                  className="flex h-5 w-5 shrink-0 items-center justify-center text-jade"
                >
                  <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
                    {LOCATION_ICONS[i]}
                  </svg>
                </span>
                <span>
                  <span className="font-medium">{loc.label}</span>
                  <span className="text-charcoal-soft"> — {loc.detail}</span>
                </span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
