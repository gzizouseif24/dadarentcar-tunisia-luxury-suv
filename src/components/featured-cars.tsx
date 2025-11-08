"use client";

import { CarCard } from "./car-card";
import { ArrowRight, Zap } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const featuredCars = [
  {
    id: "1",
    name: "Patrol",
    brand: "Nissan",
    category: "SUV",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/f5ea3f92-a122-434f-ad3a-e1b4b3ccf56c/generated_images/professional-automotive-photography-of-a-75237027-20251107205230.jpg",
    dailyPrice: 250,
    monthlyPrice: 6000,
    gearbox: "Automatic" as const,
    fuelType: "Diesel" as const,
    seats: 7,
    status: "Available" as const,
    badge: "20% Cashback",
  },
  {
    id: "2",
    name: "X5",
    brand: "BMW",
    category: "Luxury SUV",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/f5ea3f92-a122-434f-ad3a-e1b4b3ccf56c/generated_images/professional-automotive-photography-of-a-21f20aca-20251107205233.jpg",
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
    category: "Luxury SUV",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/f5ea3f92-a122-434f-ad3a-e1b4b3ccf56c/generated_images/professional-automotive-photography-of-a-1e2f42f6-20251107205231.jpg",
    dailyPrice: 400,
    monthlyPrice: 9500,
    gearbox: "Automatic" as const,
    fuelType: "Hybrid" as const,
    seats: 5,
    status: "Reserved" as const,
    badge: "New Arrival",
  },
  {
    id: "4",
    name: "Range Rover Sport",
    brand: "Range Rover",
    category: "Luxury SUV",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/f5ea3f92-a122-434f-ad3a-e1b4b3ccf56c/generated_images/professional-automotive-photography-of-a-1b081630-20251107205232.jpg",
    dailyPrice: 380,
    monthlyPrice: 9000,
    gearbox: "Automatic" as const,
    fuelType: "Diesel" as const,
    seats: 5,
    status: "Available" as const,
  },
  {
    id: "5",
    name: "Grand Cherokee",
    brand: "Jeep",
    category: "SUV",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/f5ea3f92-a122-434f-ad3a-e1b4b3ccf56c/generated_images/professional-automotive-photography-of-a-1bd2fa44-20251107205234.jpg",
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
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/f5ea3f92-a122-434f-ad3a-e1b4b3ccf56c/generated_images/professional-automotive-photography-of-a-6cd8deae-20251107205255.jpg",
    dailyPrice: 320,
    monthlyPrice: 7500,
    gearbox: "Automatic" as const,
    fuelType: "Diesel" as const,
    seats: 7,
    status: "In Preparation" as const,
    badge: "Coming Soon",
  },
];

export const FeaturedCars = () => {
  return (
    <section className="relative bg-black text-white py-20 overflow-hidden">
      {/* Decorative brush strokes */}
      <div className="absolute top-0 left-0 right-0 h-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSI4MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMCw0MCBRMjUwLDAgNTAwLDQwIFQ3NTAsNDAgVDEwMDAsNDAgVDEyNTAsNDAgVDE1MDAsNDAgVDE3NTAsNDAgVDIwMDAsNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iNCIgb3BhY2l0eT0iMC4xIi8+PC9zdmc+')] bg-repeat-x" />
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSI4MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMCw0MCBRMjUwLDAgNTAwLDQwIFQ3NTAsNDAgVDEwMDAsNDAgVDEyNTAsNDAgVDE1MDAsNDAgVDE3NTAsNDAgVDIwMDAsNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iNCIgb3BhY2l0eT0iMC4xIi8+PC9zdmc+')] bg-repeat-x" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header with Lightning Bolt Effect */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block mb-6"
          >
            <Zap className="w-20 h-20 text-yellow mx-auto" fill="currentColor" />
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-black mb-4"
          >
            FASTER <span className="text-yellow italic">SIGNATURES</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto"
          >
            Discover our handpicked selection of premium vehicles, ready to elevate your driving experience
          </motion.p>
        </div>

        {/* Cars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredCars.map((car) => (
            <CarCard key={car.id} {...car} />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Link
            href="/vehicles"
            className="inline-flex items-center gap-3 bg-yellow text-black px-12 py-6 rounded-xl font-black text-xl hover:bg-yellow/90 transition-all hover:scale-105 shadow-2xl"
          >
            VIEW ALL CARS
            <ArrowRight className="w-7 h-7" />
          </Link>
        </div>
      </div>
    </section>
  );
};