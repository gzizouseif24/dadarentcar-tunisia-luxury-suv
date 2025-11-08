import { HeroSection } from "@/components/hero-section";
import { BrandFilter } from "@/components/brand-filter";
import { FeaturedCars } from "@/components/featured-cars";
import { CategoryShowcase } from "@/components/category-showcase";
import { PromoBanner } from "@/components/promo-banner";
import { ServicesSection } from "@/components/services-section";
import { FAQSection } from "@/components/faq-section";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <BrandFilter />
      <FeaturedCars />
      <CategoryShowcase />
      <PromoBanner />
      <ServicesSection />
      <FAQSection />
    </div>
  );
}