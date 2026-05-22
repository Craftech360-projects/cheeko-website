import { assets } from '@/data/assets';
import { siteContent } from '@/data/site-content';
import { AssetImage } from '@/components/ui/AssetImage';
import { Button } from '@/components/ui/Button';
import { SectionHeading } from '@/components/ui/SectionHeading';

export function FoundationPreview() {
  return (
    <main className="min-h-dvh overflow-hidden bg-cheeko-cream text-cheeko-ink">
      <section className="relative isolate flex min-h-dvh items-center px-5 py-16 sm:px-8 lg:px-12">
        <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_top_left,#ffd95a,transparent_35%),linear-gradient(135deg,#fff6e7_0%,#ffc400_50%,#ff92bd_100%)]" />
        <div className="absolute right-[-20%] top-[-10%] -z-10 h-72 w-72 rounded-full bg-cheeko-pink/30 blur-3xl sm:h-96 sm:w-96" />
        <div className="mx-auto grid w-full max-w-6xl items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="font-display text-sm font-black uppercase tracking-[0.22em] text-cheeko-orange">Sprint 1 Foundation</p>
            <h1 className="mt-4 max-w-4xl font-display text-5xl font-black leading-[0.9] text-cheeko-ink sm:text-6xl lg:text-7xl">
              {siteContent.positioning.statement}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-cheeko-brown sm:text-xl">
              {siteContent.sprintOne.description}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button>Get Early Access</Button>
              <Button variant="secondary">Review Assets</Button>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-md rounded-[2.5rem] border-4 border-white/80 bg-white/70 p-4 shadow-card backdrop-blur">
            <AssetImage
              src={assets.hero.desktop}
              alt="Child smiling beside the Cheeko device"
              width={900}
              height={900}
              priority
              className="aspect-square rounded-[2rem] object-cover"
            />
          </div>
        </div>
      </section>
      <section className="px-5 py-16 sm:px-8">
        <SectionHeading eyebrow="Ready for sprints" title="A sturdy base for a playful launch">
          The build now has shared content, asset paths, brand tokens, reusable UI pieces, and mobile-first spacing rules.
        </SectionHeading>
      </section>
    </main>
  );
}
