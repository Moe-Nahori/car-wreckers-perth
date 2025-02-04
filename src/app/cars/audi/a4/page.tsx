import MakeModelHero from '@/components/cars/MakeModelHero';
import CommonIssues from '@/components/cars/CommonIssues';
import PriceEstimator from '@/components/cars/PriceEstimator';
import { QuoteForm } from '@/components';

const commonIssues = [
  {
    title: 'Oil Leaks',
    description: 'Common in older models, particularly around valve cover gaskets and oil pan gaskets.'
  },
  {
    title: 'Excessive Oil Consumption',
    description: '2009-2012 models with 2.0T engines may consume excessive oil between services.'
  },
  {
    title: 'Timing Chain Problems',
    description: 'Earlier models can experience timing chain tensioner failures leading to engine damage.'
  },
  {
    title: 'Control Module Failures',
    description: 'Various electronic control modules can fail, affecting multiple vehicle systems.'
  },
  {
    title: 'Suspension Issues',
    description: 'Control arm bushings and ball joints often wear prematurely, causing handling problems.'
  }
];

const priceRanges = [
  {
    condition: 'Excellent Condition',
    range: '$5,000 - $15,000',
    description: 'Running vehicle with minor wear and tear, all components functional, good service history.'
  },
  {
    condition: 'Good Condition',
    range: '$2,500 - $5,000',
    description: 'Running vehicle with some mechanical issues, moderate wear and tear, may need repairs.'
  },
  {
    condition: 'Fair Condition',
    range: '$1,000 - $2,500',
    description: 'Non-running or significant mechanical issues, high mileage, major repairs needed.'
  },
  {
    condition: 'Poor Condition',
    range: '$300 - $1,000',
    description: 'Severe damage, missing parts, very old models, or complete mechanical failure.'
  }
];

export default function AudiA4Page() {
  return (
    <main>
      <MakeModelHero
        make="Audi"
        model="A4"
        years="2000-2024"
      />
      
      <CommonIssues
        make="Audi"
        model="A4"
        issues={commonIssues}
      />

      <PriceEstimator
        make="Audi"
        model="A4"
        priceRanges={priceRanges}
      />

      <QuoteForm />
    </main>
  );
}