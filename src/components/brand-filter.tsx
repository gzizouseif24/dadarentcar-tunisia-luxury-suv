"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const brands = [
  { name: "INFINITI", slug: "infiniti", icon: "∞", cars: "2 Cars" },
  { name: "RANGE ROVER", slug: "range-rover", icon: "🦁", cars: "28 Cars" },
  { name: "LAMBORGHINI", slug: "lamborghini", icon: "🏎️", cars: "23 Cars" },
  { name: "FERRARI", slug: "ferrari", icon: "🐴", cars: "8 Cars" },
  { name: "ROLLS ROYCE", slug: "rolls-royce", icon: "👑", cars: "13 Cars" },
  { name: "PORSCHE", slug: "porsche", icon: "🦅", cars: "7 Cars" },
  { name: "BENTLEY", slug: "bentley", icon: "🅱️", cars: "7 Cars" },
  { name: "CADILLAC", slug: "cadillac", icon: "💎", cars: "2 Cars" },
  { name: "MCLAREN", slug: "mclaren", icon: "🏁", cars: "3 Cars" },
  { name: "CORVETTE", slug: "corvette", icon: "⚡", cars: "5 Cars" },
  { name: "CHRYSLER", slug: "chrysler", icon: "⭐", cars: "4 Cars" },
];

export const BrandFilter = () => {
  const [selectedBrand, setSelectedBrand] = useState("");

  return (
    <section className="bg-black text-white py-16 relative overflow-hidden">
      {/* Decorative brush strokes */}
      <div className="absolute top-0 left-0 right-0 h-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSI4MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMCw0MCBRMjUwLDAgNTAwLDQwIFQ3NTAsNDAgVDEwMDAsNDAgVDEyNTAsNDAgVDE1MDAsNDAgVDE3NTAsNDAgVDIwMDAsNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iNCIgb3BhY2l0eT0iMC4xIi8+PC9zdmc+')] bg-repeat-x" />
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSI4MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMCw0MCBRMjUwLDAgNTAwLDQwIFQ3NTAsNDAgVDEwMDAsNDAgVDEyNTAsNDAgVDE1MDAsNDAgVDE3NTAsNDAgVDIwMDAsNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iNCIgb3BhY2l0eT0iMC4xIi8+PC9zdmc+')] bg-repeat-x" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-6xl font-black text-center mb-12"
        >
          <span className="text-yellow">PICK A CAR FROM</span> TOP BRANDS
        </motion.h2>
        
        {/* Brands Carousel */}
        <div className="relative">
          {/* Left Arrow */}
          <button className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-yellow text-black p-3 rounded-full hover:bg-yellow/90 transition-all shadow-lg">
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Brands Grid */}
          <div className="overflow-hidden px-12">
            <div className="flex gap-6 justify-center flex-wrap">
              {brands.map((brand, index) => (
                <motion.div
                  key={brand.slug}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.3 }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href={`/vehicles?brand=${brand.slug}`}
                    onClick={() => setSelectedBrand(brand.slug)}
                    className={`flex flex-col items-center gap-3 p-6 rounded-xl transition-all min-w-[140px] ${
                      selectedBrand === brand.slug
                        ? "bg-yellow text-black"
                        : "bg-white/5 text-white hover:bg-white/10 border border-white/10"
                    }`}
                  >
                    {/* Brand Icon/Logo placeholder */}
                    <div className="text-5xl">{brand.icon}</div>
                    <div className="text-center">
                      <div className="font-black text-sm uppercase tracking-wider">{brand.name}</div>
                      <div className="text-xs opacity-70 mt-1">{brand.cars}</div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Arrow */}
          <button className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-yellow text-black p-3 rounded-full hover:bg-yellow/90 transition-all shadow-lg">
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};