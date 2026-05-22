import Image from 'next/image';
import { assets } from '@/data/assets';
import { siteContent } from '@/data/site-content';

export function OriginalsSection() {
  return (
    <section id="originals" className="relative overflow-hidden bg-cheeko-orange px-4 py-14 sm:px-8 lg:px-10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.28),transparent_28%),radial-gradient(circle_at_82%_70%,rgba(255,195,0,0.38),transparent_30%)]" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="overflow-hidden rounded-[2rem] border-4 border-cheeko-ink bg-cheeko-yellow shadow-[0_12px_0_#24160f]">
          <Image
            src={assets.originals.section}
            alt="Cheeko Originals podcast and content artwork"
            width={1400}
            height={620}
            sizes="(max-width: 1024px) 100vw, 62vw"
            className="w-full object-cover"
          />
        </div>
        <div className="text-cheeko-ink">
          <p className="font-display text-sm font-black uppercase tracking-[0.2em]">{siteContent.originals.eyebrow}</p>
          <h2 className="mt-3 font-display text-5xl font-black leading-[0.86] tracking-[-0.05em] sm:text-6xl lg:text-7xl">
            {siteContent.originals.title}
          </h2>
          <p className="mt-5 max-w-xl text-lg font-black leading-8 text-cheeko-ink/85">{siteContent.originals.description}</p>
          <span className="mt-7 inline-flex rounded-full bg-cheeko-pink px-5 py-3 font-display text-sm font-black uppercase tracking-[0.14em] text-cheeko-ink shadow-cheeko-card">
            {siteContent.originals.badge}
          </span>
        </div>
      </div>
    </section>
  );
}
