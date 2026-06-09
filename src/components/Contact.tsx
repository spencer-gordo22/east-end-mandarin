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
            <div className="mt-7">
              <p className="text-sm font-medium text-charcoal">
                {contact.directLabel}
              </p>
              <dl className="mt-3 space-y-2.5 text-sm">
                <div className="flex gap-3">
                  <dt className="w-16 shrink-0 text-charcoal-soft">Email</dt>
                  <dd>
                    <a
                      href={`mailto:${CONTACT_EMAIL}`}
                      className="font-medium text-jade underline decoration-jade/30 underline-offset-4 transition-colors hover:decoration-jade"
                    >
                      {CONTACT_EMAIL}
                    </a>
                  </dd>
                </div>
                <div className="flex gap-3">
                  <dt className="w-16 shrink-0 text-charcoal-soft">Phone</dt>
                  <dd>
                    <a
                      href={`tel:${contact.phone.replace(/[^\d+]/g, "")}`}
                      className="font-medium text-jade underline decoration-jade/30 underline-offset-4 transition-colors hover:decoration-jade"
                    >
                      {contact.phone}
                    </a>
                  </dd>
                </div>
                <div className="flex gap-3">
                  <dt className="w-16 shrink-0 text-charcoal-soft">WeChat</dt>
                  <dd className="font-medium text-jade select-all">
                    {contact.wechat}
                  </dd>
                </div>
              </dl>
            </div>
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
