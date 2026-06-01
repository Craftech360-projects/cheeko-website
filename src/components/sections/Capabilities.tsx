import Image from 'next/image';
import { assets } from '@/data/assets';
import { siteContent } from '@/data/site-content';

const featureImages = {
  routine: assets.features.routine,
  imaginativePlay: assets.features.imaginativePlay,
  creativity: assets.features.creativity
} as const;

const featureAlts = {
  routine: 'Child holding Cheeko outdoors',
  imaginativePlay: 'Child imagining with Cheeko at a desk',
  creativity: 'Children smiling while holding Cheeko'
} as const;

export function Capabilities() {
  return (
    <section
      id="features"
      className="relative min-h-screen min-h-[100svh] overflow-hidden bg-[linear-gradient(180deg,#FFE991_0%,#FFEFD9_100%)] px-5 pb-12 pt-16 sm:px-8 sm:pb-16 sm:pt-20 lg:px-12 lg:pb-20"
    >
      <div className="mx-auto max-w-[2010px] sm:[zoom:clamp(0.45,calc((100svh-2rem)/1250px),1)]">
        <div className="mx-auto max-w-[1000px] text-center">
          <h2 className="font-display text-[3.1rem] font-black leading-[0.94] text-black sm:text-[2.1rem]">
            {siteContent.capabilities.eyebrow}
          </h2>
          <p className="mx-auto mt-8 max-w-[880px] text-[1.05rem] font-medium leading-[1.24] text-black/55 sm:text-[3rem] sm:leading-[1.16] md:text-[2.25rem] lg:text-[1.5rem]">
            {siteContent.capabilities.title}
          </p>
        </div>

        <div className="mt-12 grid gap-12 md:grid-cols-3 md:gap-9 lg:mt-16 lg:gap-14">
          {siteContent.capabilities.cards.map((card) => (
            <article key={card.title} className="min-w-0 text-center md:text-left">
              <div className="mx-auto w-[80%] overflow-hidden rounded-[2.25rem] bg-[#FFEFD9] md:ml-0 md:mr-auto">
                <Image
                  src={featureImages[card.imageKey]}
                  alt={featureAlts[card.imageKey]}
                  width={832}
                  height={1136}
                  sizes="(max-width: 768px) 90vw, 33vw"
                  className="aspect-[0.733] w-full object-cover"
                />
              </div>
              <div className="pt-8">
                <h3 className="font-display text-3xl font-black leading-none text-black sm:text-4xl lg:text-[2rem]">
                  {card.title}
                </h3>
                <p className="mx-auto mt-4 max-w-[36ch] text-[0.98rem] font-medium leading-[1.38] text-black/55 sm:text-[2rem] sm:leading-[1.16] md:mx-0 lg:text-[1.5rem] lg:leading-[1.11]">
                  {card.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
