import Image from 'next/image';
import { assets } from '@/data/assets';
import { siteContent } from '@/data/site-content';
import { Button } from '@/components/ui/Button';

const productImages = {
  pro: assets.product.pro,
  basic: assets.product.basic
} as const;

export function ProductOptions() {
  return (
    <section id="cards" className="relative overflow-hidden bg-[linear-gradient(180deg,#ffc400_0%,#ffe28a_48%,#fff7e8_100%)] px-4 pb-18 pt-10 sm:px-8 sm:pb-24 lg:px-10">
      <div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 lg:gap-10">
        {siteContent.products.map((product) => {
          const isSoldOut = product.status === 'Sold out';

          return (
            <article
              key={product.name}
              className={isSoldOut ? 'group relative rounded-[2rem] border-4 border-white/70 bg-cheeko-card/80 p-4 text-center shadow-cheeko-card transition duration-300 sm:p-6' : 'group relative rounded-[2rem] border-4 border-white/80 bg-cheeko-card/95 p-4 text-center shadow-cheeko-card transition duration-300 hover:-translate-y-1 hover:shadow-[0_26px_70px_rgba(70,41,12,0.22)] sm:p-6'}
            >
              {isSoldOut ? (
                <span className="absolute right-5 top-5 z-10 rounded-full bg-stone-700 px-4 py-2 font-display text-xs font-black uppercase tracking-[0.16em] text-white shadow-cheeko-card">
                  Sold out
                </span>
              ) : null}
              <div className={isSoldOut ? 'mx-auto flex h-80 items-end justify-center overflow-hidden rounded-[1.5rem] bg-[radial-gradient(circle_at_50%_30%,#fff7d1,transparent_52%),linear-gradient(180deg,#fffef6,#ffd85f)] p-2 opacity-70 grayscale sm:h-96' : 'mx-auto flex h-80 items-end justify-center overflow-hidden rounded-[1.5rem] bg-[radial-gradient(circle_at_50%_30%,#fff7d1,transparent_52%),linear-gradient(180deg,#fffef6,#ffd85f)] p-2 sm:h-96'}>
                <Image
                  src={productImages[product.imageKey]}
                  alt={`${product.name} yellow Cheeko device`}
                  width={760}
                  height={760}
                  sizes="(max-width: 768px) 92vw, 520px"
                  className="h-full w-auto scale-110 object-contain drop-shadow-[0_22px_22px_rgba(88,53,0,0.24)] transition duration-300 group-hover:scale-[1.16]"
                />
              </div>
              <p className="mx-auto mt-5 inline-flex rounded-full bg-cheeko-yellow px-4 py-1.5 font-display text-xs font-black uppercase tracking-[0.12em] text-cheeko-brown">
                {product.badge}
              </p>
              <h3 className="mt-3 font-display text-3xl font-black tracking-[-0.03em] text-cheeko-ink sm:text-4xl">{product.name}</h3>
              <p className="mt-1 font-display text-2xl font-black text-cheeko-brown">{product.price}</p>
              <p className="mx-auto mt-3 max-w-sm text-sm font-bold leading-6 text-cheeko-brown/85 sm:text-base">
                {product.description}
              </p>
              <Button
                type="button"
                variant={isSoldOut ? 'disabled' : 'primary'}
                className="mt-5 w-full max-w-xs uppercase tracking-[0.12em]"
                aria-label={isSoldOut ? `${product.name} sold out` : product.cta}
                disabled={isSoldOut}
              >
                {isSoldOut ? 'Sold out' : product.cta}
              </Button>
            </article>
          );
        })}
      </div>
    </section>
  );
}
