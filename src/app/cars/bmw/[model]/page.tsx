import { MakeModelHero, CommonIssues, PriceRanges, HighValueParts } from '@/components/cars';
import { bmwData } from '@/data/cars/bmw';
import { QuoteForm } from '@/components';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

interface Props {
  params: {
    model: string;
  };
}

export function generateMetadata({ params }: Props): Metadata {
  const modelKey = params.model.toLowerCase().replace('-', '');
  const modelData = bmwData.models[modelKey];

  if (!modelData) {
    return {
      title: 'Model Not Found',
      description: 'The requested BMW model was not found.'
    };
  }

  return {
    title: `BMW ${modelData.name} Wreckers Perth | Cash for ${modelData.name} | Parts & Wrecking`,
    description: `Specialized BMW ${modelData.name} wreckers in Perth. Best cash prices for all ${modelData.name} models. Quality used parts in stock. Free car removal service across Perth.`,
  };
}

export default function BMWModelPage({ params }: Props) {
  const modelKey = params.model.toLowerCase().replace('-', '');
  const modelData = bmwData.models[modelKey];

  if (!modelData) {
    notFound();
  }

  const priceRanges = modelData.priceRanges || [
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
        model={modelData.name}
        years={modelData.yearRange}
      />

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <CommonIssues
            make="BMW"
            model={modelData.name}
            issues={bmwData.commonIssues[modelKey] || []}
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