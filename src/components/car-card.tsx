"use client";

import { MessageCircle, Phone, Mail, Calendar, Share2, Clock } from "lucide-react";
import Link from "next/link";
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
  const whatsappMessage = encodeURIComponent(
    `Hi! I'm interested in renting the ${brand} ${name}. Can you provide more details?`
  );

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: `${brand} ${name}`,
        text: `Check out this ${brand} ${name} at DadaRentCar Tunisia!`,
        url: window.location.href,
      });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={{ y: -8 }}
      className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 group"
    >
      {/* Image */}
      <div className="relative h-56 bg-black overflow-hidden">
        <motion.img
          src={image}
          alt={`${brand} ${name}`}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

        {/* Status Badge */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className={`absolute top-4 left-4 px-3 py-1.5 rounded-full text-xs font-bold ${
            status === "Available" 
              ? "bg-yellow text-black" 
              : status === "Reserved"
              ? "bg-white text-black"
              : "bg-black/70 text-white border border-white/20"
          }`}
        >
          {status}
        </motion.div>

        {/* Promotion Badge */}
        {badge && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="absolute top-4 right-4 bg-yellow text-black px-3 py-1.5 rounded-full text-xs font-bold"
          >
            {badge}
          </motion.div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Category Tag */}
        <div className="inline-flex items-center gap-2 text-xs font-semibold text-gray-500 mb-3">
          <span className="px-2 py-1 bg-gray-50 rounded">{category}</span>
        </div>

        {/* Car Name */}
        <h3 className="text-2xl font-bold text-black mb-1">{brand}</h3>
        <p className="text-lg text-gray-600 mb-4">{name}</p>

        {/* Specs */}
        <div className="flex items-center gap-4 mb-6 text-sm text-gray-600 pb-6 border-b border-gray-100">
          <div className="flex items-center gap-1.5">
            <span className="text-base">⚙️</span>
            <span>{gearbox}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="text-base">⛽</span>
            <span>{fuelType}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="text-base">👥</span>
            <span>{seats}</span>
          </div>
        </div>

        {/* Pricing */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <div className="text-xs text-gray-500 mb-1">Daily</div>
            <div className="text-2xl font-bold text-yellow">{dailyPrice} DT</div>
          </div>
          <div className="text-right">
            <div className="text-xs text-gray-500 mb-1">Monthly</div>
            <div className="text-2xl font-bold text-yellow">{monthlyPrice} DT</div>
          </div>
        </div>

        {/* Primary Actions */}
        <div className="grid grid-cols-2 gap-3 mb-3">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href={`/booking?car=${id}`}
              className="flex items-center justify-center gap-2 bg-black text-white px-4 py-3 rounded-lg text-sm font-bold hover:bg-gray-900 transition-all"
            >
              Reserve Now
            </Link>
          </motion.div>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={`https://wa.me/21612345678?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-yellow text-black px-4 py-3 rounded-lg text-sm font-bold hover:bg-yellow/90 transition-all"
          >
            <MessageCircle className="w-4 h-4" />
            WhatsApp
          </motion.a>
        </div>

        {/* Secondary Actions */}
        <div className="grid grid-cols-3 gap-2">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="tel:+21612345678"
            className="flex items-center justify-center gap-1.5 bg-gray-50 text-black px-3 py-2.5 rounded-lg text-xs font-semibold hover:bg-gray-100 transition-all"
          >
            <Phone className="w-3.5 h-3.5" />
            Call
          </motion.a>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href={`/vehicles/${id}/availability`}
              className="flex items-center justify-center gap-1.5 bg-gray-50 text-black px-3 py-2.5 rounded-lg text-xs font-semibold hover:bg-gray-100 transition-all"
            >
              <Calendar className="w-3.5 h-3.5" />
              Dates
            </Link>
          </motion.div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleShare}
            className="flex items-center justify-center gap-1.5 bg-gray-50 text-black px-3 py-2.5 rounded-lg text-xs font-semibold hover:bg-gray-100 transition-all"
          >
            <Share2 className="w-3.5 h-3.5" />
            Share
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};