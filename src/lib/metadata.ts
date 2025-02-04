import { Metadata } from 'next';

interface GenerateMetadataParams {
  title: string;
  description: string;
  path: string;
  image?: string;
}

export function generateMetadata({
  title,
  description,
  path,
  image = '/images/og-image.jpg',
}: GenerateMetadataParams): Metadata {
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
      siteName: 'iCar Wreckers Perth',
      locale: 'en_AU',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}