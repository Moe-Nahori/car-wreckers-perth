'use client';

import React from 'react';
import { Shield, ThumbsUp, Truck, Banknote } from 'lucide-react';
import { LucideIcon } from 'lucide-react';

interface TrustFactor {
  Icon: LucideIcon;
  title: string;
  description: string;
}

const trustFactors: TrustFactor[] = [
  {
    Icon: Shield,
    title: "Licensed Service",
    description: "Professional dismantling by certified technicians"
  },
  {
    Icon: ThumbsUp,
    title: "Quality Guarantee",
    description: "All parts tested and warranted"
  },
  {
    Icon: Truck,
    title: "Perth-Wide Delivery",
    description: "Delivery service available across metro area"
  },
  {
    Icon: Banknote,
    title: "Best Prices",
    description: "Competitive pricing on all parts"
  }
];

const TrustSignalsSection: React.FC = () => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
      {trustFactors.map((factor, index) => (
        <div 
          key={index}
          className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
        >
          <factor.Icon className="w-12 h-12 text-blue-600 mb-4" />
          <h3 className="text-xl font-bold mb-2">
            {factor.title}
          </h3>
          <p className="text-gray-600">
            {factor.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default TrustSignalsSection;