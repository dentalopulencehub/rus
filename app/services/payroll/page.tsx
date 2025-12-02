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
  title: 'Payroll Services Birmingham | CIS & P11D Specialists | RUS',
  description: 'Professional payroll services for UK businesses. CIS returns, P11D benefits, auto-enrolment pensions, digital payslips, automated payment files. Fully managed payroll from Birmingham accountants.',
  keywords: [
    'payroll services Birmingham',
    'CIS returns UK',
    'P11D benefit reporting',
    'auto-enrolment pensions',
    'payroll bureau Birmingham',
    'construction industry scheme',
    'RTI payroll submissions',
    'digital payslips',
  ],
  openGraph: {
    title: 'Payroll Services | RUS Chartered Accountants',
    description: 'Fully managed payroll ensuring employees are paid accurately and on time, with full HMRC compliance.',
    type: 'website',
  },
  alternates: {
    canonical: 'https://rus.co.uk/services/payroll',
  },
};

// Payroll Services - 9 services from source document
const payrollServices = [
  {
    title: 'Fully Managed Payroll Processing',
    description: 'We oversee the entire payroll cycle including calculating gross and net pay, PAYE, National Insurance and statutory deductions, holiday pay, sick pay, maternity/paternity pay, auto-enrolment pension calculations, electronic payslip generation and RTI submissions to HMRC',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: 'Employee Payslip App Access',
    description: 'Your employees benefit from 24/7 access to payslips and payroll history through our secure online employee portal. Payslips are published instantly on pay day, reducing administration and improving staff engagement',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Automated Employee Payment Instructions',
    description: 'We provide electronic payment instruction files compatible with all major UK banks. These automated files reduce manual input errors and speed up payment processing, ensuring staff are paid accurately and on time',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
  },
  {
    title: 'Timesheets & Record-Keeping Support',
    description: 'Assistance with timesheet setup, hours tracking and record-keeping systems tailored to your payroll needs. We help employers establish robust processes that reduce errors and provide audit-ready documentation',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'CIS (Construction Industry Scheme) Returns',
    description: 'Specialist support for construction industry employers and contractors. We manage monthly CIS returns, subcontractor verification, deduction calculations and CIS statement production, ensuring full compliance with HMRC rules',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    title: 'P11D Benefit-in-Kind Reporting',
    description: 'Preparation and submission of P11D forms for employees receiving taxable benefits such as company cars, fuel, medical insurance, loans or other perks. We also complete the employer P11D(b) declaration and assist with Class 1A NIC calculations',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    title: 'Auto-Enrolment Pension Compliance',
    description: 'We manage all aspects of workplace pension auto-enrolment including eligibility assessments, deduction calculations, employee communications, pension provider submissions and ongoing compliance monitoring',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: 'Payroll Setup for New Employers',
    description: 'For start-ups or businesses taking on their first employees, we provide complete payroll setup including PAYE scheme registration with HMRC, payroll software configuration, employee onboarding and compliance guidance',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: 'Year-End Payroll Compliance',
    description: 'Management of all year-end obligations including final RTI submissions to HMRC, production and distribution of employee P60s, payroll reconciliation, and preparation for the new tax year',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
];

// Benefits - EXACTLY 4
const benefits = [
  {
    title: 'Fully Managed',
    description: 'Fully managed and compliant payroll with expert support from experienced professionals',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: 'Secure Access',
    description: 'Secure employee payslip app for instant access to payslips and payroll history',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
  },
  {
    title: 'CIS Specialists',
    description: 'CIS and P11D specialists ensuring full compliance with construction industry regulations',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    title: 'Reduced Admin',
    description: 'Reduced administrative workload through automation and tailored record-keeping support',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
];

// Testimonials - EXACTLY 3
const testimonials = [
  {
    name: 'Paul Richardson',
    role: 'Owner, Richardson Construction Ltd',
    content: 'RUS handles our entire payroll including CIS returns for 30+ staff and subcontractors. The automated payments and employee app have transformed how we manage payroll. Excellent service.',
    rating: 5,
  },
  {
    name: 'Karen Lewis',
    role: 'HR Director, Lewis Retail Group',
    content: 'The payroll service from RUS is flawless. From P11Ds to auto-enrolment pensions, everything is managed professionally and on time. Our employees love the payslip app.',
    rating: 5,
  },
  {
    name: 'Graham Phillips',
    role: 'Managing Director, Phillips Engineering',
    content: 'Moving our payroll to RUS was the best decision we made. Their CIS expertise and automated payment system have saved us hours every month. Highly recommended.',
    rating: 5,
  },
];

// FAQs - EXACTLY 6
const faqs = [
  {
    question: 'What is included in your payroll service?',
    answer: 'Our full payroll service includes: calculation of employee wages, salaries, bonuses, overtime and deductions; RTI (Real Time Information) submissions to HMRC; production of payslips via our secure employee app; automated payment instruction files for your online banking; P60s, P45s and P11D forms; auto-enrolment pension administration; CIS returns for construction industry employers; and year-end compliance and reconciliations. Everything you need for fully compliant and efficient payroll management.',
  },
  {
    question: 'How does the employee payslip app work?',
    answer: 'We provide payroll software that allows employees to securely access all their payslips in one easy-to-use app. Staff benefit from 24/7 access to payslips and payroll history, secure document storage, and instant notifications when new payslips are published. This reduces administration for employers and improves communication with your team.',
  },
  {
    question: 'Can you help with CIS (Construction Industry Scheme) payroll?',
    answer: (
      <>
        Yes. We specialise in CIS payroll for <Link href="/sectors/construction" className="text-[#01458f] underline hover:text-[#013a75] transition-colors">construction industry employers</Link>. Our CIS service includes monthly CIS returns to HMRC, subcontractor verification, calculation of CIS deductions, production of CIS deduction statements, and ensuring full compliance with HMRC CIS rules. This takes the stress out of managing CIS and keeps your business protected.
      </>
    ),
  },
  {
    question: 'What is auto-enrolment and do you manage it?',
    answer: 'Auto-enrolment is a legal requirement for UK employers to enrol eligible staff into a workplace pension scheme. We manage all aspects of auto-enrolment including pension deductions, employee communications, submissions to your pension provider, and ongoing compliance checks. This ensures you meet your legal obligations without the administrative burden.',
  },
  {
    question: 'Do you provide P11D benefit-in-kind reporting?',
    answer: 'Yes. We prepare and submit all necessary P11D forms and the employer\'s P11D(b) declaration. This covers company cars and fuel, medical and insurance benefits, loans and staff perks, and accommodation and asset benefits. We ensure accurate reporting and help employers structure benefits tax-efficiently.',
  },
  {
    question: 'Can you set up payroll for a new business?',
    answer: 'Yes. For start-ups or new employers, we assist with PAYE scheme registration with HMRC, payroll software setup, onboarding of employees, employer compliance guidance, and establishing processes for timesheets and record-keeping. We ensure your payroll operation is compliant, efficient and ready for growth from day one.',
  },
];

// Mini navigation
const miniNavLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Benefits', href: '#benefits' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'FAQs', href: '#faqs' },
  { label: 'Insights', href: '#insights' },
];

export default function PayrollPage() {
  return (
    <>
      <ServiceHero
        title="Payroll Services"
        subtitle="Accurate, compliant and fully managed payroll services for UK businesses, delivered with modern technology and expert support"
        description="Managing payroll correctly is essential for maintaining compliance with HMRC, paying employees accurately and on time, and protecting your business from penalties. Our Payroll Services provide a complete, hassle-free solution that combines modern technology with expert guidance, giving you confidence that your payroll is in safe hands."
      />

      <div id="services">
        <WhoWeHelp
          title="Our Comprehensive Payroll Services"
          subtitle="Complete payroll management from processing to compliance"
          clientTypes={payrollServices}
        />
      </div>

      <ServiceOverview
        leftContent={{
          title: 'A Complete Payroll Solution You Can Rely On',
          description: 'Our Payroll Services are designed to make your payroll operation smooth, modern and fully compliant. Whether you need weekly payroll, CIS returns, P11D reporting or automated payment processing, we provide a dependable solution that supports your team and protects your business.',
        }}
        rightContent={{
          stats: [
            { value: '30+', label: 'Years Experience' },
            { value: 'RTI', label: 'Compliant' },
          ],
        }}
      />

      {/* First CTA */}
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
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight">
                Simplify your payroll management
              </h2>

              <p className="text-white/90 text-base md:text-lg -mb-2">
                Accurate, compliant and fully automated payroll
              </p>

              <div className="flex flex-col md:flex-row items-center gap-4">
                <a href="/contact" className="relative inline-flex items-center justify-center px-32 py-2 bg-white text-gray-900 rounded-full text-base md:text-lg font-semibold hover:shadow-2xl hover:shadow-white/30 transition-all duration-300 overflow-hidden group">
                  <div className="absolute inset-0 -z-10 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-md backdrop-saturate-150" />
                  <div className="absolute inset-0 -z-20 bg-gradient-to-br from-white/30 via-white/10 to-white/30 rounded-full opacity-0 group-hover:opacity-40 transition-all duration-300" />
                  <div className="absolute inset-0 -z-30 bg-white rounded-full transition-all duration-300 group-hover:bg-white/95" />
                  <span className="relative z-10">Get a Quote</span>
                </a>

                <a href="/who-we-are" className="relative inline-flex items-center justify-center px-8 py-3 bg-gray-900 text-white rounded-full text-sm font-medium hover:shadow-2xl hover:shadow-gray-900/30 transition-all duration-300 overflow-hidden group">
                  <div className="absolute inset-0 -z-10 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-md backdrop-saturate-150" />
                  <div className="absolute inset-0 -z-20 bg-gradient-to-br from-gray-800/30 via-gray-700/10 to-gray-800/30 rounded-full opacity-0 group-hover:opacity-40 transition-all duration-300" />
                  <div className="absolute inset-0 -z-30 bg-gray-900 rounded-full transition-all duration-300 group-hover:bg-gray-800" />
                  <span className="relative z-10">Learn More</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div id="benefits">
        <ServiceBenefits title="Why Choose Our Payroll Services?" items={benefits} />
      </div>

      <div id="testimonials">
        <ServiceTestimonials
          title="Client Testimonials"
          subtitle="Hear from businesses we support with payroll services"
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
                Ready to simplify<br />your payroll management?
              </h2>

              <a href="/contact" className="relative inline-flex items-center justify-center px-32 py-2 bg-white text-gray-900 rounded-full text-base md:text-lg font-semibold hover:shadow-2xl hover:shadow-white/30 transition-all duration-300 overflow-hidden group">
                <div className="absolute inset-0 -z-10 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-md backdrop-saturate-150" />
                <div className="absolute inset-0 -z-20 bg-gradient-to-br from-white/30 via-white/10 to-white/30 rounded-full opacity-0 group-hover:opacity-40 transition-all duration-300" />
                <div className="absolute inset-0 -z-30 bg-white rounded-full transition-all duration-300 group-hover:bg-white/95" />
                <span className="relative z-10">Get Started</span>
              </a>

              <p className="text-white/90 text-sm md:text-base">
                Accurate, compliant payroll services for UK businesses
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

      <div id="faqs">
        <ServiceFAQ
          title="Payroll FAQs"
          subtitle="Common questions about our payroll services"
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
