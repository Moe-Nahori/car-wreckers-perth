import { EnhancedMakeModelHero } from '@/components/cars/enhanced/EnhancedMakeModelHero';
import { nissanData } from '@/data/cars/nissan';
import { QuoteForm } from '@/components';
import { Card, CardContent } from '@/components/ui/card';
import { CommonIssues } from '@/components/features/CommonIssues';
import { ModelSpecs } from '@/components/features/ModelSpecs';
import PriceEstimator from '@/components/cars/PriceEstimator';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nissan Qashqai Wreckers Perth | Cash for Qashqai',
  description: 'Get top cash for your Nissan Qashqai in Perth. We buy Qashqais in any condition. 2007-2024 models accepted. Free quote and same-day removal.',
};

export default function QashqaiPage() {
  const modelData = nissanData.models.qashqai;
  const commonIssuesData = nissanData.commonIssues.qashqai;

  const commonIssues = commonIssuesData.map(issue => ({
    title: issue.title,
    description: issue.description
  }));

  return (
    <main>
      <EnhancedMakeModelHero
        make="Nissan"
        model="Qashqai"
        yearRange={modelData.yearRange}
        popularParts={modelData.popularParts}
        averagePrice={modelData.averageValue}
      />

      <div className="container mx-auto px-4 py-8">
        <Card className="mb-8">
          <CardContent className="p-6">
            <p className="text-lg mb-4">
              The Nissan Qashqai is a popular crossover SUV that combines style with practicality. 
              We buy all Qashqai models regardless of condition, offering competitive prices for 
              vehicles with mechanical issues, accident damage, or age-related wear.
            </p>
            <p className="text-lg">We accept all Nissan Qashqai models from {modelData.yearRange}.</p>
          </CardContent>
        </Card>

        <CommonIssues 
          title="Common Qashqai Issues We Handle"
          issues={commonIssues}
        />

        <ModelSpecs
          title="Qashqai Parts We Buy"
          parts={modelData.popularParts}
        />

        <PriceEstimator
          make="Nissan"
          model="Qashqai"
          priceRanges={modelData.priceRanges}
        />

        <Card className="mt-8">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4">Why Choose Us for Your Qashqai?</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Free quote and same-day removal service</li>
              <li>Top cash prices for all Qashqai models</li>
              <li>Licensed and experienced Qashqai wreckers</li>
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