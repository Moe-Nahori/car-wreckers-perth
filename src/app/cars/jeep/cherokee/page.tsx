import MakeModelHero from '@/components/cars/MakeModelHero';
import CommonIssues from '@/components/cars/CommonIssues';
import PriceEstimator from '@/components/cars/PriceEstimator';
import { QuoteForm } from '@/components';

const commonIssues = [
  {
    title: 'Transmission Problems',
    description: 'The 9-speed automatic transmission in 2014-2016 models can experience shifting issues and software problems.'
  },
  {
    title: 'Engine Stalling',
    description: 'Some models experience unexpected engine stalling, particularly in 2014-2015 models.'
  },
  {
    title: 'Oil Consumption',
    description: 'Higher than normal oil consumption reported in some 2.4L engines.'
  },
  {
    title: 'Electrical Issues',
    description: 'Various electrical problems including screen freezing, sensor malfunctions, and power liftgate issues.'
  },
  {
    title: 'Power Liftgate',
    description: 'Common failures with power liftgate mechanisms and control modules.'
  }
];

const priceRanges = [
  {
    condition: 'Excellent Condition',
    range: '$4,500 - $12,000',
    description: 'Running vehicle with minor wear and tear, all components functional, good service history.'
  },
  {
    condition: 'Good Condition',
    range: '$2,000 - $4,500',
    description: 'Running vehicle with some mechanical issues, moderate wear and tear, may need repairs.'
  },
  {
    condition: 'Fair Condition',
    range: '$800 - $2,000',
    description: 'Non-running or significant mechanical issues, high mileage, major repairs needed.'
  },
  {
    condition: 'Poor Condition',
    range: '$200 - $800',
    description: 'Severe damage, missing parts, very old models, or complete mechanical failure.'
  }
];

export default function JeepCherokeePage() {
  return (
    <main>
      <MakeModelHero
        make="Jeep"
        model="Cherokee"
        years="2000-2024"
      />
      
      <CommonIssues
        make="Jeep"
        model="Cherokee"
        issues={commonIssues}
      />

      <PriceEstimator
        make="Jeep"
        model="Cherokee"
        priceRanges={priceRanges}
      />

      <QuoteForm />
    </main>
  );
}