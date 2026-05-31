import { siteContent } from '@/data/site-content';

export function PromoBar() {
  const item = (
    <span className="mx-5 inline-flex items-center gap-2 whitespace-nowrap">
      <span>{siteContent.promo.message}</span>
    </span>
  );

  return (
    <div className="overflow-hidden bg-cheeko-orange py-2.5 font-display text-sm font-semibold text-cheeko-ink sm:text-base" aria-label={siteContent.promo.message}>
      <div className="flex w-max animate-[promo-marquee_24s_linear_infinite] motion-reduce:animate-none">
        {Array.from({ length: 6 }).map((_, index) => (
          <span key={index} aria-hidden={index > 0}>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
