import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { HeroSection } from './HeroSection';

describe('Hero mobile refinement', () => {
  it('renders a mobile-first product intro before the inline signup form', () => {
    render(<HeroSection />);

    expect(screen.getByRole('heading', { level: 1, name: /Meet Cheeko/i })).toBeInTheDocument();
    expect(screen.getByText(/A playful AI companion without handing them a phone/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Get early access/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /See how it works/i })).toHaveAttribute('href', '#meet');
  });

  it('removes the product popup content from the mobile hero', () => {
    render(<HeroSection />);

    expect(screen.getByLabelText(/Email address/i)).toBeInTheDocument();
    expect(screen.queryByText(/Coming 2026/i)).not.toBeInTheDocument();
    expect(screen.queryByRole('heading', { level: 2, name: /Cheeko Pro/i })).not.toBeInTheDocument();
    expect(screen.queryByText(/Stories, games, languages, and AI chat in one kid-friendly device/i)).not.toBeInTheDocument();
  });

  it('places the mobile hero copy near the top so the device stays visible', () => {
    render(<HeroSection />);

    const heroLayout = screen.getByTestId('hero-layout');

    expect(heroLayout).toHaveClass('items-start', 'lg:items-end');
    expect(heroLayout).toHaveClass('pt-8', 'lg:pb-16');
  });
});
