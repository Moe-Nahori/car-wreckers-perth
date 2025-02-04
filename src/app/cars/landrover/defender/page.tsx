import { ModelDetails } from '@/components/cars/ModelDetails';
import { landroverData } from '@/data/cars/landrover';
import { QuoteForm } from '@/components';

export default function DefenderPage() {
  const modelData = landroverData.models.defender;
  
  // Convert common issues to array of strings
  const commonIssuesStrings = modelData.commonIssues.map(issue => 
    `${issue.title}: ${issue.description}`
  );

  return (
    <main>
      <ModelDetails
        make="Land Rover"
        model={modelData.name}
        yearRange={modelData.yearRange}
        popularParts={modelData.popularParts}
        commonIssues={commonIssuesStrings}
      />
      <QuoteForm />
    </main>
  );
}