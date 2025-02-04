import { ModelDetails } from '@/components/cars/ModelDetails';
import { suzukiData } from '@/data/cars/suzuki';
import { notFound } from 'next/navigation';
import { SuzukiModelType } from '@/data/types';

export default function SuzukiModelPage({ params }: { params: { model: string } }) {
  const modelKey = params.model as SuzukiModelType;
  const modelData = suzukiData.models[modelKey];

  if (!modelData) {
    notFound();
  }

  return (
    <ModelDetails
      make="Suzuki"
      model={modelData.name}
      yearRange={modelData.yearRange}
      popularParts={modelData.popularParts}
      commonIssues={modelData.commonIssues}
    />
  );
}