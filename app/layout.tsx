import type { Metadata } from 'next';
import { Suspense } from 'react';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { BottomBar } from '@/components/layout/BottomBar';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { OrganizationSchema } from '@/components/seo/OrganizationSchema';
import { ContactFormProvider } from '@/components/contact/ContactFormContext';
import { ContactModal } from '@/components/contact/ContactModal';
import { CookieConsent } from '@/components/layout/CookieConsent';
import { ConsentAwareGTM } from '@/components/analytics/ConsentAwareGTM';
import { GTMPageView } from '@/components/analytics/GTMPageView';
import { Fira_Sans_Condensed, Inter } from 'next/font/google';

// Logo-matching font for headings (condensed, professional)
const firaSansCondensed = Fira_Sans_Condensed({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700'],
  variable: '--font-fira-sans-condensed',
  display: 'swap',
});

// Body text font (wider, more readable)
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'RUS Chartered Accountants | Birmingham',
  description: 'Reputable firm of Chartered Accountants, Registered Auditors and Tax Advisors based in Birmingham. Over 20 years serving the business community.',
  keywords: [
    'Chartered Accountants',
    'Birmingham',
    'Tax Advisors',
    'Registered Auditors',
    'Accountancy Services',
    'RUS Accountants',
  ],
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`overflow-x-hidden ${firaSansCondensed.variable} ${inter.variable}`}>
      <head>
        <link
          rel="preload"
          href="/fonts/frutiger-57cn.woff"
          as="font"
          type="font/woff"
          crossOrigin="anonymous"
        />
      </head>
      <ConsentAwareGTM />
      <body suppressHydrationWarning className="overflow-x-hidden font-sans antialiased">
        {/* GTM noscript fallback */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TRMH8HWT"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>

        <OrganizationSchema />
        <Suspense fallback={null}>
          <GTMPageView />
        </Suspense>
        <ContactFormProvider>
          <Header />
          <main className="pb-16 overflow-x-hidden">{children}</main>
          <Footer />
          <BottomBar />
          <ContactModal />
          <CookieConsent />
        </ContactFormProvider>
      </body>
    </html>
  );
}
