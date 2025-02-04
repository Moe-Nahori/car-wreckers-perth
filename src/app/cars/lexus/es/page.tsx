import MakeModelHero from '@/components/cars/MakeModelHero';
import CommonIssues from '@/components/cars/CommonIssues';
import PriceEstimator from '@/components/cars/PriceEstimator';
import { QuoteForm } from '@/components';

const commonIssues = [
  {
    title: 'Water Pump Failure',
    description: '2013-2018 ES models may experience premature water pump failure, particularly in the hybrid variants.'
  },
  {
    title: 'Oil Consumption',
    description: '2007-2013 ES350 models with 2GR-FE engines may consume oil at a higher than normal rate.'
  },
  {
    title: 'Transmission Issues',
    description: 'Some 2013-2016 models experience hesitation or rough shifting, particularly in cold weather.'
  },
  {
    title: 'Navigation System Problems',
    description: '2014-2017 models may have navigation system glitches or screen freezing issues.'
  },
  {
    title: 'Air Suspension Failures',
    description: 'Models equipped with air suspension might experience system failures after 100,000km.'
  }
];

const priceRanges = [
  {
    condition: 'Excellent Condition',
    range: '$5,000 - $15,000',
    description: 'Well-maintained vehicle with full service history, all features working, minimal wear and tear.'
  },
  {
    condition: 'Good Condition',
    range: '$3,000 - $5,000',
    description: 'Running vehicle with regular maintenance, may need minor repairs, moderate wear.'
  },
  {
    condition: 'Fair Condition',
    range: '$1,000 - $3,000',
    description: 'Running with mechanical issues, high mileage, significant wear and tear.'
  },
  {
    condition: 'Poor Condition',
    range: '$300 - $1,000',
    description: 'Non-running, major mechanical issues, accident damage, or very old models.'
  }
];

export default function LexusESPage() {
  return (
    <main>
      <MakeModelHero
        make="Lexus"
        model="ES"
        years="2000-2024"
      />
      
      <CommonIssues
        make="Lexus"
        model="ES"
        issues={commonIssues}
      />

      <PriceEstimator
        make="Lexus"
        model="ES"
        priceRanges={priceRanges}
      />

      <QuoteForm />
    </main>
  );
}