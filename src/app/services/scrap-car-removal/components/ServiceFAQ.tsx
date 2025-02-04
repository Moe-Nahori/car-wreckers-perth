'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface ServiceFAQProps {
  className?: string;
}

export default function ServiceFAQ({ className }: ServiceFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Do you buy all types of scrap cars?",
      answer: "Yes, we accept all types of vehicles regardless of their condition - running or not, damaged, old, accidental, or end-of-life vehicles. We even buy cars with major mechanical issues."
    },
    {
      question: "How much can I get for my scrap car?",
      answer: "Prices vary depending on factors like your car's make, model, age, condition, and weight. We offer up to $9,999 for vehicles, and our team provides honest, competitive quotes based on current market values."
    },
    {
      question: "Is your car removal service really free?",
      answer: "Absolutely! We provide 100% free car removal services across Perth. There are no hidden costs or towing fees - the price we quote is the amount you'll receive in cash."
    },
    {
      question: "How quickly can you pick up my car?",
      answer: "We offer same-day pickup in most cases. Once you accept our quote, we can typically arrange collection within a few hours, depending on your location and schedule."
    },
    {
      question: "What documents do I need to scrap my car?",
      answer: "You'll need proof of ownership (vehicle registration papers) and a valid photo ID. We'll help you with all necessary paperwork and ensure a legal, hassle-free transfer."
    },
    {
      question: "Do you handle the deregistration process?",
      answer: "Yes, we can assist with the deregistration process. We'll guide you through any paperwork needed to ensure the vehicle is properly transferred and deregistered."
    },
    {
      question: "What happens to my car after you collect it?",
      answer: "We follow environmentally responsible recycling practices. Salvageable parts are carefully removed and recycled, while hazardous materials are disposed of properly. Over 85% of each vehicle is recycled."
    },
    {
      question: "Can you remove multiple vehicles?",
      answer: "Yes, we can handle multiple vehicle removals. Contact us for a custom quote - we offer competitive rates for bulk car removal services."
    }
  ];

  return (
    <section className={className}>
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Find answers to common questions about our scrap car removal service.
          If you can't find what you're looking for, feel free to give us a call.
        </p>
      </div>

      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <Card key={index} className="overflow-hidden">
            <button
              className="w-full p-4 text-left bg-white hover:bg-gray-50 flex justify-between items-center"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <span className="font-medium text-lg">{faq.question}</span>
              {openIndex === index ? (
                <ChevronUp className="w-5 h-5 text-gray-600" />
              ) : (
                <ChevronDown className="w-5 h-5 text-gray-600" />
              )}
            </button>
            
            {openIndex === index && (
              <CardContent className="pt-0">
                <div className="p-4 bg-gray-50">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              </CardContent>
            )}
          </Card>
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
    </section>
  );
}