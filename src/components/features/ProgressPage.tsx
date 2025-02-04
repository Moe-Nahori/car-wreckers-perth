"use client";

import { Progress } from './Progress';

export function ProgressPage() {
  return (
    <main className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold text-center mb-2">Project Progress</h1>
      <p className="text-gray-600 text-center mb-8">
        Track the development progress of each feature and phase
      </p>
      <Progress />
    </main>
  );
}