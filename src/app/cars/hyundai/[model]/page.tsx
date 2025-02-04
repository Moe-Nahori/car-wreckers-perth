import { notFound } from 'next/navigation';
import { Metadata } from "next";
import { hyundaiData } from '@/data/cars/hyundai';
import MakeModelHero from '@/components/cars/MakeModelHero';
import CommonIssues from '@/components/cars/CommonIssues';
import PriceEstimator from '@/components/cars/PriceEstimator';
import { QuoteForm } from '@/components';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";

// Define valid Hyundai models type
type HyundaiModel = keyof typeof hyundaiData.models;

interface Props {
  params: {
    model: HyundaiModel;
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const modelData = hyundaiData.models[params.model];
  
  if (!modelData) {
    return {
      title: 'Model Not Found',
      description: 'The requested Hyundai model could not be found.'
    };
  }

  return {
    title: `Hyundai ${modelData.name} Wreckers Perth | Cash For ${modelData.name}s`,
    description: `Get top cash for your Hyundai ${modelData.name} in Perth. We buy all ${modelData.name} models (${modelData.yearRange}) in any condition. Free quotes and same-day pickup available!`,
  };
}

export default function HyundaiModelPage({ params }: Props) {
  const modelData = hyundaiData.models[params.model];
  
  if (!modelData) {
    notFound();
  }

  return (
    <main>
      <MakeModelHero 
        make="Hyundai"
        model={modelData.name}
        years={modelData.yearRange}
      />

      <div className="container mx-auto px-4 py-8">
        <Alert className="max-w-4xl mx-auto">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Important Information About Your {modelData.name}</AlertTitle>
          <AlertDescription>
            We buy all Hyundai {modelData.name} models regardless of their condition. Free quote and same-day pickup available across Perth.
          </AlertDescription>
        </Alert>
      </div>
      
      <CommonIssues
        make="Hyundai"
        model={modelData.name}
        issues={modelData.commonIssues}
      />

      <PriceEstimator
        make="Hyundai"
        model={modelData.name}
        priceRanges={modelData.priceRanges}
      />

      <QuoteForm />
    </main>
  );
}

// Generate static params for all Hyundai models
export function generateStaticParams() {
  return Object.keys(hyundaiData.models).map((model) => ({
    model,
  }));
}