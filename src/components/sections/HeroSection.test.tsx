import { render, screen, within } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Home from '@/app/page';
import { HeroSection } from './HeroSection';

describe('Hero section', () => {
  it('renders the launch offer, navigation, and accessible cart action', () => {
    render(<Home />);

    const primaryNavigation = screen.getByRole('navigation', { name: /Primary navigation/i });

    expect(screen.getByLabelText(/Sale 20% offer on promo FIRSTUSER/i)).toBeInTheDocument();
    expect(screen.getAllByText(/FIRSTUSER/i).length).toBeGreaterThan(0);
    expect(within(primaryNavigation).getByRole('link', { name: /Features/i })).toHaveAttribute('href', '#features');
    expect(within(primaryNavigation).getByRole('link', { name: /Cards/i })).toHaveAttribute('href', '#cards');
    expect(within(primaryNavigation).getByRole('link', { name: /Try Demo/i })).toHaveAttribute('href', '#language');
    expect(within(primaryNavigation).getByRole('link', { name: /Reviews/i })).toHaveAttribute('href', '#reviews');
    expect(screen.getByRole('button', { name: /Open cart/i })).toBeInTheDocument();
    expect(within(screen.getByRole('link', { name: /Cheeko home/i })).getByAltText('Cheeko')).toHaveClass('h-11', 'sm:h-14');
  });

  it('renders the approved hero positioning and a simple early-access form', () => {
    render(<HeroSection />);

    expect(
      screen.getByRole('heading', {
        level: 1,
        name: /A playful AI companion, without handing them a phone/i
      })
    ).toBeInTheDocument();
    expect(screen.getByLabelText(/Email address/i)).toHaveAttribute('type', 'email');
    expect(screen.getByRole('button', { name: /Get early access/i })).toBeInTheDocument();
    expect(screen.queryByText(/Coming 2026/i)).not.toBeInTheDocument();
    expect(screen.queryByRole('heading', { level: 2, name: /Cheeko Pro/i })).not.toBeInTheDocument();
    expect(screen.queryByText(/15\+ languages/i)).not.toBeInTheDocument();
  });
});
