'use client';

import { Recycle, Droplets, LeafyGreen, Badge } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface EnvironmentalImpactProps {
  className?: string;
}

export default function EnvironmentalImpact({ className }: EnvironmentalImpactProps) {
  const benefits = [
    {
      icon: <Recycle className="w-12 h-12 text-green-500" />,
      title: "Responsible Recycling",
      description: "We recycle over 85% of every vehicle, ensuring maximum material recovery and minimum waste."
    },
    {
      icon: <Droplets className="w-12 h-12 text-green-500" />,
      title: "Safe Fluid Disposal",
      description: "All vehicle fluids are properly drained and disposed of following environmental guidelines."
    },
    {
      icon: <LeafyGreen className="w-12 h-12 text-green-500" />,
      title: "Reduced Carbon Footprint",
      description: "Recycling cars helps reduce the need for new raw materials and lowers carbon emissions."
    },
    {
      icon: <Badge className="w-12 h-12 text-green-500" />,
      title: "EPA Compliant",
      description: "Our processes comply with all environmental protection standards and regulations."
    }
  ];

  const recyclableItems = [
    "Metal Components (Steel, Aluminum)",
    "Batteries",
    "Catalytic Converters",
    "Tires",
    "Glass",
    "Plastics",
    "Engine Oil",
    "Radiator Coolant"
  ];

  return (
    <section className={className}>
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Environmental Commitment</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          At iCar Wrecker, we're committed to environmentally responsible car recycling.
          Our processes ensure that end-of-life vehicles are handled in a way that minimizes
          environmental impact while maximizing resource recovery.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {benefits.map((benefit, index) => (
          <Card key={index} className="text-center">
            <CardContent className="p-6">
              <div className="flex justify-center mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="bg-green-50 p-8 rounded-lg">
        <h3 className="text-2xl font-bold mb-6 text-center">What We Recycle</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {recyclableItems.map((item, index) => (
            <div key={index} className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-gray-700">{item}</span>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center text-gray-600">
          <p>
            Our eco-friendly approach ensures that your old vehicle doesn't end up in a landfill.
            Instead, we carefully process and recycle each component, contributing to a more
            sustainable future.
          </p>
        </div>
      </div>
    </section>
  );
}