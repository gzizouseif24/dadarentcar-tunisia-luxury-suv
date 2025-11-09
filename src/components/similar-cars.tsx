import { CarCard } from './car-card';
import type { Car } from '@/lib/car-data';

interface SimilarCarsProps {
  cars: Car[];
}

export function SimilarCars({ cars }: SimilarCarsProps) {
  if (cars.length === 0) {
    return null;
  }

  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-black mb-8 uppercase">
          VÉHICULES SIMILAIRES
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cars.map(car => (
            <CarCard key={car.id} {...car} />
          ))}
        </div>
      </div>
    </section>
  );
}
