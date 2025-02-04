import { EnhancedMakeModelHero } from '@/components/cars/enhanced/EnhancedMakeModelHero';
import { nissanData } from '@/data/cars/nissan';
import { QuoteForm } from '@/components';
import { Card, CardContent } from '@/components/ui/card';
import { CommonIssues } from '@/components/features/CommonIssues';
import { ModelSpecs } from '@/components/features/ModelSpecs';
import PriceEstimator from '@/components/cars/PriceEstimator';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nissan Pulsar Wreckers Perth | Cash for Pulsar',
  description: 'Get top cash for your Nissan Pulsar in Perth. We buy Pulsars in any condition. 2000-2017 models accepted. Free quote and same-day removal.',
};

export default function PulsarPage() {
  const modelData = nissanData.models.pulsar;
  const commonIssuesData = nissanData.commonIssues.pulsar;

  const commonIssues = commonIssuesData.map(issue => ({
    title: issue.title,
    description: issue.description
  }));

  return (
    <main>
      <EnhancedMakeModelHero
        make="Nissan"
        model="Pulsar"
        yearRange={modelData.yearRange}
        popularParts={modelData.popularParts}
        averagePrice={modelData.averageValue}
      />

      <div className="container mx-auto px-4 py-8">
        <Card className="mb-8">
          <CardContent className="p-6">
            <p className="text-lg mb-4">
              The Nissan Pulsar is a reliable compact car that served Australian drivers well. 
              Whether your Pulsar has mechanical issues, accident damage, or has reached the end 
              of its service life, we offer competitive prices for all conditions.
            </p>
            <p className="text-lg">We accept all Nissan Pulsar models from {modelData.yearRange}.</p>
          </CardContent>
        </Card>

        <CommonIssues 
          title="Common Pulsar Issues We Handle"
          issues={commonIssues}
        />

        <ModelSpecs
          title="Pulsar Parts We Buy"
          parts={modelData.popularParts}
        />

        <PriceEstimator
          make="Nissan"
          model="Pulsar"
          priceRanges={modelData.priceRanges}
        />

        <Card className="mt-8">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4">Why Choose Us for Your Pulsar?</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Free quote and same-day removal service</li>
              <li>Top cash prices for all Pulsar models</li>
              <li>Licensed and experienced Pulsar wreckers</li>
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