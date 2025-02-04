import MakeModelHero from '@/components/cars/MakeModelHero';
import CommonIssues from '@/components/cars/CommonIssues';
import PriceEstimator from '@/components/cars/PriceEstimator';
import { QuoteForm } from '@/components';

const commonIssues = [
  {
    title: 'Timing Chain',
    description: '2.0 TSI engines prone to timing chain tensioner failures, particularly pre-2014 models.'
  },
  {
    title: 'Water Pump',
    description: 'Premature water pump failures causing coolant leaks and overheating.'
  },
  {
    title: 'DSG Transmission',
    description: 'DSG transmission mechatronic unit failures and clutch pack wear.'
  },
  {
    title: 'Panoramic Sunroof',
    description: 'Sunroof drainage system blockages causing water leaks into cabin.'
  },
  {
    title: 'Fuel Pump Cam Follower',
    description: '2.0 TDI engines can experience fuel pump cam follower wear leading to pump failure.'
  }
];

const priceRanges = [
  {
    condition: 'Excellent Condition',
    range: '$5,000 - $10,000',
    description: 'Late model (2015+), low kilometers, full service history, no accidents.'
  },
  {
    condition: 'Good Condition',
    range: '$3,000 - $5,000',
    description: '2010-2014 models, well maintained, moderate wear.'
  },
  {
    condition: 'Fair Condition',
    range: '$1,500 - $3,000',
    description: '2008-2009 models, running with issues, higher kilometers.'
  },
  {
    condition: 'Poor Condition',
    range: '$500 - $1,500',
    description: 'Early models with major mechanical issues or accident damage.'
  }
];

export default function VolkswagenTiguanPage() {
  return (
    <main>
      <MakeModelHero
        make="Volkswagen"
        model="Tiguan"
        years="2008-2024"
      />
      
      <CommonIssues
        make="Volkswagen"
        model="Tiguan"
        issues={commonIssues}
      />

      <PriceEstimator
        make="Volkswagen"
        model="Tiguan"
        priceRanges={priceRanges}
      />

      <QuoteForm />
    </main>
  );
}