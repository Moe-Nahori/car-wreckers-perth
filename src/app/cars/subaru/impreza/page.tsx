import MakeModelHero from '@/components/cars/MakeModelHero';
import CommonIssues from '@/components/cars/CommonIssues';
import PriceEstimator from '@/components/cars/PriceEstimator';
import { QuoteForm } from '@/components';
import { subaruData } from '@/data/cars/subaru';

const { commonIssues, priceRanges } = subaruData.models.impreza;

export default function SubaruImprezaPage() {
  return (
    <main>
      <MakeModelHero
        make="Subaru"
        model="Impreza"
        years="1992-2024"
      />
      
      <CommonIssues
        make="Subaru"
        model="Impreza"
        issues={commonIssues}
      />

      <PriceEstimator
        make="Subaru"
        model="Impreza"
        priceRanges={priceRanges}
      />

      <QuoteForm />
    </main>
  );
}