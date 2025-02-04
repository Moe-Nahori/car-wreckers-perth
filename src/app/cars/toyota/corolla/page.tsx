import MakeModelHero from '@/components/cars/MakeModelHero';
import CommonIssues from '@/components/cars/CommonIssues';
import PriceEstimator from '@/components/cars/PriceEstimator';
import { QuoteForm } from '@/components';

const commonIssues = [
  {
    title: 'Transmission Issues',
    description: 'Common in models between 2009-2014, symptoms include delayed shifting and slipping gears.'
  },
  {
    title: 'Oil Consumption',
    description: 'Models from 2009-2011 may experience excessive oil consumption requiring regular top-ups.'
  },
  {
    title: 'Steering Problems',
    description: 'Some models experience electric power steering failure, particularly in hot conditions.'
  },
  {
    title: 'Airbag Recalls',
    description: 'Several models affected by Takata airbag recalls between 2002-2014.'
  },
  {
    title: 'Engine Noise',
    description: 'Some models develop engine knocking noise, particularly in earlier models with high mileage.'
  }
];

const priceRanges = [
  {
    condition: 'Excellent Condition',
    range: '$3,000 - $9,999',
    description: 'Running vehicle with minor wear and tear, all components functional, good service history.'
  },
  {
    condition: 'Good Condition',
    range: '$1,500 - $3,000',
    description: 'Running vehicle with some mechanical issues, moderate wear and tear, may need repairs.'
  },
  {
    condition: 'Fair Condition',
    range: '$500 - $1,500',
    description: 'Non-running or significant mechanical issues, high mileage, major repairs needed.'
  },
  {
    condition: 'Poor Condition',
    range: '$100 - $500',
    description: 'Severe damage, missing parts, very old models, or complete mechanical failure.'
  }
];

export default function ToyotaCorollaPage() {
  return (
    <main>
      <MakeModelHero
        make="Toyota"
        model="Corolla"
        years="1994-2024"
      />
      
      <CommonIssues
        make="Toyota"
        model="Corolla"
        issues={commonIssues}
      />

      <PriceEstimator
        make="Toyota"
        model="Corolla"
        priceRanges={priceRanges}
      />

      <QuoteForm />
    </main>
  );
}
