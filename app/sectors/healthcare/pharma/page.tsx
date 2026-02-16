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
import { CTASimple } from '@/components/home/CTASimple';

export const metadata: Metadata = {
  title: 'Pharmacy Accountants Birmingham | Pharmacy Accounting Services | RUS',
  description: 'Specialist accountants for pharmacies and pharmacists. Pharmacy practice accounts, NHS contract compliance, pharmacy valuations, locum pharmacist accounting. 30+ years pharmacy expertise.',
  keywords: [
    'pharmacy accountants Birmingham',
    'pharmacist accountants UK',
    'community pharmacy accounting',
    'pharmacy valuations',
    'NHS pharmacy contract accounting',
    'locum pharmacist accountant',
    'superintendent pharmacist accounting',
  ],
  openGraph: {
    title: 'Pharmacy Accountants | RUS Chartered Accountants',
    description: 'Specialist accountants for pharmacies and pharmacists with over 30 years experience.',
    type: 'website',
  },
  alternates: {
    canonical: 'https://rus.co.uk/sectors/healthcare/pharma',
  },
};

const pharmaServices = [
  {
    title: 'Pharmacy Accounting',
    description: 'Complete accounting services for community pharmacies including year-end accounts, bookkeeping, payroll and compliance support',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    title: 'NHS Contract Compliance',
    description: 'Expert support with NHS pharmacy contract requirements, prescription dispensing income tracking and regulatory compliance',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
  {
    title: 'Pharmacy Valuations & Sales',
    description: 'Professional pharmacy valuations, due diligence support and strategic advice for buying and selling community pharmacies',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    ),
  },
  {
    title: 'Locum Pharmacist Accounting',
    description: 'Tailored accounting and tax services for locum pharmacists including self-assessment, expense claims and tax planning',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Stock & Inventory Management',
    description: 'Accounting support for pharmacy stock management, stock valuations and controlled drug register reconciliation',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    ),
  },
  {
    title: 'Multiple Pharmacy Ownership',
    description: 'Strategic support for pharmacy groups and multiple pharmacy owners including consolidation, expansion planning and efficiency optimization',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: 'Tax Planning',
    description: 'Strategic tax planning for pharmacy owners including remuneration optimization, pension contributions and capital allowances',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Regulatory & GPhC Compliance',
    description: 'Support with GPhC regulatory requirements, superintendent pharmacist compliance and pharmacy-specific regulations',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
];

const benefits = [
  {
    title: '30+ Years Pharmacy Expertise',
    description: 'Three decades supporting community pharmacies, pharmacy groups and pharmacists across the UK',
    icon: (
      // eslint-disable-next-line @next/next/no-img-element
      <img src="https://imagedelivery.net/W93NbEGaswuledAsk5GMeA/5704b5ca-3a45-41f8-52ae-427eadcc4200/public" alt="30+ Years Pharmacy Expertise" className="w-20 h-20 md:w-24 md:h-24" />
    ),
  },
  {
    title: 'NHS Contract Specialists',
    description: 'Deep understanding of NHS pharmacy contracts and prescription dispensing compliance',
    icon: (
      // eslint-disable-next-line @next/next/no-img-element
      <img src="https://imagedelivery.net/W93NbEGaswuledAsk5GMeA/0e632d3f-00c8-43b5-23ac-f6adbe4e1300/public" alt="NHS Contract Specialists" className="w-20 h-20 md:w-24 md:h-24" />
    ),
  },
  {
    title: 'Pharmacy Valuation Experience',
    description: 'Proven track record with pharmacy valuations and successful practice transactions',
    icon: (
      // eslint-disable-next-line @next/next/no-img-element
      <img src="https://imagedelivery.net/W93NbEGaswuledAsk5GMeA/f796cefc-8777-4677-95c2-71bb44b0ac00/public" alt="Pharmacy Valuation Experience" className="w-20 h-20 md:w-24 md:h-24" />
    ),
  },
  {
    title: 'Regulatory Knowledge',
    description: 'Pharmacy-specific regulatory understanding and GPhC compliance support',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
];

const testimonials = [
  {
    name: 'Pharmacy Owner',
    role: 'Community Pharmacy, Birmingham',
    content: 'RUS has been our accountant for over 10 years. Their knowledge of pharmacy accounting, NHS contracts and regulatory requirements is excellent. They provide clear advice and always respond quickly when we need support.',
    rating: 5,
  },
];

const faqs = [
  {
    question: 'Do you specialise in pharmacy accounting?',
    answer: 'Yes. We have over 30 years of experience supporting community pharmacies with accounts preparation, tax planning, NHS contract compliance and pharmacy valuations. Our sector knowledge covers stock management, regulatory requirements and business structure planning.',
  },
  {
    question: 'Can you help with buying or selling a pharmacy?',
    answer: (
      <>
        Absolutely. We provide <Link href="/services/business-advisory" className="text-[#01458f] underline hover:text-[#013a75] transition-colors">pharmacy valuations</Link>, due diligence, negotiation support and structured exit planning. Whether you are buying or selling a pharmacy, we guide you through the financial and regulatory implications.
      </>
    ),
  },
  {
    question: 'Do you support locum pharmacists with accounting and tax?',
    answer: 'Yes. We help locum pharmacists with self-assessment tax returns, expense claims, allowable deductions and tax planning. Our tailored approach ensures you maximize tax efficiency whilst meeting all compliance requirements.',
  },
  {
    question: 'Can you help with multiple pharmacy ownership?',
    answer: 'Yes. We support pharmacy groups and multiple pharmacy owners with consolidated accounts, expansion planning, efficiency optimization and strategic business advice tailored to the pharmacy sector.',
  },
];

const miniNavLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Benefits', href: '#benefits' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'FAQs', href: '#faqs' },
  { label: 'Insights', href: '#insights' },
];

