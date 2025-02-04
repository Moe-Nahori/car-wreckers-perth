import { ModelHero, CommonIssues, PriceEstimator } from '@/components/cars';
import { QuoteForm } from '@/components';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Toyota Camry Wreckers Perth | Cash for Camry | Parts & Service',
  description: 'Leading Toyota Camry wreckers in Perth. Top cash prices for all Camry models. Quality used parts and components available. Free car removal service.',
};

const commonIssues = [
  {
    title: 'Transmission Hesitation',
    description: '2012-2015 models may experience hesitation or jerking during gear changes, especially in 6-speed automatic transmissions.'
  },
  {
    title: 'Excessive Oil Consumption',
    description: '2007-2009 models with 2AZ-FE engines often consume oil at higher rates than normal.'
  },
  {
    title: 'Power Steering Issues',
    description: 'Electronic power steering failures reported in 2015-2017 models, causing increased steering effort.'
  },
  {
    title: 'Brake System Problems',
    description: 'Some models experience premature brake wear and ABS system malfunctions.'
  },
  {
    title: 'Interior Electronics',
    description: 'Navigation and infotainment system glitches common in 2012-2017 models.'
  }
];

const priceRanges = [
  {
    condition: 'Excellent Condition',
    range: '$4,000 - $9,999',
    description: 'Well-maintained vehicle with full service history, all features working, minimal wear and tear.'
  },
  {
    condition: 'Good Condition',
    range: '$2,000 - $4,000',
    description: 'Running vehicle with regular maintenance, may need minor repairs, moderate wear.'
  },
  {
    condition: 'Fair Condition',
    range: '$800 - $2,000',
    description: 'Running with mechanical issues, high mileage, significant wear and tear.'
  },
  {
    condition: 'Poor Condition',
    range: '$200 - $800',
    description: 'Non-running, major mechanical issues, accident damage, or very old models.'
  }
];

export default function ToyotaCamryPage() {
  return (
    <main>
      <ModelHero
        make="Toyota"
        model="Camry"
        yearRange="1993-2024"
        popularParts={[
          "Engine",
          "Transmission",
          "Front & Rear Bumpers",
          "Doors",
          "Headlights & Taillights",
          "Interior Parts"
        ]}
      />
      
      <CommonIssues
        make="Toyota"
        model="Camry"
        issues={commonIssues}
      />

      <PriceEstimator
        make="Toyota"
        model="Camry"
        priceRanges={priceRanges}
      />

      <QuoteForm />
    </main>
  );
}