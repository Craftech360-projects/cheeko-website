import { describe, expect, it } from 'vitest';
import { assets } from './assets';

describe('assets', () => {
  it('points to the required sprint-one asset paths', () => {
    expect(assets.logo.main).toBe('/assets/logo/cheeko-logo.svg');
    expect(assets.hero.desktop).toBe('/assets/hero/hero-child-device.jpg');
    expect(assets.hero.meetCheeko).toBe('/assets/hero/meet-cheeko-child-device.jpg');
    expect(assets.product.pro).toBe('/assets/product/cheeko-pro.png');
    expect(assets.product.basic).toBe('/assets/product/cheeko-basic.png');
  });

  it('uses actual filenames exported from Figma', () => {
    expect(assets.features.routine).toBe('/assets/product/feature-routine.png');
    expect(assets.originals.section).toBe('/assets/originals/cheeko-orginals.png');
    expect(assets.footer.people).toBe('/assets/footer/footer-people.png');
  });
});
