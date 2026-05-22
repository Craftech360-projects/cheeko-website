import { siteContent } from '@/data/site-content';

export function ReviewsSection() {
  return (
    <section id="reviews" className="relative overflow-hidden bg-cheeko-pink/45 px-4 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
      <div className="absolute left-[-8rem] top-12 h-80 w-80 rounded-full bg-white/45 blur-3xl" />
      <div className="absolute right-[-8rem] bottom-10 h-80 w-80 rounded-full bg-cheeko-yellow/45 blur-3xl" />
      <div className="relative mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-display text-sm font-black uppercase tracking-[0.18em] text-cheeko-orange">
            {siteContent.reviews.eyebrow}
          </p>
          <h2 className="mt-3 font-display text-4xl font-black leading-[0.92] tracking-[-0.04em] text-cheeko-ink sm:text-5xl lg:text-6xl">
            {siteContent.reviews.title}
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base font-bold leading-7 text-cheeko-brown sm:text-lg">
            {siteContent.reviews.description}
          </p>
        </div>

        <div className="mx-auto mt-8 grid max-w-3xl grid-cols-3 gap-3 rounded-[2rem] border-4 border-white bg-white/70 p-4 text-center shadow-cheeko-card sm:mt-10 sm:p-6">
          {siteContent.reviews.stats.map((stat) => (
            <div key={stat.label}>
              <p className="font-display text-3xl font-black text-cheeko-orange sm:text-4xl">{stat.value}</p>
              <p className="mt-1 text-xs font-black uppercase tracking-[0.12em] text-cheeko-brown sm:text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {siteContent.reviews.testimonials.map((testimonial, index) => (
            <article
              key={testimonial.author}
              className="rounded-[1.8rem] border-4 border-white bg-white/82 p-5 shadow-cheeko-card transition duration-300 hover:-translate-y-1 md:odd:rotate-[-1deg] md:even:rotate-[1deg]"
            >
              <div className="flex gap-1 text-cheeko-orange" aria-label={`${index === 1 ? '4' : '5'} star review`}>
                {Array.from({ length: index === 1 ? 4 : 5 }).map((_, starIndex) => (
                  <span key={starIndex} aria-hidden="true" className="font-display text-xl font-black">
                    *
                  </span>
                ))}
              </div>
              <p className="mt-4 text-sm font-bold leading-6 text-cheeko-brown">{testimonial.quote}</p>
              <div className="mt-5 border-t border-cheeko-line pt-4">
                <p className="font-display text-lg font-black text-cheeko-ink">{testimonial.author}</p>
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-cheeko-brown/75">{testimonial.role}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
