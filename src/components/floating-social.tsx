"use client";

import { Facebook, Instagram, MessageCircle } from "lucide-react";

export const FloatingSocial = () => {
  return (
    <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3">
      {/* WhatsApp - Peeking from right */}
      <a
        href="https://wa.me/21612345678"
        target="_blank"
        rel="noopener noreferrer"
        className="group bg-green-500 hover:bg-green-600 text-white p-3 rounded-l-xl shadow-lg transition-all duration-300 hover:-translate-x-1 translate-x-8 hover:translate-x-0"
        aria-label="WhatsApp"
      >
        <MessageCircle className="w-5 h-5" />
      </a>

      {/* Facebook - Peeking from right */}
      <a
        href="https://facebook.com/dadarentcar"
        target="_blank"
        rel="noopener noreferrer"
        className="group bg-[#1877F2] hover:bg-[#0C63D4] text-white p-3 rounded-l-xl shadow-lg transition-all duration-300 hover:-translate-x-1 translate-x-8 hover:translate-x-0"
        aria-label="Facebook"
      >
        <Facebook className="w-5 h-5" />
      </a>

      {/* Instagram - Peeking from right */}
      <a
        href="https://instagram.com/dadarentcar"
        target="_blank"
        rel="noopener noreferrer"
        className="group bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 hover:opacity-90 text-white p-3 rounded-l-xl shadow-lg transition-all duration-300 hover:-translate-x-1 translate-x-8 hover:translate-x-0"
        aria-label="Instagram"
      >
        <Instagram className="w-5 h-5" />
      </a>

      {/* TikTok - Peeking from right */}
      <a
        href="https://tiktok.com/@dadarentcar"
        target="_blank"
        rel="noopener noreferrer"
        className="group bg-black hover:bg-gray-800 text-white p-3 rounded-l-xl shadow-lg transition-all duration-300 hover:-translate-x-1 translate-x-8 hover:translate-x-0"
        aria-label="TikTok"
      >
        <svg
          className="w-5 h-5"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1.04-.1z" />
        </svg>
      </a>
    </div>
  );
};