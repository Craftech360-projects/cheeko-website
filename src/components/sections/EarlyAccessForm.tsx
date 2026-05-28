'use client';
 
import { FormEvent, useState } from 'react';
import { siteContent } from '@/data/site-content';
import { Mail, ArrowRight } from 'lucide-react';
 
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
    <div className="w-full">
      <form
        className="flex flex-col gap-3"
        aria-label="Early access signup"
        onSubmit={handleSubmit}
        noValidate
      >
        <div className="relative group">
          <input
            id="hero-email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder={siteContent.hero.emailPlaceholder}
            className="w-full h-12 pl-12 pr-4 bg-stone-50 border-2 border-stone-100 rounded-2xl text-cheeko-ink font-bold focus:border-cheeko-pink focus:outline-none transition-all placeholder:text-stone-400 text-sm"
            aria-describedby={message ? 'early-access-message' : undefined}
          />
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400 group-focus-within:text-cheeko-pink transition-colors">
            <Mail size={18} className="stroke-[2.5]" />
          </div>
        </div>
 
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
 
        <button
          type="submit"
          disabled={isLoading}
          className="group w-full h-14 bg-gradient-to-r from-cheeko-pink to-[#E91E63] text-white rounded-2xl text-base font-black uppercase tracking-widest shadow-[0_8px_30px_rgb(249,92,155,0.4)] hover:shadow-[0_8px_40px_rgb(249,92,155,0.6)] hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-70 disabled:hover:translate-y-0 transition-all flex items-center justify-center gap-3"
        >
          {isLoading ? 'Joining...' : siteContent.hero.cta}
          {!isLoading && <ArrowRight className="group-hover:translate-x-1 transition-transform" />}
        </button>
 
        {message && (
          <p
            id="early-access-message"
            role={submitState === 'success' ? 'status' : 'alert'}
            className={`text-center py-2 px-4 rounded-xl text-xs font-bold ${
              submitState === 'success' ? 'text-green-601 bg-green-50' : 'text-red-501 bg-red-50'
            }`}
          >
            {message}
          </p>
        )}
      </form>
    </div>
  );
}

