import MakeModelHero from '@/components/cars/MakeModelHero';
import CommonIssues from '@/components/cars/CommonIssues';
import PriceEstimator from '@/components/cars/PriceEstimator';
import { QuoteForm } from '@/components';
import { mazdaData } from '@/data/cars/mazda';

const { commonIssues, priceRanges } = mazdaData.models.cx3;

export default function MazdaCX3Page() {
  return (
    <main>
      <MakeModelHero
        make="Mazda"
        model="CX-3"
        years="2015-2024"
      />
      
      <CommonIssues
        make="Mazda"
        model="CX-3"
        issues={commonIssues}
      />

      <PriceEstimator
        make="Mazda"
        model="CX-3"
        priceRanges={priceRanges}
      />

      <QuoteForm />
    </main>
  );
}