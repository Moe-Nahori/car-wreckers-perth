import MakeModelHero from '@/components/cars/MakeModelHero';
import CommonIssues from '@/components/cars/CommonIssues';
import PriceEstimator from '@/components/cars/PriceEstimator';
import { QuoteForm } from '@/components';
import { mazdaData } from '@/data/cars/mazda';

const { commonIssues, priceRanges } = mazdaData.models.bt50;

export default function MazdaBT50Page() {
  return (
    <main>
      <MakeModelHero
        make="Mazda"
        model="BT-50"
        years="2006-2024"
      />
      
      <CommonIssues
        make="Mazda"
        model="BT-50"
        issues={commonIssues}
      />

      <PriceEstimator
        make="Mazda"
        model="BT-50"
        priceRanges={priceRanges}
      />

      <QuoteForm />
    </main>
  );
}