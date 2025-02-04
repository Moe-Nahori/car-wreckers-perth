import { notFound } from 'next/navigation';
import { Metadata } from "next";
import { jeepData } from '@/data/cars/jeep';
import MakeModelHero from '@/components/cars/MakeModelHero';
import CommonIssues from '@/components/cars/CommonIssues';
import PriceEstimator from '@/components/cars/PriceEstimator';
import { QuoteForm } from '@/components';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";

// Define valid Jeep models type
type JeepModel = keyof typeof jeepData.models;

interface Props {
  params: {
    model: JeepModel;
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const model = jeepData.models[params.model];
  
  if (!model) {
    return {
      title: 'Model Not Found',
      description: 'The requested Jeep model could not be found.'
    };
  }

  return {
    title: `Jeep ${model.name} Wreckers Perth | Cash For ${model.name}s`,
    description: `Get top cash for your Jeep ${model.name} in Perth. We buy all ${model.name} models (${model.yearRange}) in any condition. Free quotes and same-day pickup available!`,
  };
}

export default function JeepModelPage({ params }: Props) {
  const model = jeepData.models[params.model];

  if (!model) {
    notFound();
  }

  return (
    <main>
      <MakeModelHero 
        make="Jeep"
        model={model.name}
        years={model.yearRange}
      />

      <div className="container mx-auto px-4 py-8">
        <Alert className="max-w-4xl mx-auto">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Important Information About Your {model.name}</AlertTitle>
          <AlertDescription>
            We buy all Jeep {model.name} models regardless of their condition. Free quote and same-day pickup available across Perth.
          </AlertDescription>
        </Alert>
      </div>
      
      <CommonIssues
        make="Jeep"
        model={model.name}
        issues={model.commonIssues.map(issue => ({
          title: issue,
          description: issue
        }))}
      />

      <QuoteForm />
    </main>
  );
}

// Generate static params for all Jeep models
export function generateStaticParams() {
  return Object.keys(jeepData.models).map((model) => ({
    model,
  }));
}