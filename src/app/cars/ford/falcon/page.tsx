import MakeModelHero from '@/components/cars/MakeModelHero';
import CommonIssues from '@/components/cars/CommonIssues';
import PriceEstimator from '@/components/cars/PriceEstimator';
import { QuoteForm } from '@/components';

const commonIssues = [
  {
    title: 'Transmission',
    description: 'BTR automatic transmissions prone to failure, particularly in high-mileage vehicles.'
  },
  {
    title: 'Timing Chain',
    description: 'Barra engines can experience timing chain stretch and tensioner wear.'
  },
  {
    title: 'Oil Leaks',
    description: 'Common oil leaks from rear main seal and timing cover gaskets.'
  },
  {
    title: 'Cooling System',
    description: 'Plastic intake manifold and thermostat housing prone to cracking.'
  },
  {
    title: 'Suspension',
    description: 'Front control arm bushings and ball joints wear requiring replacement.'
  }
];

const priceRanges = [
  {
    condition: 'Excellent Condition',
    range: '$5,000 - $10,000',
    description: 'Late model (2012-2016), low kilometers, full service history, no accidents.'
  },
  {
    condition: 'Good Condition',
    range: '$3,000 - $5,000',
    description: '2008-2011 models, well maintained, moderate wear.'
  },
  {
    condition: 'Fair Condition',
    range: '$1,000 - $3,000',
    description: '2002-2007 models, running with issues, higher kilometers.'
  },
  {
    condition: 'Poor Condition',
    range: '$300 - $1,000',
    description: 'Pre-2002 models, non-running, major mechanical issues, structural damage.'
  }
];

export default function FordFalconPage() {
  return (
    <main>
      <MakeModelHero
        make="Ford"
        model="Falcon"
        years="2000-2016"
      />
      
      <CommonIssues
        make="Ford"
        model="Falcon"
        issues={commonIssues}
      />

      <PriceEstimator
        make="Ford"
        model="Falcon"
        priceRanges={priceRanges}
      />

      <QuoteForm />
    </main>
  );
}