import MakeModelHero from '@/components/cars/MakeModelHero';
import CommonIssues from '@/components/cars/CommonIssues';
import PriceEstimator from '@/components/cars/PriceEstimator';
import { QuoteForm } from '@/components';

const commonIssues = [
  {
    title: 'Timing Chain Tensioner',
    description: '4JJ1 engine models can experience timing chain tensioner wear, leading to rattling noise and potential engine damage.'
  },
  {
    title: 'EGR Valve Issues',
    description: 'Common problem with diesel models causing reduced performance and increased fuel consumption.'
  },
  {
    title: 'DPF Problems',
    description: 'Diesel particulate filter blockage issues, particularly in vehicles used primarily for short trips.'
  },
  {
    title: 'Injector Failures',
    description: 'Earlier models prone to injector problems causing rough running and starting difficulties.'
  },
  {
    title: 'Transmission Shudder',
    description: 'Automatic transmission models may experience shuddering, particularly in 2012-2016 vehicles.'
  }
];

const priceRanges = [
  {
    condition: 'Excellent Condition',
    range: '$4,500 - $8,500',
    description: 'Late model (2017+), well maintained, low kilometers, no accident history.'
  },
  {
    condition: 'Good Condition',
    range: '$2,500 - $4,500',
    description: '2012-2016 models, regular service history, moderate wear and tear.'
  },
  {
    condition: 'Fair Condition',
    range: '$1,000 - $2,500',
    description: '2007-2011 models, running with some issues, higher kilometers.'
  },
  {
    condition: 'Poor Condition',
    range: '$300 - $1,000',
    description: 'Pre-2007 models, non-running, major mechanical issues, significant rust.'
  }
];

export default function IsuzuDMaxPage() {
  return (
    <main>
      <MakeModelHero
        make="Isuzu"
        model="D-Max"
        years="2003-2024"
      />
      
      <CommonIssues
        make="Isuzu"
        model="D-Max"
        issues={commonIssues}
      />

      <PriceEstimator
        make="Isuzu"
        model="D-Max"
        priceRanges={priceRanges}
      />

      <QuoteForm />
    </main>
  );
}