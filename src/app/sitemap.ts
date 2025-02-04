import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://icarwreckersperth.com.au';
  
  // Main pages
  const mainPages = [
    '',
    'about',
    'contact',
    'quote',
    'faq',
    'blog',
    'testimonials',
    'environmental-commitment',
    'privacy-policy',
    'terms-of-service',
  ].map(route => ({
    url: `${baseUrl}/${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // Service pages
  const servicePages = [
    'car-removal',
    'cash-for-cars',
    'scrap-car-removal',
    'parts-dismantling',
    'accident-car-removal',
    'old-car-removal',
    'commercial-vehicle-removal',
  ].map(service => ({
    url: `${baseUrl}/services/${service}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  // Location pages
  const locationPages = [
    'perth-metro',
    'bellevue',
    'midland',
    'malaga',
    'welshpool',
    'osborne-park',
    'cannington',
    'joondalup',
    'fremantle',
    'rockingham',
    'armadale',
    'bayswater',
    'victoria-park',
    'morley',
    'bibra-lake',
  ].map(location => ({
    url: `${baseUrl}/locations/${location}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Car make/model pages
  const carMakes = {
    toyota: ['corolla', 'camry', 'hilux', 'rav4', 'prado', 'landcruiser'],
    holden: ['commodore', 'cruze', 'captiva', 'colorado', 'astra'],
    ford: ['ranger', 'falcon', 'territory', 'focus', 'mustang'],
    mazda: ['mazda3', 'cx-5', 'bt-50', 'mazda2', 'cx-3'],
    hyundai: ['i30', 'tucson', 'santa-fe', 'accent', 'elantra'],
    nissan: ['x-trail', 'navara', 'patrol', 'qashqai', 'pulsar'],
    landrover: ['rangerover', 'discovery', 'defender', 'range-rover-sport', 'evoque'],
  };

  const carPages = Object.entries(carMakes).flatMap(([make, models]) => [
    // Make page
    {
      url: `${baseUrl}/cars/${make}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    // Model pages
    ...models.map(model => ({
      url: `${baseUrl}/cars/${make}/${model}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
  ]);

  return [...mainPages, ...servicePages, ...locationPages, ...carPages];
}