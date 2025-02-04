import MakeModelHero from '@/components/cars/MakeModelHero';
import CommonIssues from '@/components/cars/CommonIssues';
import PriceEstimator from '@/components/cars/PriceEstimator';
import { QuoteForm } from '@/components';

const commonIssues = [
  {
    title: 'CVT Transmission',
    description: '2010-2016 models can experience CVT transmission shudder and hesitation issues.'
  },
  {
    title: 'Oil Consumption',
    description: 'M15A and M16A engines can consume excessive oil, particularly in high-mileage vehicles.'
  },
  {
    title: 'Timing Chain',
    description: 'K-series engines prone to timing chain stretch and tensioner wear.'
  },
  {
    title: 'Power Steering',
    description: 'Electric power steering system failures reported in 2011-2015 models.'
  },
  {
    title: 'Suspension Issues',
    description: 'Front struts and control arm bushings wear prematurely in urban-driven vehicles.'
  }
];

const priceRanges = [
  {
    condition: 'Excellent Condition',
    range: '$3,000 - $6,500',
    description: 'Late model (2015+), low kilometers, full service history, no accidents.'
  },
  {
    condition: 'Good Condition',
    range: '$1,800 - $3,000',
    description: '2010-2014 models, well maintained, moderate wear.'
  },
  {
    condition: 'Fair Condition',
    range: '$800 - $1,800',
    description: '2005-2009 models, running with issues, higher kilometers.'
  },
  {
    condition: 'Poor Condition',
    range: '$200 - $800',
    description: 'Pre-2005 models, non-running, major mechanical issues, accident damage.'
  }
];

export default function SuzukiSwiftPage() {
  return (
    <main>
      <MakeModelHero
        make="Suzuki"
        model="Swift"
        years="2000-2024"
      />
      
      <CommonIssues
        make="Suzuki"
        model="Swift"
        issues={commonIssues}
      />

      <PriceEstimator
        make="Suzuki"
        model="Swift"
        priceRanges={priceRanges}
      />

      <QuoteForm />
    </main>
  );
}