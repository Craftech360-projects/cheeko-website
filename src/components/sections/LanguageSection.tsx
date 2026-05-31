import Image from 'next/image';
import { Volume2 } from 'lucide-react';
import { assets } from '@/data/assets';
import { siteContent } from '@/data/site-content';

export function LanguageSection() {
  return (
    <section className="relative min-h-screen min-h-[100svh] overflow-hidden bg-[linear-gradient(90deg,#FFF8D5_0%,#FFD6E5_100%)] px-4 pb-14 pt-14 sm:px-8 sm:pb-16 sm:pt-16 lg:px-10 lg:pb-14 lg:pt-12">
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <svg viewBox="0 0 1200 700" preserveAspectRatio="none" className="h-full w-full">
          <path d="M 205 700 C 510 560, 915 455, 1190 -28" fill="none" stroke="#b8adac" strokeWidth="5" strokeOpacity="0.5" />
          <path d="M 245 700 C 550 560, 955 458, 1190 8" fill="none" stroke="#b8adac" strokeWidth="5" strokeOpacity="0.5" />
          <path d="M 285 700 C 590 563, 995 462, 1190 44" fill="none" stroke="#b8adac" strokeWidth="5" strokeOpacity="0.5" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-[1720px]">
        <div className="mx-auto max-w-[980px] text-center">
          <h2 className="font-display text-[2.1rem] font-black leading-[1.04] text-black sm:text-[2.4rem] lg:text-[3.4rem]">
            {siteContent.language.title}
          </h2>
          <p className="mx-auto mt-5 max-w-[930px] text-base font-medium leading-[1.26] text-black/58 sm:text-lg lg:text-[2rem] lg:leading-[1.14]">
            {siteContent.language.description}
          </p>
        </div>

        <div className="relative mt-8 grid items-start gap-6 lg:grid-cols-[0.7fr_1.3fr] lg:gap-6">
          <div className="relative mx-auto w-full max-w-[360px] lg:max-w-[520px]">
            <Image
              src={assets.product.languageDevice}
              alt="Front of the Cheeko device showing the fox assistant"
              width={1080}
              height={1520}
              sizes="(max-width: 1024px) 70vw, 620px"
              className="relative z-10 h-auto w-full translate-y-2 scale-[1.01] object-contain sm:translate-y-4 lg:translate-x-[-1.8rem] lg:translate-y-16 lg:scale-[1.1]"
            />
          </div>

          <div className="lg:pt-16">
            <div className="relative mx-auto w-full max-w-[720px] overflow-hidden rounded-[1.6rem] shadow-[0_10px_16px_rgba(0,0,0,0.24)]">
              <Image
                src={assets.product.languagePanelBg}
                alt=""
                aria-hidden="true"
                fill
                sizes="(max-width: 1024px) 92vw, 900px"
                className="object-cover"
              />
              <div className="relative z-10 p-5 sm:p-6 lg:px-9 lg:py-8">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#fde8d2] text-cheeko-orange">
                    <Volume2 className="h-6 w-6" />
                  </span>
                  <p className="text-lg font-medium text-[#5f5f5f] sm:text-xl lg:text-[1.8rem]">
                    Speaking: <span className="font-semibold text-cheeko-orange">Kannada (ಕನ್ನಡ)</span>
                  </p>
                </div>

                <div className="mt-6 grid grid-cols-[auto_1fr] items-center gap-4 sm:gap-6 lg:mt-7 lg:gap-6">
                  <button
                    type="button"
                    className="inline-flex h-[7.25rem] w-[6rem] flex-col items-center justify-center rounded-[1.1rem] bg-[#ff7a0c] text-white shadow-[0_10px_14px_rgba(255,122,12,0.35)] lg:h-[9.5rem] lg:w-[7.5rem] lg:rounded-[1.35rem]"
                    aria-label="Tap to listen"
                  >
                    <Volume2 className="h-7 w-7 lg:h-8 lg:w-8" />
                    <span className="mt-2 text-[1rem] font-medium leading-[1.02] lg:text-[1.35rem]">Tap to</span>
                    <span className="mt-1 text-[1rem] font-medium leading-[1.02] lg:text-[1.35rem]">Listen</span>
                  </button>

                  <div className="min-w-0">
                    <p className="text-[1.6rem] font-medium leading-[1.12] text-[#1f1f1f] sm:text-[1.9rem] lg:text-[2.5rem]">
                      {siteContent.language.prompt}
                    </p>
                    <div className="mt-3 h-2 w-24 rounded-full bg-[#f57ea5] lg:mt-4 lg:h-[0.34rem] lg:w-24" />
                    <p className="mt-3 text-[1.08rem] font-medium text-[#4f4f4f] sm:text-[1.2rem] lg:mt-4 lg:text-[1.65rem]">
                      Namaskara! Ninna hesaru enu?
                    </p>
                    <p className="mt-2 text-[1rem] font-medium text-[#767676] sm:text-[1.15rem] lg:mt-3 lg:text-[1.5rem]">
                      Hello! What is your name?
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5 lg:gap-3">
              {Array.from({ length: 10 }).map((_, index) => (
                <div
                  key={`lang-chip-${index}`}
                  className="relative overflow-hidden rounded-[1.1rem]"
                >
                  <Image
                    src={assets.product.languageChipBg}
                    alt=""
                    aria-hidden="true"
                    width={340}
                    height={196}
                    sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 180px"
                    className="h-auto w-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
