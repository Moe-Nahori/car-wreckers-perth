import MakeModelHero from '@/components/cars/MakeModelHero';
import CommonIssues from '@/components/cars/CommonIssues';
import PriceEstimator from '@/components/cars/PriceEstimator';
import { QuoteForm } from '@/components';

const commonIssues = [
  {
    title: 'Air Suspension Failure',
    description: 'Models from 2007-2017 commonly experience air suspension system failures requiring complete replacement.'
  },
  {
    title: 'Valley Plate Leaks',
    description: 'V8 models (especially 2007-2012) may develop oil leaks from the valley plate area.'
  },
  {
    title: 'Transmission Control Issues',
    description: 'Some 2013-2017 models experience transmission control module problems affecting shift quality.'
  },
  {
    title: 'Advanced Safety Systems',
    description: 'Pre-collision and lane departure systems may require recalibration or sensor replacement in 2013-2017 models.'
  },
  {
    title: 'Audio System Problems',
    description: 'Mark Levinson audio systems in 2010-2015 models may develop amplifier or speaker issues.'
  }
];

const priceRanges = [
  {
    condition: 'Excellent Condition',
    range: '$8,000 - $25,000',
    description: 'Well-maintained vehicle with full service history, all features working, minimal wear and tear.'
  },
  {
    condition: 'Good Condition',
    range: '$5,000 - $8,000',
    description: 'Running vehicle with regular maintenance, may need minor repairs, moderate wear.'
  },
  {
    condition: 'Fair Condition',
    range: '$2,500 - $5,000',
    description: 'Running with mechanical issues, high mileage, significant wear and tear.'
  },
  {
    condition: 'Poor Condition',
    range: '$600 - $2,500',
    description: 'Non-running, major mechanical issues, accident damage, or very old models.'
  }
];

export default function LexusLSPage() {
  return (
    <main>
      <MakeModelHero
        make="Lexus"
        model="LS"
        years="2000-2024"
      />
      
      <CommonIssues
        make="Lexus"
        model="LS"
        issues={commonIssues}
      />

      <PriceEstimator
        make="Lexus"
        model="LS"
        priceRanges={priceRanges}
      />

      <QuoteForm />
    </main>
  );
}