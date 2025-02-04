import { EnhancedMakeModelHero } from '@/components/cars/enhanced/EnhancedMakeModelHero';
import { nissanData } from '@/data/cars/nissan';
import { QuoteForm } from '@/components';
import { Card, CardContent } from '@/components/ui/card';
import { CommonIssues } from '@/components/features/CommonIssues';
import { ModelSpecs } from '@/components/features/ModelSpecs';
import PriceEstimator from '@/components/cars/PriceEstimator';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nissan X-Trail Wreckers Perth | Cash for X-Trail',
  description: 'Get top cash for your Nissan X-Trail in Perth. We buy X-Trails in any condition. 2000-2024 models accepted. Free quote and same-day removal.',
};

export default function XTrailPage() {
  const modelData = nissanData.models['x-trail'];
  const commonIssuesData = nissanData.commonIssues['x-trail'];

  const commonIssues = commonIssuesData.map(issue => ({
    title: issue.title,
    description: issue.description
  }));

  return (
    <main>
      <EnhancedMakeModelHero
        make="Nissan"
        model="X-Trail"
        yearRange={modelData.yearRange}
        popularParts={modelData.popularParts}
        averagePrice={modelData.averageValue}
      />

      <div className="container mx-auto px-4 py-8">
        <Card className="mb-8">
          <CardContent className="p-6">
            <p className="text-lg mb-4">
              The Nissan X-Trail is a popular compact SUV known for its versatility and reliability. 
              Whether your X-Trail has been in an accident, has mechanical issues, or has simply reached 
              the end of its life, we offer top cash for all conditions.
            </p>
            <p className="text-lg">We accept all Nissan X-Trail models from {modelData.yearRange}.</p>
          </CardContent>
        </Card>

        <CommonIssues 
          title="Common X-Trail Issues We Handle"
          issues={commonIssues}
        />

        <ModelSpecs
          title="X-Trail Parts We Buy"
          parts={modelData.popularParts}
        />

        <PriceEstimator
          make="Nissan"
          model="X-Trail"
          priceRanges={modelData.priceRanges}
        />

        <Card className="mt-8">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4">Why Choose Us for Your X-Trail?</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Free quote and same-day removal service</li>
              <li>Top cash prices for all X-Trail models</li>
              <li>Licensed and experienced X-Trail wreckers</li>
              <li>Environmentally responsible disposal</li>
              <li>All paperwork handled professionally</li>
              <li>Perth-wide service coverage</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <QuoteForm />
    </main>
  );
}