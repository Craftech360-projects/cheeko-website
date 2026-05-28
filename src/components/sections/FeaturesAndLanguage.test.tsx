import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Home from '@/app/page';

describe('Features and language sections', () => {
  it('renders three specific Cheeko capability cards with real images', () => {
    render(<Home />);

    expect(screen.getByRole('heading', { level: 2, name: /What Cheeko can do/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 3, name: /Routine/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 3, name: /Imaginative Play/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 3, name: /Creativity/i })).toBeInTheDocument();
    expect(screen.getByAltText(/Child holding Cheeko outdoors/i)).toBeInTheDocument();
    expect(screen.getByAltText(/Child imagining with Cheeko at a desk/i)).toBeInTheDocument();
    expect(screen.getByAltText(/Children smiling while holding Cheeko/i)).toBeInTheDocument();
  });

  it('renders the language section with mother-tongue messaging and language chips', () => {
    render(<Home />);

    expect(screen.getByRole('heading', { level: 2, name: /Cheeko Speaks Your Language/i })).toBeInTheDocument();
    expect(screen.getAllByText(/mother tongue/i).length).toBeGreaterThan(0);
    expect(screen.getByAltText(/front of the Cheeko device showing the fox assistant/i)).toBeInTheDocument();
    expect(screen.getByText(/Speaking:/i)).toBeInTheDocument();
    expect(screen.getAllByRole('button', { name: /Tap to listen/i }).length).toBeGreaterThan(0);
  });

  it('gives the Cheeko language device strong visual prominence', () => {
    render(<Home />);

    const device = screen.getByAltText(/front of the Cheeko device showing the fox assistant/i);

    expect(device).toHaveClass('scale-[0.88]', 'lg:translate-x-[-2.6rem]', 'lg:scale-[1.14]');
  });
});
