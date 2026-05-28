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
    proCard: '/assets/product/cheeko-pro-card.png',
    basicCard: '/assets/product/cheeko-basic-card.png',
    deviceFront: '/assets/product/cheeko-device-front.png',
    languageDevice: '/assets/product/language-device-white.png',
    languagePanelBg: '/assets/product/language-panel-bg.png',
    languageChipBg: '/assets/product/language-chip-bg.png'
  },
  features: {
    routine: '/assets/product/capability-routine.png',
    imaginativePlay: '/assets/product/capability-imaginative-play.png',
    creativity: '/assets/product/capability-creativity.png',
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
