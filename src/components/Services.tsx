import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/ui";
import { Spectrum } from "@/components/Spectrum";
import { content } from "@/content";

export function Services() {
  const { services } = content;

  return (
    <Section id="services" tone="cream">
      <SectionHeader title={services.title} intro={services.intro} />

      <div className="mt-12 sm:mt-16">
        <Spectrum
          stops={services.spectrum.stops}
          caption={services.spectrum.caption}
        />
      </div>

      {/* How we play */}
      <div className="mt-16 border-t border-line pt-12 sm:mt-20 sm:pt-14">
        <Reveal>
          <p className="max-w-2xl text-pretty text-lg leading-relaxed text-charcoal-soft">
            {services.games.intro}
          </p>
        </Reveal>
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.games.items.map((game, i) => (
            <Reveal key={game.title} delay={i * 0.06}>
              <div className="h-full rounded-xl border border-line bg-white p-5 transition-colors duration-200 ease-out hover:border-jade/30">
                <h3 className="font-serif text-lg leading-snug tracking-tight text-charcoal">
                  {game.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-charcoal-soft">
                  {game.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
