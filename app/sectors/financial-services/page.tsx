import { Metadata } from 'next';
import Link from 'next/link';
import { ServiceHero } from '@/components/services/ServiceHero';
import { WhoWeHelp } from '@/components/services/WhoWeHelp';
import { ServiceOverview } from '@/components/services/ServiceOverview';
import { ServiceBenefits } from '@/components/services/ServiceBenefits';
import { ServiceTestimonials } from '@/components/services/ServiceTestimonials';
import { ServiceFAQ } from '@/components/services/ServiceFAQ';
import { FAQSchema } from '@/components/seo/FAQSchema';
import { InsightsPreview } from '@/components/home/InsightsPreview';
import { StickyMiniNav } from '@/components/services/StickyMiniNav';

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
    title: 'Sector Expertise',
    description: 'Deep understanding of financial services sector regulations, FCA requirements and industry-specific tax planning opportunities',
  },
  {
    title: 'Regulatory Knowledge',
    description: 'Comprehensive knowledge of compliance obligations, client money rules and regulatory reporting requirements for financial services firms',
  },
  {
    title: 'Proactive Tax Planning',
    description: 'Strategic tax advice tailored to commission-based income, profit extraction and the unique structure of financial services businesses',
  },
  {
    title: 'Business Growth Support',
    description: 'Practical support for scaling your practice, improving profitability and planning for long-term success in the financial services sector',
  },
];

