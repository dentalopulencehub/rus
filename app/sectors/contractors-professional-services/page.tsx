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
  title: 'Contractor Accountants Birmingham | IR35, PSC & Freelancer Tax | RUS',
  description: 'Specialist accountants for contractors, freelancers and consultants. IR35 compliance, PSC accounting, contractor tax planning, umbrella alternatives. Birmingham contractor accountants.',
  keywords: [
    'contractor accountants Birmingham',
    'IR35 accountants UK',
    'PSC accountants Birmingham',
    'freelancer tax specialists',
    'limited company contractor',
    'IT contractor accountants',
    'consultant accountants Birmingham',
    'umbrella company alternatives',
  ],
  openGraph: {
    title: 'Contractor & Professional Services Accountants | RUS Chartered Accountants',
    description: 'Specialist accountants for contractors, freelancers and professional consultants.',
    type: 'website',
  },
  alternates: {
    canonical: 'https://rus.co.uk/sectors/contractors-professional-services',
  },
};

// Contractor Services - EXACTLY 8 for design consistency
const contractorServices = [
  {
    title: 'Limited Company Setup & Management',
    description: 'Company formation, choosing the right structure, IR35-compliant contract guidance, SPV creation for long-term projects and ongoing company administration',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    title: 'IR35 Support & Status Reviews',
    description: 'Contract reviews, working practice assessments, HMRC defence support, advice on operating inside or outside IR35, and guidance on avoiding risks and penalties',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: 'Year-End Accounts & Tax Returns',
    description: 'Limited company accounts preparation, Corporation Tax returns, self-assessment tax returns and partnership tax returns for multi-partner contractor teams',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    title: 'VAT Advice & Registration',
    description: 'VAT registration support, Flat Rate Scheme guidance, reverse charge VAT for IT and engineering, international services VAT and quarterly submissions',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2z" />
      </svg>
    ),
  },
  {
    title: 'Digital Accounting & Bookkeeping',
    description: 'Cloud accounting solutions including Xero, QuickBooks, FreeAgent and Sage to track expenses, invoice clients and maintain accurate financial records',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Payroll & Director Remuneration',
    description: 'Monthly director payroll, dividend planning, P11D benefits reporting and strategic salary versus dividend tax planning to maximise take-home pay',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: 'Expense Planning & Allowable Costs',
    description: 'Maximise claims on travel and mileage, home office expenses, equipment and software, training, professional development and business insurance',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <circle cx="12" cy="12" r="9" />
        <text x="12" y="17" fontSize="12" fill="currentColor" stroke="none" textAnchor="middle" fontWeight="bold">£</text>
      </svg>
    ),
  },
  {
    title: 'Business Planning & Cashflow Forecasts',
    description: 'Cashflow forecasting, project-based financial planning, income smoothing strategies and budgeting with tax reserve planning for contractors',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
];

