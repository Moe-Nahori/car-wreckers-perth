import MakeModelHero from '@/components/cars/MakeModelHero';
import CommonIssues from '@/components/cars/CommonIssues';
import PriceEstimator from '@/components/cars/PriceEstimator';
import { QuoteForm } from '@/components';

const commonIssues = [
  {
    title: 'Transmission Problems',
    description: 'CVT automatic transmission can experience jerking and hesitation issues.'
  },
  {
    title: 'Engine Management',
    description: 'Engine management light issues related to sensors and fuel system.'
  },
  {
    title: 'Air Conditioning',
    description: 'AC system failures common, particularly compressor and condenser issues.'
  },
  {
    title: 'Electrical Issues',
    description: 'Various electrical problems including central locking and window controls.'
  },
  {
    title: 'Suspension Components',
    description: 'Front suspension struts and bushings wear prematurely in urban use.'
  }
];

const priceRanges = [
  {
    condition: 'Excellent Condition',
    range: '$3,500 - $7,000',
    description: 'Late model (2018+), low kilometers, full service history, no accidents.'
  },
  {
    condition: 'Good Condition',
    range: '$2,000 - $3,500',
    description: '2016-2017 models, well maintained, moderate wear.'
  },
  {
    condition: 'Fair Condition',
    range: '$1,000 - $2,000',
    description: 'Early models (2016), running with issues, higher kilometers.'
  },
  {
    condition: 'Poor Condition',
    range: '$300 - $1,000',
    description: 'Any year with significant mechanical problems or accident damage.'
  }
];

export default function SuzukiBalenoPage() {
  return (
    <main>
      <MakeModelHero
        make="Suzuki"
        model="Baleno"
        years="2016-2024"
      />
      
      <CommonIssues
        make="Suzuki"
        model="Baleno"
        issues={commonIssues}
      />

      <PriceEstimator
        make="Suzuki"
        model="Baleno"
        priceRanges={priceRanges}
      />

      <QuoteForm />
    </main>
  );
}