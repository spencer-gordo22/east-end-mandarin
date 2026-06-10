import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { SectionHeader, ArrowLink } from "@/components/ui";
import { content } from "@/content";

export function Services() {
  const { services } = content;

  return (
    <Section id="services" tone="cream">
      <SectionHeader title={services.title} intro={services.intro} />

      <div className="mt-12 grid grid-cols-1 gap-5 sm:mt-16 sm:gap-6 md:grid-cols-2">
        {services.items.map((item, i) => (
          <Reveal key={item.title} delay={(i % 2) * 0.07}>
            <article className="flex h-full flex-col rounded-2xl border border-line bg-white p-8 transition duration-200 ease-out hover:-translate-y-1 hover:border-jade/30 hover:shadow-lg">
              <h3 className="font-serif text-2xl leading-snug tracking-tight text-charcoal">
                {item.title}
              </h3>
              <p className="mt-3 flex-1 text-pretty leading-relaxed text-charcoal-soft">
                {item.body}
              </p>
              <div className="mt-7 flex flex-wrap items-center justify-between gap-x-4 gap-y-2 border-t border-line pt-5">
                <span className="text-sm font-medium text-charcoal-soft">
                  {services.ratesNote}
                </span>
                <ArrowLink href={services.cta.href} className="text-sm">
                  {services.cta.label}
                </ArrowLink>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
