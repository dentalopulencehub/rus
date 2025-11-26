import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Accountancy Services Birmingham | Tax, Audit, Payroll & Advisory | RUS',
  description: 'Comprehensive accountancy services from Birmingham chartered accountants. Taxation, audit & assurance, payroll, bookkeeping, business advisory, company formation and secretarial services.',
  keywords: [
    'accountancy services Birmingham',
    'accounting services UK',
    'tax services Birmingham',
    'audit services Birmingham',
    'payroll services Birmingham',
    'business advisory Birmingham',
    'chartered accountant services',
    'full service accountants',
  ],
  openGraph: {
    title: 'Our Services | RUS Chartered Accountants Birmingham',
    description: 'Comprehensive accounting, tax, audit and advisory services for UK businesses.',
    type: 'website',
  },
  alternates: {
    canonical: 'https://rus.co.uk/services',
  },
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center">
      <h1 className="text-2xl">Services Page Placeholder</h1>
    </div>
  );
}
