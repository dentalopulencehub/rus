'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

/**
 * Tracks page views in Google Tag Manager for client-side navigation.
 * Pushes pageview events to dataLayer on route changes.
 */
export function GTMPageView() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (pathname) {
      // Initialize dataLayer if it doesn't exist
      window.dataLayer = window.dataLayer || [];

      // Push pageview event
      window.dataLayer.push({
        event: 'pageview',
        page: pathname,
        title: document.title,
      });
    }
  }, [pathname, searchParams]);

  return null;
}
