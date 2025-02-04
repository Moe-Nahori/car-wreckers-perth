import MakeModelHero from '@/components/cars/MakeModelHero';
import CommonIssues from '@/components/cars/CommonIssues';
import PriceEstimator from '@/components/cars/PriceEstimator';
import { QuoteForm } from '@/components';

const commonIssues = [
  {
    title: 'CVT Transmission',
    description: 'CVT automatic transmission issues including shudder and failure in 2010-2015 models.'
  },
  {
    title: 'Oil Consumption',
    description: '2.0L engines can consume excessive oil, particularly in high-mileage vehicles.'
  },
  {
    title: 'Suspension Noise',
    description: 'Front suspension struts and bushings wear causing knocking sounds.'
  },
  {
    title: 'Power Window Issues',
    description: 'Electric window regulators and switches commonly fail.'
  },
  {
    title: 'AC System',
    description: 'Air conditioning compressor and condenser failures, especially in older models.'
  }
];

const priceRanges = [
  {
    condition: 'Excellent Condition',
    range: '$4,000 - $8,000',
    description: 'Late model (2015+), low kilometers, full service history, no accidents.'
  },
  {
    condition: 'Good Condition',
    range: '$2,500 - $4,000',
    description: '2012-2014 models, well maintained, moderate wear.'
  },
  {
    condition: 'Fair Condition',
    range: '$1,000 - $2,500',
    description: '2010-2011 models, running with issues, higher kilometers.'
  },
  {
    condition: 'Poor Condition',
    range: '$300 - $1,000',
    description: 'Early models with significant mechanical issues or accident damage.'
  }
];

export default function MitsubishiASXPage() {
  return (
    <main>
      <MakeModelHero
        make="Mitsubishi"
        model="ASX"
        years="2010-2024"
      />
      
      <CommonIssues
        make="Mitsubishi"
        model="ASX"
        issues={commonIssues}
      />

      <PriceEstimator
        make="Mitsubishi"
        model="ASX"
        priceRanges={priceRanges}
      />

      <QuoteForm />
    </main>
  );
}