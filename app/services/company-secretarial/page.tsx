import { Metadata } from 'next';
import { ServiceHero } from '@/components/services/ServiceHero';
import { WhoWeHelp } from '@/components/services/WhoWeHelp';
import { ServiceOverview } from '@/components/services/ServiceOverview';
import { ServiceBenefits } from '@/components/services/ServiceBenefits';
import { ServiceTestimonials } from '@/components/services/ServiceTestimonials';
import { ServiceFAQ } from '@/components/services/ServiceFAQ';
import { InsightsPreview } from '@/components/home/InsightsPreview';
import { StickyMiniNav } from '@/components/services/StickyMiniNav';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Company Secretarial Services Birmingham | Confirmation Statements | RUS',
  description: 'Professional company secretarial services. Statutory registers, confirmation statements, director changes, share transfers, registered office facility. Companies House compliance. Birmingham based.',
  keywords: [
    'company secretarial Birmingham',
    'confirmation statement filing',
    'statutory registers UK',
    'director changes Companies House',
    'share transfer services',
    'registered office address',
    'company secretary services',
    'PSC register maintenance',
  ],
  openGraph: {
    title: 'Company Secretarial Services | RUS Chartered Accountants',
    description: 'Professional company secretarial ensuring full Companies House compliance and accurate statutory records.',
    type: 'website',
  },
  alternates: {
    canonical: 'https://rus.co.uk/services/company-secretarial',
  },
};

// Company Secretarial Services - EXACTLY 8 services from source document
const secretarialServices = [
  {
    title: 'Statutory Register Maintenance',
    description: 'We maintain all required company registers including Members, Directors, PSCs (Persons with Significant Control), Allotments & Share Transfers, and Charges. These records must be accurate and up to date at all times',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    title: 'Confirmation Statement Filing',
    description: 'We prepare and file your annual Confirmation Statement with Companies House, ensuring all company data is correct, including shareholdings, SIC codes, registered office address and PSC details',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: 'Director & Shareholder Changes',
    description: 'We handle the full process for changes including appointment or resignation of directors, changes to director details, share transfers and allotments, variations to share rights, and updates to registered office or service addresses. Every update is filed promptly and accurately',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: 'Share Structure Amendments & New Share Classes',
    description: 'If your company needs to introduce new share classes (A, B, C etc.), update voting rights, alter dividend entitlements or reorganise capital, we manage the entire process including drafting required resolutions, updating statutory registers, preparing supporting documentation and filing the relevant Companies House forms',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    title: 'Registered Office Address Facility',
    description: 'We provide a secure Registered Office Address Facility, allowing you to keep your home address off the public register. This service ensures privacy and ensures that all statutory and HMRC correspondence is handled professionally and forwarded to you promptly',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    title: 'Preparation of Board Minutes & Resolutions',
    description: 'We prepare formal board minutes, shareholder resolutions and supporting documentation for important company decisions, including changes in ownership, restructuring, appointments and other legal actions',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    title: 'Company Dormancy & Reactivation Support',
    description: 'For companies that need to cease trading temporarily or reactivate later, we manage all necessary filings, ensuring compliance during dormant periods',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
      </svg>
    ),
  },
  {
    title: 'Company Dissolution & Strike-Off',
    description: 'If you wish to close a company, we oversee the voluntary strike-off process and ensure all Companies House requirements are met. We also provide guidance on tax, distribution of remaining assets and post-closure obligations',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
      </svg>
    ),
  },
];

// Benefits - EXACTLY 4
const benefits = [
  {
    title: 'Full Compliance',
    description: 'Consistent compliance with Companies House and all statutory requirements',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: 'Privacy Protection',
    description: 'Registered Office Address Facility to protect your personal information',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
  },
  {
    title: 'Expert Guidance',
    description: 'Expertise in share structures, governance and corporate compliance',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    title: 'Reduced Burden',
    description: 'Reduced administrative burden for directors and business owners',
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
    name: 'Jennifer Clarke',
    role: 'Director, Clarke Consulting Ltd',
    content: 'RUS has handled all our company secretarial work for years. From share transfers to Confirmation Statements, everything is managed professionally and on time. Excellent service.',
    rating: 5,
  },
  {
    name: 'David Reynolds',
    role: 'Managing Director, Reynolds Group',
    content: 'The Registered Office service from RUS has been invaluable. It keeps our home addresses private and ensures all statutory correspondence is handled professionally.',
    rating: 5,
  },
  {
    name: 'Catherine Morris',
    role: 'Company Secretary, Morris Holdings',
    content: 'RUS manages our statutory registers, board minutes and all Companies House filings with complete accuracy. Their expertise in share structures is outstanding.',
    rating: 5,
  },
];

