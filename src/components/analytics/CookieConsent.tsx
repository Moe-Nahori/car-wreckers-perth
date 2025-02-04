'use client';

import { useEffect, useState } from 'react';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';

export default function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false);
  const [analyticsEnabled, setAnalyticsEnabled] = useState<boolean | null>(null);

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem('cookieConsent');
    if (consent === null) {
      setShowConsent(true);
    } else {
      setAnalyticsEnabled(consent === 'true');
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'true');
    setAnalyticsEnabled(true);
    setShowConsent(false);
    window.location.reload(); // Reload to enable analytics
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'false');
    setAnalyticsEnabled(false);
    setShowConsent(false);
  };

  return (
    <AlertDialog open={showConsent}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Cookie Consent</AlertDialogTitle>
          <AlertDialogDescription>
            We use cookies and similar technologies to help personalize content, improve your experience, and analyze our traffic. We also share information about your use of our site with our analytics partners. By clicking "Accept All", you consent to the use of these cookies.
            <br /><br />
            You can learn more about how we use your data in our{' '}
            <a href="/privacy-policy" className="underline">
              Privacy Policy
            </a>
            .
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={handleDecline}>
            Decline
          </AlertDialogCancel>
          <AlertDialogAction onClick={handleAccept}>
            Accept All
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}