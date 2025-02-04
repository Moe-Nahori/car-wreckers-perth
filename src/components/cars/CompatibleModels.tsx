import React from 'react';

interface CompatibleModel {
  make: string;
  model: string;
  yearRange: string;
  compatibleParts: string[];
}

interface CompatibleModelsProps {
  models: CompatibleModel[];
}

const CompatibleModels = ({ models }: CompatibleModelsProps) => {
  if (!models.length) return null;

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Compatible Models</h2>
      <div className="space-y-6">
        {models.map((model, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md p-6 border border-gray-200"
          >
            <h3 className="text-xl font-semibold mb-2">
              {model.make} {model.model}
            </h3>
            <p className="text-gray-600 mb-4">Years: {model.yearRange}</p>
            
            <div>
              <h4 className="font-semibold mb-2">Compatible Parts:</h4>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                {model.compatibleParts.map((part, partIndex) => (
                  <li key={partIndex}>{part}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompatibleModels;