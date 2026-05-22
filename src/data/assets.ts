export const assets = {
  logo: {
    main: '/assets/logo/cheeko-logo.svg'
  },
  hero: {
    desktop: '/assets/hero/hero-child-device.jpg',
    mobile: '/assets/hero/hero-child-device-mobile.jpg',
    meetCheeko: '/assets/hero/meet-cheeko-child-device.jpg'
  },
  product: {
    pro: '/assets/product/cheeko-pro.png',
    basic: '/assets/product/cheeko-basic.png',
    deviceFront: '/assets/product/cheeko-device-front.png'
  },
  features: {
    routine: '/assets/product/feature-routine.png',
    imaginativePlay: '/assets/product/feature-imaginative-play.png',
    creativity: '/assets/product/feature-creativity.png',
    age4to6: '/assets/product/age-4-6.png',
    age7to9: '/assets/product/age-7-9.png',
    age10to12: '/assets/product/age-10-12.png'
  },
  app: {
    childBestCompanion: '/assets/app/child-best-companion-card.png',
    childBestCompanionAlt1: '/assets/app/child-best-companion-card1.png',
    childBestCompanionAlt2: '/assets/app/child-best-companion-card2.png',
    parentControl: '/assets/app/parent-control-card.png',
    safeParentApproved: '/assets/app/safe-parent-approved-card.png',
    playAnytime: '/assets/app/play-anytime-card.png'
  },
  originals: {
    section: '/assets/originals/orginals-pic.png'
  },
  footer: {
    people: '/assets/footer/footer-people.png'
  }
} as const;

export type CheekoAssets = typeof assets;
