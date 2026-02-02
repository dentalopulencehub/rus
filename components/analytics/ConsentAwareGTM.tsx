'use client';

import { GoogleTagManager } from '@next/third-parties/google';
import { useEffect, useState } from 'react';

/**
 * GTM component that respects user cookie consent.
 * Only loads GTM after user has accepted cookies via CookieConsent component.
 */
export function ConsentAwareGTM() {
  const [hasConsent, setHasConsent] = useState(false);

  useEffect(() => {
    // Check if user has given consent
    const consent = localStorage.getItem('rus-cookie-consent');
    setHasConsent(consent === 'accepted');

    // Listen for consent changes (if consent is given after initial load)
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'rus-cookie-consent' && e.newValue === 'accepted') {
        setHasConsent(true);
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  if (!hasConsent) return null;

  return <GoogleTagManager gtmId="GTM-TRMH8HWT" />;
}
