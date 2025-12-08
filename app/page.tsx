import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import GallerySection from '@/components/GallerySection';
import ServicesSection from '@/components/ServicesSection';

export default function Home() {
  return (
    <div className="bg-black text-white">
      <HeroSection />
      <AboutSection />
      <GallerySection />
      <ServicesSection />
    </div>
  );
}
