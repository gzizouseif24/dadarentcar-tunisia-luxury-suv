"use client";

import { CarCard } from "@/components/car-card";
import { Tag, TrendingDown, Clock, Percent } from "lucide-react";

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
    badge: "20% Cashback",
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
    badge: "New Arrival",
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
    badge: "Coming Soon",
  },
];

export default function SpecialOffersPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-yellow via-yellow/80 to-yellow/60 text-black py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <Tag className="w-10 h-10" />
            <h1 className="text-4xl md:text-5xl font-bold">Special Offers</h1>
          </div>
          <p className="text-xl text-black/80">
            Exclusive deals and discounts on premium vehicles
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Promotions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Cashback Offer */}
          <div className="bg-gradient-to-br from-green-500 to-green-600 text-white rounded-xl p-6 shadow-lg">
            <Percent className="w-12 h-12 mb-4" />
            <h3 className="text-2xl font-bold mb-2">20% Cashback</h3>
            <p className="text-green-100 mb-4">
              Get instant cashback on selected SUV models
            </p>
            <ul className="space-y-2 text-sm">
              <li>• Nissan Patrol</li>
              <li>• Toyota Land Cruiser</li>
              <li>• Jeep Wrangler</li>
            </ul>
          </div>

          {/* Weekly Discount */}
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-xl p-6 shadow-lg">
            <Clock className="w-12 h-12 mb-4" />
            <h3 className="text-2xl font-bold mb-2">Weekly Rental</h3>
            <p className="text-blue-100 mb-4">
              Save 15% on 7-day rentals
            </p>
            <div className="text-4xl font-bold mb-2">15%</div>
            <p className="text-sm text-blue-100">
              Valid for all vehicle categories
            </p>
          </div>

          {/* Monthly Discount */}
          <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-xl p-6 shadow-lg">
            <TrendingDown className="w-12 h-12 mb-4" />
            <h3 className="text-2xl font-bold mb-2">Monthly Rental</h3>
            <p className="text-purple-100 mb-4">
              Best value for long-term rentals
            </p>
            <div className="text-4xl font-bold mb-2">25%</div>
            <p className="text-sm text-purple-100">
              30+ days rental period
            </p>
          </div>
        </div>

        {/* Featured Offers */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-black mb-6">Featured Vehicles on Offer</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {specialOffers.map((car) => (
            <CarCard key={car.id} {...car} />
          ))}
        </div>

        {/* Terms & Conditions */}
        <div className="mt-12 bg-white rounded-xl shadow-md p-8">
          <h3 className="text-2xl font-bold text-black mb-4">Terms & Conditions</h3>
          <ul className="space-y-2 text-gray-700">
            <li>• All offers are subject to vehicle availability</li>
            <li>• Cashback will be credited within 7 business days</li>
            <li>• Weekly discount: minimum 7 consecutive days required</li>
            <li>• Monthly discount: minimum 30 consecutive days required</li>
            <li>• Offers cannot be combined with other promotions</li>
            <li>• Valid until end of month unless otherwise stated</li>
            <li>• Standard deposit and insurance terms apply</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
