import MakeModelHero from '@/components/cars/MakeModelHero';
import CommonIssues from '@/components/cars/CommonIssues';
import PriceEstimator from '@/components/cars/PriceEstimator';
import { QuoteForm } from '@/components';

const commonIssues = [
  {
    title: 'Turbocharger Problems',
    description: 'Turbocharger failures common in high-mileage vehicles, causing power loss and excessive smoke.'
  },
  {
    title: 'Air System Issues',
    description: 'Air compressor failures and air dryer problems affecting brake system operation.'
  },
  {
    title: 'Structural Corrosion',
    description: 'Chassis rails and cross members prone to rust in older models.'
  },
  {
    title: 'Fuel System Problems',
    description: 'Injection pump and injector failures common in high-mileage engines.'
  },
  {
    title: 'Transmission Issues',
    description: 'Manual gearbox synchromesh wear and automatic transmission control problems.'
  }
];

const priceRanges = [
  {
    condition: 'Excellent Condition',
    range: '$8,000 - $18,000',
    description: 'Late model (2015+), low kilometers, full maintenance history, no accidents.'
  },
  {
    condition: 'Good Condition',
    range: '$5,000 - $8,000',
    description: '2010-2014 models, well maintained, moderate kilometers.'
  },
  {
    condition: 'Fair Condition',
    range: '$2,500 - $5,000',
    description: '2005-2009 models, running with issues, higher kilometers.'
  },
  {
    condition: 'Poor Condition',
    range: '$800 - $2,500',
    description: 'Pre-2005 models, non-running, major mechanical issues, structural problems.'
  }
];

export default function IsuzuFTRPage() {
  return (
    <main>
      <MakeModelHero
        make="Isuzu"
        model="FTR"
        years="2000-2024"
      />
      
      <CommonIssues
        make="Isuzu"
        model="FTR"
        issues={commonIssues}
      />

      <PriceEstimator
        make="Isuzu"
        model="FTR"
        priceRanges={priceRanges}
      />

      <QuoteForm />
    </main>
  );
}