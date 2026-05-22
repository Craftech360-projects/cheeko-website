'use client';

import { FormEvent, useState } from 'react';
import { Button } from '@/components/ui/Button';
import { siteContent } from '@/data/site-content';

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type SubmitState = 'idle' | 'loading' | 'success' | 'error';

export function EarlyAccessForm() {
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [submitState, setSubmitState] = useState<SubmitState>('idle');
  const [message, setMessage] = useState('');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const normalizedEmail = email.trim().toLowerCase();

    if (!emailPattern.test(normalizedEmail)) {
      setSubmitState('error');
      setMessage('Please enter a valid email address.');
      return;
    }

    setSubmitState('loading');
    setMessage('');

    try {
      const response = await fetch('/api/early-access', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ email: normalizedEmail, company, source: 'hero' })
      });
      const payload = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(payload.message ?? 'We could not save your email. Please try again.');
      }

      setSubmitState('success');
      setMessage(payload.message ?? "You're on the Cheeko early access list.");
      setEmail('');
    } catch (error) {
      setSubmitState('error');
      setMessage(error instanceof Error ? error.message : 'We could not save your email. Please try again.');
    }
  }

  const isLoading = submitState === 'loading';

  return (
    <form
      className="mt-5 max-w-xl space-y-3 sm:mt-7 sm:flex sm:flex-wrap sm:items-center sm:gap-3 sm:space-y-0"
      aria-label="Early access signup"
      onSubmit={handleSubmit}
      noValidate
    >
      <label className="sr-only" htmlFor="hero-email">
        Email address
      </label>
      <input
        id="hero-email"
        type="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        placeholder={siteContent.hero.emailPlaceholder}
        className="min-h-13 w-full rounded-2xl border-2 border-white/70 bg-white/94 px-4 text-base font-bold text-cheeko-ink shadow-[0_12px_28px_rgba(0,0,0,0.2)] outline-none transition placeholder:text-stone-400 focus:border-cheeko-orange focus:ring-4 focus:ring-cheeko-yellow/35 sm:min-h-14 sm:flex-1 sm:px-5"
        aria-describedby={message ? 'early-access-message' : undefined}
      />
      <label className="hidden" htmlFor="company">
        Company
      </label>
      <input
        id="company"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        value={company}
        onChange={(event) => setCompany(event.target.value)}
        className="hidden"
      />
      <Button type="submit" disabled={isLoading} className="min-h-13 w-full uppercase tracking-wide sm:min-h-14 sm:w-auto sm:px-7">
        {isLoading ? 'Joining...' : siteContent.hero.cta}
      </Button>
      {message ? (
        <p
          id="early-access-message"
          role={submitState === 'success' ? 'status' : 'alert'}
          className={`w-full rounded-2xl px-4 py-3 text-sm font-black shadow-cheeko-card ${
            submitState === 'success' ? 'bg-cheeko-yellow text-cheeko-ink' : 'bg-white text-cheeko-brown'
          }`}
        >
          {message}
        </p>
      ) : null}
    </form>
  );
}
