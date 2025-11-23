"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone, Menu, X, ChevronDown } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { NavbarDropdown } from "./navbar-dropdown";
import { vehicleCategories } from "@/lib/constants";
import { siteConfig } from "@/config/site";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`sticky top-0 z-50 bg-white shadow-sm transition-all duration-300 ${isScrolled ? 'shadow-md' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex items-center justify-between transition-all duration-300 ${isScrolled ? 'h-16' : 'h-20'}`}>
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt={siteConfig.name}
              width={220}
              height={80}
              className={`w-auto object-contain transition-all duration-300 ${isScrolled ? 'h-12' : 'h-16'}`}
              priority
            />
            <span className={`transition-all duration-300 ${isScrolled ? 'text-xl' : 'text-2xl'}`}>🇹🇳</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-black hover:text-[#0066FF] active:text-[#0066FF] transition-colors duration-150 font-bold uppercase text-sm tracking-wide">
              ACCUEIL
            </Link>
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                onMouseEnter={() => setIsDropdownOpen(true)}
                className="flex items-center gap-1 text-black hover:text-[#0066FF] active:text-[#0066FF] transition-colors duration-150 font-bold uppercase text-sm tracking-wide"
              >
                VÉHICULES
                <ChevronDown className="w-4 h-4" />
              </button>
              <NavbarDropdown
                isOpen={isDropdownOpen}
                onClose={() => setIsDropdownOpen(false)}
              />
            </div>
            <Link href="/special-offers" className="text-black hover:text-[#0066FF] active:text-[#0066FF] transition-colors duration-150 font-bold uppercase text-sm tracking-wide">
              OFFRES SPÉCIALES
            </Link>
            <Link href="/locations" className="text-black hover:text-[#0066FF] active:text-[#0066FF] transition-colors duration-150 font-bold uppercase text-sm tracking-wide">
              LOCATIONS
            </Link>
            <Link href="/blogs" className="text-black hover:text-[#0066FF] active:text-[#0066FF] transition-colors duration-150 font-bold uppercase text-sm tracking-wide">
              BLOGS
            </Link>
            <Link href="/contact" className="text-black hover:text-[#0066FF] active:text-[#0066FF] transition-colors duration-150 font-bold uppercase text-sm tracking-wide">
              CONTACT
            </Link>
            <Link href="/#faqs" className="text-black hover:text-[#0066FF] active:text-[#0066FF] transition-colors duration-150 font-bold uppercase text-sm tracking-wide">
              FAQS
            </Link>
          </div>

          {/* Call Now Button */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href={`tel:${siteConfig.contact.phoneRaw}`}
              className={`flex items-center gap-2 bg-[#0066FF] text-white font-bold uppercase text-sm hover:bg-blue-600 active:bg-blue-700 transition-all duration-150 rounded-lg active:scale-95 md:active:scale-100 ${isScrolled ? 'px-4 py-2' : 'px-6 py-3'}`}
            >
              <Phone className={`transition-all duration-300 ${isScrolled ? 'w-4 h-4' : 'w-5 h-5'}`} />
              APPELEZ
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-black p-2 hover:bg-gray-100 active:bg-gray-200 transition-colors duration-150 active:scale-90"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-2 border-t border-gray-200">
            <Link
              href="/"
              className="block text-black hover:bg-blue-50 active:bg-blue-100 transition-colors duration-150 py-3 px-4 font-bold uppercase text-sm"
              onClick={() => setIsMenuOpen(false)}
            >
              ACCUEIL
            </Link>

            {/* Mobile Véhicules Accordion */}
            <div>
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="w-full flex items-center justify-between text-black hover:bg-blue-50 active:bg-blue-100 transition-colors duration-150 py-3 px-4 font-bold uppercase text-sm"
              >
                VÉHICULES
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
                />
              </button>
              {isDropdownOpen && (
                <div className="bg-blue-50 py-2">
                  {vehicleCategories.map((category) => (
                    <Link
                      key={category.id}
                      href={`/vehicles/${category.slug}`}
                      className="block text-[#0066FF] hover:bg-blue-100 active:bg-blue-200 transition-colors duration-150 py-2 px-8 font-semibold text-sm"
                      onClick={() => {
                        setIsMenuOpen(false);
                        setIsDropdownOpen(false);
                      }}
                    >
                      {category.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/special-offers"
              className="block text-black hover:bg-blue-50 active:bg-blue-100 transition-colors duration-150 py-3 px-4 font-bold uppercase text-sm"
              onClick={() => setIsMenuOpen(false)}
            >
              OFFRES SPÉCIALES
            </Link>
            <Link
              href="/locations"
              className="block text-black hover:bg-blue-50 active:bg-blue-100 transition-colors duration-150 py-3 px-4 font-bold uppercase text-sm"
              onClick={() => setIsMenuOpen(false)}
            >
              LOCATIONS
            </Link>
            <Link
              href="/blogs"
              className="block text-black hover:bg-blue-50 active:bg-blue-100 transition-colors duration-150 py-3 px-4 font-bold uppercase text-sm"
              onClick={() => setIsMenuOpen(false)}
            >
              BLOGS
            </Link>
            <Link
              href="/contact"
              className="block text-black hover:bg-blue-50 active:bg-blue-100 transition-colors duration-150 py-3 px-4 font-bold uppercase text-sm"
              onClick={() => setIsMenuOpen(false)}
            >
              CONTACT
            </Link>
            <Link
              href="/#faqs"
              className="block text-black hover:bg-blue-50 active:bg-blue-100 transition-colors duration-150 py-3 px-4 font-bold uppercase text-sm"
              onClick={() => setIsMenuOpen(false)}
            >
              FAQS
            </Link>
            <a
              href="tel:+21612345678"
              className="flex items-center gap-2 bg-[#0066FF] text-white px-6 py-4 font-bold uppercase text-sm w-full justify-center hover:bg-blue-600 active:bg-blue-700 transition-all duration-150 mt-4 rounded-lg active:scale-95"
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