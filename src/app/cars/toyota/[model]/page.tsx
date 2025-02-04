import { notFound } from 'next/navigation';
import { toyotaData } from '@/data/cars/toyota';
import MakeModelHero from '@/components/cars/MakeModelHero';
import CommonIssues from '@/components/cars/CommonIssues';
import PriceEstimator from '@/components/cars/PriceEstimator';
import { QuoteForm } from '@/components';
import { ToyotaModelType } from '@/data/types';

interface Props {
  params: {
    model: string;
  };
}

export default function ToyotaModelPage({ params }: Props) {
  const modelKey = params.model as ToyotaModelType;
  const modelData = toyotaData.models[modelKey];
  
  // If model doesn't exist in our data, show 404
  if (!modelData) {
    notFound();
  }

  return (
    <main>
      <MakeModelHero
        make="Toyota"
        model={modelData.name}
        years={modelData.yearRange}
      />
      
      <CommonIssues
        make="Toyota"
        model={modelData.name}
        issues={modelData.commonIssues}
      />

      <PriceEstimator
        make="Toyota"
        model={modelData.name}
        priceRanges={modelData.priceRanges}
      />

      <QuoteForm />
    </main>
  );
}

// Generate static params for all Toyota models
export function generateStaticParams() {
  return Object.keys(toyotaData.models).map((model) => ({
    model,
  }));
}