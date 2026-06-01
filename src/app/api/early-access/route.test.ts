import { describe, expect, it, vi, beforeEach, afterEach } from 'vitest';

const { insertMock, fromMock, createClientMock } = vi.hoisted(() => {
  const insert = vi.fn();
  const from = vi.fn(() => ({ insert }));
  const createClient = vi.fn(() => ({ from }));

  return { insertMock: insert, fromMock: from, createClientMock: createClient };
});

vi.mock('@supabase/supabase-js', () => ({
  createClient: createClientMock
}));

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
    process.env = {
      ...originalEnv,
      NEXT_PUBLIC_SUPABASE_URL: 'https://project-ref.supabase.co',
      NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY: 'sb_publishable_test'
    };
    insertMock.mockResolvedValue({ error: null });
    fromMock.mockReturnValue({ insert: insertMock });
    createClientMock.mockReturnValue({ from: fromMock });
  });

  afterEach(() => {
    vi.clearAllMocks();
    process.env = originalEnv;
  });

  it('rejects invalid email submissions before writing to Supabase', async () => {
    const response = await POST(requestWithBody({ email: 'not-an-email' }));
    const payload = await response.json();

    expect(response.status).toBe(400);
    expect(payload.message).toMatch(/valid email/i);
    expect(createClientMock).not.toHaveBeenCalled();
  });

  it('silently accepts honeypot submissions without forwarding spam', async () => {
    const response = await POST(requestWithBody({ email: 'bot@example.com', company: 'spam ltd' }));
    const payload = await response.json();

    expect(response.status).toBe(200);
    expect(payload.ok).toBe(true);
    expect(createClientMock).not.toHaveBeenCalled();
  });

  it('inserts valid leads into Supabase', async () => {
    const response = await POST(requestWithBody({ email: ' Parent@Example.COM ', source: 'hero' }));
    const payload = await response.json();

    expect(response.status).toBe(200);
    expect(payload.message).toMatch(/early access list/i);
    expect(createClientMock).toHaveBeenCalledWith(
      'https://project-ref.supabase.co',
      'sb_publishable_test',
      expect.objectContaining({
        auth: expect.objectContaining({ persistSession: false })
      })
    );
    expect(fromMock).toHaveBeenCalledWith('early_access');
    expect(insertMock).toHaveBeenCalledWith(
      expect.objectContaining({
        email: 'parent@example.com',
        source: 'hero',
        user_agent: 'vitest-browser'
      })
    );
  });

  it('returns a helpful error when supabase insert fails', async () => {
    insertMock.mockResolvedValueOnce({ error: { message: 'db down' } });

    const response = await POST(requestWithBody({ email: 'parent@example.com' }));
    const payload = await response.json();

    expect(response.status).toBe(502);
    expect(payload.message).toMatch(/try again/i);
  });
});
