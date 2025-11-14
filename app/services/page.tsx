import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Services | RUS Chartered Accountants',
  description: 'Comprehensive accountancy services including Taxation, Audit, Payroll, and Business Advisory.',
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center">
      <h1 className="text-2xl">Services Page Placeholder</h1>
    </div>
  );
}
