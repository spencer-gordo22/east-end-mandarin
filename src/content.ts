/**
 * East End Mandarin — site content
 * ---------------------------------
 * Single source of truth for all editable copy, nav items, the teaching
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
    note: "In person all summer long in NYC and the Hamptons · Online worldwide",
    // Optional hero headshot: drop a square/portrait image into /public and set
    // its path here. Leave empty for the editorial 中文 composition.
    portraitSrc: "",
    portraitAlt: "Spencer Gordon, founder of East End Mandarin",
  },

  background: {
    title: "Background",
    intro:
      "I remember exactly what it feels like to be a beginner — so I know how to make Mandarin approachable, hands-on, and genuinely fun.",
    // Photo lives at /public/about-photo.jpg. The section renders cleanly
    // whether or not the file is present (no placeholder box).
    photo: {
      src: "/about-photo.jpg",
      alt: "Spencer Gordon, founder of East End Mandarin",
    },
    pillars: [
      {
        label: "Education",
        body: "Speaking Mandarin since age three, with immersion schooling at Avenues: The World School, where core subjects are taught in the language rather than just studied. I completed AP Chinese as a sophomore and placed out of every remaining course.",
      },
      {
        label: "Experience",
        body: "Teaching assistant for a high-school Mandarin program, and now a private 1-on-1 tutor working with students across ages and levels.",
      },
      {
        label: "Future",
        body: "This fall, an immersion term in Beijing — studying the language at its source.",
      },
    ],
  },

  services: {
    title: "What I teach",
    intro:
      "Every learner starts somewhere different. Each track is shaped around where you are and where you want to go.",
    spectrum: {
      stops: [
        "First words",
        "Conversational basics",
        "School support",
        "AP Chinese",
        "Beyond",
      ],
      caption: "Wherever a student starts on this line, I can take them further.",
    },
    games: {
      intro:
        "Lessons are built on games and real conversation — students learn fastest when they're having fun.",
      items: [
        {
          title: "Mandarin Twister",
          body: "Body parts and directions, out loud.",
        },
        {
          title: "Simon Says",
          body: "Commands and verbs without realizing it's a drill.",
        },
        {
          title: "Real-world role-play",
          body: "Ordering food, asking directions, real NYC situations.",
        },
        {
          title: "Word scavenger hunts",
          body: "Finding characters out in the world.",
        },
      ],
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
