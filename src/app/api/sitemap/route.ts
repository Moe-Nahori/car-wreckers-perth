import { services, locations, carMakes } from '@/config/site-data';

export async function GET() {
  const baseUrl = 'https://icarwreckersperth.com.au';
  
  // Helper function to format date
  const formatDate = (date: Date) => date.toISOString().split('T')[0];
  const today = formatDate(new Date());

  // Start building sitemap
  let sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n';
  sitemap += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

  // Main pages
  const mainPages = [
    { url: '', priority: '1.0' },
    { url: 'about', priority: '0.8' },
    { url: 'contact', priority: '0.8' },
    { url: 'quote', priority: '0.9' },
    { url: 'blog', priority: '0.7' },
    { url: 'testimonials', priority: '0.7' },
    { url: 'faq', priority: '0.6' },
    { url: 'privacy-policy', priority: '0.3' },
    { url: 'terms-of-service', priority: '0.3' },
    { url: 'environmental-commitment', priority: '0.6' },
  ];

  // Add main pages
  mainPages.forEach(page => {
    sitemap += `  <url>
    <loc>${baseUrl}/${page.url}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${page.priority}</priority>
  </url>\n`;
  });

  // Add service pages
  services.forEach(service => {
    sitemap += `  <url>
    <loc>${baseUrl}/services/${service.toLowerCase().replace(/\s+/g, '-')}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>\n`;
  });

  // Add location pages
  locations.forEach(location => {
    sitemap += `  <url>
    <loc>${baseUrl}/locations/${location.toLowerCase().replace(/\s+/g, '-')}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>\n`;
  });

  // Add car make/model pages
  Object.entries(carMakes).forEach(([make, models]) => {
    // Make page
    sitemap += `  <url>
    <loc>${baseUrl}/cars/${make.toLowerCase().replace(/\s+/g, '-')}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>\n`;

    // Model pages
    models.forEach(model => {
      sitemap += `  <url>
    <loc>${baseUrl}/cars/${make.toLowerCase().replace(/\s+/g, '-')}/${model.toLowerCase().replace(/\s+/g, '-')}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.6</priority>
  </url>\n`;
    });
  });

  sitemap += '</urlset>';

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}