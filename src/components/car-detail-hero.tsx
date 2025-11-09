"use client";

import { useState } from 'react';
import Image from 'next/image';
import type { Car } from '@/lib/car-data';

interface CarDetailHeroProps {
  car: Car;
}

export function CarDetailHero({ car }: CarDetailHeroProps) {
  const [selectedImage, setSelectedImage] = useState(0);
  
  // For now, use same image 4 times (can add more images later)
  const images = [car.image, car.image, car.image, car.image];
  
  return (
    <div className="bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Main Image */}
        <div className="relative aspect-[16/9] mb-4 bg-white">
          <Image
            src={images[selectedImage]}
            alt={`${car.brand} ${car.name}`}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 1280px) 100vw, 1280px"
          />
          
          {/* Badge if exists */}
          {car.badge && (
            <div className="absolute top-4 right-4 bg-red-500 px-4 py-2 shadow-md">
              <span className="text-sm font-bold uppercase tracking-wide text-white">
                {car.badge}
              </span>
            </div>
          )}
        </div>
        
        {/* Thumbnail Gallery */}
        <div className="grid grid-cols-4 gap-4">
          {images.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedImage(idx)}
              className={`relative aspect-[4/3] border-4 transition-all ${
                selectedImage === idx 
                  ? 'border-[#0066FF]' 
                  : 'border-gray-300 hover:border-gray-400'
              }`}
            >
              <Image
                src={img}
                alt={`Vue ${idx + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 25vw, 20vw"
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
