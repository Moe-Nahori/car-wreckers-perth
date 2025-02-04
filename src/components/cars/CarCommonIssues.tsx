'use client';

interface CarCommonIssuesProps {
  issues: string[];
}

export function CarCommonIssues({ issues }: CarCommonIssuesProps) {
  return (
    <div className="bg-white py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Common Issues</h2>
        <div className="bg-gray-50 p-6 rounded-lg">
          <ul className="space-y-4">
            {issues.map((issue, index) => (
              <li key={index} className="flex items-start">
                <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3" />
                <span>{issue}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}