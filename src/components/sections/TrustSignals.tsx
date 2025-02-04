'use client';

import { Shield, ThumbsUp, Truck, Banknote } from 'lucide-react';

export default function TrustSignals() {
  const trustFactors = [
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Licensed & Insured",
      description: "Fully licensed car wrecker in Perth with comprehensive insurance coverage"
    },
    {
      icon: <ThumbsUp className="w-12 h-12" />,
      title: "Best Price Guarantee",
      description: "We offer the highest cash payments for all types of vehicles"
    },
    {
      icon: <Truck className="w-12 h-12" />,
      title: "Free Pickup",
      description: "Free towing service across all Perth metro areas"
    },
    {
      icon: <Banknote className="w-12 h-12" />,
      title: "Instant Payment",
      description: "Get paid on the spot - cash or bank transfer available"
    }
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us?</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trustFactors.map((factor, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="text-blue-600 mb-4">
                {factor.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">
                {factor.title}
              </h3>
              <p className="text-gray-600">
                {factor.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}