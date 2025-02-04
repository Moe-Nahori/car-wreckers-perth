import MakeModelHero from '@/components/cars/MakeModelHero';
import CommonIssues from '@/components/cars/CommonIssues';
import PriceEstimator from '@/components/cars/PriceEstimator';
import { QuoteForm } from '@/components';
import { holdenData } from '@/data/cars/holden';

const { commonIssues, priceRanges } = holdenData.models.commodore;

export default function HoldenCommodorePage() {
  return (
    <main>
      <MakeModelHero
        make="Holden"
        model="Commodore"
        years="1978-2020"
      />
      
      <CommonIssues
        make="Holden"
        model="Commodore"
        issues={commonIssues}
      />

      <PriceEstimator
        make="Holden"
        model="Commodore"
        priceRanges={priceRanges}
      />

      <QuoteForm />
    </main>
  );
}