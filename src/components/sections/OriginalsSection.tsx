import Image from 'next/image';
import { assets } from '@/data/assets';
import { siteContent } from '@/data/site-content';

export function OriginalsSection() {
  return (
    <section id="originals" className="relative overflow-hidden bg-cheeko-orange px-4 py-12 sm:px-8 sm:py-16 lg:px-10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(255,255,255,0.3),transparent_28%),radial-gradient(circle_at_88%_78%,rgba(255,196,0,0.42),transparent_34%)]" />
      <div className="relative mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-[2rem] border-4 border-cheeko-ink bg-cheeko-yellow shadow-[0_12px_0_#24160f] sm:rounded-[2.5rem]">
          <Image
            src={assets.originals.section}
            alt="Cheeko Originals podcast and content artwork"
            width={1452}
            height={484}
            sizes="(max-width: 768px) 100vw, 1180px"
            className="aspect-[1.08/1] w-full object-cover sm:aspect-[3/1]"
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-cheeko-ink/78 via-cheeko-ink/28 to-transparent p-5 pt-20 text-white sm:p-8 lg:inset-y-0 lg:right-0 lg:left-auto lg:flex lg:w-[44%] lg:flex-col lg:justify-center lg:bg-cheeko-ink/82 lg:p-10">
            <p className="font-display text-xs font-black uppercase tracking-[0.2em] text-cheeko-yellow">
              {siteContent.originals.eyebrow}
            </p>
            <h2 className="mt-2 font-display text-4xl font-black leading-[0.86] tracking-[-0.05em] sm:text-5xl lg:text-6xl">
              {siteContent.originals.title}
            </h2>
            <p className="mt-4 max-w-lg text-sm font-black leading-6 text-white/90 sm:text-base sm:leading-7">
              {siteContent.originals.description}
            </p>
            <span className="mt-5 inline-flex w-fit rounded-full border-2 border-white bg-cheeko-pink px-4 py-2 font-display text-xs font-black uppercase tracking-[0.14em] text-cheeko-ink shadow-[0_5px_0_rgba(255,255,255,0.22)]">
              {siteContent.originals.badge}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
