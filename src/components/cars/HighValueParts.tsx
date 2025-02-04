'use client';

interface Part {
  name: string;
  averagePrice: number;
  condition: string;
  availability: string;
  description: string;
}

interface HighValuePartsProps {
  parts: Part[];
}

const HighValueParts = ({ parts }: HighValuePartsProps) => {
  if (!parts?.length) return null;

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold mb-6">High Value Parts Available</h2>
      <div className="space-y-6">
        {parts.map((part, index) => (
          <div
            key={index}
            className="border-b last:border-b-0 pb-4 last:pb-0"
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {part.name}
            </h3>
            <p className="text-xl font-bold text-green-600 mb-2">
              ${part.averagePrice.toLocaleString()}
            </p>
            <div className="grid grid-cols-2 gap-4 text-sm text-gray-600 mb-2">
              <div>
                <span className="font-semibold">Condition:</span> {part.condition}
              </div>
              <div>
                <span className="font-semibold">Availability:</span> {part.availability}
              </div>
            </div>
            <p className="text-gray-600">
              {part.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HighValueParts;