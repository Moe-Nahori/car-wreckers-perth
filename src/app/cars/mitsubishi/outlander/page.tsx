import MakeModelHero from '@/components/cars/MakeModelHero';
import CommonIssues from '@/components/cars/CommonIssues';
import PriceEstimator from '@/components/cars/PriceEstimator';
import { QuoteForm } from '@/components';

const commonIssues = [
  {
    title: 'CVT Transmission',
    description: 'CVT transmission failures common in 2007-2012 models, causing jerking and hesitation.'
  },
  {
    title: 'PHEV Battery',
    description: 'Hybrid battery degradation and charging system issues in PHEV models.'
  },
  {
    title: 'Air Conditioning',
    description: 'AC compressor failures and refrigerant leaks, particularly in older models.'
  },
  {
    title: 'Power Tailgate',
    description: 'Electric tailgate mechanism failures in later models with power operation.'
  },
  {
    title: 'Suspension Components',
    description: 'Front suspension struts and control arm bushings wear prematurely.'
  }
];

const priceRanges = [
  {
    condition: 'Excellent Condition',
    range: '$4,500 - $9,000',
    description: 'Late model (2015+), low kilometers, full service history, no accidents.'
  },
  {
    condition: 'Good Condition',
    range: '$2,800 - $4,500',
    description: '2010-2014 models, well maintained, moderate wear.'
  },
  {
    condition: 'Fair Condition',
    range: '$1,200 - $2,800',
    description: '2005-2009 models, running with issues, higher kilometers.'
  },
  {
    condition: 'Poor Condition',
    range: '$400 - $1,200',
    description: 'Pre-2005 models, non-running, major mechanical issues, structural damage.'
  }
];

export default function MitsubishiOutlanderPage() {
  return (
    <main>
      <MakeModelHero
        make="Mitsubishi"
        model="Outlander"
        years="2003-2024"
      />
      
      <CommonIssues
        make="Mitsubishi"
        model="Outlander"
        issues={commonIssues}
      />

      <PriceEstimator
        make="Mitsubishi"
        model="Outlander"
        priceRanges={priceRanges}
      />

      <QuoteForm />
    </main>
  );
}