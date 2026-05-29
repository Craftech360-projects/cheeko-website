import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { assets } from '@/data/assets';

export function MeetCheeko() {
  return (
    <section id="meet" className="relative overflow-hidden bg-cheeko-yellow px-6 py-16 sm:px-12 sm:py-24 lg:px-20 lg:py-32">
      <div className="relative mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2 lg:gap-20">
        
        {/* Left Content */}
        <div className="max-w-xl order-2 lg:order-1">
          <h2 className="font-display text-4xl sm:text-5xl lg:text-7xl font-black leading-[1.1] tracking-tight text-cheeko-ink">
            Childhood deserves <br className="hidden sm:block" />
            <span className="text-cheeko-pink">better technology.</span>
          </h2>
          
          <p className="mt-6 text-lg sm:text-xl lg:text-2xl font-bold text-cheeko-ink/80 leading-relaxed max-w-md lg:max-w-none">
            AI built for curiosity, imagination and growth.
          </p>

          <div className="mt-10 lg:mt-24">
            <a 
              href="#features" 
              className="inline-flex items-center gap-2 text-base sm:text-lg font-black text-cheeko-ink hover:gap-4 transition-all group"
            >
              Explore Features 
              <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        {/* Right Image - Sharper Corners */}
        <div className="relative aspect-[1.1/1] w-full sm:max-w-2xl mx-auto lg:max-w-none order-1 lg:order-2">
          <div className="relative h-full w-full overflow-hidden rounded-3xl sm:rounded-[2.5rem] shadow-2xl">
            <Image
              src={assets.hero.meetCheeko}
              alt="Child laughing with Cheeko device"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}


