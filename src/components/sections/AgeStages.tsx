import Image from 'next/image';
import { assets } from '@/data/assets';
import { siteContent } from '@/data/site-content';

const ageImages = {
  age4to6: assets.features.age4to6,
  age7to9: assets.features.age7to9,
  age10to12: assets.features.age10to12
} as const;

const ageAlts = {
  age4to6: 'Child in the age 4 to 6 stage',
  age7to9: 'Child in the age 7 to 9 stage',
  age10to12: 'Child in the age 10 to 12 stage'
} as const;

export function AgeStages() {
  return (
    <section className="relative overflow-hidden bg-cheeko-pink/35 px-4 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#ffd7e7] to-transparent" />
      <div className="absolute left-0 top-10 hidden h-full w-full opacity-30 sm:block">
        <div className="absolute left-[-4rem] top-16 h-64 w-[120%] rotate-[-6deg] rounded-[50%] border-t-4 border-cheeko-brown/25" />
        <div className="absolute left-[-5rem] top-28 h-64 w-[120%] rotate-[-5deg] rounded-[50%] border-t-4 border-cheeko-brown/15" />
      </div>
      <div className="relative mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-display text-sm font-black uppercase tracking-[0.18em] text-cheeko-orange">
            {siteContent.ageStages.eyebrow}
          </p>
          <h2 className="mt-3 font-display text-4xl font-black leading-[0.92] tracking-[-0.04em] text-cheeko-ink sm:text-5xl lg:text-6xl">
            {siteContent.ageStages.title}
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base font-bold leading-7 text-cheeko-brown sm:text-lg">
            {siteContent.ageStages.description}
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3 lg:gap-8">
          {siteContent.ageStages.cards.map((card, index) => (
            <article
              key={card.range}
              className="rounded-[2rem] border-4 border-white bg-white/70 p-4 text-center shadow-cheeko-card backdrop-blur transition duration-300 hover:-translate-y-1 md:[&:nth-child(2)]:translate-y-8"
            >
              <div className="mx-auto overflow-hidden rounded-[1.6rem] bg-cheeko-cream">
                <Image
                  src={ageImages[card.imageKey]}
                  alt={ageAlts[card.imageKey]}
                  width={620}
                  height={720}
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="aspect-[0.86/1] w-full object-cover"
                />
              </div>
              <span className="mx-auto mt-5 inline-flex h-9 w-9 items-center justify-center rounded-full bg-cheeko-yellow font-display text-sm font-black text-cheeko-ink shadow-[0_4px_0_rgba(115,75,0,0.18)]">
                {index + 1}
              </span>
              <h3 className="mt-3 font-display text-2xl font-black tracking-[-0.02em] text-cheeko-ink">
                {card.range}
              </h3>
              <p className="mx-auto mt-2 max-w-sm text-sm font-bold leading-6 text-cheeko-brown sm:text-base">
                {card.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
