import MakeModelHero from '@/components/cars/MakeModelHero';
import CommonIssues from '@/components/cars/CommonIssues';
import PriceEstimator from '@/components/cars/PriceEstimator';
import { QuoteForm } from '@/components';

const commonIssues = [
  {
    title: 'Transmission Failure',
    description: '2000-2004 models notorious for automatic transmission failures.'
  },
  {
    title: 'Sliding Door Problems',
    description: 'Electric sliding door mechanisms commonly fail, particularly in older models.'
  },
  {
    title: 'VCM System Issues',
    description: 'Variable Cylinder Management system can cause excessive vibration and oil consumption.'
  },
  {
    title: 'Power Steering',
    description: 'Power steering pump failures common in models from 2005-2010.'
  },
  {
    title: 'Catalytic Converter',
    description: 'Premature catalytic converter failure, especially in 2005-2013 models.'
  }
];

const priceRanges = [
  {
    condition: 'Excellent Condition',
    range: '$4,000 - $8,500',
    description: 'Late model (2015+), low kilometers, full service history, no accidents.'
  },
  {
    condition: 'Good Condition',
    range: '$2,500 - $4,000',
    description: '2010-2014 models, well maintained, moderate wear.'
  },
  {
    condition: 'Fair Condition',
    range: '$1,000 - $2,500',
    description: '2005-2009 models, running with issues, higher kilometers.'
  },
  {
    condition: 'Poor Condition',
    range: '$300 - $1,000',
    description: 'Pre-2005 models, non-running, major mechanical issues, structural problems.'
  }
];

export default function HondaOdysseyPage() {
  return (
    <main>
      <MakeModelHero
        make="Honda"
        model="Odyssey"
        years="2000-2024"
      />
      
      <CommonIssues
        make="Honda"
        model="Odyssey"
        issues={commonIssues}
      />

      <PriceEstimator
        make="Honda"
        model="Odyssey"
        priceRanges={priceRanges}
      />

      <QuoteForm />
    </main>
  );
}