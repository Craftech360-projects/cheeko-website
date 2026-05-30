'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Menu, ShoppingCart } from 'lucide-react';
import { assets } from '@/data/assets';
import { siteContent } from '@/data/site-content';

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-white/35 bg-white/78 backdrop-blur-xl">
      <div className="flex h-16 w-full items-center justify-between px-4 sm:h-20 sm:px-8 lg:px-10">
        <a href="#top" className="inline-flex items-center rounded-xl focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-cheeko-orange" aria-label="Cheeko home">
          <Image src={assets.logo.main} alt="Cheeko" width={164} height={66} priority className="h-11 w-auto sm:h-14" />
        </a>
        <nav className="hidden items-center gap-8 font-display text-lg font-black text-cheeko-ink md:flex" aria-label="Primary navigation">
          {siteContent.navigation.map((item) => (
            <a key={item.href} href={item.href} className="rounded-xl px-2 py-1 transition hover:text-cheeko-orange focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-cheeko-orange">
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a
            href="#cards"
            className="inline-flex h-9 items-center justify-center rounded-2xl bg-[#ff5d7a] px-3 text-white shadow-[0_8px_22px_rgba(255,93,122,0.35)] transition hover:bg-[#ff4f70] focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-cheeko-orange sm:h-10 sm:px-4 md:h-12 md:px-7"
          >
            <span className="inline-flex h-[11px] w-auto whitespace-nowrap items-center justify-center [font-family:Inter] text-center text-[11px] font-normal leading-[1] tracking-[0] sm:text-[12px] md:text-[18px]">
              Shop Now
            </span>
          </a>
          <button type="button" className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-2xl text-cheeko-ink transition hover:bg-cheeko-yellow/60 focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-cheeko-orange" aria-label="Open cart">
            <ShoppingCart className="h-7 w-7" strokeWidth={2.6} />
          </button>
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen((open) => !open)}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-primary-navigation"
            className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-2xl text-cheeko-ink transition hover:bg-cheeko-yellow/60 focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-cheeko-orange md:hidden"
            aria-label="Open menu"
          >
            <Menu className="h-7 w-7" strokeWidth={2.6} />
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <nav
          id="mobile-primary-navigation"
          className="border-t border-white/40 bg-white/95 px-4 py-3 backdrop-blur-xl md:hidden"
          aria-label="Mobile primary navigation"
        >
          <div className="flex flex-col gap-1">
            {siteContent.navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="rounded-xl px-3 py-2 font-display text-lg font-black text-cheeko-ink transition hover:bg-cheeko-yellow/45 hover:text-cheeko-orange focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-cheeko-orange"
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
