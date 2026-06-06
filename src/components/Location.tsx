import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/ui";
import { content } from "@/content";

const ICONS = [
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

export function Location() {
  const { location } = content;

  return (
    <Section id="location" tone="sand">
      <SectionHeader title={location.title} />

      <div className="mt-12 grid grid-cols-1 gap-5 sm:mt-16 sm:grid-cols-2 sm:gap-6">
        {location.modes.map((mode, i) => (
          <Reveal key={mode.title} delay={i * 0.07}>
            <article className="flex h-full flex-col rounded-2xl border border-line bg-white p-8 transition duration-200 ease-out hover:-translate-y-1 hover:border-jade/30 hover:shadow-lg">
              <span
                aria-hidden="true"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-jade-soft text-jade"
              >
                <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
                  {ICONS[i] ?? ICONS[ICONS.length - 1]}
                </svg>
              </span>
              <h3 className="mt-5 font-serif text-xl leading-snug tracking-tight text-charcoal">
                {mode.title}
              </h3>
              <p className="mt-2.5 text-pretty leading-relaxed text-charcoal-soft">
                {mode.body}
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
