import { ModelHero, CommonIssues, HighValueParts, CompatibleModels } from '@/components/cars';
import { teslaData } from '@/data/cars/tesla';
import { QuoteForm } from '@/components';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tesla Model Y Wreckers Perth | Cash for Model Y | Parts & Service',
  description: 'Expert Tesla Model Y wreckers in Perth. Top dollar paid for all Model Y vehicles. Quality used parts and components available. Free car removal service.',
};

export default function TeslaModelYPage() {
  const modelData = teslaData.models['model-y'];
  const commonIssues = teslaData.commonIssues['model-y'] || [];

  return (
    <main>
      <ModelHero
        make="Tesla"
        model="Model Y"
        yearRange={modelData.yearRange}
        popularParts={modelData.popularParts}
      />

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <CommonIssues issues={commonIssues} make="Tesla" model="Model Y" />
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