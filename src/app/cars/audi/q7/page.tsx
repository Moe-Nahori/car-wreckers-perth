import MakeModelHero from '@/components/cars/MakeModelHero';
import CommonIssues from '@/components/cars/CommonIssues';
import PriceEstimator from '@/components/cars/PriceEstimator';
import { QuoteForm } from '@/components';

const commonIssues = [
  {
    title: 'Air Suspension Failures',
    description: 'Common issue across years, particularly in early models. Can result in uneven ride height and warning lights.'
  },
  {
    title: 'Timing Chain Problems',
    description: 'Earlier V6 and V8 engines can experience timing chain tensioner failures leading to major engine damage.'
  },
  {
    title: 'Oil Leaks',
    description: 'Various oil leaks from valve cover gaskets, oil pan, and other seals, especially in higher mileage vehicles.'
  },
  {
    title: 'Electrical System Issues',
    description: 'Multiple electrical problems including MMI failures, window regulator issues, and sensor malfunctions.'
  },
  {
    title: 'Brake System Wear',
    description: 'Due to vehicle weight, brake components tend to wear faster than average, particularly in early models.'
  }
];

const priceRanges = [
  {
    condition: 'Excellent Condition',
    range: '$7,000 - $20,000',
    description: 'Running vehicle with minor wear and tear, all components functional, good service history.'
  },
  {
    condition: 'Good Condition',
    range: '$3,500 - $7,000',
    description: 'Running vehicle with some mechanical issues, moderate wear and tear, may need repairs.'
  },
  {
    condition: 'Fair Condition',
    range: '$1,500 - $3,500',
    description: 'Non-running or significant mechanical issues, high mileage, major repairs needed.'
  },
  {
    condition: 'Poor Condition',
    range: '$500 - $1,500',
    description: 'Severe damage, missing parts, very old models, or complete mechanical failure.'
  }
];

export default function AudiQ7Page() {
  return (
    <main>
      <MakeModelHero
        make="Audi"
        model="Q7"
        years="2006-2024"
      />
      
      <CommonIssues
        make="Audi"
        model="Q7"
        issues={commonIssues}
      />

      <PriceEstimator
        make="Audi"
        model="Q7"
        priceRanges={priceRanges}
      />

      <QuoteForm />
    </main>
  );
}