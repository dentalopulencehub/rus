import { Metadata } from 'next';
import Link from 'next/link';
import { Award, BarChart } from 'lucide-react';
import { ServiceHero } from '@/components/services/ServiceHero';
import { WhoWeHelp } from '@/components/services/WhoWeHelp';
import { ServiceOverview } from '@/components/services/ServiceOverview';
import { ServiceBenefits } from '@/components/services/ServiceBenefits';
import { ServiceTestimonials } from '@/components/services/ServiceTestimonials';
import { ServiceFAQ } from '@/components/services/ServiceFAQ';
import { FAQSchema } from '@/components/seo/FAQSchema';
import { InsightsPreview } from '@/components/home/InsightsPreview';
import { StickyMiniNav } from '@/components/services/StickyMiniNav';
import { CTASimple } from '@/components/home/CTASimple';

export const metadata: Metadata = {
  title: 'Financial Services Accountants Birmingham | Insurance, Brokerage & Finance Sector | RUS',
  description: 'Specialist accountants for financial services sector. Insurance firms, mortgage brokers, IFAs, brokerage firms accounting. 30+ years expertise. Birmingham based, UK-wide service.',
  keywords: [
    'financial services accountants Birmingham',
    'insurance company accountants UK',
    'mortgage broker accountants',
    'IFA accountants',
    'brokerage firm accountants',
    'financial advisers accounting',
    'insurance broker tax',
    'FCA regulated firm accountants',
  ],
  openGraph: {
    title: 'Financial Services Sector Accountants | RUS Chartered Accountants',
    description: 'Specialist accountants for financial services professionals with over 30 years experience.',
    type: 'website',
  },
  alternates: {
    canonical: 'https://rus.co.uk/sectors/financial-services',
  },
};

