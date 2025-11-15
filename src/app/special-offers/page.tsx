"use client";

import { CarCard } from "@/components/car-card";
import { Tag, TrendingDown, Clock, Percent, Sparkles, Gift, Zap } from "lucide-react";
import Link from "next/link";

const specialOffers = [
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
    discount: 20,
    originalPrice: 312,
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
    status: "Available" as const,
    badge: "Nouvelle Arrivée",
    discount: 15,
    originalPrice: 470,
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
    status: "Available" as const,
    badge: "Offre Limitée",
    discount: 25,
    originalPrice: 427,
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
    badge: "Populaire",
    discount: 18,
    originalPrice: 427,
  },
];

export default function SpecialOffersPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#0066FF] to-blue-400 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <Tag className="w-10 h-10" />
            <h1 className="text-4xl md:text-5xl font-bold">Offres Spéciales</h1>
          </div>
          <p className="text-xl text-white/90">
            Offres exclusives et réductions sur les véhicules premium
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Simplified Promotions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Weekly Offer */}
          <div className="group bg-white border-2 border-blue-100 rounded-xl p-8 shadow-lg hover:shadow-xl hover:border-[#0066FF] transition-all duration-300">
            <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mb-4 group-hover:bg-[#0066FF] transition-colors">
              <Clock className="w-8 h-8 text-[#0066FF] group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-2xl font-bold text-black mb-2">Location Hebdomadaire</h3>
            <div className="text-5xl font-black text-[#0066FF] mb-3">15%</div>
            <p className="text-gray-600">
              Économisez sur les locations de 7 jours ou plus
            </p>
          </div>

          {/* Flash Offer */}
          <div className="group bg-white border-2 border-blue-100 rounded-xl p-8 shadow-lg hover:shadow-xl hover:border-[#0066FF] transition-all duration-300">
            <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mb-4 group-hover:bg-[#0066FF] transition-colors">
              <Zap className="w-8 h-8 text-[#0066FF] group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-2xl font-bold text-black mb-2">Réservation Anticipée</h3>
            <div className="text-5xl font-black text-[#0066FF] mb-3">20%</div>
            <p className="text-gray-600">
              Réservez 7 jours à l'avance et économisez
            </p>
          </div>

          {/* Monthly Offer */}
          <div className="group bg-white border-2 border-blue-100 rounded-xl p-8 shadow-lg hover:shadow-xl hover:border-[#0066FF] transition-all duration-300">
            <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mb-4 group-hover:bg-[#0066FF] transition-colors">
              <TrendingDown className="w-8 h-8 text-[#0066FF] group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-2xl font-bold text-black mb-2">Location Mensuelle</h3>
            <div className="text-5xl font-black text-[#0066FF] mb-3">25%</div>
            <p className="text-gray-600">
              Meilleur tarif pour 30 jours et plus
            </p>
          </div>
        </div>

        {/* Featured Offers */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <Tag className="w-8 h-8 text-[#0066FF]" />
            <h2 className="text-3xl font-bold text-black">Véhicules en Promotion</h2>
          </div>
          <p className="text-gray-600">Profitez de nos meilleures offres sur une sélection de véhicules premium</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {specialOffers.map((car) => (
            <div key={car.id} className="group relative">
              {/* Discount Badge */}
              <div className="absolute top-4 right-4 z-10 bg-red-500 text-white px-3 py-1 rounded-full font-bold text-sm shadow-lg">
                -{car.discount}%
              </div>
              <CarCard {...car} />
              {/* Price Comparison */}
              <div className="mt-2 px-4">
                <div className="flex items-center gap-2">
                  <span className="text-gray-400 line-through text-sm">{car.originalPrice} DT/jour</span>
                  <span className="text-[#0066FF] font-bold text-lg">{car.dailyPrice} DT/jour</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Terms & Conditions */}
        <div className="mt-12 bg-white rounded-xl shadow-md p-8 border-2 border-blue-100">
          <h3 className="text-2xl font-bold text-[#0066FF] mb-4">Conditions Générales</h3>
          <ul className="space-y-2 text-gray-700">
            <li>• Toutes les offres sont soumises à la disponibilité des véhicules</li>
            <li>• Le cashback sera crédité dans les 7 jours ouvrables</li>
            <li>• Réduction hebdomadaire : minimum 7 jours consécutifs requis</li>
            <li>• Réduction mensuelle : minimum 30 jours consécutifs requis</li>
            <li>• Les offres ne peuvent pas être combinées avec d'autres promotions</li>
            <li>• Valable jusqu'à la fin du mois sauf indication contraire</li>
            <li>• Les conditions standard de dépôt et d'assurance s'appliquent</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
