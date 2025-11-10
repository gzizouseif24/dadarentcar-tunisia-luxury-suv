"use client";

import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const heroSlides = [
  {
    id: 1,
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/f5ea3f92-a122-434f-ad3a-e1b4b3ccf56c/generated_images/luxury-black-suv-range-rover-or-similar--bc556d03-20251107204736.jpg",
    title: "NOUS LIVRONS",
    subtitle: "DES MONSTRES",
    description: "Explorez Chaque Aventure avec Puissance, Style et Confort"
  },
  {
    id: 2,
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/f5ea3f92-a122-434f-ad3a-e1b4b3ccf56c/generated_images/professional-automotive-photography-of-a-06f4308b-20251107205442.jpg",
    title: "LUXE",
    subtitle: "REDÉFINI",
    description: "Découvrez l'Excellence en Location de Voiture Premium"
  },
  {
    id: 3,
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/f5ea3f92-a122-434f-ad3a-e1b4b3ccf56c/generated_images/professional-automotive-photography-of-a-6ac31a2f-20251107205443.jpg",
    title: "DÉSERT",
    subtitle: "AVENTURE",
    description: "Conquérez les Paysages Tunisiens avec Style"
  },
  {
    id: 4,
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/f5ea3f92-a122-434f-ad3a-e1b4b3ccf56c/generated_images/professional-automotive-photography-of-a-7ec7502f-20251107205442.jpg",
    title: "CÔTE",
    subtitle: "VOYAGES",
    description: "Roulez le Long de la Beauté Méditerranéenne de la Tunisie"
  }
];

export const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      if (!isTransitioning) {
        setIsTransitioning(true);
        setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
        setTimeout(() => setIsTransitioning(false), 700);
      }
    }, 4000);

    return () => clearInterval(timer);
  }, [isTransitioning]);

  const nextSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
      setTimeout(() => setIsTransitioning(false), 700);
    }
  };

  const prevSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
      setTimeout(() => setIsTransitioning(false), 700);
    }
  };

  const currentSlideData = heroSlides[currentSlide];

  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 overflow-hidden">
      {/* Hero Image with Overlay */}
      <div className="relative h-[500px] sm:h-[600px] lg:h-[700px] w-full overflow-hidden">
        <AnimatePresence initial={false} mode="sync">
          <motion.div
            key={currentSlide}
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ 
              duration: 0.8, 
              ease: [0.32, 0.72, 0, 1]
            }}
            className="absolute inset-0"
          >
            <Image
              src={currentSlideData.image}
              alt={currentSlideData.title}
              fill
              priority={currentSlide === 0}
              quality={95}
              sizes="100vw"
              className="object-cover object-center"
            />
            {/* Dark Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
          </motion.div>
        </AnimatePresence>

        {/* Content Overlay */}
        <div className="absolute inset-0 z-20 flex items-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="space-y-6"
                >
                  {/* Title - Heavy & Bold */}
                  <div className="space-y-2">
                    <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black text-white tracking-tighter uppercase">
                      {currentSlideData.title}
                    </h1>
                    <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black text-[#0066FF] uppercase">
                      {currentSlideData.subtitle}
                    </h2>
                  </div>

                  {/* Description */}
                  <p className="text-lg sm:text-xl text-white font-bold max-w-xl uppercase tracking-wide">
                    {currentSlideData.description}
                  </p>

                  {/* CTA Button */}
                  <div className="pt-4">
                    <Link
                      href="/vehicles"
                      className="inline-flex items-center justify-center gap-2 bg-[#0066FF] hover:bg-white text-white hover:text-[#0066FF] border-4 border-white px-8 py-4 font-black uppercase text-sm tracking-wide transition-colors rounded-lg"
                    >
                      VOIR NOS VÉHICULES
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                if (!isTransitioning) {
                  setIsTransitioning(true);
                  setCurrentSlide(index);
                  setTimeout(() => setIsTransitioning(false), 700);
                }
              }}
              className={`h-1.5 rounded-full transition-all ${
                index === currentSlide 
                  ? 'w-12 bg-[#0066FF]' 
                  : 'w-8 bg-white/50 hover:bg-white/70'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Navigation Arrows */}
        <div className="absolute bottom-8 right-8 z-30 flex gap-2">
          <button
            onClick={prevSlide}
            className="bg-white/10 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/20 transition-all border border-white/20"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="bg-white/10 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/20 transition-all border border-white/20"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};