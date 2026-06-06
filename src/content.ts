/**
 * East End Mandarin — site content
 * ---------------------------------
 * Single source of truth for all editable copy, nav items, teaching tracks,
 * and location data. Revise wording here without touching components.
 *
 * The only value the owner still needs to supply is the Web3Forms key
 * (NEXT_PUBLIC_FORM_ACCESS_KEY in .env.local — see .env.example).
 */

// Email shown publicly and used as the contact-form fallback.
export const CONTACT_EMAIL = "spencer@eastendmandarin.com";

// CONFIRM: live domain — used for the SEO canonical URL and link previews.
export const SITE_URL = "https://www.eastendmandarin.com";

const BRAND = "East End Mandarin";
const TUTOR = "Spencer Gordon";

export const content = {
  brand: {
    name: BRAND,
    tutor: TUTOR,
  },

  nav: {
    home: { label: BRAND, href: "#top" },
    links: [
      { label: "About", href: "#background" },
      { label: "Teaching", href: "#services" },
      { label: "Location", href: "#location" },
      { label: "Contact", href: "#contact" },
    ],
    cta: { label: "Book a session", href: "#contact" },
  },

  hero: {
    title:
      "Mandarin lessons kids and teens enjoy — taught by someone who started just like them.",
    subhead:
      "Personalized 1-on-1 tutoring for elementary, middle, and high school students. Real speaking skills, fun games, progress that sticks, and plenty of encouragement. No boring drills — just results and a good time.",
    primaryCta: { label: "Book a session", href: "#contact" },
    secondaryCta: { label: "Read my story", href: "#background" },
    note: "In person in NYC, Brooklyn & the Hamptons · Online worldwide",
    // Optional headshot: drop a square/portrait image into /public and set its
    // path here (e.g. "/spencer.jpg") to replace the 中文 art with a photo.
    // Leave empty for the editorial 中文 composition — no placeholder is shown.
    portraitSrc: "",
    portraitAlt: "Spencer Gordon, founder of East End Mandarin",
  },

  background: {
    title: "Background",
    paragraphs: [
      "I started learning Mandarin at age three as a native English speaker. I built my fluency by attending Avenues: The World School, where core subjects were taught in Mandarin rather than simply studied. I became so passionate about the language that I completed AP Chinese as a sophomore, placed out of all remaining courses, served as a teaching assistant, and now tutor students one-on-one.",
      "I remember exactly what it feels like to be a beginner in a language that seems daunting. I know how to make tones and characters approachable instead of overwhelming. My lessons are fun — we use games, real conversation, and lots of encouragement so students stay engaged, gain confidence, and actually look forward to sessions instead of dreading them.",
      "Whether someone is brand new to Mandarin or already has some background, I meet them where they are and help them build real, usable language skills — the kind that actually stick. The goal is confident speakers who enjoy the process and see clear progress.",
    ],
    attribution: "Spencer Gordon · East End Mandarin",
  },

  services: {
    title: "What I teach",
    intro:
      "Every learner starts somewhere different. Each track is shaped around where you are and where you want to go.",
    ratesNote: "Inquire for rates",
    cta: { label: "Inquire", href: "#contact" },
    items: [
      {
        title: "Beginner Foundations",
        body: "The essential building blocks: pinyin, tones, and characters taught in a clear, structured way. These are the first steps to becoming fluent, so everything that comes later feels easier and more natural.",
      },
      {
        title: "Conversational Fluency & Real Practice",
        body: "Learn to form real sentences and handle everyday interactions through role-play, back-and-forth conversation, and speaking practice. In-person sessions in New York City include practice in real spots around the city so it feels natural.",
      },
    ],
  },

  location: {
    title: "Where we meet",
    modes: [
      {
        title: "In person in NYC, Brooklyn & the Hamptons",
        body: "In-person sessions in Manhattan, Brooklyn, and the Hamptons. This summer I'm focused on in-person lessons that combine structured learning with real-world practice around the city and the East End.",
      },
      {
        title: "Online sessions",
        body: "Live one-on-one video lessons with the same fun, effective approach. Whichever works better for your family.",
      },
    ],
  },

  contact: {
    title: "Book a session",
    intro:
      "We'll start with a quick conversation so I can learn about the student and see if it's a good fit.",
    secondary:
      "Tell me a little about the learner and what you'd like to achieve, and I'll be in touch to find a time. I usually reply within two business days.",
    directLabel: "Prefer email?",
    form: {
      nameLabel: "Name",
      namePlaceholder: "Your name",
      emailLabel: "Email",
      emailPlaceholder: "you@example.com",
      levelLabel: "Learner level",
      levelPlaceholder: "Select a level",
      levelOptions: [
        "New to Mandarin",
        "Some experience",
        "Conversational",
        "Advanced or heritage",
        "Exam prep",
      ],
      timesLabel: "Preferred times",
      timesPlaceholder: "e.g. weekday afternoons, Sunday mornings",
      messageLabel: "Message",
      messagePlaceholder:
        "Who is the learner, and what are you hoping to achieve?",
      submitIdle: "Send message",
      submitSending: "Sending…",
      successTitle: "Message sent",
      successBody: "Thanks — your message is on its way. I'll be in touch soon.",
      errorTitle: "Something went wrong",
      // {email} is replaced with CONTACT_EMAIL at render time.
      errorBody:
        "Your message didn't go through. Please try again, or email me directly at {email}.",
    },
  },

  footer: {
    tagline:
      "Mandarin tutoring for kids and teens — in person in NYC, Brooklyn & the Hamptons, and online.",
    socials: [] as { label: string; href: string }[],
  },

  meta: {
    title: `${BRAND} — Mandarin Tutoring for Kids & Teens`,
    titleTemplate: `%s · ${BRAND}`,
    description:
      "Personalized 1-on-1 Mandarin tutoring for elementary, middle, and high school students. Real speaking skills, fun games, and encouragement — in person in NYC, Brooklyn & the Hamptons, and online.",
    keywords: [
      "Mandarin tutor for kids",
      "Mandarin tutoring teens",
      "Chinese lessons for kids",
      "AP Chinese",
      "NYC Mandarin tutor",
      "Brooklyn Mandarin tutor",
      "Hamptons Mandarin tutor",
      "online Mandarin lessons",
      "Spencer Gordon",
    ],
    ogImageAlt: `${BRAND} — Mandarin tutoring for kids and teens`,
    ogTagline: "Mandarin Tutoring",
  },
} as const;

export type Content = typeof content;
