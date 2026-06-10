import { existsSync } from "node:fs";
import path from "node:path";
import Image from "next/image";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { Rule } from "@/components/ui";
import { content } from "@/content";

// Resolved at build time: only render the photo slot when the file exists,
// so the section looks complete with or without it (no placeholder box).
const hasPhoto = existsSync(
  path.join(process.cwd(), "public", "about-photo.jpg"),
);

export function Background() {
  const { background } = content;

  const pillars = (
    <div className="divide-y divide-line">
      {background.pillars.map((pillar, i) => (
        <Reveal key={pillar.label} delay={i * 0.06}>
          <div className="py-6">
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-jade">
              {pillar.label}
            </h3>
            <p className="mt-2.5 text-pretty text-lg leading-relaxed text-charcoal-soft">
              {pillar.body}
            </p>
          </div>
        </Reveal>
      ))}
    </div>
  );

  return (
    <Section id="background" tone="sand">
      <Reveal className="mx-auto max-w-[720px]">
        <Rule />
        <h2 className="mt-6 text-balance font-serif text-3xl leading-[1.1] tracking-tight text-charcoal sm:text-4xl lg:text-[2.875rem]">
          {background.title}
        </h2>
        <p className="mt-5 text-pretty text-lg leading-relaxed text-charcoal-soft">
          {background.intro}
        </p>
      </Reveal>

      {hasPhoto ? (
        <div className="mx-auto mt-12 grid max-w-[940px] grid-cols-1 items-start gap-10 sm:mt-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
          <Reveal>
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-sand shadow-sm">
              <Image
                src={background.photo.src}
                alt={background.photo.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <div>{pillars}</div>
        </div>
      ) : (
        <div className="mx-auto mt-10 max-w-[720px] sm:mt-12">{pillars}</div>
      )}
    </Section>
  );
}
