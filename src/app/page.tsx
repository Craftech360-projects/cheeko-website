import { AgeStages } from '@/components/sections/AgeStages';
import { Capabilities } from '@/components/sections/Capabilities';
import { Header } from '@/components/sections/Header';
import { HeroSection } from '@/components/sections/HeroSection';
import { LanguageSection } from '@/components/sections/LanguageSection';
import { MeetCheeko } from '@/components/sections/MeetCheeko';
import { ParentTrust } from '@/components/sections/ParentTrust';
import { ProductOptions } from '@/components/sections/ProductOptions';
import { PromoBar } from '@/components/sections/PromoBar';

export default function Home() {
  return (
    <main className="min-h-dvh overflow-hidden bg-cheeko-cream text-cheeko-ink">
      <PromoBar />
      <Header />
      <HeroSection />
      <MeetCheeko />
      <ProductOptions />
      <Capabilities />
      <LanguageSection />
      <ParentTrust />
      <AgeStages />
    </main>
  );
}
