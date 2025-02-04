"use client"

import ScrollButton from './ScrollButton';
import { companyInfo } from '@/config/company-info';

interface ServiceHeroProps {
  title: string;
  subtitle: string;
  description: string;
}

export default function ServiceHero({ title, subtitle, description }: ServiceHeroProps) {
  return (
    <div className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white">
      <div className="absolute inset-0 bg-grid-white/[0.1] bg-grid-16" />
      <div className="relative container mx-auto px-4 py-24">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
          <h2 className="text-2xl md:text-3xl text-blue-200 mb-6">{subtitle}</h2>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl">{description}</p>
          
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a 
              href={`tel:${companyInfo.phone}`}
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 md:py-4 md:text-lg md:px-8 transition-colors"
            >
              Call Now: {companyInfo.phone}
            </a>
            <ScrollButton targetId="quote-form" />
          </div>
        </div>
      </div>
    </div>
  );
}