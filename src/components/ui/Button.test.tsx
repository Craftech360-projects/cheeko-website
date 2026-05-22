import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Button } from './Button';

describe('Button', () => {
  it('renders primary buttons with explicit visible inline action styles', () => {
    render(<Button>Buy Cheeko Pro</Button>);

    const button = screen.getByRole('button', { name: /Buy Cheeko Pro/i });
    expect(button).toHaveStyle({
      background: 'linear-gradient(180deg, #ff6aa8 0%, #f95c9b 100%)',
      border: '3px solid #24160f',
      color: '#24160f'
    });
    expect(button.getAttribute('style')).toContain('box-shadow: 0 8px 0 #24160f');
  });

  it('renders disabled buttons with explicit grey visual styles', () => {
    render(<Button variant="disabled">Sold out</Button>);

    const button = screen.getByRole('button', { name: /Sold out/i });
    expect(button).toBeDisabled();
    expect(button).toHaveStyle({
      background: '#d6d3d1',
      border: '3px solid #8d867f',
      color: '#57534e'
    });
  });
});