// Financial Services - EXACTLY 8 for design consistency
const financialServices = [
  {
    title: 'Accounts & Tax Compliance',
    description: 'Year-end accounts, corporation tax returns, VAT compliance and complete regulatory reporting for financial services firms',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    title: 'FCA Compliance & Reporting',
    description: 'Expert support with Financial Conduct Authority requirements, regulatory returns, client money rules and compliance documentation',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: 'Commission Income Planning',
    description: 'Strategic tax planning for commission-based income, profit extraction strategies and dividend optimisation for brokers and advisers',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Business Structure Advisory',
    description: 'Guidance on optimal business structures for financial services firms, partnership agreements, incorporation and succession planning',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    title: 'Professional Indemnity & Insurance',
    description: 'Advice on professional indemnity requirements, insurance tax relief and managing risk across your financial services practice',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
  },
  {
    title: 'Management Accounts & Forecasting',
    description: 'Regular management information, cash flow forecasting, budgeting and financial planning to support growth and decision-making',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    title: 'Payroll & Auto-Enrolment',
    description: 'Complete payroll services, PAYE management, workplace pension auto-enrolment and employee benefit administration',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: 'Growth & Exit Strategy Planning',
    description: 'Strategic advice on scaling your financial services business, mergers, acquisitions, practice sales and succession planning',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
];

// Benefits - EXACTLY 4
const benefits = [
  {
    icon: <Award className="w-6 h-6" />,
    title: 'Sector Expertise',
    description: 'Deep understanding of financial services sector regulations, FCA requirements and industry-specific tax planning opportunities',
  },
  {
    icon: (
      // eslint-disable-next-line @next/next/no-img-element
      <img src="https://imagedelivery.net/W93NbEGaswuledAsk5GMeA/38654a19-c947-4fcf-b872-85600294b100/public" alt="Regulatory Knowledge" className="w-20 h-20 md:w-24 md:h-24" />
    ),
    title: 'Regulatory Knowledge',
    description: 'Comprehensive knowledge of compliance obligations, client money rules and regulatory reporting requirements for financial services firms',
  },
  {
    icon: (
      // eslint-disable-next-line @next/next/no-img-element
      <img src="https://imagedelivery.net/W93NbEGaswuledAsk5GMeA/f796cefc-8777-4677-95c2-71bb44b0ac00/public" alt="Proactive Tax Planning" className="w-20 h-20 md:w-24 md:h-24" />
    ),
    title: 'Proactive Tax Planning',
    description: 'Strategic tax advice tailored to commission-based income, profit extraction and the unique structure of financial services businesses',
  },
  {
    icon: <BarChart className="w-6 h-6" />,
    title: 'Business Growth Support',
    description: 'Practical support for scaling your practice, improving profitability and planning for long-term success in the financial services sector',
  },
];

// Testimonials - EXACTLY 3
const testimonials = [
  {
    name: 'David Richardson',
    role: 'Independent Financial Adviser',
    company: '',
    content: 'RUS have been instrumental in helping us navigate FCA compliance requirements whilst optimising our tax position. Their sector knowledge is exceptional.',
    rating: 5,
  },
  {
    name: 'Sarah Mitchell',
    role: 'Insurance Brokerage Managing Director',
    company: '',
    content: 'As an insurance brokerage, we need accountants who understand our industry. RUS provide expert advice on commission structures and regulatory reporting.',
    rating: 5,
  },
  {
    name: 'James Patterson',
    role: 'Mortgage Brokerage Principal',
    company: '',
    content: 'The team at RUS understand the complexities of mortgage brokerage accounting. They have saved us significant time and helped us plan our growth effectively.',
    rating: 5,
  },
];

// FAQs - EXACTLY 6
const faqs = [
  {
    question: 'Do you work with FCA-regulated financial services firms?',
    answer: 'Yes, we have extensive experience working with FCA-regulated firms including independent financial advisers, insurance brokers, mortgage brokers and wealth management companies. We understand the regulatory reporting requirements and compliance obligations specific to the financial services sector.',
  },
  {
    question: 'Can you help with FCA regulatory returns and compliance?',
    answer: 'Absolutely. We provide comprehensive support with FCA compliance including regulatory returns, client money reporting, financial resources calculations and ongoing compliance monitoring. Our team stays current with FCA requirements to ensure your firm remains compliant.',
  },
  {
    question: 'How do you handle commission-based income for tax purposes?',
    answer: 'We provide specialist tax planning for commission-based income, helping you structure your affairs tax-efficiently. This includes advice on profit extraction strategies, dividend planning, pension contributions and ensuring you benefit from all available reliefs and allowances.',
  },
  {
    question: 'Do you advise on the best business structure for financial services firms?',
    answer: 'Yes, we provide strategic advice on business structures for financial services professionals. Whether you are operating as a sole trader, partnership or limited company, we assess your circumstances and recommend the most tax-efficient structure that meets your regulatory and commercial needs.',
  },
  {
    question: 'Can you assist with practice sales and acquisitions in financial services?',
    answer: 'Yes, we have significant experience supporting financial services firms through mergers, acquisitions and practice sales. We provide due diligence, valuation advice, tax planning for exits and ongoing support to ensure a smooth transaction and optimal tax treatment.',
  },
  {
    question: 'What are your fees for financial services sector accounting?',
    answer: 'Our fees are tailored to the size and complexity of your financial services business. We provide fixed-fee quotes based on your turnover, regulatory requirements and the level of support needed. Contact us for a no-obligation discussion about your specific requirements.',
  },
];

export default function FinancialServicesPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <StickyMiniNav links={[
        { label: 'Services', href: '#services' },
        { label: 'Benefits', href: '#benefits' },
        { label: 'Testimonials', href: '#testimonials' },
        { label: 'FAQs', href: '#faqs' },
      ]} />

      <ServiceHero
        title="Specialist Accountants for Financial Services"
        subtitle="Expert Support for Insurance, Brokerage & Financial Advisers"
        description="Expert accounting, tax and compliance support for insurance firms, brokers, IFAs and financial services businesses across the UK."
        imageUrl="https://imagedelivery.net/W93NbEGaswuledAsk5GMeA/9e051910-8058-4d35-2654-77c7b4ed7c00/public"
      />

      <WhoWeHelp
        title="Comprehensive Accounting for Financial Services"
        clientTypes={financialServices}
        bgColor="bg-gradient-to-br from-[#01458f] to-[#0052cc]"
        darkMode={true}
      />

      <ServiceOverview
        leftContent={{
          title: 'Financial Services\nSector Expertise',
          description: 'The financial services sector operates in a highly regulated environment with unique compliance requirements, commission structures and tax considerations. Our specialist accountants understand the FCA framework, regulatory reporting obligations and the specific challenges faced by insurance firms, brokers and advisers. We combine technical accounting expertise with deep sector knowledge to provide practical, proactive support that helps your business thrive whilst remaining fully compliant.',
        }}
        rightContent={{
          stats: [
            { value: '30+', label: 'Years Experience' },
            { value: 'ICAEW', label: 'Chartered' },
          ],
        }}
        imageUrl="https://imagedelivery.net/W93NbEGaswuledAsk5GMeA/12f0415a-1c65-48d0-2e61-ba8da028cf00/public"
      />

      <CTASimple
        heading="Ready to optimise your financial services practice?"
        supportingText="Expert advice tailored to your financial services business"
        buttonText="Contact Us"
      />

      <ServiceBenefits
        title="Why Financial Services Firms Choose RUS"
        items={benefits}
        knowledgeIconUrl="https://imagedelivery.net/W93NbEGaswuledAsk5GMeA/fa680a4f-c411-4da7-5327-e2eab6fe3e00/public"
        knowledgeIconIndex={0}
      />

      <ServiceTestimonials
        title="Trusted by Financial Services Professionals"
        testimonials={testimonials}
      />

      <CTASimple
        heading="Let's discuss your financial services accounting needs"
        supportingText="Professional accounting support for your practice"
        buttonText="Contact Us"
      />

      <ServiceFAQ
        title="Financial Services Accounting FAQs"
        faqs={faqs}
      />

      <InsightsPreview />
    </>
  );
}
