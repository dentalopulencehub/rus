import { Metadata } from 'next';
import Link from 'next/link';
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
  title: 'Property Accountants Birmingham | Landlord Tax & Estate Agents | RUS',
  description: 'Specialist accountants for landlords, estate agents, property managers and SPV investors. Rental income tax, Section 24 planning, property portfolios. Birmingham property accountants.',
  keywords: [
    'landlord accountants Birmingham',
    'property tax specialists UK',
    'estate agent accountants',
    'SPV accountants Birmingham',
    'rental income tax',
    'Section 24 planning',
    'property portfolio accounting',
    'property management accountants',
  ],
  openGraph: {
    title: 'Property Sector Accountants | RUS Chartered Accountants',
    description: 'Specialist accountants for landlords, estate agents and property professionals.',
    type: 'website',
  },
  alternates: {
    canonical: 'https://rus.co.uk/sectors/property-services',
  },
};

// Property Services - EXACTLY 8 for design consistency
const propertyServices = [
  {
    title: 'Landlord Tax & Compliance',
    description: 'Tax returns for individuals, partnerships and companies, allowable expenses, interest restrictions, Section 24 planning and rental income compliance',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    title: 'SPV Setup & Management',
    description: 'Special Purpose Vehicle incorporation, company accounts, Corporation Tax returns, mortgage lender compliance and dividend planning',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    title: 'Estate Agency Accounting',
    description: 'Year-end accounts, VAT guidance, fee-structure advice, profitability analysis, payroll support and business growth planning',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Property Management Services',
    description: 'Service charge accounting, client money handling, reconciliation guidance, budgeting, reserve fund planning and contractor payments',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    title: 'Capital Gains Tax Planning',
    description: 'CGT planning for property disposals, principal private residence relief, letting relief and tax-efficient exit strategies',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Investment Modelling & Forecasting',
    description: 'Cashflow forecasting, investment appraisals, return analysis, finance planning and long-term portfolio strategy',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    title: 'VAT for Property Professionals',
    description: 'Option to tax advice, VAT on commercial property, service charges, management fees and reverse charge for construction',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
  {
    title: 'Business Structure Planning',
    description: 'Advice on personal ownership, partnerships, LLPs and limited company structures to ensure tax efficiency and flexibility for growth',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
];

// Benefits - EXACTLY 4 for design consistency
const benefits = [
  {
    title: '30+ Years Property Sector Experience',
    description: 'Three decades supporting estate agents, landlords, property managers and investment companies',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
  {
    title: 'Landlord & SPV Tax Specialists',
    description: 'Deep understanding of Section 24, interest restrictions, SPV structures and property investment taxation',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    title: 'Commercial & Residential Expertise',
    description: 'Specialist knowledge across both residential and commercial property sectors',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    title: 'VAT & CGT Planning Experts',
    description: 'Comprehensive guidance on VAT option to tax, Capital Gains Tax planning and SDLT considerations',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
];

// Testimonials
const testimonials = [
  {
    name: 'Andrew Peterson',
    role: 'Managing Director, Peterson Estate Agents',
    content: 'RUS has supported our estate agency for over 10 years. Their understanding of agency finances, VAT and profitability analysis is excellent. They provide clear, practical advice that helps us run a more efficient business.',
    rating: 5,
  },
  {
    name: 'Sophie Williams',
    role: 'Property Investor',
    content: 'When I started building my property portfolio, RUS guided me through SPV setup, tax planning and cashflow forecasting. Their expertise in landlord taxation and Section 24 has saved me thousands. Highly recommended.',
    rating: 5,
  },
  {
    name: 'Marcus Thompson',
    role: 'Director, Thompson Property Management Ltd',
    content: 'Managing service charges and client money requires meticulous accounting. RUS ensures we stay compliant, our records are accurate and our reporting is transparent. Their property sector knowledge is second to none.',
    rating: 5,
  },
];

// FAQs
const faqs = [
  {
    question: 'Should I hold rental properties personally or through a limited company (SPV)?',
    answer: (
      <>
        The best structure depends on your income level, mortgage arrangements and long-term plans. Since Section 24 restricted mortgage interest relief for individual landlords, many investors now use <Link href="/services/company-formation" className="text-[#01458f] underline hover:text-[#013a75] transition-colors">Special Purpose Vehicles (SPVs)</Link> to benefit from Corporation Tax rates and full interest deductions. We provide detailed analysis comparing personal ownership, partnerships and SPV structures to help you make an informed, tax-efficient decision.
      </>
    ),
  },
  {
    question: 'How does Section 24 affect landlords and what can I do about it?',
    answer: (
      <>
        <Link href="/services/taxation-services" className="text-[#01458f] underline hover:text-[#013a75] transition-colors">Section 24</Link> restricts tax relief on mortgage interest for individual landlords to a basic rate tax credit (20%), rather than full deduction at your marginal rate. This significantly impacts higher-rate taxpayers. Strategies include incorporating properties into an SPV, reviewing your portfolio structure, maximising other allowable expenses and planning ahead for long-term tax efficiency. We provide tailored advice based on your specific circumstances.
      </>
    ),
  },
  {
    question: 'Can you help with Capital Gains Tax (CGT) planning when selling property?',
    answer: (
      <>
        Yes. We advise on <Link href="/services/taxation-services" className="text-[#01458f] underline hover:text-[#013a75] transition-colors">CGT reliefs</Link> including Principal Private Residence Relief, letting relief (where applicable) and timing strategies to minimise tax on property disposals. We also help with reinvestment planning, spouse transfers and incorporation relief where properties are moved into limited companies. Early planning is essential to reduce CGT liabilities legally and effectively.
      </>
    ),
  },
  {
    question: 'Do you support estate agents with accounts and VAT?',
    answer: 'Absolutely. We prepare year-end accounts, manage VAT returns, provide fee-structure guidance and deliver profitability analysis for estate agency businesses. Our experience with sales commissions, lettings income, management fees and staff costs ensures your accounts are accurate, compliant and provide clear insight into business performance.',
  },
  {
    question: 'What is the option to tax for VAT and when should I use it?',
    answer: "The option to tax allows you to charge VAT on commercial property sales or lettings, enabling you to reclaim VAT on associated costs. It's beneficial when dealing with VAT-registered tenants but can be restrictive if selling to non-VAT registered buyers. The decision is often irrevocable for 20 years, so specialist advice is crucial. We assess your situation and advise whether opting to tax is advantageous.",
  },
  {
    question: 'Can you help property managers with service charge accounting?',
    answer: 'Yes. We provide service charge accounting, client money reconciliation, reserve fund planning and budget preparation for residential and commercial property managers. Our support ensures compliance with client money regulations, transparent reporting to landlords and leaseholders and accurate financial oversight for all managed properties.',
  },
];

// Mini navigation links
const miniNavLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Benefits', href: '#benefits' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'FAQs', href: '#faqs' },
  { label: 'Insights', href: '#insights' },
];

export default function PropertyServicesSectorPage() {
  return (
    <>
      <ServiceHero
        title="Property Services Accountancy"
        subtitle="Specialist accountants for estate agents, landlords, property managers and investment companies"
        description="The property sector is one of the most diverse and fast-moving industries in the UK, with complex tax rules, regulatory requirements and financial structures that demand expert guidance. Whether you are managing a portfolio, running an estate agency, operating a property management business or investing through a Special Purpose Vehicle (SPV), strong financial oversight is essential."
        imageUrl="https://imagedelivery.net/W93NbEGaswuledAsk5GMeA/d9c1958c-8187-4ab5-1740-be4b6e847a00/public"
      />

      <div id="services">
        <WhoWeHelp
          title="Specialist Accountants for Property Professionals"
          subtitle="With over 30 years of experience supporting property professionals, we provide clear, sector-specific advice designed to help you stay compliant, maximise returns and plan confidently for long-term success"
          clientTypes={propertyServices}
          bgColor="bg-gradient-to-br from-[#01458f] to-[#0052cc]"
          darkMode={true}
        />
      </div>

      <ServiceOverview
        leftContent={{
          title: 'Building Stronger Property\nInvestments With Confidence',
          description: "Whether you're an estate agent, landlord, property manager or investment company, we provide dependable financial expertise that supports long-term stability, compliance and growth. With specialist knowledge in both residential and commercial property, we help you navigate the sector with clarity and confidence.",
        }}
        rightContent={{
          stats: [
            { value: '30+', label: 'Years Experience' },
            { value: '500+', label: 'Property Clients' },
          ],
        }}
        imageUrl="https://imagedelivery.net/W93NbEGaswuledAsk5GMeA/9f1ba927-456c-443d-8ae6-f257836e2d00/public"
      />

      <CTASimple
        heading="Expert accounting for property professionals"
        supportingText="Specialist support for landlords, estate agents and property investors"
        buttonText="Get Started"
      />

      <div id="benefits">
        <ServiceBenefits title="Why Property Professionals Choose Us" items={benefits} knowledgeIconUrl="https://imagedelivery.net/W93NbEGaswuledAsk5GMeA/fa680a4f-c411-4da7-5327-e2eab6fe3e00/public" knowledgeIconIndex={0} />
      </div>

      <div id="testimonials">
        <ServiceTestimonials
          title="Client Testimonials"
          subtitle="Hear from property professionals we support across the UK"
          testimonials={testimonials}
        />
      </div>

      <CTASimple
        heading="Ready to maximise your property investment returns?"
        supportingText="Over 30 years of property sector accounting expertise"
        buttonText="Contact Us Today"
      />

      <div id="faqs">
        <ServiceFAQ
          title="Property Services FAQs"
          subtitle="Common questions about our property sector accountancy services"
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
