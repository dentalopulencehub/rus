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
  title: 'Construction Accountants Birmingham | CIS Specialists | Contractor Accounting | RUS',
  description: 'Specialist accountants for construction businesses. CIS returns, reverse charge VAT, subcontractor verification, project accounting. Birmingham construction accountants.',
  keywords: [
    'construction accountants Birmingham',
    'CIS accountants UK',
    'CIS returns specialists',
    'contractor accountants Birmingham',
    'subcontractor accounting',
    'reverse charge VAT construction',
    'construction industry scheme',
    'builder accountants Birmingham',
  ],
  openGraph: {
    title: 'Construction Sector Accountants | RUS Chartered Accountants',
    description: 'Specialist accountants for contractors, subcontractors and construction businesses.',
    type: 'website',
  },
  alternates: {
    canonical: 'https://rus.co.uk/sectors/construction',
  },
};

// Construction Services - EXACTLY 8 for design consistency
const constructionServices = [
  {
    title: 'Year-End Accounts & Tax Returns',
    description: 'Accurate, compliant accounts for sole traders, partnerships, limited companies and LLPs, ensuring all allowable deductions and reliefs are claimed to minimise tax liabilities',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    title: 'CIS (Construction Industry Scheme) Returns',
    description: 'Monthly CIS returns to HMRC, subcontractor verification, CIS deduction calculations, deduction statements and full compliance support to avoid penalties and protect cashflow',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: 'VAT Advice & Compliance',
    description: 'Expert guidance on construction VAT complexities including reverse charge VAT, zero-rated and reduced-rate works, new build vs refurbishment and mixed-rate claims',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2z" />
      </svg>
    ),
  },
  {
    title: 'Payroll & Workforce Management',
    description: 'Weekly or monthly payroll processing, auto-enrolment pensions, holiday and statutory pay, subcontractor labour allocation and secure employee payslip apps',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: 'Management Accounts & Cashflow Forecasting',
    description: 'Monthly or quarterly management accounts, job costing analysis, cashflow forecasts, budgeting, project profitability reviews and work-in-progress reporting',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    title: 'Digital Accounting & Bookkeeping',
    description: 'MTD-compliant cloud accounting systems with Xero, QuickBooks, Sage and FreeAgent for real-time project cost tracking and efficient invoice management',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Business Structure & Tax Planning',
    description: 'Incorporation advice, profit extraction strategies, IR35 and employment status planning, capital allowances for vehicles and equipment, and expansion guidance',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Business Acquisitions & Sales',
    description: 'Business valuations, due diligence, financial modelling, funding support, tax-efficient deal structuring and succession planning for construction businesses',
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
    title: 'Over 30 Years Construction Sector Experience',
    description: 'Three decades supporting contractors, subcontractors, builders and construction businesses with specialist accounting, CIS and VAT compliance services.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
  {
    title: 'Specialist CIS & Construction VAT Expertise',
    description: 'In-depth understanding of CIS compliance, reverse charge VAT, zero-rated works and construction-specific tax rules to keep your business compliant and efficient.',
    icon: (
      // eslint-disable-next-line @next/next/no-img-element
      <img src="https://imagedelivery.net/W93NbEGaswuledAsk5GMeA/6a486339-8e63-493b-82da-796de2612400/public" alt="Specialist CIS & VAT Expertise" className="w-20 h-20 md:w-24 md:h-24" />
    ),
  },
  {
    title: 'Cashflow Management Focus',
    description: 'Strong emphasis on cashflow forecasting, job costing, work-in-progress reporting and financial stability to help you manage project-based income effectively.',
    icon: (
      // eslint-disable-next-line @next/next/no-img-element
      <img src="https://imagedelivery.net/W93NbEGaswuledAsk5GMeA/0e632d3f-00c8-43b5-23ac-f6adbe4e1300/public" alt="Cashflow Management Focus" className="w-20 h-20 md:w-24 md:h-24" />
    ),
  },
  {
    title: 'All Sizes - Sole Traders to Large Contractors',
    description: 'Support for construction businesses of all sizes, from sole subcontractors and tradespeople to growing contractors and multi-site construction companies.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM14 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 16a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-3zM14 16a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1h-4a1 1 0 01-1-1v-3z" />
      </svg>
    ),
  },
];

// 3 Client Testimonials
const testimonials = [
  {
    name: 'Michael Davies',
    role: 'Building Contractor Director',
    content: 'RUS has handled our CIS returns and accounts for over eight years. Their construction sector knowledge is outstanding, and they always keep us compliant while minimising our tax burden. Highly recommended for any contractor.',
    rating: 5,
  },
  {
    name: 'Robert Palmer',
    role: 'Electrical Services Owner',
    content: 'Managing CIS deductions used to be a headache until we partnered with RUS. Their team understands construction cashflow challenges and provides practical, timely support that keeps our business running smoothly.',
    rating: 5,
  },
  {
    name: 'Jennifer Clarke',
    role: 'Property Developments Finance Director',
    content: 'From job costing to complex VAT advice on mixed-use developments, RUS provides the specialist construction accounting expertise we need. Their cashflow forecasting has been invaluable during project phases.',
    rating: 5,
  },
];

