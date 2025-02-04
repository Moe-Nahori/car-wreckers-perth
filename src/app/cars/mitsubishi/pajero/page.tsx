import MakeModelHero from '@/components/cars/MakeModelHero';
import CommonIssues from '@/components/cars/CommonIssues';
import PriceEstimator from '@/components/cars/PriceEstimator';
import { QuoteForm } from '@/components';

const commonIssues = [
  {
    title: 'Timing Chain Failure',
    description: '3.2L diesel engines prone to timing chain stretch and tensioner problems.'
  },
  {
    title: 'Injector Problems',
    description: 'Common rail diesel injector failures, particularly in 2006-2014 models.'
  },
  {
    title: 'Transfer Case Issues',
    description: 'Super Select 4WD system can develop problems, especially in high-mileage vehicles.'
  },
  {
    title: 'EGR System',
    description: 'EGR valve failures and carbon buildup issues in diesel models.'
  },
  {
    title: 'Suspension Wear',
    description: 'Front suspension components wear quickly, particularly in off-road use.'
  }
];

const priceRanges = [
  {
    condition: 'Excellent Condition',
    range: '$5,500 - $11,000',
    description: 'Late model (2015+), low kilometers, full service history, minimal off-road use.'
  },
  {
    condition: 'Good Condition',
    range: '$3,500 - $5,500',
    description: '2010-2014 models, well maintained, moderate wear and tear.'
  },
  {
    condition: 'Fair Condition',
    range: '$1,500 - $3,500',
    description: '2005-2009 models, running with issues, higher kilometers.'
  },
  {
    condition: 'Poor Condition',
    range: '$500 - $1,500',
    description: 'Pre-2005 models, non-running, major mechanical issues, structural problems.'
  }
];

export default function MitsubishiPajeroPage() {
  return (
    <main>
      <MakeModelHero
        make="Mitsubishi"
        model="Pajero"
        years="2000-2024"
      />
      
      <CommonIssues
        make="Mitsubishi"
        model="Pajero"
        issues={commonIssues}
      />

      <PriceEstimator
        make="Mitsubishi"
        model="Pajero"
        priceRanges={priceRanges}
      />

      <QuoteForm />
    </main>
  );
}