import Image from 'next/image';
import { assets } from '@/data/assets';
import { siteContent } from '@/data/site-content';
import { EarlyAccessForm } from './EarlyAccessForm';
import { Globe, Brain, BookOpen } from 'lucide-react';

export function HeroSection() {
  return (
    <section id="top" className="relative w-full h-[100svh] min-h-screen overflow-hidden bg-cheeko-ink">
      {/* Background Image Spread */}
      <Image
        src={assets.hero.desktop}
        alt="Child playing with Cheeko"
        fill
        priority
        className="object-cover object-[85%_center] lg:object-right"
      />
      
      {/* Subtle Overlay */}
      <div className="absolute inset-0 bg-black/5" />

      {/* Grid Container for Card Positioning */}
      <div className="relative h-full container mx-auto px-4 sm:px-10 lg:px-20 flex items-end pb-8 sm:pb-12 lg:pb-16">
        <div className="w-full flex justify-start">
          
          {/* THE CHEEKO PRO SQUARE CARD - Tightened Spacing */}
          <div className="w-full max-w-[400px] sm:max-w-[440px] aspect-square bg-white rounded-[2.5rem] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.25)] flex flex-col justify-center p-6 sm:p-8 border border-white/40 overflow-hidden">
            
            {/* Badge */}
            <div className="flex justify-center mb-3 sm:mb-4">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#FFF0F6] px-3 py-1 text-[9px] sm:text-[10px] font-black text-cheeko-pink uppercase tracking-[0.2em] border border-pink-100">
                <span className="text-sm">✦</span> {siteContent.hero.eyebrow}
              </span>
            </div>

            {/* Title & Description */}
            <div className="text-center mb-4 sm:mb-5">
              <h1 className="font-display text-3xl sm:text-4xl font-black text-cheeko-ink leading-tight mb-2">
                {siteContent.hero.productName}
              </h1>
              <p className="text-stone-500 text-[13px] sm:text-sm font-bold max-w-[260px] mx-auto leading-relaxed">
                Cheeko is a magical AI companion that <span className="text-purple-500">talks</span>, <span className="text-pink-500">listens</span>, <span className="text-green-500">plays</span>, and <span className="text-orange-500">grows</span> with your child.
              </p>
            </div>

            {/* Features Row */}
            <div className="grid grid-cols-3 gap-2 mb-5 sm:mb-6">
              <div className="flex flex-col items-center gap-1.5">
                <div className="w-9 h-9 flex items-center justify-center bg-purple-50 rounded-xl text-purple-600">
                  <Globe size={18} />
                </div>
                <div className="text-center">
                  <p className="text-xs font-black text-cheeko-ink leading-none">15+</p>
                  <p className="text-[8px] font-bold text-stone-400 uppercase mt-0.5">Languages</p>
                </div>
              </div>

              <div className="flex flex-col items-center gap-1.5">
                <div className="w-9 h-9 flex items-center justify-center bg-green-50 rounded-xl text-green-600">
                  <Brain size={18} />
                </div>
                <div className="text-center">
                  <p className="text-xs font-black text-cheeko-ink leading-none">Cognitive</p>
                  <p className="text-[8px] font-bold text-stone-400 uppercase mt-0.5 whitespace-nowrap">Boost</p>
                </div>
              </div>

              <div className="flex flex-col items-center gap-1.5">
                <div className="w-9 h-9 flex items-center justify-center bg-yellow-50 rounded-xl text-yellow-600">
                  <BookOpen size={18} />
                </div>
                <div className="text-center">
                  <p className="text-xs font-black text-cheeko-ink leading-none">100+</p>
                  <p className="text-[8px] font-bold text-stone-400 uppercase mt-0.5">Contents</p>
                </div>
              </div>
            </div>

            {/* Form CTA */}
            <div className="text-center mb-3">
              <p className="text-[10px] font-black text-stone-400 uppercase tracking-tighter">
                ✨ Join the Waitlist for <span className="text-cheeko-pink">2026</span> Release ✨
              </p>
            </div>
            <div className="px-1">
              <EarlyAccessForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


