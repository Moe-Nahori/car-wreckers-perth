import { MakeModelHero, CommonIssues, PriceRanges, HighValueParts } from '@/components/cars';
import { bmwData } from '@/data/cars/bmw';
import { QuoteForm } from '@/components';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'BMW X5 Wreckers Perth | Cash for X5 | Parts & Wrecking',
  description: 'Specialized BMW X5 wreckers in Perth. Best cash prices for all X5 models. Quality used parts in stock. Free car removal service across Perth.',
};

export default function BMWX5Page() {
  const modelData = bmwData.models.x5;
  
  const priceRanges = [
    {
      condition: "Excellent Condition",
      range: "$15,000 - $25,000",
      description: "Running perfectly with minimal wear, all components functional, good service history."
    },
    {
      condition: "Good Condition",
      range: "$8,000 - $15,000",
      description: "Running with minor issues, some wear and tear but overall good condition."
    },
    {
      condition: "Fair Condition",
      range: "$4,000 - $8,000",
      description: "Significant mechanical issues, high mileage, or major repairs needed."
    },
    {
      condition: "Poor Condition",
      range: "$1,000 - $4,000",
      description: "Non-running, severe damage, missing parts, or complete mechanical failure."
    }
  ];

  return (
    <main className="min-h-screen">
      <MakeModelHero
        make="BMW"
        model="X5"
        years={modelData.yearRange}
      />

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <CommonIssues
            make="BMW"
            model="X5"
            issues={bmwData.commonIssues.x5 || []}
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