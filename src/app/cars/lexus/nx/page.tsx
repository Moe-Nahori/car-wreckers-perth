import MakeModelHero from '@/components/cars/MakeModelHero';
import CommonIssues from '@/components/cars/CommonIssues';
import PriceEstimator from '@/components/cars/PriceEstimator';
import { QuoteForm } from '@/components';

const commonIssues = [
  {
    title: 'Transmission Hesitation',
    description: '2015-2017 NX200t models may experience hesitation or jerking during acceleration.'
  },
  {
    title: 'Hybrid System Warnings',
    description: 'NX300h models might display hybrid system warnings due to sensor malfunctions.'
  },
  {
    title: 'Infotainment Issues',
    description: '2018-2020 models can experience touchpad controller and screen freezing problems.'
  },
  {
    title: 'Brake System Alerts',
    description: 'False brake system warnings may appear in 2015-2018 models due to sensor calibration.'
  },
  {
    title: 'Power Liftgate Problems',
    description: 'Some 2016-2019 models experience power liftgate operation issues or sensor malfunctions.'
  }
];

const priceRanges = [
  {
    condition: 'Excellent Condition',
    range: '$7,000 - $20,000',
    description: 'Well-maintained vehicle with full service history, all features working, minimal wear and tear.'
  },
  {
    condition: 'Good Condition',
    range: '$4,000 - $7,000',
    description: 'Running vehicle with regular maintenance, may need minor repairs, moderate wear.'
  },
  {
    condition: 'Fair Condition',
    range: '$2,000 - $4,000',
    description: 'Running with mechanical issues, high mileage, significant wear and tear.'
  },
  {
    condition: 'Poor Condition',
    range: '$500 - $2,000',
    description: 'Non-running, major mechanical issues, accident damage, or very old models.'
  }
];

export default function LexusNXPage() {
  return (
    <main>
      <MakeModelHero
        make="Lexus"
        model="NX"
        years="2014-2024"
      />
      
      <CommonIssues
        make="Lexus"
        model="NX"
        issues={commonIssues}
      />

      <PriceEstimator
        make="Lexus"
        model="NX"
        priceRanges={priceRanges}
      />

      <QuoteForm />
    </main>
  );
}