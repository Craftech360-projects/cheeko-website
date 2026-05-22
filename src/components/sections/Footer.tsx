import Image from 'next/image';
import { assets } from '@/data/assets';
import { siteContent } from '@/data/site-content';

export function Footer() {
  return (
    <footer className="bg-cheeko-yellow px-4 py-12 text-cheeko-ink sm:px-8 lg:px-10" role="contentinfo">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.1fr_0.9fr_0.9fr]">
        <div>
          <Image src={assets.logo.main} alt="Cheeko" width={150} height={60} className="h-12 w-auto" />
          <p className="mt-5 max-w-md font-display text-3xl font-black leading-tight tracking-[-0.03em]">
            {siteContent.footer.tagline}
          </p>
          <p className="mt-4 max-w-md text-sm font-bold leading-6 text-cheeko-brown">{siteContent.footer.description}</p>
          <Image
            src={assets.footer.people}
            alt="Craftech team building Cheeko"
            width={520}
            height={320}
            sizes="(max-width: 1024px) 80vw, 28vw"
            className="mt-6 max-w-xs rounded-[1.5rem] object-cover"
          />
        </div>

        {siteContent.footer.columns.map((column) => (
          <nav key={column.title} aria-label={`${column.title} footer links`}>
            <h2 className="font-display text-xl font-black text-cheeko-ink">{column.title}</h2>
            <ul className="mt-4 space-y-3">
              {column.links.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="font-display text-base font-black text-cheeko-brown transition hover:text-cheeko-orange">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>

      <div className="mx-auto mt-10 flex max-w-7xl flex-col gap-4 border-t-4 border-cheeko-ink/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="text-sm font-bold text-cheeko-brown">
          <a href={`mailto:${siteContent.footer.contact.email}`} className="font-black text-cheeko-ink">
            Contact
          </a>
          <span className="mx-2">/</span>
          <a href={`mailto:${siteContent.footer.contact.email}`}>{siteContent.footer.contact.email}</a>
        </div>
        <div className="flex flex-wrap gap-3">
          {siteContent.footer.social.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="rounded-full bg-cheeko-ink px-4 py-2 font-display text-xs font-black uppercase tracking-[0.12em] text-white transition hover:-translate-y-0.5"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
