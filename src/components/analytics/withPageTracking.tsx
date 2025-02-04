'use client';

import { useEffect } from 'react';
import { useAnalytics } from '@/hooks/useAnalytics';

type PageType = 'location' | 'car' | 'service';

export const withPageTracking = (
  WrappedComponent: React.ComponentType<any>,
  pageType: PageType,
  pageData: {
    location?: string;
    make?: string;
    model?: string;
    service?: string;
  }
) => {
  return function TrackingComponent(props: any) {
    const analytics = useAnalytics();

    useEffect(() => {
      switch (pageType) {
        case 'location':
          if (pageData.location) {
            analytics.trackLocationVisit(pageData.location);
          }
          break;
        case 'car':
          if (pageData.make && pageData.model) {
            analytics.trackCarModelVisit(pageData.make, pageData.model);
          }
          break;
        case 'service':
          if (pageData.service) {
            analytics.trackServiceVisit(pageData.service);
          }
          break;
      }
    }, []);

    return <WrappedComponent {...props} />;
  };
};