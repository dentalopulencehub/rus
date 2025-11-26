import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Industry Sectors We Serve Birmingham | Healthcare, Retail, Property & More | RUS',
  description: 'Specialist accountants for 12+ industry sectors including healthcare, retail, property, construction, hospitality, charities, solicitors, contractors and more across Birmingham and the UK.',
  keywords: [
    'sector specialist accountants Birmingham',
    'industry accountants UK',
    'healthcare accountants Birmingham',
    'retail accountants Birmingham',
    'property accountants Birmingham',
    'construction accountants Birmingham',
    'hospitality accountants Birmingham',
    'specialist sector accountancy',
  ],
  openGraph: {
    title: 'Industry Sectors We Serve | RUS Chartered Accountants',
    description: 'Specialist accounting services for healthcare, retail, property, construction and more.',
    type: 'website',
  },
  alternates: {
    canonical: 'https://rus.co.uk/sectors',
  },
};

export default function SectorsPage() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center">
      <h1 className="text-2xl">Sectors Page Placeholder</h1>
    </div>
  );
}
