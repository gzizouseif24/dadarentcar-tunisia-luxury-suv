import Link from "next/link";

export const PromoBanner = () => {
  return (
    <section className="relative py-16 px-4 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-50 via-white to-gray-50" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          {/* Left side - Car Image */}
          <div className="lg:w-1/2 relative">
            <div className="relative">
              <img
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/f5ea3f92-a122-434f-ad3a-e1b4b3ccf56c/generated_images/professional-automotive-photography-of-a-06f4308b-20251107205442.jpg"
                alt="Modified Luxury SUV"
                className="w-full h-auto rounded-3xl shadow-2xl"
              />
              {/* Blue accent badges */}
              <div className="absolute -top-4 -right-4 bg-blue-600 text-white px-6 py-3 rounded-full font-black text-2xl transform rotate-12 shadow-lg">
                2024
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <div className="inline-block bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-bold mb-4">
              EXCLUSIVE OFFER
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-blue-900 mb-4">
              Earn Emirates Airmiles
            </h2>
            <h3 className="text-3xl md:text-5xl font-bold text-blue-700 mb-6">
              When You Rent From US...
            </h3>
            <p className="text-xl text-blue-600 mb-8 max-w-xl">
              Enjoy exclusive benefits and earn rewards with every rental. Experience luxury travel with our premium fleet.
            </p>
            <Link
              href="/special-offers"
              className="inline-block bg-blue-600 text-white px-10 py-5 rounded-xl font-bold text-xl hover:bg-blue-700 transition-all shadow-lg hover:shadow-2xl hover:-translate-y-1"
            >
              Know More
            </Link>

            {/* Mobile phone mockup with Emirates app */}
            <div className="mt-8 flex justify-center lg:justify-start">
              <div className="w-32 h-64 bg-gradient-to-b from-red-600 to-red-800 rounded-3xl shadow-2xl flex items-center justify-center border-4 border-black">
                <div className="text-white text-center">
                  <div className="text-6xl mb-2">✈️</div>
                  <div className="text-xs font-bold">Emirates</div>
                  <div className="text-xs">Skywards</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
