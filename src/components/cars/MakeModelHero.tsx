'use client';

import { BUTTON_TEXT } from '@/config/constants';

interface MakeModelHeroProps {
  make: string;
  model?: string;
  years: string;
  image?: string;
}

export default function MakeModelHero({ make, model, years, image }: MakeModelHeroProps) {
  const scrollToQuoteForm = () => {
    document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {model ? `${make} ${model} Wreckers Perth` : `${make} Wreckers Perth`}
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            Get Top Dollar For Your {make} {model} ({years})
          </p>
          <div className="flex flex-wrap gap-4 mb-8">
            <a
              href="tel:0412345678"
              className="bg-white text-blue-900 px-8 py-3 rounded-lg text-lg font-bold hover:bg-blue-50 transition"
            >
              Call 0412 345 678
            </a>
            <button
              onClick={scrollToQuoteForm}
              className="bg-green-500 hover:bg-green-600 px-8 py-3 rounded-lg text-lg font-bold transition"
              suppressHydrationWarning
            >
              {BUTTON_TEXT.QUOTE}
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-white/10 p-6 rounded-lg text-center">
              <div className="text-3xl font-bold mb-2">Free</div>
              <div className="text-blue-100">Car Removal</div>
            </div>
            <div className="bg-white/10 p-6 rounded-lg text-center">
              <div className="text-3xl font-bold mb-2">$9,999</div>
              <div className="text-blue-100">Up to</div>
            </div>
            <div className="bg-white/10 p-6 rounded-lg text-center">
              <div className="text-3xl font-bold mb-2">1HR</div>
              <div className="text-blue-100">Quick Pickup</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
