import React from 'react';
import { Card } from '@/components/ui/card';
import CommonIssues from './CommonIssues';
import PartsList from './PartsList';
import ModelSpecifications from './ModelSpecifications';
import QuoteButton from '../QuoteButton';
import { CarMakeData } from '@/data/types';

interface ModelSpecs {
  engineOptions: string[];
  transmissionTypes: string[];
  commonFeatures: string[];
  popularUpgrades: string[];
}

interface CarModelPageProps {
  makeData: CarMakeData;
  modelKey: string;
  heroImageAlt: string;
  metaDescription: string;
  modelSpecs: ModelSpecs;
}

export default function CarModelPage({
  makeData,
  modelKey,
  heroImageAlt,
  metaDescription,
  modelSpecs
}: CarModelPageProps) {
  const modelData = makeData.models[modelKey];
  const modelIssues = makeData.commonIssues[modelKey];
  const compatibleModels = modelData.compatibleModels || [];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">{makeData.make} {modelData.name} Parts Perth</h1>
      
      <section className="mb-8">
        <Card className="p-6">
          <p className="text-lg mb-4">{metaDescription}</p>
          <QuoteButton 
            text={`Get Quote for ${makeData.make} ${modelData.name} Parts`}
            className="w-full md:w-auto"
          />
        </Card>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Vehicle Specifications</h2>
        <ModelSpecifications 
          yearRange={modelData.yearRange}
          specs={modelSpecs}
        />
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Common Issues</h2>
        <CommonIssues issues={modelIssues} />
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Popular Parts</h2>
        <PartsList 
          parts={modelData.popularParts}
          highValueParts={modelData.highValueParts}
        />
      </section>

      {compatibleModels.length > 0 && (
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Part Compatibility</h2>
          <Card className="p-6">
            <div className="space-y-4">
              {compatibleModels.map((comp, index) => (
                <div key={index} className="border-b last:border-b-0 pb-4 last:pb-0">
                  <h3 className="font-semibold mb-2">
                    {comp.make} {comp.model} ({comp.yearRange})
                  </h3>
                  <ul className="list-disc pl-5">
                    {comp.compatibleParts.map((part, idx) => (
                      <li key={idx}>{part}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Card>
        </section>
      )}

      <QuoteButton 
        text={`Get Quote for ${makeData.make} ${modelData.name} Parts`}
        className="w-full md:w-auto mt-8"
      />
    </div>
  );
}