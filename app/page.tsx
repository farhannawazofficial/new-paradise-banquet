import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';

export default function Home() {
  return (
    <div className="bg-black text-white">
      <HeroSection />
      <ServicesSection />
    </div>
  );
}
