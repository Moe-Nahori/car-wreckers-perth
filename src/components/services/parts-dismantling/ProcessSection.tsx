'use client';

import React from 'react';

interface ProcessStep {
  number: number;
  title: string;
  description: string;
}

const processSteps: ProcessStep[] = [
  {
    number: 1,
    title: "Vehicle Assessment",
    description: "Professional inspection and documentation of all serviceable parts"
  },
  {
    number: 2,
    title: "Safe Dismantling",
    description: "Careful removal of parts using specialized equipment"
  },
  {
    number: 3,
    title: "Testing & Cleaning",
    description: "Comprehensive quality testing and professional cleaning"
  },
  {
    number: 4,
    title: "Storage & Inventory",
    description: "Organized cataloging and secure storage system"
  }
];

const ProcessSection: React.FC = () => {
  return (
    <div className="bg-gray-50 rounded-lg p-6 md:p-8 mb-12 md:mb-16">
      <h2 className="text-3xl font-bold mb-8 text-center">Our Dismantling Process</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {processSteps.map((step) => (
          <div key={step.number} className="flex flex-col items-center text-center">
            <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mb-4 text-xl font-bold">
              {step.number}
            </div>
            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
            <p className="text-gray-600">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProcessSection;