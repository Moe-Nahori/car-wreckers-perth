import Image from 'next/image';
import Link from 'next/link';
import { DollarSign, Clock, Car } from 'lucide-react';
import { companyInfo } from '@/config/company-info';

export function Hero() {
  return (
    <header className="hero-gradient min-h-[80vh] text-white relative">
      <div className="absolute inset-0 bg-black/40 z-10"></div>
      <Image
        src="/images/cash-for-cars-hero.jpg"
        alt="Cash for Cars Perth - Get top dollar for your vehicle"
        fill
        className="object-cover"
        priority
      />
      
      <div className="container mx-auto px-4 py-12 relative z-20">
        <nav className="mb-8">
          <a 
            href={`tel:${companyInfo.phone}`}
            className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full text-lg font-medium backdrop-blur-sm transition"
          >
            📞 Call Now: {companyInfo.phone}
          </a>
        </nav>

        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Cash For Cars Perth
          </h1>
          <p className="text-2xl md:text-3xl mb-8 text-blue-100">
            Get Up To $9,999 Cash For Your Car Today - All Perth Suburbs Covered
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            <a 
              href={`tel:${companyInfo.phone}`}
              className="bg-white text-blue-900 px-8 py-3 rounded-lg text-lg font-bold hover:bg-blue-50 transition"
            >
              {companyInfo.phone}
            </a>
            <Link
              href="/quote"
              className="bg-green-500 hover:bg-green-600 px-8 py-3 rounded-lg text-lg font-bold transition"
            >
              Get Instant Quote
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="flex items-center gap-3 bg-white/10 p-4 rounded-lg">
              <Clock className="w-6 h-6" />
              <span className="text-lg">Same Day Payment</span>
            </div>
            <div className="flex items-center gap-3 bg-white/10 p-4 rounded-lg">
              <DollarSign className="w-6 h-6" />
              <span className="text-lg">Best Cash Rates</span>
            </div>
            <div className="flex items-center gap-3 bg-white/10 p-4 rounded-lg">
              <Car className="w-6 h-6" />
              <span className="text-lg">Free Car Removal</span>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-8 text-center">
            <div className="bg-white/10 p-6 rounded-lg">
              <div className="text-3xl font-bold mb-2">$9,999</div>
              <div className="text-blue-100">Max Cash Offer</div>
            </div>
            <div className="bg-white/10 p-6 rounded-lg">
              <div className="text-3xl font-bold mb-2">15+</div>
              <div className="text-blue-100">Years Experience</div>
            </div>
            <div className="bg-white/10 p-6 rounded-lg">
              <div className="text-3xl font-bold mb-2">4.9★</div>
              <div className="text-blue-100">Customer Rating</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}