// 4 Key Benefits
const benefits = [
  {
    title: 'Over 30 Years Supporting Contractors',
    description: 'Three decades helping contractors across IT, engineering, finance and consultancy sectors with specialist accountancy, IR35 and limited company services.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
  {
    title: 'IR35 & Limited Company Structure Specialists',
    description: 'Deep expertise in IR35 contract reviews, working practice assessments, HMRC defence and tax-efficient limited company structures for contractors.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
  },
  {
    title: 'Cloud-Based Real-Time Financial Management',
    description: 'Modern digital accounting solutions with Xero, QuickBooks and FreeAgent for instant visibility of expenses, invoicing and tax positions.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
  },
  {
    title: 'Proactive Tax Planning & Take-Home Pay Maximisation',
    description: 'Strategic dividend and salary planning, expense optimisation and cashflow management to maximise your take-home pay compliantly.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
];

// 3 Client Testimonials
const testimonials = [
  {
    name: 'David Foster',
    role: 'IT Contractor & Software Developer',
    content: 'RUS has been managing my limited company for five years. Their IR35 advice gave me confidence to accept contracts worry-free, and their dividend planning has saved me thousands in tax. Highly recommended for any contractor.',
    rating: 5,
  },
  {
    name: 'Sarah Mitchell',
    role: 'Engineering Consultant',
    content: 'Switching from umbrella to limited company seemed daunting until I found RUS. They set everything up, explained the tax benefits clearly, and handle all my accounts and VAT. Professional, responsive and genuinely helpful.',
    rating: 5,
  },
  {
    name: 'James Chen',
    role: 'Financial Contractor & Interim FD',
    content: 'Working across multiple contracts means complex finances. RUS keeps everything organised with cloud accounting, handles my quarterly VAT, and provides proactive tax planning. They understand contractors and make it all straightforward.',
    rating: 5,
  },
];

// 6 Frequently Asked Questions
const faqs = [
  {
    question: 'What is IR35 and how does it affect contractors?',
    answer: 'IR35 (also known as the off-payroll working rules) is tax legislation designed to identify "disguised employment" where contractors work through a limited company but HMRC considers them functionally equivalent to employees. If caught by IR35, you must pay income tax and National Insurance as if you were employed, losing many limited company tax benefits. The client now determines your IR35 status for medium and large organisations. We review contracts, assess working practices, advise on risk, and help you structure arrangements to operate outside IR35 compliantly where possible.',
  },
  {
    question: 'Should I operate as a sole trader or set up a limited company?',
    answer: 'Most contractors earning over £30,000-£40,000 annually benefit from operating through a limited company due to lower overall tax rates through dividend and salary strategies. Limited companies also offer limited liability protection, professional credibility with clients, and easier expense management. However, they bring compliance obligations including Companies House filings, Corporation Tax returns and payroll. We model both scenarios for your expected earnings, advise on the most tax-efficient structure, and support company formation and ongoing administration if beneficial.',
  },
  {
    question: 'How should contractors handle expenses and what can be claimed?',
    answer: 'Contractors can claim allowable business expenses including travel to temporary workplaces (not regular offices), mileage if using personal vehicles for business, home office costs (proportion of utilities, rent/mortgage interest, council tax), professional subscriptions and memberships, equipment and software necessary for work, business insurance and accountancy fees, and training to maintain or update skills. Expenses must be wholly and exclusively for business purposes. We ensure you claim everything eligible, maintain proper records and maximise tax relief compliantly.',
  },
  {
    question: 'What is the optimal salary and dividend split for contractors?',
    answer: 'The optimal remuneration strategy typically involves taking a small salary (often £12,570 annually to utilise the personal allowance without triggering National Insurance) and extracting remaining profits as dividends taxed at lower rates (8.75%, 33.75% or 39.35% depending on total income). This minimises National Insurance contributions while maintaining entitlement to state benefits. However, optimal splits vary based on personal circumstances, pension contributions, other income and changes to tax rates. We review your situation annually and recommend the most tax-efficient extraction strategy.',
  },
  {
    question: 'Do contractors need to register for VAT?',
    answer: 'You must register for VAT if your taxable turnover exceeds £90,000 in any 12-month period (2024/25 threshold). For contractors, this typically means your invoiced contract fees. VAT registration requires charging 20% VAT on invoices (which you pay to HMRC quarterly) but allows reclaiming VAT on business expenses. The Flat Rate Scheme offers simplified administration with lower effective rates for service-based contractors. Some contractors choose voluntary registration to reclaim VAT on significant purchases. We advise on registration requirements, optimal VAT schemes, and handle all submissions.',
  },
  {
    question: 'How do contractors manage cashflow between contracts?',
    answer: 'Contractors face cashflow challenges from contract gaps, delayed client payments and irregular income. We recommend maintaining 3-6 months\' running costs as reserves, setting aside funds for quarterly VAT and annual tax payments, using invoice financing if experiencing significant payment delays, budgeting conservatively based on guaranteed contract length, and planning dividend withdrawals around confirmed income rather than invoiced amounts. We provide cashflow forecasting, tax reserve planning, and budgeting support to help you manage income variability and maintain financial stability between contracts.',
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

export default function ContractorsProfessionalServicesPage() {
  return (
    <>
      <ServiceHero
        title="Contractors & Professional Services Accountancy"
        subtitle="Specialist accountants for contractors, consultants and professional service providers"
        description="The contracting and professional services sector has grown significantly in recent years, with more individuals choosing flexible working arrangements across IT, engineering, finance, consultancy and other specialist areas. But with this shift comes complexity — from IR35 considerations and varied income streams to managing expenses, VAT and the administrative demands of running your own limited company."
        imageUrl="https://imagedelivery.net/W93NbEGaswuledAsk5GMeA/61083dd0-5911-4ccc-b5e5-2af3ee32ad00/public"
      />

      <div id="services">
        <WhoWeHelp
          title="Specialist Accountants for Contractors & Consultants"
          subtitle="With over 30 years of experience supporting contractors and professional consultants, we provide clear, compliant and sector-specific accountancy services that help you focus on your work while we handle the financial side with accuracy and care"
          clientTypes={contractorServices}
          bgColor="bg-gradient-to-br from-[#01458f] to-[#0052cc]"
          darkMode={true}
        />
      </div>

      <ServiceOverview
        leftContent={{
          title: 'Supporting Contractors to\nMaximise Take-Home Pay',
          description: 'From IT contractors to financial consultants, we provide dependable accounting expertise that supports IR35 compliance, tax efficiency and growth. With specialist knowledge in limited company structures, VAT and contractor tax planning, we help you navigate the sector with confidence.',
        }}
        rightContent={{
          stats: [
            { value: '30+', label: 'Years Experience' },
            { value: '400+', label: 'Contractor Clients' },
          ],
        }}
        imageUrl="https://imagedelivery.net/W93NbEGaswuledAsk5GMeA/aee523d6-a6e2-41e2-5d74-88d3053f1600/public"
      />

      <CTASimple
        heading="Expert accounting for contractors and consultants"
        supportingText="Specialist IR35 support, limited company management and contractor tax planning"
        buttonText="Get Started"
      />

      <div id="benefits">
        <ServiceBenefits title="Why Contractors Choose Us" items={benefits} />
      </div>

      <div id="testimonials">
        <ServiceTestimonials
          title="Client Testimonials"
          subtitle="Hear from contractors and consultants we support across the UK"
          testimonials={testimonials}
        />
      </div>

      <CTASimple
        heading="Ready to optimise contractor tax planning?"
        supportingText="Over 30 years of contractor accounting and IR35 expertise"
        buttonText="Contact Us Today"
      />

      <div id="faqs">
        <ServiceFAQ
          title="Contractor FAQs"
          subtitle="Common questions about our contractor and consultant accountancy services"
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
