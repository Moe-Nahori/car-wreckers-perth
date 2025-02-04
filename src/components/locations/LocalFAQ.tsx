"use client"

import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'

interface LocalFAQProps {
  suburb: string
}

interface FAQItem {
  question: string
  answer: string
}

const getSuburbFAQs = (suburb: string): FAQItem[] => [
  {
    question: `How much can I get for my car in ${suburb}?`,
    answer: `We offer competitive prices up to $9,000 for cars in ${suburb}, depending on the make, model, condition, and year. Contact us for an instant quote.`
  },
  {
    question: `Do you offer same-day car removal in ${suburb}?`,
    answer: `Yes, we provide same-day car removal service throughout ${suburb} and surrounding areas. Once you accept our quote, we can usually pick up your vehicle within a few hours.`
  },
  {
    question: `What types of vehicles do you accept in ${suburb}?`,
    answer: `We accept all types of vehicles in ${suburb} including cars, trucks, vans, SUVs, 4x4s, and commercial vehicles, regardless of their condition.`
  },
  {
    question: `Do I need paperwork to sell my car in ${suburb}?`,
    answer: `Yes, you'll need proof of ownership (registration papers or similar documentation) and a valid photo ID. We'll help you with all the necessary paperwork during the collection.`
  },
  {
    question: `Is your car removal service free in ${suburb}?`,
    answer: `Yes, we offer completely free car removal service in ${suburb}. There are no hidden fees or charges - you get the full quoted amount in cash.`
  }
]

export const LocalFAQ = ({ suburb }: LocalFAQProps) => {
  const [openId, setOpenId] = useState<number | null>(null)

  const faqs = getSuburbFAQs(suburb)

  const toggleFAQ = (index: number) => {
    setOpenId(openId === index ? null : index)
  }

  return (
    <section className="py-16">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border rounded-lg">
              <button
                className="w-full flex justify-between items-center p-4 text-left"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-medium">{faq.question}</span>
                {openId === index ? (
                  <Minus className="w-5 h-5 flex-shrink-0" />
                ) : (
                  <Plus className="w-5 h-5 flex-shrink-0" />
                )}
              </button>
              {openId === index && (
                <div className="p-4 pt-0">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
