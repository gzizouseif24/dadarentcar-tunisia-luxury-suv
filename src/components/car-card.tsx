"use client";

import { useState } from "react";
import { Calendar, X, Settings, Users } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

interface CarCardProps {
  id: string;
  name: string;
  brand: string;
  category: string;
  image: string;
  dailyPrice: number;
  monthlyPrice: number;
  gearbox: "Automatic" | "Manual";
  fuelType: "Diesel" | "Petrol" | "Hybrid" | "Electric";
  seats: number;
  status: "Available" | "Reserved" | "In Preparation";
  badge?: string;
}

export const CarCard = ({
  id,
  name,
  brand,
  category,
  image,
  dailyPrice,
  monthlyPrice,
  gearbox,
  fuelType,
  seats,
  status,
  badge,
}: CarCardProps) => {
  const [showModal, setShowModal] = useState(false);

  const handleRestrictedAction = () => {
    setShowModal(true);
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.4 }}
        className="group border border-gray-200 bg-white rounded-lg overflow-hidden shadow-md hover:shadow-2xl transition-shadow duration-200 will-change-transform hover:-translate-y-2"
      >
        {/* Image Container - Clickable to detail page */}
        <Link href={`/vehicles/${id}`} className="block">
          <div className="relative overflow-hidden aspect-[4/3]">
            <Image
              src={image}
              alt={`${brand} ${name}`}
              width={800}
              height={600}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
              quality={80}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />

            {/* Discount Badge - Small banner */}
            {badge && (
              <div className="absolute top-3 left-3 bg-red-500 px-2 py-1 shadow-md">
                <span className="text-[10px] font-bold uppercase tracking-wide text-white">
                  {badge}
                </span>
              </div>
            )}
          </div>
        </Link>

        {/* Content - Increased size */}
        <div className="p-4 space-y-2">
          {/* Category & Title Combined with Share Icon */}
          <div className="flex items-start justify-between gap-2">
            <Link href={`/vehicles/${id}`} className="block flex-1">
              <p className="text-[10px] font-semibold uppercase tracking-wide text-gray-500">
                {category}
              </p>
              <h3 className="text-base font-bold text-gray-900 leading-tight hover:text-[#0066FF] transition-colors">
                {brand} {name}
              </h3>
            </Link>

            {/* Share Icon - Next to car name */}
            <button
              onClick={(e) => {
                e.preventDefault();
                if (navigator.share) {
                  navigator.share({
                    title: `${brand} ${name}`,
                    text: `Découvrez cette ${brand} ${name} chez DadaRentCar Tunisie !`,
                    url: `${window.location.origin}/vehicles/${id}`,
                  });
                }
              }}
              className="flex-shrink-0 p-1 hover:opacity-70 transition-opacity duration-150"
              aria-label="Partager"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
              </svg>
            </button>
          </div>

          {/* Price - Inline with Features */}
          <div className="flex items-center justify-between border-t border-gray-200 pt-2">
            <div className="flex items-baseline gap-1">
              <span className="text-2xl font-black text-[#0066FF]">{dailyPrice}</span>
              <span className="text-[10px] font-bold text-gray-700">DT/J</span>
            </div>

            {/* Features - Inline */}
            <div className="flex gap-2">
              <div className="flex items-center gap-0.5">
                <Settings className="w-3 h-3 text-gray-600" />
                <span className="text-[10px] font-semibold text-gray-600">{gearbox.slice(0, 4)}</span>
              </div>
              <div className="flex items-center gap-0.5">
                <Users className="w-3 h-3 text-gray-600" />
                <span className="text-[10px] font-semibold text-gray-600">{seats}</span>
              </div>
            </div>
          </div>

          {/* 5 Action Buttons */}
          <div className="space-y-1.5 pt-1">
            {/* Row 1: Réserver & Disponibilité */}
            <div className="grid grid-cols-2 gap-1.5">
              <Link
                href={`/booking?car=${id}`}
                prefetch={true}
                className="bg-red-500 text-white hover:bg-red-600 py-2 font-bold uppercase text-[10px] text-center transition-colors duration-150"
              >
                Réserver
              </Link>
              <Link
                href={`/vehicles/${id}#availability`}
                className="bg-[#0066FF] text-white hover:bg-blue-600 py-2 font-bold uppercase text-[10px] text-center transition-colors duration-150 flex items-center justify-center gap-1"
              >
                <Calendar className="w-3 h-3" />
                Disponibilité
              </Link>
            </div>

            {/* Row 2: Annulation, Prolongation, Changement */}
            <div className="grid grid-cols-3 gap-1.5">
              <button
                onClick={handleRestrictedAction}
                className="bg-[#d3d2ce] text-black hover:bg-gray-400 py-2 font-bold uppercase text-[9px] text-center transition-colors duration-150"
              >
                Annulation
              </button>
              <button
                onClick={handleRestrictedAction}
                className="bg-[#d3d2ce] text-black hover:bg-gray-400 py-2 font-bold uppercase text-[9px] text-center transition-colors duration-150"
              >
                Prolongation
              </button>
              <button
                onClick={handleRestrictedAction}
                className="bg-[#d3d2ce] text-black hover:bg-gray-400 py-2 font-bold uppercase text-[9px] text-center transition-colors duration-150"
              >
                Changement
              </button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Modal Popup */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="bg-white max-w-md w-full p-6 relative rounded-lg shadow-xl">
            {/* Close Button */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-black hover:text-[#0066FF] transition-colors duration-150"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Modal Content */}
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-[#0066FF] rounded-full mx-auto flex items-center justify-center">
                <span className="text-4xl">🚗</span>
              </div>

              <h3 className="text-2xl font-black uppercase text-black">
                Action Requise
              </h3>

              <p className="text-base font-bold text-gray-700">
                Vous devez d'abord louer une voiture
              </p>

              <Link
                href="/vehicles"
                onClick={() => setShowModal(false)}
                className="block bg-[#0066FF] text-white hover:bg-blue-700 py-3 px-6 font-black uppercase text-sm transition-colors duration-150 rounded-lg"
              >
                Voir les Véhicules
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
