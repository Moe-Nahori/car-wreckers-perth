import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface Issue {
  title: string;
  description: string;
}

interface CommonIssuesProps {
  title: string;
  issues: Issue[];
}

export function CommonIssues({ title, issues }: CommonIssuesProps) {
  return (
    <Card className="my-8">
      <CardContent className="p-6">
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {issues.map((issue, index) => (
            <div key={index} className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-semibold mb-2">{issue.title}</h3>
              <p className="text-gray-600">{issue.description}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}