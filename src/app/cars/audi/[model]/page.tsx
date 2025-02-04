import { notFound } from 'next/navigation';
import { audiData } from '@/data/cars/audi';
import MakeModelHero from '@/components/cars/MakeModelHero';
import CommonIssues from '@/components/cars/CommonIssues';
import PriceEstimator from '@/components/cars/PriceEstimator';
import { QuoteForm } from '@/components';
import { Metadata } from 'next';

// Define valid Audi models type
type AudiModel = keyof typeof audiData.models;

interface Props {
  params: {
    model: AudiModel;
  };
}

// Generate metadata for the page
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const model = audiData.models[params.model];
  
  if (!model) {
    return {
      title: 'Model Not Found | iCar Wreckers Perth',
      description: 'The requested Audi model could not be found.'
    };
  }

  return {
    title: `Audi ${model.name} Wreckers Perth | Cash for ${model.name} | Parts & Service`,
    description: `Expert Audi ${model.name} wreckers in Perth. Top dollar paid for all ${model.name} vehicles. Quality used parts available. Free car removal service Perth-wide.`
  };
}

export default function AudiModelPage({ params }: Props) {
  const model = audiData.models[params.model];

  if (!model) {
    notFound();
  }

  const commonIssues = model.commonIssues.map(issue => ({
    title: issue,
    description: `Common issue with Audi ${model.name}: ${issue}`
  }));

  const priceRanges = [
    {
      condition: 'Excellent Condition',
      range: '$3,000 - $12,000',
      description: 'Running vehicle with minor wear and tear, all components functional.'
    },
    {
      condition: 'Good Condition',
      range: '$1,500 - $3,000',
      description: 'Running vehicle with some mechanical issues, may need repairs.'
    },
    {
      condition: 'Fair Condition',
      range: '$500 - $1,500',
      description: 'Non-running or significant mechanical issues, major repairs needed.'
    },
    {
      condition: 'Poor Condition',
      range: '$100 - $500',
      description: 'Severe damage, missing parts, or complete mechanical failure.'
    }
  ];

  return (
    <main>
      <MakeModelHero
        make="Audi"
        model={model.name}
        years={model.yearRange}
      />
      
      <CommonIssues
        make="Audi"
        model={model.name}
        issues={commonIssues}
      />

      <PriceEstimator
        make="Audi"
        model={model.name}
        priceRanges={priceRanges}
      />

      <QuoteForm />
    </main>
  );
}