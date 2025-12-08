import HeroSection from '@/components/HeroSection';
import IconsSection from '@/components/IconsSection';
import ServicesSection from '@/components/ServicesSection';

export default function Home() {
  return (
    <div className="bg-black text-white">
      <HeroSection />
      <IconsSection />
      <ServicesSection />
    </div>
  );
}
