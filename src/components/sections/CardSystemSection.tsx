import Image from 'next/image';

export function CardSystemSection() {
  return (
    <section className="min-h-screen min-h-[100svh] bg-[linear-gradient(180deg,_#FFB5CE_0%,_#FFD6E5_100%)] px-4 pb-2 pt-4 sm:px-8 sm:pb-3 lg:px-10 lg:pb-4 min-[1920px]:h-[1080px]">
      <div className="mx-auto flex h-full w-full max-w-[1620px] flex-col px-5 pb-2 pt-10 sm:px-8 lg:px-10 lg:pb-3 lg:pt-12">
        <div className="mx-auto max-w-[860px] text-center">
          <h2 className="font-display text-[2.1rem] font-black leading-[1.02] text-black sm:text-[2.6rem] lg:text-[3.2rem]">
            The Cheeko Card System
            <br />
            Learn. Play. Grow
          </h2>
          <p className="mx-auto mt-4 max-w-[650px] text-base font-medium leading-[1.25] text-black/58 sm:text-lg lg:text-[1.65rem] lg:leading-[1.12]">
            Tap a card, start an adventure.
            <br />
            Each card unlocks knowledge, challenge and fun.
          </p>
        </div>

        <div className="mx-auto mt-8 max-w-[980px] lg:mt-12 min-[1920px]:mt-10 min-[1920px]:flex min-[1920px]:flex-1 min-[1920px]:items-center">
          <Image
            src="/assets/parent-trust/card-system-fan.png"
            alt="Cheeko card system fan of cards"
            width={2048}
            height={1530}
            sizes="(max-width: 1024px) 92vw, 980px"
            className="h-auto w-full object-contain min-[1920px]:max-h-[620px]"
          />
        </div>

        <div className="mt-5 flex justify-end lg:mt-6 min-[1920px]:mt-auto">
          <button
            type="button"
            className="rounded-[1rem] bg-[#f45c67] px-5 py-2 text-sm font-medium text-white shadow-[0_8px_14px_rgba(0,0,0,0.18)] lg:rounded-[1.2rem] lg:px-8 lg:py-3 lg:text-[2rem]"
          >
            More details
          </button>
        </div>
      </div>
    </section>
  );
}
