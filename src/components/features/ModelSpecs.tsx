import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface ModelSpecsProps {
  title: string;
  parts: string[];
}

export function ModelSpecs({ title, parts }: ModelSpecsProps) {
  return (
    <Card className="my-8">
      <CardContent className="p-6">
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {parts.map((part, index) => (
            <div key={index} className="p-4 bg-gray-50 rounded-lg">
              <p className="font-medium">{part}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}