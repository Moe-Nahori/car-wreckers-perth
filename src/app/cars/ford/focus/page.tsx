import MakeModelHero from '@/components/cars/MakeModelHero';
import CommonIssues from '@/components/cars/CommonIssues';
import PriceEstimator from '@/components/cars/PriceEstimator';
import { QuoteForm } from '@/components';

const commonIssues = [
  {
    title: 'PowerShift Transmission',
    description: '2011-2016 dual-clutch automatic transmission prone to shudder and failure.'
  },
  {
    title: 'Fuel System',
    description: 'High-pressure fuel pump failures in EcoBoost engines causing starting issues.'
  },
  {
    title: 'Clutch Problems',
    description: 'Manual transmission models experience premature clutch wear and failure.'
  },
  {
    title: 'Suspension Noise',
    description: 'Front suspension control arm bushings wear causing knocking sounds.'
  },
  {
    title: 'Electric Issues',
    description: 'Various electrical problems including PCM failures and battery drain.'
  }
];

const priceRanges = [
  {
    condition: 'Excellent Condition',
    range: '$3,500 - $7,500',
    description: 'Late model (2015+), low kilometers, full service history, no accidents.'
  },
  {
    condition: 'Good Condition',
    range: '$2,000 - $3,500',
    description: '2010-2014 models, well maintained, moderate wear.'
  },
  {
    condition: 'Fair Condition',
    range: '$800 - $2,000',
    description: '2005-2009 models, running with issues, higher kilometers.'
  },
  {
    condition: 'Poor Condition',
    range: '$200 - $800',
    description: 'Pre-2005 models, non-running, major mechanical issues, accident damage.'
  }
];

export default function FordFocusPage() {
  return (
    <main>
      <MakeModelHero
        make="Ford"
        model="Focus"
        years="2002-2024"
      />
      
      <CommonIssues
        make="Ford"
        model="Focus"
        issues={commonIssues}
      />

      <PriceEstimator
        make="Ford"
        model="Focus"
        priceRanges={priceRanges}
      />

      <QuoteForm />
    </main>
  );
}