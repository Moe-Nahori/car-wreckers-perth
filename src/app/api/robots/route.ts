export async function GET() {
  const robotsTxt = `
# https://www.robotstxt.org/robotstxt.html
User-agent: *
Allow: /
Disallow: /api/*
Disallow: /admin/*
Disallow: /dashboard/*

# Host
Host: https://icarwreckersperth.com.au

# Sitemaps
Sitemap: https://icarwreckersperth.com.au/sitemap.xml
`;

  return new Response(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain',
    },
  });
}