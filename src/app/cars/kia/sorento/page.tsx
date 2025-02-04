import { ModelHero, CommonIssues, PriceRanges } from '@/components/cars';
import { kiaData } from '@/data/cars/kia';
import { QuoteForm } from '@/components';

export default function KiaSorentoPage() {
  const modelData = kiaData.models.sorento;

  return (
    <main className="min-h-screen">
      <ModelHero
        make="Kia"
        model="Sorento"
        yearRange={modelData.yearRange}
        popularParts={modelData.popularParts}
      />

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <CommonIssues
            make="Kia"
            model="Sorento"
            issues={modelData.commonIssues}
          />
          <PriceRanges ranges={modelData.priceRanges} />
        </div>
      </div>

      <QuoteForm />
    </main>
  );
}