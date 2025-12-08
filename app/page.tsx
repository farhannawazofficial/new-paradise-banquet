import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';

export default function Home() {
  return (
    <div className="bg-black text-white">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
    </div>
  );
}
