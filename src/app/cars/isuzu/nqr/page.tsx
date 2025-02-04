import MakeModelHero from '@/components/cars/MakeModelHero';
import CommonIssues from '@/components/cars/CommonIssues';
import PriceEstimator from '@/components/cars/PriceEstimator';
import { QuoteForm } from '@/components';

const commonIssues = [
  {
    title: 'DPF System Failures',
    description: 'Modern diesel models experience DPF blockage and regeneration issues.'
  },
  {
    title: 'Electrical System Problems',
    description: 'Wiring harness deterioration and sensor failures common in older models.'
  },
  {
    title: 'Air Brake System',
    description: 'Air dryer and valve issues can lead to brake system malfunctions.'
  },
  {
    title: 'Engine Oil Leaks',
    description: 'Common around timing cover and oil cooler connections.'
  },
  {
    title: 'Suspension Wear',
    description: 'Leaf springs and bushings wear out, especially in heavily loaded vehicles.'
  }
];

const priceRanges = [
  {
    condition: 'Excellent Condition',
    range: '$7,000 - $15,000',
    description: 'Late model (2015+), low kilometers, comprehensive service history.'
  },
  {
    condition: 'Good Condition',
    range: '$4,000 - $7,000',
    description: '2010-2014 models, well maintained, moderate wear and tear.'
  },
  {
    condition: 'Fair Condition',
    range: '$2,000 - $4,000',
    description: '2005-2009 models, running with issues, higher kilometers.'
  },
  {
    condition: 'Poor Condition',
    range: '$500 - $2,000',
    description: 'Pre-2005 models, non-running, major mechanical issues, structural damage.'
  }
];

export default function IsuzuNQRPage() {
  return (
    <main>
      <MakeModelHero
        make="Isuzu"
        model="NQR"
        years="2000-2024"
      />
      
      <CommonIssues
        make="Isuzu"
        model="NQR"
        issues={commonIssues}
      />

      <PriceEstimator
        make="Isuzu"
        model="NQR"
        priceRanges={priceRanges}
      />

      <QuoteForm />
    </main>
  );
}