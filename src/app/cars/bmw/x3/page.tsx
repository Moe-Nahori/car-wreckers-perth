import { MakeModelHero, CommonIssues, PriceRanges, HighValueParts } from '@/components/cars';
import { bmwData } from '@/data/cars/bmw';
import { QuoteForm } from '@/components';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'BMW X3 Wreckers Perth | Cash for X3 | Parts & Wrecking',
  description: 'Specialized BMW X3 wreckers in Perth. Best cash prices for all X3 models. Quality used parts in stock. Free car removal service across Perth.',
};

export default function BMWX3Page() {
  const modelData = bmwData.models.x3;
  
  const priceRanges = [
    {
      condition: "Excellent Condition",
      range: "$10,000 - $15,000",
      description: "Running perfectly with minimal wear, all components functional, good service history."
    },
    {
      condition: "Good Condition",
      range: "$6,000 - $10,000",
      description: "Running with minor issues, some wear and tear but overall good condition."
    },
    {
      condition: "Fair Condition",
      range: "$3,000 - $6,000",
      description: "Significant mechanical issues, high mileage, or major repairs needed."
    },
    {
      condition: "Poor Condition",
      range: "$800 - $3,000",
      description: "Non-running, severe damage, missing parts, or complete mechanical failure."
    }
  ];

  return (
    <main className="min-h-screen">
      <MakeModelHero
        make="BMW"
        model="X3"
        years={modelData.yearRange}
      />

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <CommonIssues
            make="BMW"
            model="X3"
            issues={bmwData.commonIssues.x3 || []}
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