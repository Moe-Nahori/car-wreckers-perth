import { ModelHero, CommonIssues, HighValueParts, CompatibleModels } from '@/components/cars';
import { teslaData } from '@/data/cars/tesla';
import { QuoteForm } from '@/components';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tesla Model S Wreckers Perth | Cash for Model S | Parts & Service',
  description: 'Expert Tesla Model S wreckers in Perth. Top dollar paid for all Model S vehicles. Quality used parts and components available. Free car removal service.',
};

export default function TeslaModelSPage() {
  const modelData = teslaData.models['model-s'];
  const commonIssues = teslaData.commonIssues['model-s'] || [];

  return (
    <main>
      <ModelHero
        make="Tesla"
        model="Model S"
        yearRange={modelData.yearRange}
        popularParts={modelData.popularParts}
      />

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <CommonIssues issues={commonIssues} make="Tesla" model="Model S" />
          <HighValueParts parts={modelData.highValueParts} />
        </div>

        {modelData.compatibleModels && modelData.compatibleModels.length > 0 && (
          <div className="mt-12">
            <CompatibleModels models={modelData.compatibleModels} />
          </div>
        )}
      </div>

      <QuoteForm />
    </main>
  );
}