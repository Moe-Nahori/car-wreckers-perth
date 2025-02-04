import MakeModelHero from '@/components/cars/MakeModelHero';
import CommonIssues from '@/components/cars/CommonIssues';
import PriceEstimator from '@/components/cars/PriceEstimator';
import { QuoteForm } from '@/components';
import { subaruData } from '@/data/cars/subaru';

const { commonIssues, priceRanges } = subaruData.models.liberty;

export default function SubaruLibertyPage() {
  return (
    <main>
      <MakeModelHero
        make="Subaru"
        model="Liberty"
        years="1989-2024"
      />
      
      <CommonIssues
        make="Subaru"
        model="Liberty"
        issues={commonIssues}
      />

      <PriceEstimator
        make="Subaru"
        model="Liberty"
        priceRanges={priceRanges}
      />

      <QuoteForm />
    </main>
  );
}