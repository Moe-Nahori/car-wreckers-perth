interface ValuedPart {
  name: string;
  averagePrice: number;
  condition: 'poor' | 'fair' | 'good';
  availability: 'high' | 'medium' | 'low';
  description: string;
}

interface PartsValueProps {
  make: string;
  model: string;
  yearRange: string;
  highValueParts: ValuedPart[];
}

export function PartsValue({ make, model, yearRange, highValueParts }: PartsValueProps) {
  const getAvailabilityColor = (availability: string) => {
    switch (availability) {
      case 'high':
        return 'bg-green-500';
      case 'medium':
        return 'bg-yellow-500';
      case 'low':
        return 'bg-red-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">High Value Parts - {make} {model} ({yearRange})</h2>
        <div className="grid gap-6">
          {highValueParts.map((part, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-semibold mb-2">{part.name}</h3>
                  <p className="text-gray-600 mb-4">{part.description}</p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-green-600">
                    ${part.averagePrice.toLocaleString()}
                  </div>
                  <div className="text-sm text-gray-500">Average Price</div>
                </div>
              </div>
              <div className="flex items-center justify-between mt-4">
                <div className="flex items-center">
                  <span className="text-sm text-gray-500 mr-2">Condition:</span>
                  <span className="font-medium capitalize">{part.condition}</span>
                </div>
                <div className="flex items-center">
                  <span className="text-sm text-gray-500 mr-2">Availability:</span>
                  <span
                    className={`w-3 h-3 rounded-full ${getAvailabilityColor(
                      part.availability
                    )} mr-1`}
                  />
                  <span className="font-medium capitalize">{part.availability}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}