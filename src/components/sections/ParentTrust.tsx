import Image from 'next/image';
import { assets } from '@/data/assets';
import { siteContent } from '@/data/site-content';

const trustImages = {
  parentControl: assets.app.parentControl,
  safeParentApproved: assets.app.safeParentApproved,
  playAnytime: assets.app.playAnytime
} as const;

const trustAlts = {
  parentControl: 'Parent control card',
  safeParentApproved: 'Safe parent approved card',
  playAnytime: 'Play anytime card'
} as const;

export function ParentTrust() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,#fff7e8_0%,#ffd7e7_100%)] px-4 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
      <div className="absolute -left-24 top-24 h-72 w-72 rounded-full bg-cheeko-yellow/45 blur-3xl" />
      <div className="absolute -right-28 bottom-16 h-80 w-80 rounded-full bg-cheeko-pink/28 blur-3xl" />
      <div className="relative mx-auto max-w-7xl">
        <div className="grid items-center gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:gap-12">
          <div>
            <p className="font-display text-sm font-black uppercase tracking-[0.18em] text-cheeko-orange">
              {siteContent.trust.eyebrow}
            </p>
            <h2 className="mt-3 max-w-2xl font-display text-4xl font-black leading-[0.92] tracking-[-0.04em] text-cheeko-ink sm:text-5xl lg:text-6xl">
              {siteContent.trust.title}
            </h2>
            <p className="mt-5 max-w-xl text-lg font-extrabold leading-8 text-cheeko-brown sm:text-xl">
              {siteContent.trust.description}
            </p>
          </div>

          <div className="relative rounded-[2.25rem] border-4 border-white bg-white/76 p-4 shadow-cheeko-card sm:p-6">
            <div className="absolute -right-4 -top-4 rounded-full bg-cheeko-yellow px-4 py-2 font-display text-xs font-black uppercase tracking-[0.14em] text-cheeko-ink shadow-cheeko-card">
              Parent peace
            </div>
            <Image
              src={assets.app.childBestCompanion}
              alt="Cheeko companion app preview"
              width={980}
              height={740}
              sizes="(max-width: 1024px) 100vw, 48vw"
              className="w-full rounded-[1.75rem] object-cover"
            />
            <div className="mt-5 rounded-[1.6rem] bg-cheeko-cream px-5 py-4">
              <h3 className="font-display text-2xl font-black tracking-[-0.02em] text-cheeko-ink">
                {siteContent.trust.heroCard.title}
              </h3>
              <p className="mt-2 text-sm font-bold leading-6 text-cheeko-brown sm:text-base">
                {siteContent.trust.heroCard.note}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3 lg:mt-12 lg:gap-6">
          {siteContent.trust.cards.map((card) => (
            <article key={card.title} className="rounded-[2rem] border-4 border-white bg-white/82 p-4 shadow-cheeko-card transition duration-300 hover:-translate-y-1">
              <Image
                src={trustImages[card.imageKey]}
                alt={trustAlts[card.imageKey]}
                width={620}
                height={460}
                sizes="(max-width: 768px) 100vw, 33vw"
                className="aspect-[1.2/1] w-full rounded-[1.5rem] object-cover"
              />
              <h3 className="mt-5 font-display text-2xl font-black tracking-[-0.02em] text-cheeko-ink">
                {card.title}
              </h3>
              <p className="mt-2 text-sm font-bold leading-6 text-cheeko-brown sm:text-base">{card.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
