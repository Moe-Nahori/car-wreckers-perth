import { companyInfo } from '@/config/company-info';

interface JsonLdScriptProps {
  type: 'Organization' | 'LocalBusiness' | 'Service' | 'Product';
  data?: Record<string, any>;
}

export default function JsonLdScript({ type, data }: JsonLdScriptProps) {
  const baseSchema = {
    '@context': 'https://schema.org',
    '@type': type,
    name: companyInfo.name,
    url: companyInfo.website,
    logo: `${companyInfo.website}/images/logo.png`,
    image: `${companyInfo.website}/images/storefront.jpg`,
    description: companyInfo.description,
    address: {
      '@type': 'PostalAddress',
      streetAddress: companyInfo.address.street,
      addressLocality: companyInfo.address.city,
      addressRegion: companyInfo.address.state,
      postalCode: companyInfo.address.postcode,
      addressCountry: 'AU',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: companyInfo.coordinates.latitude,
      longitude: companyInfo.coordinates.longitude,
    },
    telephone: companyInfo.phone,
    email: companyInfo.email,
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '07:00',
        closes: '19:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Saturday', 'Sunday'],
        opens: '07:00',
        closes: '19:00',
      }
    ],
    sameAs: [
      companyInfo.socialMedia.facebook,
      companyInfo.socialMedia.instagram,
      companyInfo.socialMedia.linkedin,
    ].filter(Boolean),  // Remove undefined values
    areaServed: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: companyInfo.coordinates.latitude,
        longitude: companyInfo.coordinates.longitude,
      },
      geoRadius: companyInfo.serviceArea.radius,
    },
  };

  const schema = {
    ...baseSchema,
    ...data,
  };

  // Serialize the schema to a JSON string
  const jsonLdString = JSON.stringify(schema);

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: jsonLdString }}
    />
  );
}