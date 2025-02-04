interface Issue {
  title: string;
  description: string;
  affectedYears: string[];
  repairDifficulty: 1 | 2 | 3 | 4 | 5;
  estimatedRepairCost: number;
}

interface CommonIssuesProps {
  issues: Issue[];
  modelYear?: string;
  make: string;
  model: string;
}

export function CommonIssues({ issues, modelYear, make, model }: CommonIssuesProps) {
  return (
    <div className="bg-white py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Common Issues with {make} {model}</h2>
        <div className="grid gap-6">
          {issues.map((issue, index) => (
            <div key={index} className="border rounded-lg p-6 hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-3">{issue.title}</h3>
              <p className="text-gray-600 mb-4">{issue.description}</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <span className="text-sm text-gray-500">Affected Years:</span>
                  <div>{issue.affectedYears.join(', ')}</div>
                </div>
                <div>
                  <span className="text-sm text-gray-500">Repair Difficulty:</span>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <span
                        key={i}
                        className={`w-4 h-4 rounded-full mr-1 ${
                          i < issue.repairDifficulty ? 'bg-red-500' : 'bg-gray-200'
                        }`}
                      />
                    ))}
                  </div>
                </div>
                <div>
                  <span className="text-sm text-gray-500">Estimated Repair Cost:</span>
                  <div>${issue.estimatedRepairCost.toLocaleString()}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}