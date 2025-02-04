import MakeModelHero from '@/components/cars/MakeModelHero';
import CommonIssues from '@/components/cars/CommonIssues';
import PriceEstimator from '@/components/cars/PriceEstimator';
import { QuoteForm } from '@/components';

const commonIssues = [
  {
    title: 'Turbocharger Failure',
    description: 'Common in high-mileage vehicles, causing loss of power and excessive smoke.'
  },
  {
    title: 'Injection Pump Problems',
    description: 'Diesel models can experience injection pump failures, leading to starting issues and poor performance.'
  },
  {
    title: 'Chassis Corrosion',
    description: 'Older models prone to chassis rail and body rust, particularly in coastal areas.'
  },
  {
    title: 'Brake System Issues',
    description: 'Air brake system components can fail, requiring expensive repairs.'
  },
  {
    title: 'Gearbox Problems',
    description: 'Manual transmission models may experience synchro wear and shifting difficulties.'
  }
];

const priceRanges = [
  {
    condition: 'Excellent Condition',
    range: '$6,000 - $12,000',
    description: 'Late model (2015+), low kilometers, well maintained, clean service history.'
  },
  {
    condition: 'Good Condition',
    range: '$3,500 - $6,000',
    description: '2010-2014 models, regular maintenance, moderate wear.'
  },
  {
    condition: 'Fair Condition',
    range: '$1,500 - $3,500',
    description: '2005-2009 models, running with issues, higher kilometers.'
  },
  {
    condition: 'Poor Condition',
    range: '$500 - $1,500',
    description: 'Pre-2005 models, non-running, major mechanical issues, structural problems.'
  }
];

export default function IsuzuNPRPage() {
  return (
    <main>
      <MakeModelHero
        make="Isuzu"
        model="NPR"
        years="2000-2024"
      />
      
      <CommonIssues
        make="Isuzu"
        model="NPR"
        issues={commonIssues}
      />

      <PriceEstimator
        make="Isuzu"
        model="NPR"
        priceRanges={priceRanges}
      />

      <QuoteForm />
    </main>
  );
}