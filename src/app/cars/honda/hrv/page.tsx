import MakeModelHero from '@/components/cars/MakeModelHero';
import CommonIssues from '@/components/cars/CommonIssues';
import PriceEstimator from '@/components/cars/PriceEstimator';
import { QuoteForm } from '@/components';

const commonIssues = [
  {
    title: 'CVT Transmission',
    description: 'Early models can experience CVT transmission shudder and performance issues.'
  },
  {
    title: 'Start-Stop System',
    description: 'Auto start-stop system can be problematic, causing rough restarts.'
  },
  {
    title: 'Infotainment System',
    description: '2015-2018 models prone to infotainment system freezing and connectivity issues.'
  },
  {
    title: 'Electric Parking Brake',
    description: 'Electronic parking brake system can malfunction, requiring module replacement.'
  },
  {
    title: 'Fuel Pump',
    description: '2018-2019 models affected by fuel pump recall due to potential failure.'
  }
];

const priceRanges = [
  {
    condition: 'Excellent Condition',
    range: '$4,000 - $8,000',
    description: 'Late model (2018+), low kilometers, full service history.'
  },
  {
    condition: 'Good Condition',
    range: '$2,500 - $4,000',
    description: '2016-2017 models, well maintained, moderate wear.'
  },
  {
    condition: 'Fair Condition',
    range: '$1,500 - $2,500',
    description: '2015-2016 models, running with issues, higher kilometers.'
  },
  {
    condition: 'Poor Condition',
    range: '$500 - $1,500',
    description: 'Early models with significant issues or accident damage.'
  }
];

export default function HondaHRVPage() {
  return (
    <main>
      <MakeModelHero
        make="Honda"
        model="HR-V"
        years="2015-2024"
      />
      
      <CommonIssues
        make="Honda"
        model="HR-V"
        issues={commonIssues}
      />

      <PriceEstimator
        make="Honda"
        model="HR-V"
        priceRanges={priceRanges}
      />

      <QuoteForm />
    </main>
  );
}