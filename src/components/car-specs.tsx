import { Settings, Fuel, Users, Gauge, DoorOpen, Luggage } from 'lucide-react';
import type { Car } from '@/lib/car-data';

interface CarSpecsProps {
  car: Car;
}

export function CarSpecs({ car }: CarSpecsProps) {
  return (
    <div className="space-y-8">
      {/* Title & Price */}
      <div>
        <p className="text-sm font-bold text-gray-500 uppercase tracking-wide">
          {car.category}
        </p>
        <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 mt-2">
          {car.brand} {car.name}
        </h1>
        <div className="flex items-baseline gap-2">
          <span className="text-5xl md:text-6xl font-black text-[#0066FF]">
            {car.dailyPrice}
          </span>
          <span className="text-xl font-bold text-gray-700">
            DT / JOUR
          </span>
        </div>
        <p className="text-sm font-semibold text-gray-600 mt-2">
          {car.monthlyPrice} DT / MOIS
        </p>
      </div>
      
      {/* Specifications Grid */}
      <div className="border-t-2 border-b-2 border-gray-200 py-6">
        <h2 className="text-2xl font-black mb-6 uppercase">SPÉCIFICATIONS</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          <div className="flex items-center gap-3">
            <Settings className="w-8 h-8 text-[#0066FF]" strokeWidth={2.5} />
            <div>
              <p className="text-xs text-gray-500 font-semibold uppercase">Transmission</p>
              <p className="font-black text-lg">{car.gearbox}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Fuel className="w-8 h-8 text-[#0066FF]" strokeWidth={2.5} />
            <div>
              <p className="text-xs text-gray-500 font-semibold uppercase">Carburant</p>
              <p className="font-black text-lg">{car.fuelType}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Users className="w-8 h-8 text-[#0066FF]" strokeWidth={2.5} />
            <div>
              <p className="text-xs text-gray-500 font-semibold uppercase">Places</p>
              <p className="font-black text-lg">{car.seats} personnes</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <DoorOpen className="w-8 h-8 text-[#0066FF]" strokeWidth={2.5} />
            <div>
              <p className="text-xs text-gray-500 font-semibold uppercase">Portes</p>
              <p className="font-black text-lg">4</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Luggage className="w-8 h-8 text-[#0066FF]" strokeWidth={2.5} />
            <div>
              <p className="text-xs text-gray-500 font-semibold uppercase">Bagages</p>
              <p className="font-black text-lg">3 sacs</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Gauge className="w-8 h-8 text-[#0066FF]" strokeWidth={2.5} />
            <div>
              <p className="text-xs text-gray-500 font-semibold uppercase">Statut</p>
              <p className="font-black text-lg">{car.status === "Available" ? "Disponible" : car.status}</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Features */}
      <div>
        <h2 className="text-2xl font-black mb-6 uppercase">ÉQUIPEMENTS INCLUS</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="flex items-center gap-3 bg-gray-50 p-3">
            <span className="text-green-500 text-xl font-black">✓</span>
            <span className="font-bold">Climatisation</span>
          </div>
          <div className="flex items-center gap-3 bg-gray-50 p-3">
            <span className="text-green-500 text-xl font-black">✓</span>
            <span className="font-bold">GPS Navigation</span>
          </div>
          <div className="flex items-center gap-3 bg-gray-50 p-3">
            <span className="text-green-500 text-xl font-black">✓</span>
            <span className="font-bold">Bluetooth</span>
          </div>
          <div className="flex items-center gap-3 bg-gray-50 p-3">
            <span className="text-green-500 text-xl font-black">✓</span>
            <span className="font-bold">Caméra de recul</span>
          </div>
          <div className="flex items-center gap-3 bg-gray-50 p-3">
            <span className="text-green-500 text-xl font-black">✓</span>
            <span className="font-bold">Sièges en cuir</span>
          </div>
          <div className="flex items-center gap-3 bg-gray-50 p-3">
            <span className="text-green-500 text-xl font-black">✓</span>
            <span className="font-bold">Régulateur de vitesse</span>
          </div>
          <div className="flex items-center gap-3 bg-gray-50 p-3">
            <span className="text-green-500 text-xl font-black">✓</span>
            <span className="font-bold">Système audio premium</span>
          </div>
          <div className="flex items-center gap-3 bg-gray-50 p-3">
            <span className="text-green-500 text-xl font-black">✓</span>
            <span className="font-bold">Ports USB</span>
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="bg-gray-50 p-6">
        <h2 className="text-2xl font-black mb-4 uppercase">À PROPOS</h2>
        <p className="text-gray-700 font-semibold leading-relaxed">
          Le {car.brand} {car.name} est un {car.category.toLowerCase()} exceptionnel qui combine puissance, 
          confort et technologie. Avec sa transmission {car.gearbox.toLowerCase()}, son moteur {car.fuelType.toLowerCase()} 
          et sa capacité de {car.seats} places, ce véhicule est parfait pour vos aventures en Tunisie. 
          Profitez d'une expérience de conduite premium avec tous les équipements modernes inclus.
        </p>
      </div>
    </div>
  );
}
