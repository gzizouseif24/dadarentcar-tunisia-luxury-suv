"use client";

import { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";

export const WhatsAppChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      type: "bot",
      text: "Hello! 👋 Welcome to DadaRentCar. I'm here to help you with your car rental needs.",
      time: "Just now",
    },
    {
      type: "bot",
      text: "Please choose what you'd like to do:\n\n1️⃣ Browse available vehicles\n2️⃣ Check prices\n3️⃣ Make a reservation\n4️⃣ View special offers\n5️⃣ Contact support",
      time: "Just now",
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    // Add user message
    const userMessage = {
      type: "user",
      text: inputMessage,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };
    setMessages(prev => [...prev, userMessage]);

    // Simulate bot response
    setTimeout(() => {
      let botResponse = "";
      const input = inputMessage.toLowerCase();

      if (input.includes("1") || input.includes("vehicle") || input.includes("car")) {
        botResponse = "Great! 🚗 We have a wide selection of luxury and SUV vehicles. Here's what's available:\n\n• Nissan Patrol - 250 DT/day\n• BMW X5 - 350 DT/day\n• Mercedes GLE - 400 DT/day\n• Range Rover Evoque - 380 DT/day\n\nWould you like to book one of these vehicles?";
      } else if (input.includes("2") || input.includes("price")) {
        botResponse = "Our pricing varies by vehicle category:\n\n💰 Standard: 120-180 DT/day\n💎 SUV: 220-320 DT/day\n👑 Luxury: 340-400 DT/day\n\nDeposit: 150 DT (Standard/SUV) or 300 DT (Luxury)\n\nMonthly rentals available with special discounts!";
      } else if (input.includes("3") || input.includes("reserv") || input.includes("book")) {
        botResponse = "Perfect! 📝 To make a reservation, I'll need:\n\n1. Which vehicle would you like?\n2. Pickup date\n3. Return date\n4. Pickup location\n5. Your contact details\n\nYou can also book directly on our website or call us at +216 12 345 678";
      } else if (input.includes("4") || input.includes("offer") || input.includes("discount")) {
        botResponse = "🎉 Current Special Offers:\n\n• 20% Cashback on Nissan Patrol\n• New arrivals: Mercedes GLE\n• Weekly rental: 15% discount\n• Monthly rental: 25% discount\n\nOffers valid until end of month!";
      } else if (input.includes("5") || input.includes("support") || input.includes("help")) {
        botResponse = "📞 Contact Support:\n\nPhone: +216 12 345 678\nEmail: info@dadarentcar.tn\nWhatsApp: Available 24/7\n\nOur team is ready to assist you!";
      } else {
        botResponse = "I'm here to help! Please select from:\n\n1️⃣ Browse vehicles\n2️⃣ Check prices\n3️⃣ Make reservation\n4️⃣ Special offers\n5️⃣ Contact support\n\nOr type your question directly.";
      }

      const botMessage = {
        type: "bot",
        text: botResponse,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages(prev => [...prev, botMessage]);
    }, 1000);

    setInputMessage("");
  };

  return (
    <>
      {/* Chat Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed right-6 bottom-24 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all hover:scale-110 animate-bounce"
          aria-label="Open WhatsApp Chat"
        >
          <MessageCircle className="w-7 h-7" />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
            1
          </span>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed right-6 bottom-24 z-50 w-96 max-w-[calc(100vw-3rem)] bg-white rounded-xl shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="bg-green-500 text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-white rounded-full p-2">
                <MessageCircle className="w-6 h-6 text-green-500" />
              </div>
              <div>
                <h3 className="font-bold">DadaRentCar AI</h3>
                <p className="text-xs opacity-90">Online • Typically replies instantly</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="hover:bg-green-600 p-2 rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="h-96 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] rounded-lg px-4 py-2 ${
                    message.type === "user"
                      ? "bg-green-500 text-white"
                      : "bg-white text-black shadow-md"
                  }`}
                >
                  <p className="text-sm whitespace-pre-line">{message.text}</p>
                  <p className={`text-xs mt-1 ${
                    message.type === "user" ? "text-green-100" : "text-gray-500"
                  }`}>
                    {message.time}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="p-4 bg-white border-t border-gray-200">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                placeholder="Type a message..."
                className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <button
                onClick={handleSendMessage}
                className="bg-green-500 text-white p-2 rounded-full hover:bg-green-600 transition-colors"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
