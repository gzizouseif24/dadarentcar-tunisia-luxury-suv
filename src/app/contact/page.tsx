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
      <div className="bg-black text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-gray-300">
            We're here to help. Reach out to us anytime!
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
                <div className="bg-yellow/10 p-3 rounded-full">
                  <Phone className="w-6 h-6 text-yellow" />
                </div>
                <h3 className="text-xl font-bold text-black">Phone</h3>
              </div>
              <p className="text-gray-700 mb-2">Call us directly</p>
              <a href="tel:+21612345678" className="text-yellow font-semibold hover:underline">
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
              <p className="text-gray-700 mb-2">Chat with us 24/7</p>
              <a 
                href="https://wa.me/21612345678" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-500 font-semibold hover:underline"
              >
                Start Chat
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
              <p className="text-gray-700 mb-2">Send us an email</p>
              <a href="mailto:info@dadarentcar.tn" className="text-blue-500 font-semibold hover:underline">
                info@dadarentcar.tn
              </a>
            </div>

            {/* Location */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-red-100 p-3 rounded-full">
                  <MapPin className="w-6 h-6 text-red-500" />
                </div>
                <h3 className="text-xl font-bold text-black">Location</h3>
              </div>
              <p className="text-gray-700 mb-2">Visit our office</p>
              <p className="text-black font-semibold">
                Avenue Habib Bourguiba<br />
                Tunis, Tunisia
              </p>
            </div>

            {/* Working Hours */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-purple-100 p-3 rounded-full">
                  <Clock className="w-6 h-6 text-purple-500" />
                </div>
                <h3 className="text-xl font-bold text-black">Working Hours</h3>
              </div>
              <div className="space-y-2 text-gray-700">
                <div className="flex justify-between">
                  <span>Monday - Friday:</span>
                  <span className="font-semibold">8:00 AM - 8:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday:</span>
                  <span className="font-semibold">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday:</span>
                  <span className="font-semibold">10:00 AM - 4:00 PM</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-md p-8">
              <h2 className="text-3xl font-bold text-black mb-6">Send us a Message</h2>
              
              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                  <div className="text-green-500 text-5xl mb-4">✓</div>
                  <h3 className="text-2xl font-bold text-black mb-2">Message Sent!</h3>
                  <p className="text-gray-700">
                    Thank you for contacting us. We'll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-black mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="John Doe"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-black mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-black mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        placeholder="+216 12 345 678"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-black mb-2">
                        Subject *
                      </label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow"
                      >
                        <option value="">Select a subject...</option>
                        <option value="booking">New Booking</option>
                        <option value="inquiry">General Inquiry</option>
                        <option value="support">Customer Support</option>
                        <option value="feedback">Feedback</option>
                        <option value="complaint">Complaint</option>
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
                      placeholder="Tell us how we can help you..."
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 bg-yellow text-black px-8 py-4 rounded-lg font-semibold hover:bg-yellow/90 transition-colors"
                  >
                    <Send className="w-5 h-5" />
                    Send Message
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
