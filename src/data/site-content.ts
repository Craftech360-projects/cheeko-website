export const siteContent = {
  positioning: {
    statement: 'A playful AI companion, without handing them a phone.',
    mobileStatement: 'Meet Cheeko',
    mobileSubhead: 'A playful AI companion without handing them a phone.',
    short: 'A phone-free AI companion made for curious kids.',
    keywords: ['playful', 'AI companion', 'phone-free', 'kid-safe', 'curated'],
    avoid: ['screen-free', 'generic tablet', 'open-ended phone replacement']
  },
  audience: {
    primary: 'Parents buying for their child',
    secondary: 'Gift buyers and family members',
    ageRange: '4-12'
  },
  promo: {
    message: 'Launch offer: 20% off with code FIRSTUSER',
    repeated: ['Launch offer', '20% off', 'FIRSTUSER']
  },
  navigation: [
    { label: 'Features', href: '#features' },
    { label: 'Cards', href: '#cards' },
    { label: 'Try Demo', href: '#demo' },
    { label: 'Reviews', href: '#reviews' }
  ],
  hero: {
    eyebrow: 'Coming 2026',
    productName: 'Cheeko Pro',
    description:
      'CheekoAI is a magical AI-powered companion that talks, listens, plays, and grows with your child.',
    compactDescription: 'Stories, games, languages, and AI chat in one kid-friendly device.',
    supportingCopy:
      'Tap a card, start a story, play a game, tune into radio, or chat with CheekoAI in a device made just for kids.',
    featurePills: ['15+ languages', 'Cognitive Boost', '100+ Contents'],
    formHelper: 'Be the first to know when pre-orders open.',
    emailPlaceholder: 'Enter your email',
    cta: 'Get early access'
  },

  meet: {
    title: 'Meet Cheeko',
    description:
      'CheekoAI is a magical AI-powered companion that talks, listens, plays, and grows with your child, all in a device made just for kids.',
    accent: 'Made for stories, games, languages, radio, routines, and everyday imagination.'
  },
  products: [
    {
      name: 'Cheeko Pro',
      price: '₹ 4,990',
      imageKey: 'pro',
      cta: 'Buy Cheeko Pro',
      badge: 'Best for curious explorers',
      description: 'Advanced companion experience for richer conversations, learning, and content play.',
      status: 'Available'
    },
    {
      name: 'Cheeko Basic',
      price: '₹ 3,990',
      imageKey: 'basic',
      cta: 'Buy Cheeko Basic',
      badge: 'Great starter companion',
      description: 'A simpler Cheeko experience for everyday stories, play, and kid-safe discovery.',
      status: 'Sold out'
    }
  ],

  capabilities: {
    eyebrow: 'What Cheeko can do',
    title: 'From routines to wild imagination, Cheeko joins every moment.',
    cards: [
      {
        title: 'Daily Routines',
        imageKey: 'routine',
        description: 'Cheeko helps kids build small habits with friendly reminders, morning prompts, and bedtime nudges.'
      },
      {
        title: 'Imaginative Play',
        imageKey: 'imaginativePlay',
        description: 'Kids can jump into stories, pretend worlds, character play, and curious what-if conversations.'
      },
      {
        title: 'Creative Learning',
        imageKey: 'creativity',
        description: 'Games, languages, quizzes, songs, and activities turn learning into playful discovery.'
      }
    ]
  },
  language: {
    eyebrow: 'Mother-tongue magic',
    title: 'Cheeko Speaks Your Language',
    description:
      'Your child can talk to Cheeko in their mother tongue. Learning feels natural when it happens in a familiar language.',
    promptLabel: 'Speaking: Kannada',
    prompt: 'ನಮಸ್ಕಾರ! ನಿನ್ನ ಹೆಸರು ಏನು?',
    response: 'Namaskara! Ninna hesaru enu? Hello! What is your name?',
    chips: ['Tamil', 'Kannada', 'Telugu', 'Hindi', 'English', 'Malayalam', 'Marathi', 'Bengali']
  },
  trust: {
    eyebrow: 'Built for parents too',
    title: "Your child's new best companion",
    description:
      'Cheeko gives kids a playful companion while parents keep visibility, guardrails, and peace of mind.',
    heroCard: {
      title: "Talks, listens, plays, and grows with your child.",
      note: 'A companion experience made for kids, not a phone feed.'
    },
    cards: [
      {
        title: 'Parent Control',
        imageKey: 'parentControl',
        description: 'Set routines, view activity, and guide what your child can explore through the companion app.'
      },
      {
        title: 'Safe & Parent Approved',
        imageKey: 'safeParentApproved',
        description: 'Kid-safe conversations and curated content help Cheeko stay playful without becoming open-ended internet access.'
      },
      {
        title: 'Play Anytime, Anywhere',
        imageKey: 'playAnytime',
        description: 'Cheeko keeps stories, games, radio, and cards close by for travel, quiet time, and everyday play.'
      }
    ]
  },
  ageStages: {
    eyebrow: 'Grows with your child',
    title: 'A companion for every stage of childhood',
    description:
      'From simple stories to independent discovery, Cheeko adapts the experience as kids grow more curious.',
    cards: [
      {
        range: 'Age 4-6',
        imageKey: 'age4to6',
        description: 'Gentle stories, songs, routines, and simple prompts for early imagination.'
      },
      {
        range: 'Age 7-9',
        imageKey: 'age7to9',
        description: 'Games, languages, quizzes, and creative play for growing curiosity.'
      },
      {
        range: 'Age 10-12',
        imageKey: 'age10to12',
        description: 'Richer conversations, independent learning, radio, and content-card discovery.'
      }
    ]
  },
  sprintOne: {
    title: 'Cheeko website foundation',
    description:
      'Design tokens, content data, asset registry, and responsive shell are ready for section-by-section sprint builds.'
  }
} as const;

export type SiteContent = typeof siteContent;
