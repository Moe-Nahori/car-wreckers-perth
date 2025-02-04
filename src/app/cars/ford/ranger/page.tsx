import MakeModelHero from '@/components/cars/MakeModelHero';
import CommonIssues from '@/components/cars/CommonIssues';
import PriceEstimator from '@/components/cars/PriceEstimator';
import { QuoteForm } from '@/components';

const commonIssues = [
  {
    title: 'Transmission Problems',
    description: '6-speed automatic transmissions prone to harsh shifting and shudder issues.'
  },
  {
    title: 'Timing Chain',
    description: '3.2L diesel engines experience timing chain stretch requiring replacement.'
  },
  {
    title: 'Injector Failures',
    description: 'Both 2.2L and 3.2L diesel engines susceptible to injector problems.'
  },
  {
    title: 'Differential Issues',
    description: 'Rear differential bearing wear causing noise and potential failure.'
  },
  {
    title: 'Suspension',
    description: 'Control arm and bush wear leading to clunking sounds and poor handling.'
  }
];

const priceRanges = [
  {
    condition: 'Excellent Condition',
    range: '$12,000 - $20,000',
    description: 'Late model (2015+), low kilometers, full service history, no accidents.'
  },
  {
    condition: 'Good Condition',
    range: '$6,000 - $12,000',
    description: '2010-2014 models, well maintained, moderate wear.'
  },
  {
    condition: 'Fair Condition',
    range: '$3,000 - $6,000',
    description: '2006-2009 models, running with issues, higher kilometers.'
  },
  {
    condition: 'Poor Condition',
    range: '$1,000 - $3,000',
    description: 'Early models, non-running, major mechanical issues, accident damage.'
  }
];

export default function FordRangerPage() {
  return (
    <main>
      <MakeModelHero
        make="Ford"
        model="Ranger"
        years="2006-2024"
      />
      
      <CommonIssues
        make="Ford"
        model="Ranger"
        issues={commonIssues}
      />

      <PriceEstimator
        make="Ford"
        model="Ranger"
        priceRanges={priceRanges}
      />

      <QuoteForm />
    </main>
  );
}