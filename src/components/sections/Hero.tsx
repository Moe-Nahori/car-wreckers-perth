'use client';

import { Clock, DollarSign, Truck, Phone } from 'lucide-react';
import { BUTTON_TEXT } from '@/config/constants';
import { companyInfo } from '@/config/company-info';
import PhoneNumber from '@/components/ui/PhoneNumber';

export default function Hero() {
  const scrollToQuoteForm = () => {
    const element = document.getElementById('quote-form');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="hero-gradient min-h-[80vh] text-white">
      <div className="container mx-auto px-4 py-12">
        <nav className="mb-8">
          <PhoneNumber 
            number={companyInfo.phone}
            className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full text-lg font-medium backdrop-blur-sm transition"
            location="hero-top"
          >
            <Phone className="w-5 h-5" /> Call Now: {companyInfo.phone}
          </PhoneNumber>
        </nav>

        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="block">Cash For Cars Perth</span>
            <span className="block text-3xl md:text-4xl mt-2">Professional Car Wreckers & Removal</span>
          </h1>
          <h2 className="text-2xl md:text-3xl mb-4 text-blue-100">
            Get Up To $9,999 Cash For Your Unwanted Vehicle Today
          </h2>
          <div className="text-xl mb-8 text-blue-100 space-y-2">
            <p>Top Cash Prices for:</p>
            <ul className="grid grid-cols-2 gap-2">
              <li>✓ Damaged Cars</li>
              <li>✓ Scrap Vehicles</li>
              <li>✓ Old Cars</li>
              <li>✓ Accident Cars</li>
              <li>✓ Used Cars</li>
              <li>✓ Non-running Vehicles</li>
            </ul>
          </div>

          <div className="flex flex-col gap-4 mb-12">
            <button
              onClick={scrollToQuoteForm}
              className="bg-[#0051ff] hover:bg-blue-700 w-full px-8 py-4 rounded-md text-lg font-medium text-white transition-colors"
              suppressHydrationWarning
            >
              {BUTTON_TEXT.QUOTE}
            </button>
            
            <PhoneNumber 
              number={companyInfo.phone}
              className="bg-[#22a45d] hover:bg-[#1a8047] w-full px-8 py-4 rounded-md text-lg font-medium text-white transition-colors flex items-center justify-center gap-2"
              location="hero-main"
            >
              <Phone className="w-5 h-5" />
              {companyInfo.phone}
            </PhoneNumber>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="flex items-center gap-3 bg-white/10 p-4 rounded-lg">
              <Clock className="w-6 h-6 flex-shrink-0" />
              <div>
                <span className="text-lg block">Same Day Pickup</span>
                <span className="text-sm text-blue-100">Fast Service Across Perth</span>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-white/10 p-4 rounded-lg">
              <DollarSign className="w-6 h-6 flex-shrink-0" />
              <div>
                <span className="text-lg block">Instant Cash Payment</span>
                <span className="text-sm text-blue-100">Best Prices Guaranteed</span>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-white/10 p-4 rounded-lg">
              <Truck className="w-6 h-6 flex-shrink-0" />
              <div>
                <span className="text-lg block">Free Car Removal</span>
                <span className="text-sm text-blue-100">All Perth Metro Areas</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-8 text-center">
            <div className="bg-white/10 p-6 rounded-lg">
              <div className="text-3xl font-bold mb-2">15+</div>
              <div className="text-blue-100">Years Experience</div>
            </div>
            <div className="bg-white/10 p-6 rounded-lg">
              <div className="text-3xl font-bold mb-2">10k+</div>
              <div className="text-blue-100">Cars Purchased</div>
            </div>
            <div className="bg-white/10 p-6 rounded-lg">
              <div className="text-3xl font-bold mb-2">4.9</div>
              <div className="text-blue-100">Google Rating</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}