import MakeModelHero from '@/components/cars/MakeModelHero';
import CommonIssues from '@/components/cars/CommonIssues';
import PriceEstimator from '@/components/cars/PriceEstimator';
import { QuoteForm } from '@/components';

const commonIssues = [
  {
    title: 'DPF Problems',
    description: 'Diesel models often experience DPF blockage issues, particularly when used for short trips.'
  },
  {
    title: 'Timing Belt Failure',
    description: 'Pre-2015 diesel models need timing belt replacement at 150,000km to avoid catastrophic engine failure.'
  },
  {
    title: 'Injector Issues',
    description: '1KD-FTV engine models prone to injector failures, causing rough running and starting issues.'
  },
  {
    title: 'Chassis Rust',
    description: 'Older models susceptible to chassis rail and body rust, particularly in coastal areas.'
  },
  {
    title: 'Front Ball Joint Wear',
    description: 'Common suspension wear point, especially in vehicles used off-road or carrying heavy loads.'
  }
];

const priceRanges = [
  {
    condition: 'Excellent Condition',
    range: '$5,000 - $9,999',
    description: 'Late model (2015+), well maintained, low kilometers, clean history.'
  },
  {
    condition: 'Good Condition',
    range: '$3,000 - $5,000',
    description: '2010-2014 models, moderate wear, regular maintenance history.'
  },
  {
    condition: 'Fair Condition',
    range: '$1,000 - $3,000',
    description: '2000-2009 models, running with issues, high kilometers.'
  },
  {
    condition: 'Poor Condition',
    range: '$300 - $1,000',
    description: 'Pre-2000 models, non-running, major mechanical issues, severe rust.'
  }
];

export default function ToyotaHiluxPage() {
  return (
    <main>
      <MakeModelHero
        make="Toyota"
        model="HiLux"
        years="1997-2024"
      />
      
      <CommonIssues
        make="Toyota"
        model="HiLux"
        issues={commonIssues}
      />

      <PriceEstimator
        make="Toyota"
        model="HiLux"
        priceRanges={priceRanges}
      />

      <QuoteForm />
    </main>
  );
}