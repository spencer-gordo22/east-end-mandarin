import { existsSync } from "node:fs";
import path from "node:path";
import Image from "next/image";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { Rule } from "@/components/ui";
import { content } from "@/content";

// Resolved at build time: only render the photo when the file exists, so the
// section looks complete with or without it (no placeholder box).
const hasPhoto = existsSync(
  path.join(process.cwd(), "public", "about-photo.jpg"),
);

export function Background() {
  const { background } = content;

  const paragraphs = background.paragraphs.map((paragraph, i) => (
    <Reveal key={i} delay={0.04 + i * 0.05}>
      <p className="text-pretty text-lg leading-relaxed text-charcoal-soft">
        {paragraph}
      </p>
    </Reveal>
  ));

  return (
    <Section id="background" tone="sand">
      <Reveal className="max-w-[720px]">
        <Rule />
        <h2 className="mt-6 text-balance font-serif text-3xl leading-[1.1] tracking-tight text-charcoal sm:text-4xl lg:text-[2.875rem]">
          {background.title}
        </h2>
      </Reveal>

      {hasPhoto ? (
        <div className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-start lg:gap-14">
          <div className="space-y-5">{paragraphs}</div>
          <Reveal className="order-first lg:order-none">
            <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-2xl bg-sand shadow-sm lg:mx-0 lg:max-w-none">
              <Image
                src={background.photo.src}
                alt={background.photo.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 38vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      ) : (
        <div className="mt-7 max-w-[720px] space-y-5">{paragraphs}</div>
      )}
    </Section>
  );
}
