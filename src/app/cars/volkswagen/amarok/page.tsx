import MakeModelHero from '@/components/cars/MakeModelHero';
import CommonIssues from '@/components/cars/CommonIssues';
import PriceEstimator from '@/components/cars/PriceEstimator';
import { QuoteForm } from '@/components';

const commonIssues = [
  {
    title: 'Timing Belt',
    description: '2.0 TDI engine requires timing belt replacement at strict intervals to avoid failure.'
  },
  {
    title: 'DPF Problems',
    description: 'Diesel particulate filter blockages common, especially in urban-driven vehicles.'
  },
  {
    title: 'Injector Failures',
    description: '2.0 TDI engines prone to injector failures causing rough running and starting issues.'
  },
  {
    title: 'Transfer Case',
    description: '4MOTION system can develop problems in high-mileage vehicles.'
  },
  {
    title: 'Clutch Wear',
    description: 'Manual transmission models experience premature clutch wear, particularly when towing.'
  }
];

const priceRanges = [
  {
    condition: 'Excellent Condition',
    range: '$6,000 - $12,000',
    description: 'Late model (2015+), low kilometers, full service history, no accidents.'
  },
  {
    condition: 'Good Condition',
    range: '$4,000 - $6,000',
    description: '2012-2014 models, well maintained, moderate wear.'
  },
  {
    condition: 'Fair Condition',
    range: '$2,000 - $4,000',
    description: '2010-2011 models, running with issues, higher kilometers.'
  },
  {
    condition: 'Poor Condition',
    range: '$500 - $2,000',
    description: 'Early models with major mechanical issues or accident damage.'
  }
];

export default function VolkswagenAmarokPage() {
  return (
    <main>
      <MakeModelHero
        make="Volkswagen"
        model="Amarok"
        years="2010-2024"
      />
      
      <CommonIssues
        make="Volkswagen"
        model="Amarok"
        issues={commonIssues}
      />

      <PriceEstimator
        make="Volkswagen"
        model="Amarok"
        priceRanges={priceRanges}
      />

      <QuoteForm />
    </main>
  );
}