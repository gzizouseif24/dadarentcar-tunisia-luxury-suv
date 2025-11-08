export const ServicesSection = () => {
  const services = [
    {
      title: "Private Car Rental in Dubai",
      description: "Luxury car rental service with full flexibility. Rent a car for a day or longer with no hidden fees.",
      icon: "🚗",
    },
    {
      title: "Rent a Car in Dubai for Business",
      description: "Professional car rental solutions for corporate needs and business travel.",
      icon: "💼",
    },
    {
      title: "Desert Safari Service",
      description: "Experience the thrill of desert adventures with our specialized safari vehicles.",
      icon: "🏜️",
    },
    {
      title: "Wedding and Event Car Rental",
      description: "Make your special day unforgettable with our premium luxury vehicles.",
      icon: "💒",
    },
  ];

  return (
    <section className="relative bg-black text-white py-20 overflow-hidden">
      {/* Decorative brush strokes */}
      <div className="absolute top-0 left-0 right-0 h-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSI4MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMCw0MCBRMjUwLDAgNTAwLDQwIFQ3NTAsNDAgVDEwMDAsNDAgVDEyNTAsNDAgVDE1MDAsNDAgVDE3NTAsNDAgVDIwMDAsNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iNCIgb3BhY2l0eT0iMC4xIi8+PC9zdmc+')] bg-repeat-x" />
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSI4MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMCw0MCBRMjUwLDAgNTAwLDQwIFQ3NTAsNDAgVDEwMDAsNDAgVDEyNTAsNDAgVDE1MDAsNDAgVDE3NTAsNDAgVDIwMDAsNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iNCIgb3BhY2l0eT0iMC4xIi8+PC9zdmc+')] bg-repeat-x" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Premium Services</h2>
          <p className="text-gray-400 max-w-3xl mx-auto">
            At Faster Rent a Car, we specialize in fulfilling all your car rental needs in Tunisia. We offer the widest
            range of luxury car rentals in Tunisia, ensuring you can find rental services in the city for desert safaris, business, or vacations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all hover:border-yellow/50"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-400 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-300 mb-6">
            We deliver exotic cars for delivery to your door throughout Tunisia. No matter where you are located!
            Delivery is available to your home, flat, apartment, office, or any hotel
          </p>
          <ul className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
            <li>✓ Delivery is available at your home, flat, apartment, office, or at any hotel</li>
            <li>✓ Airport delivery and pick-up services are available for everyone</li>
            <li>✓ Full day business, private and wedding car rental services are available in our city</li>
            <li>✓ We have your dream car available at an affordable any day of the week, or any time</li>
          </ul>
        </div>
      </div>
    </section>
  );
};
