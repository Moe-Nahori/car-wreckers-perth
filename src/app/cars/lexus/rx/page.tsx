import MakeModelHero from '@/components/cars/MakeModelHero';
import CommonIssues from '@/components/cars/CommonIssues';
import PriceEstimator from '@/components/cars/PriceEstimator';
import { QuoteForm } from '@/components';

const commonIssues = [
  {
    title: 'Hybrid Battery Issues',
    description: 'RX450h models from 2010-2015 may require hybrid battery replacement after 150,000km.'
  },
  {
    title: 'Infotainment System',
    description: '2016-2019 models experience occasional infotainment system freezes and touchpad sensitivity issues.'
  },
  {
    title: 'Air Suspension Problems',
    description: 'Models equipped with air suspension may experience system failures requiring expensive repairs.'
  },
  {
    title: 'Oil Leaks',
    description: '2010-2015 RX350 models might develop oil leaks from the timing cover or valve covers.'
  },
  {
    title: 'Power Tailgate Issues',
    description: 'Power tailgate may require sensor replacement or adjustment in models from 2016-2020.'
  }
];

const priceRanges = [
  {
    condition: 'Excellent Condition',
    range: '$6,000 - $18,000',
    description: 'Well-maintained vehicle with full service history, all features working, minimal wear and tear.'
  },
  {
    condition: 'Good Condition',
    range: '$3,500 - $6,000',
    description: 'Running vehicle with regular maintenance, may need minor repairs, moderate wear.'
  },
  {
    condition: 'Fair Condition',
    range: '$1,500 - $3,500',
    description: 'Running with mechanical issues, high mileage, significant wear and tear.'
  },
  {
    condition: 'Poor Condition',
    range: '$400 - $1,500',
    description: 'Non-running, major mechanical issues, accident damage, or very old models.'
  }
];

export default function LexusRXPage() {
  return (
    <main>
      <MakeModelHero
        make="Lexus"
        model="RX"
        years="2000-2024"
      />
      
      <CommonIssues
        make="Lexus"
        model="RX"
        issues={commonIssues}
      />

      <PriceEstimator
        make="Lexus"
        model="RX"
        priceRanges={priceRanges}
      />

      <QuoteForm />
    </main>
  );
}