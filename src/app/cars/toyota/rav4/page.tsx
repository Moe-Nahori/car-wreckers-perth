import MakeModelHero from '@/components/cars/MakeModelHero';
import CommonIssues from '@/components/cars/CommonIssues';
import PriceEstimator from '@/components/cars/PriceEstimator';
import { QuoteForm } from '@/components';

const commonIssues = [
  {
    title: 'Oil Consumption',
    description: '2006-2008 models with 2AZ-FE engine known for excessive oil consumption.'
  },
  {
    title: 'Transmission Problems',
    description: 'CVT transmission issues in some 2019+ models, including hesitation and jerking.'
  },
  {
    title: 'Suspension Noise',
    description: 'Front strut and control arm bushings wear causing knocking noises.'
  },
  {
    title: 'Battery Issues',
    description: 'Hybrid models may experience premature battery degradation in hot climates.'
  },
  {
    title: 'ECU Faults',
    description: 'Earlier models prone to ECU failures causing various electrical issues.'
  }
];

const priceRanges = [
  {
    condition: 'Excellent Condition',
    range: '$4,500 - $9,999',
    description: 'Recent models (2018+), well maintained, low kilometers, full service history.'
  },
  {
    condition: 'Good Condition',
    range: '$2,500 - $4,500',
    description: '2012-2017 models, moderate wear, regular maintenance.'
  },
  {
    condition: 'Fair Condition',
    range: '$1,000 - $2,500',
    description: '2006-2011 models, running with issues, high kilometers.'
  },
  {
    condition: 'Poor Condition',
    range: '$300 - $1,000',
    description: 'Pre-2006 models, non-running, major mechanical issues.'
  }
];

export default function ToyotaRav4Page() {
  return (
    <main>
      <MakeModelHero
        make="Toyota"
        model="RAV4"
        years="2000-2024"
      />
      
      <CommonIssues
        make="Toyota"
        model="RAV4"
        issues={commonIssues}
      />

      <PriceEstimator
        make="Toyota"
        model="RAV4"
        priceRanges={priceRanges}
      />

      <QuoteForm />
    </main>
  );
}