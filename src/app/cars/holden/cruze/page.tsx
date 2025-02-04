import MakeModelHero from '@/components/cars/MakeModelHero';
import CommonIssues from '@/components/cars/CommonIssues';
import PriceEstimator from '@/components/cars/PriceEstimator';
import { QuoteForm } from '@/components';

const commonIssues = [
  {
    title: 'Timing Belt Failure',
    description: '1.8L models prone to premature timing belt failure if not replaced at recommended intervals.'
  },
  {
    title: 'Turbo Problems',
    description: '1.4L turbo engines experience turbocharger failures, often preceded by oil consumption.'
  },
  {
    title: 'Water Pump Failure',
    description: 'Common issue leading to overheating, particularly in 2009-2011 models.'
  },
  {
    title: 'Transmission Issues',
    description: 'Automatic transmission failures reported in early models, particularly the 6T40 transmission.'
  },
  {
    title: 'Electrical Problems',
    description: 'Various electrical issues including ECU faults and battery drain problems.'
  }
];

const priceRanges = [
  {
    condition: 'Excellent Condition',
    range: '$2,500 - $6,000',
    description: '2015-2020 models, well maintained, low kilometers, full service history.'
  },
  {
    condition: 'Good Condition',
    range: '$1,500 - $2,500',
    description: '2012-2014 models, moderate wear, regular maintenance history.'
  },
  {
    condition: 'Fair Condition',
    range: '$500 - $1,500',
    description: '2009-2011 models, running with issues, high kilometers.'
  },
  {
    condition: 'Poor Condition',
    range: '$100 - $500',
    description: 'Non-running, major mechanical issues, accident damaged.'
  }
];

export default function HoldenCruzePage() {
  return (
    <main>
      <MakeModelHero
        make="Holden"
        model="Cruze"
        years="2009-2020"
      />
      
      <CommonIssues
        make="Holden"
        model="Cruze"
        issues={commonIssues}
      />

      <PriceEstimator
        make="Holden"
        model="Cruze"
        priceRanges={priceRanges}
      />

      <QuoteForm />
    </main>
  );
}