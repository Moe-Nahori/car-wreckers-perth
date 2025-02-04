import MakeModelHero from '@/components/cars/MakeModelHero';
import CommonIssues from '@/components/cars/CommonIssues';
import PriceEstimator from '@/components/cars/PriceEstimator';
import { QuoteForm } from '@/components';

const commonIssues = [
  {
    title: 'DPF Problems',
    description: '2015+ diesel models experience DPF blockage issues, particularly in urban driving.'
  },
  {
    title: 'Timing Chain',
    description: '4D56 and 4M41 engines can experience timing chain stretch and tensioner wear.'
  },
  {
    title: 'Injector Issues',
    description: 'Common rail diesel engines prone to injector failures and fuel system problems.'
  },
  {
    title: 'Transfer Case',
    description: 'Transfer case failures in 4x4 models, particularly under heavy use.'
  },
  {
    title: 'Chassis Rust',
    description: 'Pre-2015 models susceptible to chassis and body rust, especially in coastal areas.'
  }
];

const priceRanges = [
  {
    condition: 'Excellent Condition',
    range: '$5,000 - $10,000',
    description: 'Late model (2015+), low kilometers, full service history, no accidents.'
  },
  {
    condition: 'Good Condition',
    range: '$3,000 - $5,000',
    description: '2010-2014 models, well maintained, moderate wear.'
  },
  {
    condition: 'Fair Condition',
    range: '$1,500 - $3,000',
    description: '2005-2009 models, running with issues, higher kilometers.'
  },
  {
    condition: 'Poor Condition',
    range: '$500 - $1,500',
    description: 'Pre-2005 models, non-running, major mechanical issues, structural damage.'
  }
];

export default function MitsubishiTritonPage() {
  return (
    <main>
      <MakeModelHero
        make="Mitsubishi"
        model="Triton"
        years="2006-2024"
      />
      
      <CommonIssues
        make="Mitsubishi"
        model="Triton"
        issues={commonIssues}
      />

      <PriceEstimator
        make="Mitsubishi"
        model="Triton"
        priceRanges={priceRanges}
      />

      <QuoteForm />
    </main>
  );
}