import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Home from '@/app/page';

describe('Meet Cheeko and products', () => {
  it('renders the Meet Cheeko story with corrected phone-free copy', () => {
    render(<Home />);

    expect(screen.getByRole('heading', { level: 2, name: /Meet Cheeko/i })).toBeInTheDocument();
    expect(screen.getByText(/all in a device made just for kids/i)).toBeInTheDocument();
    expect(screen.queryByText(/No screens/i)).not.toBeInTheDocument();
    expect(screen.getByAltText(/child relaxing with Cheeko and content cards/i)).toBeInTheDocument();
  });

  it('renders Pro and Basic product cards with prices and buying actions', () => {
    render(<Home />);

    expect(screen.getByRole('heading', { level: 3, name: /^Cheeko Pro$/i })).toBeInTheDocument();
    expect(screen.getByText(/₹ 4,990/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Pre Order Cheeko Pro/i })).toBeInTheDocument();

    expect(screen.getByRole('heading', { level: 3, name: /Cheeko Basic/i })).toBeInTheDocument();
    expect(screen.getByText(/₹ 3,990/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Buy Cheeko Basic/i })).not.toBeDisabled();
  });
});
