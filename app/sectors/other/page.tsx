import { Metadata } from 'next';
import { ServiceHero } from '@/components/services/ServiceHero';
import { WhoWeHelp } from '@/components/services/WhoWeHelp';
import { ServiceOverview } from '@/components/services/ServiceOverview';
import { ServiceBenefits } from '@/components/services/ServiceBenefits';
import { ServiceTestimonials } from '@/components/services/ServiceTestimonials';
import { ServiceFAQ } from '@/components/services/ServiceFAQ';
import { InsightsPreview } from '@/components/home/InsightsPreview';
import { StickyMiniNav } from '@/components/services/StickyMiniNav';
import { CTASimple } from '@/components/home/CTASimple';

export const metadata: Metadata = {
  title: 'Business Accountants Birmingham | All Sectors | RUS Chartered Accountants',
  description: 'Expert chartered accountants for businesses across all sectors. Accounts, tax, payroll, VAT, business advisory. 30+ years experience. Birmingham based, UK-wide service.',
  keywords: [
    'business accountants Birmingham',
    'chartered accountants UK',
    'small business accountants',
    'SME accountants Birmingham',
    'limited company accountants',
    'sole trader accountants',
    'general business accounting',
    'all sectors accountants Birmingham',
  ],
  openGraph: {
    title: 'Business Accountants for All Sectors | RUS Chartered Accountants',
    description: 'Expert accounting services for businesses across all industries and sectors.',
    type: 'website',
  },
  alternates: {
    canonical: 'https://rus.co.uk/sectors/other',
  },
};

// Other Services - EXACTLY 8 for design consistency
const otherServices = [
  {
    title: 'Year-End Accounts & Tax Compliance',
    description: 'Comprehensive year-end accounts preparation and Corporation Tax returns tailored to your business needs, ensuring full compliance with HMRC and Companies House requirements.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    title: 'VAT Returns & Advisory',
    description: 'Expert VAT return preparation and strategic VAT advice covering standard, flat rate, and cash accounting schemes. We help you optimise your VAT position and navigate complex VAT rules.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Payroll Services',
    description: 'Comprehensive payroll processing including PAYE, National Insurance, pension auto-enrolment, and RTI submissions. We handle everything from starter forms to P60s and P11Ds.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: 'Management Accounts & Cashflow',
    description: 'Regular management accounts and cashflow forecasting to give you clear visibility of your business performance. Make informed decisions with timely financial insights.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    title: 'Digital Accounting & Cloud Software',
    description: 'Modern cloud accounting solutions using Xero, QuickBooks, and Sage. Digital bookkeeping with real-time access to your financial data from anywhere.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Business Structure & Planning',
    description: 'Strategic advice on business structure (sole trader, partnership, limited company) and tax-efficient planning. We help you choose the right structure for your business goals.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    title: 'Self-Assessment Tax Returns',
    description: 'Personal tax return preparation for business owners, sole traders, and partners. We maximise allowances and reliefs while ensuring full HMRC compliance.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
  },
  {
    title: 'Business Acquisitions & Sales',
    description: 'Expert support for buying or selling a business including due diligence, valuations, tax structuring, and deal completion. We guide you through every step of the transaction.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    ),
  },
];

