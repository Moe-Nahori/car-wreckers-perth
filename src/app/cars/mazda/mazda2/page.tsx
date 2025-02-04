import MakeModelHero from '@/components/cars/MakeModelHero';
import CommonIssues from '@/components/cars/CommonIssues';
import PriceEstimator from '@/components/cars/PriceEstimator';
import { QuoteForm } from '@/components';
import { mazdaData } from '@/data/cars/mazda';

const { commonIssues, priceRanges } = mazdaData.models.mazda2;

export default function Mazda2Page() {
  return (
    <main>
      <MakeModelHero
        make="Mazda"
        model="Mazda2"
        years="2002-2024"
      />
      
      <CommonIssues
        make="Mazda"
        model="Mazda2"
        issues={commonIssues}
      />

      <PriceEstimator
        make="Mazda"
        model="Mazda2"
        priceRanges={priceRanges}
      />

      <QuoteForm />
    </main>
  );
}