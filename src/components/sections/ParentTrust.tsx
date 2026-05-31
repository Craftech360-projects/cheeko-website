import Image from 'next/image';

export function ParentTrust() {
  return (
    <section className="min-h-screen h-[100dvh] overflow-hidden bg-[linear-gradient(180deg,_#FFDDE2_0%,_#FFB4CE_100%)] px-2 py-4 sm:px-4 sm:py-5 lg:px-6 lg:py-6">
      <div className="mx-auto h-full max-w-[1520px]">
        <div className="h-full">
          <div className="grid h-full min-h-0 gap-3 lg:min-h-[10rem] lg:grid-cols-[2fr_1fr] lg:gap-4">
            <div className="grid h-full min-h-0 gap-3 lg:grid-rows-[62fr_38fr] lg:gap-4">
              <div className="grid h-full min-h-0 gap-3 sm:grid-cols-2 lg:grid-cols-[2fr_1fr] lg:gap-4">
                <article className="relative flex h-full min-h-0 overflow-hidden rounded-[2.5rem] bg-[#FADCD9] p-4 sm:p-5 lg:p-6">
                  <div className="relative z-10 max-w-[58%]">
                    <h3 className="font-display text-[2rem] font-black leading-[1.05] text-black sm:text-[2.25rem] lg:text-[3.3rem]">
                      Your child&apos;s
                      <br />
                      new best
                      <br />
                      Companion
                    </h3>
                    <p className="mt-4 text-[0.95rem] font-medium leading-[1.3] text-black/55 sm:text-[1.05rem] lg:text-[1.55rem]">
                      Talks, listens, plays and
                      <br />
                      grows with your child -
                      <br />
                      every single day.
                    </p>
                    <Image
                      src="/assets/parent-trust/store-badges.png"
                      alt="App Store and Google Play badges"
                      width={420}
                      height={214}
                      sizes="(max-width: 640px) 46vw, 230px"
                      className="mt-5 h-auto w-[9.7rem] sm:w-[11rem] lg:mt-7 lg:w-[15rem]"
                    />
                  </div>

                  <Image
                    src="/assets/parent-trust/cheeko-fox-new.png"
                    alt="Cheeko companion app preview"
                    width={1100}
                    height={1260}
                    sizes="(max-width: 640px) 44vw, (max-width: 1024px) 36vw, 360px"
                    className="absolute bottom-0 right-0 h-[82%] w-auto max-w-[49%] object-contain sm:h-[84%] lg:h-[88%]"
                  />
                </article>

                <article className="relative flex h-full min-h-0 flex-col overflow-hidden rounded-[2.5rem] bg-[#CDBAAB]">
                  <h3 className="absolute inset-x-0 top-5 z-10 px-3 text-center font-display text-[1.65rem] font-black leading-tight text-black sm:text-[1.9rem] lg:top-6 lg:text-[2.2rem]">
                    Make it truly theirs
                  </h3>
                  <Image
                    src="/assets/parent-trust/image 37.png"
                    alt="parent control card"
                    width={900}
                    height={1130}
                    sizes="(max-width: 640px) 92vw, (max-width: 1024px) 45vw, 360px"
                    className="absolute inset-x-0 bottom-0 mx-auto h-[92%] w-[90%] object-contain object-bottom sm:h-[95%] sm:w-[89%] lg:h-[98%] lg:w-[87%]"
                  />
                </article>
              </div>

              <div className="grid h-full min-h-0 gap-3 sm:grid-cols-2 lg:gap-4">
                <article className="flex h-full min-h-0 overflow-hidden rounded-[2.5rem] bg-[#FADCD9] p-3 sm:p-4 lg:p-5">
                  <div className="flex w-full items-end gap-4 lg:gap-5">
                    <div className="min-w-0 max-w-[46%]">
                      <h3 className="font-display text-[1.65rem] font-black leading-[1.08] text-black sm:text-[1.9rem] lg:text-[2.4rem]">
                        Your child&apos;s
                        <br />
                        new best
                        <br />
                        Companion
                      </h3>
                      <p className="mt-4 text-[0.95rem] font-medium leading-[1.2] text-black/60 sm:text-[1.05rem] lg:text-[1.55rem]">
                        Talks, listens,
                        <br />
                        plays and
                        <br />
                        grows with
                        <br />
                        your child -
                        <br />
                        every single
                        <br />
                        day.
                      </p>
                    </div>

                    <Image
                      src="/assets/parent-trust/hello-screen.png"
                      alt="Hello from Cheeko screen preview"
                      width={760}
                      height={1200}
                      sizes="(max-width: 640px) 44vw, (max-width: 1024px) 30vw, 320px"
                      className="h-auto w-[54%] object-contain"
                    />
                  </div>
                </article>

                <article className="flex h-full min-h-0 overflow-hidden rounded-[2.5rem] bg-[#F8AFA6] p-3 sm:p-4 lg:p-5">
                  <div className="flex w-full items-end gap-4 lg:gap-5">
                    <div className="min-w-0 max-w-[46%]">
                      <h3 className="font-display text-[1.65rem] font-black leading-[1.08] text-black sm:text-[1.9rem] lg:text-[2.4rem]">
                        Secure.
                        <br />
                        Safe &amp;
                        <br />
                        Parent
                        <br />
                        Approved
                      </h3>
                      <p className="mt-4 text-[0.95rem] font-medium leading-[1.2] text-black/60 sm:text-[1.05rem] lg:text-[1.55rem]">
                        Verification
                        <br />
                        keeps
                        <br />
                        Cheeko a
                        <br />
                        safe space
                        <br />
                        for your child.
                      </p>
                    </div>

                    <Image
                      src="/assets/parent-trust/verification-screen.png"
                      alt="Secure verification screen preview"
                      width={760}
                      height={1200}
                      sizes="(max-width: 640px) 44vw, (max-width: 1024px) 30vw, 320px"
                      className="h-auto w-[54%] object-contain"
                    />
                  </div>
                </article>
              </div>
            </div>

            <div className="grid h-full min-h-0 gap-3 lg:grid-rows-[4fr_1fr] lg:gap-4">
              <article className="flex h-full min-h-0 flex-col overflow-hidden rounded-[2.5rem] bg-[#FADCD9] p-3 sm:p-4 lg:p-5">
                <h3 className="font-display text-[2rem] font-black leading-[1.07] text-black sm:text-[2.2rem] lg:text-[2.5rem]">
                  Your child&apos;s new best
                  <br />
                  Companion
                </h3>
                <p className="mt-4 max-w-[19ch] text-[0.95rem] font-medium leading-[1.2] text-black/60 sm:text-[1.05rem] lg:text-[1.8rem]">
                  Kids can pick up their
                  <br />
                  own adventure and
                  <br />
                  explore their interests
                </p>

                <div className="mt-5 flex flex-1 items-end justify-end lg:mt-7">
                  <Image
                    src="/assets/parent-trust/good-afternoon-card.png"
                    alt="Cheeko companion app preview"
                    width={960}
                    height={1370}
                    sizes="(max-width: 640px) 86vw, (max-width: 1024px) 45vw, 430px"
                    className="h-auto w-full max-w-[16rem] object-contain sm:max-w-[18.5rem] lg:max-w-[20rem]"
                  />
                </div>
              </article>

              <article className="flex h-full min-h-0 flex-col justify-center rounded-[2.5rem] bg-[#FADCD9] p-4 sm:p-5 lg:p-6">
                <div className="flex items-center gap-4 lg:gap-5">
                  <Image
                    src="/assets/parent-trust/offline-icon.png"
                    alt="Offline play icon"
                    width={140}
                    height={140}
                    sizes="(max-width: 640px) 56px, 72px"
                    className="h-14 w-14 object-contain sm:h-[4.2rem] sm:w-[4.2rem]"
                  />
                  <div className="min-w-0">
                    <h3 className="font-display text-[2rem] font-black leading-[1.02] text-black sm:text-[2.2rem] lg:text-[2rem]">
                      Play Anytime,
                      <br />
                      Anywhere
                    </h3>
                    <p className="mt-3 text-[0.95rem] font-medium leading-[1.25] text-black/60 sm:text-[1.05rem] lg:text-[1.75rem]">
                      No internet? No problem!
                      <br />
                      Cheeko works offline too.
                    </p>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
