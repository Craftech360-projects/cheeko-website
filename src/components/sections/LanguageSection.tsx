import Image from 'next/image';
import { assets } from '@/data/assets';
import { siteContent } from '@/data/site-content';

export function LanguageSection() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(135deg,#fff7e8_0%,#ffe3ed_48%,#fff7e8_100%)] px-4 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
      <div className="absolute right-[-8rem] top-10 h-80 w-80 rounded-full bg-cheeko-pink/20 blur-3xl" />
      <div className="absolute bottom-6 left-[-6rem] h-72 w-72 rounded-full bg-cheeko-yellow/35 blur-3xl" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-[1fr_1.1fr] lg:gap-10">
        <div className="relative mx-auto flex w-full max-w-lg justify-center lg:max-w-2xl">
          <div className="absolute inset-x-6 bottom-8 h-16 rounded-full bg-cheeko-orange/35 blur-2xl" />
          <div className="absolute top-10 h-72 w-72 rounded-full bg-cheeko-yellow/35 blur-3xl sm:h-96 sm:w-96" />
          <Image
            src={assets.product.deviceFront}
            alt="Front of the Cheeko device showing the fox assistant"
            width={900}
            height={1266}
            sizes="(max-width: 1024px) 72vw, (max-width: 1280px) 34rem, 38rem"
            className="relative max-h-[44rem] w-[72vw] object-contain drop-shadow-[0_30px_34px_rgba(99,58,0,0.3)] sm:w-[48vw] lg:w-[34rem] xl:w-[38rem]"
          />
        </div>
        <div>
          <p className="font-display text-sm font-black uppercase tracking-[0.18em] text-cheeko-orange">{siteContent.language.eyebrow}</p>
          <h2 className="mt-3 font-display text-4xl font-black leading-[0.92] tracking-[-0.04em] text-cheeko-ink sm:text-5xl lg:text-6xl">
            {siteContent.language.title}
          </h2>
          <p className="mt-5 max-w-3xl text-lg font-extrabold leading-8 text-cheeko-brown sm:text-xl">
            {siteContent.language.description}
          </p>
          <div className="mt-8 rounded-[2rem] border-4 border-white bg-white/82 p-5 shadow-cheeko-card sm:p-7">
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-cheeko-pink px-4 py-2 font-display text-xs font-black uppercase tracking-[0.14em] text-cheeko-ink">
                {siteContent.language.promptLabel}
              </span>
              <span className="rounded-full bg-cheeko-yellow px-4 py-2 font-display text-xs font-black uppercase tracking-[0.14em] text-cheeko-ink">
                Tap to translate
              </span>
            </div>
            <div className="mt-5 rounded-3xl bg-cheeko-cream p-5 text-cheeko-ink">
              <p className="font-display text-2xl font-black leading-tight sm:text-3xl">{siteContent.language.prompt}</p>
              <p className="mt-3 text-sm font-bold leading-6 text-cheeko-brown sm:text-base">{siteContent.language.response}</p>
            </div>
            <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {siteContent.language.chips.map((chip) => (
                <span key={chip} className="rounded-2xl bg-cheeko-line/70 px-4 py-3 text-center font-display text-sm font-black text-cheeko-brown">
                  {chip}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
