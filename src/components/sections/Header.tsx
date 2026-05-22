import Image from 'next/image';
import { Menu, ShoppingCart } from 'lucide-react';
import { assets } from '@/data/assets';
import { siteContent } from '@/data/site-content';

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/35 bg-white/78 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:h-20 sm:px-8 lg:px-10">
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
          <button type="button" className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-2xl text-cheeko-ink transition hover:bg-cheeko-yellow/60 focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-cheeko-orange" aria-label="Open cart">
            <ShoppingCart className="h-7 w-7" strokeWidth={2.6} />
          </button>
          <button type="button" className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-2xl text-cheeko-ink transition hover:bg-cheeko-yellow/60 focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-cheeko-orange md:hidden" aria-label="Open menu">
            <Menu className="h-7 w-7" strokeWidth={2.6} />
          </button>
        </div>
      </div>
    </header>
  );
}
