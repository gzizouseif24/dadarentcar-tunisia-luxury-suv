"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Clock, MessageCircle, Send } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // In production, this would send to backend
    setTimeout(() => setSubmitted(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#0066FF] to-blue-400 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contactez-nous</h1>
          <p className="text-xl text-white/90">
            Nous sommes là pour vous aider. Contactez-nous à tout moment !
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            {/* Phone */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Phone className="w-6 h-6 text-[#0066FF]" />
                </div>
                <h3 className="text-xl font-bold text-black">Téléphone</h3>
              </div>
              <p className="text-gray-700 mb-2">Appelez-nous directement</p>
              <a href="tel:+21612345678" className="text-[#0066FF] font-semibold hover:underline">
                +216 12 345 678
              </a>
            </div>

            {/* WhatsApp */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-green-100 p-3 rounded-full">
                  <MessageCircle className="w-6 h-6 text-green-500" />
                </div>
                <h3 className="text-xl font-bold text-black">WhatsApp</h3>
              </div>
              <p className="text-gray-700 mb-2">Discutez avec nous 24h/24 et 7j/7</p>
              <a 
                href="https://wa.me/21612345678" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-500 font-semibold hover:underline"
              >
                Démarrer le Chat
              </a>
            </div>

            {/* Email */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Mail className="w-6 h-6 text-blue-500" />
                </div>
                <h3 className="text-xl font-bold text-black">Email</h3>
              </div>
              <p className="text-gray-700 mb-2">Envoyez-nous un email</p>
              <a href="mailto:info@dadarentcar.tn" className="text-blue-500 font-semibold hover:underline">
                info@dadarentcar.tn
              </a>
            </div>

            {/* Location */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <MapPin className="w-6 h-6 text-[#0066FF]" />
                </div>
                <h3 className="text-xl font-bold text-black">Localisation</h3>
              </div>
              <p className="text-gray-700 mb-2">Visitez notre bureau</p>
              <p className="text-black font-semibold">
                Avenue Habib Bourguiba<br />
                Tunis, Tunisia
              </p>
            </div>

            {/* Working Hours */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Clock className="w-6 h-6 text-[#0066FF]" />
                </div>
                <h3 className="text-xl font-bold text-black">Horaires d'Ouverture</h3>
              </div>
              <div className="space-y-2 text-gray-700">
                <div className="flex justify-between">
                  <span>Lundi - Vendredi:</span>
                  <span className="font-semibold">8h00 - 20h00</span>
                </div>
                <div className="flex justify-between">
                  <span>Samedi:</span>
                  <span className="font-semibold">9h00 - 18h00</span>
                </div>
                <div className="flex justify-between">
                  <span>Dimanche:</span>
                  <span className="font-semibold">10h00 - 16h00</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-md p-8">
              <h2 className="text-3xl font-bold text-black mb-6">Envoyez-nous un Message</h2>
              
              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                  <div className="text-green-500 text-5xl mb-4">✓</div>
                  <h3 className="text-2xl font-bold text-black mb-2">Message Envoyé !</h3>
                  <p className="text-gray-700">
                    Merci de nous avoir contactés. Nous vous répondrons dans les 24 heures.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-black mb-2">
                        Nom Complet *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Jean Dupont"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0066FF]"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-black mb-2">
                        Adresse Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0066FF]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-black mb-2">
                        Numéro de Téléphone *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        placeholder="+216 12 345 678"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0066FF]"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-black mb-2">
                        Sujet *
                      </label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0066FF]"
                      >
                        <option value="">Sélectionnez un sujet...</option>
                        <option value="booking">Nouvelle Réservation</option>
                        <option value="inquiry">Demande Générale</option>
                        <option value="support">Support Client</option>
                        <option value="feedback">Commentaire</option>
                        <option value="complaint">Réclamation</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-black mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      placeholder="Dites-nous comment nous pouvons vous aider..."
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0066FF] resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 bg-[#0066FF] text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 transition-colors"
                  >
                    <Send className="w-5 h-5" />
                    Envoyer le Message
                  </button>
                </form>
              )}
            </div>

            {/* Map */}
            <div className="mt-8 bg-white rounded-xl shadow-md overflow-hidden">
              <div className="aspect-video bg-gray-200 flex items-center justify-center">
                <MapPin className="w-16 h-16 text-gray-400" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
