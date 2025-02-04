'use client';

import React from 'react';
import Link from 'next/link';

const CTASection: React.FC = () => {
  return (
    <div className="text-center bg-gray-50 rounded-lg p-8">
      <h2 className="text-3xl font-bold mb-4">Need Car Parts?</h2>
      <p className="text-xl text-gray-600 mb-8">Contact us for availability and pricing of your required parts</p>
      <div className="flex justify-center gap-4 flex-wrap">
        <Link 
          href="/quote" 
          className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
        >
          Get Parts Quote
        </Link>
        <a 
          href="tel:0412345678" 
          className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
        >
          Call Now: 0412 345 678
        </a>
      </div>
    </div>
  );
};

export default CTASection;