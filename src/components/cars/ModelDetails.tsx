import { QuoteForm } from '@/components';

interface ModelDetailsProps {
  make: string;
  model: string;
  yearRange: string;
  popularParts: string[];
  commonIssues: string[];
}

export function ModelDetails({
  make,
  model,
  yearRange,
  popularParts,
  commonIssues,
}: ModelDetailsProps) {
  return (
    <main>
      <div className="bg-gradient-to-r from-green-600 to-green-800 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-white mb-4">{make} {model} Wreckers Perth</h1>
          <p className="text-lg text-white mb-2">Years: {yearRange}</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Popular Parts Section */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Popular {model} Parts</h2>
            <div className="bg-white rounded-lg shadow-md p-6">
              <ul className="space-y-3">
                {popularParts.map((part, index) => (
                  <li key={index} className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3" />
                    {part}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Common Issues Section */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Common {model} Issues</h2>
            <div className="bg-white rounded-lg shadow-md p-6">
              <ul className="space-y-3">
                {commonIssues.map((issue, index) => (
                  <li key={index} className="flex items-center">
                    <span className="w-2 h-2 bg-red-500 rounded-full mr-3" />
                    {issue}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Info Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">About {make} {model}</h2>
          <div className="bg-white rounded-lg shadow-md p-6">
            <p className="text-gray-700 leading-relaxed">
              Looking for quality {make} {model} parts in Perth? Our team specializes in salvaging and 
              recycling {model} vehicles from years {yearRange}. We carefully inspect and test all parts 
              before making them available to our customers. Whether you need engine components, body 
              parts, or interior pieces, we likely have what you're looking for in our extensive inventory.
            </p>
            <div className="mt-4">
              <h3 className="font-semibold text-lg mb-2">Why Choose Us for {model} Parts?</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Quality tested parts with warranty</li>
                <li>Competitive pricing</li>
                <li>Expert advice on part compatibility</li>
                <li>Fast delivery across Perth metro area</li>
                <li>Professional installation available</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <QuoteForm />
    </main>
  );
}