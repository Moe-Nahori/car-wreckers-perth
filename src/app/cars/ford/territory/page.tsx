import MakeModelHero from '@/components/cars/MakeModelHero';
import CommonIssues from '@/components/cars/CommonIssues';
import PriceEstimator from '@/components/cars/PriceEstimator';
import { QuoteForm } from '@/components';

const commonIssues = [
  {
    title: 'Front Differential',
    description: 'AWD models prone to front differential failures causing vibration and noise.'
  },
  {
    title: 'Transmission',
    description: 'ZF 6-speed automatic transmission valve body and solenoid problems.'
  },
  {
    title: 'Timing Chain',
    description: 'Diesel models experience timing chain stretch requiring replacement.'
  },
  {
    title: 'Ball Joints',
    description: 'Front suspension ball joints wear prematurely requiring replacement.'
  },
  {
    title: 'Power Steering',
    description: 'Power steering pump and rack failures common in high-mileage vehicles.'
  }
];

const priceRanges = [
  {
    condition: 'Excellent Condition',
    range: '$4,500 - $9,000',
    description: 'Late model (2012-2016), low kilometers, full service history, no accidents.'
  },
  {
    condition: 'Good Condition',
    range: '$2,800 - $4,500',
    description: '2009-2011 models, well maintained, moderate wear.'
  },
  {
    condition: 'Fair Condition',
    range: '$1,200 - $2,800',
    description: '2004-2008 models, running with issues, higher kilometers.'
  },
  {
    condition: 'Poor Condition',
    range: '$300 - $1,200',
    description: 'Early models, non-running, major mechanical issues, structural damage.'
  }
];

export default function FordTerritoryPage() {
  return (
    <main>
      <MakeModelHero
        make="Ford"
        model="Territory"
        years="2004-2016"
      />
      
      <CommonIssues
        make="Ford"
        model="Territory"
        issues={commonIssues}
      />

      <PriceEstimator
        make="Ford"
        model="Territory"
        priceRanges={priceRanges}
      />

      <QuoteForm />
    </main>
  );
}