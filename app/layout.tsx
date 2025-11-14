import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { BottomBar } from '@/components/layout/BottomBar';

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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <Header />
        <main className="pb-16">{children}</main>
        <Footer />
        <BottomBar />
      </body>
    </html>
  );
}
