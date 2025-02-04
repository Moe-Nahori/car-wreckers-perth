import { companyInfo } from '@/config/company-info';
import Link from 'next/link';

export default function ServiceHero() {
  return (
    <section className="bg-gradient-to-b from-blue-900 to-blue-800 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Cash for Cars Perth
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            Get Up To $9,999 Cash For Your Car Today! Instant Quotes & Same-Day Pickup
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            <a 
              href={`tel:${companyInfo.phone}`}
              className="bg-white text-blue-900 px-8 py-3 rounded-lg text-lg font-bold hover:bg-blue-50 transition"
            >
              {companyInfo.phone}
            </a>
            <Link
              href="#quote-form"
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg text-lg font-bold transition"
            >
              Get Instant Quote
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
              <div className="font-bold mb-1">Instant Payment</div>
              <div className="text-sm text-blue-100">Cash in hand before we leave</div>
            </div>
            <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
              <div className="font-bold mb-1">Free Towing</div>
              <div className="text-sm text-blue-100">No hidden fees or charges</div>
            </div>
            <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
              <div className="font-bold mb-1">Same Day Service</div>
              <div className="text-sm text-blue-100">Quick and hassle-free pickup</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}