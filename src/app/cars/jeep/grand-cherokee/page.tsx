import MakeModelHero from '@/components/cars/MakeModelHero';
import CommonIssues from '@/components/cars/CommonIssues';
import PriceEstimator from '@/components/cars/PriceEstimator';
import { QuoteForm } from '@/components';

const commonIssues = [
  {
    title: 'Air Suspension Failures',
    description: 'Common in models equipped with air suspension, leading to costly repairs.'
  },
  {
    title: 'Electrical Problems',
    description: 'Various electrical issues including dashboard, windows, and central locking malfunctions.'
  },
  {
    title: 'Transmission Issues',
    description: 'Transmission shifting problems, particularly in models from 2014-2015.'
  },
  {
    title: 'Engine Cooling',
    description: 'Cooling system leaks and failures, especially in V8 models.'
  },
  {
    title: 'Oil Leaks',
    description: 'Various oil leaks from gaskets and seals, particularly in higher mileage vehicles.'
  }
];

const priceRanges = [
  {
    condition: 'Excellent Condition',
    range: '$6,000 - $18,000',
    description: 'Running vehicle with minor wear and tear, all components functional, good service history.'
  },
  {
    condition: 'Good Condition',
    range: '$3,000 - $6,000',
    description: 'Running vehicle with some mechanical issues, moderate wear and tear, may need repairs.'
  },
  {
    condition: 'Fair Condition',
    range: '$1,200 - $3,000',
    description: 'Non-running or significant mechanical issues, high mileage, major repairs needed.'
  },
  {
    condition: 'Poor Condition',
    range: '$400 - $1,200',
    description: 'Severe damage, missing parts, very old models, or complete mechanical failure.'
  }
];

export default function JeepGrandCherokeePage() {
  return (
    <main>
      <MakeModelHero
        make="Jeep"
        model="Grand Cherokee"
        years="2000-2024"
      />
      
      <CommonIssues
        make="Jeep"
        model="Grand Cherokee"
        issues={commonIssues}
      />

      <PriceEstimator
        make="Jeep"
        model="Grand Cherokee"
        priceRanges={priceRanges}
      />

      <QuoteForm />
    </main>
  );
}