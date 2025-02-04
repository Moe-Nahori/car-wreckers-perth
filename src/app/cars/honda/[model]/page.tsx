import { ModelDetails } from '@/components/cars/ModelDetails';
import { hondaData } from '@/data/cars/honda';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

// Define valid Honda models type
type HondaModel = keyof typeof hondaData.models;

interface Props {
  params: {
    model: HondaModel;
  };
}

// Generate metadata for the page
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const modelData = hondaData.models[params.model];
  
  if (!modelData) {
    return {
      title: 'Model Not Found | Honda Wreckers Perth',
      description: 'The requested Honda model could not be found.'
    };
  }

  return {
    title: `Honda ${modelData.name} Wreckers Perth | Cash for ${modelData.name}`,
    description: `Expert Honda ${modelData.name} wreckers in Perth. Top dollar paid for all ${modelData.name} models. Quality used parts and components available. Free car removal service.`
  };
}

export default function HondaModelPage({ params }: Props) {
  const modelData = hondaData.models[params.model];

  if (!modelData) {
    notFound();
  }

  return (
    <ModelDetails
      make="Honda"
      model={modelData.name}
      yearRange={modelData.yearRange}
      popularParts={modelData.popularParts}
      commonIssues={modelData.commonIssues}
    />
  );
}

// Generate static params for all Honda models
export function generateStaticParams() {
  return Object.keys(hondaData.models).map((model) => ({
    model,
  }));
}