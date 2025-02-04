import MakeModelHero from '@/components/cars/MakeModelHero';
import CommonIssues from '@/components/cars/CommonIssues';
import PriceEstimator from '@/components/cars/PriceEstimator';
import { QuoteForm } from '@/components';

const commonIssues = [
  {
    title: 'CVT Transmission',
    description: 'Early models with CVT transmissions can experience premature failure and jerky operation.'
  },
  {
    title: 'Electrical System',
    description: 'Various electrical problems including TIPM failure, power windows, and central locking issues.'
  },
  {
    title: 'AC System',
    description: 'Air conditioning system failures, including compressor and condenser problems.'
  },
  {
    title: 'Power Steering',
    description: 'Electric power steering failures, particularly in high-temperature conditions.'
  },
  {
    title: 'Oil Consumption',
    description: '2.4L engines may experience higher than normal oil consumption between services.'
  }
];

const priceRanges = [
  {
    condition: 'Excellent Condition',
    range: '$4,000 - $10,000',
    description: 'Running vehicle with minor wear and tear, all components functional, good service history.'
  },
  {
    condition: 'Good Condition',
    range: '$2,000 - $4,000',
    description: 'Running vehicle with some mechanical issues, moderate wear and tear, may need repairs.'
  },
  {
    condition: 'Fair Condition',
    range: '$800 - $2,000',
    description: 'Non-running or significant mechanical issues, high mileage, major repairs needed.'
  },
  {
    condition: 'Poor Condition',
    range: '$200 - $800',
    description: 'Severe damage, missing parts, very old models, or complete mechanical failure.'
  }
];

export default function JeepCompassPage() {
  return (
    <main>
      <MakeModelHero
        make="Jeep"
        model="Compass"
        years="2007-2024"
      />
      
      <CommonIssues
        make="Jeep"
        model="Compass"
        issues={commonIssues}
      />

      <PriceEstimator
        make="Jeep"
        model="Compass"
        priceRanges={priceRanges}
      />

      <QuoteForm />
    </main>
  );
}