'use client';

import React from 'react';
import { Wrench, Recycle, ShieldCheck, Package } from 'lucide-react';
import { LucideIcon } from 'lucide-react';

interface Benefit {
  icon: LucideIcon;
  title: string;
  description: string;
}

const benefits: Benefit[] = [
  {
    icon: Wrench,
    title: "Professional Dismantling",
    description: "Expert removal and testing of parts using specialized equipment and techniques"
  },
  {
    icon: Recycle,
    title: "Eco-Friendly",
    description: "Sustainable recycling practices ensuring minimal environmental impact"
  },
  {
    icon: ShieldCheck,
    title: "Quality Guarantee",
    description: "All parts thoroughly tested and backed by our satisfaction guarantee"
  },
  {
    icon: Package,
    title: "Wide Parts Range",
    description: "Extensive inventory of quality parts for all major makes and models"
  }
];

const BenefitsSection: React.FC = () => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-12 md:mb-16">
      {benefits.map((benefit) => (
        <div key={benefit.title} className="bg-white rounded-lg shadow-lg p-6">
          <benefit.icon className="w-12 h-12 text-blue-600 mb-4" />
          <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
          <p className="text-gray-600">{benefit.description}</p>
        </div>
      ))}
    </div>
  );
};

export default BenefitsSection;