// Testimonials - EXACTLY 3
const testimonials = [
  {
    name: 'David Richardson',
    role: 'Independent Financial Adviser',
    company: 'Richardson Financial Planning Ltd',
    content: 'RUS have been instrumental in helping us navigate FCA compliance requirements whilst optimising our tax position. Their sector knowledge is exceptional.',
    rating: 5,
  },
  {
    name: 'Sarah Mitchell',
    role: 'Managing Director',
    company: 'Mitchell Insurance Brokers',
    content: 'As an insurance brokerage, we need accountants who understand our industry. RUS provide expert advice on commission structures and regulatory reporting.',
    rating: 5,
  },
  {
    name: 'James Patterson',
    role: 'Principal',
    company: 'Patterson Mortgage Services',
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
        badge="Financial Services"
        title="Specialist Accountants for Financial Services Professionals"
        description="Expert accounting, tax and compliance support for insurance firms, brokers, IFAs and financial services businesses across the UK."
        stats={[
          { label: 'Years Experience', value: '30+' },
          { label: 'ICAEW', value: 'Chartered' },
        ]}
      />

      <WhoWeHelp
        id="services"
        title="Comprehensive Accounting for Financial Services"
        description="We provide specialist accounting services designed specifically for the financial services sector—from FCA compliance and regulatory reporting to strategic tax planning and business growth advisory."
        services={financialServices}
      />

      <ServiceOverview
        title="Expert Support for the Financial Services Sector"
        leftContent={{
          heading: 'Financial Services Sector Expertise',
          description: 'The financial services sector operates in a highly regulated environment with unique compliance requirements, commission structures and tax considerations. Our specialist accountants understand the FCA framework, regulatory reporting obligations and the specific challenges faced by insurance firms, brokers and advisers. We combine technical accounting expertise with deep sector knowledge to provide practical, proactive support that helps your business thrive whilst remaining fully compliant.',
        }}
        rightContent={{
          stats: [
            { value: '30+', label: 'Years Experience' },
            { value: 'ICAEW', label: 'Chartered' },
          ],
        }}
      />

      {/* CTA #1 - Blue gradient with contact details */}
      <section className="w-full flex items-center justify-center bg-white px-4 py-24 pt-32">
        <div className="max-w-6xl mx-auto w-full">
          <div className="relative bg-gradient-to-br from-[#01458f] to-[#0052cc] rounded-3xl overflow-hidden px-8 md:px-16 py-20 md:py-28">
            {/* Geometric Pattern Background */}
            <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
              <path d="M 600 -100 Q 800 100 850 300" stroke="white" strokeWidth="2" fill="none" />
              <circle cx="750" cy="150" r="80" stroke="white" strokeWidth="1.5" fill="none" />
              <path d="M 700 50 L 850 80 L 820 200" stroke="white" strokeWidth="1.5" fill="none" />
              <path d="M 650 120 L 750 100 L 730 180 L 640 190 Z" stroke="white" strokeWidth="1" fill="none" />
              <path d="M -50 400 Q 100 450 200 480" stroke="white" strokeWidth="2" fill="none" />
              <circle cx="100" cy="420" r="60" stroke="white" strokeWidth="1.5" fill="none" />
              <path d="M 50 380 L 180 400 L 160 480" stroke="white" strokeWidth="1.5" fill="none" />
              <line x1="400" y1="50" x2="500" y2="80" stroke="white" strokeWidth="1" opacity="0.5" />
              <line x1="300" y1="400" x2="400" y2="420" stroke="white" strokeWidth="1" opacity="0.5" />
              <circle cx="500" cy="60" r="30" stroke="white" strokeWidth="1" fill="none" opacity="0.4" />
            </svg>

            <div className="relative z-10 flex flex-col items-center text-center space-y-6">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight">
                Ready to optimise your<br />financial services practice?
              </h2>

              <Link
                href="/contact"
                className="relative inline-flex items-center justify-center px-8 py-3 bg-white text-gray-900 rounded-full text-sm font-medium hover:shadow-2xl hover:shadow-white/30 transition-all duration-300 overflow-hidden group"
              >
                <div className="absolute inset-0 -z-10 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-md backdrop-saturate-150" />
                <div className="absolute inset-0 -z-20 bg-gradient-to-br from-white/30 via-white/10 to-white/30 rounded-full opacity-0 group-hover:opacity-40 transition-all duration-300" />
                <div className="absolute inset-0 -z-30 bg-white rounded-full transition-all duration-300 group-hover:bg-white/95" />
                <span className="relative z-10">Contact Us</span>
              </Link>

              <p className="text-white/90 text-sm md:text-base">
                Expert advice tailored to your financial services business
              </p>

              <div className="flex flex-col items-center justify-center gap-3 text-white/70 text-sm mt-4">
                <div className="flex flex-col md:flex-row items-center gap-3 md:gap-6">
                  <a href="tel:01217771200" className="flex items-center gap-2 hover:text-white transition-colors duration-200">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span>0121 777 1200</span>
                  </a>
                  <span className="hidden md:inline">•</span>
                  <a href="mailto:info@rus.co.uk" className="flex items-center gap-2 hover:text-white transition-colors duration-200">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span>info@rus.co.uk</span>
                  </a>
                </div>
                <div className="flex items-center gap-2 text-center">
                  <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>1190A-1192 Stratford Road, Hall Green, Birmingham, B28 8AB</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ServiceBenefits
        id="benefits"
        title="Why Financial Services Firms Choose RUS"
        benefits={benefits}
      />

      <ServiceTestimonials
        id="testimonials"
        title="Trusted by Financial Services Professionals"
        testimonials={testimonials}
      />

      {/* CTA #2 - Blue gradient without contact details */}
      <section className="w-full flex items-center justify-center bg-white px-4 py-24">
        <div className="max-w-6xl mx-auto w-full">
          <div className="relative bg-gradient-to-br from-[#01458f] to-[#0052cc] rounded-3xl overflow-hidden px-8 md:px-16 py-20 md:py-28">
            <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
              <path d="M 600 -100 Q 800 100 850 300" stroke="white" strokeWidth="2" fill="none" />
              <circle cx="750" cy="150" r="80" stroke="white" strokeWidth="1.5" fill="none" />
              <path d="M 700 50 L 850 80 L 820 200" stroke="white" strokeWidth="1.5" fill="none" />
              <path d="M 650 120 L 750 100 L 730 180 L 640 190 Z" stroke="white" strokeWidth="1" fill="none" />
              <path d="M -50 400 Q 100 450 200 480" stroke="white" strokeWidth="2" fill="none" />
              <circle cx="100" cy="420" r="60" stroke="white" strokeWidth="1.5" fill="none" />
              <path d="M 50 380 L 180 400 L 160 480" stroke="white" strokeWidth="1.5" fill="none" />
              <line x1="400" y1="50" x2="500" y2="80" stroke="white" strokeWidth="1" opacity="0.5" />
              <line x1="300" y1="400" x2="400" y2="420" stroke="white" strokeWidth="1" opacity="0.5" />
              <circle cx="500" cy="60" r="30" stroke="white" strokeWidth="1" fill="none" opacity="0.4" />
            </svg>

            <div className="relative z-10 flex flex-col items-center text-center space-y-6">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight">
                Let's discuss your<br />financial services accounting needs
              </h2>

              <Link
                href="/contact"
                className="relative inline-flex items-center justify-center px-8 py-3 bg-white text-gray-900 rounded-full text-sm font-medium hover:shadow-2xl hover:shadow-white/30 transition-all duration-300 overflow-hidden group"
              >
                <div className="absolute inset-0 -z-10 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-md backdrop-saturate-150" />
                <div className="absolute inset-0 -z-20 bg-gradient-to-br from-white/30 via-white/10 to-white/30 rounded-full opacity-0 group-hover:opacity-40 transition-all duration-300" />
                <div className="absolute inset-0 -z-30 bg-white rounded-full transition-all duration-300 group-hover:bg-white/95" />
                <span className="relative z-10">Contact Us</span>
              </Link>

              <p className="text-white/90 text-sm md:text-base">
                Professional accounting support for your practice
              </p>
            </div>
          </div>
        </div>
      </section>

      <ServiceFAQ
        id="faqs"
        title="Financial Services Accounting FAQs"
        faqs={faqs}
      />

      <InsightsPreview />
    </>
  );
}
