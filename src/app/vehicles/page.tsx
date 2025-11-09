"use client";

import { useState, useMemo } from "react";
import { CarCard } from "@/components/car-card";
import { Filter, SlidersHorizontal } from "lucide-react";

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
    category: "Standard",
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
    category: "Standard",
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
];

export default function VehiclesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedBrand, setSelectedBrand] = useState<string>("all");
  const [selectedGearbox, setSelectedGearbox] = useState<string>("all");
  const [selectedFuelType, setSelectedFuelType] = useState<string>("all");
  const [priceRange, setPriceRange] = useState<string>("all");
  const [showFilters, setShowFilters] = useState(false);

  const filteredVehicles = useMemo(() => {
    let filtered = allVehicles;
    
    if (selectedCategory !== "all") {
      filtered = filtered.filter(v => v.category.toLowerCase() === selectedCategory);
    }
    if (selectedBrand !== "all") {
      filtered = filtered.filter(v => v.brand.toLowerCase() === selectedBrand.toLowerCase());
    }
    if (selectedGearbox !== "all") {
      filtered = filtered.filter(v => v.gearbox.toLowerCase() === selectedGearbox);
    }
    if (selectedFuelType !== "all") {
      filtered = filtered.filter(v => v.fuelType.toLowerCase() === selectedFuelType);
    }
    if (priceRange !== "all") {
      filtered = filtered.filter(v => {
        const price = v.dailyPrice;
        if (priceRange === "0-150") return price <= 150;
        if (priceRange === "150-250") return price >= 150 && price <= 250;
        if (priceRange === "250-350") return price >= 250 && price <= 350;
        if (priceRange === "350+") return price >= 350;
        return true;
      });
    }
    
    return filtered;
  }, [selectedCategory, selectedBrand, selectedGearbox, selectedFuelType, priceRange]);

  // Old implementation - remove this
  const _oldFilteredVehicles = useMemo(() => {
    return allVehicles.filter((vehicle) => {
      if (selectedCategory !== "all" && vehicle.category.toLowerCase() !== selectedCategory) {
        return false;
      }
      if (selectedBrand !== "all" && vehicle.brand.toLowerCase() !== selectedBrand.toLowerCase()) {
        return false;
      }
      if (selectedGearbox !== "all" && vehicle.gearbox.toLowerCase() !== selectedGearbox) {
        return false;
      }
      if (selectedFuelType !== "all" && vehicle.fuelType.toLowerCase() !== selectedFuelType) {
        return false;
      }
      if (priceRange !== "all") {
        const price = vehicle.dailyPrice;
        if (priceRange === "0-150" && price > 150) return false;
        if (priceRange === "150-250" && (price < 150 || price > 250)) return false;
        if (priceRange === "250-350" && (price < 250 || price > 350)) return false;
        if (priceRange === "350+" && price < 350) return false;
      }
      return true;
    });
  }, [selectedCategory, selectedBrand, selectedGearbox, selectedFuelType, priceRange]);
  // End old implementation */

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-500 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Notre Flotte</h1>
          <p className="text-blue-50">
            Parcourez notre vaste collection de véhicules de luxe et SUV
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-64 flex-shrink-0">
            {/* Mobile Filter Toggle */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="lg:hidden flex items-center gap-2 bg-blue-600 text-white px-4 py-3 rounded-lg font-semibold w-full justify-center mb-4 shadow-md"
            >
              <SlidersHorizontal className="w-5 h-5" />
              {showFilters ? "Masquer les Filtres" : "Afficher les Filtres"}
            </button>

            <div className={`bg-white rounded-lg p-6 shadow-md border border-blue-100 ${showFilters ? "block" : "hidden lg:block"}`}>
              <div className="flex items-center gap-2 mb-6">
                <Filter className="w-5 h-5 text-blue-600" />
                <h2 className="text-xl font-bold text-blue-900">Filtres</h2>
              </div>

              {/* Category Filter */}
              <div className="mb-6">
                <h3 className="font-semibold text-black mb-3">Catégorie</h3>
                <div className="space-y-2">
                  {["all", "suv", "luxury", "standard"].map((category) => (
                    <label key={category} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="category"
                        value={category}
                        checked={selectedCategory === category}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className="w-4 h-4 accent-yellow"
                      />
                      <span className="text-gray-700 capitalize">{category === "all" ? "Toutes les Catégories" : category}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Brand Filter */}
              <div className="mb-6">
                <h3 className="font-semibold text-black mb-3">Marque</h3>
                <select
                  value={selectedBrand}
                  onChange={(e) => setSelectedBrand(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow"
                >
                  <option value="all">Toutes les Marques</option>
                  <option value="nissan">Nissan</option>
                  <option value="bmw">BMW</option>
                  <option value="mercedes">Mercedes</option>
                  <option value="range rover">Range Rover</option>
                  <option value="jeep">Jeep</option>
                  <option value="toyota">Toyota</option>
                  <option value="audi">Audi</option>
                  <option value="lexus">Lexus</option>
                  <option value="honda">Honda</option>
                  <option value="hyundai">Hyundai</option>
                </select>
              </div>

              {/* Gearbox Filter */}
              <div className="mb-6">
                <h3 className="font-semibold text-black mb-3">Boîte de Vitesses</h3>
                <div className="space-y-2">
                  {["all", "automatic", "manual"].map((gearbox) => (
                    <label key={gearbox} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="gearbox"
                        value={gearbox}
                        checked={selectedGearbox === gearbox}
                        onChange={(e) => setSelectedGearbox(e.target.value)}
                        className="w-4 h-4 accent-yellow"
                      />
                      <span className="text-gray-700 capitalize">{gearbox === "all" ? "Tous les Types" : gearbox === "automatic" ? "Automatique" : "Manuelle"}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Fuel Type Filter */}
              <div className="mb-6">
                <h3 className="font-semibold text-black mb-3">Type de Carburant</h3>
                <div className="space-y-2">
                  {["all", "diesel", "petrol", "hybrid", "electric"].map((fuel) => (
                    <label key={fuel} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="fuel"
                        value={fuel}
                        checked={selectedFuelType === fuel}
                        onChange={(e) => setSelectedFuelType(e.target.value)}
                        className="w-4 h-4 accent-yellow"
                      />
                      <span className="text-gray-700 capitalize">{fuel === "all" ? "Tous les Types" : fuel === "diesel" ? "Diesel" : fuel === "petrol" ? "Essence" : fuel === "hybrid" ? "Hybride" : "Électrique"}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Range Filter */}
              <div className="mb-6">
                <h3 className="font-semibold text-black mb-3">Prix Journalier</h3>
                <div className="space-y-2">
                  {[
                    { label: "Tous les Prix", value: "all" },
                    { label: "0 - 150 DT", value: "0-150" },
                    { label: "150 - 250 DT", value: "150-250" },
                    { label: "250 - 350 DT", value: "250-350" },
                    { label: "350+ DT", value: "350+" },
                  ].map((range) => (
                    <label key={range.value} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="price"
                        value={range.value}
                        checked={priceRange === range.value}
                        onChange={(e) => setPriceRange(e.target.value)}
                        className="w-4 h-4 accent-yellow"
                      />
                      <span className="text-gray-700">{range.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Reset Filters */}
              <button
                onClick={() => {
                  setSelectedCategory("all");
                  setSelectedBrand("all");
                  setSelectedGearbox("all");
                  setSelectedFuelType("all");
                  setPriceRange("all");
                }}
                className="w-full bg-blue-50 text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-blue-100 transition-colors"
              >
                Réinitialiser les Filtres
              </button>
            </div>
          </div>

          {/* Vehicle Grid */}
          <div className="flex-1">
            <div className="mb-6">
              <p className="text-blue-600">
                Affichage de <span className="font-semibold text-blue-900">{filteredVehicles.length}</span> sur{" "}
                <span className="font-semibold text-blue-900">{allVehicles.length}</span> véhicules
              </p>
            </div>

            {filteredVehicles.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredVehicles.map((vehicle) => (
                  <CarCard key={vehicle.id} {...vehicle} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">Aucun véhicule trouvé correspondant à vos filtres.</p>
                <button
                  onClick={() => {
                    setSelectedCategory("all");
                    setSelectedBrand("all");
                    setSelectedGearbox("all");
                    setSelectedFuelType("all");
                    setPriceRange("all");
                  }}
                  className="mt-4 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-md"
                >
                  Effacer Tous les Filtres
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
