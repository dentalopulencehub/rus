import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tax & Accounting Insights Birmingham | News & Articles | RUS',
  description: 'Latest accounting news, tax updates, business insights and expert articles from RUS Chartered Accountants Birmingham. Stay informed on UK tax changes, HMRC updates and accounting best practices.',
  keywords: [
    'accounting news Birmingham',
    'tax updates UK',
    'business insights Birmingham',
    'HMRC updates',
    'accounting articles',
    'tax planning news',
    'Birmingham accountant blog',
  ],
  openGraph: {
    title: 'Insights & News | RUS Chartered Accountants',
    description: 'Expert insights on tax, accounting and business from Birmingham chartered accountants.',
    type: 'website',
  },
  alternates: {
    canonical: 'https://rus.co.uk/insights',
  },
};

export default function InsightsPage() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center">
      <h1 className="text-2xl">Insights Page Placeholder</h1>
    </div>
  );
}
