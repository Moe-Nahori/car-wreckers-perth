import { Metadata } from 'next';
import { generateMetadata } from '@/lib/metadata';
import { companyInfo } from '@/config/company-info';
import QuoteForm from '@/components/sections/QuoteForm';
import ProcessSteps from './components/ProcessSteps';
import Benefits from './components/Benefits';
import ServiceAreaInfo from './components/ServiceAreaInfo';
import ServiceFAQ from './components/ServiceFAQ';
import ServiceHero from './components/ServiceHero';
import AcceptedVehicles from './components/AcceptedVehicles';
import WhyChooseUs from './components/WhyChooseUs';
import EnvironmentalImpact from './components/EnvironmentalImpact';
import PriceFactors from './components/PriceFactors';

export const metadata = generateMetadata({
  title: 'Scrap Car Removal Perth | Top Dollar for Scrap Cars | Free Towing',
  description: 'Get top cash for your scrap car in Perth. Same-day pickup, free towing, and instant quotes. Professional and eco-friendly car disposal across Perth metro area. Up to $9,999 instant cash.',
  path: '/services/scrap-car-removal',
});

export default function ScrapCarRemoval() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Scrap Car Removal Perth",
            "provider": {
              "@type": "LocalBusiness",
              "name": companyInfo.name,
              "address": {
                "@type": "PostalAddress",
                "streetAddress": companyInfo.address.street,
                "addressLocality": companyInfo.address.suburb,
                "addressRegion": companyInfo.address.state,
                "postalCode": companyInfo.address.postcode,
                "addressCountry": "AU"
              },
              "telephone": companyInfo.phone,
              "priceRange": "$$"
            },
            "areaServed": {
              "@type": "City",
              "name": "Perth"
            },
            "description": "Professional scrap car removal service in Perth offering top cash for unwanted vehicles. Free towing, same-day service, and eco-friendly disposal.",
            "serviceType": "Car Removal Service",
            "offers": {
              "@type": "Offer",
              "description": "Up to $9,999 cash for scrap cars with free towing"
            }
          })
        }}
      />

      <main className="min-h-screen">
        <ServiceHero
          title="Scrap Car Removal Perth"
          subtitle="Get Up To $9,999 Cash For Your Scrap Car Today"
          description="Turn your old, damaged, or unwanted car into instant cash. We offer the highest prices for scrap cars in Perth with free towing and same-day pickup."
        />
        
        <div className="container mx-auto px-4">
          {/* Why Choose Us Section */}
          <WhyChooseUs className="py-12" />

          {/* Process Steps with Timeline */}
          <ProcessSteps className="py-12" />

          {/* Accepted Vehicles Grid */}
          <AcceptedVehicles className="py-12" />

          {/* Price Factors Section */}
          <PriceFactors className="py-12" />

          {/* Benefits with Icons */}
          <Benefits className="py-12" />

          {/* Environmental Impact */}
          <EnvironmentalImpact className="py-12" />

          {/* Quote Form */}
          <div className="py-12">
            <h2 className="text-3xl font-bold text-center mb-8">Get Your Free Quote Today</h2>
            <QuoteForm />
          </div>

          {/* Service Areas */}
          <ServiceAreaInfo className="py-12" />

          {/* FAQs */}
          <ServiceFAQ className="py-12" />
        </div>
      </main>
    </>
  );
}