'use client';

import React from 'react';
import { useAsync } from '@/hooks/use-async';
import LoadingState from '@/components/ui/loading-state';

// Simulated API call
const fetchData = async () => {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 2000));
  // Randomly succeed or fail
  if (Math.random() > 0.5) {
    throw new Error('Failed to fetch data');
  }
  return { message: 'Data loaded successfully' };
};

export default function LoadingExample() {
  const { data, loading, error, execute } = useAsync(fetchData);

  return (
    <div className="p-4">
      <button
        onClick={() => execute()}
        className="mb-4 px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
      >
        Load Data
      </button>

      <LoadingState
        loading={loading}
        error={error}
        retry={() => execute()}
      >
        {data ? (
          <div className="p-4 bg-green-100 rounded-md">
            {data.message}
          </div>
        ) : (
          <div className="p-4 bg-gray-100 rounded-md">
            Click the button to load data
          </div>
        )}
      </LoadingState>
    </div>
  );
}