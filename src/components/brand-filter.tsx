"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const brands = [
  { 
    name: "BMW", 
    slug: "bmw",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/BMW.svg/200px-BMW.svg.png",
    hasLogo: true
  },
  { 
    name: "Mercedes", 
    slug: "mercedes",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Mercedes-Logo.svg/200px-Mercedes-Logo.svg.png",
    hasLogo: true
  },
  { 
    name: "Audi", 
    slug: "audi",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Audi-Logo_2016.svg/200px-Audi-Logo_2016.svg.png",
    hasLogo: true
  },
  { 
    name: "Tesla", 
    slug: "tesla",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Tesla_Motors.svg/200px-Tesla_Motors.svg.png",
    hasLogo: true
  },
  { 
    name: "Porsche", 
    slug: "porsche",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Porsche_logo.svg/200px-Porsche_logo.svg.png",
    hasLogo: true
  },
  { 
    name: "Lexus", 
    slug: "lexus",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Lexus_logo.svg/200px-Lexus_logo.svg.png",
    hasLogo: true
  },
  { 
    name: "Range Rover", 
    slug: "range-rover",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/4/43/Land_Rover_logo.svg/200px-Land_Rover_logo.svg.png",
    hasLogo: true
  },
  { 
    name: "Bentley", 
    slug: "bentley",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Bentley_logo.svg/200px-Bentley_logo.svg.png",
    hasLogo: true
  },
  { 
    name: "Ferrari", 
    slug: "ferrari",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Scuderia_Ferrari_Logo.svg/200px-Scuderia_Ferrari_Logo.svg.png",
    hasLogo: true
  },
  { 
    name: "Lamborghini", 
    slug: "lamborghini",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/d/df/Lamborghini_Logo.svg/200px-Lamborghini_Logo.svg.png",
    hasLogo: true
  },
  { 
    name: "Rolls-Royce", 
    slug: "rolls-royce",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Rolls-Royce_logo.svg/200px-Rolls-Royce_logo.svg.png",
    hasLogo: true
  },
  { 
    name: "Maserati", 
    slug: "maserati",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Maserati_logo.svg/200px-Maserati_logo.svg.png",
    hasLogo: true
  },
  { 
    name: "Jaguar", 
    slug: "jaguar",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Jaguar_logo.svg/200px-Jaguar_logo.svg.png",
    hasLogo: true
  },
  { 
    name: "Cadillac", 
    slug: "cadillac",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Cadillac_logo.svg/200px-Cadillac_logo.svg.png",
    hasLogo: true
  },
  { 
    name: "Jeep", 
    slug: "jeep",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Jeep_logo.svg/200px-Jeep_logo.svg.png",
    hasLogo: true
  },
  { 
    name: "Toyota", 
    slug: "toyota",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Toyota.svg/200px-Toyota.svg.png",
    hasLogo: true
  },
  { 
    name: "Nissan", 
    slug: "nissan",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Nissan_logo.svg/200px-Nissan_logo.svg.png",
    hasLogo: true
  },
  { 
    name: "Chevrolet", 
    slug: "chevrolet",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Chevrolet-logo.svg/200px-Chevrolet-logo.svg.png",
    hasLogo: true
  },
];

export const BrandFilter = () => {
  // Duplicate brands multiple times for truly infinite scroll
  const duplicatedBrands = [...brands, ...brands, ...brands, ...brands];

  return (
    <section className="bg-gradient-to-b from-white via-[#00B8D4]/5 to-white py-8 relative overflow-hidden">

      
      {/* Full Width Carousel */}
      <div className="relative w-full">
        {/* Gradient Overlays for fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white via-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white via-white to-transparent z-10 pointer-events-none" />
        
        {/* Scrolling Container */}
        <div className="overflow-hidden">
          <motion.div
            className="flex gap-20 items-center py-8"
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 40,
                ease: "linear",
              },
            }}
          >
            {duplicatedBrands.map((brand, index) => (
              <Link
                key={`${brand.slug}-${index}`}
                href={`/vehicles?brand=${brand.slug}`}
                className="flex-shrink-0 group"
              >
                <motion.div
                  whileHover={{ scale: 1.15 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className="relative w-40 h-40 flex items-center justify-center transition-all duration-300"
                >
                  {brand.hasLogo ? (
                    <div className="w-full h-full flex items-center justify-center p-4">
                      <Image
                        src={brand.logo!}
                        alt={brand.name}
                        width={brand.slug === "tesla" ? 140 : 160}
                        height={brand.slug === "tesla" ? 140 : 160}
                        className="object-contain filter drop-shadow-lg"
                        style={{ 
                          maxWidth: brand.slug === "tesla" ? "140px" : "160px",
                          maxHeight: brand.slug === "tesla" ? "140px" : "160px"
                        }}
                        unoptimized
                      />
                    </div>
                  ) : (
                    <div className="w-36 h-36 rounded-2xl bg-gradient-to-br from-blue-100 to-blue-50 border-2 border-blue-200 flex items-center justify-center">
                      <span className="text-blue-600 font-black text-2xl">
                        {brand.name.substring(0, 2).toUpperCase()}
                      </span>
                    </div>
                  )}
                </motion.div>
              </Link>
            ))}
          </motion.div>
        </div>
      </div>


    </section>
  );
};