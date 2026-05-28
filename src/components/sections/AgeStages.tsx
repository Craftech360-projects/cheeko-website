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

const portraitStyles = [
  'md:-rotate-6 md:translate-y-6',
  'md:translate-y-12',
  'md:rotate-6 md:translate-y-4'
] as const;

const portraitImageStyles = [
  'max-w-[18rem] md:max-w-[20rem]',
  'max-w-[17rem] md:max-w-[19rem]',
  'max-w-[18.5rem] md:max-w-[20.5rem]'
] as const;

export function AgeStages() {
  return (
    <section
      aria-label="Childhood stage companion gallery"
      className="relative overflow-hidden bg-[#f8a4c6] px-4 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24"
    >
      <div className="absolute inset-0 bg-[linear-gradient(110deg,rgba(255,255,255,0.42)_0%,rgba(255,255,255,0.16)_42%,rgba(249,92,155,0.16)_100%)]" />
      <svg
        aria-hidden="true"
        className="absolute inset-x-[-18%] top-7 h-[34rem] w-[136%] text-cheeko-brown/22 sm:top-2 lg:top-0"
        data-testid="age-stage-waves"
        fill="none"
        viewBox="0 0 1440 520"
      >
        <path d="M-20 120C150 132 250 180 390 300C520 412 620 424 780 368C950 308 1050 330 1205 390C1310 430 1400 430 1480 404" stroke="currentColor" strokeLinecap="round" strokeWidth="5" />
        <path d="M-20 160C150 172 246 218 382 330C520 444 622 456 790 402C950 352 1050 370 1205 426C1312 464 1400 466 1480 442" stroke="currentColor" strokeLinecap="round" strokeWidth="5" />
        <path d="M-20 200C148 212 244 254 374 360C514 474 622 492 790 442C948 396 1052 410 1208 462C1314 498 1400 502 1480 480" stroke="currentColor" strokeLinecap="round" strokeWidth="5" />
      </svg>
      <div className="relative mx-auto max-w-7xl">
        <div className="mx-auto max-w-4xl text-center">
          {siteContent.ageStages.eyebrow ? (
            <p className="font-display text-sm font-black uppercase tracking-[0.18em] text-cheeko-orange drop-shadow-[0_2px_0_rgba(255,255,255,0.35)]">
              {siteContent.ageStages.eyebrow}
            </p>
          ) : null}
          <h2 className="mx-auto mt-3 max-w-3xl font-display text-4xl font-black leading-[0.9] tracking-[-0.045em] text-cheeko-ink sm:text-5xl lg:text-6xl">
            {siteContent.ageStages.title}
          </h2>
          {siteContent.ageStages.description ? (
            <p className="mx-auto mt-5 max-w-2xl text-base font-black leading-7 text-cheeko-brown/85 sm:text-lg">
              {siteContent.ageStages.description}
            </p>
          ) : null}
        </div>

        <div className="mt-12 grid gap-10 md:grid-cols-3 md:gap-8 lg:mt-16">
          {siteContent.ageStages.cards.map((card, index) => (
            <article
              key={card.range}
              className="group text-center transition duration-300 hover:-translate-y-2"
            >
              <div
                className={`mx-auto flex h-[24rem] items-end justify-center bg-transparent transition duration-300 ${portraitStyles[index]}`}
                data-testid="age-stage-portrait"
              >
                <Image
                  src={ageImages[card.imageKey]}
                  alt={ageAlts[card.imageKey]}
                  width={620}
                  height={720}
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className={`mx-auto h-auto w-full drop-shadow-[0_24px_32px_rgba(109,74,50,0.2)] transition duration-500 group-hover:scale-105 ${portraitImageStyles[index]}`}
                />
              </div>
              <h3 className="mt-20 min-h-[2.4rem] font-display text-3xl font-black leading-none tracking-[-0.03em] text-cheeko-ink sm:text-4xl">
                {card.range}
              </h3>
              <p className="mx-auto mt-2 min-h-[2.4rem] max-w-xs text-[1.7rem] font-medium leading-[1.16] text-cheeko-ink sm:text-2xl">
                {card.subtitle}
              </p>
              <p className="mx-auto mt-2 min-h-[5.4rem] max-w-sm text-base font-bold leading-7 text-cheeko-brown/78 sm:text-lg">
                {card.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
