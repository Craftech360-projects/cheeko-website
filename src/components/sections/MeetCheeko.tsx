import Image from 'next/image';
import { assets } from '@/data/assets';
import { siteContent } from '@/data/site-content';

export function MeetCheeko() {
  return (
    <section id="meet" className="relative overflow-hidden bg-cheeko-yellow px-4 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
      <div className="absolute left-[-8rem] top-10 h-72 w-72 rounded-full bg-white/25 blur-3xl" />
      <div className="absolute bottom-[-8rem] right-[-4rem] h-80 w-80 rounded-full bg-cheeko-orange/25 blur-3xl" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.82fr_1.18fr]">
        <div className="max-w-xl">
          <p className="font-display text-sm font-black uppercase tracking-[0.18em] text-cheeko-brown">Phone-free kid tech</p>
          <h2 className="mt-3 font-display text-5xl font-black leading-[0.9] tracking-[-0.04em] text-cheeko-ink sm:text-6xl lg:text-7xl">
            {siteContent.meet.title}
          </h2>
          <p className="mt-5 text-lg font-extrabold leading-8 text-cheeko-brown sm:text-xl">
            {siteContent.meet.description}
          </p>
          <p className="mt-5 rounded-3xl border-2 border-cheeko-ink/10 bg-white/55 px-5 py-4 text-base font-bold leading-7 text-cheeko-ink shadow-cheeko-card backdrop-blur">
            {siteContent.meet.accent}
          </p>
        </div>
        <div className="relative mx-auto w-full max-w-3xl rotate-0 rounded-[2rem] bg-white/55 p-3 shadow-[0_22px_70px_rgba(83,54,0,0.25)] sm:rounded-[2.5rem] sm:p-4 lg:rotate-1">
          <Image
            src={assets.hero.meetCheeko}
            alt="A child relaxing with Cheeko and content cards"
            width={1100}
            height={900}
            sizes="(max-width: 1024px) 100vw, 58vw"
            className="aspect-[1.18/1] rounded-[1.5rem] object-cover sm:rounded-[2rem]"
          />
        </div>
      </div>
    </section>
  );
}
