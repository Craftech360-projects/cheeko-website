'use client';

import { useState } from 'react';
import Image from 'next/image';
import { EarlyAccessForm } from './EarlyAccessForm';
import { Globe, Brain, BookOpen, Sparkles, ShieldCheck, X } from 'lucide-react';

export function HeroSection() {
  const [isMobileFormOpen, setIsMobileFormOpen] = useState(true);

  return (
    <section id="top" className="relative -mt-16 w-full h-[100svh] min-h-screen overflow-hidden bg-cheeko-ink">
      {/* Background Image Spread */}
      <Image
        src="/assets/hero/image copy.png"
        alt="Child playing with Cheeko"
        fill
        priority
        className="object-cover !object-left !object-top md:hidden"
      />
      <Image
        src="/assets/hero/image.png"
        alt="Child playing with Cheeko"
        fill
        priority
        className="hidden object-cover !object-left !object-top md:block"
      />
      
      {/* Subtle Overlay */}
      <div className="absolute inset-0 bg-black/5" />

      {/* Grid Container for Card Positioning */}
      <div className="relative flex h-full items-end pb-8 sm:pb-12 lg:pb-16">
        <div className="w-full flex justify-start">
          <div
            className={`relative ml-4 mr-4 w-full max-w-[620px] overflow-hidden rounded-[2.2rem] border border-white/70 bg-[#fffdfa] p-4 shadow-[0_28px_70px_-22px_rgba(15,23,42,0.45)] sm:ml-10 sm:mr-0 sm:p-8 lg:ml-16 lg:p-10 ${
              isMobileFormOpen ? 'block' : 'hidden md:block'
            }`}
          >
            {isMobileFormOpen && (
              <button
                type="button"
                onClick={() => setIsMobileFormOpen(false)}
                className="absolute right-7 top-7 z-20 inline-flex h-7 w-7 items-center justify-center rounded-full bg-stone-100 text-stone-600 transition hover:bg-stone-200 focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-cheeko-orange md:hidden"
                aria-label="Close early access form"
              >
                <X size={14} />
              </button>
            )}
            <div className="pointer-events-none absolute -bottom-16 -left-10 h-44 w-44 rounded-full border border-[#f6dfdf]" />
            <div className="pointer-events-none absolute -bottom-12 -left-6 h-36 w-36 rounded-full border border-[#f4e7df]" />

            <div className="relative z-10 flex justify-center">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#ffe7f0] px-3.5 py-1.5 font-display text-sm font-bold leading-none text-[#ee5d9f] sm:gap-2 sm:px-5 sm:py-2 sm:text-lg">
                <Sparkles size={15} className="stroke-[2.2]" />
                Coming 2026
              </span>
            </div>

            <div className="relative z-10 mt-3 text-center sm:mt-5">
              <h1 className="[font-family:Inter] text-[2.35rem] font-black leading-[0.96] text-[#0c2047] sm:text-[4.1rem]">
                Cheeko Pro
              </h1>
              <p className="mx-auto mt-2 max-w-[31ch] text-[0.95rem] font-medium leading-[1.35] text-[#474747] sm:mt-3 sm:text-[1rem]">
                Cheeko is a magical AI-powered companion that{' '}
                <span className="font-semibold text-[#8b5cf6]">talks</span>,{' '}
                <span className="font-semibold text-[#ec4899]">listens</span>,{' '}
                <span className="font-semibold text-[#16a34a]">plays</span>, and{' '}
                <span className="font-semibold text-[#eab308]">grows</span> with your child.
              </p>
            </div>

            <div className="relative z-10 mt-5 grid grid-cols-3 gap-2 sm:mt-7 sm:gap-4">
              <div className="flex items-center gap-1.5 rounded-xl border border-[#f1ebff] bg-[#f8f4ff] px-2 py-2 sm:gap-3 sm:rounded-2xl sm:px-4 sm:py-3">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg text-[#8b5cf6] sm:h-12 sm:w-12 sm:rounded-xl">
                  <Globe size={16} className="stroke-[1.9] sm:hidden" />
                  <Globe size={28} className="hidden stroke-[1.9] sm:block" />
                </div>
                <div>
                  <p className="font-display text-[1.05rem] font-bold leading-none text-[#8b5cf6] sm:text-[2rem]">15+</p>
                  <p className="mt-0.5 text-[0.6rem] font-medium leading-none text-[#222] sm:mt-1 sm:text-[1.1rem]">Languages</p>
                </div>
              </div>

              <div className="flex items-center gap-1.5 rounded-xl border border-[#e8f8ea] bg-[#f3fff3] px-2 py-2 sm:gap-3 sm:rounded-2xl sm:px-4 sm:py-3">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg text-[#22c55e] sm:h-12 sm:w-12 sm:rounded-xl">
                  <Brain size={16} className="stroke-[1.9] sm:hidden" />
                  <Brain size={28} className="hidden stroke-[1.9] sm:block" />
                </div>
                <div>
                  <p className="font-display text-[0.83rem] font-bold leading-none text-[#16a34a] sm:text-[1.9rem]">Cognitive</p>
                  <p className="mt-0.5 text-[0.6rem] font-medium leading-none text-[#222] sm:mt-1 sm:text-[1.1rem]">Boost</p>
                </div>
              </div>

              <div className="flex items-center gap-1.5 rounded-xl border border-[#fff1cf] bg-[#fffaf0] px-2 py-2 sm:gap-3 sm:rounded-2xl sm:px-4 sm:py-3">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg text-[#eab308] sm:h-12 sm:w-12 sm:rounded-xl">
                  <BookOpen size={16} className="stroke-[1.9] sm:hidden" />
                  <BookOpen size={28} className="hidden stroke-[1.9] sm:block" />
                </div>
                <div>
                  <p className="font-display text-[1.05rem] font-bold leading-none text-[#eab308] sm:text-[2rem]">100+</p>
                  <p className="mt-0.5 text-[0.6rem] font-medium leading-none text-[#222] sm:mt-1 sm:text-[1.1rem]">Contents</p>
                </div>
              </div>
            </div>

            <div className="relative z-10 mt-4 flex items-center justify-center gap-2 text-center sm:mt-7 sm:gap-4">
              <span className="text-[#f0c44c]">✧</span>
              <p className="text-[0.9rem] font-medium text-[#3f3f46] sm:text-[1.15rem]">
                Be the first to know when <span className="font-semibold text-[#ec4899]">pre-orders</span> open.
              </p>
              <span className="text-[#f0c44c]">✧</span>
            </div>

            <div className="relative z-10 mt-3 sm:mt-5">
              {isMobileFormOpen ? (
                <div className="md:hidden">
                  <EarlyAccessForm />
                </div>
              ) : null}
              <div className="hidden md:block">
                <EarlyAccessForm />
              </div>
            </div>

            <div className="relative z-10 mt-3 flex items-center justify-center gap-2 text-[#737373] sm:mt-4">
              {isMobileFormOpen ? (
                <>
                  <ShieldCheck size={17} className="text-[#ec4899] md:hidden" />
                  <p className="text-[0.72rem] font-medium md:hidden">No spam. Only exciting updates from Cheeko.</p>
                </>
              ) : null}
              <ShieldCheck size={17} className="hidden text-[#ec4899] md:block" />
              <p className="hidden text-[0.72rem] font-medium sm:text-[0.92rem] md:block">No spam. Only exciting updates from Cheeko.</p>
            </div>
          </div>
        </div>
      </div>

      {!isMobileFormOpen ? (
        <div className="absolute bottom-4 right-4 z-30 md:hidden">
          <button
            type="button"
            onClick={() => setIsMobileFormOpen(true)}
            className="inline-flex h-11 items-center rounded-full bg-[#f95c9b] px-4 font-display text-xs font-black tracking-wide text-white shadow-[0_10px_24px_rgba(249,92,155,0.5)] transition hover:bg-[#f64893] focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-cheeko-orange"
            aria-label="Open early access form"
          >
            Get Early Access
          </button>
        </div>
      ) : null}
    </section>
  );
}
