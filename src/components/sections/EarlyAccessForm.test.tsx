import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { EarlyAccessForm } from './EarlyAccessForm';

describe('EarlyAccessForm', () => {
  beforeEach(() => {
    vi.stubGlobal('fetch', vi.fn());
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it('submits a valid email and shows the success message', async () => {
    vi.mocked(fetch).mockResolvedValueOnce(
      new Response(JSON.stringify({ ok: true, message: "You're on the Cheeko early access list." }), { status: 200 })
    );

    render(<EarlyAccessForm />);

    fireEvent.change(screen.getByLabelText(/Email address/i), { target: { value: 'parent@example.com' } });
    fireEvent.click(screen.getByRole('button', { name: /Get early access/i }));

    expect(screen.getByRole('button', { name: /Joining/i })).toBeDisabled();

    await waitFor(() => {
      expect(screen.getByRole('status')).toHaveTextContent(/early access list/i);
    });
    expect(fetch).toHaveBeenCalledWith(
      '/api/early-access',
      expect.objectContaining({
        method: 'POST',
        body: JSON.stringify({ email: 'parent@example.com', company: '', source: 'hero' })
      })
    );
  });

  it('shows an inline error for invalid emails', async () => {
    render(<EarlyAccessForm />);

    fireEvent.change(screen.getByLabelText(/Email address/i), { target: { value: 'wrong' } });
    fireEvent.click(screen.getByRole('button', { name: /Get early access/i }));

    expect(await screen.findByRole('alert')).toHaveTextContent(/valid email/i);
    expect(fetch).not.toHaveBeenCalled();
  });
});
