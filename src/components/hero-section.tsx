"use client";

import { MessageCircle, Phone, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const heroSlides = [
  {
    id: 1,
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/f5ea3f92-a122-434f-ad3a-e1b4b3ccf56c/generated_images/luxury-black-suv-range-rover-or-similar--bc556d03-20251107204736.jpg",
    title: "WE DELIVER",
    subtitle: "MONSTERS",
    description: "Navigate Every Adventure with Strength, Style, and Comfort"
  },
  {
    id: 2,
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/f5ea3f92-a122-434f-ad3a-e1b4b3ccf56c/generated_images/professional-automotive-photography-of-a-06f4308b-20251107205442.jpg",
    title: "LUXURY",
    subtitle: "REDEFINED",
    description: "Experience the Ultimate in Premium Car Rental"
  },
  {
    id: 3,
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/f5ea3f92-a122-434f-ad3a-e1b4b3ccf56c/generated_images/professional-automotive-photography-of-a-6ac31a2f-20251107205443.jpg",
    title: "DESERT",
    subtitle: "ADVENTURE",
    description: "Conquer Tunisia's Landscapes in Style"
  },
  {
    id: 4,
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/f5ea3f92-a122-434f-ad3a-e1b4b3ccf56c/generated_images/professional-automotive-photography-of-a-7ec7502f-20251107205442.jpg",
    title: "COASTAL",
    subtitle: "JOURNEYS",
    description: "Drive Along Tunisia's Mediterranean Beauty"
  }
];

export const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const currentSlideData = heroSlides[currentSlide];

  return (
    <section className="relative bg-black text-white overflow-hidden h-[700px] md:h-[800px]">
      {/* Background Images with Animation */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent z-10" />
          <img
            src={currentSlideData.image}
            alt="Luxury Car"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="max-w-3xl">
          {/* Main Heading with Modern Typography */}
          <motion.div
            key={`title-${currentSlide}`}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-8"
          >
            <h1 className="text-6xl md:text-8xl font-black leading-none mb-2">
              {currentSlideData.title}
            </h1>
            <h2 className="text-6xl md:text-8xl font-black leading-none">
              <span className="text-yellow italic transform inline-block -skew-x-6">{currentSlideData.subtitle}</span>
            </h2>
          </motion.div>
          
          <motion.p
            key={`desc-${currentSlide}`}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl"
          >
            {currentSlideData.description}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              href="/vehicles"
              className="flex items-center justify-center gap-3 bg-yellow text-black px-10 py-5 rounded-xl font-black text-lg hover:bg-yellow/90 transition-all hover:scale-105 shadow-2xl"
            >
              VIEW CARS
              <ArrowRight className="w-6 h-6" />
            </Link>

            <a
              href="https://wa.me/21612345678"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-green-500 text-white px-10 py-5 rounded-xl font-black text-lg hover:bg-green-600 transition-all hover:scale-105 shadow-2xl"
            >
              <MessageCircle className="w-6 h-6" />
              WHATSAPP
            </a>

            <a
              href="tel:+21612345678"
              className="flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-10 py-5 rounded-xl font-black text-lg hover:bg-white/20 transition-all"
            >
              <Phone className="w-6 h-6" />
              CALL NOW
            </a>
          </motion.div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <div className="absolute inset-y-0 left-0 right-0 z-30 flex items-center justify-between px-4 md:px-8 pointer-events-none">
        <button
          onClick={prevSlide}
          className="pointer-events-auto bg-yellow text-black p-4 rounded-full hover:bg-yellow/90 transition-all hover:scale-110 shadow-xl"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-7 h-7" />
        </button>
        <button
          onClick={nextSlide}
          className="pointer-events-auto bg-yellow text-black p-4 rounded-full hover:bg-yellow/90 transition-all hover:scale-110 shadow-xl"
          aria-label="Next slide"
        >
          <ChevronRight className="w-7 h-7" />
        </button>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-30 flex gap-3">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 rounded-full transition-all ${
              index === currentSlide ? "bg-yellow w-12" : "bg-white/40 w-2 hover:bg-white/60"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-10" />
    </section>
  );
};