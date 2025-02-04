'use client';

import React from 'react';

interface Guarantee {
  title: string;
  description: string;
}

const guarantees: Guarantee[] = [
  {
    title: "Tested Parts",
    description: "Every part is thoroughly tested for functionality and reliability before being added to our inventory. We use professional diagnostic tools to ensure quality."
  },
  {
    title: "Warranty Coverage",
    description: "All major parts come with a satisfaction guarantee and warranty for your peace of mind. Our warranty periods range from 30 days to 3 months depending on the part."
  },
  {
    title: "Expert Advice",
    description: "Our experienced team provides professional guidance in selecting the right parts for your vehicle and can offer installation recommendations."
  },
  {
    title: "Competitive Pricing",
    description: "Get quality parts at a fraction of new part prices with our affordable pricing structure. We regularly check market rates to ensure best value."
  }
];

const QualityGuaranteeSection: React.FC = () => {
  return (
    <div className="mb-12 md:mb-16">
      <h2 className="text-3xl font-bold mb-8 text-center">Our Quality Guarantee</h2>
      <div className="grid md:grid-cols-2 gap-6 md:gap-8">
        {guarantees.map((guarantee) => (
          <div key={guarantee.title} className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-4">{guarantee.title}</h3>
            <p className="text-gray-600">{guarantee.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QualityGuaranteeSection;