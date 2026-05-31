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
        className="flex flex-col gap-3 [font-family:Inter]"
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
            aria-label="Email address"
            className="h-[3.2rem] w-full rounded-[1rem] border border-[#e6e6e6] bg-white pl-11 pr-3 text-[0.98rem] font-medium text-cheeko-ink outline-none transition-all placeholder:text-[#9a9a9a] focus:border-[#f95c9b] focus:ring-2 focus:ring-[#ffd4e6] sm:h-[3.7rem] sm:rounded-[1.15rem] sm:pl-14 sm:pr-4 sm:text-[1.15rem]"
            aria-describedby={message ? 'early-access-message' : undefined}
          />
          <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#9a9a9a] transition-colors group-focus-within:text-cheeko-pink sm:left-5">
            <Mail size={17} className="stroke-[2.2] sm:hidden" />
            <Mail size={21} className="hidden stroke-[2.2] sm:block" />
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
          className="group flex h-[3.2rem] w-full items-center justify-center gap-2 rounded-[1rem] bg-gradient-to-r from-[#f95c9b] to-[#f64893] text-[0.93rem] font-black uppercase tracking-[0.12em] text-white shadow-[0_9px_26px_rgba(249,92,155,0.38)] transition-all hover:-translate-y-0.5 hover:shadow-[0_14px_30px_rgba(249,92,155,0.47)] active:translate-y-0 disabled:opacity-70 disabled:hover:translate-y-0 sm:h-[3.8rem] sm:gap-3 sm:rounded-[1.15rem] sm:text-[1.07rem]"
        >
          {isLoading ? 'Joining...' : siteContent.hero.cta}
          {!isLoading && <ArrowRight size={20} className="transition-transform group-hover:translate-x-1 sm:hidden" />}
          {!isLoading && <ArrowRight size={24} className="hidden transition-transform group-hover:translate-x-1 sm:block" />}
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
