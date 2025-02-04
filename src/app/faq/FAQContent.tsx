'use client';

import { Input } from "@/components/ui/input"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { useState } from 'react'

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

const faqData: FAQItem[] = [
  {
    id: 'general-1',
    category: 'General Questions',
    question: 'What areas do you service in Perth?',
    answer: 'We service all Perth metropolitan areas including Bellevue, Midland, Malaga, Welshpool, Osborne Park, and surrounding suburbs. We offer free car removal throughout the Perth metro area.'
  },
  {
    id: 'process-1',
    category: 'Car Removal Process',
    question: 'How long does the car removal process take?',
    answer: 'Once you accept our quote, we can typically remove your car within 24-48 hours. In many cases, we offer same-day removal service if you contact us before noon.'
  },
  {
    id: 'pricing-1',
    category: 'Pricing & Payment',
    question: 'How do you determine the value of my car?',
    answer: 'We evaluate cars based on several factors including make, model, year, condition, mileage, and current market value of parts. We aim to offer the best possible price for your vehicle.'
  },
  {
    id: 'documents-1',
    category: 'Required Documents',
    question: 'What documents do I need to sell my car?',
    answer: 'You\'ll need proof of ownership (vehicle registration papers), a valid photo ID (driver\'s license or passport), and any relevant service history documents if available.'
  },
  {
    id: 'parts-1',
    category: 'Parts & Services',
    question: 'Do you sell used car parts?',
    answer: 'Yes, we stock a wide range of quality used parts for various makes and models. All our parts are thoroughly tested and come with a warranty.'
  },
  {
    id: 'business-1',
    category: 'Business Operations',
    question: 'What are your business hours?',
    answer: 'We operate Monday to Saturday, 7 AM to 6 PM. We also offer emergency car removal services outside these hours by appointment.'
  }
];

export default function FAQContent() {
  const [searchQuery, setSearchQuery] = useState('');
  
  const filteredFAQs = faqData.filter(faq =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const groupedFAQs = filteredFAQs.reduce((acc, faq) => {
    if (!acc[faq.category]) {
      acc[faq.category] = [];
    }
    acc[faq.category].push(faq);
    return acc;
  }, {} as Record<string, FAQItem[]>);

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Frequently Asked Questions</h1>
      
      <div className="mb-8">
        <Input
          type="search"
          placeholder="Search FAQs..."
          className="max-w-md"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {Object.entries(groupedFAQs).map(([category, items]) => (
        <div key={category} className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">{category}</h2>
          <Accordion type="single" collapsible className="w-full">
            {items.map((faq) => (
              <AccordionItem key={faq.id} value={faq.id}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent>
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      ))}

      <div className="mt-8 p-4 bg-gray-100 rounded-lg">
        <p className="text-gray-600">
          Can't find what you're looking for? Contact us at{' '}
          <a href="tel:0470777777" className="text-blue-600 hover:underline">
            0470 777 777
          </a>{' '}
          or use our{' '}
          <a href="/contact" className="text-blue-600 hover:underline">
            contact form
          </a>
          .
        </p>
      </div>
    </main>
  );
}