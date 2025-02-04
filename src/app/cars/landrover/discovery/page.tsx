'use client';

import MakeModelHero from '@/components/cars/MakeModelHero';
import CommonIssues from '@/components/cars/CommonIssues';
import PriceEstimator from '@/components/cars/PriceEstimator';
import { QuoteForm } from '@/components';
import { landroverData } from '@/data/cars/landrover';

export default function DiscoveryPage() {
  const modelData = landroverData.models.discovery;

  if (!modelData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-white">
      <MakeModelHero
        make="Land Rover"
        model="Discovery"
        years={modelData.yearRange}
      />
      
      <section className="bg-gray-50 py-12">
        <CommonIssues
          make="Land Rover"
          model="Discovery"
          issues={modelData.commonIssues}
        />
      </section>

      <section className="py-12">
        <PriceEstimator
          make="Land Rover"
          model="Discovery"
          priceRanges={modelData.priceRanges}
        />
      </section>

      <section className="py-12 bg-gray-50">
        <QuoteForm />
      </section>
    </div>
  );
}