import MakeModelHero from '@/components/cars/MakeModelHero';
import CommonIssues from '@/components/cars/CommonIssues';
import PriceEstimator from '@/components/cars/PriceEstimator';
import { QuoteForm } from '@/components';

const commonIssues = [
  {
    title: 'Transfer Case',
    description: 'Transfer case failures common in 4WD models, particularly under heavy use.'
  },
  {
    title: 'Diesel Particulate Filter',
    description: 'DPF issues in diesel models, especially in vehicles used primarily for short trips.'
  },
  {
    title: 'Turbocharger Problems',
    description: 'Turbo failures reported in 1.4L BoosterJet engines, particularly in 2015-2018 models.'
  },
  {
    title: 'Transmission',
    description: 'Automatic transmission control module issues in 2015-2017 models.'
  },
  {
    title: 'Rust Issues',
    description: 'Pre-2010 models prone to chassis and body rust, especially in coastal areas.'
  }
];

const priceRanges = [
  {
    condition: 'Excellent Condition',
    range: '$4,000 - $8,000',
    description: 'Late model (2015+), low kilometers, comprehensive service history.'
  },
  {
    condition: 'Good Condition',
    range: '$2,500 - $4,000',
    description: '2010-2014 models, regular maintenance, moderate wear.'
  },
  {
    condition: 'Fair Condition',
    range: '$1,000 - $2,500',
    description: '2005-2009 models, running with issues, higher kilometers.'
  },
  {
    condition: 'Poor Condition',
    range: '$300 - $1,000',
    description: 'Pre-2005 models, non-running, major mechanical issues, structural problems.'
  }
];

export default function SuzukiVitaraPage() {
  return (
    <main>
      <MakeModelHero
        make="Suzuki"
        model="Vitara"
        years="2000-2024"
      />
      
      <CommonIssues
        make="Suzuki"
        model="Vitara"
        issues={commonIssues}
      />

      <PriceEstimator
        make="Suzuki"
        model="Vitara"
        priceRanges={priceRanges}
      />

      <QuoteForm />
    </main>
  );
}