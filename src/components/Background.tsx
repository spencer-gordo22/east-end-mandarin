import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { Rule } from "@/components/ui";
import { content } from "@/content";

export function Background() {
  const { background } = content;
  const [name, org] = background.attribution.split(" · ");

  return (
    <Section id="background" tone="sand">
      <div className="mx-auto max-w-[720px]">
        <Reveal>
          <Rule />
          <h2 className="mt-6 text-balance font-serif text-3xl leading-[1.1] tracking-tight text-charcoal sm:text-4xl lg:text-[2.875rem]">
            {background.title}
          </h2>
        </Reveal>

        <div className="mt-7 space-y-5">
          {background.paragraphs.map((paragraph, i) => (
            <Reveal key={i} delay={0.04 + i * 0.05}>
              <p className="text-pretty text-lg leading-relaxed text-charcoal-soft">
                {paragraph}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <p className="mt-8 border-t border-line pt-6 text-sm">
            <span className="font-medium text-charcoal">{name}</span>
            <span className="text-charcoal-soft"> · {org}</span>
          </p>
        </Reveal>
      </div>
    </Section>
  );
}
