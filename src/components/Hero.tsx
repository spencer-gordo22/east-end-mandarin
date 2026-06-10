import { Reveal } from "@/components/Reveal";
import { CtaButton } from "@/components/ui";
import { content } from "@/content";

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
          <p className="mt-9 flex items-center gap-2.5 text-sm text-charcoal-soft">
            <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-jade" />
            {hero.note}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
