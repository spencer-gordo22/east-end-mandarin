import { Hero } from "@/components/Hero";
import { Background } from "@/components/Background";
import { Services } from "@/components/Services";
import { Location } from "@/components/Location";
import { Contact } from "@/components/Contact";
import { content, CONTACT_EMAIL, SITE_URL } from "@/content";

// Structured data so search engines understand the business (name, contact,
// service area). Kept minimal and factual.
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: content.brand.name,
  description: content.meta.description,
  url: SITE_URL,
  email: CONTACT_EMAIL,
  telephone: content.contact.phone,
  founder: {
    "@type": "Person",
    name: content.brand.tutor,
  },
  areaServed: ["New York City", "The Hamptons", "Online"],
  knowsLanguage: ["en", "zh"],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <Background />
      <Services />
      <Location />
      <Contact />
    </>
  );
}
