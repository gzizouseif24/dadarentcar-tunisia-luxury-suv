"use client";

import Link from "next/link";
import { Phone, Menu, X } from "lucide-react";
import { useState } from "react";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-black/95 backdrop-blur-sm border-b border-yellow/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="text-2xl font-bold">
              <span className="text-yellow">Dada</span>
              <span className="text-white">RentCar</span>
            </div>
            <span className="text-2xl">🇹🇳</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-white hover:text-yellow transition-colors">
              Home
            </Link>
            <Link href="/vehicles" className="text-white hover:text-yellow transition-colors">
              Vehicles
            </Link>
            <Link href="/vehicles?category=suv" className="text-white hover:text-yellow transition-colors">
              SUVs
            </Link>
            <Link href="/vehicles?category=luxury" className="text-white hover:text-yellow transition-colors">
              Luxury
            </Link>
            <Link href="/special-offers" className="text-white hover:text-yellow transition-colors">
              Special Offers
            </Link>
            <Link href="/contact" className="text-white hover:text-yellow transition-colors">
              Contact
            </Link>
          </div>

          {/* Call Now Button */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:+21612345678"
              className="flex items-center gap-2 bg-yellow text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow/90 transition-colors"
            >
              <Phone className="w-5 h-5" />
              Call Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white p-2"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4 border-t border-yellow/20">
            <Link
              href="/"
              className="block text-white hover:text-yellow transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/vehicles"
              className="block text-white hover:text-yellow transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Vehicles
            </Link>
            <Link
              href="/vehicles?category=suv"
              className="block text-white hover:text-yellow transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              SUVs
            </Link>
            <Link
              href="/vehicles?category=luxury"
              className="block text-white hover:text-yellow transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Luxury
            </Link>
            <Link
              href="/special-offers"
              className="block text-white hover:text-yellow transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Special Offers
            </Link>
            <Link
              href="/contact"
              className="block text-white hover:text-yellow transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <a
              href="tel:+21612345678"
              className="flex items-center gap-2 bg-yellow text-black px-6 py-3 rounded-lg font-semibold w-full justify-center"
            >
              <Phone className="w-5 h-5" />
              Call Now
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};