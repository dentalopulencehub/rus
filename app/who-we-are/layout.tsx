import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Who We Are | About Us | RUS Chartered Accountants Birmingham',
  description: 'Established in 1995, RUS Chartered Accountants are a trusted team of Chartered Accountants, Registered Auditors and Tax Advisors based in Birmingham with over 30 years of experience.',
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
    title: 'Who We Are | About Us | RUS Chartered Accountants',
    description: 'Established in 1995, RUS Chartered Accountants are a trusted team of Chartered Accountants, Registered Auditors and Tax Advisors based in Birmingham.',
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
