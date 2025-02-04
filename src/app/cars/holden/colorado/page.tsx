import MakeModelHero from '@/components/cars/MakeModelHero';
import CommonIssues from '@/components/cars/CommonIssues';
import PriceEstimator from '@/components/cars/PriceEstimator';
import { QuoteForm } from '@/components';

const commonIssues = [
  {
    title: 'DPF Problems',
    description: 'Common DPF blockages and regeneration issues, particularly in city-driven vehicles.'
  },
  {
    title: 'Timing Chain Issues',
    description: '2.8L Duramax diesel engines prone to timing chain stretch and failure.'
  },
  {
    title: 'Injector Failures',
    description: 'Early models suffer from injector problems causing rough running and starting issues.'
  },
  {
    title: 'Transmission Problems',
    description: 'Manual gearbox failures and automatic transmission judder reported.'
  },
  {
    title: 'Suspension Issues',
    description: 'Front suspension wear, particularly ball joints and control arm bushings.'
  }
];

const priceRanges = [
  {
    condition: 'Excellent Condition',
    range: '$4,000 - $9,999',
    description: '2017-2020 models, well maintained, low kilometers, good service history.'
  },
  {
    condition: 'Good Condition',
    range: '$2,500 - $4,000',
    description: '2012-2016 models, moderate wear, regular maintenance.'
  },
  {
    condition: 'Fair Condition',
    range: '$1,000 - $2,500',
    description: '2008-2011 models, running with issues, high kilometers.'
  },
  {
    condition: 'Poor Condition',
    range: '$300 - $1,000',
    description: 'Non-running, major mechanical issues, accident damaged.'
  }
];

export default function HoldenColoradoPage() {
  return (
    <main>
      <MakeModelHero
        make="Holden"
        model="Colorado"
        years="2008-2020"
      />
      
      <CommonIssues
        make="Holden"
        model="Colorado"
        issues={commonIssues}
      />

      <PriceEstimator
        make="Holden"
        model="Colorado"
        priceRanges={priceRanges}
      />

      <QuoteForm />
    </main>
  );
}