import { MakeModelHero, CommonIssues, PriceRanges, HighValueParts } from '@/components/cars';
import { bmwData } from '@/data/cars/bmw';
import { QuoteForm } from '@/components';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'BMW M3 Wreckers Perth | Cash for M3 | Parts & Wrecking',
  description: 'Specialized BMW M3 wreckers in Perth. Best cash prices for all M3 models. Quality used parts in stock. Free car removal service across Perth.',
};

export default function BMWM3Page() {
  const modelData = bmwData.models.m3;
  
  const priceRanges = [
    {
      condition: "Excellent Condition",
      range: "$25,000 - $40,000",
      description: "Running perfectly with minimal wear, all components functional, good service history."
    },
    {
      condition: "Good Condition",
      range: "$12,000 - $25,000",
      description: "Running with minor issues, some wear and tear but overall good condition."
    },
    {
      condition: "Fair Condition",
      range: "$5,000 - $12,000",
      description: "Significant mechanical issues, high mileage, or major repairs needed."
    },
    {
      condition: "Poor Condition",
      range: "$1,500 - $5,000",
      description: "Non-running, severe damage, missing parts, or complete mechanical failure."
    }
  ];

  return (
    <main className="min-h-screen">
      <MakeModelHero
        make="BMW"
        model="M3"
        years={modelData.yearRange}
      />

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <CommonIssues
            make="BMW"
            model="M3"
            issues={bmwData.commonIssues.m3 || []}
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