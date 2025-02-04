import Hero from '@/components/sections/Hero';
import TrustSignals from '@/components/sections/TrustSignals';
import HowItWorks from '@/components/sections/HowItWorks';
import QuoteForm from '@/components/sections/QuoteForm';
import Testimonials from '@/components/sections/Testimonials';
import ServiceAreas from '@/components/sections/ServiceAreas';
import FAQSection from '@/components/sections/FAQSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Car Wreckers Perth | Up to $9,999 Cash for Cars | Free Car Removal',
  description: 'Perth\'s leading car wreckers offering instant cash up to $9,999 and free same-day car removal. We buy all vehicles regardless of condition. Top rates for scrap, damaged, and unwanted cars.',
  keywords: ['car wreckers perth', 'cash for cars perth', 'car removal perth', 'scrap car removal', 'damaged car buyers', 'old car removal'],
  openGraph: {
    title: 'Car Wreckers Perth | Up to $9,999 Cash for Cars | Free Car Removal',
    description: 'Get top dollar for your unwanted vehicle with Perth\'s most trusted car wreckers. Free same-day removal, instant cash payment, and best price guarantee.',
    type: 'website',
    locale: 'en_AU',
  }
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "iCar Wreckers Perth",
            "image": "https://icarwreckersperth.com.au/logo.png",
            "description": "Perth's leading car wreckers offering instant cash payments and free car removal services.",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Your Street Address",
              "addressLocality": "Perth",
              "addressRegion": "WA",
              "postalCode": "Your Postcode",
              "addressCountry": "AU"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "Your Latitude",
              "longitude": "Your Longitude"
            },
            "url": "https://icarwreckersperth.com.au",
            "telephone": "0412345678",
            "priceRange": "$100-$9999",
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday"
              ],
              "opens": "07:00",
              "closes": "19:00"
            },
            "sameAs": [
              "Your Facebook URL",
              "Your Instagram URL"
            ]
          })
        }}
      />
      
      <main>
        <Hero />
        <TrustSignals />
        <ServiceAreas />
        <HowItWorks />
        <QuoteForm />
        <Testimonials />
        <FAQSection />
      </main>
    </>
  );
}