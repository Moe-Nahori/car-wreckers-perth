import React from 'react';
import { AlertTriangle } from 'lucide-react';

interface ErrorMessageProps {
  message?: string | null;
  className?: string;
  retry?: () => void;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({
  message = 'Something went wrong. Please try again.',
  className = '',
  retry,
}) => {
  return (
    <div className={`flex flex-col items-center justify-center p-4 text-center ${className}`}>
      <AlertTriangle className="w-12 h-12 text-red-500 mb-4" />
      <p className="text-lg font-semibold text-red-500 mb-2">{message}</p>
      {retry && (
        <button
          onClick={retry}
          className="mt-4 px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
        >
          Try Again
        </button>
      )}
    </div>
  );
};

export default ErrorMessage;