import { EnhancedMakeModelHero } from '@/components/cars/enhanced/EnhancedMakeModelHero';
import { isuzuData } from '@/data/cars/isuzu';
import { QuoteForm } from '@/components';
import Link from 'next/link';

export default function IsuzuWreckersPage() {
  // Calculate total range across all models
  const modelYears = Object.values(isuzuData.models).map(model => {
    const [start] = model.yearRange.split('-');
    return parseInt(start);
  });
  const earliestYear = Math.min(...modelYears);
  const yearRange = `${earliestYear}-2024`;

  // Get all popular parts across models
  const allPopularParts = Array.from(
    new Set(
      Object.values(isuzuData.models)
        .flatMap(model => model.popularParts)
        .slice(0, 10)
    )
  );

  return (
    <main>
      <EnhancedMakeModelHero
        make="Isuzu"
        yearRange={yearRange}
        popularParts={allPopularParts}
        manufacturingHistory={isuzuData.description}
      />

      <div className="bg-white py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Isuzu Models We Buy</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(isuzuData.models).map(([slug, model]) => (
              <Link
                href={`/cars/isuzu/${slug}`}
                key={slug}
                className="border rounded-lg p-6 hover:shadow-lg transition"
              >
                <h3 className="text-xl font-bold mb-2">{model.name}</h3>
                <p className="text-gray-600 mb-4">Years: {model.yearRange}</p>
                <div className="space-y-2">
                  <div className="text-sm font-semibold">Popular Parts:</div>
                  <ul className="text-sm text-gray-600">
                    {model.popularParts.slice(0, 3).map((part, index) => (
                      <li key={index} className="flex items-center">
                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2" />
                        {part}
                      </li>
                    ))}
                  </ul>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <QuoteForm />
    </main>
  );
}