import MakeModelHero from '@/components/cars/MakeModelHero';
import CommonIssues from '@/components/cars/CommonIssues';
import PriceEstimator from '@/components/cars/PriceEstimator';
import { QuoteForm } from '@/components';

const commonIssues = [
  {
    title: 'V6 Engine Oil Consumption',
    description: '2008-2012 V6 models can experience excessive oil consumption due to piston ring issues.'
  },
  {
    title: 'Transmission Problems',
    description: '2003-2007 automatic transmissions prone to failure, particularly in V6 models.'
  },
  {
    title: 'VCM System Issues',
    description: 'Variable Cylinder Management system in V6 models can cause vibration and oil consumption.'
  },
  {
    title: 'Brake System Problems',
    description: 'Premature brake wear and VSA (Vehicle Stability Assist) system faults common.'
  },
  {
    title: 'Power Steering Rack',
    description: 'Electric power steering racks can fail, particularly in 2008-2012 models.'
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
    description: '2010-2014 models, well maintained, moderate wear and tear.'
  },
  {
    condition: 'Fair Condition',
    range: '$1,000 - $2,500',
    description: '2005-2009 models, running with some issues, higher kilometers.'
  },
  {
    condition: 'Poor Condition',
    range: '$300 - $1,000',
    description: 'Pre-2005 models, non-running, major mechanical issues, structural damage.'
  }
];

export default function HondaAccordPage() {
  return (
    <main>
      <MakeModelHero
        make="Honda"
        model="Accord"
        years="2000-2024"
      />
      
      <CommonIssues
        make="Honda"
        model="Accord"
        issues={commonIssues}
      />

      <PriceEstimator
        make="Honda"
        model="Accord"
        priceRanges={priceRanges}
      />

      <QuoteForm />
    </main>
  );
}