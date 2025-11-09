import dynamic from "next/dynamic";
import { HeroSection } from "@/components/hero-section";

// Lazy load below-the-fold components
const BrandFilter = dynamic(() => import("@/components/brand-filter").then(mod => ({ default: mod.BrandFilter })), {
  loading: () => <div className="h-32 bg-gray-50 animate-pulse" />
});
const FeaturedCars = dynamic(() => import("@/components/featured-cars").then(mod => ({ default: mod.FeaturedCars })), {
  loading: () => <div className="h-96 bg-gray-50 animate-pulse" />
});
const FAQSection = dynamic(() => import("@/components/faq-section").then(mod => ({ default: mod.FAQSection })));

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <BrandFilter />
      <FeaturedCars />
      <FAQSection />
    </div>
  );
}