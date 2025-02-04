'use client';

import React from 'react';
import { Card } from '@/components/ui/card';

interface Issue {
  title: string;
  description: string;
}

interface CommonIssuesProps {
  make?: string;
  model?: string;
  issues: Issue[];
}

const CommonIssues = ({ issues, make, model }: CommonIssuesProps) => {
  if (!Array.isArray(issues) || issues.length === 0) {
    return null;
  }

  return (
    <Card className="p-6">
      <h2 className="text-2xl font-bold mb-6">
        {make && model ? `Common Issues with ${make} ${model}` : 'Common Issues'}
      </h2>
      <div className="space-y-4">
        {issues.map((issue, index) => (
          <div key={index} className="border-b last:border-b-0 pb-4 last:pb-0">
            <h3 className="text-lg font-semibold mb-2">{issue.title}</h3>
            <p className="text-gray-600">{issue.description}</p>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default CommonIssues;