"use client";

import { MapPin, Phone, Mail, Clock } from "lucide-react";

const locations = [
  {
    id: "1",
    name: "Bureau Principal - Tunis Centre",
    address: "Avenue Habib Bourguiba",
    city: "Tunis",
    phone: "+216 12 345 678",
    email: "tunis@dadarentcar.tn",
    isMain: true,
    hours: {
      weekdays: "8h00 - 20h00",
      saturday: "9h00 - 18h00",
      sunday: "10h00 - 16h00"
    },
    services: [
      "Location de véhicules",
      "Service de livraison",
      "Assistance 24/7",
      "Véhicules de remplacement"
    ]
  },
  {
    id: "2",
    name: "Aéroport Tunis-Carthage",
    address: "Terminal Principal",
    city: "Tunis",
    phone: "+216 12 345 679",
    email: "airport@dadarentcar.tn",
    isMain: false,
    hours: {
      weekdays: "6h00 - 23h00",
      saturday: "6h00 - 23h00",
      sunday: "6h00 - 23h00"
    },
    services: [
      "Prise en charge à l'aéroport",
      "Retour rapide",
      "Service prioritaire"
    ]
  },
  {
    id: "3",
    name: "Sousse Centre",
    address: "Avenue de la Corniche",
    city: "Sousse",
    phone: "+216 12 345 680",
    email: "sousse@dadarentcar.tn",
    isMain: false,
    hours: {
      weekdays: "8h00 - 19h00",
      saturday: "9h00 - 17h00",
      sunday: "Fermé"
    },
    services: [
      "Location de véhicules",
      "Service de livraison local",
      "Assistance routière"
    ]
  },
  {
    id: "4",
    name: "Hammamet",
    address: "Zone Touristique Yasmine",
    city: "Hammamet",
    phone: "+216 12 345 681",
    email: "hammamet@dadarentcar.tn",
    isMain: false,
    hours: {
      weekdays: "8h00 - 19h00",
      saturday: "9h00 - 17h00",
      sunday: "10h00 - 15h00"
    },
    services: [
      "Location de véhicules",
      "Livraison aux hôtels",
      "Véhicules de luxe"
    ]
  }
];

export default function LocationsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#0066FF] to-blue-400 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Nos Locations</h1>
          <p className="text-xl text-white/90">
            Trouvez l'agence DadaRentCar la plus proche de vous
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Interactive Map */}
        <div className="mb-12 bg-white rounded-xl shadow-md overflow-hidden">
          <div className="aspect-video relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d102974.03932766!2d10.098800849999999!3d36.8064948!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd337f5e7ef543%3A0xd671924e714a0275!2sTunis%2C%20Tunisia!5e0!3m2!1sen!2s!4v1699999999999!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0"
            ></iframe>
          </div>
          <div className="p-4 bg-blue-50 border-t-2 border-[#0066FF]">
            <div className="flex items-center gap-2 text-[#0066FF]">
              <MapPin className="w-5 h-5" />
              <p className="font-semibold">Cliquez sur la carte pour explorer nos emplacements en Tunisie</p>
            </div>
          </div>
        </div>

        {/* Locations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {locations.map((location) => (
            <div
              key={location.id}
              className={`bg-white rounded-xl shadow-md p-6 ${
                location.isMain ? 'border-2 border-[#0066FF]' : ''
              }`}
            >
              {location.isMain && (
                <div className="inline-block bg-[#0066FF] text-white px-3 py-1 rounded-full text-xs font-bold mb-4">
                  BUREAU PRINCIPAL
                </div>
              )}
              
              <h3 className="text-2xl font-bold text-black mb-4">{location.name}</h3>

              {/* Address */}
              <div className="flex items-start gap-3 mb-3">
                <MapPin className="w-5 h-5 text-[#0066FF] mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-700 font-semibold">{location.address}</p>
                  <p className="text-gray-600">{location.city}</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3 mb-3">
                <Phone className="w-5 h-5 text-[#0066FF]" />
                <a href={`tel:${location.phone}`} className="text-gray-700 hover:text-[#0066FF] font-semibold">
                  {location.phone}
                </a>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3 mb-4">
                <Mail className="w-5 h-5 text-[#0066FF]" />
                <a href={`mailto:${location.email}`} className="text-gray-700 hover:text-[#0066FF] font-semibold">
                  {location.email}
                </a>
              </div>

              {/* Hours */}
              <div className="mb-4 p-4 bg-blue-50 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="w-5 h-5 text-[#0066FF]" />
                  <h4 className="font-bold text-black">Horaires d'Ouverture</h4>
                </div>
                <div className="space-y-1 text-sm text-gray-700">
                  <div className="flex justify-between">
                    <span>Lundi - Vendredi:</span>
                    <span className="font-semibold">{location.hours.weekdays}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Samedi:</span>
                    <span className="font-semibold">{location.hours.saturday}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Dimanche:</span>
                    <span className="font-semibold">{location.hours.sunday}</span>
                  </div>
                </div>
              </div>

              {/* Services */}
              <div>
                <h4 className="font-bold text-black mb-2">Services Disponibles</h4>
                <ul className="space-y-1">
                  {location.services.map((service, index) => (
                    <li key={index} className="text-sm text-gray-700 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-[#0066FF] rounded-full"></span>
                      {service}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-12 bg-gradient-to-r from-[#0066FF] to-blue-400 rounded-xl p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Besoin d'Aide ?</h2>
          <p className="text-lg mb-6 text-white/90">
            Notre équipe est disponible pour répondre à toutes vos questions
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-[#0066FF] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Contactez-Nous
          </a>
        </div>
      </div>
    </div>
  );
}
