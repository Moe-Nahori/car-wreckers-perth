import MakeModelHero from '@/components/cars/MakeModelHero';
import CommonIssues from '@/components/cars/CommonIssues';
import PriceEstimator from '@/components/cars/PriceEstimator';
import { QuoteForm } from '@/components';

const commonIssues = [
  {
    title: 'Transmission Failure',
    description: '2001-2005 automatic models prone to transmission failures, particularly in high mileage vehicles.'
  },
  {
    title: 'Engine Block Cracking',
    description: '2006-2009 models may experience engine block cracking leading to coolant loss and overheating.'
  },
  {
    title: 'Air Conditioning Issues',
    description: 'Common AC compressor and condenser failures, especially in older models.'
  },
  {
    title: 'Power Steering Problems',
    description: 'Electric power steering system failures in 2006-2013 models causing loss of assist.'
  },
  {
    title: 'Catalytic Converter Theft',
    description: 'Particularly targeted for catalytic converter theft due to high precious metal content.'
  }
];

const priceRanges = [
  {
    condition: 'Excellent Condition',
    range: '$3,500 - $7,500',
    description: 'Late model (2015+), well maintained, low kilometers, no accidents.'
  },
  {
    condition: 'Good Condition',
    range: '$2,000 - $3,500',
    description: '2010-2014 models, regular service history, moderate wear.'
  },
  {
    condition: 'Fair Condition',
    range: '$800 - $2,000',
    description: '2005-2009 models, running with issues, higher kilometers.'
  },
  {
    condition: 'Poor Condition',
    range: '$200 - $800',
    description: 'Pre-2005 models, non-running, major mechanical issues, accident damage.'
  }
];

export default function HondaCivicPage() {
  return (
    <main>
      <MakeModelHero
        make="Honda"
        model="Civic"
        years="2000-2024"
      />
      
      <CommonIssues
        make="Honda"
        model="Civic"
        issues={commonIssues}
      />

      <PriceEstimator
        make="Honda"
        model="Civic"
        priceRanges={priceRanges}
      />

      <QuoteForm />
    </main>
  );
}