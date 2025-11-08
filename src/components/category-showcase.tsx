"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export const CategoryShowcase = () => {
  const categories = [
    {
      name: "MODIFIED CAR",
      count: "46 Cars",
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/f5ea3f92-a122-434f-ad3a-e1b4b3ccf56c/generated_images/professional-automotive-photography-of-a-75237027-20251107205230.jpg",
      category: "modified",
    },
    {
      name: "SUV CAR",
      count: "152 Cars",
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/f5ea3f92-a122-434f-ad3a-e1b4b3ccf56c/generated_images/professional-automotive-photography-of-a-21f20aca-20251107205233.jpg",
      category: "suv",
    },
    {
      name: "LUXURY CAR",
      count: "126 Cars",
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/f5ea3f92-a122-434f-ad3a-e1b4b3ccf56c/generated_images/professional-automotive-photography-of-a-1e2f42f6-20251107205231.jpg",
      category: "luxury",
    },
    {
      name: "SPORTS CAR",
      count: "68 Cars",
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/f5ea3f92-a122-434f-ad3a-e1b4b3ccf56c/generated_images/professional-automotive-photography-of-a-1b081630-20251107205232.jpg",
      category: "sports",
    },
    {
      name: "MONTHLY CAR",
      count: "185 Cars",
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/f5ea3f92-a122-434f-ad3a-e1b4b3ccf56c/generated_images/professional-automotive-photography-of-a-1bd2fa44-20251107205234.jpg",
      category: "monthly",
    },
    {
      name: "CONVERTIBLE CAR",
      count: "25 Cars",
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/f5ea3f92-a122-434f-ad3a-e1b4b3ccf56c/generated_images/professional-automotive-photography-of-a-6cd8deae-20251107205255.jpg",
      category: "convertible",
    },
  ];

  return (
    <section className="relative bg-white pt-20 pb-12">
      {/* Decorative brush stroke at top */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSI4MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMCw0MCBRMjUwLDAgNTAwLDQwIFQ3NTAsNDAgVDEwMDAsNDAgVDEyNTAsNDAgVDE1MDAsNDAgVDE3NTAsNDAgVDIwMDAsNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMyIgb3BhY2l0eT0iMC4wOCIvPjwvc3ZnPg==')] bg-repeat-x" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-black text-black mb-6"
          >
            FASTER CAR RENTAL DUBAI
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {categories.map((cat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              <Link
                href={`/vehicles?category=${cat.category}`}
                className="group block relative h-64 rounded-2xl overflow-hidden shadow-lg"
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 bg-yellow rounded flex items-center justify-center">
                      <span className="text-black font-bold text-sm">🚗</span>
                    </div>
                    <span className="text-yellow font-bold text-sm">{cat.count}</span>
                  </div>
                  <h3 className="text-white font-black text-2xl mb-1">{cat.name}</h3>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-yellow/0 group-hover:bg-yellow/10 transition-colors duration-300" />
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/vehicles"
            className="inline-flex items-center gap-2 bg-black text-white px-10 py-5 rounded-xl font-bold text-lg hover:bg-gray-900 transition-all border-4 border-yellow"
          >
            VIEW MORE
            <ArrowRight className="w-6 h-6" />
          </Link>
        </div>
      </div>
    </section>
  );
};
