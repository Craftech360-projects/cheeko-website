import { describe, expect, it, vi, beforeEach, afterEach } from 'vitest';
import { POST } from './route';

const originalEnv = process.env;

function requestWithBody(body: unknown) {
  return new Request('http://localhost:3000/api/early-access', {
    method: 'POST',
    headers: { 'content-type': 'application/json', 'user-agent': 'vitest-browser' },
    body: JSON.stringify(body)
  });
}

describe('early access API route', () => {
  beforeEach(() => {
    vi.stubGlobal('fetch', vi.fn());
    process.env = { ...originalEnv, EARLY_ACCESS_WEBHOOK_URL: 'https://script.google.com/macros/s/test/exec' };
  });

  afterEach(() => {
    vi.unstubAllGlobals();
    process.env = originalEnv;
  });

  it('rejects invalid email submissions before calling Apps Script', async () => {
    const response = await POST(requestWithBody({ email: 'not-an-email' }));
    const payload = await response.json();

    expect(response.status).toBe(400);
    expect(payload.message).toMatch(/valid email/i);
    expect(fetch).not.toHaveBeenCalled();
  });

  it('silently accepts honeypot submissions without forwarding spam', async () => {
    const response = await POST(requestWithBody({ email: 'bot@example.com', company: 'spam ltd' }));
    const payload = await response.json();

    expect(response.status).toBe(200);
    expect(payload.ok).toBe(true);
    expect(fetch).not.toHaveBeenCalled();
  });

  it('forwards valid leads to the configured Google Apps Script webhook', async () => {
    vi.mocked(fetch).mockResolvedValueOnce(new Response(JSON.stringify({ ok: true }), { status: 200 }));

    const response = await POST(requestWithBody({ email: ' Parent@Example.COM ', source: 'hero' }));
    const payload = await response.json();

    expect(response.status).toBe(200);
    expect(payload.message).toMatch(/early access list/i);
    expect(fetch).toHaveBeenCalledWith(
      'https://script.google.com/macros/s/test/exec',
      expect.objectContaining({
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: expect.stringContaining('"email":"parent@example.com"')
      })
    );
  });

  it('returns a helpful error when the webhook is unavailable', async () => {
    vi.mocked(fetch).mockResolvedValueOnce(new Response('nope', { status: 500 }));

    const response = await POST(requestWithBody({ email: 'parent@example.com' }));
    const payload = await response.json();

    expect(response.status).toBe(502);
    expect(payload.message).toMatch(/try again/i);
  });
});
