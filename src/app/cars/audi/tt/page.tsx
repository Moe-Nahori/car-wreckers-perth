import MakeModelHero from '@/components/cars/MakeModelHero';
import CommonIssues from '@/components/cars/CommonIssues';
import PriceEstimator from '@/components/cars/PriceEstimator';
import { QuoteForm } from '@/components';

const commonIssues = [
  {
    title: 'DSG Transmission Issues',
    description: 'Models with DSG transmissions can experience mechatronic unit failures and jerky shifting.'
  },
  {
    title: 'Timing Chain Tensioner',
    description: 'Early models can suffer from timing chain tensioner failure, potentially causing engine damage.'
  },
  {
    title: 'Coil Pack Problems',
    description: 'Engine misfires and rough running due to coil pack failures, particularly in older models.'
  },
  {
    title: 'Window Regulator Failures',
    description: 'Common issue where windows may not operate correctly or make grinding noises.'
  },
  {
    title: 'MAF Sensor Issues',
    description: 'Mass Air Flow sensor failures can cause rough idling and poor performance.'
  }
];

const priceRanges = [
  {
    condition: 'Excellent Condition',
    range: '$4,500 - $15,000',
    description: 'Running vehicle with minor wear and tear, all components functional, good service history.'
  },
  {
    condition: 'Good Condition',
    range: '$2,500 - $4,500',
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

export default function AudiTTPage() {
  return (
    <main>
      <MakeModelHero
        make="Audi"
        model="TT"
        years="2000-2024"
      />
      
      <CommonIssues
        make="Audi"
        model="TT"
        issues={commonIssues}
      />

      <PriceEstimator
        make="Audi"
        model="TT"
        priceRanges={priceRanges}
      />

      <QuoteForm />
    </main>
  );
}