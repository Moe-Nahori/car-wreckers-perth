import MakeModelHero from '@/components/cars/MakeModelHero';
import CommonIssues from '@/components/cars/CommonIssues';
import PriceEstimator from '@/components/cars/PriceEstimator';
import { QuoteForm } from '@/components';

const commonIssues = [
  {
    title: 'Death Wobble',
    description: 'Front end vibration issues particularly in JK models (2007-2018) at highway speeds.'
  },
  {
    title: 'Transmission Problems',
    description: 'Manual and automatic transmissions can experience premature wear and shifting issues.'
  },
  {
    title: 'Coolant Leaks',
    description: 'Common in multiple model years, often from the radiator or water pump.'
  },
  {
    title: 'Steering Stability',
    description: 'Various steering components can wear causing wandering and stability issues.'
  },
  {
    title: 'Oil Leaks',
    description: 'Various seals and gaskets can fail, particularly in higher mileage vehicles.'
  }
];

const priceRanges = [
  {
    condition: 'Excellent Condition',
    range: '$5,000 - $15,000',
    description: 'Running vehicle with minor wear and tear, all components functional, good service history.'
  },
  {
    condition: 'Good Condition',
    range: '$2,500 - $5,000',
    description: 'Running vehicle with some mechanical issues, moderate wear and tear, may need repairs.'
  },
  {
    condition: 'Fair Condition',
    range: '$1,000 - $2,500',
    description: 'Non-running or significant mechanical issues, high mileage, major repairs needed.'
  },
  {
    condition: 'Poor Condition',
    range: '$300 - $1,000',
    description: 'Severe damage, missing parts, very old models, or complete mechanical failure.'
  }
];

export default function JeepWranglerPage() {
  return (
    <main>
      <MakeModelHero
        make="Jeep"
        model="Wrangler"
        years="2000-2024"
      />
      
      <CommonIssues
        make="Jeep"
        model="Wrangler"
        issues={commonIssues}
      />

      <PriceEstimator
        make="Jeep"
        model="Wrangler"
        priceRanges={priceRanges}
      />

      <QuoteForm />
    </main>
  );
}