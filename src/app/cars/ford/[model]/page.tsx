import { notFound } from 'next/navigation';
import { Metadata } from "next";
import { fordData } from '@/data/cars/ford';
import MakeModelHero from '@/components/cars/MakeModelHero';
import CommonIssues from '@/components/cars/CommonIssues';
import PriceEstimator from '@/components/cars/PriceEstimator';
import { QuoteForm } from '@/components';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";

// Define valid Ford models type
type FordModel = keyof typeof fordData.models;

// Define alert content type
type AlertContent = {
  [K in FordModel]: string;
};

interface Props {
  params: {
    model: FordModel;
  };
}

const alertContent: AlertContent = {
  ranger: "Rangers hold their value well but can be expensive to repair when major components fail. We offer competitive prices even for high-mileage or damaged vehicles.",
  mustang: "Mustangs are highly valued in the used market. We offer top dollar for all variants including GT and EcoBoost models, even with mechanical issues.",
  territory: "Territories can develop expensive transmission and transfer case issues. We buy all models regardless of mechanical condition.",
  falcon: "Falcons are becoming increasingly collectible. We offer fair prices for all models from base models to high-performance variants.",
  focus: "Focus models can develop transmission issues, particularly 2011-2016 PowerShift models. We buy all variants regardless of transmission condition.",
  fiesta: "Fiestas with PowerShift transmission issues are common. We buy all models including those with transmission problems."
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const modelData = fordData.models[params.model];
  
  if (!modelData) {
    return {
      title: 'Model Not Found',
      description: 'The requested Ford model could not be found.'
    };
  }

  return {
    title: `Ford ${modelData.name} Wreckers Perth | Cash For ${modelData.name}s`,
    description: `Get top cash for your Ford ${modelData.name} in Perth. We buy all ${modelData.name} models (${modelData.yearRange}) in any condition. Free quotes and same-day pickup available!`,
  };
}

export default function FordModelPage({ params }: Props) {
  const modelData = fordData.models[params.model];
  
  // If model doesn't exist in our data, show 404
  if (!modelData) {
    notFound();
  }

  return (
    <main>
      <MakeModelHero
        make="Ford"
        model={modelData.name}
        years={modelData.yearRange}
      />

      <div className="container mx-auto px-4 py-8">
        <Alert className="max-w-4xl mx-auto">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Important Information About Your {modelData.name}</AlertTitle>
          <AlertDescription>
            {alertContent[params.model]}
          </AlertDescription>
        </Alert>
      </div>
      
      <CommonIssues
        make="Ford"
        model={modelData.name}
        issues={modelData.commonIssues}
      />

      <PriceEstimator
        make="Ford"
        model={modelData.name}
        priceRanges={modelData.priceRanges}
      />

      <QuoteForm />
    </main>
  );
}

// Generate static params for all Ford models
export function generateStaticParams() {
  return Object.keys(fordData.models).map((model) => ({
    model,
  }));
}