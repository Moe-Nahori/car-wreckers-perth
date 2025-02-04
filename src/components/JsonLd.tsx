'use client';

import { companyInfo } from '@/config/company-info';

interface JsonLdProps {
  type: 'Organization' | 'LocalBusiness' | 'Service' | 'FAQPage';
  data?: Record<string, any>;
  additionalSchemas?: Record<string, any>[];
}

export default function JsonLd({ type, data, additionalSchemas = [] }: JsonLdProps) {
  const allSchemas = [
    {
      '@context': 'https://schema.org',
      '@type': type,
      ...data
    },
    ...additionalSchemas
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(allSchemas) }}
    />
  );
}