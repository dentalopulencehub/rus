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

export const metadata: Metadata = {
  title: 'Solicitors Accountants Birmingham | SRA Audits & Law Firm Accounting | RUS',
  description: 'Specialist accountants for solicitors and law firms. SRA audits, client money reporting, legal practice accounts, partnership tax. Birmingham legal sector accountants.',
  keywords: [
    'solicitors accountants Birmingham',
    'SRA audit accountants',
    'law firm accountants UK',
    'legal practice accounting',
    'client money accountants',
    'solicitors accounts rules',
    'legal partnership tax',
    'law firm compliance Birmingham',
  ],
  openGraph: {
    title: 'Solicitors & Law Firm Accountants | RUS Chartered Accountants',
    description: 'Specialist accountants for solicitors, barristers and legal practices.',
    type: 'website',
  },
  alternates: {
    canonical: 'https://rus.co.uk/sectors/solicitors',
  },
};

// Solicitor Services - EXACTLY 8 for design consistency
const solicitorServices = [
  {
    title: 'SRA Accounts Rules Audits',
    description: 'Specialist annual SRA Accounts Rules audits, thorough client account testing, internal controls review, breach identification and clear SRA reporting to ensure full regulatory compliance',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: 'Year-End Accounts & Tax Compliance',
    description: 'Statutory accounts and tax returns for partnerships, LLPs and limited companies, including partner profit allocations, drawings planning and director remuneration strategies',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    title: 'Management Accounts & Financial Monitoring',
    description: 'Monthly or quarterly management accounts, cashflow forecasting, WIP and debtor analysis, fee-earner performance reporting for informed operational decisions',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    title: 'Client Money & Internal Controls Advisory',
    description: 'Strengthening client account controls, segregation of duties, reconciliation procedures, fee transfers, billing processes and SRA inspection preparation',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
  },
  {
    title: 'Payroll & Partner Remuneration Strategies',
    description: 'Payroll management for employed staff, PAYE compliance, auto-enrolment pensions, partner drawings, tax reserves and comprehensive remuneration advice',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: 'Digital Accounting & Bookkeeping Solutions',
    description: 'MTD-compliant cloud accounting systems, digital record-keeping, integration with practice management systems and automated reporting to streamline workflows',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Business Structure & Incorporation Advice',
    description: 'LLP formation guidance, partnership to limited company transitions, incorporation of sole practitioners and group structure planning for growth and compliance',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    title: 'Business Acquisitions, Sales & Mergers',
    description: 'Due diligence, valuation support, financial modelling for acquisitions, exit planning, succession strategies and tax-efficient structuring for practice transactions',
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
    title: 'Over 30 Years Legal Sector Experience',
    description: 'Three decades supporting solicitors, law firms and legal practices with specialist accounting, audit and SRA compliance services tailored to the legal profession.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
  {
    title: 'SRA Accounts Rules Audit Specialists',
    description: 'Deep expertise in SRA Accounts Rules audits, client money handling, regulatory compliance and helping legal practices maintain robust financial controls.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: 'Regulatory Compliance & Risk Management Expertise',
    description: 'Clear guidance on SRA requirements, internal controls strengthening, breach identification and risk reduction to ensure full regulatory compliance.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
  },
  {
    title: 'Strategic Growth & Practice Development Support',
    description: 'Business structure advice, merger and acquisition support, succession planning and strategic insight for long-term firm development and expansion.',
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
    name: 'Richard Thornton',
    role: 'Senior Partner, Thornton & Associates Solicitors',
    content: 'RUS has been our trusted accountant for over twelve years. Their understanding of SRA requirements and client money handling is exceptional. The annual SRA audit process is efficient, thorough and gives our partners complete confidence in our compliance.',
    rating: 5,
  },
  {
    name: 'Emma Richardson',
    role: 'Managing Partner, Richardson Legal LLP',
    content: 'When we transitioned from a traditional partnership to an LLP structure, RUS guided us through every step. Their expertise in legal practice accounting and partner remuneration has been invaluable to our firm\'s growth.',
    rating: 5,
  },
  {
    name: 'James Mitchell',
    role: 'Sole Practitioner, Mitchell Family Law',
    content: 'As a sole practitioner, I need an accountant who understands the unique challenges of running a small legal practice. RUS provides clear, practical advice on SRA compliance, client money and tax planning that gives me peace of mind.',
    rating: 5,
  },
];

// 6 Frequently Asked Questions
const faqs = [
  {
    question: 'What is an SRA Accounts Rules audit and why do we need one?',
    answer: (
      <>
        An <Link href="/services/audit-assurance" className="text-[#01458f] underline hover:text-[#013a75] transition-colors">SRA Accounts Rules audit</Link> is a mandatory independent examination of how your law firm handles client money. The audit verifies compliance with the SRA Accounts Rules, which set out strict requirements for recording, handling and safeguarding client funds. The audit tests client account transactions, reviews internal controls, identifies any breaches or risks, and reports findings to the SRA. Most law firms holding client money must undergo an annual SRA audit. We specialise in conducting efficient, thorough SRA audits that strengthen your compliance and governance while minimising disruption to your practice.
      </>
    ),
  },
  {
    question: 'How often does our law firm need an SRA Accounts Rules audit?',
    answer: 'The frequency of SRA Accounts Rules audits depends on your firm\'s circumstances. Most firms holding client money require an annual audit covering the accounting period (typically 12 months). However, firms may need more frequent audits if they have been subject to previous breaches, are newly authorised, or are undergoing SRA interventions. Additionally, you must obtain an audit within six months of your accounting period end. We advise on your specific audit requirements and ensure timely completion to maintain SRA compliance and avoid regulatory penalties.',
  },
  {
    question: 'How should we manage client money and maintain proper segregation?',
    answer: 'Proper client money handling requires strict segregation between client accounts and office accounts. Client money must be held in designated client accounts at approved financial institutions, must be readily available for withdrawal, and must never be used for office expenses. You must maintain accurate client ledgers for each client matter, perform monthly reconciliations of client accounts, and ensure proper controls over transfers between client and office accounts. We advise on strengthening these controls, improving reconciliation processes, training staff on SRA requirements, and preparing for SRA inspections to reduce breach risks.',
  },
  {
    question: 'What is the difference between partner remuneration and drawings?',
    answer: 'Partner drawings are interim payments made to partners during the financial year, typically on a monthly basis. These are advances against anticipated annual profit share. Partner remuneration refers to the final profit allocation determined at year-end based on the partnership agreement, firm performance and individual partner contributions. Drawings should be managed carefully to ensure partners don\'t withdraw more than their eventual profit share, and tax reserves must be maintained for self-assessment payments. We provide partner remuneration planning, drawings advice and tax reserve calculations to help partners manage cashflow and tax liabilities effectively.',
  },
  {
    question: 'Should our law firm operate as an LLP or limited company?',
    answer: (
      <>
        Both LLPs and limited companies offer limited liability protection, but they have different tax and governance implications. LLPs are taxed as partnerships, with profits allocated to members who pay income tax and National Insurance personally, offering flexibility but higher NICs on profit share. Limited companies pay <Link href="/services/taxation-services" className="text-[#01458f] underline hover:text-[#013a75] transition-colors">Corporation Tax</Link> on profits (currently 19-25%), with directors taking salary and dividends, potentially reducing overall tax burden. LLPs have simpler governance and are more traditional in the legal sector. We assess your firm's size, profitability, partner circumstances and growth plans to recommend the optimal structure and support any transition process.
      </>
    ),
  },
  {
    question: 'What should we consider when buying or selling a law practice?',
    answer: (
      <>
        Law practice transactions require careful consideration of goodwill valuation (often based on recurring fee income), work-in-progress and lock-up (unbilled time and debtors), client retention and transfer arrangements, regulatory approval from the SRA, staff employment transfers (TUPE), professional indemnity insurance run-off cover, and tax-efficient deal structuring (asset vs share purchase). We provide due diligence services to identify financial and regulatory risks, <Link href="/services/business-advisory" className="text-[#01458f] underline hover:text-[#013a75] transition-colors">valuation support</Link> based on sector benchmarks, financial modelling for acquisition funding, and tax planning to minimise liabilities. Our experience ensures your transaction protects your interests and achieves the best outcome.
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

export default function SolicitorsSectorPage() {
  return (
    <>
      <ServiceHero
        title="Solicitors Sector Accountancy"
        subtitle="Specialist accountants for solicitors, law firms and legal professionals"
        description="With over 30 years of experience supporting legal practices, we provide tailored accountancy, audit and advisory services designed specifically for solicitors and law firms. The legal sector faces unique regulatory, financial and operational demands — from strict compliance with the Solicitors Regulation Authority (SRA) Accounts Rules to managing client money, partner remuneration and fluctuating case-income streams."
        imageUrl="https://imagedelivery.net/W93NbEGaswuledAsk5GMeA/5229bc88-da6f-46d2-25ed-4dfa6f9f0700/public"
      />

      <div id="services">
        <WhoWeHelp
          title="Specialist Accountants for Legal Practices"
          subtitle="Our deep understanding of the legal profession allows us to deliver precise, compliant and commercially focused support, helping firms strengthen governance, manage financial risk and operate with full confidence"
          clientTypes={solicitorServices}
          bgColor="bg-gradient-to-br from-[#01458f] to-[#0052cc]"
          darkMode={true}
        />
      </div>

      <ServiceOverview
        leftContent={{
          title: 'Supporting Legal Practices\nWith Clarity and Compliance',
          description: 'From sole practitioners to multi-partner LLPs, we provide dependable accounting and audit expertise that supports SRA compliance, governance and long-term success. With specialist knowledge in SRA Accounts Rules audits and client money handling, we help you navigate the legal sector with confidence.',
        }}
        rightContent={{
          stats: [
            { value: '30+', label: 'Years Experience' },
            { value: '150+', label: 'Legal Clients' },
          ],
        }}
        imageUrl="https://imagedelivery.net/W93NbEGaswuledAsk5GMeA/a4805ea0-8130-4be9-67cd-ecabb0043800/public"
      />

      {/* First CTA */}
      <section className="w-full flex items-center justify-center bg-white px-4 py-24 pt-32">
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
                Expert accounting for<br />legal practices
              </h2>

              <a href="/contact" className="relative inline-flex items-center justify-center px-32 py-2 bg-white text-gray-900 rounded-full text-base md:text-lg font-semibold hover:shadow-2xl hover:shadow-white/30 transition-all duration-300 overflow-hidden group">
                <div className="absolute inset-0 -z-10 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-md backdrop-saturate-150" />
                <div className="absolute inset-0 -z-20 bg-gradient-to-br from-white/30 via-white/10 to-white/30 rounded-full opacity-0 group-hover:opacity-40 transition-all duration-300" />
                <div className="absolute inset-0 -z-30 bg-white rounded-full transition-all duration-300 group-hover:bg-white/95" />
                <span className="relative z-10">Get Started</span>
              </a>

              <p className="text-white/90 text-sm md:text-base">
                Specialist SRA Accounts Rules audits, client money and legal practice accounting
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
                  <span>1190A-1194 Stratford Road, Hall Green, Birmingham, B28 8AB</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div id="benefits">
        <ServiceBenefits title="Why Legal Practices Choose Us" items={benefits} />
      </div>

      <div id="testimonials">
        <ServiceTestimonials
          title="Client Testimonials"
          subtitle="Hear from solicitors and law firms we support across the UK"
          testimonials={testimonials}
        />
      </div>

      {/* Second CTA */}
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
                Ready to ensure<br />SRA compliance?
              </h2>

              <a href="/contact" className="relative inline-flex items-center justify-center px-32 py-2 bg-white text-gray-900 rounded-full text-base md:text-lg font-semibold hover:shadow-2xl hover:shadow-white/30 transition-all duration-300 overflow-hidden group">
                <div className="absolute inset-0 -z-10 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-md backdrop-saturate-150" />
                <div className="absolute inset-0 -z-20 bg-gradient-to-br from-white/30 via-white/10 to-white/30 rounded-full opacity-0 group-hover:opacity-40 transition-all duration-300" />
                <div className="absolute inset-0 -z-30 bg-white rounded-full transition-all duration-300 group-hover:bg-white/95" />
                <span className="relative z-10">Contact Us Today</span>
              </a>

              <p className="text-white/90 text-sm md:text-base">
                Over 30 years of legal sector accounting and SRA Accounts Rules audit expertise
              </p>
            </div>
          </div>
        </div>
      </section>

      <div id="faqs">
        <ServiceFAQ
          title="Legal Sector FAQs"
          subtitle="Common questions about our solicitor and law firm accountancy services"
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
