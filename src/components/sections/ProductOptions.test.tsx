import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { ProductOptions } from './ProductOptions';

describe('ProductOptions visual states', () => {
  it('marks Cheeko Basic as sold out and disables its buying action', () => {
    render(<ProductOptions />);

    expect(screen.getAllByText(/Sold out/i).length).toBeGreaterThan(0);
    const basicButton = screen.getByRole('button', { name: /Cheeko Basic sold out/i });
    expect(basicButton).toBeDisabled();
  });

  it('keeps Cheeko Pro as the primary available buying action', () => {
    render(<ProductOptions />);

    const proButton = screen.getByRole('button', { name: /Buy Cheeko Pro/i });
    expect(proButton).not.toBeDisabled();
  });
});
