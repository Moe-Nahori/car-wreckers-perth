'use client';

import Script from 'next/script';
import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import * as gtag from '@/lib/gtag';

export default function GoogleAnalytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [hasConsent, setHasConsent] = useState<boolean | null>(null);

  useEffect(() => {
    // Check for consent
    const consent = localStorage.getItem('cookieConsent');
    setHasConsent(consent === 'true');
  }, []);

  useEffect(() => {
    if (pathname && hasConsent) {
      gtag.pageview(pathname + searchParams.toString());
    }
  }, [pathname, searchParams, hasConsent]);

  // Don't render analytics without consent
  if (!hasConsent) {
    return null;
  }

  if (process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID == null) {
    return null;
  }

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  );
}