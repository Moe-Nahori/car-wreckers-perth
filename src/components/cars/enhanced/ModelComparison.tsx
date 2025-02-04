interface CompatibleModel {
  make: string;
  model: string;
  yearRange: string;
  compatibleParts: string[];
}

interface ModelComparisonProps {
  make: string;
  model: string;
  compatibleModels: CompatibleModel[];
}

export function ModelComparison({ make, model, compatibleModels }: ModelComparisonProps) {
  return (
    <div className="bg-white py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Parts Compatibility - {make} {model}</h2>
        <div className="grid gap-6">
          {compatibleModels.map((compatibleModel, index) => (
            <div key={index} className="border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">
                {compatibleModel.make} {compatibleModel.model} ({compatibleModel.yearRange})
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {compatibleModel.compatibleParts.map((part, partIndex) => (
                  <div
                    key={partIndex}
                    className="bg-gray-50 rounded-lg p-3 text-center hover:bg-gray-100 transition"
                  >
                    {part}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}