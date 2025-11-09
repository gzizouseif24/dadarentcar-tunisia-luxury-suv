"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Quels sont les avantages de la location de voitures en ligne ?",
      answer: "Avec notre service de location mensuelle de voitures, nous vous offrons des tarifs abordables et des réductions sur la location journalière. Vous n'avez pas besoin de chercher pendant des semaines. Nous comprenons parfaitement vos besoins et vous proposons les meilleures options de location adaptées à votre budget et à votre durée de séjour."
    },
    {
      question: "Comment louer une voiture sans carte de crédit ?",
      answer: "Nous acceptons plusieurs modes de paiement incluant les cartes de crédit, les cartes de débit, les virements bancaires, Western Union et les dépôts en espèces. Contactez-nous directement pour discuter des options de paiement alternatives."
    },
    {
      question: "Quelle est la politique de dépôt ?",
      answer: "Les véhicules standards nécessitent un dépôt de 150 DT, tandis que les véhicules premium nécessitent un dépôt de 300 DT. Le dépôt est entièrement remboursable au retour du véhicule dans le même état."
    },
    {
      question: "L'assurance est-elle incluse dans le tarif de location ?",
      answer: "Oui, tous nos tarifs de location incluent une couverture d'assurance complète. Des options de couverture supplémentaires sont disponibles pour une tranquillité d'esprit accrue."
    },
    {
      question: "Que se passe-t-il en cas d'accident ou de panne ?",
      answer: "Nous fournissons une assistance routière 24h/24 et 7j/7. En cas d'accident ou de panne, contactez immédiatement notre équipe d'assistance. Nous organiserons les réparations ou le véhicule de remplacement selon les besoins."
    },
    {
      question: "Est-il possible de prolonger la période de location ?",
      answer: "Oui ! Vous pouvez facilement prolonger votre période de location. Contactez-nous simplement avant la fin de votre période de location, et nous organiserons la prolongation avec une tarification et une documentation mises à jour."
    },
    {
      question: "Y a-t-il des limites d'âge pour la location de voitures ?",
      answer: "L'âge minimum pour la location est de 21 ans avec un permis de conduire valide. Certains véhicules premium peuvent nécessiter que les conducteurs aient 25 ans ou plus."
    },
  ];

  return (
    <section className="bg-white py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">Questions Fréquemment Posées</h2>
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
