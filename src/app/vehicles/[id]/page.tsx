import { notFound } from 'next/navigation';
import { cars, getCarById, getSimilarCars } from '@/lib/car-data';
import { CarDetailHero } from '@/components/car-detail-hero';
import { CarSpecs } from '@/components/car-specs';
import { BookingForm } from '@/components/booking-form';
import { SimilarCars } from '@/components/similar-cars';

export async function generateStaticParams() {
  return cars.map((car) => ({
    id: car.id,
  }));
}

export async function generateMetadata({ params }: { params: { id: string } }) {
  const car = getCarById(params.id);
  
  if (!car) {
    return {
      title: 'Véhicule non trouvé',
    };
  }

  return {
    title: `${car.brand} ${car.name} - Location | DadaRentCar`,
    description: `Louez ${car.brand} ${car.name} à partir de ${car.dailyPrice} DT/jour. ${car.category} avec ${car.seats} places. Réservez maintenant!`,
  };
}

export default function CarDetailPage({ params }: { params: { id: string } }) {
  const car = getCarById(params.id);
  
  if (!car) {
    notFound();
  }

  const similarCars = getSimilarCars(car.id, car.category);

  return (
    <div className="min-h-screen bg-white">
      <CarDetailHero car={car} />
      
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left: Car Info */}
          <div className="lg:col-span-2">
            <CarSpecs car={car} />
          </div>
          
          {/* Right: Booking Form */}
          <div className="lg:col-span-1">
            <BookingForm car={car} />
          </div>
        </div>
      </div>
      
      <SimilarCars cars={similarCars} />
    </div>
  );
}
