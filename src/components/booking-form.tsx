"use client";

import { useState } from 'react';
import { Calendar, MapPin, Phone } from 'lucide-react';
import type { Car } from '@/lib/car-data';

interface BookingFormProps {
  car: Car;
}

export function BookingForm({ car }: BookingFormProps) {
  const [pickupDate, setPickupDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [days, setDays] = useState(1);

  const calculateDays = (pickup: string, returnD: string) => {
    if (pickup && returnD) {
      const start = new Date(pickup);
      const end = new Date(returnD);
      const diffTime = Math.abs(end.getTime() - start.getTime());
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      setDays(diffDays || 1);
    }
  };

  const handlePickupChange = (date: string) => {
    setPickupDate(date);
    calculateDays(date, returnDate);
  };

  const handleReturnChange = (date: string) => {
    setReturnDate(date);
    calculateDays(pickupDate, date);
  };

  const totalPrice = car.dailyPrice * days;
  
  return (
    <div className="sticky top-24 border-2 border-gray-300 p-6 bg-white shadow-lg">
      <h3 className="text-2xl font-black mb-6 uppercase">RÉSERVER</h3>
      
      <div className="space-y-4">
        {/* Pickup Date */}
        <div>
          <label className="block text-sm font-bold mb-2 uppercase">
            <Calendar className="w-4 h-4 inline mr-2" />
            Date de prise en charge
          </label>
          <input
            type="date"
            value={pickupDate}
            onChange={(e) => handlePickupChange(e.target.value)}
            className="w-full border-2 border-gray-300 px-4 py-3 font-semibold focus:border-[#0066FF] focus:outline-none"
            min={new Date().toISOString().split('T')[0]}
          />
        </div>
        
        {/* Return Date */}
        <div>
          <label className="block text-sm font-bold mb-2 uppercase">
            <Calendar className="w-4 h-4 inline mr-2" />
            Date de retour
          </label>
          <input
            type="date"
            value={returnDate}
            onChange={(e) => handleReturnChange(e.target.value)}
            className="w-full border-2 border-gray-300 px-4 py-3 font-semibold focus:border-[#0066FF] focus:outline-none"
            min={pickupDate || new Date().toISOString().split('T')[0]}
          />
        </div>
        
        {/* Location */}
        <div>
          <label className="block text-sm font-bold mb-2 uppercase">
            <MapPin className="w-4 h-4 inline mr-2" />
            Lieu de prise en charge
          </label>
          <select className="w-full border-2 border-gray-300 px-4 py-3 font-semibold focus:border-[#0066FF] focus:outline-none">
            <option>Tunis Aéroport</option>
            <option>Tunis Centre-ville</option>
            <option>Sousse</option>
            <option>Monastir</option>
            <option>Hammamet</option>
            <option>Djerba</option>
          </select>
        </div>
        
        {/* Price Summary */}
        <div className="border-t-2 border-gray-300 pt-4 mt-6 space-y-2">
          <div className="flex justify-between text-sm">
            <span className="font-semibold">Prix par jour</span>
            <span className="font-bold">{car.dailyPrice} DT</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="font-semibold">Nombre de jours</span>
            <span className="font-bold">{days}</span>
          </div>
          <div className="flex justify-between text-2xl font-black text-[#0066FF] pt-2 border-t border-gray-200">
            <span>TOTAL</span>
            <span>{totalPrice} DT</span>
          </div>
        </div>
        
        {/* Book Button */}
        <button className="w-full bg-black text-white py-4 font-bold uppercase hover:bg-gray-800 transition-colors text-sm">
          RÉSERVER MAINTENANT
        </button>
        
        {/* WhatsApp */}
        <a
          href={`https://wa.me/21612345678?text=Bonjour! Je veux réserver ${car.brand} ${car.name} (${car.dailyPrice} DT/jour)`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full bg-green-500 text-white py-4 font-bold uppercase hover:bg-green-600 transition-colors flex items-center justify-center gap-2 text-sm"
        >
          <Phone className="w-5 h-5" />
          CONTACTER PAR WHATSAPP
        </a>

        {/* Call */}
        <a
          href="tel:+21612345678"
          className="w-full bg-gray-100 text-gray-900 py-3 font-bold uppercase hover:bg-gray-200 transition-colors flex items-center justify-center gap-2 text-sm"
        >
          <Phone className="w-4 h-4" />
          APPELER: +216 12 345 678
        </a>
      </div>
    </div>
  );
}
