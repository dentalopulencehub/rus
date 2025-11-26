import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Who We Are | Meet Our Team | RUS Chartered Accountants Birmingham',
  description: 'Meet the team at RUS Chartered Accountants. Founded in 1995 by Raza Samar FCA, we bring over 30 years of expertise serving businesses across Birmingham and the UK.',
  keywords: [
    'RUS Chartered Accountants team',
    'chartered accountants Birmingham',
    'Raza Samar FCA',
    'accounting firm Birmingham',
    'ICAEW Birmingham',
    'about RUS accountants',
    'Birmingham accounting team',
    'chartered accountant founder',
  ],
  openGraph: {
    title: 'Who We Are | Meet Our Team | RUS Chartered Accountants',
    description: 'Meet the qualified team at RUS Chartered Accountants, serving Birmingham since 1995.',
    type: 'website',
  },
  alternates: {
    canonical: 'https://rus.co.uk/who-we-are',
  },
};

export default function WhoWeAreLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
