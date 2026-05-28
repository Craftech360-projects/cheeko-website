import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { ProductOptions } from './ProductOptions';

describe('ProductOptions visual states', () => {
  it('presents the product choice heading and both purchase actions', () => {
    render(<ProductOptions />);

    expect(screen.getByRole('heading', { name: /Choose your Cheeko/i })).toBeInTheDocument();
    expect(screen.getByText(/Two magical ways to spark curiosity and joy/i)).toBeInTheDocument();

    const proButton = screen.getByRole('button', { name: /Pre Order Cheeko Pro/i });
    const basicButton = screen.getByRole('button', { name: /Buy Cheeko Basic/i });
    expect(proButton).not.toBeDisabled();
    expect(basicButton).not.toBeDisabled();
    expect(screen.queryByText(/Sold out/i)).not.toBeInTheDocument();
  });
});
