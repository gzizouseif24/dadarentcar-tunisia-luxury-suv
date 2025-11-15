import Link from "next/link";
import { Phone, Mail, MapPin, Facebook, Instagram, MessageCircle } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="text-2xl font-black uppercase">
                <span className="text-[#0066FF]">DADA</span>
                <span className="text-white">RENTCAR</span>
              </div>
              <span className="text-2xl">🇹🇳</span>
            </div>
            <p className="text-white font-bold text-sm uppercase">
              LOCATION DE VOITURES DE LUXE & SUV TUNISIE
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-black mb-4 uppercase tracking-wide">LIENS</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-white hover:text-[#0066FF] transition-colors font-bold uppercase">
                  ACCUEIL
                </Link>
              </li>
              <li>
                <Link href="/vehicles" className="text-white hover:text-[#0066FF] transition-colors font-bold uppercase">
                  VÉHICULES
                </Link>
              </li>
              <li>
                <Link href="/special-offers" className="text-white hover:text-[#0066FF] transition-colors font-bold uppercase">
                  OFFRES SPÉCIALES
                </Link>
              </li>
              <li>
                <Link href="/locations" className="text-white hover:text-[#0066FF] transition-colors font-bold uppercase">
                  LOCATIONS
                </Link>
              </li>
              <li>
                <Link href="/blogs" className="text-white hover:text-[#0066FF] transition-colors font-bold uppercase">
                  BLOGS
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white hover:text-[#0066FF] transition-colors font-bold uppercase">
                  CONTACT
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-black mb-4 uppercase tracking-wide">CONTACT</h3>
            <ul className="space-y-3 text-sm text-white">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#0066FF]" strokeWidth={3} />
                <a href="tel:+21612345678" className="hover:text-[#0066FF] transition-colors font-bold">
                  +216 12 345 678
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-[#0066FF]" strokeWidth={3} />
                <a href="https://wa.me/21612345678" className="hover:text-[#0066FF] transition-colors font-bold">
                  WHATSAPP
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#0066FF]" strokeWidth={3} />
                <a href="mailto:info@dadarentcar.tn" className="hover:text-[#0066FF] transition-colors font-bold">
                  INFO@DADARENTCAR.TN
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#0066FF] mt-1 flex-shrink-0" strokeWidth={3} />
                <span className="font-bold">TUNIS, TUNISIA</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-white font-bold mb-4 uppercase tracking-wide">SUIVEZ-NOUS</h3>
            <div className="flex gap-3">
              <a
                href="https://facebook.com/dadarentcar"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#0066FF] hover:bg-blue-700 p-3 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" strokeWidth={2} />
              </a>
              <a
                href="https://instagram.com/dadarentcar"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#0066FF] hover:bg-blue-700 p-3 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" strokeWidth={2} />
              </a>
              <a
                href="https://wa.me/21612345678"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#0066FF] hover:bg-blue-700 p-3 transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" strokeWidth={2} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p className="font-semibold">&copy; {new Date().getFullYear()} DadaRentCar. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};