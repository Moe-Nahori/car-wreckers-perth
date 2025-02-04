import MakeModelHero from '@/components/cars/MakeModelHero';
import CommonIssues from '@/components/cars/CommonIssues';
import PriceEstimator from '@/components/cars/PriceEstimator';
import { QuoteForm } from '@/components';

const commonIssues = [
  {
    title: 'Timing Chain Issues',
    description: 'Common in 2.0T engines from 2009-2012, symptoms include rattling noise and engine misfires.'
  },
  {
    title: 'DSG Transmission Problems',
    description: 'Models with DSG transmissions may experience jerky shifting and mechatronic unit failures.'
  },
  {
    title: 'Oil Consumption',
    description: '2009-2011 models with 2.0T engines may experience excessive oil consumption requiring frequent top-ups.'
  },
  {
    title: 'Electronic System Glitches',
    description: 'Issues with MMI system, window regulators, and central locking are common in older models.'
  },
  {
    title: 'Water Pump Failures',
    description: 'Premature water pump failure is common, leading to coolant leaks and potential overheating.'
  }
];

const priceRanges = [
  {
    condition: 'Excellent Condition',
    range: '$4,000 - $12,000',
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

export default function AudiA3Page() {
  return (
    <main>
      <MakeModelHero
        make="Audi"
        model="A3"
        years="2000-2024"
      />
      
      <CommonIssues
        make="Audi"
        model="A3"
        issues={commonIssues}
      />

      <PriceEstimator
        make="Audi"
        model="A3"
        priceRanges={priceRanges}
      />

      <QuoteForm />
    </main>
  );
}