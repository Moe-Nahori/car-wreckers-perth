import React from 'react';
import { Card } from '@/components/ui/card';

interface ModelSpecsProps {
  yearRange: string;
  specs: {
    engineOptions: string[];
    transmissionTypes: string[];
    commonFeatures: string[];
    popularUpgrades: string[];
  };
}

export default function ModelSpecifications({ yearRange, specs }: ModelSpecsProps) {
  return (
    <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
      <Card className="p-4">
        <h3 className="text-lg font-semibold mb-3">Production Years</h3>
        <p>{yearRange}</p>
        
        <h3 className="text-lg font-semibold mt-4 mb-3">Engine Options</h3>
        <ul className="list-disc pl-5 space-y-1">
          {specs.engineOptions.map((engine, index) => (
            <li key={index}>{engine}</li>
          ))}
        </ul>

        <h3 className="text-lg font-semibold mt-4 mb-3">Transmission Types</h3>
        <ul className="list-disc pl-5 space-y-1">
          {specs.transmissionTypes.map((transmission, index) => (
            <li key={index}>{transmission}</li>
          ))}
        </ul>
      </Card>

      <Card className="p-4">
        <h3 className="text-lg font-semibold mb-3">Common Features</h3>
        <ul className="list-disc pl-5 space-y-1">
          {specs.commonFeatures.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>

        <h3 className="text-lg font-semibold mt-4 mb-3">Popular Upgrades</h3>
        <ul className="list-disc pl-5 space-y-1">
          {specs.popularUpgrades.map((upgrade, index) => (
            <li key={index}>{upgrade}</li>
          ))}
        </ul>
      </Card>
    </div>
  );
}