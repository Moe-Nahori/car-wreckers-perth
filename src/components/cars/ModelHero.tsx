import React from 'react';

interface ModelHeroProps {
  make: string;
  model: string;
  yearRange: string;
  popularParts: string[];
}

const ModelHero = ({ make, model, yearRange, popularParts }: ModelHeroProps) => {
  return (
    <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {make} {model} Parts
          </h1>
          <p className="text-xl mb-6">Years: {yearRange}</p>
          
          <div className="mt-8">
            <h2 className="text-2xl font-semibold mb-4">Popular Parts We Stock</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {popularParts.map((part, index) => (
                <div
                  key={index}
                  className="bg-gray-800 bg-opacity-50 p-4 rounded-lg"
                >
                  <p className="text-lg">{part}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModelHero;