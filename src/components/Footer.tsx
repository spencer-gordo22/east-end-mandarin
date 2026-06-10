import { Logo } from "@/components/Logo";
import { content, CONTACT_EMAIL } from "@/content";

export function Footer() {
  const year = new Date().getFullYear();
  const { brand, footer, nav } = content;

  return (
    <footer className="bg-charcoal text-cream">
      <div className="mx-auto w-full max-w-[1180px] px-6 py-16 sm:px-8 md:py-20">
        <div className="flex flex-col gap-12 md:flex-row md:items-start md:justify-between">
          {/* Brand */}
          <div className="max-w-sm">
            <a
              href={nav.home.href}
              aria-label={`${brand.name} — home`}
              className="inline-block"
            >
              <Logo variant="wordmark" tone="light" className="text-lg" />
            </a>
            <p className="mt-6 text-pretty leading-relaxed text-cream/65">
              {footer.tagline}
            </p>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="mt-4 inline-block text-sm text-cream/75 underline decoration-cream/20 underline-offset-4 transition-colors hover:text-cream hover:decoration-cream/60"
            >
              {CONTACT_EMAIL}
            </a>
          </div>

          {/* Nav */}
          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-x-6 gap-y-3 md:flex-col md:items-end md:gap-3">
              {nav.links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-cream/75 transition-colors hover:text-cream"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Optional socials — rendered only when handles are provided */}
        {footer.socials.length > 0 ? (
          <ul className="mt-12 flex flex-wrap gap-x-6 gap-y-3">
            {footer.socials.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  className="inline-flex items-center gap-2 text-sm text-cream/75 transition-colors hover:text-cream"
                >
                  {social.label}
                  <span aria-hidden="true" className="text-jade">
                    ↗
                  </span>
                </a>
              </li>
            ))}
          </ul>
        ) : null}

        <div className="mt-14 border-t border-cream/10 pt-6 text-sm text-cream/55">
          <p>
            © {year} {brand.name}
          </p>
        </div>
      </div>
    </footer>
  );
}
