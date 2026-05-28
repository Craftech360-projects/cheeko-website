import Image from 'next/image';

export function ParentTrust() {
  return (
    <section className="bg-[#f5bfd0] px-4 py-6 sm:px-8 lg:px-10 lg:py-8">
      <div className="sr-only">
        <h2>Your child&apos;s new best companion</h2>
        <h3>Parent Control</h3>
        <h3>Play Anytime, Anywhere</h3>
        <Image src="/assets/app/child-best-companion-card.png" alt="Cheeko companion app preview" width={200} height={120} />
        <Image src="/assets/app/parent-control-card.png" alt="parent control card" width={200} height={120} />
        <Image src="/assets/app/safe-parent-approved-card.png" alt="safe parent approved card" width={200} height={120} />
        <Image src="/assets/app/play-anytime-card.png" alt="play anytime card" width={200} height={120} />
      </div>
      <div className="mx-auto w-full max-w-[1600px]">
        <div className="grid items-start gap-2 lg:grid-cols-[1.15fr_0.85fr_1fr]">
          <article className="relative overflow-hidden rounded-[2rem] bg-[#efcfd0] p-7 lg:h-[430px] lg:px-9 lg:pb-5 lg:pt-8">
            <div className="relative z-10 max-w-[220px] sm:max-w-[260px] lg:max-w-[248px]">
              <h3 className="text-[3rem] font-black leading-[1.02] tracking-[-0.01em] text-black lg:text-[2.95rem]">
                Your child&apos;s new best Companion
              </h3>
              <p className="mt-3 text-[0.92rem] leading-[1.1] text-black/55 lg:max-w-[228px] lg:text-[0.72rem] lg:leading-[1.18]">
                Talks, listens, plays and grows with your child - every single day.
              </p>
              <Image
                src="/assets/parent-trust/store-badges.png"
                alt="Available on the App Store and Google Play"
                width={344}
                height={224}
                className="mt-4 h-auto w-[190px] sm:w-[205px] lg:mt-4 lg:w-[165px]"
              />
            </div>
            <Image
              src="/assets/parent-trust/cheeko-fox-new.png"
              alt="Cheeko fox"
              width={612}
              height={960}
              className="pointer-events-none absolute bottom-0 right-4 h-auto w-[175px] sm:w-[195px] lg:right-5 lg:w-[206px]"
            />
          </article>

          <article className="self-start rounded-[2rem] bg-[#c8b8a9] p-4 lg:h-[430px] lg:px-0 lg:pt-5 lg:pb-0">
            <h3 className="text-center text-[0.95rem] font-black leading-none text-black lg:text-[0.8rem]">Make it truly theirs</h3>
            <Image
              src="/assets/parent-trust/customize-screen.png"
              alt="Customize your toy screen"
              width={460}
              height={812}
              className="mx-auto mt-2 h-auto w-full max-w-[230px] lg:mt-3 lg:max-w-[218px]"
            />
          </article>

          <article className="overflow-hidden rounded-[2rem] bg-[#efcfd0] p-6 lg:h-[560px] lg:-mt-8 lg:p-9">
            <h3 className="max-w-[290px] text-[2.05rem] font-black leading-[1.02] tracking-[-0.01em] text-black">
              Your child&apos;s new best Companion
            </h3>
            <p className="mt-3 max-w-[300px] text-[0.72rem] leading-[1.18] text-black/55">
              Kids can pick up their own adventure and explore their interests
            </p>
            <Image
              src="/assets/parent-trust/good-afternoon-card.png"
              alt="Good afternoon adventure card"
              width={540}
              height={986}
              className="mt-5 h-auto w-full rounded-[1.9rem] object-contain"
            />
          </article>
        </div>

        <div className="mt-1 grid gap-2 lg:-mt-40 lg:grid-cols-[1.15fr_0.85fr_1fr]">
          <article className="relative overflow-hidden rounded-[2rem] bg-[#efcfd0] p-6 lg:aspect-square lg:p-5">
            <h3 className="max-w-[260px] text-[1.08rem] font-black leading-[1.05] tracking-[-0.01em] text-black lg:max-w-[170px] lg:text-[0.95rem]">Your child&apos;s new best Companion</h3>
            <p className="mt-3 max-w-[200px] text-[0.88rem] leading-[1.1] text-black/55 lg:max-w-[140px] lg:text-[0.72rem] lg:leading-[1.2]">
              Talks, listens, plays and grows with your child - every single day.
            </p>
            <Image
              src="/assets/parent-trust/hello-screen.png"
              alt="Hello from Cheeko app"
              width={114}
              height={157}
              className="absolute bottom-0 right-8 h-auto w-[136px] lg:right-4 lg:w-[124px]"
            />
          </article>

          <article className="relative overflow-hidden rounded-[2rem] bg-[#e8a6a0] p-4 lg:aspect-square lg:p-5">
            <h3 className="text-[1.08rem] font-black leading-[1.06] tracking-[-0.01em] text-black lg:max-w-[160px] lg:text-[0.95rem]">Secure. Safe &amp; Parent Approved</h3>
            <p className="mt-3 max-w-[120px] text-[0.84rem] leading-[1.08] text-black/56 lg:max-w-[110px] lg:text-[0.72rem] lg:leading-[1.2]">
              Verification keeps Cheeko a safe space for your child.
            </p>
            <Image
              src="/assets/parent-trust/verification-screen.png"
              alt="Verification screen"
              width={388}
              height={608}
              className="absolute bottom-0 right-4 h-auto w-[165px] lg:right-3 lg:w-[122px]"
            />
          </article>

          <article className="overflow-hidden rounded-[2rem] lg:h-[122px] lg:mt-60">
            <Image
              src="/assets/parent-trust/socials-card.png"
              alt="Play anytime anywhere card"
              width={820}
              height={316}
              className="h-full w-full object-cover"
            />
          </article>
        </div>
      </div>
    </section>
  );
}
