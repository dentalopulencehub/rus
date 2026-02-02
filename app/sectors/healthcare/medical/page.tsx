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
  title: 'Medical Accountants Birmingham | GP, Consultant & Locum Accounting | RUS',
  description: 'Specialist accountants for medical professionals. GP practice accounts, NHS pensions, consultant tax planning, locum doctor accounting. 30+ years medical expertise. Birmingham based.',
  keywords: [
    'GP accountants Birmingham',
    'medical accountants UK',
    'NHS pension accountants',
    'locum GP accountant',
    'consultant accountants',
    'medical practice accounting',
    'PCN accounting',
    'practice manager accountants',
  ],
  openGraph: {
    title: 'Medical Accountants | RUS Chartered Accountants',
    description: 'Specialist accountants for medical professionals with over 30 years experience.',
    type: 'website',
  },
  alternates: {
    canonical: 'https://rus.co.uk/sectors/healthcare/medical',
  },
};

const medicalServices = [
  {
    title: 'GP Practice Accounting',
    description: 'Complete accounting services for GP practices including partnership accounts, profit allocation, bookkeeping and year-end compliance',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    title: 'NHS Pensions & Superannuation',
    description: 'Expert NHS Pension Scheme guidance, annual superannuation certificates, Type 1 and Type 2 forms and pension tax charge planning',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: 'Locum Doctor Accounting',
    description: 'Tailored accounting and tax services for locum GPs and doctors including expense claims, self-assessment and tax planning',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Consultant Tax Planning',
    description: 'Strategic tax planning for hospital consultants including private practice income, expense optimization and pension contributions',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'PCN Accounting & Reporting',
    description: 'Primary Care Network financial statements, income tracking, claim management, ARRS payroll and governance support',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    title: 'Partnership Changes & Mergers',
    description: 'Strategic guidance on partner admissions and retirements, profit allocations, practice mergers and incorporation planning',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: 'Private Practice Support',
    description: 'Accounts, tax planning and business structure advice for private medical practitioners and independent clinics',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <circle cx="12" cy="12" r="9" />
        <text x="12" y="17" fontSize="12" fill="currentColor" stroke="none" textAnchor="middle" fontWeight="bold">£</text>
      </svg>
    ),
  },
  {
    title: 'Practice Succession Planning',
    description: 'Strategic succession planning, practice valuations and buying and selling support for GP practices',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    ),
  },
];

