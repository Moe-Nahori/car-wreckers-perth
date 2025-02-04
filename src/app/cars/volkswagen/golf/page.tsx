import { MakeModelHero, CommonIssues, PriceRanges } from '@/components/cars';
import { volkswagenData } from '@/data/cars/volkswagen';
import { QuoteForm } from '@/components';

export default function VolkswagenGolfPage() {
  const modelData = volkswagenData.models.golf;
  
  const priceRanges = [
    {
      condition: 'Good Condition',
      range: `$${modelData.averageValue.good.toLocaleString()}`,
      description: 'Well-maintained vehicle with regular service history and minimal issues.'
    },
    {
      condition: 'Fair Condition',
      range: `$${modelData.averageValue.fair.toLocaleString()}`,
      description: 'Running vehicle with some mechanical issues and moderate wear.'
    },
    {
      condition: 'Poor Condition',
      range: `$${modelData.averageValue.poor.toLocaleString()}`,
      description: 'Vehicle with major mechanical issues or damage, may not be running.'
    }
  ];

  return (
    <main className="min-h-screen">
      <MakeModelHero
        make="Volkswagen"
        model="Golf"
        years={modelData.yearRange}
      />
      
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <CommonIssues
            make="Volkswagen"
            model="Golf"
            issues={volkswagenData.commonIssues.golf}
          />
          <PriceRanges ranges={priceRanges} />
        </div>
      </div>

      <QuoteForm />
    </main>
  );
}