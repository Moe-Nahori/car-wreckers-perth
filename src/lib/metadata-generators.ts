import { type Metadata } from 'next';

interface MetadataParams {
  title: string;
  description: string;
  path: string;
  image?: string;
}

// Base metadata generator
export function generateMetadata({
  title,
  description,
  path,
  image = '/images/og-image.jpg',
}: MetadataParams): Metadata {
  const url = `https://icarwreckersperth.com.au${path}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
  };
}

// Service page metadata generator
export function generateServiceMetadata(service: string): Metadata {
  const title = `${service} Perth - Professional Car Removal Service`;
  const description = `Professional ${service.toLowerCase()} service in Perth. Get top cash for your vehicle with our free same-day car removal service. All suburbs covered.`;
  
  return generateMetadata({
    title,
    description,
    path: `/services/${service.toLowerCase().replace(/\s+/g, '-')}`,
  });
}

// Location page metadata generator
export function generateLocationMetadata(location: string): Metadata {
  const title = `Car Wreckers ${location} - Top Cash for Cars & Free Removal`;
  const description = `Looking for car wreckers in ${location}? We offer top cash for cars and free same-day car removal in ${location}. All vehicle types and conditions accepted.`;
  
  return generateMetadata({
    title,
    description,
    path: `/locations/${location.toLowerCase().replace(/\s+/g, '-')}`,
  });
}

// Car make/model page metadata generator
export function generateCarMetadata(make: string, model?: string): Metadata {
  const title = model 
    ? `Sell Your ${make} ${model} for Cash - Best Price Guaranteed`
    : `Sell Your ${make} for Cash - Top Dollar Paid for All Models`;
  
  const description = model
    ? `Get the best cash price for your ${make} ${model} in Perth. Free car removal, same-day service, and instant payment. All conditions accepted.`
    : `Looking to sell your ${make}? Get top dollar for any ${make} model in Perth. Free car removal and same-day service available.`;
  
  const path = model
    ? `/cars/${make.toLowerCase()}/${model.toLowerCase().replace(/\s+/g, '-')}`
    : `/cars/${make.toLowerCase()}`;
  
  return generateMetadata({
    title,
    description,
    path,
  });
}

// Blog post metadata generator
export function generateBlogMetadata(post: { title: string; excerpt: string; slug: string; image?: string }): Metadata {
  return generateMetadata({
    title: `${post.title} - iCar Wreckers Perth Blog`,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
    image: post.image,
  });
}