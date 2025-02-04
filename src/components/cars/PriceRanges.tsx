interface PriceRange {
  condition: string;
  range: string;
  description: string;
}

interface PriceRangesProps {
  ranges: PriceRange[];
}

const PriceRanges = ({ ranges }: PriceRangesProps) => {
  if (!ranges || ranges.length === 0) {
    return null;
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold mb-6">Price Ranges by Condition</h2>
      <div className="space-y-6">
        {ranges.map((range, index) => (
          <div
            key={index}
            className="border-b last:border-b-0 pb-4 last:pb-0"
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {range.condition}
            </h3>
            <p className="text-xl font-bold text-green-600 mb-2">
              {range.range}
            </p>
            <p className="text-gray-600">
              {range.description}
            </p>
          </div>
        ))}
      </div>
      <div className="mt-6 pt-4 border-t">
        <p className="text-sm text-gray-500">
          * Prices are estimates and may vary based on vehicle specifics, market conditions, and location within Perth.
        </p>
      </div>
    </div>
  );
};

export default PriceRanges;