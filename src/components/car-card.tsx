"use client";

import { MessageCircle, Phone, Calendar, Share2, Settings, Fuel, Users } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

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
  const whatsappMessage = encodeURIComponent(
    `Bonjour ! Je suis intéressé(e) par la location de la ${brand} ${name}. Pouvez-vous me fournir plus de détails ?`
  );

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: `${brand} ${name}`,
        text: `Découvrez cette ${brand} ${name} chez DadaRentCar Tunisie !`,
        url: window.location.href,
      });
    }
  };

  return (
    <div
      className="border border-gray-200 bg-white shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
    >
      {/* Image Container - Slightly taller */}
      <div className="relative overflow-hidden aspect-[4/3]">
        <Image
          src={image}
          alt={`${brand} ${name}`}
          width={800}
          height={600}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          quality={80}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content - Compact with smaller text */}
      <div className="p-3 space-y-1.5">
        {/* Category & Title Combined */}
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-wide text-gray-500">
            {category}
          </p>
          <h3 className="text-sm font-bold text-gray-900 leading-tight">
            {brand} {name}
          </h3>
        </div>
        
        {/* Price - Inline with Features */}
        <div className="flex items-center justify-between border-t border-gray-200 pt-1.5">
          <div className="flex items-baseline gap-1">
            <span className="text-xl font-black text-[#0066FF]">{dailyPrice}</span>
            <span className="text-[10px] font-bold text-gray-700">DT/J</span>
          </div>
          
          {/* Features - Inline */}
          <div className="flex gap-2">
            <div className="flex items-center gap-0.5">
              <Settings className="w-2.5 h-2.5 text-gray-600" />
              <span className="text-[10px] font-semibold text-gray-600">{gearbox.slice(0, 4)}</span>
            </div>
            <div className="flex items-center gap-0.5">
              <Users className="w-2.5 h-2.5 text-gray-600" />
              <span className="text-[10px] font-semibold text-gray-600">{seats}</span>
            </div>
          </div>
        </div>
        
        {/* CTA Buttons - Compact */}
        <div className="grid grid-cols-2 gap-1.5">
          <Link
            href={`/booking?car=${id}`}
            prefetch={true}
            className="bg-black text-white hover:bg-gray-800 py-1.5 font-bold uppercase text-[10px] text-center transition-colors"
          >
            RÉSERVER
          </Link>
          <a
            href={`https://wa.me/21612345678?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 text-white hover:bg-green-600 py-1.5 font-bold uppercase text-[10px] text-center transition-colors"
          >
            WHATSAPP
          </a>
        </div>

        {/* Secondary Actions - Very Compact */}
        <div className="grid grid-cols-3 gap-1">
          <a
            href="tel:+21612345678"
            className="flex items-center justify-center gap-0.5 bg-gray-100 text-gray-900 px-1 py-1 text-[9px] font-semibold hover:bg-gray-200 transition-colors"
          >
            <Phone className="w-2.5 h-2.5" />
            <span className="hidden sm:inline">APPEL</span>
          </a>

          <Link
            href={`/vehicles/${id}/availability`}
            className="flex items-center justify-center gap-0.5 bg-gray-100 text-gray-900 px-1 py-1 text-[9px] font-semibold hover:bg-gray-200 transition-colors"
          >
            <Calendar className="w-2.5 h-2.5" />
            <span className="hidden sm:inline">DATES</span>
          </Link>

          <button
            onClick={handleShare}
            className="flex items-center justify-center gap-0.5 bg-gray-100 text-gray-900 px-1 py-1 text-[9px] font-semibold hover:bg-gray-200 transition-colors"
          >
            <Share2 className="w-2.5 h-2.5" />
            <span className="hidden sm:inline">SHARE</span>
          </button>
        </div>
      </div>
    </div>
  );
};