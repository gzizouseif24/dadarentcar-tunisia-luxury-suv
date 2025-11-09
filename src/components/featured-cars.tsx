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
    badge: "20% Remise",
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
    badge: "Nouvelle Arrivée",
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
    badge: "Bientôt Disponible",
  },
];

export const FeaturedCars = () => {
  return (
    <section className="relative bg-white text-black py-20 overflow-hidden">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Cars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {featuredCars.map((car) => (
            <CarCard key={car.id} {...car} />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Link
            href="/vehicles"
            className="inline-flex items-center gap-3 bg-black text-white px-12 py-4 font-bold text-lg uppercase hover:bg-gray-800 transition-colors"
          >
            VOIR TOUS LES VÉHICULES
            <ArrowRight className="w-6 h-6" />
          </Link>
        </div>
      </div>
    </section>
  );
};