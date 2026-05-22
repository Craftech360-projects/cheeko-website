import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Home from '@/app/page';

describe('Parent trust and age stages', () => {
  it('renders parent trust cards with app, safety, and offline reassurance', () => {
    render(<Home />);

    expect(screen.getByRole('heading', { level: 2, name: /Your child's new best companion/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 3, name: /Parent Control/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 3, name: /Safe & Parent Approved/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 3, name: /Play Anytime, Anywhere/i })).toBeInTheDocument();
    expect(screen.getByAltText(/Cheeko companion app preview/i)).toBeInTheDocument();
    expect(screen.getByAltText(/parent control card/i)).toBeInTheDocument();
    expect(screen.getByAltText(/safe parent approved card/i)).toBeInTheDocument();
    expect(screen.getByAltText(/play anytime card/i)).toBeInTheDocument();
  });

  it('renders all childhood age stages with real kid images', () => {
    render(<Home />);

    expect(screen.getByRole('heading', { level: 2, name: /A companion for every stage of childhood/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 3, name: /Age 4-6/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 3, name: /Age 7-9/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 3, name: /Age 10-12/i })).toBeInTheDocument();
    expect(screen.getByAltText(/child in the age 4 to 6 stage/i)).toBeInTheDocument();
    expect(screen.getByAltText(/child in the age 7 to 9 stage/i)).toBeInTheDocument();
    expect(screen.getByAltText(/child in the age 10 to 12 stage/i)).toBeInTheDocument();
  });
});
