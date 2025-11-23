/**
 * Site-wide configuration
 * Centralized constants for DadaRentCar
 */

export const siteConfig = {
  name: "DadaRentCar",
  description: "Location de Voitures de Luxe & SUV Tunisie",
  tagline: "Navigate Every Adventure with Strength, Style, and Comfort",

  contact: {
    phone: "+216 12 345 678",
    phoneRaw: "+21612345678",
    email: "info@dadarentcar.tn",
    whatsapp: "+21612345678",
    whatsappUrl: "https://wa.me/21612345678",
  },

  social: {
    facebook: "https://facebook.com/dadarentcar",
    instagram: "https://instagram.com/dadarentcar",
  },

  location: {
    city: "Tunis",
    country: "Tunisia",
    address: "Tunis, Tunisia",
  },

  business: {
    currency: "DT",
    currencySymbol: "DT",
    yearsInBusiness: 10,
  },
} as const;

export const whatsappMessage = (carName?: string) => {
  const baseMessage = "Bonjour, je suis intéressé par la location d'une voiture.";
  if (carName) {
    return `${baseMessage} Je voudrais des informations sur ${carName}.`;
  }
  return baseMessage;
};
