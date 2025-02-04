'use client';

import { Alert, AlertDescription } from '@/components/ui/alert';
import { Info } from 'lucide-react';

interface PriceRange {
  condition: string;
  range: string;
  description: string;
}

interface PriceEstimatorProps {
  make: string;
  model: string;
  priceRanges: PriceRange[];
}

export default function PriceEstimator({ make, model, priceRanges }: PriceEstimatorProps) {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          {make} {model} Price Estimate
        </h2>

        {/* Disclaimer Alert */}
        <div className="max-w-4xl mx-auto mb-8">
          <Alert className="bg-blue-50 border-blue-200">
            <Info className="h-4 w-4 text-blue-500" />
            <AlertDescription className="text-sm text-blue-800">
              These prices are estimates only and serve as a general guide. The actual price for your {make} {model} will depend on various factors including its specific condition, mileage, modifications, and current market demand. Contact us for an accurate quote tailored to your vehicle.
            </AlertDescription>
          </Alert>
        </div>

        <div className="max-w-4xl mx-auto">
          {priceRanges.map((range, index) => (
            <div 
              key={index} 
              className="mb-6 p-6 bg-white rounded-lg shadow-md border-l-4 border-blue-500"
            >
              <div className="flex flex-wrap justify-between items-center mb-4">
                <h3 className="text-xl font-semibold">{range.condition}</h3>
                <span className="text-2xl font-bold text-blue-600">{range.range}</span>
              </div>
              <p className="text-gray-600">{range.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}