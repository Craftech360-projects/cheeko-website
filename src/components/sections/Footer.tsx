import Image from 'next/image';
import { assets } from '@/data/assets';
import { siteContent } from '@/data/site-content';

export function Footer() {
  return (
    <footer className="bg-cheeko-yellow px-4 py-10 text-cheeko-ink sm:px-8 sm:py-12 lg:px-10" role="contentinfo">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.25fr_0.95fr] lg:items-start">
        <div>
          <Image src={assets.logo.main} alt="Cheeko" width={150} height={60} className="h-11 w-auto sm:h-12" />
          <p className="mt-5 max-w-xl font-display text-[2.25rem] font-black leading-[0.95] tracking-[-0.04em] sm:text-5xl lg:text-6xl">
            {siteContent.footer.tagline}
          </p>
          <p className="mt-4 max-w-xl text-base font-black leading-7 text-cheeko-brown sm:text-lg">{siteContent.footer.description}</p>
          <Image
            src={assets.footer.people}
            alt="Craftech team building Cheeko"
            width={520}
            height={320}
            sizes="(max-width: 1024px) 80vw, 28vw"
            className="mx-auto mt-6 w-full max-w-[22rem] rounded-[1.5rem] object-cover sm:mx-0 lg:max-w-sm"
          />
        </div>

        <nav
          aria-label="Footer navigation"
          className="grid grid-cols-2 gap-5 rounded-[2rem] border-4 border-cheeko-ink/10 bg-cheeko-card/28 p-5 sm:gap-8 sm:p-7"
        >
          {siteContent.footer.columns.map((column) => (
            <nav key={column.title} aria-label={`${column.title} footer links`}>
              <h2 className="font-display text-2xl font-black leading-none text-cheeko-ink sm:text-3xl">{column.title}</h2>
              <ul className="mt-4 space-y-2.5 sm:space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="inline-flex min-h-10 items-center font-display text-lg font-black leading-tight text-cheeko-brown transition hover:text-cheeko-orange focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-cheeko-orange sm:text-xl"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </nav>
      </div>

      <div className="mx-auto mt-8 flex max-w-7xl flex-col gap-4 border-t-4 border-cheeko-ink/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="text-base font-black text-cheeko-brown">
          <a href={`mailto:${siteContent.footer.contact.email}`} className="font-black text-cheeko-ink">
            Contact
          </a>
          <span className="mx-2">/</span>
          <a href={`mailto:${siteContent.footer.contact.email}`}>{siteContent.footer.contact.email}</a>
        </div>
        <div className="grid grid-cols-3 gap-3 sm:flex sm:flex-wrap">
          {siteContent.footer.social.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="inline-flex min-h-11 items-center justify-center rounded-full bg-cheeko-ink px-3 py-2 text-center font-display text-[0.7rem] font-black uppercase tracking-[0.12em] text-white transition hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-cheeko-orange sm:px-4 sm:text-xs"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
