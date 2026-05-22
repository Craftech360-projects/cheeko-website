import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Home from '@/app/page';

describe('Features and language sections', () => {
  it('renders three specific Cheeko capability cards with real images', () => {
    render(<Home />);

    expect(screen.getByRole('heading', { level: 2, name: /What Cheeko can do/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 3, name: /Daily Routines/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 3, name: /Imaginative Play/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 3, name: /Creative Learning/i })).toBeInTheDocument();
    expect(screen.getByAltText(/child using Cheeko for daily routines/i)).toBeInTheDocument();
    expect(screen.getByAltText(/child imagining a story with Cheeko/i)).toBeInTheDocument();
    expect(screen.getByAltText(/children exploring creativity with Cheeko/i)).toBeInTheDocument();
  });

  it('renders the language section with mother-tongue messaging and language chips', () => {
    render(<Home />);

    expect(screen.getByRole('heading', { level: 2, name: /Cheeko Speaks Your Language/i })).toBeInTheDocument();
    expect(screen.getByText(/mother tongue/i)).toBeInTheDocument();
    expect(screen.getByAltText(/front of the Cheeko device showing the fox assistant/i)).toBeInTheDocument();
    expect(screen.getByText(/Tamil/i)).toBeInTheDocument();
    expect(screen.getAllByText(/Kannada/i).length).toBeGreaterThan(0);
    expect(screen.getByText(/Telugu/i)).toBeInTheDocument();
    expect(screen.getByText(/Hindi/i)).toBeInTheDocument();
  });

  it('gives the Cheeko language device strong visual prominence', () => {
    render(<Home />);

    const device = screen.getByAltText(/front of the Cheeko device showing the fox assistant/i);

    expect(device).toHaveClass('max-h-[44rem]', 'w-[72vw]', 'lg:w-[34rem]', 'xl:w-[38rem]');
  });
});
