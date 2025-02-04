import MakeModelHero from '@/components/cars/MakeModelHero';
import CommonIssues from '@/components/cars/CommonIssues';
import PriceEstimator from '@/components/cars/PriceEstimator';
import { QuoteForm } from '@/components';

const commonIssues = [
  {
    title: 'Timing Chain Issues',
    description: '4JJ1 engine models can experience timing chain wear and tensioner problems, particularly in high-mileage vehicles.'
  },
  {
    title: 'DPF System Faults',
    description: 'Diesel particulate filter issues common in city-driven vehicles, leading to reduced performance.'
  },
  {
    title: 'Suspension Wear',
    description: 'Front suspension components may wear prematurely, especially in vehicles used off-road.'
  },
  {
    title: 'AdBlue System Problems',
    description: 'Later models with AdBlue systems can experience sensor failures and system malfunctions.'
  },
  {
    title: 'Transmission Shift Quality',
    description: 'Some automatic models experience harsh shifting or delayed gear engagement.'
  }
];

const priceRanges = [
  {
    condition: 'Excellent Condition',
    range: '$5,000 - $9,000',
    description: 'Late model (2018+), low kilometers, full service history, no accidents.'
  },
  {
    condition: 'Good Condition',
    range: '$3,000 - $5,000',
    description: '2015-2017 models, well maintained, moderate kilometers.'
  },
  {
    condition: 'Fair Condition',
    range: '$1,500 - $3,000',
    description: '2013-2014 models, running with some issues, higher kilometers.'
  },
  {
    condition: 'Poor Condition',
    range: '$500 - $1,500',
    description: 'Early models (2013), non-running, major mechanical issues, accident damage.'
  }
];

export default function IsuzuMUXPage() {
  return (
    <main>
      <MakeModelHero
        make="Isuzu"
        model="MU-X"
        years="2013-2024"
      />
      
      <CommonIssues
        make="Isuzu"
        model="MU-X"
        issues={commonIssues}
      />

      <PriceEstimator
        make="Isuzu"
        model="MU-X"
        priceRanges={priceRanges}
      />

      <QuoteForm />
    </main>
  );
}