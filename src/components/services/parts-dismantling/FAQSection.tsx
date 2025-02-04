'use client';

import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export type FAQ = {
  question: string;
  answer: string;
};

export const faqData: FAQ[] = [
  {
    question: "What types of car parts do you dismantle and sell?",
    answer: "We dismantle and sell a wide range of car parts including engines, transmissions, body parts, interior components, electrical systems, and mechanical parts. All our parts are thoroughly tested and come with a warranty."
  },
  {
    question: "Do you provide warranty on dismantled parts?",
    answer: "Yes, we provide warranty coverage on all major parts. The warranty period varies depending on the part type, typically ranging from 30 days to 3 months."
  },
  {
    question: "How do I know if a part will fit my vehicle?",
    answer: "Our expert team can help identify the correct parts for your vehicle based on make, model, year, and VIN number. We carefully check compatibility before selling any parts."
  },
  {
    question: "Do you ship parts across Perth?",
    answer: "Yes, we offer delivery services across the Perth metropolitan area. For larger parts, we can arrange freight shipping to other locations."
  },
  {
    question: "What is your parts testing process?",
    answer: "Every part goes through a comprehensive testing process including functionality testing, quality inspection, and cleaning before being added to our inventory."
  }
];

interface FAQSectionProps {
  faqs?: FAQ[];
}

const FAQSection: React.FC<FAQSectionProps> = ({ faqs = faqData }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="max-w-3xl mx-auto space-y-4">
      {faqs.map((faq, index) => (
        <div key={index} className="border rounded-lg overflow-hidden">
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
  );
};

export default FAQSection;