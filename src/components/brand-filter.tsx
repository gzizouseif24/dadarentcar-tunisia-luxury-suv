"use client";

import Link from "next/link";
import Image from "next/image";

const brands = [
  { 
    name: "BMW", 
    slug: "bmw",
    logo: "https://raw.githubusercontent.com/filippofilip95/car-logos-dataset/master/logos/optimized/bmw.png",
    hasLogo: true
  },
  { 
    name: "Mercedes", 
    slug: "mercedes",
    logo: "https://raw.githubusercontent.com/filippofilip95/car-logos-dataset/master/logos/optimized/mercedes-benz.png",
    hasLogo: true
  },
  { 
    name: "Audi", 
    slug: "audi",
    logo: "https://raw.githubusercontent.com/filippofilip95/car-logos-dataset/master/logos/optimized/audi.png",
    hasLogo: true
  },
  { 
    name: "Tesla", 
    slug: "tesla",
    logo: "https://raw.githubusercontent.com/filippofilip95/car-logos-dataset/master/logos/optimized/tesla.png",
    hasLogo: true
  },
  { 
    name: "Porsche", 
    slug: "porsche",
    logo: "https://raw.githubusercontent.com/filippofilip95/car-logos-dataset/master/logos/optimized/porsche.png",
    hasLogo: true
  },
  { 
    name: "Lexus", 
    slug: "lexus",
    logo: "https://raw.githubusercontent.com/filippofilip95/car-logos-dataset/master/logos/optimized/lexus.png",
    hasLogo: true
  },
  { 
    name: "Range Rover", 
    slug: "range-rover",
    logo: "https://raw.githubusercontent.com/filippofilip95/car-logos-dataset/master/logos/optimized/land-rover.png",
    hasLogo: true
  },
  { 
    name: "Bentley", 
    slug: "bentley",
    logo: "https://raw.githubusercontent.com/filippofilip95/car-logos-dataset/master/logos/optimized/bentley.png",
    hasLogo: true
  },
  { 
    name: "Ferrari", 
    slug: "ferrari",
    logo: "https://raw.githubusercontent.com/filippofilip95/car-logos-dataset/master/logos/optimized/ferrari.png",
    hasLogo: true
  },
  { 
    name: "Lamborghini", 
    slug: "lamborghini",
    logo: "https://raw.githubusercontent.com/filippofilip95/car-logos-dataset/master/logos/optimized/lamborghini.png",
    hasLogo: true
  },
  { 
    name: "Rolls-Royce", 
    slug: "rolls-royce",
    logo: "https://raw.githubusercontent.com/filippofilip95/car-logos-dataset/master/logos/optimized/rolls-royce.png",
    hasLogo: true
  },
  { 
    name: "Maserati", 
    slug: "maserati",
    logo: "https://raw.githubusercontent.com/filippofilip95/car-logos-dataset/master/logos/optimized/maserati.png",
    hasLogo: true
  },
  { 
    name: "Jaguar", 
    slug: "jaguar",
    logo: "https://raw.githubusercontent.com/filippofilip95/car-logos-dataset/master/logos/optimized/jaguar.png",
    hasLogo: true
  },
  { 
    name: "Cadillac", 
    slug: "cadillac",
    logo: "https://raw.githubusercontent.com/filippofilip95/car-logos-dataset/master/logos/optimized/cadillac.png",
    hasLogo: true
  },
  { 
    name: "Jeep", 
    slug: "jeep",
    logo: "https://raw.githubusercontent.com/filippofilip95/car-logos-dataset/master/logos/optimized/jeep.png",
    hasLogo: true
  },
  { 
    name: "Toyota", 
    slug: "toyota",
    logo: "https://raw.githubusercontent.com/filippofilip95/car-logos-dataset/master/logos/optimized/toyota.png",
    hasLogo: true
  },
  { 
    name: "Nissan", 
    slug: "nissan",
    logo: "https://raw.githubusercontent.com/filippofilip95/car-logos-dataset/master/logos/optimized/nissan.png",
    hasLogo: true
  },
  { 
    name: "Chevrolet", 
    slug: "chevrolet",
    logo: "https://raw.githubusercontent.com/filippofilip95/car-logos-dataset/master/logos/optimized/chevrolet.png",
    hasLogo: true
  },
];

export const BrandFilter = () => {
  // Mobile: 2x duplication, Desktop: 4x duplication
  const duplicatedBrands = [...brands, ...brands];

  return (
    <section className="bg-gradient-to-b from-white via-[#00B8D4]/5 to-white py-4 md:py-8 relative overflow-hidden">
      {/* Full Width Carousel */}
      <div className="relative w-full">
        {/* Gradient Overlays - smaller on mobile */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-white via-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-white via-white to-transparent z-10 pointer-events-none" />

        {/* Scrolling Container - Pure CSS Animation */}
        <div className="overflow-hidden">
          <div className="brand-scroll-container hover:pause-animation">
            <div className="brand-scroll-track">
              {duplicatedBrands.map((brand, index) => (
                <Link
                  key={`${brand.slug}-${index}`}
                  href={`/vehicles?brand=${brand.slug}`}
                  className="brand-logo-item group"
                >
                  <div className="brand-logo-wrapper">
                    {brand.hasLogo ? (
                      <div className="w-full h-full flex items-center justify-center p-2 md:p-4">
                        <Image
                          src={brand.logo!}
                          alt={brand.name}
                          width={80}
                          height={80}
                          className="object-contain filter drop-shadow-lg w-16 h-16 md:w-32 md:h-32 transition-transform duration-200 group-hover:scale-110"
                          loading="lazy"
                          unoptimized
                        />
                      </div>
                    ) : (
                      <div className="w-20 h-20 md:w-36 md:h-36 rounded-2xl bg-gradient-to-br from-blue-100 to-blue-50 border-2 border-blue-200 flex items-center justify-center">
                        <span className="text-blue-600 font-black text-lg md:text-2xl">
                          {brand.name.substring(0, 2).toUpperCase()}
                        </span>
                      </div>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};