'use client';

import { ReactNode } from 'react';
import { useAnalytics } from '@/hooks/useAnalytics';

interface PhoneNumberProps {
  number: string;
  location?: string;
  className?: string;
  children?: ReactNode;
}

export default function PhoneNumber({ 
  number, 
  location, 
  className,
  children 
}: PhoneNumberProps) {
  const analytics = useAnalytics();

  const handlePhoneClick = () => {
    analytics.trackPhoneClick(number, location);
  };

  return (
    <a
      href={`tel:${number.replace(/\s/g, '')}`}
      onClick={handlePhoneClick}
      className={className}
      aria-label={`Call ${number}`}
    >
      {location === 'sticky-mobile' ? children : number}
    </a>
  );
}