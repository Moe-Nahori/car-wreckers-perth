'use client';

import * as gtag from '@/lib/gtag';

export const useAnalytics = () => {
  const trackFormSubmission = (data: {
    formType: 'quote' | 'contact' | 'testimonial';
    carMake?: string;
    carModel?: string;
    location?: string;
  }) => {
    gtag.trackFormSubmission(data);
  };

  const trackPhoneClick = (phoneNumber: string, location?: string) => {
    gtag.trackPhoneClick(phoneNumber, location);
  };

  const trackLocationVisit = (location: string) => {
    gtag.trackLocationVisit(location);
  };

  const trackCarModelVisit = (make: string, model: string) => {
    gtag.trackCarModelVisit(make, model);
  };

  const trackServiceVisit = (service: string) => {
    gtag.trackServiceVisit(service);
  };

  const trackQuoteRequest = (carDetails: {
    make: string;
    model: string;
    year?: string;
    condition?: string;
  }) => {
    gtag.trackQuoteRequest(carDetails);
  };

  return {
    trackFormSubmission,
    trackPhoneClick,
    trackLocationVisit,
    trackCarModelVisit,
    trackServiceVisit,
    trackQuoteRequest,
  };
};