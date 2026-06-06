import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { Rule } from "@/components/ui";
import { ContactForm } from "@/components/ContactForm";
import { content, CONTACT_EMAIL } from "@/content";

export function Contact() {
  const { contact } = content;

  return (
    <Section id="contact" tone="cream">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        {/* Intro */}
        <div className="lg:pt-2">
          <Reveal>
            <Rule />
            <h2 className="mt-6 text-balance font-serif text-3xl leading-[1.1] tracking-tight text-charcoal sm:text-4xl lg:text-[2.875rem]">
              {contact.title}
            </h2>
            <p className="mt-5 max-w-md text-pretty text-lg leading-relaxed text-charcoal">
              {contact.intro}
            </p>
            <p className="mt-3 max-w-md text-pretty leading-relaxed text-charcoal-soft">
              {contact.secondary}
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <p className="mt-7 text-sm text-charcoal-soft">
              {contact.directLabel}{" "}
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="font-medium text-jade underline decoration-jade/30 underline-offset-4 transition-colors hover:decoration-jade"
              >
                {CONTACT_EMAIL}
              </a>
            </p>
          </Reveal>
        </div>

        {/* Form */}
        <Reveal delay={0.06}>
          <ContactForm />
        </Reveal>
      </div>
    </Section>
  );
}
