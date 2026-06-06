import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { CtaButton } from "@/components/ui";
import { content } from "@/content";

export function Hero() {
  const { hero } = content;

  return (
    <section id="top" className="relative scroll-mt-24 overflow-hidden bg-cream">
      <div className="relative mx-auto grid w-full max-w-[1180px] grid-cols-1 items-center gap-12 px-6 pb-20 pt-14 sm:px-8 md:pb-28 md:pt-20 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:pb-32 lg:pt-24">
        {/* Copy */}
        <div className="max-w-2xl">
          <Reveal>
            <h1 className="text-balance font-serif text-[2.25rem] font-medium leading-[1.08] tracking-tight text-charcoal sm:text-[2.7rem] lg:text-[3rem]">
              {hero.title}
            </h1>
          </Reveal>
          <Reveal delay={0.06}>
            <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-charcoal-soft">
              {hero.subhead}
            </p>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <CtaButton href={hero.primaryCta.href}>
                {hero.primaryCta.label}
              </CtaButton>
              <CtaButton href={hero.secondaryCta.href} variant="secondary">
                {hero.secondaryCta.label}
              </CtaButton>
            </div>
          </Reveal>
          <Reveal delay={0.18}>
            <p className="mt-8 flex items-center gap-2.5 text-sm text-charcoal-soft">
              <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-jade" />
              {hero.note}
            </p>
          </Reveal>
        </div>

        {/* Editorial 中文 composition — or a headshot if hero.portraitSrc is set */}
        <Reveal delay={0.1}>
          <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-3xl bg-sand shadow-sm lg:max-w-none">
            {hero.portraitSrc ? (
              <Image
                src={hero.portraitSrc}
                alt={hero.portraitAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover"
                priority
              />
            ) : (
              <div
                aria-hidden="true"
                className="absolute inset-0 flex flex-col items-center justify-center leading-[0.82] text-jade/30 select-none"
              >
                <span className="font-noto text-[8.5rem] sm:text-[10rem] lg:text-[11rem]">
                  中
                </span>
                <span className="font-noto text-[8.5rem] sm:text-[10rem] lg:text-[11rem]">
                  文
                </span>
              </div>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
