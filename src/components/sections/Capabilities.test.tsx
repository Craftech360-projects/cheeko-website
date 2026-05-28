import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Capabilities } from './Capabilities';

describe('Capabilities', () => {
  it('renders the exact capability gallery content', () => {
    render(<Capabilities />);

    expect(screen.getByRole('heading', { level: 2, name: /What Cheeko can do/i })).toBeInTheDocument();
    expect(
      screen.getByText(/Your child can talk to Cheeko in their mother tongue/i)
    ).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 3, name: /^Routine$/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 3, name: /^Imaginative Play$/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 3, name: /^Creativity$/i })).toBeInTheDocument();
    expect(screen.getAllByText(/From routines to wild imagination, Cheeko joins every moment/i)).toHaveLength(3);
  });
});
