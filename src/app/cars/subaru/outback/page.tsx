import MakeModelHero from '@/components/cars/MakeModelHero';
import CommonIssues from '@/components/cars/CommonIssues';
import PriceEstimator from '@/components/cars/PriceEstimator';
import { QuoteForm } from '@/components';
import { subaruData } from '@/data/cars/subaru';

const { commonIssues, priceRanges } = subaruData.models.outback;

export default function SubaruOutbackPage() {
  return (
    <main>
      <MakeModelHero
        make="Subaru"
        model="Outback"
        years="1994-2024"
      />
      
      <CommonIssues
        make="Subaru"
        model="Outback"
        issues={commonIssues}
      />

      <PriceEstimator
        make="Subaru"
        model="Outback"
        priceRanges={priceRanges}
      />

      <QuoteForm />
    </main>
  );
}