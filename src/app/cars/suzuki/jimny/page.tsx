import MakeModelHero from '@/components/cars/MakeModelHero';
import CommonIssues from '@/components/cars/CommonIssues';
import PriceEstimator from '@/components/cars/PriceEstimator';
import { QuoteForm } from '@/components';

const commonIssues = [
  {
    title: 'Transfer Case Noise',
    description: 'Common transfer case bearing wear causing noise, particularly in high-mileage vehicles.'
  },
  {
    title: 'Rust Problems',
    description: 'Chassis and body rust issues, especially in pre-2010 models and coastal areas.'
  },
  {
    title: 'Manual Gearbox',
    description: 'Manual transmission synchro wear, especially in third gear.'
  },
  {
    title: 'Steering Box',
    description: 'Steering box wear causing play in the steering, common in off-road used vehicles.'
  },
  {
    title: 'Differential Issues',
    description: 'Front and rear differential seal leaks, particularly in vehicles used off-road.'
  }
];

const priceRanges = [
  {
    condition: 'Excellent Condition',
    range: '$3,500 - $7,500',
    description: 'Late model (2015+), low kilometers, full service history, minimal off-road use.'
  },
  {
    condition: 'Good Condition',
    range: '$2,000 - $3,500',
    description: '2010-2014 models, well maintained, moderate wear and tear.'
  },
  {
    condition: 'Fair Condition',
    range: '$800 - $2,000',
    description: '2005-2009 models, running with issues, higher kilometers.'
  },
  {
    condition: 'Poor Condition',
    range: '$200 - $800',
    description: 'Pre-2005 models, non-running, major mechanical issues, extensive rust.'
  }
];

export default function SuzukiJimnyPage() {
  return (
    <main>
      <MakeModelHero
        make="Suzuki"
        model="Jimny"
        years="2000-2024"
      />
      
      <CommonIssues
        make="Suzuki"
        model="Jimny"
        issues={commonIssues}
      />

      <PriceEstimator
        make="Suzuki"
        model="Jimny"
        priceRanges={priceRanges}
      />

      <QuoteForm />
    </main>
  );
}