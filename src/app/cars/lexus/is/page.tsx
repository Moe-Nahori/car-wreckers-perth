import MakeModelHero from '@/components/cars/MakeModelHero';
import CommonIssues from '@/components/cars/CommonIssues';
import PriceEstimator from '@/components/cars/PriceEstimator';
import { QuoteForm } from '@/components';

const commonIssues = [
  {
    title: 'Fuel Pump Failure',
    description: '2006-2015 IS250 models may experience fuel pump issues leading to poor performance and starting problems.'
  },
  {
    title: 'Carbon Buildup',
    description: 'IS250 models with the 4GR-FSE engine often experience carbon buildup in the intake valves.'
  },
  {
    title: 'Dashboard Melting',
    description: '2006-2008 models may experience dashboard surface deterioration in hot climates.'
  },
  {
    title: 'Alternator Failure',
    description: 'Early IS models (2006-2010) might experience premature alternator failure.'
  },
  {
    title: 'Suspension Issues',
    description: 'Sport models with F-Sport suspension may require earlier bushing and shock absorber replacement.'
  }
];

const priceRanges = [
  {
    condition: 'Excellent Condition',
    range: '$4,500 - $12,000',
    description: 'Well-maintained vehicle with full service history, all features working, minimal wear and tear.'
  },
  {
    condition: 'Good Condition',
    range: '$2,500 - $4,500',
    description: 'Running vehicle with regular maintenance, may need minor repairs, moderate wear.'
  },
  {
    condition: 'Fair Condition',
    range: '$1,000 - $2,500',
    description: 'Running with mechanical issues, high mileage, significant wear and tear.'
  },
  {
    condition: 'Poor Condition',
    range: '$250 - $1,000',
    description: 'Non-running, major mechanical issues, accident damage, or very old models.'
  }
];

export default function LexusISPage() {
  return (
    <main>
      <MakeModelHero
        make="Lexus"
        model="IS"
        years="2000-2024"
      />
      
      <CommonIssues
        make="Lexus"
        model="IS"
        issues={commonIssues}
      />

      <PriceEstimator
        make="Lexus"
        model="IS"
        priceRanges={priceRanges}
      />

      <QuoteForm />
    </main>
  );
}