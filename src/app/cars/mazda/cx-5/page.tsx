import MakeModelHero from '@/components/cars/MakeModelHero';
import CommonIssues from '@/components/cars/CommonIssues';
import PriceEstimator from '@/components/cars/PriceEstimator';
import { QuoteForm } from '@/components';
import { mazdaData } from '@/data/cars/mazda';

const { commonIssues, priceRanges } = mazdaData.models.cx5;

export default function MazdaCX5Page() {
  return (
    <main>
      <MakeModelHero
        make="Mazda"
        model="CX-5"
        years="2012-2024"
      />
      
      <CommonIssues
        make="Mazda"
        model="CX-5"
        issues={commonIssues}
      />

      <PriceEstimator
        make="Mazda"
        model="CX-5"
        priceRanges={priceRanges}
      />

      <QuoteForm />
    </main>
  );
}