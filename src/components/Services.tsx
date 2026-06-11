import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/ui";
import { Spectrum } from "@/components/Spectrum";
import { content } from "@/content";

export function Services() {
  const { services } = content;

  return (
    <Section id="services" tone="cream">
      <SectionHeader title={services.title} />

      {/* 1) Spectrum + one orienting line */}
      <Spectrum stops={services.spectrum.stops} />
      <Reveal>
        <p className="mt-8 max-w-2xl text-pretty leading-relaxed text-charcoal-soft sm:mt-10">
          {services.spectrum.note}
        </p>
      </Reveal>

      {/* 2) Two tracks */}
      <div className="mt-14 grid grid-cols-1 gap-5 sm:mt-20 sm:gap-6 md:grid-cols-2">
        {services.tracks.map((track, i) => (
          <Reveal key={track.title} delay={i * 0.07}>
            <article className="flex h-full flex-col rounded-2xl border border-line bg-white p-8 transition duration-200 ease-out hover:-translate-y-1 hover:border-jade/30 hover:shadow-lg sm:p-9">
              <p className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                <span className="text-xs font-semibold uppercase tracking-[0.14em] text-jade">
                  Best for
                </span>
                <span className="text-sm text-charcoal-soft">
                  {track.bestFor}
                </span>
              </p>
              <h3 className="mt-4 font-serif text-2xl leading-snug tracking-tight text-charcoal">
                {track.title}
              </h3>
              <p className="mt-3 text-pretty leading-relaxed text-charcoal">
                {track.vibe}
              </p>
              <ul className="mt-7 space-y-4 border-t border-line pt-7">
                {track.focus.map((f) => (
                  <li key={f.lead} className="flex gap-3">
                    <span
                      aria-hidden="true"
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-jade/70"
                    />
                    <p className="text-pretty leading-relaxed text-charcoal-soft">
                      <span className="font-medium text-charcoal">{f.lead}</span>
                      {" — "}
                      {f.body}
                    </p>
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>

      {/* 3) Single CTA banner — the one bold moment */}
      <Reveal>
        <div className="mt-12 rounded-3xl bg-jade px-8 py-12 sm:mt-16 sm:px-14 sm:py-16">
          <div className="max-w-2xl">
            <h3 className="text-balance font-serif text-2xl leading-tight tracking-tight text-cream sm:text-3xl lg:text-[2rem]">
              {services.banner.headline}
            </h3>
            <p className="mt-4 text-pretty leading-relaxed text-cream/85">
              {services.banner.body}
            </p>
          </div>
          <div className="mt-8">
            <a
              href={services.banner.cta.href}
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-cream px-7 py-3.5 text-base font-medium text-jade-deep shadow-sm transition duration-150 ease-out hover:-translate-y-0.5 hover:bg-white hover:shadow-md active:scale-[0.97]"
            >
              {services.banner.cta.label}
              <span
                aria-hidden="true"
                className="transition-transform duration-200 ease-out group-hover:translate-x-1"
              >
                →
              </span>
            </a>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
