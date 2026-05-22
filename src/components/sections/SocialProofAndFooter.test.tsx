import { render, screen, within } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Home from '@/app/page';

describe('Sprint 6 social proof, originals, journey, and footer', () => {
  it('renders review stats and parent testimonials', () => {
    render(<Home />);

    expect(screen.getByRole('heading', { level: 2, name: /What Parents are Saying/i })).toBeInTheDocument();
    expect(screen.getByText(/50\+/i)).toBeInTheDocument();
    expect(screen.getByText(/Happy Reviews/i)).toBeInTheDocument();
    expect(screen.getByText(/4\.5/i)).toBeInTheDocument();
    expect(screen.getByText(/Avg Rating/i)).toBeInTheDocument();
    expect(screen.getByText(/1 hr/i)).toBeInTheDocument();
    expect(screen.getByText(/Screen time reduced/i)).toBeInTheDocument();
    expect(screen.getAllByText(/Cheeko/i).length).toBeGreaterThan(3);
  });

  it('renders Cheeko Originals and the product journey timeline', () => {
    render(<Home />);

    expect(screen.getByRole('heading', { level: 2, name: /Cheeko Originals/i })).toBeInTheDocument();
    expect(screen.getByAltText(/Cheeko Originals podcast and content artwork/i)).toBeInTheDocument();
    expect(screen.getByText(/Coming soon/i)).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 2, name: /Our Journey/i })).toBeInTheDocument();
    expect(screen.getByText(/The Spark/i)).toBeInTheDocument();
    expect(screen.getByText(/Cheeko Pre Testing/i)).toBeInTheDocument();
    expect(screen.getByText(/Cheeko Pro Launch/i)).toBeInTheDocument();
  });

  it('renders a useful footer with navigation, contact, and social links', () => {
    render(<Home />);

    const footer = screen.getByRole('contentinfo');

    expect(footer).toBeInTheDocument();
    expect(screen.getByAltText(/Craftech team building Cheeko/i)).toBeInTheDocument();
    expect(within(footer).getByRole('link', { name: /Features/i })).toHaveAttribute('href', '#features');
    expect(within(footer).getAllByRole('link', { name: /Contact/i })[0]).toHaveAttribute('href', 'mailto:hello@cheeko.ai');
    expect(within(footer).getByText(/Built with love for curious kids/i)).toBeInTheDocument();
  });

  it('groups footer navigation into a compact mobile-friendly grid', () => {
    render(<Home />);

    const footerNavigation = screen.getByRole('navigation', { name: /Footer navigation/i });

    expect(footerNavigation).toHaveClass('grid-cols-2');
    expect(within(footerNavigation).getByRole('navigation', { name: /Explore footer links/i })).toBeInTheDocument();
    expect(within(footerNavigation).getByRole('navigation', { name: /Company footer links/i })).toBeInTheDocument();
  });
});