// 6 Frequently Asked Questions
const faqs = [
  {
    question: 'What is CIS and how does it work for construction businesses?',
    answer: (
      <>
        The Construction Industry Scheme (CIS) is HMRC's system for collecting tax from subcontractors working in construction. Under CIS, contractors must verify subcontractors with HMRC, deduct 20% (or 30% if not verified) from payments for labour, and report these deductions monthly via <Link href="/services/payroll" className="text-[#01458f] underline hover:text-[#013a75] transition-colors">CIS returns</Link>. Subcontractors can offset these deductions against their tax and National Insurance liabilities. We handle all aspects of CIS compliance including verification, monthly returns, deduction calculations and year-end reconciliation to ensure accuracy and avoid penalties.
      </>
    ),
  },
  {
    question: 'How does reverse charge VAT work in construction?',
    answer: (
      <>
        Since March 2021, the domestic reverse charge applies to most construction services where both the customer and supplier are VAT-registered and CIS-registered. Instead of the supplier charging VAT, the customer accounts for it through their VAT return. This prevents VAT fraud but requires careful administration. We help you identify which supplies fall under reverse charge, ensure correct VAT treatment on invoices, maintain proper records and complete <Link href="/services/taxation-services" className="text-[#01458f] underline hover:text-[#013a75] transition-colors">VAT returns</Link> accurately to avoid compliance issues.
      </>
    ),
  },
  {
    question: 'How can I better manage cashflow in my construction business?',
    answer: 'Construction cashflow challenges arise from project-based income, retention payments, CIS deductions and payment delays. We provide monthly management accounts showing your true financial position, detailed job costing to identify profitable projects, cashflow forecasting that accounts for retention releases and staged payments, and work-in-progress reporting. This gives you visibility of upcoming income and costs, helping you plan labour, materials and overheads effectively.',
  },
  {
    question: 'What capital allowances can construction businesses claim?',
    answer: 'Construction businesses can claim capital allowances on qualifying assets including commercial vehicles (vans, lorries), plant and machinery (excavators, mixers, tools), site equipment and cabins, computer equipment and software, and fixtures in business premises. The Annual Investment Allowance (AIA) allows 100% first-year relief on qualifying expenditure up to £1 million. We identify all eligible assets, maximise your capital allowance claims and ensure you receive full tax relief on business investments.',
  },
  {
    question: 'Do IR35 rules affect construction workers?',
    answer: 'IR35 rules can affect construction contractors operating through personal service companies (PSCs). If you work for a medium or large private sector client or any public sector client, they must determine your employment status for tax purposes. If caught by IR35, you may be taxed as an employee despite working through your company. We advise on IR35 status, help you structure contracts to demonstrate genuine self-employment, support with status determinations and ensure tax compliance whether inside or outside IR35.',
  },
  {
    question: 'When should a construction business incorporate?',
    answer: (
      <>
        Incorporation may be beneficial when your annual profits exceed £30,000-£40,000, as limited companies typically face lower effective tax rates than sole traders. Other reasons include limiting personal liability, easier access to business funding, enhanced professional credibility with larger clients, and flexible profit extraction through dividends and salary. We assess your circumstances, model the tax implications of incorporation, handle the <Link href="/services/company-formation" className="text-[#01458f] underline hover:text-[#013a75] transition-colors">incorporation process</Link> and provide ongoing company accounting and tax planning.
      </>
    ),
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

export default function ConstructionSectorPage() {
  return (
    <>
      <ServiceHero
        title="Construction Sector Accountancy"
        subtitle="Specialist accountants for contractors, subcontractors and construction businesses"
        description="The construction industry faces unique financial, commercial and regulatory challenges — from managing cashflow and project-based costs to navigating CIS compliance, complex VAT rules and fluctuating labour requirements. With over 30 years of experience supporting construction businesses of all sizes, we provide clear, reliable and industry-focused accountancy services that help you stay compliant, profitable and in control."
        imageUrl="https://imagedelivery.net/W93NbEGaswuledAsk5GMeA/0b8ccbe2-13e3-4d02-7c97-863de3764b00/public"
      />

      <div id="services">
        <WhoWeHelp
          title="Specialist Accountants for the Construction Sector"
          subtitle="Whether you are a sole trader subcontractor, a growing contractor, or a multi-site construction business, our specialist support ensures your finances are managed efficiently and accurately, leaving you free to focus on delivering projects"
          clientTypes={constructionServices}
          bgColor="bg-gradient-to-br from-[#01458f] to-[#0052cc]"
          darkMode={true}
        />
      </div>

      <ServiceOverview
        leftContent={{
          title: 'Building Strong Financial\nFoundations for Construction',
          description: 'From sole subcontractors to large contractors, we provide dependable accounting expertise that supports compliance, profitability and growth. With specialist knowledge in CIS, construction VAT and cashflow management, we help you navigate the sector with confidence.',
        }}
        rightContent={{
          stats: [
            { value: '30+', label: 'Years Experience' },
            { value: '300+', label: 'Construction Clients' },
          ],
        }}
        imageUrl="https://imagedelivery.net/W93NbEGaswuledAsk5GMeA/bf2160d4-2054-4888-5415-24252e676c00/public"
      />

      <CTASimple
        heading="Expert accounting for construction businesses"
        supportingText="Specialist CIS compliance, construction VAT and cashflow management for contractors"
        buttonText="Get Started"
      />

      <div id="benefits">
        <ServiceBenefits title="Why Construction Businesses Choose Us" items={benefits} knowledgeIconUrl="https://imagedelivery.net/W93NbEGaswuledAsk5GMeA/f9011462-d707-49f5-82f3-4af3fa191400/public" knowledgeIconIndex={0} />
      </div>

      <div id="testimonials">
        <ServiceTestimonials
          title="Client Testimonials"
          subtitle="Hear from construction businesses we support across the UK"
          testimonials={testimonials}
        />
      </div>

      <CTASimple
        heading="Ready to streamline construction accounting?"
        supportingText="Over 30 years of construction sector accounting and CIS expertise"
        buttonText="Contact Us Today"
      />

      <div id="faqs">
        <ServiceFAQ
          title="Construction Sector FAQs"
          subtitle="Common questions about our construction accountancy services"
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
