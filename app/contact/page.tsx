import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | RUS Chartered Accountants',
  description: 'Get in touch with RUS Chartered Accountants in Birmingham. Call 0121 777 1200 or email info@rus.co.uk',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center">
      <h1 className="text-2xl">Contact Page Placeholder</h1>
    </div>
  );
}
