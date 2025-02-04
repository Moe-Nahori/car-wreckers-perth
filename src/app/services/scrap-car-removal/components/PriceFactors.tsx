'use client';

import { GaugeCircle, Scale, Newspaper, Car, Wrench, BookOpen } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface PriceFactorsProps {
  className?: string;
}

export default function PriceFactors({ className }: PriceFactorsProps) {
  const factors = [
    {
      icon: <Car className="w-8 h-8 text-blue-500" />,
      title: "Make and Model",
      description: "Popular models and brands often command higher prices due to parts demand."
    },
    {
      icon: <GaugeCircle className="w-8 h-8 text-blue-500" />,
      title: "Vehicle Age",
      description: "While newer cars typically fetch more, classic vehicles can also be valuable."
    },
    {
      icon: <Scale className="w-8 h-8 text-blue-500" />,
      title: "Vehicle Weight",
      description: "Heavier vehicles often contain more recyclable metals, affecting the scrap value."
    },
    {
      icon: <Wrench className="w-8 h-8 text-blue-500" />,
      title: "Overall Condition",
      description: "Running vehicles or those with salvageable parts can be worth more."
    },
    {
      icon: <BookOpen className="w-8 h-8 text-blue-500" />,
      title: "Service History",
      description: "Well-maintained vehicles may have more valuable salvageable parts."
    },
    {
      icon: <Newspaper className="w-8 h-8 text-blue-500" />,
      title: "Market Demand",
      description: "Current demand for parts and scrap metal affects the offered price."
    }
  ];

  return (
    <section className={className}>
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">What Affects Your Car's Value?</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          We consider multiple factors to ensure you get the best possible price for your scrap car.
          Understanding these factors helps you get a better idea of your vehicle's worth.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {factors.map((factor, index) => (
          <Card key={index}>
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-50 p-3 rounded-lg">
                  {factor.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{factor.title}</h3>
                  <p className="text-gray-600">{factor.description}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-8 text-center">
        <p className="text-gray-600">
          Get in touch for a detailed assessment of your vehicle's value. 
          Our experienced team will consider all these factors to offer you the best possible price.
        </p>
      </div>
    </section>
  );
}