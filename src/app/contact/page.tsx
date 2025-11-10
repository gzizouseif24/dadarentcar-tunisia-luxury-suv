"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Clock, MessageCircle, Send } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

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
      {/* Hero Header with Car Image */}
      <div className="relative bg-gradient-to-r from-[#0066FF] to-blue-400 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=1200&q=80"
            alt="Luxury car"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Contactez-nous</h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl">
              Notre équipe est à votre disposition pour répondre à toutes vos questions
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            {/* Phone */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow"
            >
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
            </motion.div>

            {/* WhatsApp */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow"
            >
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
            </motion.div>

            {/* Email */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Mail className="w-6 h-6 text-[#0066FF]" />
                </div>
                <h3 className="text-xl font-bold text-black">Email</h3>
              </div>
              <p className="text-gray-700 mb-2">Envoyez-nous un email</p>
              <a href="mailto:info@dadarentcar.tn" className="text-[#0066FF] font-semibold hover:underline">
                info@dadarentcar.tn
              </a>
            </motion.div>

            {/* Location */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow"
            >
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
            </motion.div>

            {/* Working Hours */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow"
            >
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
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
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
          </motion.div>
        </div>

        {/* Decorative Car Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 relative rounded-2xl overflow-hidden"
        >
          <div className="relative h-[400px]">
            <Image
              src="https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=1200&q=80"
              alt="Luxury Mercedes car"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0066FF]/90 to-blue-600/70 flex items-center">
              <div className="max-w-2xl mx-auto text-center px-4">
                <h3 className="text-4xl font-bold text-white mb-4">
                  Prêt à Réserver Votre Véhicule ?
                </h3>
                <p className="text-xl text-white/90 mb-8">
                  Découvrez notre flotte de véhicules premium et réservez en quelques clics
                </p>
                <a
                  href="/vehicles"
                  className="inline-block bg-white text-[#0066FF] px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors"
                >
                  Voir Nos Véhicules
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
