import React from 'react';
import Link from 'next/link';
import { Card } from '@/components/ui/card';
import QuoteButton from '../QuoteButton';
import { CarMakeData } from '@/data/types';

interface CarMakePageProps {
  makeData: CarMakeData;
  heroImageAlt: string;
  metaDescription: string;
}

export default function CarMakePage({
  makeData,
  heroImageAlt,
  metaDescription
}: CarMakePageProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">{makeData.make} Parts Perth</h1>
      
      <section className="mb-8">
        <Card className="p-6">
          <p className="text-lg mb-4">{metaDescription}</p>
          <QuoteButton 
            text={`Get Quote for ${makeData.make} Parts`}
            className="w-full md:w-auto"
          />
        </Card>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Available Models</h2>
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {Object.entries(makeData.models).map(([key, model]) => (
            <Link href={`/cars/${makeData.make.toLowerCase()}/${model.name.toLowerCase()}`} key={key}>
              <Card className="p-4 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-2">{model.name}</h3>
                <p className="text-sm text-gray-600 mb-2">Years: {model.yearRange}</p>
                <p className="text-sm">
                  Popular parts available: {model.popularParts.slice(0, 3).join(', ')}
                </p>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">About {makeData.make}</h2>
        <Card className="p-6">
          <p className="mb-4">{makeData.description}</p>
          <p className="text-sm">
            <span className="font-medium">Australian Presence:</span> {makeData.australianPresence}
          </p>
        </Card>
      </section>

      <QuoteButton 
        text={`Get Quote for ${makeData.make} Parts`}
        className="w-full md:w-auto mt-8"
      />
    </div>
  );
}