'use client';

import { MapPin, Phone } from 'lucide-react';
import { companyInfo } from '@/config/company-info';

interface ServiceAreaInfoProps {
  className?: string;
}

export default function ServiceAreaInfo({ className }: ServiceAreaInfoProps) {
  const mainLocations = companyInfo.serviceArea.mainLocations;

  return (
    <section className={className}>
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Service Areas</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          We provide fast and reliable scrap car removal services across all Perth metropolitan areas.
          Same-day service available in most locations.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {mainLocations.map((location) => (
          <div
            key={location}
            className="flex items-center space-x-2 bg-blue-50 p-4 rounded-lg"
          >
            <MapPin className="w-5 h-5 text-blue-500" />
            <span className="text-gray-700">{location}</span>
          </div>
        ))}
      </div>

      <div className="mt-8 text-center bg-gradient-to-r from-blue-50 to-blue-100 p-8 rounded-lg">
        <h3 className="text-2xl font-bold mb-4">Don't See Your Area Listed?</h3>
        <p className="text-gray-600 mb-6">
          We likely still service your location! Contact us for confirmation and get your
          free quote today. Our service area is constantly expanding to better serve Perth residents.
        </p>
        <a
          href="tel:0477080980"
          className="inline-flex items-center justify-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          <Phone className="w-5 h-5" />
          <span>Call 0477 080 980</span>
        </a>
      </div>
    </section>
  );
}