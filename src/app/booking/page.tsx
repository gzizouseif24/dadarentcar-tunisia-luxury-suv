"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Calendar, MapPin, CreditCard, Building2, Send, Wallet, CheckCircle, Download, Mail, MessageCircle } from "lucide-react";

function BookingPageContent() {
  const searchParams = useSearchParams();
  const carId = searchParams.get("car");

  const [step, setStep] = useState(1);
  const [bookingComplete, setBookingComplete] = useState(false);

  const [formData, setFormData] = useState({
    // Customer Info
    fullName: "",
    email: "",
    phone: "",
    idNumber: "",
    
    // Rental Details
    carModel: "",
    pickupDate: "",
    returnDate: "",
    pickupLocation: "Tunis Airport",
    returnLocation: "Tunis Airport",
    
    // Payment
    paymentMethod: "credit-card",
    cardNumber: "",
    cardExpiry: "",
    cardCVV: "",
    
    // Additional
    insurance: true,
    additionalDriver: false,
  });

  const [deposit, setDeposit] = useState(150);
  const [totalDays, setTotalDays] = useState(0);
  const [dailyRate] = useState(250);
  const [totalCost, setTotalCost] = useState(0);

  useEffect(() => {
    if (formData.pickupDate && formData.returnDate) {
      const pickup = new Date(formData.pickupDate);
      const returnDate = new Date(formData.returnDate);
      const days = Math.ceil((returnDate.getTime() - pickup.getTime()) / (1000 * 60 * 60 * 24));
      setTotalDays(days > 0 ? days : 0);
      setTotalCost(days > 0 ? days * dailyRate + deposit : 0);
    }
  }, [formData.pickupDate, formData.returnDate, dailyRate, deposit]);

  useEffect(() => {
    // Dynamic deposit based on car category (mock - would be real data in production)
    if (formData.carModel.toLowerCase().includes("luxury") || 
        formData.carModel.toLowerCase().includes("premium") ||
        formData.carModel.toLowerCase().includes("range") ||
        formData.carModel.toLowerCase().includes("mercedes") ||
        formData.carModel.toLowerCase().includes("bmw")) {
      setDeposit(300);
    } else {
      setDeposit(150);
    }
  }, [formData.carModel]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setBookingComplete(true);
  };

  const generateDocuments = () => {
    // Mock document generation
    alert("Documents generated:\n✓ Pre-Contract\n✓ Contract\n✓ Invoice\n✓ Receipt\n\nThese have been sent to your email and WhatsApp!");
  };

  if (bookingComplete) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-lg p-8 text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-green-100 p-4 rounded-full">
                <CheckCircle className="w-16 h-16 text-green-500" />
              </div>
            </div>
            
            <h1 className="text-3xl font-bold text-black mb-4">
              Booking Confirmed!
            </h1>
            
            <p className="text-gray-600 mb-8">
              Thank you, {formData.fullName}! Your reservation has been successfully confirmed.
            </p>

            <div className="bg-yellow/10 border border-yellow rounded-lg p-6 mb-8 text-left">
              <h2 className="font-bold text-black mb-4">Booking Summary</h2>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Booking Reference:</span>
                  <span className="font-semibold">DRC{Math.floor(Math.random() * 100000)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Vehicle:</span>
                  <span className="font-semibold">{formData.carModel}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Pickup Date:</span>
                  <span className="font-semibold">{formData.pickupDate}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Return Date:</span>
                  <span className="font-semibold">{formData.returnDate}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Total Days:</span>
                  <span className="font-semibold">{totalDays} days</span>
                </div>
                <div className="flex justify-between border-t pt-2 mt-2">
                  <span className="text-gray-600">Rental Cost:</span>
                  <span className="font-semibold">{totalDays * dailyRate} DT</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Deposit:</span>
                  <span className="font-semibold">{deposit} DT</span>
                </div>
                <div className="flex justify-between border-t pt-2 mt-2 text-lg">
                  <span className="font-bold text-black">Total Paid:</span>
                  <span className="font-bold text-yellow">{totalCost} DT</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <button
                onClick={generateDocuments}
                className="flex items-center justify-center gap-2 bg-yellow text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow/90 transition-colors"
              >
                <Download className="w-5 h-5" />
                Download Docs
              </button>
              
              <a
                href={`mailto:${formData.email}`}
                className="flex items-center justify-center gap-2 bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors"
              >
                <Mail className="w-5 h-5" />
                Email Sent
              </a>
              
              <a
                href={`https://wa.me/21612345678?text=Booking confirmed for ${formData.fullName}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp
              </a>
            </div>

            <p className="text-sm text-gray-500 mb-6">
              A confirmation email and WhatsApp message with your contract, invoice, and receipt have been sent.
            </p>

            <a
              href="/vehicles"
              className="inline-block bg-black text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
            >
              Back to Vehicles
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-black text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Book Your Vehicle</h1>
          <p className="text-gray-300">Complete your reservation in just a few steps</p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Progress Steps */}
        <div className="flex justify-between mb-12">
          {[
            { num: 1, label: "Rental Details" },
            { num: 2, label: "Customer Info" },
            { num: 3, label: "Payment" },
          ].map((s) => (
            <div key={s.num} className="flex items-center flex-1">
              <div className={`flex items-center justify-center w-12 h-12 rounded-full font-bold ${
                step >= s.num ? "bg-yellow text-black" : "bg-gray-300 text-gray-600"
              }`}>
                {s.num}
              </div>
              <div className="flex-1 mx-4">
                <div className={`h-1 ${step > s.num ? "bg-yellow" : "bg-gray-300"}`} />
              </div>
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg p-8">
          {/* Step 1: Rental Details */}
          {step === 1 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-black mb-6">Rental Details</h2>
              
              <div>
                <label className="block text-sm font-semibold text-black mb-2">
                  Select Vehicle
                </label>
                <select
                  name="carModel"
                  value={formData.carModel}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow"
                >
                  <option value="">Choose a vehicle...</option>
                  <option value="Nissan Patrol">Nissan Patrol (SUV) - 250 DT/day</option>
                  <option value="BMW X5">BMW X5 (Luxury) - 350 DT/day</option>
                  <option value="Mercedes GLE 450">Mercedes GLE 450 (Premium Luxury) - 400 DT/day</option>
                  <option value="Range Rover Evoque">Range Rover Evoque (Luxury) - 380 DT/day</option>
                  <option value="Jeep Wrangler">Jeep Wrangler (SUV) - 280 DT/day</option>
                  <option value="Toyota Land Cruiser">Toyota Land Cruiser (SUV) - 320 DT/day</option>
                </select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-black mb-2">
                    <Calendar className="inline w-4 h-4 mr-1" />
                    Pickup Date
                  </label>
                  <input
                    type="date"
                    name="pickupDate"
                    value={formData.pickupDate}
                    onChange={handleInputChange}
                    required
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-black mb-2">
                    <Calendar className="inline w-4 h-4 mr-1" />
                    Return Date
                  </label>
                  <input
                    type="date"
                    name="returnDate"
                    value={formData.returnDate}
                    onChange={handleInputChange}
                    required
                    min={formData.pickupDate || new Date().toISOString().split('T')[0]}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-black mb-2">
                    <MapPin className="inline w-4 h-4 mr-1" />
                    Pickup Location
                  </label>
                  <select
                    name="pickupLocation"
                    value={formData.pickupLocation}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow"
                  >
                    <option value="Tunis Airport">Tunis Airport</option>
                    <option value="Tunis City Center">Tunis City Center</option>
                    <option value="Sousse">Sousse</option>
                    <option value="Sfax">Sfax</option>
                    <option value="Monastir Airport">Monastir Airport</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-black mb-2">
                    <MapPin className="inline w-4 h-4 mr-1" />
                    Return Location
                  </label>
                  <select
                    name="returnLocation"
                    value={formData.returnLocation}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow"
                  >
                    <option value="Tunis Airport">Tunis Airport</option>
                    <option value="Tunis City Center">Tunis City Center</option>
                    <option value="Sousse">Sousse</option>
                    <option value="Sfax">Sfax</option>
                    <option value="Monastir Airport">Monastir Airport</option>
                  </select>
                </div>
              </div>

              {totalDays > 0 && (
                <div className="bg-yellow/10 border border-yellow rounded-lg p-4">
                  <div className="flex justify-between items-center">
                    <span className="text-black font-semibold">Rental Period:</span>
                    <span className="text-black font-bold">{totalDays} days</span>
                  </div>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-black font-semibold">Estimated Total:</span>
                    <span className="text-yellow font-bold text-xl">{totalCost} DT</span>
                  </div>
                </div>
              )}

              <button
                type="button"
                onClick={() => setStep(2)}
                disabled={!formData.carModel || !formData.pickupDate || !formData.returnDate}
                className="w-full bg-yellow text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow/90 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
              >
                Continue to Customer Info
              </button>
            </div>
          )}

          {/* Step 2: Customer Info */}
          {step === 2 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-black mb-6">Customer Information</h2>
              
              <div>
                <label className="block text-sm font-semibold text-black mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  required
                  placeholder="John Doe"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-black mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-black mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    placeholder="+216 12 345 678"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-black mb-2">
                  ID / Passport Number
                </label>
                <input
                  type="text"
                  name="idNumber"
                  value={formData.idNumber}
                  onChange={handleInputChange}
                  required
                  placeholder="12345678"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow"
                />
              </div>

              <div className="space-y-3">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="insurance"
                    checked={formData.insurance}
                    onChange={handleInputChange}
                    className="w-5 h-5 accent-yellow"
                  />
                  <span className="text-black">Add comprehensive insurance (+50 DT)</span>
                </label>

                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="additionalDriver"
                    checked={formData.additionalDriver}
                    onChange={handleInputChange}
                    className="w-5 h-5 accent-yellow"
                  />
                  <span className="text-black">Add additional driver (+30 DT)</span>
                </label>
              </div>

              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="flex-1 bg-gray-200 text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
                >
                  Back
                </button>
                <button
                  type="button"
                  onClick={() => setStep(3)}
                  disabled={!formData.fullName || !formData.email || !formData.phone || !formData.idNumber}
                  className="flex-1 bg-yellow text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow/90 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
                >
                  Continue to Payment
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Payment */}
          {step === 3 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-black mb-6">Payment Method</h2>
              
              <div className="bg-yellow/10 border border-yellow rounded-lg p-6 mb-6">
                <h3 className="font-bold text-black mb-4">Payment Summary</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Rental ({totalDays} days × {dailyRate} DT):</span>
                    <span className="font-semibold">{totalDays * dailyRate} DT</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Deposit {deposit === 300 ? "(Premium)" : "(Standard)"}:</span>
                    <span className="font-semibold">{deposit} DT</span>
                  </div>
                  {formData.insurance && (
                    <div className="flex justify-between">
                      <span>Insurance:</span>
                      <span className="font-semibold">50 DT</span>
                    </div>
                  )}
                  {formData.additionalDriver && (
                    <div className="flex justify-between">
                      <span>Additional Driver:</span>
                      <span className="font-semibold">30 DT</span>
                    </div>
                  )}
                  <div className="flex justify-between border-t pt-2 mt-2 text-lg">
                    <span className="font-bold">Total Amount:</span>
                    <span className="font-bold text-yellow">
                      {totalCost + (formData.insurance ? 50 : 0) + (formData.additionalDriver ? 30 : 0)} DT
                    </span>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-black mb-3">
                  Select Payment Method
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { value: "credit-card", icon: CreditCard, label: "Credit Card" },
                    { value: "bank-transfer", icon: Building2, label: "Bank Transfer" },
                    { value: "western-union", icon: Send, label: "Western Union" },
                    { value: "cash", icon: Wallet, label: "Cash Deposit" },
                  ].map((method) => (
                    <label
                      key={method.value}
                      className={`flex items-center gap-3 p-4 border-2 rounded-lg cursor-pointer transition-all ${
                        formData.paymentMethod === method.value
                          ? "border-yellow bg-yellow/10"
                          : "border-gray-300 hover:border-gray-400"
                      }`}
                    >
                      <input
                        type="radio"
                        name="paymentMethod"
                        value={method.value}
                        checked={formData.paymentMethod === method.value}
                        onChange={handleInputChange}
                        className="w-5 h-5 accent-yellow"
                      />
                      <method.icon className="w-6 h-6 text-black" />
                      <span className="font-semibold text-black">{method.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {formData.paymentMethod === "credit-card" && (
                <div className="space-y-4 p-4 bg-gray-50 rounded-lg">
                  <div>
                    <label className="block text-sm font-semibold text-black mb-2">
                      Card Number
                    </label>
                    <input
                      type="text"
                      name="cardNumber"
                      value={formData.cardNumber}
                      onChange={handleInputChange}
                      placeholder="1234 5678 9012 3456"
                      maxLength={19}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-black mb-2">
                        Expiry Date
                      </label>
                      <input
                        type="text"
                        name="cardExpiry"
                        value={formData.cardExpiry}
                        onChange={handleInputChange}
                        placeholder="MM/YY"
                        maxLength={5}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-black mb-2">
                        CVV
                      </label>
                      <input
                        type="text"
                        name="cardCVV"
                        value={formData.cardCVV}
                        onChange={handleInputChange}
                        placeholder="123"
                        maxLength={3}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow"
                      />
                    </div>
                  </div>
                </div>
              )}

              {formData.paymentMethod === "bank-transfer" && (
                <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <h4 className="font-semibold text-black mb-2">Bank Transfer Details</h4>
                  <p className="text-sm text-gray-700 mb-2">Please transfer to:</p>
                  <div className="text-sm space-y-1">
                    <p><strong>Bank:</strong> Banque de Tunisie</p>
                    <p><strong>Account:</strong> 1234567890123456</p>
                    <p><strong>IBAN:</strong> TN59 1234 5678 9012 3456 7890</p>
                    <p><strong>Reference:</strong> DRC-{Math.floor(Math.random() * 100000)}</p>
                  </div>
                </div>
              )}

              {formData.paymentMethod === "western-union" && (
                <div className="p-4 bg-orange-50 border border-orange-200 rounded-lg">
                  <h4 className="font-semibold text-black mb-2">Western Union Details</h4>
                  <p className="text-sm text-gray-700 mb-2">Send payment to:</p>
                  <div className="text-sm space-y-1">
                    <p><strong>Receiver:</strong> DadaRentCar SARL</p>
                    <p><strong>Location:</strong> Tunis, Tunisia</p>
                    <p><strong>MTCN Reference:</strong> Will be provided after booking</p>
                  </div>
                </div>
              )}

              {formData.paymentMethod === "cash" && (
                <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                  <h4 className="font-semibold text-black mb-2">Cash Deposit</h4>
                  <p className="text-sm text-gray-700">
                    You can pay in cash at our office during vehicle pickup. Please bring the exact amount or we can provide change.
                  </p>
                </div>
              )}

              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="flex-1 bg-gray-200 text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-yellow text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow/90 transition-colors"
                >
                  Confirm Booking
                </button>
              </div>

              <p className="text-xs text-center text-gray-500">
                By confirming, you agree to our terms and conditions. A pre-contract, contract, invoice, and receipt will be automatically generated and sent to your email and WhatsApp.
              </p>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

export default function BookingPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-yellow mx-auto mb-4"></div>
          <p className="text-gray-600">Loading booking form...</p>
        </div>
      </div>
    }>
      <BookingPageContent />
    </Suspense>
  );
}