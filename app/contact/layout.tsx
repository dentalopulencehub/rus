import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | RUS Chartered Accountants Birmingham',
  description: 'Get in touch with RUS Chartered Accountants. Call 0121 777 1200 or visit us at 1190A-1192 Stratford Road, Hall Green, Birmingham B28 8AB. Free parking available.',
  keywords: [
    'contact RUS accountants',
    'Birmingham accountants contact',
    'chartered accountants Birmingham contact',
    'RUS Chartered Accountants address',
    'accountants Hall Green Birmingham',
    'contact accountant Birmingham',
    'RUS accountants phone number',
    'Birmingham accounting firm contact',
  ],
  openGraph: {
    title: 'Contact Us | RUS Chartered Accountants',
    description: 'Get in touch with RUS Chartered Accountants. Call 0121 777 1200 or visit us in Hall Green, Birmingham. Free parking available.',
    type: 'website',
  },
  alternates: {
    canonical: 'https://rus.co.uk/contact',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
