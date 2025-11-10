import { notFound } from "next/navigation";
import { getCategoryBySlug } from "@/lib/constants";
import { CarCard } from "@/components/car-card";

interface CategoryPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Vehicle data - matching the structure from vehicles/page.tsx
const allVehicles = [
  {
    id: "1",
    name: "Patrol",
    brand: "Nissan",
    category: "SUV",
    image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800&q=80",
    dailyPrice: 250,
    monthlyPrice: 6000,
    gearbox: "Automatic" as const,
    fuelType: "Diesel" as const,
    seats: 7,
    status: "Available" as const,
    badge: "20% Remise",
  },
  {
    id: "2",
    name: "X5",
    brand: "BMW",
    category: "Luxury",
    image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=80",
    dailyPrice: 350,
    monthlyPrice: 8500,
    gearbox: "Automatic" as const,
    fuelType: "Diesel" as const,
    seats: 5,
    status: "Available" as const,
  },
  {
    id: "3",
    name: "GLE 450",
    brand: "Mercedes",
    category: "Luxury",
    image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&q=80",
    dailyPrice: 400,
    monthlyPrice: 9500,
    gearbox: "Automatic" as const,
    fuelType: "Hybrid" as const,
    seats: 5,
    status: "Reserved" as const,
    badge: "Nouvelle Arrivée",
  },
  {
    id: "4",
    name: "Range Rover Evoque",
    brand: "Range Rover",
    category: "Luxury",
    image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&q=80",
    dailyPrice: 380,
    monthlyPrice: 9000,
    gearbox: "Automatic" as const,
    fuelType: "Diesel" as const,
    seats: 5,
    status: "Available" as const,
  },
  {
    id: "5",
    name: "Wrangler",
    brand: "Jeep",
    category: "SUV",
    image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800&q=80",
    dailyPrice: 280,
    monthlyPrice: 6800,
    gearbox: "Automatic" as const,
    fuelType: "Petrol" as const,
    seats: 5,
    status: "Available" as const,
  },
  {
    id: "6",
    name: "Land Cruiser",
    brand: "Toyota",
    category: "SUV",
    image: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800&q=80",
    dailyPrice: 320,
    monthlyPrice: 7500,
    gearbox: "Automatic" as const,
    fuelType: "Diesel" as const,
    seats: 7,
    status: "In Preparation" as const,
    badge: "Bientôt Disponible",
  },
  {
    id: "7",
    name: "Q7",
    brand: "Audi",
    category: "Luxury",
    image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&q=80",
    dailyPrice: 360,
    monthlyPrice: 8700,
    gearbox: "Automatic" as const,
    fuelType: "Diesel" as const,
    seats: 7,
    status: "Available" as const,
  },
  {
    id: "8",
    name: "RX 350",
    brand: "Lexus",
    category: "Luxury",
    image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&q=80",
    dailyPrice: 340,
    monthlyPrice: 8200,
    gearbox: "Automatic" as const,
    fuelType: "Hybrid" as const,
    seats: 5,
    status: "Available" as const,
  },
  {
    id: "9",
    name: "Pathfinder",
    brand: "Nissan",
    category: "SUV",
    image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800&q=80",
    dailyPrice: 220,
    monthlyPrice: 5500,
    gearbox: "Automatic" as const,
    fuelType: "Petrol" as const,
    seats: 7,
    status: "Available" as const,
  },
  {
    id: "10",
    name: "Corolla",
    brand: "Toyota",
    category: "Compact",
    image: "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800&q=80",
    dailyPrice: 120,
    monthlyPrice: 3000,
    gearbox: "Automatic" as const,
    fuelType: "Petrol" as const,
    seats: 5,
    status: "Available" as const,
  },
  {
    id: "11",
    name: "Civic",
    brand: "Honda",
    category: "Compact",
    image: "https://images.unsplash.com/photo-1590362891991-f776e747a588?w=800&q=80",
    dailyPrice: 130,
    monthlyPrice: 3200,
    gearbox: "Manual" as const,
    fuelType: "Petrol" as const,
    seats: 5,
    status: "Available" as const,
  },
  {
    id: "12",
    name: "Tucson",
    brand: "Hyundai",
    category: "SUV",
    image: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800&q=80",
    dailyPrice: 180,
    monthlyPrice: 4500,
    gearbox: "Automatic" as const,
    fuelType: "Diesel" as const,
    seats: 5,
    status: "Available" as const,
  },
  // Berlines (Sedans)
  {
    id: "13",
    name: "Série 5",
    brand: "BMW",
    category: "Berline",
    image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=80",
    dailyPrice: 320,
    monthlyPrice: 7800,
    gearbox: "Automatic" as const,
    fuelType: "Diesel" as const,
    seats: 5,
    status: "Available" as const,
  },
  {
    id: "14",
    name: "Classe E",
    brand: "Mercedes",
    category: "Berline",
    image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&q=80",
    dailyPrice: 340,
    monthlyPrice: 8200,
    gearbox: "Automatic" as const,
    fuelType: "Hybrid" as const,
    seats: 5,
    status: "Available" as const,
    badge: "Hybride",
  },
  {
    id: "15",
    name: "A6",
    brand: "Audi",
    category: "Berline",
    image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&q=80",
    dailyPrice: 310,
    monthlyPrice: 7500,
    gearbox: "Automatic" as const,
    fuelType: "Diesel" as const,
    seats: 5,
    status: "Available" as const,
  },
  {
    id: "16",
    name: "Camry",
    brand: "Toyota",
    category: "Berline",
    image: "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800&q=80",
    dailyPrice: 180,
    monthlyPrice: 4400,
    gearbox: "Automatic" as const,
    fuelType: "Hybrid" as const,
    seats: 5,
    status: "Available" as const,
    badge: "Économique",
  },
  {
    id: "17",
    name: "Accord",
    brand: "Honda",
    category: "Berline",
    image: "https://images.unsplash.com/photo-1590362891991-f776e747a588?w=800&q=80",
    dailyPrice: 170,
    monthlyPrice: 4200,
    gearbox: "Automatic" as const,
    fuelType: "Petrol" as const,
    seats: 5,
    status: "Available" as const,
  },
  {
    id: "18",
    name: "Passat",
    brand: "Volkswagen",
    category: "Berline",
    image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&q=80",
    dailyPrice: 190,
    monthlyPrice: 4600,
    gearbox: "Automatic" as const,
    fuelType: "Diesel" as const,
    seats: 5,
    status: "Available" as const,
  },
];

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug: categorySlug } = await params;
  const category = getCategoryBySlug(categorySlug);

  if (!category) {
    notFound();
  }

  // Filter cars by category
  const filteredCars = allVehicles.filter((car) => {
    const carCategory = car.category.toLowerCase();
    const slug = category.slug.toLowerCase();
    
    // Handle different category mappings
    if (slug === 'suvs' || slug === 'suv') {
      return carCategory.includes('suv');
    }
    if (slug === 'luxe' || slug === 'luxury') {
      return carCategory.includes('luxury') || carCategory.includes('luxe');
    }
    if (slug === 'berlines') {
      return carCategory.includes('berline') || carCategory.includes('sedan');
    }
    if (slug === 'compactes') {
      return carCategory.includes('compact');
    }
    if (slug === 'utilitaires') {
      return carCategory.includes('utilitaire') || carCategory.includes('utility');
    }
    
    return carCategory === slug;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#0066FF] to-blue-400 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{category.name}</h1>
          <p className="text-xl text-white/90">
            {category.description}
          </p>
        </div>
      </div>

      {/* Vehicles Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {filteredCars.length > 0 ? (
          <>
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-black">
                {filteredCars.length} véhicule{filteredCars.length > 1 ? 's' : ''} disponible{filteredCars.length > 1 ? 's' : ''}
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCars.map((car) => (
                <CarCard key={car.id} {...car} />
              ))}
            </div>
          </>
        ) : (
          <div className="text-center py-16">
            <h2 className="text-2xl font-bold text-black mb-4">
              Aucun véhicule disponible dans cette catégorie
            </h2>
            <p className="text-gray-600 mb-8">
              Veuillez consulter nos autres catégories ou contactez-nous pour plus d'informations.
            </p>
            <a
              href="/vehicles"
              className="inline-block bg-[#0066FF] text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors"
            >
              Voir tous les véhicules
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
