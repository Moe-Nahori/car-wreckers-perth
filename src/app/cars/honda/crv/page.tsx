import MakeModelHero from '@/components/cars/MakeModelHero';
import CommonIssues from '@/components/cars/CommonIssues';
import PriceEstimator from '@/components/cars/PriceEstimator';
import { QuoteForm } from '@/components';

const commonIssues = [
  {
    title: 'AC Compressor Failure',
    description: '2007-2011 models commonly experience air conditioning compressor failures.'
  },
  {
    title: 'Differential Fluid Leaks',
    description: 'Rear differential fluid leaks in AWD models, particularly 2007-2011 vehicles.'
  },
  {
    title: 'Door Lock Actuator',
    description: 'Electric door lock actuators commonly fail, causing doors not to lock/unlock.'
  },
  {
    title: 'Oil Dilution',
    description: '2017-2019 1.5L turbo engines can experience oil dilution with fuel in cold climates.'
  },
  {
    title: 'Vibration Issues',
    description: 'Driveshaft and transmission vibrations common in 2012-2016 models.'
  }
];

const priceRanges = [
  {
    condition: 'Excellent Condition',
    range: '$4,500 - $9,000',
    description: 'Late model (2015+), low kilometers, dealer service history.'
  },
  {
    condition: 'Good Condition',
    range: '$2,800 - $4,500',
    description: '2010-2014 models, regular maintenance, moderate wear.'
  },
  {
    condition: 'Fair Condition',
    range: '$1,200 - $2,800',
    description: '2005-2009 models, running with issues, higher kilometers.'
  },
  {
    condition: 'Poor Condition',
    range: '$300 - $1,200',
    description: 'Pre-2005 models, non-running, major mechanical issues, accident history.'
  }
];

export default function HondaCRVPage() {
  return (
    <main>
      <MakeModelHero
        make="Honda"
        model="CR-V"
        years="2000-2024"
      />
      
      <CommonIssues
        make="Honda"
        model="CR-V"
        issues={commonIssues}
      />

      <PriceEstimator
        make="Honda"
        model="CR-V"
        priceRanges={priceRanges}
      />

      <QuoteForm />
    </main>
  );
}