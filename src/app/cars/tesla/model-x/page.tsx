import { ModelHero, CommonIssues, HighValueParts, CompatibleModels } from '@/components/cars';
import { teslaData } from '@/data/cars/tesla';
import { QuoteForm } from '@/components';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tesla Model X Wreckers Perth | Cash for Model X | Parts & Service',
  description: 'Expert Tesla Model X wreckers in Perth. Top dollar paid for all Model X vehicles. Quality used parts and components available. Free car removal service.',
};

export default function TeslaModelXPage() {
  const modelData = teslaData.models['model-x'];
  const commonIssues = teslaData.commonIssues['model-x'] || [];

  return (
    <main>
      <ModelHero
        make="Tesla"
        model="Model X"
        yearRange={modelData.yearRange}
        popularParts={modelData.popularParts}
      />

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <CommonIssues issues={commonIssues} make="Tesla" model="Model X" />
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