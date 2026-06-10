import type { Metadata, Viewport } from "next";
import { Fraunces, Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { content, SITE_URL } from "@/content";

// Site: warm serif headings (Fraunces) + Inter body.
const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

// Logo wordmark: Cormorant Garamond tracked caps. The 文 mark renders from
// the system CJK serif stack (see --font-noto in globals.css) — a webfont
// would be pure dead weight, since latin subsets don't include the glyph.
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: "500",
  variable: "--font-cormorant-garamond",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: content.meta.title,
    template: content.meta.titleTemplate,
  },
  description: content.meta.description,
  keywords: [...content.meta.keywords],
  applicationName: content.brand.name,
  authors: [{ name: content.brand.tutor }],
  creator: content.brand.tutor,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: content.brand.name,
    title: content.meta.title,
    description: content.meta.description,
    url: SITE_URL,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: content.meta.title,
    description: content.meta.description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#f7f4ed",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${fraunces.variable} ${inter.variable} ${cormorant.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream text-charcoal">
        {/* Ensure scroll-reveal content is visible without JavaScript */}
        <noscript>
          <style>{`[data-reveal]{opacity:1!important;transform:none!important;}`}</style>
        </noscript>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-jade focus:px-5 focus:py-2.5 focus:text-sm focus:font-medium focus:text-white"
        >
          Skip to content
        </a>
        <Nav />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