// FAQs - EXACTLY 6
const faqs = [
  {
    question: 'What are statutory registers and why are they important?',
    answer: 'Statutory registers are legally required records that every UK company must maintain. These include the Register of Members (shareholders), Register of Directors, Register of PSCs (Persons with Significant Control), Register of Allotments and Register of Charges. These registers must be accurate, up to date and available for inspection. Failing to maintain them correctly can result in penalties and legal issues.',
  },
  {
    question: 'What is a Confirmation Statement and when is it due?',
    answer: 'A Confirmation Statement (previously called an Annual Return) is a statutory filing that must be submitted to Companies House at least once every 12 months. It confirms key company information including shareholdings, directors, PSCs, registered office address and SIC codes. The deadline is based on your company\'s incorporation date. Late filing results in automatic penalties.',
  },
  {
    question: 'Can you help with changes to directors or shareholders?',
    answer: 'Yes. We handle the complete process for director appointments and resignations, changes to director details, share transfers and allotments, and updates to registered office or service addresses. Every change is documented, filed with Companies House promptly and recorded in your statutory registers to ensure full compliance.',
  },
  {
    question: 'What is a Registered Office Address Facility?',
    answer: 'A Registered Office Address Facility allows you to use a professional business address as your company\'s registered office instead of your home address. This protects your privacy by keeping your residential address off the public register at Companies House. All statutory and HMRC correspondence is received securely and forwarded to you promptly.',
  },
  {
    question: 'Do you help with share structures and share classes?',
    answer: 'Yes. We provide expert guidance on designing and implementing share structures, including alphabetical share classes (A, B, C shares), voting rights and dividend entitlements, capital reorganisations and new share issues. We draft the necessary resolutions, update statutory registers and file all required forms with Companies House.',
  },
  {
    question: 'Can you assist with company dissolution or strike-off?',
    answer: 'Yes. We oversee the voluntary strike-off process to close a company, ensuring all Companies House requirements are met. We provide guidance on tax obligations, distribution of remaining assets, final filings and post-closure responsibilities. This ensures the company is dissolved correctly and directors are protected from future liabilities.',
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

export default function CompanySecretarialPage() {
  return (
    <>
      <ServiceHero
        title="Company Secretarial Services"
        subtitle="Professional company secretarial support ensuring full compliance with Companies House and all statutory obligations"
        description="Every UK limited company must meet ongoing statutory requirements including maintaining accurate registers, filing annual Confirmation Statements and recording changes to directors, shareholders and company structure. Our Company Secretarial service takes care of these responsibilities, giving you confidence that your company remains fully compliant and professionally managed at all times."
      />

      <div id="services">
        <WhoWeHelp
          title="Our Company Secretarial Services"
          subtitle="Complete statutory compliance and professional company administration"
          clientTypes={secretarialServices}
        />
      </div>

      <ServiceOverview
        leftContent={{
          title: 'Keeping Your Company Fully Compliant and Professionally Managed',
          description: 'Our Company Secretarial service ensures that every statutory responsibility is handled with precision and care. From annual filings to share changes, director updates and registered office services, we provide reliable support that protects your business and keeps everything in order.',
        }}
        rightContent={{
          stats: [
            { value: '30+', label: 'Years Experience' },
            { value: 'ICAEW', label: 'Chartered' },
          ],
        }}
      />

      {/* Company Formation Link */}
      <div className="bg-gray-50 py-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-white rounded-2xl border border-gray-200 p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="space-y-2">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                  Seamless Integration With Company Formation
                </h3>
                <p className="text-base text-gray-600 max-w-2xl">
                  If you incorporate a company through us, our Company Secretarial service ensures smooth, ongoing compliance from day one.
                </p>
              </div>
              <Link
                href="/services/company-formation"
                className="inline-flex items-center justify-center px-8 py-3 bg-[#01458f] text-white rounded-full text-sm font-medium hover:bg-[#013a75] transition-all duration-200 whitespace-nowrap"
              >
                Company Formation
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>

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
                Stay compliant with confidence
              </h2>

              <p className="text-white/90 text-base md:text-lg -mb-2">
                Professional company secretarial support you can trust
              </p>

              <div className="flex flex-col md:flex-row items-center gap-4">
                <a href="/contact" className="relative inline-flex items-center justify-center px-32 py-2 bg-white text-gray-900 rounded-full text-base md:text-lg font-semibold hover:shadow-2xl hover:shadow-white/30 transition-all duration-300 overflow-hidden group">
                  <div className="absolute inset-0 -z-10 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-md backdrop-saturate-150" />
                  <div className="absolute inset-0 -z-20 bg-gradient-to-br from-white/30 via-white/10 to-white/30 rounded-full opacity-0 group-hover:opacity-40 transition-all duration-300" />
                  <div className="absolute inset-0 -z-30 bg-white rounded-full transition-all duration-300 group-hover:bg-white/95" />
                  <span className="relative z-10">Get Support</span>
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
        <ServiceBenefits title="Why Choose Our Company Secretarial Services?" items={benefits} />
      </div>

      <div id="testimonials">
        <ServiceTestimonials
          title="Client Testimonials"
          subtitle="Hear from businesses we support with company secretarial services"
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
                Ready to ensure<br />full company compliance?
              </h2>

              <a href="/contact" className="relative inline-flex items-center justify-center px-32 py-2 bg-white text-gray-900 rounded-full text-base md:text-lg font-semibold hover:shadow-2xl hover:shadow-white/30 transition-all duration-300 overflow-hidden group">
                <div className="absolute inset-0 -z-10 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-md backdrop-saturate-150" />
                <div className="absolute inset-0 -z-20 bg-gradient-to-br from-white/30 via-white/10 to-white/30 rounded-full opacity-0 group-hover:opacity-40 transition-all duration-300" />
                <div className="absolute inset-0 -z-30 bg-white rounded-full transition-all duration-300 group-hover:bg-white/95" />
                <span className="relative z-10">Get Started</span>
              </a>

              <p className="text-white/90 text-sm md:text-base">
                Expert company secretarial support at your fingertips
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
          title="Company Secretarial FAQs"
          subtitle="Common questions about company secretarial services"
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
