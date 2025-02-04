import { MakeModelHero, CommonIssues, PriceRanges, HighValueParts } from '@/components/cars';
import { bmwData } from '@/data/cars/bmw';
import { QuoteForm } from '@/components';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'BMW 3 Series Wreckers Perth | Cash for 3 Series | Parts & Wrecking',
  description: 'Specialized BMW 3 Series wreckers in Perth. Best cash prices for all 3 Series models. Quality used parts in stock. Free car removal service across Perth.',
};

export default function BMW3SeriesPage() {
  const modelData = bmwData.models['3series'];
  
  const priceRanges = [
    {
      condition: "Excellent Condition",
      range: "$6,000 - $12,000",
      description: "Running perfectly with minimal wear, all components functional, good service history."
    },
    {
      condition: "Good Condition",
      range: "$3,000 - $6,000",
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
    <main className="min-h-screen">
      <MakeModelHero
        make="BMW"
        model="3 Series"
        years={modelData.yearRange}
      />

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <CommonIssues
            make="BMW"
            model="3 Series"
            issues={bmwData.commonIssues['3series'] || []}
          />
          <PriceRanges ranges={priceRanges} />
        </div>

        <div className="mt-12">
          <HighValueParts parts={modelData.highValueParts} />
        </div>
      </div>

      <QuoteForm />
    </main>
  );
}