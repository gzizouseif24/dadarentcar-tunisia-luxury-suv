"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone, Menu, X } from "lucide-react";
import { useState } from "react";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="DadaRentCar"
              width={220}
              height={80}
              className="h-16 w-auto object-contain"
              priority
            />
            <span className="text-2xl">🇹🇳</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-black hover:text-[#0066FF] transition-colors font-bold uppercase text-sm tracking-wide">
              ACCUEIL
            </Link>
            <Link href="/vehicles" className="text-black hover:text-[#0066FF] transition-colors font-bold uppercase text-sm tracking-wide">
              VÉHICULES
            </Link>
            <Link href="/vehicles?category=suv" className="text-black hover:text-[#0066FF] transition-colors font-bold uppercase text-sm tracking-wide">
              SUVS
            </Link>
            <Link href="/vehicles?category=luxury" className="text-black hover:text-[#0066FF] transition-colors font-bold uppercase text-sm tracking-wide">
              LUXE
            </Link>
            <Link href="/special-offers" className="text-black hover:text-[#0066FF] transition-colors font-bold uppercase text-sm tracking-wide">
              OFFRES
            </Link>
            <Link href="/contact" className="text-black hover:text-[#0066FF] transition-colors font-bold uppercase text-sm tracking-wide">
              CONTACT
            </Link>
          </div>

          {/* Call Now Button */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:+21612345678"
              className="flex items-center gap-2 bg-black text-white px-6 py-3 font-bold uppercase text-sm hover:bg-gray-800 transition-colors"
            >
              <Phone className="w-5 h-5" />
              APPELEZ
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-black p-2 hover:bg-gray-100 transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-2 border-t border-gray-200">
            <Link
              href="/"
              className="block text-black hover:bg-gray-100 transition-colors py-3 px-4 font-bold uppercase text-sm"
              onClick={() => setIsMenuOpen(false)}
            >
              ACCUEIL
            </Link>
            <Link
              href="/vehicles"
              className="block text-black hover:bg-gray-100 transition-colors py-3 px-4 font-bold uppercase text-sm"
              onClick={() => setIsMenuOpen(false)}
            >
              VÉHICULES
            </Link>
            <Link
              href="/vehicles?category=suv"
              className="block text-black hover:bg-gray-100 transition-colors py-3 px-4 font-bold uppercase text-sm"
              onClick={() => setIsMenuOpen(false)}
            >
              SUVS
            </Link>
            <Link
              href="/vehicles?category=luxury"
              className="block text-black hover:bg-gray-100 transition-colors py-3 px-4 font-bold uppercase text-sm"
              onClick={() => setIsMenuOpen(false)}
            >
              LUXE
            </Link>
            <Link
              href="/special-offers"
              className="block text-black hover:bg-gray-100 transition-colors py-3 px-4 font-bold uppercase text-sm"
              onClick={() => setIsMenuOpen(false)}
            >
              OFFRES
            </Link>
            <Link
              href="/contact"
              className="block text-black hover:bg-gray-100 transition-colors py-3 px-4 font-bold uppercase text-sm"
              onClick={() => setIsMenuOpen(false)}
            >
              CONTACT
            </Link>
            <a
              href="tel:+21612345678"
              className="flex items-center gap-2 bg-black text-white px-6 py-4 font-bold uppercase text-sm w-full justify-center hover:bg-gray-800 transition-colors mt-4"
            >
              <Phone className="w-5 h-5" />
              APPELEZ
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};