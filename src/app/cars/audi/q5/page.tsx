import MakeModelHero from '@/components/cars/MakeModelHero';
import CommonIssues from '@/components/cars/CommonIssues';
import PriceEstimator from '@/components/cars/PriceEstimator';
import { QuoteForm } from '@/components';

const commonIssues = [
  {
    title: 'Water Pump Failure',
    description: 'Common issue in early models, leading to coolant leaks and potential overheating.'
  },
  {
    title: 'Timing Chain Issues',
    description: 'Models from 2009-2012 can experience timing chain tensioner problems.'
  },
  {
    title: 'Oil Consumption',
    description: 'Some 2.0T engines consume excessive oil between regular service intervals.'
  },
  {
    title: 'Sunroof Problems',
    description: 'Panoramic sunroof can develop leaks and drainage system issues.'
  },
  {
    title: 'Start-Stop System',
    description: 'Later models may experience issues with the start-stop system functioning properly.'
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

export default function AudiQ5Page() {
  return (
    <main>
      <MakeModelHero
        make="Audi"
        model="Q5"
        years="2009-2024"
      />
      
      <CommonIssues
        make="Audi"
        model="Q5"
        issues={commonIssues}
      />

      <PriceEstimator
        make="Audi"
        model="Q5"
        priceRanges={priceRanges}
      />

      <QuoteForm />
    </main>
  );
}