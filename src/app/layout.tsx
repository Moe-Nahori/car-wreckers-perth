import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Footer from '@/components/ui/footer';
import StickyCallButton from '@/components/StickyCallButton';
import LiveChat from '@/components/LiveChat';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://icarwreckersperth.com.au'),
  title: {
    default: 'iCar Wreckers Perth - Top Cash for Cars & Free Car Removal',
    template: '%s | iCar Wreckers Perth'
  },
  description: 'Perth\'s leading car wreckers offering top cash for cars and free car removal. We buy all vehicles regardless of condition with same-day pickup available across Perth metro area.',
  keywords: ['car wreckers perth', 'cash for cars perth', 'car removal perth', 'scrap car removal', 'sell my car perth'],
  authors: [{ name: 'iCar Wreckers Perth' }],
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
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_AU',
    url: 'https://icarwreckersperth.com.au',
    siteName: 'iCar Wreckers Perth',
    title: 'iCar Wreckers Perth - Top Cash for Cars & Free Car Removal',
    description: 'Perth\'s leading car wreckers offering top cash for cars and free car removal. Expert car removal service across Perth metro area.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'iCar Wreckers Perth',
      },
    ],
  },
  manifest: '/manifest.json',
  icons: {
    icon: [
      { url: '/favicon/favicon.svg', type: 'image/svg+xml' }
    ],
    shortcut: '/favicon/favicon.svg',
    apple: [
      { url: '/favicon/favicon.svg' }
    ],
  },
  verification: {
    google: 'google-site-verification-code', // Add your actual verification code
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon/favicon.svg" />
      </head>
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
          <StickyCallButton />
          <LiveChat />
        </div>
      </body>
    </html>
  );
}