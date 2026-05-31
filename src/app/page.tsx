import { AgeStages } from '@/components/sections/AgeStages';
import { Capabilities } from '@/components/sections/Capabilities';
import { CardSystemSection } from '@/components/sections/CardSystemSection';
import { Footer } from '@/components/sections/Footer';
import { Header } from '@/components/sections/Header';
import { HeroSection } from '@/components/sections/HeroSection';
import { JourneySection } from '@/components/sections/JourneySection';
import { LanguageSection } from '@/components/sections/LanguageSection';
import { MeetCheeko } from '@/components/sections/MeetCheeko';
import { OriginalsSection } from '@/components/sections/OriginalsSection';
import { ParentTrust } from '@/components/sections/ParentTrust';
import { ProductOptions } from '@/components/sections/ProductOptions';
import { PromoBar } from '@/components/sections/PromoBar';
import { ReviewsSection } from '@/components/sections/ReviewsSection';

export default function Home() {
  return (
    <main className="min-h-dvh overflow-x-hidden bg-cheeko-cream text-cheeko-ink">
      <PromoBar />
      <Header />
      <HeroSection />
      <MeetCheeko />
      <ProductOptions />
      <Capabilities />
      <LanguageSection />
      <ParentTrust />
      <CardSystemSection />
      <AgeStages />
      <ReviewsSection />
      <OriginalsSection />
      <JourneySection />
      <Footer />
    </main>
  );
}
