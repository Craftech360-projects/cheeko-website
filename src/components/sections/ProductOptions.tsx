import Image from 'next/image';
import { assets } from '@/data/assets';
import { siteContent } from '@/data/site-content';
import { Button } from '@/components/ui/Button';

const productImages = {
  pro: assets.product.pro,
  basic: assets.product.basic,
  proCard: assets.product.proCard,
  basicCard: assets.product.basicCard
} as const;

export function ProductOptions() {
  return (
    <section
      id="cards"
      className="relative min-h-screen min-h-[100svh] overflow-hidden bg-[linear-gradient(180deg,#FFC906_0%,#FFD743_50%,#FFE991_100%)] px-5 pb-9 pt-10 sm:px-8 sm:pb-12 sm:pt-11 lg:px-10"
    >
      <div className="mx-auto max-w-[1240px]">
        <div className="text-center">
          <h2 className="font-display text-[2.55rem] font-black leading-none text-black sm:text-[2.75rem]">
            Choose your Cheeko
          </h2>
          <p className="mt-5 text-lg font-medium leading-none text-black/55 sm:text-[1.35rem]">
            Two magical ways to spark curiosity and joy.
          </p>
        </div>

        <div className="mx-auto mt-10 grid max-w-[1180px] gap-12 sm:grid-cols-2 sm:justify-between sm:gap-20 lg:gap-48">
          {siteContent.products.map((product, index) => (
            <article key={product.name} className="flex flex-col items-center text-center sm:text-left">
              <div className="relative aspect-[0.925] w-full max-w-[470px]">
                <Image
                  src={productImages[product.imageKey]}
                  alt={`${product.name} product photo`}
                  width={900}
                  height={970}
                  sizes="(max-width: 640px) 88vw, 470px"
                  className={`h-full w-full object-contain drop-shadow-[0_18px_11px_rgba(88,65,0,0.23)] ${
                    index === 0 ? '-rotate-[5deg]' : 'rotate-[4deg]'
                  }`}
                />
              </div>

              <div className={`mt-5 flex min-h-[224px] w-full max-w-[330px] flex-col ${index === 0 ? 'sm:translate-x-14 lg:translate-x-24' : ''}`}>
                <h3 className="font-display text-[2rem] font-black leading-none text-black sm:text-[2.1rem]">
                  {product.name}
                </h3>
                <p className="mt-2 font-display text-[1.85rem] font-medium leading-none text-black">{product.price}</p>
                <p className="mt-2 max-w-[310px] text-[1.2rem] font-regular leading-[1.45] text-black/55">
                  {product.description}
                </p>
                <Button
                  type="button"
                  variant="primary"
                  className="mx-auto mt-auto min-h-0 h-12 w-[224px] rounded-xl px-8 py-0 font-sans text-[1.15rem] font-medium normal-case tracking-normal text-white shadow-none sm:mx-0"
                  aria-label={`${product.cta} ${product.name}`}
                  style={{
                    background: '#f95761',
                    border: '0',
                    boxShadow: '0 7px 12px rgba(173, 80, 20, 0.16)',
                    color: '#ffffff'
                  }}
                >
                  {product.cta}
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
