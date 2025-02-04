import MakeModelHero from '@/components/cars/MakeModelHero';
import CommonIssues from '@/components/cars/CommonIssues';
import PriceEstimator from '@/components/cars/PriceEstimator';
import { QuoteForm } from '@/components';

const commonIssues = [
  {
    title: 'DSG Transmission',
    description: '6-speed and 7-speed DSG transmissions can experience mechatronic unit failures.'
  },
  {
    title: 'DPF Issues',
    description: 'Diesel models prone to DPF blockages, particularly in urban driving.'
  },
  {
    title: 'Timing Chain',
    description: 'TSI engines susceptible to timing chain tensioner failures before 2014.'
  },
  {
    title: 'Electric Parking Brake',
    description: 'Electronic parking brake failures requiring complete unit replacement.'
  },
  {
    title: 'Sunroof Drains',
    description: 'Water leaks from blocked sunroof drains causing electrical issues.'
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

export default function VolkswagenPassatPage() {
  return (
    <main>
      <MakeModelHero
        make="Volkswagen"
        model="Passat"
        years="2000-2024"
      />
      
      <CommonIssues
        make="Volkswagen"
        model="Passat"
        issues={commonIssues}
      />

      <PriceEstimator
        make="Volkswagen"
        model="Passat"
        priceRanges={priceRanges}
      />

      <QuoteForm />
    </main>
  );
}