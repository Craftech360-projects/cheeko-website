import Image from 'next/image';

export function OriginalsSection() {
  return (
    <section
      id="originals"
      className="relative overflow-hidden bg-[linear-gradient(90deg,#ffc31b_0%,#ffb048_36%,#ff8c63_63%,#ff7d8c_100%)] px-0 py-0"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-[6%] top-[8%] hidden text-[3.4rem] font-serif font-semibold tracking-wide text-white/22 sm:block sm:text-[6.2rem] lg:right-[4%] lg:top-[2%] lg:text-[15rem]">
          POD
        </div>
        <div className="absolute right-[4%] top-[44%] hidden text-[3.4rem] font-serif font-semibold tracking-wide text-white/22 sm:block sm:text-[6.2rem] lg:right-[2%] lg:top-[37%] lg:text-[15rem]">
          CAST
        </div>
      </div>

      <div className="relative mx-auto w-full max-w-[2048px]">
        <div className="grid min-h-[360px] grid-cols-1 sm:grid-cols-2 lg:min-h-[484px] lg:grid-cols-[0.42fr_0.25fr_0.33fr]">
          <div className="relative min-h-[200px] overflow-hidden sm:min-h-[260px] lg:min-h-0">
            <Image
              src="/assets/originals/podcast-artwork.png"
              alt="Cheeko Originals illustrated artwork"
              width={896}
              height={764}
              className="h-full w-full object-cover object-left"
            />
          </div>

          <div className="relative flex min-h-[220px] items-end justify-center overflow-hidden px-2 pt-4 sm:min-h-[260px] sm:px-4 sm:pt-6 lg:min-h-0 lg:px-0 lg:pt-0">
            <Image
              src="/assets/originals/device-cutout.png"
              alt="Cheeko device"
              width={612}
              height={960}
              className="h-auto w-[170px] sm:w-[220px] lg:w-[330px] lg:-translate-x-20"
            />
          </div>

          <div className="relative col-span-1 flex flex-col justify-between px-4 pb-4 pt-4 sm:col-span-2 sm:px-6 lg:col-span-1 lg:px-8 lg:pb-6 lg:pt-6 lg:translate-x-8">
            <div className="flex items-center justify-center gap-2 sm:justify-end lg:gap-3 lg:pr-4 lg:-mt-9">
              <Image
                src="/assets/originals/cheeko-originals-logo.png"
                alt="Cheeko logo"
                width={282}
                height={78}
                className="h-auto w-[120px] sm:w-[150px] lg:w-[190px]"
              />
              <span className="text-[20px] font-medium leading-none text-black sm:text-[28px] lg:text-[52px]">Originals</span>
            </div>

            <div className="mt-15 flex items-center justify-center gap-3 sm:mt-120 sm:justify-end lg:pr-4">
              <span className="rounded-[0.9rem] bg-[#ff6700] px-4 py-2 text-sm font-medium text-black lg:rounded-[1.1rem] lg:px-6 lg:py-3 lg:text-[1.9rem]">
                Coming soon
              </span>
              <Image
                src="/assets/originals/instagram-icon.png"
                alt="Instagram icon"
                width={66}
                height={66}
                className="h-8 w-8 lg:h-12 lg:w-12"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
