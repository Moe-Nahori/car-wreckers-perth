import MakeModelHero from '@/components/cars/MakeModelHero';
import CommonIssues from '@/components/cars/CommonIssues';
import PriceEstimator from '@/components/cars/PriceEstimator';
import { QuoteForm } from '@/components';

const commonIssues = [
  {
    title: 'Transmission Issues',
    description: '9-speed automatic transmission can experience rough shifting and software-related problems.'
  },
  {
    title: 'Sunroof Leaks',
    description: 'My Sky removable sunroof panels can develop leaks and seal issues.'
  },
  {
    title: 'Start-Stop System',
    description: 'Problems with the automatic start-stop system functioning correctly.'
  },
  {
    title: 'Electrical Problems',
    description: 'Various electrical issues including instrument cluster, radio, and sensor malfunctions.'
  },
  {
    title: 'AC System',
    description: 'Air conditioning system failures and poor cooling performance.'
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

export default function JeepRenegadePage() {
  return (
    <main>
      <MakeModelHero
        make="Jeep"
        model="Renegade"
        years="2015-2024"
      />
      
      <CommonIssues
        make="Jeep"
        model="Renegade"
        issues={commonIssues}
      />

      <PriceEstimator
        make="Jeep"
        model="Renegade"
        priceRanges={priceRanges}
      />

      <QuoteForm />
    </main>
  );
}