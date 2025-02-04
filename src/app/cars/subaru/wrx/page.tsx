import MakeModelHero from '@/components/cars/MakeModelHero';
import CommonIssues from '@/components/cars/CommonIssues';
import PriceEstimator from '@/components/cars/PriceEstimator';
import { QuoteForm } from '@/components';
import { subaruData } from '@/data/cars/subaru';

const { commonIssues, priceRanges } = subaruData.models.wrx;

export default function SubaruWRXPage() {
  return (
    <main>
      <MakeModelHero
        make="Subaru"
        model="WRX"
        years="1994-2024"
      />
      
      <CommonIssues
        make="Subaru"
        model="WRX"
        issues={commonIssues}
      />

      <PriceEstimator
        make="Subaru"
        model="WRX"
        priceRanges={priceRanges}
      />

      <QuoteForm />
    </main>
  );
}