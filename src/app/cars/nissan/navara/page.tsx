import { EnhancedMakeModelHero } from '@/components/cars/enhanced/EnhancedMakeModelHero';
import { nissanData } from '@/data/cars/nissan';
import { QuoteForm } from '@/components';
import { Card, CardContent } from '@/components/ui/card';
import { CommonIssues } from '@/components/features/CommonIssues';
import { ModelSpecs } from '@/components/features/ModelSpecs';
import PriceEstimator from '@/components/cars/PriceEstimator';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nissan Navara Wreckers Perth | Cash for Navara',
  description: 'Get top cash for your Nissan Navara in Perth. We buy Navaras in any condition. 2000-2024 models accepted. Free quote and same-day removal.',
};

export default function NavaraPage() {
  const modelData = nissanData.models.navara;
  const commonIssuesData = nissanData.commonIssues.navara;

  const commonIssues = commonIssuesData.map(issue => ({
    title: issue.title,
    description: issue.description
  }));

  const priceRanges = [
    {
      condition: "Excellent Condition",
      range: "$5,000 - $8,000",
      description: "Running perfectly with minimal wear, all components functional, good service history."
    },
    {
      condition: "Good Condition",
      range: "$3,000 - $5,000",
      description: "Running with minor issues, some wear and tear but overall good condition."
    },
    {
      condition: "Fair Condition",
      range: "$1,000 - $3,000",
      description: "Significant mechanical issues, high mileage, or major repairs needed."
    },
    {
      condition: "Poor Condition",
      range: "$300 - $1,000",
      description: "Non-running, severe damage, missing parts, or complete mechanical failure."
    }
  ];

  return (
    <main>
      <EnhancedMakeModelHero
        make="Nissan"
        model="Navara"
        yearRange={modelData.yearRange}
        popularParts={modelData.popularParts}
        averagePrice={modelData.averageValue}
      />

      <div className="container mx-auto px-4 py-8">
        <Card className="mb-8">
          <CardContent className="p-6">
            <p className="text-lg mb-4">
              The Nissan Navara is a robust pickup truck with a strong following in Australia. 
              We buy all Navara models regardless of condition, offering competitive prices for 
              vehicles with mechanical issues, accident damage, or age-related wear.
            </p>
            <p className="text-lg">We accept all Nissan Navara models from {modelData.yearRange}.</p>
          </CardContent>
        </Card>

        <CommonIssues 
          title="Common Navara Issues We Handle"
          issues={commonIssues}
        />

        <ModelSpecs
          title="Navara Parts We Buy"
          parts={modelData.popularParts}
        />

        <PriceEstimator
          make="Nissan"
          model="Navara"
          priceRanges={priceRanges}
        />

        <Card className="mt-8">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4">Why Choose Us for Your Navara?</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Free quote and same-day removal service</li>
              <li>Top cash prices for all Navara models</li>
              <li>Licensed and experienced Navara wreckers</li>
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