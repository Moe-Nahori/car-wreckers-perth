import { EnhancedMakeModelHero } from '@/components/cars/enhanced/EnhancedMakeModelHero';
import { bmwData } from '@/data/cars/bmw';
import { QuoteForm } from '@/components';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'BMW Wreckers Perth | Cash for BMW Cars | Free BMW Removal',
  description: 'Leading BMW wreckers in Perth. Best cash prices for all BMW models including 3 Series, 5 Series, X3, X5, and M3. Free BMW car removal service across Perth.',
};

export default function BMWWreckersPage() {
  // Calculate total range across all models
  const modelYears = Object.values(bmwData.models).map(model => {
    const [start] = model.yearRange.split('-');
    return parseInt(start);
  });
  const earliestYear = Math.min(...modelYears);
  const yearRange = `${earliestYear}-2024`;

  // Get all popular parts across models
  const allPopularParts = Array.from(
    new Set(
      Object.values(bmwData.models)
        .flatMap(model => model.popularParts)
        .slice(0, 10)
    )
  );

  return (
    <main>
      <EnhancedMakeModelHero
        make="BMW"
        yearRange={yearRange}
        popularParts={allPopularParts}
        manufacturingHistory={bmwData.description}
      />

      <div className="bg-white py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">BMW Models We Buy</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(bmwData.models).map(([slug, model]) => (
              <Link
                href={`/cars/bmw/${slug === '3series' ? '3-series' : 
                                  slug === '5series' ? '5-series' : 
                                  slug}`}
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