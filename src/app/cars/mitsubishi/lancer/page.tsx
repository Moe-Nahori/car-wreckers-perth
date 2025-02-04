import MakeModelHero from '@/components/cars/MakeModelHero';
import CommonIssues from '@/components/cars/CommonIssues';
import PriceEstimator from '@/components/cars/PriceEstimator';
import { QuoteForm } from '@/components';

const commonIssues = [
  {
    title: 'CVT Transmission',
    description: 'CVT transmission failures in 2007-2012 models causing jerking and hesitation.'
  },
  {
    title: 'Engine Mounts',
    description: 'Engine mount deterioration causing excessive vibration and noise.'
  },
  {
    title: 'Power Steering',
    description: 'Electric power steering system failures in later models.'
  },
  {
    title: 'Timing Belt',
    description: '4B11 engine timing belt failures if not replaced at recommended intervals.'
  },
  {
    title: 'Air Conditioning',
    description: 'AC compressor and condenser failures common in high-mileage vehicles.'
  }
];

const priceRanges = [
  {
    condition: 'Excellent Condition',
    range: '$3,500 - $7,000',
    description: 'Late model (2015+), low kilometers, full service history, no accidents.'
  },
  {
    condition: 'Good Condition',
    range: '$2,000 - $3,500',
    description: '2010-2014 models, well maintained, moderate wear.'
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

export default function MitsubishiLancerPage() {
  return (
    <main>
      <MakeModelHero
        make="Mitsubishi"
        model="Lancer"
        years="2000-2024"
      />
      
      <CommonIssues
        make="Mitsubishi"
        model="Lancer"
        issues={commonIssues}
      />

      <PriceEstimator
        make="Mitsubishi"
        model="Lancer"
        priceRanges={priceRanges}
      />

      <QuoteForm />
    </main>
  );
}