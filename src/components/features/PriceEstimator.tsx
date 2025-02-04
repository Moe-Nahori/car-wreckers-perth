import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface PriceEstimatorProps {
  title: string;
  priceRange: {
    poor: number;
    fair: number;
    good: number;
    excellent: number;
  };
}

export function PriceEstimator({ title, priceRange }: PriceEstimatorProps) {
  return (
    <Card className="my-8">
      <CardContent className="p-6">
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-4 bg-red-50 rounded-lg">
            <h3 className="font-semibold mb-2">Poor Condition</h3>
            <p className="text-2xl font-bold text-red-600">${priceRange.poor}</p>
            <p className="text-sm text-gray-600">Non-running, severe damage</p>
          </div>
          <div className="p-4 bg-orange-50 rounded-lg">
            <h3 className="font-semibold mb-2">Fair Condition</h3>
            <p className="text-2xl font-bold text-orange-600">${priceRange.fair}</p>
            <p className="text-sm text-gray-600">Running with issues</p>
          </div>
          <div className="p-4 bg-green-50 rounded-lg">
            <h3 className="font-semibold mb-2">Good Condition</h3>
            <p className="text-2xl font-bold text-green-600">${priceRange.good}</p>
            <p className="text-sm text-gray-600">Running, minor issues</p>
          </div>
          <div className="p-4 bg-blue-50 rounded-lg">
            <h3 className="font-semibold mb-2">Excellent Condition</h3>
            <p className="text-2xl font-bold text-blue-600">${priceRange.excellent}</p>
            <p className="text-sm text-gray-600">Perfect running order</p>
          </div>
        </div>
        <p className="mt-4 text-sm text-gray-500">
          *Prices are estimates and may vary based on specific vehicle condition and market value
        </p>
      </CardContent>
    </Card>
  );
}