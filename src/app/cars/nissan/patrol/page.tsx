import { EnhancedMakeModelHero } from '@/components/cars/enhanced/EnhancedMakeModelHero';
import { nissanData } from '@/data/cars/nissan';
import { QuoteForm } from '@/components';
import { Card, CardContent } from '@/components/ui/card';
import { CommonIssues } from '@/components/features/CommonIssues';
import { ModelSpecs } from '@/components/features/ModelSpecs';
import PriceEstimator from '@/components/cars/PriceEstimator';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nissan Patrol Wreckers Perth | Cash for Patrol',
  description: 'Get top cash for your Nissan Patrol in Perth. We buy Patrols in any condition. 2000-2024 models accepted. Free quote and same-day removal.',
};

export default function PatrolPage() {
  const modelData = nissanData.models.patrol;
  const commonIssuesData = nissanData.commonIssues.patrol;

  const commonIssues = commonIssuesData.map(issue => ({
    title: issue.title,
    description: issue.description
  }));

  return (
    <main>
      <EnhancedMakeModelHero
        make="Nissan"
        model="Patrol"
        yearRange={modelData.yearRange}
        popularParts={modelData.popularParts}
        averagePrice={modelData.averageValue}
      />

      <div className="container mx-auto px-4 py-8">
        <Card className="mb-8">
          <CardContent className="p-6">
            <p className="text-lg mb-4">
              The Nissan Patrol is a legendary 4x4 with a strong following in Australia. 
              We buy all Patrol models regardless of condition, offering competitive prices for 
              vehicles with mechanical issues, accident damage, or age-related wear.
            </p>
            <p className="text-lg">We accept all Nissan Patrol models from {modelData.yearRange}.</p>
          </CardContent>
        </Card>

        <CommonIssues 
          title="Common Patrol Issues We Handle"
          issues={commonIssues}
        />

        <ModelSpecs
          title="Patrol Parts We Buy"
          parts={modelData.popularParts}
        />

        <PriceEstimator
          make="Nissan"
          model="Patrol"
          priceRanges={modelData.priceRanges}
        />

        <Card className="mt-8">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4">Why Choose Us for Your Patrol?</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Free quote and same-day removal service</li>
              <li>Top cash prices for all Patrol models</li>
              <li>Licensed and experienced Patrol wreckers</li>
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