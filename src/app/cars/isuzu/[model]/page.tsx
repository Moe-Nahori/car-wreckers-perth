import { ModelDetails } from '@/components/cars/ModelDetails';
import { isuzuData } from '@/data/cars/isuzu';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

// Define valid Isuzu models type
type IsuzuModel = keyof typeof isuzuData.models;

interface Props {
  params: {
    model: IsuzuModel;
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const modelData = isuzuData.models[params.model];
  
  if (!modelData) {
    return {
      title: 'Model Not Found',
      description: 'The requested Isuzu model could not be found.'
    };
  }

  return {
    title: `Isuzu ${modelData.name} Wreckers Perth | Cash For ${modelData.name}s`,
    description: `Get top cash for your Isuzu ${modelData.name} in Perth. We buy all ${modelData.name} models (${modelData.yearRange}) in any condition. Free quotes and same-day pickup available!`,
  };
}

export default function IsuzuModelPage({ params }: Props) {
  const modelData = isuzuData.models[params.model];

  if (!modelData) {
    notFound();
  }

  return (
    <ModelDetails
      make="Isuzu"
      model={modelData.name}
      yearRange={modelData.yearRange}
      popularParts={modelData.popularParts}
      commonIssues={modelData.commonIssues}
    />
  );
}

// Generate static params for all Isuzu models
export function generateStaticParams() {
  return Object.keys(isuzuData.models).map((model) => ({
    model,
  }));
}