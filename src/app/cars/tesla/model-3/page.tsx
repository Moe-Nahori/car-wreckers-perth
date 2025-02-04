import { ModelHero, CommonIssues, HighValueParts, CompatibleModels } from '@/components/cars';
import { teslaData } from '@/data/cars/tesla';
import { QuoteForm } from '@/components';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tesla Model 3 Wreckers Perth | Cash for Model 3 | Parts & Service',
  description: 'Expert Tesla Model 3 wreckers in Perth. Top dollar paid for all Model 3 vehicles. Quality used parts and components available. Free car removal service.',
};

export default function TeslaModel3Page() {
  const modelData = teslaData.models['model-3'];
  const commonIssues = teslaData.commonIssues['model-3'] || [];

  return (
    <main>
      <ModelHero
        make="Tesla"
        model="Model 3"
        yearRange={modelData.yearRange}
        popularParts={modelData.popularParts}
      />

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <CommonIssues issues={commonIssues} make="Tesla" model="Model 3" />
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