// 4 Key Benefits
const benefits = [
  {
    title: 'Broad Sector Experience',
    description: 'With 30+ years serving Birmingham businesses, we have extensive experience across diverse industries and business types. Whatever your sector, we understand your needs.',
    icon: (
      // eslint-disable-next-line @next/next/no-img-element
      <img src="https://imagedelivery.net/W93NbEGaswuledAsk5GMeA/5704b5ca-3a45-41f8-52ae-427eadcc4200/public" alt="Broad Sector Experience" className="w-20 h-20 md:w-24 md:h-24" />
    ),
  },
  {
    title: 'Flexible Accounting Solutions',
    description: 'We tailor our services to your specific business needs. Whether you need basic compliance or comprehensive CFO-level support, we create a solution that fits.',
    icon: (
      // eslint-disable-next-line @next/next/no-img-element
      <img src="https://imagedelivery.net/W93NbEGaswuledAsk5GMeA/f796cefc-8777-4677-95c2-71bb44b0ac00/public" alt="Flexible Accounting Solutions" className="w-20 h-20 md:w-24 md:h-24" />
    ),
  },
  {
    title: 'Personalised Service',
    description: 'You will work with a dedicated accountant who understands your business personally. No call centres, no ticket systems - just direct access to your trusted advisor.',
    icon: (
      // eslint-disable-next-line @next/next/no-img-element
      <img src="https://imagedelivery.net/W93NbEGaswuledAsk5GMeA/cd599fb0-6498-4d2d-c78f-5a72a0ee5800/public" alt="Personalised Service" className="w-20 h-20 md:w-24 md:h-24" />
    ),
  },
  {
    title: 'Birmingham-Based Support',
    description: 'Local accountants based in Hall Green, Birmingham. We understand the local business landscape and are available for face-to-face meetings when you need them.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
];

// 3 Client Testimonials
const testimonials = [
  {
    name: 'Client',
    role: 'Manufacturing Managing Director',
    content: 'RUS has been our accountants for over 8 years. They provide excellent service, always responsive, and genuinely care about our business success. Their advice has been invaluable.',
    rating: 5,
  },
  {
    name: 'Client',
    role: 'Events & Catering Owner',
    content: 'As a small business owner, I need accountants I can trust and rely on. RUS delivers exactly that - professional, proactive, and always available when I need guidance. Highly recommended.',
    rating: 5,
  },
  {
    name: 'Client',
    role: 'Trading Company Director',
    content: 'Switching to RUS was one of the best decisions we made. They took the time to understand our business and provided strategic advice that has helped us grow. Outstanding service.',
    rating: 5,
  },
];

// 6 Frequently Asked Questions
const faqs = [
  {
    question: 'What types of businesses do you work with?',
    answer: 'We work with businesses of all types and sizes across Birmingham and the West Midlands. From sole traders and start-ups to established limited companies and groups, we tailor our services to meet your specific needs. With 30+ years of experience across diverse sectors, we understand the unique challenges different businesses face.',
  },
  {
    question: 'What accounting services do you provide?',
    answer: 'We provide a full range of accounting and tax services including year-end accounts, Corporation Tax returns, VAT returns, payroll processing, management accounts, Self-Assessment tax returns, business planning, and advisory services. We also offer digital accounting solutions using cloud software like Xero, QuickBooks, and Sage.',
  },
  {
    question: 'How much do your services cost?',
    answer: "Our fees are tailored to your specific requirements and the complexity of your business. We offer transparent, fixed-fee pricing for most services so you know exactly what you'll pay. Contact us for a free, no-obligation consultation where we'll discuss your needs and provide a detailed quote.",
  },
  {
    question: 'Do you offer face-to-face meetings?',
    answer: "Yes, we are based in Hall Green, Birmingham and welcome clients to our offices for face-to-face meetings. We also offer virtual meetings via video call for your convenience. Whether you prefer in-person or remote support, we're flexible to suit your preferences.",
  },
  {
    question: 'Can you help with HMRC enquiries and tax investigations?',
    answer: "Yes, we have extensive experience supporting clients through HMRC enquiries, compliance checks, and tax investigations. We'll represent you, liaise with HMRC on your behalf, and provide expert guidance throughout the process to achieve the best possible outcome.",
  },
  {
    question: 'How do I get started with RUS?',
    answer: "Getting started is simple. Contact us via phone (0121 777 1200), email (info@rus.co.uk), or our online contact form to arrange a free initial consultation. We'll discuss your business needs, explain how we can help, and provide a transparent quote. There's no obligation and we're happy to answer any questions you have.",
  },
];

// Mini navigation links
const miniNavLinks = [
  { href: '#services', label: 'Services' },
  { href: '#benefits', label: 'Benefits' },
  { href: '#testimonials', label: 'Testimonials' },
  { href: '#faqs', label: 'FAQs' },
  { href: '#insights', label: 'Insights' },
];

export default function OtherSectorPage() {
  return (
    <>
      <ServiceHero
        title="Accounting Services for Your Business"
        subtitle="Expert accounting, tax, and advisory services for businesses across all sectors in Birmingham and the West Midlands"
        description="With over 30 years of experience supporting businesses across diverse industries, we understand that every business has unique financial needs. Whether you're a sole trader, small business, limited company, or growing enterprise, we provide tailored accounting, tax compliance, and strategic advisory services designed to support your success. Our team combines deep sector knowledge with modern accounting solutions to deliver the reliable, professional support your business deserves."
      />

      <div id="services">
        <WhoWeHelp
          title="Specialist Accountants for All Business Types"
          subtitle="From start-ups to established businesses, sole traders to limited companies, we provide comprehensive accounting support tailored to your specific needs and industry sector."
          clientTypes={otherServices}
          bgColor="bg-gradient-to-br from-[#01458f] to-[#0052cc]"
          darkMode={true}
        />
      </div>

      <ServiceOverview
        leftContent={{
          title: 'Supporting Businesses Across All Sectors',
          description: 'With three decades of experience serving Birmingham and West Midlands businesses, we have developed expertise across a wide range of industries and business structures. Whether your business needs basic compliance support or comprehensive CFO-level guidance, we deliver professional accounting services with a personal touch.',
        }}
        rightContent={{
          stats: [
            { value: '30+', label: 'Years Experience' },
            { value: '1,500+', label: 'Clients Served' },
          ],
        }}
      />

      <CTASimple
        heading="Expert accounting for your business success"
        supportingText="Whatever your business sector, we provide expert accounting, tax compliance, and strategic advisory services to help you succeed"
        buttonText="Get Started"
      />

      <div id="benefits">
        <ServiceBenefits title="Why Choose RUS?" items={benefits} />
      </div>

      <div id="testimonials">
        <ServiceTestimonials
          title="Client Testimonials"
          subtitle="Hear from businesses we support across Birmingham and the West Midlands"
          testimonials={testimonials}
        />
      </div>

      <CTASimple
        heading="Ready to work with experienced accountants?"
        supportingText="Contact us today for a free consultation. Let us show you how professional accounting support can benefit your business"
        buttonText="Get Started"
      />

      <div id="faqs">
        <ServiceFAQ
          title="Frequently Asked Questions"
          faqs={faqs}
        />
      </div>

      <div id="insights">
        <InsightsPreview />
      </div>

      <StickyMiniNav links={miniNavLinks} />
    </>
  );
}
