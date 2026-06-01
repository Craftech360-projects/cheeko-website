import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

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

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey =
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ??
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseKey) {
    return NextResponse.json(
      { ok: false, message: 'Early access signup is not configured yet. Please try again soon.' },
      { status: 503 }
    );
  }

  const supabase = createClient(supabaseUrl, supabaseKey, {
    auth: { persistSession: false }
  });

  const { error } = await supabase.from('early_access').insert({
    email,
    source: getSource(body.source),
    submitted_at: new Date().toISOString(),
    user_agent: request.headers.get('user-agent') ?? ''
  });

  if (error) {
    return NextResponse.json(
      { ok: false, message: 'We could not save your email. Please try again.' },
      { status: 502 }
    );
  }

  return NextResponse.json({
    ok: true,
    message: "You're on the Cheeko early access list. We'll email you before pre-orders open."
  });
}
