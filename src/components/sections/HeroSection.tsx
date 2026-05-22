import Image from 'next/image';
import { assets } from '@/data/assets';
import { siteContent } from '@/data/site-content';
import { EarlyAccessForm } from './EarlyAccessForm';

export function HeroSection() {
  return (
    <section id="top" className="relative isolate overflow-hidden bg-cheeko-ink text-white lg:min-h-[calc(100dvh-104px)]">
      <Image
        src={assets.hero.desktop}
        alt="Child smiling beside the yellow Cheeko companion device"
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover object-[82%_center] sm:object-center"
      />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(36,22,15,0.72)_0%,rgba(36,22,15,0.42)_46%,rgba(36,22,15,0.16)_100%)] sm:bg-[linear-gradient(90deg,rgba(36,22,15,0.74)_0%,rgba(36,22,15,0.42)_46%,rgba(36,22,15,0.18)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-cheeko-yellow/90 via-cheeko-yellow/20 to-transparent" />

      <div data-testid="hero-layout" className="mx-auto flex min-h-[calc(100dvh-104px)] max-w-7xl items-start px-4 pb-7 pt-8 sm:px-8 sm:pb-10 sm:pt-10 lg:items-end lg:px-10 lg:pb-16">
        <div className="max-w-3xl pt-4 text-left sm:pb-2 sm:pt-0 lg:pb-10">
          <p className="inline-flex rounded-full bg-cheeko-yellow px-3.5 py-1.5 font-display text-xs font-black uppercase tracking-[0.14em] text-cheeko-ink shadow-cheeko-card sm:px-4 sm:py-2 sm:text-sm">
            Phone-free companion for ages {siteContent.audience.ageRange}
          </p>
          <h1 className="mt-4 hidden max-w-4xl font-display text-5xl font-black leading-[0.9] tracking-[-0.04em] text-white drop-shadow-[0_5px_18px_rgba(0,0,0,0.42)] sm:block sm:text-6xl lg:text-7xl">
            {siteContent.positioning.statement}
          </h1>
          <h1 className="mt-4 max-w-xs font-display text-[3.35rem] font-black leading-[0.86] tracking-[-0.05em] text-white drop-shadow-[0_5px_18px_rgba(0,0,0,0.42)] sm:hidden">
            {siteContent.positioning.mobileStatement}
          </h1>
          <p className="mt-3 max-w-sm text-lg font-black leading-6 text-white sm:hidden">
            {siteContent.positioning.mobileSubhead}
          </p>
          <p className="mt-4 hidden max-w-xl text-sm font-bold leading-6 text-white/92 sm:mt-5 sm:block sm:text-lg sm:leading-8">
            {siteContent.hero.supportingCopy}
          </p>
          <EarlyAccessForm />
          <div className="mt-3 flex flex-col gap-3 sm:hidden">
            <a href="#meet" className="inline-flex min-h-11 items-center justify-center rounded-2xl bg-white/88 px-6 py-3 font-display text-sm font-black uppercase tracking-[0.12em] text-cheeko-ink shadow-cheeko-card">
              See how it works
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
