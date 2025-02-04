import MakeModelHero from '@/components/cars/MakeModelHero';
import CommonIssues from '@/components/cars/CommonIssues';
import PriceEstimator from '@/components/cars/PriceEstimator';
import { QuoteForm } from '@/components';

const commonIssues = [
  {
    title: 'Injector Problems',
    description: '1HD-FTE engines prone to injector failures, causing rough running and smoke.'
  },
  {
    title: 'Head Gasket Failure',
    description: 'Common in 1HZ and early 1HD engines, especially with overheating history.'
  },
  {
    title: 'Turbo Failures',
    description: 'Turbocharger issues in diesel models, particularly 100 Series with high mileage.'
  },
  {
    title: 'Front Diff Issues',
    description: 'IFS models prone to CV joint and differential bearing wear.'
  },
  {
    title: 'Body Rust',
    description: 'Chassis and body rust common in older models, particularly in coastal areas.'
  }
];

const priceRanges = [
  {
    condition: 'Excellent Condition',
    range: '$6,000 - $9,999',
    description: '200 Series or late 100 Series, well maintained, good service history.'
  },
  {
    condition: 'Good Condition',
    range: '$3,500 - $6,000',
    description: '100 Series, moderate wear, some maintenance history.'
  },
  {
    condition: 'Fair Condition',
    range: '$1,500 - $3,500',
    description: '80 Series or early 100 Series, running with issues, high kilometers.'
  },
  {
    condition: 'Poor Condition',
    range: '$500 - $1,500',
    description: 'Very old models, non-running, major mechanical issues or rust.'
  }
];

export default function ToyotaLandCruiserPage() {
  return (
    <main>
      <MakeModelHero
        make="Toyota"
        model="LandCruiser"
        years="1990-2024"
      />
      
      <CommonIssues
        make="Toyota"
        model="LandCruiser"
        issues={commonIssues}
      />

      <PriceEstimator
        make="Toyota"
        model="LandCruiser"
        priceRanges={priceRanges}
      />

      <QuoteForm />
    </main>
  );
}