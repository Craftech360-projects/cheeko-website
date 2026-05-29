import Image from 'next/image';
import { siteContent } from '@/data/site-content';

export function ReviewsSection() {
  const cards = siteContent.reviews.testimonials.slice(0, 4);
  const tapeColors = ['#bf9ce7', '#eba1cb', '#efd172', '#cfe1a2'];

  return (
    <section id="reviews" className="overflow-hidden bg-[#FFD6E5] px-4 py-14 sm:px-8 sm:py-16 lg:px-10 lg:py-20">
      <div className="mx-auto max-w-[1680px]">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="font-display text-4xl font-black tracking-[-0.02em] text-black sm:text-5xl lg:text-[74px]">
            What Parents are Saying
          </h2>
          <p className="mt-4 text-lg leading-8 text-[#6f5a6a] sm:text-2xl lg:text-[30px]">
            Join thousands of happy families who chose Cheeko for their children.
          </p>
        </div>

        <div className="mx-auto mt-10 grid max-w-6xl grid-cols-1 gap-6 text-center sm:grid-cols-3 lg:mt-14">
          <div>
            <p className="font-display text-5xl font-black text-[#ff4b00] sm:text-6xl lg:text-[55px]">50+</p>
            <p className="mt-1 text-2xl text-black sm:text-3xl lg:text-[40px]">Happy Reviews</p>
          </div>
          <div>
            <p className="font-display text-5xl font-black text-[#ff4b00] sm:text-6xl lg:text-[55px]">4.5 ★</p>
            <p className="mt-1 text-2xl text-black sm:text-3xl lg:text-[40px]">Avg Ratings</p>
          </div>
          <div>
            <p className="font-display text-5xl font-black text-[#ff4b00] sm:text-6xl lg:text-[55px]">1 hr</p>
            <p className="mt-1 text-2xl text-black sm:text-3xl lg:text-[40px]">Screen time reduced</p>
          </div>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {cards.map((item, index) => (
            <article key={item.author} className="rounded-[2rem] bg-[#f9f4f6] p-4 shadow-[0_6px_0_rgba(0,0,0,0.08)] lg:p-5">
              <div className="relative overflow-hidden rounded-[1.35rem] border-[10px] border-white bg-[#e1d4d7]">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src="/assets/reviews/review-dummy-parent-child.jpg"
                    alt="Parent and child"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div
                  className="absolute left-1/2 top-0 h-6 w-24 -translate-x-1/2 rounded-b-md"
                  style={{ backgroundColor: tapeColors[index % tapeColors.length] }}
                />
              </div>

              <div className="mt-4 flex justify-center gap-2" aria-label="5 star review">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Image key={i} src="/assets/reviews/star-orange.png" alt="" width={18} height={18} className="h-[18px] w-[18px]" />
                ))}
              </div>

              <p className="mt-3 text-[20px] leading-[1.45] text-[#2f2328] lg:text-[30px]">
                “{item.quote.replace(/^"|"$/g, '')}”
              </p>

              <div className="mt-4 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#ead7c4] text-sm font-semibold text-[#6a4b36] lg:h-14 lg:w-14 lg:text-base">
                  {item.author.split(' ')[0].charAt(0)}
                </div>
                <div>
                  <p className="text-xl font-semibold text-[#1d1719] lg:text-[30px]">{item.author}</p>
                  <p className="text-base text-[#5e5559] lg:text-[24px]">{item.role}</p>
                </div>
              </div>

              <div className="mt-2 text-right text-[38px] leading-none text-[#8d62dd]">{index % 2 === 0 ? '☆' : '✿'}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
