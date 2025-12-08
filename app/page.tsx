import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import GallerySection from '@/components/GallerySection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ServicesSection from '@/components/ServicesSection';

export default function Home() {
  return (
    <div className="bg-black text-white">
      <HeroSection />
      <AboutSection />
      <GallerySection />
      <TestimonialsSection />
      <ServicesSection />
    </div>
  );
}
