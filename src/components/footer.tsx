import Link from "next/link";
import { Phone, Mail, MapPin, Facebook, Instagram, MessageCircle } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-black text-white border-t border-yellow/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="text-2xl font-bold">
                <span className="text-yellow">Dada</span>
                <span className="text-white">RentCar</span>
              </div>
              <span className="text-2xl">🇹🇳</span>
            </div>
            <p className="text-gray-400 text-sm">
              Luxury & SUV Car Rental Tunisia – Navigate Every Adventure with Strength, Style, and Comfort.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-yellow font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-gray-400 hover:text-yellow transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/vehicles" className="text-gray-400 hover:text-yellow transition-colors">
                  All Vehicles
                </Link>
              </li>
              <li>
                <Link href="/vehicles?category=suv" className="text-gray-400 hover:text-yellow transition-colors">
                  SUVs
                </Link>
              </li>
              <li>
                <Link href="/vehicles?category=luxury" className="text-gray-400 hover:text-yellow transition-colors">
                  Luxury Cars
                </Link>
              </li>
              <li>
                <Link href="/special-offers" className="text-gray-400 hover:text-yellow transition-colors">
                  Special Offers
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-yellow font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-yellow" />
                <a href="tel:+21612345678" className="hover:text-yellow transition-colors">
                  +216 12 345 678
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-yellow" />
                <a href="https://wa.me/21612345678" className="hover:text-yellow transition-colors">
                  WhatsApp
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-yellow" />
                <a href="mailto:info@dadarentcar.tn" className="hover:text-yellow transition-colors">
                  info@dadarentcar.tn
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-yellow mt-1 flex-shrink-0" />
                <span>Tunis, Tunisia</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-yellow font-semibold mb-4">Follow Us</h3>
            <div className="flex gap-3">
              <a
                href="https://facebook.com/dadarentcar"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 p-3 rounded-full transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com/dadarentcar"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 hover:opacity-90 p-3 rounded-full transition-opacity"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/21612345678"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 p-3 rounded-full transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-yellow/20 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} DadaRentCar. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};