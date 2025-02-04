import { MakeModelHero, CommonIssues, PriceRanges } from '@/components/cars';
import { kiaData } from '@/data/cars/kia';
import { QuoteForm } from '@/components';

export default function KiaCarnivalPage() {
  const modelData = kiaData.models.carnival;

  return (
    <main className="min-h-screen">
      <MakeModelHero
        make="Kia"
        model="Carnival"
        years={modelData.yearRange}
      />

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <CommonIssues
            make="Kia"
            model="Carnival"
            issues={modelData.commonIssues}
          />
          <PriceRanges ranges={modelData.priceRanges} />
        </div>
      </div>

      <QuoteForm />
    </main>
  );
}