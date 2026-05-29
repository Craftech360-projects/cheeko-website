import Image from 'next/image';

export function OriginalsSection() {
  return (
    <section id="originals" className="relative overflow-hidden px-0 py-0">
      <div className="hidden lg:block">
        <Image
          src="/assets/originals/originals-banner-clean.png"
          alt="Cheeko Originals banner artwork"
          width={2048}
          height={895}
          sizes="100vw"
          className="h-auto w-full object-cover"
        />
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute right-[6%] top-[14%] hidden font-serif text-[3.4rem] font-semibold leading-none tracking-wide text-white/20 sm:block sm:text-[6.2rem] lg:right-[4%] lg:top-[10%] lg:text-[15rem]">
            POD
          </div>
          <div className="absolute right-[4%] top-[50%] hidden font-serif text-[3.4rem] font-semibold leading-none tracking-wide text-white/20 sm:block sm:text-[6.2rem] lg:right-[2%] lg:top-[43%] lg:text-[15rem]">
            CAST
          </div>
          <Image
            src="/assets/originals/device-cutout.png"
            alt="Cheeko device"
            width={612}
            height={960}
            sizes="(max-width: 640px) 150px, (max-width: 1024px) 210px, 330px"
            className="absolute bottom-0 left-1/2 h-auto w-[165px] -translate-x-1/2 sm:w-[220px] lg:left-[52%] lg:w-[330px]"
          />
          <div className="absolute bottom-[3%] right-[3%] flex items-center gap-3 lg:bottom-[4%] lg:right-[2.5%]">
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

      <div className="relative lg:hidden">
        <Image
          src="/assets/originals/originals-artwork-ezremove.png"
          alt="Cheeko Originals illustrated artwork"
          width={736}
          height={1421}
          sizes="100vw"
          className="h-auto w-full object-cover"
        />
        <div className="pointer-events-none absolute left-3 right-3 top-3 flex items-center justify-end gap-2 sm:left-4 sm:right-4 sm:top-4 sm:gap-3">
          <Image
            src="/assets/originals/cheeko-originals-logo.png"
            alt="Cheeko logo"
            width={282}
            height={78}
            className="h-auto w-[110px] sm:w-[130px]"
          />
          <span className="text-[18px] font-medium leading-none text-black sm:text-[22px]">Originals</span>
        </div>
        <Image
          src="/assets/originals/device-cutout.png"
          alt="Cheeko device"
          width={612}
          height={960}
          sizes="(max-width: 640px) 150px, 190px"
          className="pointer-events-none absolute bottom-0 left-1/2 h-auto w-[250px] -translate-x-1/2 sm:w-[185px]"
        />
        <div className="pointer-events-none absolute bottom-4 right-4 flex items-center gap-2 sm:bottom-6 sm:right-6 sm:gap-3">
          <span className="rounded-[0.8rem] bg-[#ff6700] px-3 py-1.5 text-xs font-medium text-black sm:px-4 sm:py-2 sm:text-sm">
            Coming soon
          </span>
          <Image
            src="/assets/originals/instagram-icon.png"
            alt="Instagram icon"
            width={48}
            height={48}
            className="h-7 w-7 sm:h-8 sm:w-8"
          />
        </div>
      </div>
    </section>
  );
}
