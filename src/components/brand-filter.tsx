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
    hasLogo: false
  },
  { 
    name: "Lexus", 
    slug: "lexus",
    hasLogo: false
  },
  { 
    name: "Range Rover", 
    slug: "range-rover",
    hasLogo: false
  },
  { 
    name: "Bentley", 
    slug: "bentley",
    hasLogo: false
  },
  { 
    name: "Ferrari", 
    slug: "ferrari",
    hasLogo: false
  },
  { 
    name: "Lamborghini", 
    slug: "lamborghini",
    hasLogo: false
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