const whoCaterTo = [
  {
    title: 'GP Practices',
    description: 'Partnership accounting, tax compliance and strategic planning for GP surgeries',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    title: 'Locum GPs',
    description: 'Self-assessment, expense claims and tax planning for locum doctors',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Portfolio Doctors',
    description: 'Multi-income management and tax planning for doctors with diverse work portfolios',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: 'Consultants & Specialists',
    description: 'Private practice accounts and strategic tax planning for hospital consultants',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Primary Care Networks (PCNs)',
    description: 'Financial statements, income tracking and ARRS payroll support',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    title: 'Super Partnerships & Federations',
    description: 'Consolidated accounts and governance for large healthcare organisations',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: 'Private Practitioners',
    description: 'Business structure planning and tax compliance for private medical practices',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
  },
  {
    title: 'Private Clinics',
    description: 'Financial management and compliance for private medical clinics and healthcare facilities',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
];

const nhsPensions = [
  {
    title: 'NHS Pension Scheme Guidance',
    description: 'Expert advice on NHS pension schemes and contribution calculations',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: 'Annual Superannuation Certificates',
    description: 'Preparation and submission of annual superannuation certificates',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    title: 'Type 1 & Type 2 Forms',
    description: 'Accurate completion of Type 1 and Type 2 pension forms',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Pension Tax Charge Planning',
    description: 'Strategic planning to minimize annual and lifetime allowance tax charges',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <circle cx="12" cy="12" r="9" />
        <text x="12" y="17" fontSize="12" fill="currentColor" stroke="none" textAnchor="middle" fontWeight="bold">£</text>
      </svg>
    ),
  },
  {
    title: 'Locum Pension Contributions',
    description: 'Managing pension contributions for locum GPs and doctors',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: 'Pension Record Reviews',
    description: 'Reviewing pension records for accuracy and identifying potential issues',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
  },
  {
    title: 'Annual Allowance Planning',
    description: 'Maximizing annual allowance usage and avoiding tax charges',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    title: 'Retirement Planning',
    description: 'NHS pension retirement options and tax-efficient withdrawal strategies',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
];

const benefits = [
  {
    title: '30+ Years Medical Expertise',
    description: 'Three decades supporting GPs, consultants, locums and medical practitioners across the UK',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
  {
    title: 'NHS & Private Income Specialists',
    description: 'Deep understanding of NHS structures, private practice models and mixed-income environments',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'NHS Pension Experts',
    description: 'Accurate NHS pension support, superannuation certificates and pension tax planning',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: 'Regulatory Knowledge',
    description: 'Medical-specific regulatory understanding and CQC compliance support',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
];

const testimonials = [
  {
    name: 'Dr Sarah Mitchell',
    role: 'GP Partner',
    content: 'RUS has supported our practice for over 15 years. Their understanding of NHS structures, partnership accounting and pension compliance is exceptional. They provide clear, practical advice that helps us make informed decisions.',
    rating: 5,
  },
  {
    name: 'Dr James Chen',
    role: 'Consultant Orthopaedic Surgeon',
    content: 'Managing private practice income alongside NHS employment can be complex. RUS makes it straightforward. Their tax planning advice has been invaluable, and their knowledge of consultant-specific financial matters is first-class.',
    rating: 5,
  },
];

const faqs = [
  {
    question: 'Do you specialise in NHS pension and superannuation support?',
    answer: 'Yes. We provide expert NHS Pension Scheme guidance, including annual superannuation certificates, Type 1 and Type 2 forms, pension contribution calculations and pension tax charge planning. Our team ensures your contributions are correct, deadlines are met and your pension position is fully understood.',
  },
  {
    question: 'Can you support GP practices with partnership changes?',
    answer: 'Absolutely. We provide strategic advice on partner admissions and retirements, profit-sharing arrangements, partnership agreements and practice mergers. Our experience with GP partnerships ensures smooth transitions and tax-efficient structures.',
  },
  {
    question: 'Do you work with locum doctors?',
    answer: 'Yes. We support locum GPs and doctors with accounts preparation, self-assessment tax returns, expense claims, allowable deductions and tax planning. Whether you work as a locum or run a private practice, we provide tailored financial support.',
  },
  {
    question: 'Can you help with Primary Care Network (PCN) accounting?',
    answer: (
      <>
        Yes. We provide PCN financial statements, income tracking and allocation, claim management, budgeting and forecasting, ARRS employment and <Link href="/services/payroll" className="text-[#01458f] underline hover:text-[#013a75] transition-colors">payroll support</Link> and governance advice.
      </>
    ),
  },
];

const miniNavLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Benefits', href: '#benefits' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'FAQs', href: '#faqs' },
  { label: 'Insights', href: '#insights' },
];

export default function MedicalAccountingPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <ServiceHero
        title="Accountants for Medical Professionals"
        subtitle="Expert support for GPs, consultants and locum doctors"
        description="For over 30 years, we have provided specialist accounting, tax and advisory services to medical professionals across the UK. Our deep understanding of NHS structures, pension schemes and medical practice finances ensures you receive expert guidance tailored to your specific needs."
        imageUrl="https://imagedelivery.net/W93NbEGaswuledAsk5GMeA/0f6563c9-faf5-46dc-f2d5-d89871d54e00/public"
      />

      <div id="services">
        <WhoWeHelp
          title="Specialist Medical Accounting Services"
          subtitle="Medical professionals face unique financial challenges. Our experienced team provides comprehensive support across all aspects of medical accounting and tax planning."
          clientTypes={medicalServices}
          bgColor="bg-gradient-to-br from-[#01458f] to-[#0052cc]"
          darkMode={true}
        />
      </div>

      <ServiceOverview
        leftContent={{
          title: 'Supporting Medical Professionals\nWith Confidence',
          description: 'Whether you are a GP partner, hospital consultant, locum doctor or running a private practice, we understand the financial complexities you face. Our specialist team provides clear, practical guidance to help you stay compliant, maximize tax efficiency and plan for the future.',
        }}
        rightContent={{
          stats: [
            { value: '30+', label: 'Years Experience' },
            { value: '500+', label: 'Medical Clients' },
          ],
        }}
        imageUrl="https://imagedelivery.net/W93NbEGaswuledAsk5GMeA/48004466-5bc2-4e04-27a5-f4c326009e00/public"
      />

      <WhoWeHelp
        title="Who We Cater To"
        subtitle="Quick snapshot of the medical professionals we support with specialist accounting services"
        clientTypes={whoCaterTo}
        bgColor="bg-gradient-to-br from-[#01458f] to-[#0052cc]"
        darkMode={true}
      />

      <ServiceFAQ
        title="Who We Support"
        subtitle="Expert accounting support for medical professionals at every stage"
        faqs={[
          {
            question: 'GP Practices',
            answer: (
              <>
                <p className="mb-4">Running a GP practice comes with its own set of financial and operational challenges. From managing practice accounts and meeting tax requirements to planning for growth, partner changes and long-term succession, specialist support is essential. As a specialist firm, we provide GP practices with expert guidance on accounts, tax, NHS pensions and practice planning, helping surgeries operate efficiently and with complete confidence.</p>
                <p className="mb-2">We provide a full range of accounting and advisory services for GP practices, including:</p>
                <ul className="space-y-2 mb-4">
                  <li>• Year-end accounts, partnership tax returns and partner self-assessment preparation</li>
                  <li>• Drawings planning and partner profit allocations</li>
                  <li>• Cashflow forecasting and budgeting</li>
                  <li>• Practice bookkeeping and payroll</li>
                  <li>• Support with PCN income, reimbursements and claims</li>
                  <li>• Advice on partner changes, mergers and incorporations</li>
                  <li>• Benchmarking and performance analysis</li>
                </ul>
                <p>Our aim is to strengthen financial stability while helping practices manage increasing regulatory and operational demands.</p>
              </>
            ),
          },
          {
            question: 'Locum GPs',
            answer: (
              <>
                <p className="mb-4">Working as a locum GP provides professional independence, but the role often entails fluctuating income and specific tax rules. We offer practical financial management services, allowing you to concentrate fully on your clinical work.</p>
                <p className="mb-2">We support locums with simple, stress-free financial management, including:</p>
                <ul className="space-y-2 mb-4">
                  <li>• Setup advice including Limited Vs Self-Employed comparisons</li>
                  <li>• Company formations and advice on share structures</li>
                  <li>• Accounts preparation</li>
                  <li>• Remuneration (salary/dividend) advice for company users</li>
                  <li>• Self-assessment tax returns</li>
                  <li>• Locum record-keeping and bookkeeping setup</li>
                  <li>• Expense claims and allowable deductions</li>
                  <li>• VAT guidance where applicable</li>
                  <li>• NHS pension and superannuation processing</li>
                </ul>
                <p>We help locums stay compliant while maximising the benefits available to them.</p>
              </>
            ),
          },
          {
            question: 'Consultants & Specialists',
            answer: (
              <>
                <p className="mb-4">As a consultant, your earnings often come from a mix of NHS employment and private practice. Managing these diverse income streams requires careful financial planning; our team ensures you remain compliant while making the most of your hard-earned money.</p>
                <p className="mb-4">We offer expert accounting, strategic tax planning, and comprehensive wealth guidance to consultants across the UK, helping you maximise your take-home pay and secure your financial future.</p>
                <p className="mb-2">For consultants and private specialists, we offer:</p>
                <ul className="space-y-2 mb-4">
                  <li>• Personal tax planning</li>
                  <li>• Private practice accounts</li>
                  <li>• Partnership advice for joint ventures</li>
                  <li>• Guidance on dual NHS and private income</li>
                  <li>• Capital allowances and equipment expenditure advice</li>
                  <li>• Pension tax considerations and annual allowance planning</li>
                </ul>
                <p>We ensure your tax affairs and financial planning complement your clinical career.</p>
              </>
            ),
          },
          {
            question: 'Primary Care Networks (PCNs)',
            answer: (
              <>
                <p className="mb-2">PCNs face complex accounting and compliance requirements due to pooled budgets, reimbursements and mixed funding sources. We provide:</p>
                <ul className="space-y-2 mb-4">
                  <li>• PCN financial statements and reporting</li>
                  <li>• Income tracking and allocation</li>
                  <li>• Claim management</li>
                  <li>• Budgeting and forecasting</li>
                  <li>• Employment and payroll support for ARRS roles</li>
                  <li>• Advice on PCN structures and governance</li>
                </ul>
                <p>Our support helps PCNs maintain financial clarity and strong accountability.</p>
              </>
            ),
          },
          {
            question: 'Super Partnerships & Federations',
            answer: (
              <>
                <p className="mb-2">We work with large-scale healthcare organisations, offering:</p>
                <ul className="space-y-2 mb-4">
                  <li>• Consolidated accounts</li>
                  <li>• Management reporting and financial controls</li>
                  <li>• Governance and structural advice</li>
                  <li>• Payroll for large workforce groups</li>
                  <li>• Cashflow and strategic planning</li>
                  <li>• Support during mergers or practice acquisitions</li>
                </ul>
                <p>Our services ensure efficient administration, compliant reporting and strategic guidance for growing healthcare organisations.</p>
              </>
            ),
          },
          {
            question: 'Private Practitioners',
            answer: (
              <>
                <p className="mb-2">For private GPs, independent clinicians and medical businesses, we offer:</p>
                <ul className="space-y-2 mb-4">
                  <li>• Accounts and tax compliance</li>
                  <li>• Self-assessment preparation, including expense reclaims</li>
                  <li>• Business structure planning</li>
                  <li>• VAT guidance for medical services</li>
                  <li>• Cashflow management and financial forecasting</li>
                  <li>• Digital accounting setup and advisory</li>
                </ul>
                <p>Whether you run a small clinic or a private medical practice, we help you operate smoothly and sustainably.</p>
              </>
            ),
          },
        ]}
      />

      <WhoWeHelp
        title="NHS Pensions & Superannuation"
        subtitle="Expert guidance on NHS pension schemes and superannuation"
        clientTypes={nhsPensions}
        bgColor="bg-gradient-to-br from-[#013a75] to-[#01458f]"
        darkMode={true}
      />

      <ServiceFAQ
        title="NHS Pensions & Superannuation Support"
        subtitle="NHS pensions are complex, and accurate reporting is crucial"
        faqs={[
          {
            question: 'What support do you provide for NHS pensions?',
            answer: (
              <>
                <p className="mb-2">We provide expert support with:</p>
                <ul className="space-y-2 mb-4">
                  <li>• NHS Pension Scheme guidance</li>
                  <li>• Annual superannuation certificates</li>
                  <li>• Type 1 and Type 2 forms</li>
                  <li>• Locum pension contributions</li>
                  <li>• Estimates for annual and lifetime allowance</li>
                  <li>• Understanding pension tax charges</li>
                  <li>• Reviewing pension records for accuracy</li>
                </ul>
                <p>Our team ensures your contributions are correct, deadlines are met, and your pension position is fully understood — reducing errors and avoiding unnecessary tax issues.</p>
              </>
            ),
          },
        ]}
      />

      <div id="benefits">
        <ServiceBenefits title="Why Medical Professionals Choose Us" items={benefits} />
      </div>

      <div id="testimonials">
        <ServiceTestimonials
          title="Client Testimonials"
          subtitle="Hear from medical professionals we support across the UK"
          testimonials={testimonials}
        />
      </div>

      <CTASimple
        heading="Ready to work with specialist medical accountants?"
        supportingText="Three decades of medical sector expertise"
        buttonText="Get Started"
      />

      <div id="faqs">
        <ServiceFAQ
          title="Medical Accounting FAQs"
          subtitle="Common questions about our medical accounting services"
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
