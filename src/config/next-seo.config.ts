import { DefaultSeoProps } from 'next-seo';

const config: DefaultSeoProps = {
  titleTemplate: '%s | iCar Wreckers Perth',
  defaultTitle: 'iCar Wreckers Perth - Top Cash for Cars & Free Car Removal',
  description: 'Perth\'s leading car wreckers offering top cash for cars and free car removal. We buy all vehicles regardless of condition. Same-day pickup available across Perth metro area.',
  canonical: 'https://icarwreckersperth.com.au',
  openGraph: {
    type: 'website',
    locale: 'en_AU',
    url: 'https://icarwreckersperth.com.au',
    siteName: 'iCar Wreckers Perth',
    title: 'iCar Wreckers Perth - Top Cash for Cars & Free Car Removal',
    description: 'Perth\'s leading car wreckers offering top cash for cars and free car removal. We buy all vehicles regardless of condition. Same-day pickup available across Perth metro area.',
    images: [
      {
        url: 'https://icarwreckersperth.com.au/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'iCar Wreckers Perth',
      },
    ],
  },
  twitter: {
    handle: '@icarwreckersperth',
    site: '@icarwreckersperth',
    cardType: 'summary_large_image',
  },
  additionalMetaTags: [
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1',
    },
    {
      name: 'theme-color',
      content: '#ffffff',
    },
  ],
  additionalLinkTags: [
    {
      rel: 'icon',
      href: '/favicon.ico',
    },
    {
      rel: 'apple-touch-icon',
      href: '/apple-touch-icon.png',
      sizes: '180x180',
    },
  ],
};

export default config;