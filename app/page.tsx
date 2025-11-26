import { Metadata } from 'next';
import { Hero } from '@/components/home/Hero';
import { ServicesIndustrySection } from '@/components/home/ServicesIndustrySection';
import { CompanyIntro } from '@/components/home/CompanyIntro';
import { ReviewsSlider } from '@/components/home/ReviewsSlider';
import { IntegrationSection } from '@/components/home/IntegrationSection';
import { CTASimple } from '@/components/home/CTASimple';
import { WhyChooseUs } from '@/components/home/WhyChooseUs';
import { InsightsPreview } from '@/components/home/InsightsPreview';

export const metadata: Metadata = {
  title: 'RUS Chartered Accountants Birmingham | Tax, Audit & Business Advisory',
  description: 'Expert chartered accountants in Birmingham since 1995. ICAEW registered specialists in tax planning, audit, payroll and business advisory for UK businesses. Call 0121 777 1200.',
  keywords: [
    'chartered accountants Birmingham',
    'accountants Birmingham',
    'tax advisors Birmingham',
    'audit services Birmingham',
    'business accountants West Midlands',
    'ICAEW Birmingham',
    'payroll services Birmingham',
    'RUS Chartered Accountants',
    'accountancy services UK',
    'tax planning Birmingham',
    'Hall Green accountants',
    'Birmingham business advisory',
  ],
  openGraph: {
    title: 'RUS Chartered Accountants | Expert Accountants in Birmingham',
    description: 'Trusted chartered accountants serving Birmingham businesses since 1995. Expert tax, audit & advisory services.',
    type: 'website',
    url: 'https://rus.co.uk',
    siteName: 'RUS Chartered Accountants',
    locale: 'en_GB',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RUS Chartered Accountants Birmingham',
    description: 'Expert chartered accountants serving Birmingham since 1995',
  },
  alternates: {
    canonical: 'https://rus.co.uk',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesIndustrySection />
      <CompanyIntro />
      <ReviewsSlider />
      <IntegrationSection />
      <CTASimple />
      <WhyChooseUs />
      <InsightsPreview />
    </>
  );
}
