import { notFound } from 'next/navigation';
import { Metadata } from "next";
import { kiaData } from '@/data/cars/kia';
import MakeModelHero from '@/components/cars/MakeModelHero';
import CommonIssues from '@/components/cars/CommonIssues';
import PriceEstimator from '@/components/cars/PriceEstimator';
import { QuoteForm } from '@/components';

// Define valid Kia models type
type KiaModel = keyof typeof kiaData.models;

interface Props {
  params: {
    model: KiaModel;
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const modelData = kiaData.models[params.model];
  
  if (!modelData) {
    return {
      title: 'Model Not Found',
      description: 'The requested Kia model could not be found.'
    };
  }

  return {
    title: `Kia ${modelData.name} Wreckers Perth | Cash For ${modelData.name}s`,
    description: `Get top cash for your Kia ${modelData.name} in Perth. We buy all ${modelData.name} models (${modelData.yearRange}) in any condition. Free quotes and same-day pickup available!`,
  };
}

export default function KiaModelPage({ params }: Props) {
  const modelData = kiaData.models[params.model];

  if (!modelData) {
    notFound();
  }

  return (
    <main>
      <MakeModelHero 
        make="Kia"
        model={modelData.name}
        years={modelData.yearRange}
      />
      
      <CommonIssues
        make="Kia"
        model={modelData.name}
        issues={modelData.commonIssues}
      />

      <PriceEstimator
        make="Kia"
        model={modelData.name}
        priceRanges={modelData.priceRanges}
      />

      <QuoteForm />
    </main>
  );
}

// Generate static params for all Kia models
export function generateStaticParams() {
  return Object.keys(kiaData.models).map((model) => ({
    model,
  }));
}