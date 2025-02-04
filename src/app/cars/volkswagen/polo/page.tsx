import MakeModelHero from '@/components/cars/MakeModelHero';
import CommonIssues from '@/components/cars/CommonIssues';
import PriceEstimator from '@/components/cars/PriceEstimator';
import { QuoteForm } from '@/components';

const commonIssues = [
  {
    title: 'DSG Problems',
    description: '7-speed DSG transmissions can experience mechatronic unit failures and jerky shifting.'
  },
  {
    title: 'Timing Chain',
    description: '1.2 TSI and 1.4 TSI engines prone to timing chain stretch and tensioner failures.'
  },
  {
    title: 'Coil Pack Failures',
    description: 'Ignition coil failures common, causing misfires and rough running.'
  },
  {
    title: 'Window Regulators',
    description: 'Electric window regulators commonly fail, particularly in front doors.'
  },
  {
    title: 'ABS Module',
    description: 'ABS control module failures causing ABS and traction control warnings.'
  }
];

const priceRanges = [
  {
    condition: 'Excellent Condition',
    range: '$3,500 - $7,000',
    description: 'Late model (2015+), low kilometers, full dealer service history.'
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

export default function VolkswagenPoloPage() {
  return (
    <main>
      <MakeModelHero
        make="Volkswagen"
        model="Polo"
        years="2000-2024"
      />
      
      <CommonIssues
        make="Volkswagen"
        model="Polo"
        issues={commonIssues}
      />

      <PriceEstimator
        make="Volkswagen"
        model="Polo"
        priceRanges={priceRanges}
      />

      <QuoteForm />
    </main>
  );
}