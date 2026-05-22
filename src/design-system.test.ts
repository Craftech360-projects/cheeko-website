import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import { siteContent } from '@/data/site-content';

describe('Cheeko design system', () => {
  it('defines Tailwind v4 theme tokens for Cheeko brand colors', () => {
    const css = readFileSync('src/app/globals.css', 'utf8');

    expect(css).toContain('--color-cheeko-yellow: #ffc400');
    expect(css).toContain('--color-cheeko-pink: #f95c9b');
    expect(css).toContain('--color-cheeko-ink: #24160f');
    expect(css).toContain('--shadow-cheeko-card');
  });

  it('uses a shorter mobile-friendly hero headline while preserving approved positioning', () => {
    expect(siteContent.positioning.statement).toBe('A playful AI companion, without handing them a phone.');
    expect(siteContent.positioning.mobileStatement).toBe('Meet Cheeko');
    expect(siteContent.positioning.mobileSubhead).toBe('A playful AI companion without handing them a phone.');
  });
});