export default function PharmaAccountingPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <ServiceHero
        title="Accountants for Pharmacies"
        subtitle="Expert support for pharmacy owners and pharmacists"
        description="For over 30 years, we have provided specialist accounting, tax and advisory services to pharmacy owners, superintendent pharmacists and locum pharmacists across the UK. Our deep understanding of NHS pharmacy contracts and regulatory requirements ensures you receive expert guidance tailored to the pharmacy sector."
        imageUrl="https://imagedelivery.net/W93NbEGaswuledAsk5GMeA/4154119c-1db7-42d5-f984-5ac46de58700/public"
      />

      <div id="services">
        <WhoWeHelp
          title="Specialist Pharmacy Accounting Services"
          subtitle="Community pharmacies face unique financial and regulatory challenges. Our experienced team provides comprehensive support across all aspects of pharmacy accounting and tax planning."
          clientTypes={pharmaServices}
          bgColor="bg-gradient-to-br from-[#01458f] to-[#0052cc]"
          darkMode={true}
        />
      </div>

      <ServiceOverview
        leftContent={{
          title: 'Supporting Pharmacy Professionals\nWith Confidence',
          description: 'Whether you are a community pharmacy owner, superintendent pharmacist, locum pharmacist or managing multiple pharmacies, we understand the financial complexities you face. Our specialist team provides clear, practical guidance to help you stay compliant, maximise profitability and plan for growth.',
        }}
        rightContent={{
          stats: [
            { value: '30+', label: 'Years Experience' },
            { value: '100+', label: 'Pharmacy Clients' },
          ],
        }}
        imageUrl="https://imagedelivery.net/W93NbEGaswuledAsk5GMeA/1ca0f44b-68c1-48e0-363a-52272db0cf00/public"
      />

      <ServiceFAQ
        title="Who We Support"
        subtitle="Dedicated accountancy support for pharmacy professionals"
        faqs={[
          {
            question: 'Independent Pharmacies',
            answer: (
              <>
                <p className="mb-4">Independent pharmacy owners must balance clinical services with retail operations and regulatory requirements. We provide end-to-end financial support, including:</p>
                <ul className="space-y-2 mb-4">
                  <li>• Year-end accounts and tax compliance</li>
                  <li>• Digital bookkeeping and stock tracking support</li>
                  <li>• Payroll and staff cost management</li>
                  <li>• NHS income reconciliation and FP34 analysis</li>
                  <li>• Cashflow forecasting, budgeting and financial planning</li>
                  <li>• Profitability reviews and margin analysis</li>
                  <li>• Advice on service expansion and commissioning opportunities</li>
                  <li>• Business structure planning and incorporation</li>
                </ul>
                <p>Our aim is to strengthen financial stability and help you run a compliant, profitable and sustainable pharmacy business.</p>
              </>
            ),
          },
          {
            question: 'Multi-Site Pharmacy Operators',
            answer: (
              <>
                <p className="mb-4">For pharmacy groups and multi-branch operators, we offer more advanced financial and strategic support, including:</p>
                <ul className="space-y-2 mb-4">
                  <li>• Consolidated accounts and group reporting</li>
                  <li>• Management accounts and performance dashboards</li>
                  <li>• Financial modelling and scenario planning</li>
                  <li>• Governance, internal controls and process improvement</li>
                  <li>• Payroll and HR budgeting across larger teams</li>
                  <li>• VAT and tax advice for group structures</li>
                  <li>• Assistance with mergers, acquisitions and restructuring</li>
                </ul>
                <p>We help growing pharmacy groups maintain efficiency, stability and strong financial oversight across all locations.</p>
              </>
            ),
          },
          {
            question: 'Locum Pharmacists',
            answer: (
              <>
                <p className="mb-4">Locum pharmacists often work across multiple pharmacies and income streams, making accurate record-keeping and tax planning essential. We support locums with:</p>
                <ul className="space-y-2 mb-4">
                  <li>• Setup advice including Limited Vs Self-Employed comparisons</li>
                  <li>• Company formations and advice on share structures</li>
                  <li>• Self-assessment tax returns</li>
                  <li>• Accounts preparation</li>
                  <li>• Remuneration (salary/dividend) advice for company users</li>
                  <li>• Digital accounting solutions - to get you MTD Ready</li>
                  <li>• Guidance on allowable expenses</li>
                  <li>• VAT considerations where applicable</li>
                </ul>
                <p>Our service simplifies the financial side of locum work and ensures full compliance with HMRC.</p>
              </>
            ),
          },
        ]}
      />

      <ServiceFAQ
        title="Buying or Selling a Pharmacy"
        subtitle="Specialist support throughout the entire process"
        faqs={[
          {
            question: "If You're Buying a Pharmacy",
            answer: (
              <>
                <p className="mb-2">We can assist with:</p>
                <ul className="space-y-2 mb-4">
                  <li>• Financial due diligence (NHS income, retail performance, staffing costs, stock levels)</li>
                  <li>• Pharmacy valuations and goodwill assessments</li>
                  <li>• Cashflow forecasts and lender-ready business plans</li>
                  <li>• Raising finance and supporting funding applications</li>
                  <li>• Reviewing NHS contract income and service provision</li>
                  <li>• Structuring the acquisition in a tax-efficient way</li>
                </ul>
                <p>Our goal is to help you understand the true financial picture and secure a sustainable investment.</p>
              </>
            ),
          },
          {
            question: "If You're Selling a Pharmacy",
            answer: (
              <>
                <p className="mb-2">We support sellers by:</p>
                <ul className="space-y-2 mb-4">
                  <li>• Preparing the business for sale and tidying financial records</li>
                  <li>• Valuation guidance and performance benchmarking</li>
                  <li>• Tax planning ahead of the sale</li>
                  <li>• Ensuring eligibility for Business Asset Disposal Relief (BADR) where relevant</li>
                  <li>• Transition planning and succession support</li>
                  <li>• Working alongside legal and commercial agents during due diligence</li>
                </ul>
                <p>We ensure you are well-prepared and positioned for the best possible outcome.</p>
              </>
            ),
          },
        ]}
      />

      <div id="benefits">
        <ServiceBenefits title="Why Pharmacy Professionals Choose Us" items={benefits} />
      </div>

      <div id="testimonials">
        <ServiceTestimonials
          title="Client Testimonials"
          subtitle="Hear from pharmacy professionals we support across the UK"
          testimonials={testimonials}
        />
      </div>

      <CTASimple
        heading="Ready to work with specialist pharmacy accountants?"
        supportingText="Three decades of pharmacy sector expertise"
        buttonText="Get Started"
      />

      <div id="faqs">
        <ServiceFAQ
          title="Pharmacy Accounting FAQs"
          subtitle="Common questions about our pharmacy accounting services"
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
