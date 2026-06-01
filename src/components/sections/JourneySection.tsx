import { siteContent } from '@/data/site-content';

export function JourneySection() {
  const steps = siteContent.journey.steps;

  return (
    <section id="journey" className="bg-[#f3609c] px-4 py-12 sm:px-8 sm:py-14 lg:px-10 lg:py-16">
      <div className="mx-auto max-w-[1800px]">
        <div className="text-center">
          <h2 className="font-display text-4xl font-black text-black sm:text-5xl lg:text-[72px]">{siteContent.journey.title}</h2>
          <p className="mt-3 text-xl text-[#6b3450] sm:text-2xl lg:text-[52px]">From our ide to your hand.</p>
        </div>

        <div className="relative mt-10 hidden md:block lg:mt-14">
          <div className="absolute left-[5%] right-[5%] top-[70px] h-[5px] rounded-full bg-[#f4148f]" />
          <div className="absolute right-[2.5%] top-[75px] -translate-y-1/2 text-[64px] font-black leading-none text-[#f4148f]">→</div>

          <div className="grid grid-cols-5">
            {steps.map((step, index) => (
              <article key={step.title} className="text-center">
                <p className={`mb-2 text-[26px] leading-none text-[#6d58a6] ${index === 0 || index === steps.length - 1 ? 'opacity-100' : 'opacity-0'}`}>
                  {index === 0 ? 'Feb 2025' : index === steps.length - 1 ? 'June 2026' : 'date'}
                </p>
                <div className="relative mx-auto h-[76px] w-[76px]">
                  <span className="absolute inset-0 text-center text-[74px] leading-[76px] text-white">★</span>
                  <span className="absolute inset-0 text-center text-[58px] leading-[76px] text-[#ffcb1d]">★</span>
                </div>
                <div className="mx-auto mt-1 h-10 border-l-[4px] border-dotted border-[#ea7cae]" />
                <h3 className="font-display text-[22px] font-black text-[#2b1216] lg:text-[28px]">{step.title}</h3>
                <p className="mx-auto mt-2 max-w-[92%] text-[14px] leading-[1.4] text-[#2f1a1f] lg:text-[18px]">{step.description}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="relative mt-8 md:hidden">
          <div className="absolute bottom-5 left-3 top-4 border-l-[3px] border-[#f4148f]" />
          <div className="space-y-5">
            {steps.map((step, index) => (
              <article key={step.title} className="relative pl-12 pr-2">
                <span className="absolute left-0 top-1 text-[24px] leading-none text-[#ffcb1d]">★</span>
                {(index === 0 || index === steps.length - 1) && (
                  <p className="mb-1 text-xs text-[#6d58a6]">{index === 0 ? 'Feb 2025' : 'June 2026'}</p>
                )}
                <h3 className="font-display text-[26px] font-black leading-tight text-[#2b1216]">{step.title}</h3>
                <p className="mt-1 text-[15px] leading-[1.45] text-[#2f1a1f]">{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
