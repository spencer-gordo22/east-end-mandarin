/**
 * East End Mandarin — site content
 * ---------------------------------
 * Single source of truth for all editable copy, nav items, the services
 * spectrum, games, and location data. Revise wording here without touching
 * components.
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
      { label: "Services", href: "#services" },
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
    note: "In person all summer long in NYC and the Hamptons · Online worldwide",
  },

  background: {
    title: "Background",
    // Photo lives at /public/about-photo.jpg. The section renders cleanly
    // whether or not the file is present (no placeholder box).
    photo: {
      src: "/about-photo.jpg",
      alt: "Spencer Gordon, founder of East End Mandarin",
    },
    paragraphs: [
      "I started learning Mandarin at age three as a native English speaker. I built my fluency by attending Avenues: The World School, where core subjects were taught in Mandarin rather than simply studied. I became so passionate about the language that I completed AP Chinese as a sophomore, placed out of all remaining courses, served as a teaching assistant, and now tutor students one-on-one.",
      "I remember exactly what it feels like to be a beginner in a language that seems daunting. I know how to make tones and characters approachable instead of overwhelming. My lessons are fun — we use games, real conversation, and lots of encouragement so students stay engaged, gain confidence, and actually look forward to sessions instead of dreading them.",
      "Whether someone is brand new to Mandarin or already has some background, I meet them where they are and help them build real, usable language skills — the kind that actually stick. The goal is confident speakers who enjoy the process and see clear progress.",
    ],
  },

  services: {
    title: "Services",
    // The spectrum: a single line a student lands somewhere on, then moves along.
    spectrum: {
      stops: [
        "First words",
        "Classroom support",
        "Real fluency",
        "AP / HSK mastery",
      ],
      note: "Wherever a student is on this line, lessons start there — and keep going.",
    },
    // Two tracks. No pricing, no per-card CTA — the single banner below carries it.
    tracks: [
      {
        title: "Confidence & Fluency",
        bestFor: "Beginners, heritage speakers, and summer review.",
        vibe: "Moving past rigid textbook drills to build a genuine love for the language.",
        focus: [
          {
            lead: "Overcoming the freeze",
            body: "demystifying tones and pinyin through high-energy, interactive practice and games.",
          },
          {
            lead: "Real-world rhythm",
            body: "natural speed, real conversation, and cultural context instead of formal scripts.",
          },
          {
            lead: "Heritage reconnection",
            body: "rebuilding the language through topics students actually care about: pop culture, gaming, sports.",
          },
        ],
      },
      {
        title: "Academic Strategy & Results",
        bestFor: "AP/HSK students and classroom grade boosting.",
        vibe: "High-efficiency, strategic prep for the big academic checkpoints.",
        focus: [
          {
            lead: "Exam-tested strategies",
            body: "the exact methods I used to take on AP Chinese as a sophomore and place out of every remaining course.",
          },
          {
            lead: "Curriculum alignment",
            body: "patching classroom grammar gaps and building academic stamina.",
          },
          {
            lead: "The TA advantage",
            body: "feedback from a former teaching assistant who knows exactly what teachers look for.",
          },
        ],
      },
    ],
    banner: {
      headline: "No pre-packaged syllabus. No rigid templates.",
      body: "Every student's brain works differently, so every curriculum is custom-built from scratch. Let's map out a personalized roadmap that fits your goals and schedule.",
      cta: { label: "Inquire about a custom track", href: "#contact" },
    },
  },

  location: {
    title: "Where we meet",
    modes: [
      {
        title: "In person (NYC & the Hamptons)",
        body: "All summer long — lessons around the city and the East End that mix structured learning with real-world practice.",
      },
      {
        title: "Online",
        body: "Live one-on-one video lessons, same fun and same results, from anywhere.",
      },
    ],
  },

  contact: {
    title: "Book a session",
    intro:
      "We'll start with a quick conversation so I can learn about the student and see if it's a good fit.",
    secondary:
      "Tell me a little about the learner and what you'd like to achieve, and I'll be in touch to find a time. I usually reply within two business days.",
    directLabel: "Or reach me directly",
    phone: "+1 917-363-5562",
    wechat: "Spence_22",
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
      timesOptions: ["Weekday afternoons", "Weekends", "Mornings"],
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
      "Mandarin tutoring for kids and teens — in person in NYC and the Hamptons, and online.",
    socials: [] as { label: string; href: string }[],
  },

  meta: {
    title: `${BRAND} — Mandarin Tutoring for Kids & Teens`,
    titleTemplate: `%s · ${BRAND}`,
    description:
      "Personalized 1-on-1 Mandarin tutoring for elementary, middle, and high school students. Real speaking skills, fun games, and encouragement — in person in NYC and the Hamptons, and online.",
    keywords: [
      "Mandarin tutor for kids",
      "Mandarin tutoring teens",
      "Chinese lessons for kids",
      "AP Chinese",
      "NYC Mandarin tutor",
      "Hamptons Mandarin tutor",
      "online Mandarin lessons",
      "Spencer Gordon",
    ],
    ogImageAlt: `${BRAND} — Mandarin tutoring for kids and teens`,
    ogTagline: "Mandarin Tutoring",
  },
} as const;

export type Content = typeof content;
