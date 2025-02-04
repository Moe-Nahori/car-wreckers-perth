import MakeModelHero from '@/components/cars/MakeModelHero';
import CommonIssues from '@/components/cars/CommonIssues';
import PriceEstimator from '@/components/cars/PriceEstimator';
import { QuoteForm } from '@/components';

const commonIssues = [
  {
    title: 'Engine Issues',
    description: 'First-gen models (2004-2009) may experience excessive oil consumption.'
  },
  {
    title: 'Transmission Problems',
    description: 'Automatic transmission shudder in second-gen models (2010-2013).'
  },
  {
    title: 'Rust Issues',
    description: 'Early models prone to rust around wheel arches and underbody.'
  },
  {
    title: 'Suspension Wear',
    description: 'Front control arm bushings wear faster than expected in most models.'
  },
  {
    title: 'Electrical Problems',
    description: 'Dashboard display failures and electrical glitches in early models.'
  }
];

const priceRanges = [
  {
    condition: 'Excellent Condition',
    range: '$3,500 - $9,999',
    description: 'Recent models (2019-2024), well maintained, low kilometers.'
  },
  {
    condition: 'Good Condition',
    range: '$2,000 - $3,500',
    description: '2014-2018 models, moderate wear, regular maintenance.'
  },
  {
    condition: 'Fair Condition',
    range: '$800 - $2,000',
    description: '2009-2013 models, running with issues, high kilometers.'
  },
  {
    condition: 'Poor Condition',
    range: '$200 - $800',
    description: 'Pre-2009 models, non-running, major issues or accident damaged.'
  }
];

export default function Mazda3Page() {
  return (
    <main>
      <MakeModelHero
        make="Mazda"
        model="Mazda3"
        years="2004-2024"
      />
      
      <CommonIssues
        make="Mazda"
        model="Mazda3"
        issues={commonIssues}
      />

      <PriceEstimator
        make="Mazda"
        model="Mazda3"
        priceRanges={priceRanges}
      />

      <QuoteForm />
    </main>
  );
}