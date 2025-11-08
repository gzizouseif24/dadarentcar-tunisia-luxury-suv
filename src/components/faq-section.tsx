"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What Are The Benefits Of Renting Cars Online?",
      answer: "As long-time monthly car rental service in our rental or car price. Faster Rent a Car offers you affordable and discounted per day rental. Also, you don't have to keep on hunting that we for 3 months total three or five weeks. We fully understand what will costs you even less. With our rental, you do need renting the car for weeks upon. Additionally, we fully understand what rental company is most suitable for you."
    },
    {
      question: "How Do I Rent A Car With Bad Credit Or Without Credit Cards?",
      answer: "We accept multiple payment methods including credit cards, debit cards, bank transfers, Western Union, and cash deposits. Contact us directly to discuss alternative payment options."
    },
    {
      question: "What Is The Deposit Policy?",
      answer: "Standard vehicles require a 150 DT deposit, while premium vehicles require a 300 DT deposit. The deposit is fully refundable upon return of the vehicle in the same condition."
    },
    {
      question: "Is Rent A Car Covering Covered Or The Rental Fee?",
      answer: "Yes, all our rental fees include comprehensive insurance coverage. Additional coverage options are available for enhanced peace of mind."
    },
    {
      question: "What Happens In Case Of An Accident Or Breakdown?",
      answer: "We provide 24/7 roadside assistance. In case of any accident or breakdown, contact our support team immediately. We'll arrange for repairs or replacement vehicle as needed."
    },
    {
      question: "Is It Possible To Extend The Lease Or If I Rent A Car In Dubai Agreement?",
      answer: "Yes! You can easily extend your rental period. Simply contact us before your rental period ends, and we'll arrange the extension with updated pricing and documentation."
    },
    {
      question: "Are There Any Age Limits For Car Rental Service In Dubai?",
      answer: "The minimum age for renting is 21 years old with a valid driver's license. Some premium vehicles may require drivers to be 25 years or older."
    },
  ];

  return (
    <section className="bg-white py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">Frequently Asked Questions</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-black text-white rounded-lg overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-900 transition-colors"
              >
                <span className="font-semibold text-lg pr-4">
                  <span className="text-yellow mr-3">{index + 1}</span>
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <ChevronDown className="w-6 h-6 text-yellow" />
                </motion.div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 text-gray-300 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
