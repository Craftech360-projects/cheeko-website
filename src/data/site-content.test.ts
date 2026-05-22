import { describe, expect, it } from 'vitest';
import { siteContent } from './site-content';

describe('siteContent', () => {
  it('uses the approved Cheeko positioning and audience', () => {
    expect(siteContent.positioning.statement).toBe(
      'A playful AI companion, without handing them a phone.'
    );
    expect(siteContent.audience.primary).toContain('Parents');
    expect(siteContent.audience.ageRange).toBe('4-12');
    expect(siteContent.positioning.mobileStatement).toBe('Meet Cheeko');
    expect(siteContent.positioning.mobileSubhead).toBe('A playful AI companion without handing them a phone.');
  });

  it('keeps phone-free language instead of inaccurate screen-free positioning', () => {
    expect(siteContent.positioning.keywords).toContain('phone-free');
    expect(siteContent.positioning.avoid).toContain('screen-free');
  });

  it('contains Sprint 5 trust and age-stage content', () => {
    expect(siteContent.trust.title).toBe("Your child's new best companion");
    expect(siteContent.trust.cards.map((card) => card.title)).toEqual([
      'Parent Control',
      'Safe & Parent Approved',
      'Play Anytime, Anywhere'
    ]);
    expect(siteContent.ageStages.cards.map((card) => card.range)).toEqual(['Age 4-6', 'Age 7-9', 'Age 10-12']);
  });

  it('contains Sprint 6 social proof, originals, journey, and footer content', () => {
    expect(siteContent.reviews.title).toBe('What Parents are Saying');
    expect(siteContent.reviews.stats.map((stat) => stat.label)).toEqual([
      'Happy Reviews',
      'Avg Rating',
      'Screen time reduced'
    ]);
    expect(siteContent.originals.title).toBe('Cheeko Originals');
    expect(siteContent.journey.title).toBe('Our Journey');
    expect(siteContent.footer.contact.email).toBe('hello@cheeko.ai');
  });
});
