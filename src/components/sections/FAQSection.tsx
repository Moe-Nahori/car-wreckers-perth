'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "What types of vehicles do you buy?",
    answer: "We buy all types of vehicles regardless of their condition: cars, trucks, vans, SUVs, 4x4s, and commercial vehicles. Whether your vehicle is damaged, old, non-running, or in perfect condition, we'll make you a competitive offer."
  },
  {
    question: "How much can I get for my car?",
    answer: "We offer up to $9,999 for vehicles, with the exact amount depending on factors like make, model, age, condition, and current market value. We pride ourselves on offering the best prices in Perth for all vehicle types."
  },
  {
    question: "Is your car removal service really free?",
    answer: "Yes! We provide completely free car removal services across all Perth metropolitan areas. There are no hidden fees or charges - the price we quote is what you'll receive in cash."
  },
  {
    question: "How long does the process take?",
    answer: "We offer same-day car removal in most cases. Once you accept our quote, we can typically pick up your vehicle within 1-2 hours, depending on your location in Perth."
  },
  {
    question: "What documents do I need?",
    answer: "You'll need proof of ownership (vehicle registration papers) and a valid photo ID. We'll help you with all the necessary paperwork to ensure a smooth and legal transaction."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="border rounded-lg overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-4 text-left bg-white hover:bg-gray-50 flex justify-between items-center"
              >
                <span className="font-medium text-lg">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-gray-600" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-600" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="p-4 bg-gray-50">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": faqs.map(faq => ({
                "@type": "Question",
                "name": faq.question,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": faq.answer
                }
              }))
            })
          }}
        />
      </div>
    </section>
  );
}