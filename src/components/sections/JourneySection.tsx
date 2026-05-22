import { siteContent } from '@/data/site-content';

export function JourneySection() {
  return (
    <section id="journey" className="relative overflow-hidden bg-cheeko-pink px-4 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
      <div className="absolute inset-x-0 top-1/2 hidden h-1 -translate-y-1/2 bg-cheeko-orange/50 md:block" />
      <div className="relative mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-display text-sm font-black uppercase tracking-[0.18em] text-cheeko-orange">
            {siteContent.journey.eyebrow}
          </p>
          <h2 className="mt-3 font-display text-4xl font-black leading-[0.92] tracking-[-0.04em] text-cheeko-ink sm:text-5xl lg:text-6xl">
            {siteContent.journey.title}
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base font-bold leading-7 text-cheeko-brown sm:text-lg">
            {siteContent.journey.description}
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-5">
          {siteContent.journey.steps.map((step, index) => (
            <article
              key={step.title}
              className="relative rounded-[1.6rem] border-4 border-white bg-cheeko-card/88 p-5 text-center shadow-cheeko-card md:odd:-translate-y-4 md:even:translate-y-6"
            >
              <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border-4 border-white bg-cheeko-yellow font-display text-xl font-black text-cheeko-ink shadow-[0_5px_0_rgba(36,22,15,0.2)]">
                {index + 1}
              </span>
              <h3 className="mt-4 font-display text-xl font-black tracking-[-0.02em] text-cheeko-ink">{step.title}</h3>
              <p className="mt-2 text-sm font-bold leading-6 text-cheeko-brown">{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
