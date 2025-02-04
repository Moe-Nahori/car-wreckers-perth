import MakeModelHero from '@/components/cars/MakeModelHero';
import CommonIssues from '@/components/cars/CommonIssues';
import PriceEstimator from '@/components/cars/PriceEstimator';
import { QuoteForm } from '@/components';
import { subaruData } from '@/data/cars/subaru';

const { commonIssues, priceRanges } = subaruData.models.forester;

export default function SubaruForesterPage() {
  return (
    <main>
      <MakeModelHero
        make="Subaru"
        model="Forester"
        years="1997-2024"
      />
      
      <CommonIssues
        make="Subaru"
        model="Forester"
        issues={commonIssues}
      />

      <PriceEstimator
        make="Subaru"
        model="Forester"
        priceRanges={priceRanges}
      />

      <QuoteForm />
    </main>
  );
}