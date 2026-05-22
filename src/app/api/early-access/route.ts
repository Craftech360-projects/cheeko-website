import { NextResponse } from 'next/server';

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type EarlyAccessRequest = {
  email?: unknown;
  company?: unknown;
  source?: unknown;
};

function normalizeEmail(email: unknown) {
  return typeof email === 'string' ? email.trim().toLowerCase() : '';
}

function getSource(source: unknown) {
  return typeof source === 'string' && source.trim() ? source.trim().slice(0, 80) : 'hero';
}

export async function POST(request: Request) {
  let body: EarlyAccessRequest;

  try {
    body = (await request.json()) as EarlyAccessRequest;
  } catch {
    return NextResponse.json({ ok: false, message: 'Please enter a valid email address.' }, { status: 400 });
  }

  if (typeof body.company === 'string' && body.company.trim()) {
    return NextResponse.json({ ok: true, message: "You're on the Cheeko early access list." });
  }

  const email = normalizeEmail(body.email);

  if (!emailPattern.test(email)) {
    return NextResponse.json({ ok: false, message: 'Please enter a valid email address.' }, { status: 400 });
  }

  const webhookUrl = process.env.EARLY_ACCESS_WEBHOOK_URL;

  if (!webhookUrl) {
    return NextResponse.json(
      { ok: false, message: 'Early access signup is not configured yet. Please try again soon.' },
      { status: 503 }
    );
  }

  const response = await fetch(webhookUrl, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({
      email,
      source: getSource(body.source),
      submittedAt: new Date().toISOString(),
      userAgent: request.headers.get('user-agent') ?? ''
    })
  });

  if (!response.ok) {
    return NextResponse.json(
      { ok: false, message: 'We could not save your email. Please try again.' },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true, message: "You're on the Cheeko early access list. We'll email you before pre-orders open." });
}
