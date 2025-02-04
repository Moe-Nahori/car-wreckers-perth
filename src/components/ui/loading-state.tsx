import React from 'react';
import LoadingSpinner from './loading-spinner';
import ErrorMessage from './error-message';

interface LoadingStateProps {
  loading: boolean;
  error: string | null;
  children: React.ReactNode;
  retry?: () => void;
  loadingComponent?: React.ReactNode;
  errorComponent?: React.ReactNode;
}

const LoadingState: React.FC<LoadingStateProps> = ({
  loading,
  error,
  children,
  retry,
  loadingComponent,
  errorComponent,
}) => {
  if (loading) {
    return loadingComponent || <LoadingSpinner size="lg" className="my-8" />;
  }

  if (error) {
    return errorComponent || <ErrorMessage message={error} retry={retry} className="my-8" />;
  }

  return <>{children}</>;
};

export default LoadingState;