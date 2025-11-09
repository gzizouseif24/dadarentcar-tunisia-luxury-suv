import { Car, Briefcase, Mountain, Heart } from "lucide-react";

export const ServicesSection = () => {
  const services = [
    {
      title: "LOCATION PRIVÉE",
      description: "Service de location de voitures de luxe avec flexibilité totale. Louez une voiture pour un jour ou plus sans frais cachés.",
      icon: Car,
    },
    {
      title: "LOCATION BUSINESS",
      description: "Solutions de location professionnelles pour les besoins corporatifs et les voyages d'affaires.",
      icon: Briefcase,
    },
    {
      title: "SERVICE SAFARI DÉSERT",
      description: "Vivez le frisson des aventures dans le désert avec nos véhicules spécialisés.",
      icon: Mountain,
    },
    {
      title: "ÉVÉNEMENTS & MARIAGES",
      description: "Rendez votre journée spéciale inoubliable avec nos véhicules de luxe premium.",
      icon: Heart,
    },
  ];

  return (
    <section className="relative bg-gray-100 text-black py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 uppercase tracking-tight">NOS SERVICES</h2>
          <p className="text-gray-700 font-semibold max-w-3xl mx-auto text-sm">
            Spécialistes en location de voitures de luxe en Tunisie
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white border border-gray-200 p-8 hover:shadow-lg transition-all"
              >
                <Icon className="w-12 h-12 mb-4 text-[#0066FF]" strokeWidth={2} />
                <h3 className="text-xl font-bold mb-3 uppercase tracking-tight">{service.title}</h3>
                <p className="font-medium leading-relaxed text-gray-700">{service.description}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center bg-white p-8 shadow-md">
          <p className="text-black font-bold mb-6 uppercase text-lg">
            LIVRAISON PARTOUT EN TUNISIE
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm font-bold uppercase">
            <div className="bg-gray-100 p-4">LIVRAISON À DOMICILE</div>
            <div className="bg-gray-100 p-4">SERVICE AÉROPORT</div>
            <div className="bg-gray-100 p-4">LOCATION BUSINESS</div>
            <div className="bg-gray-100 p-4">DISPONIBLE 24/7</div>
          </div>
        </div>
      </div>
    </section>
  );
};
