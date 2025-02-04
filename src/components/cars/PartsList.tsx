import React from 'react';
import { Card } from '@/components/ui/card';

interface HighValuePart {
  name: string;
  averagePrice: number;
  condition: string;
  availability: string;
  description: string;
}

interface PartsListProps {
  parts: string[];
  highValueParts: HighValuePart[];
}

export default function PartsList({ parts, highValueParts }: PartsListProps) {
  return (
    <div className="space-y-6">
      <Card className="p-6">
        <h3 className="text-xl font-semibold mb-4">Common Parts</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {parts.map((part, index) => (
            <div key={index} className="p-3 bg-gray-50 rounded-lg">
              {part}
            </div>
          ))}
        </div>
      </Card>

      <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
        {highValueParts.map((part, index) => (
          <Card key={index} className="p-4">
            <h3 className="text-lg font-semibold mb-2">{part.name}</h3>
            <p className="mb-3 text-gray-600">{part.description}</p>
            <div className="space-y-2 text-sm">
              <p>
                <span className="font-medium">Average Price:</span>{' '}
                ${part.averagePrice.toLocaleString()}
              </p>
              <p>
                <span className="font-medium">Condition:</span>{' '}
                {part.condition}
              </p>
              <p>
                <span className="font-medium">Availability:</span>{' '}
                {part.availability}
              </p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}