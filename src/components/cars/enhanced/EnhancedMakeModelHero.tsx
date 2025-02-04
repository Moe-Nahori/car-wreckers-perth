'use client';

import { BUTTON_TEXT } from '@/config/constants';
import { companyInfo } from '@/config/company-info';
import PhoneNumber from '@/components/ui/PhoneNumber';

interface PriceRange {
  poor: number;
  fair: number;
  good: number;
}

interface ValuedPart {
  name: string;
  averagePrice: number;
  condition: 'poor' | 'fair' | 'good';
}

interface EnhancedMakeModelHeroProps {
  make: string;
  model?: string;
  yearRange: string;
  popularParts?: string[];
  averagePrice?: PriceRange;
  imageUrl?: string;
  manufacturingHistory?: string;
}

export function EnhancedMakeModelHero({
  make,
  model,
  yearRange,
  popularParts = [],
  averagePrice,
  imageUrl,
  manufacturingHistory,
}: EnhancedMakeModelHeroProps) {
  const scrollToQuoteForm = () => {
    document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {model ? `${make} ${model} Wreckers Perth` : `${make} Wreckers Perth`}
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Get Top Dollar For Your {make} {model} ({yearRange})
            </p>
            
            {manufacturingHistory && (
              <div className="mb-6 text-blue-100">
                <h3 className="text-lg font-semibold mb-2">Manufacturing History</h3>
                <p>{manufacturingHistory}</p>
              </div>
            )}

            <div className="flex flex-wrap gap-4 mb-8">
              <PhoneNumber
                number={companyInfo.phone}
                className="bg-white text-blue-900 px-8 py-3 rounded-lg text-lg font-bold hover:bg-blue-50 transition"
                location={model ? `${make} ${model} Page` : `${make} Page`}
              >
                Call {companyInfo.phone}
              </PhoneNumber>
              <button
                onClick={scrollToQuoteForm}
                className="bg-green-500 hover:bg-green-600 px-8 py-3 rounded-lg text-lg font-bold transition"
              >
                {BUTTON_TEXT.QUOTE}
              </button>
            </div>
          </div>

          <div className="space-y-6">
            {averagePrice && (
              <div className="bg-white/10 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Average Price Range</h3>
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold">${averagePrice.poor}</div>
                    <div className="text-sm text-blue-200">Poor Condition</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold">${averagePrice.fair}</div>
                    <div className="text-sm text-blue-200">Fair Condition</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold">${averagePrice.good}</div>
                    <div className="text-sm text-blue-200">Good Condition</div>
                  </div>
                </div>
              </div>
            )}

            {popularParts && popularParts.length > 0 && (
              <div className="bg-white/10 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Popular Parts</h3>
                <ul className="grid grid-cols-2 gap-3">
                  {popularParts.map((part, index) => (
                    <li key={index} className="flex items-center">
                      <span className="w-2 h-2 bg-green-400 rounded-full mr-2" />
                      {part}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}