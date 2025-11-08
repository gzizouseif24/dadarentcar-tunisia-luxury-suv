"use client";

import { Facebook, Instagram, MessageCircle, Phone } from "lucide-react";

export const FloatingSocial = () => {
  return (
    <div className="fixed right-6 bottom-6 z-50 flex flex-col gap-3">
      {/* WhatsApp */}
      <a
        href="https://wa.me/21612345678"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all hover:scale-110"
        aria-label="WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </a>

      {/* Phone */}
      <a
        href="tel:+21612345678"
        className="bg-yellow hover:bg-yellow/90 text-black p-4 rounded-full shadow-lg transition-all hover:scale-110"
        aria-label="Call Now"
      >
        <Phone className="w-6 h-6" />
      </a>

      {/* Facebook */}
      <a
        href="https://facebook.com/dadarentcar"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg transition-all hover:scale-110"
        aria-label="Facebook"
      >
        <Facebook className="w-6 h-6" />
      </a>

      {/* Instagram */}
      <a
        href="https://instagram.com/dadarentcar"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 hover:opacity-90 text-white p-4 rounded-full shadow-lg transition-all hover:scale-110"
        aria-label="Instagram"
      >
        <Instagram className="w-6 h-6" />
      </a>

      {/* TikTok */}
      <a
        href="https://tiktok.com/@dadarentcar"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-black hover:bg-gray-900 text-white p-4 rounded-full shadow-lg transition-all hover:scale-110 border border-yellow/20"
        aria-label="TikTok"
      >
        <svg
          className="w-6 h-6"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1.04-.1z" />
        </svg>
      </a>

      {/* X (Twitter) */}
      <a
        href="https://x.com/dadarentcar"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-black hover:bg-gray-900 text-white p-4 rounded-full shadow-lg transition-all hover:scale-110 border border-yellow/20"
        aria-label="X (Twitter)"
      >
        <svg
          className="w-6 h-6"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      </a>
    </div>
  );
};