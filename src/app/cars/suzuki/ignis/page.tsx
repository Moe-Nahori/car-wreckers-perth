import MakeModelHero from '@/components/cars/MakeModelHero';
import CommonIssues from '@/components/cars/CommonIssues';
import PriceEstimator from '@/components/cars/PriceEstimator';
import { QuoteForm } from '@/components';

const commonIssues = [
  {
    title: 'CVT Transmission',
    description: 'CVT automatic transmission can experience shudder and hesitation issues.'
  },
  {
    title: 'Start-Stop System',
    description: 'Auto start-stop system can be problematic, causing rough restarts.'
  },
  {
    title: 'Infotainment System',
    description: 'Touchscreen display and connectivity issues reported in 2017-2019 models.'
  },
  {
    title: 'Fuel Injectors',
    description: 'Carbon buildup and injector clogging in direct injection engines.'
  },
  {
    title: 'Suspension Noise',
    description: 'Front suspension strut and mount issues causing knocking sounds.'
  }
];

const priceRanges = [
  {
    condition: 'Excellent Condition',
    range: '$3,000 - $6,000',
    description: 'Late model (2018+), low kilometers, full dealer service history.'
  },
  {
    condition: 'Good Condition',
    range: '$2,000 - $3,000',
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
    description: 'Any year with major mechanical issues or accident damage.'
  }
];

export default function SuzukiIgnisPage() {
  return (
    <main>
      <MakeModelHero
        make="Suzuki"
        model="Ignis"
        years="2016-2024"
      />
      
      <CommonIssues
        make="Suzuki"
        model="Ignis"
        issues={commonIssues}
      />

      <PriceEstimator
        make="Suzuki"
        model="Ignis"
        priceRanges={priceRanges}
      />

      <QuoteForm />
    </main>
  );
}