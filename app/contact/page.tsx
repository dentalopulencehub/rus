import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact RUS Chartered Accountants Birmingham | 0121 777 1200',
  description: 'Contact RUS Chartered Accountants in Birmingham. Call 0121 777 1200, email info@rus.co.uk or visit us at 1190A-1194 Stratford Road, Hall Green, Birmingham B28 8AB.',
  keywords: [
    'contact accountants Birmingham',
    'RUS Chartered Accountants contact',
    'Birmingham accountants phone',
    'Hall Green accountants',
    'accountants near me Birmingham',
    'chartered accountants Birmingham address',
  ],
  openGraph: {
    title: 'Contact Us | RUS Chartered Accountants Birmingham',
    description: 'Get in touch with Birmingham\'s trusted chartered accountants. Call 0121 777 1200 or visit our Hall Green office.',
    type: 'website',
  },
  alternates: {
    canonical: 'https://rus.co.uk/contact',
  },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center">
      <h1 className="text-2xl">Contact Page Placeholder</h1>
    </div>
  );
}
