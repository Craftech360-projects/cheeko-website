import Image from 'next/image';
import { assets } from '@/data/assets';
import { siteContent } from '@/data/site-content';

const featureImages = {
  routine: assets.features.routine,
  imaginativePlay: assets.features.imaginativePlay,
  creativity: assets.features.creativity
} as const;

const featureAlts = {
  routine: 'A child using Cheeko for daily routines',
  imaginativePlay: 'A child imagining a story with Cheeko',
  creativity: 'Children exploring creativity with Cheeko'
} as const;

export function Capabilities() {
  return (
    <section id="features" className="relative overflow-hidden bg-cheeko-cream px-4 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
      <div className="absolute left-0 top-0 h-40 w-full bg-gradient-to-b from-cheeko-cream to-transparent" />
      <div className="relative mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-4xl font-black leading-[0.92] tracking-[-0.04em] text-cheeko-ink sm:text-5xl lg:text-6xl">
            {siteContent.capabilities.eyebrow}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base font-bold leading-7 text-cheeko-brown sm:text-lg">
            {siteContent.capabilities.title}
          </p>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3 lg:gap-8">
          {siteContent.capabilities.cards.map((card, index) => (
            <article
              key={card.title}
              className="group rounded-[2rem] border-4 border-white bg-white/74 p-3 shadow-cheeko-card transition duration-300 hover:-translate-y-1 hover:rotate-0 md:odd:rotate-[-1.5deg] md:even:rotate-[1.5deg]"
            >
              <div className="overflow-hidden rounded-[1.55rem] bg-cheeko-yellow">
                <Image
                  src={featureImages[card.imageKey]}
                  alt={featureAlts[card.imageKey]}
                  width={720}
                  height={840}
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="aspect-[0.82/1] w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="px-2 pb-3 pt-5">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-cheeko-yellow font-display text-sm font-black text-cheeko-ink">
                  {index + 1}
                </span>
                <h3 className="mt-3 font-display text-2xl font-black tracking-[-0.02em] text-cheeko-ink">{card.title}</h3>
                <p className="mt-2 text-sm font-bold leading-6 text-cheeko-brown sm:text-base">{card.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
