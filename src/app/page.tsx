import dynamic from "next/dynamic";
import { HeroSection } from "@/components/hero-section";
import { HomeContentSection, ContentSection } from "@/components/home-content-section";

// Lazy load below-the-fold components
const BrandFilter = dynamic(() => import("@/components/brand-filter").then(mod => ({ default: mod.BrandFilter })), {
  loading: () => <div className="h-32 bg-gray-50 animate-pulse" />
});
const FeaturedCars = dynamic(() => import("@/components/featured-cars").then(mod => ({ default: mod.FeaturedCars })), {
  loading: () => <div className="h-96 bg-gray-50 animate-pulse" />
});
const FAQSection = dynamic(() => import("@/components/faq-section").then(mod => ({ default: mod.FAQSection })));

const contentSections: ContentSection[] = [
  {
    id: '1',
    title: 'Votre Partenaire de Confiance en Tunisie',
    subtitle: 'À Propos de Nous',
    description: 'Depuis plus de 10 ans, DadaRentCar offre des services de location de véhicules de qualité supérieure en Tunisie. Notre flotte diversifiée de SUVs et de véhicules de luxe est méticuleusement entretenue pour garantir votre sécurité et votre confort. Que vous exploriez les paysages désertiques ou les côtes méditerranéennes, nous avons le véhicule parfait pour votre aventure.',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/f5ea3f92-a122-434f-ad3a-e1b4b3ccf56c/generated_images/professional-automotive-photography-of-a-1b081630-20251107205232.jpg',
    imageAlt: 'Flotte de véhicules de luxe',
    imagePosition: 'left',
    ctaText: 'Découvrir Notre Flotte',
    ctaLink: '/vehicles'
  },
  {
    id: '2',
    title: 'Des Tarifs Transparents et Compétitifs',
    subtitle: 'Pourquoi Nous Choisir',
    description: 'Profitez de nos tarifs journaliers et mensuels avantageux sans frais cachés. Nous offrons une assurance complète, une assistance routière 24h/24 et 7j/7, et des options de paiement flexibles. Notre équipe professionnelle est dédiée à rendre votre expérience de location simple et agréable, du début à la fin.',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/f5ea3f92-a122-434f-ad3a-e1b4b3ccf56c/generated_images/professional-automotive-photography-of-a-6ac31a2f-20251107205443.jpg',
    imageAlt: 'Service client professionnel',
    imagePosition: 'right',
    ctaText: 'Voir Nos Offres',
    ctaLink: '/special-offers'
  },
  {
    id: '3',
    title: 'Explorez la Tunisie en Toute Liberté',
    subtitle: 'Aventures Sans Limites',
    description: 'De Tunis à Djerba, du Sahara aux plages de Hammamet, nos véhicules sont conçus pour vous emmener partout. Avec nos SUVs robustes et nos voitures de luxe confortables, chaque kilomètre devient une expérience mémorable. Réservez dès maintenant et commencez votre aventure tunisienne avec style et confiance.',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/f5ea3f92-a122-434f-ad3a-e1b4b3ccf56c/generated_images/professional-automotive-photography-of-a-7ec7502f-20251107205442.jpg',
    imageAlt: 'Aventure en Tunisie',
    imagePosition: 'left',
    ctaText: 'Contactez-Nous',
    ctaLink: '/contact'
  }
];

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <BrandFilter />
      {contentSections.map((section) => (
        <HomeContentSection key={section.id} section={section} />
      ))}
      <FeaturedCars />
      <FAQSection />
    </div>
  );
}