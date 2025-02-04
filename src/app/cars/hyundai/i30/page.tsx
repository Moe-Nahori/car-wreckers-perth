import MakeModelHero from '@/components/cars/MakeModelHero';
import CommonIssues from '@/components/cars/CommonIssues';
import PriceEstimator from '@/components/cars/PriceEstimator';
import { QuoteForm } from '@/components';

const commonIssues = [
  {
    title: 'Steering Problems',
    description: 'Electric power steering issues in first-gen models (2007-2012).'
  },
  {
    title: 'Engine Issues',
    description: 'Theta II engine recalls affecting some models between 2007-2011.'
  },
  {
    title: 'Transmission',
    description: 'DCT transmission judder in models equipped with dual-clutch gearbox.'
  },
  {
    title: 'Suspension Noise',
    description: 'Front suspension creaking noises common in earlier models.'
  },
  {
    title: 'Fuel System',
    description: 'Fuel pump failures reported in some 2010-2015 models.'
  }
];

const priceRanges = [
  {
    condition: 'Excellent Condition',
    range: '$4,000 - $9,999',
    description: 'Recent models (2019-2024), well maintained, low kilometers.'
  },
  {
    condition: 'Good Condition',
    range: '$2,500 - $4,000',
    description: '2015-2018 models, moderate wear, regular maintenance.'
  },
  {
    condition: 'Fair Condition',
    range: '$1,000 - $2,500',
    description: '2010-2014 models, running with issues, high kilometers.'
  },
  {
    condition: 'Poor Condition',
    range: '$200 - $1,000',
    description: 'Pre-2010 models, non-running, major issues or accident damaged.'
  }
];

export default function HyundaiI30Page() {
  return (
    <main>
      <MakeModelHero
        make="Hyundai"
        model="i30"
        years="2007-2024"
      />
      
      <CommonIssues
        make="Hyundai"
        model="i30"
        issues={commonIssues}
      />

      <PriceEstimator
        make="Hyundai"
        model="i30"
        priceRanges={priceRanges}
      />

      <QuoteForm />
    </main>
  );
}