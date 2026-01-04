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
  title: 'Company Formation Services Birmingham | Ltd Company Setup | RUS',
  description: 'Expert company formation services. Full limited company setup, share structures, HMRC registration, registered office address facility. Start your business correctly with Birmingham accountants.',
  keywords: [
    'company formation Birmingham',
    'limited company setup UK',
    'register limited company',
    'share structure advice',
    'registered office address',
    'company incorporation Birmingham',
    'start-up formation services',
    'HMRC company registration',
  ],
  openGraph: {
    title: 'Company Formation Services | RUS Chartered Accountants',
    description: 'Expert company formation ensuring your new business is correctly structured and fully compliant from day one.',
    type: 'website',
  },
  alternates: {
    canonical: 'https://rus.co.uk/services/company-formation',
  },
};

// Company Formation Services - 8 services from source document
const formationServices = [
  {
    title: 'Company Registration With Companies House',
    description: 'We manage the full incorporation process on your behalf, including all filings, statutory documents, Articles of Association and shareholder records. This ensures your business is correctly registered and compliant from the very beginning',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: 'Registered Office Address Facility',
    description: 'When incorporating through us, clients can use our Registered Office Address Facility, allowing you to keep your home address confidential and protected from the public register. This helps maintain privacy, present a professional business address, and ensure all statutory and HMRC correspondence is handled promptly',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    title: 'Choosing the Right Business Structure',
    description: 'We advise on whether to operate as a limited company, LLP or partnership based on your commercial aims, tax position and long-term strategy',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
      </svg>
    ),
  },
  {
    title: 'Share Structures, Share Rights & Alphabetical Share Classes',
    description: 'Setting up your share structure correctly is essential during company formation. We provide expert guidance on alphabetical share classes (A, B, C etc.), voting & non-voting shares, growth shares, founder protection and future-proofing for investment',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
      </svg>
    ),
  },
  {
    title: 'Shareholder Agreements & Founders Arrangements',
    description: 'Working alongside legal partners where required, we help ensure shareholder expectations are clearly documented, protecting relationships and providing long-term certainty',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    title: 'HMRC Registrations',
    description: 'We complete all necessary post-incorporation registrations including Corporation Tax, VAT, PAYE and CIS (where applicable). This ensures your company is fully compliant with UK tax obligations from the outset',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: 'Digital Accounting & Bookkeeping Setup',
    description: 'We set up cloud-based systems such as Xero, Sage, QuickBooks or FreeAgent, ensuring your business begins with a compliant, efficient and modern financial framework',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
  },
  {
    title: 'Early Financial Planning for Start-Ups',
    description: 'We help you understand funding needs and cashflow requirements with budgets, forecasts, profit projections and start-up financial models. This gives you visibility and confidence as you plan your next steps',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
];

// Benefits - EXACTLY 4
const benefits = [
  {
    title: 'Privacy Protection',
    description: 'Registered Office Address Facility to protect your home address from public records',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
  },
  {
    title: 'Expert Structuring',
    description: 'Professional advice on share structures and shareholder rights from day one',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    title: 'Immediate Compliance',
    description: 'Full compliance with Companies House and HMRC from the outset',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: 'Growth-Ready',
    description: 'Strong foundations for future growth, investment or expansion opportunities',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
];

// Testimonials - EXACTLY 3
const testimonials = [
  {
    name: 'Robert Foster',
    role: 'Founder, Foster Ventures Ltd',
    content: 'RUS incorporated our company with a complex share structure involving multiple founders. Their expertise in alphabetical share classes and voting rights was exceptional. Perfect start.',
    rating: 5,
  },
  {
    name: 'Hannah Cooper',
    role: 'Director, Cooper Design Ltd',
    content: 'The Registered Office service gave us privacy and professionalism from day one. RUS handled everything—incorporation, HMRC registrations, accounting setup. Seamless process.',
    rating: 5,
  },
  {
    name: 'Steven Wallace',
    role: 'Co-Founder, Wallace Tech Ltd',
    content: 'RUS set up our company with future investment in mind. The share structure and shareholder agreements have been invaluable as we\'ve grown. Outstanding forward planning.',
    rating: 5,
  },
];

// FAQs - EXACTLY 6
const faqs = [
  {
    question: 'How long does it take to form a limited company?',
    answer: 'Company incorporation through Companies House typically takes 24 hours once all information is submitted. However, the full process—including HMRC registrations, accounting system setup and share structure finalisation—can take several days. We manage the entire process on your behalf, ensuring everything is completed correctly and efficiently.',
  },
  {
    question: 'What are alphabetical share classes and why are they useful?',
    answer: 'Alphabetical share classes (A shares, B shares, C shares etc.) allow you to vary dividends, profits and income between shareholders without changing ownership percentages. This provides maximum flexibility for family businesses, multiple founders or future investment. For example, you can pay different dividend rates to different shareholders whilst maintaining equal voting rights and ownership stakes.',
  },
  {
    question: 'Can I use my home address for my company\'s registered office?',
    answer: 'Yes, but your registered office address appears on the public register at Companies House, which means your home address becomes publicly available. Our Registered Office Address Facility allows you to use a professional business address instead, protecting your privacy and reducing unsolicited mail whilst ensuring all statutory correspondence is handled securely.',
  },
  {
    question: 'What HMRC registrations are needed after incorporation?',
    answer: 'After incorporating, your company must register for Corporation Tax within three months. Depending on your business activities, you may also need to register for VAT (if turnover exceeds the threshold or you choose voluntary registration), PAYE (if you employ staff or pay yourself a salary as a director), and CIS (if you operate in the construction industry). We manage all these registrations on your behalf.',
  },
  {
    question: 'Do I need a shareholder agreement when forming a company?',
    answer: 'Whilst not legally required, a shareholder agreement is highly recommended when there are multiple founders, family members or investors involved. It documents expectations around ownership, dividends, decision-making, exit provisions and dispute resolution. This protects relationships, provides clarity and reduces the risk of future disagreements. We work alongside legal partners where required to ensure agreements are properly structured.',
  },
  {
    question: 'Can you help with accounting and bookkeeping after incorporation?',
    answer: 'Yes. As part of our Company Formation service, we set up digital accounting systems using platforms like Xero, QuickBooks, Sage or FreeAgent. We also provide ongoing Accounting & Bookkeeping support, ensuring your company remains compliant and your financial records are accurate from the very beginning. Many clients transition seamlessly from formation to our full accounting service.',
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

export default function CompanyFormationPage() {
  return (
    <>
      <ServiceHero
        title="Company Formation"
        subtitle="Expert company formation services that ensure your new business is correctly structured, fully compliant and ready for growth from day one"
        description="Forming a limited company involves a number of important decisions that influence how your business operates, how tax-efficient it will be and how well-protected you are as a director or shareholder. We provide complete company formation support, helping you set up your business correctly from the outset and giving you clarity and confidence throughout the incorporation process."
        imageUrl="https://imagedelivery.net/W93NbEGaswuledAsk5GMeA/914a8ef6-62d1-4e39-610d-bd8157ef1a00/public"
      />

      <div id="services">
        <WhoWeHelp
          title="Comprehensive Company Formation Services"
          subtitle="Complete incorporation support with expert guidance at every step"
          clientTypes={formationServices}
          bgColor="bg-gradient-to-br from-[#01458f] to-[#0052cc]"
          darkMode={true}
        />
      </div>

      <ServiceOverview
        leftContent={{
          title: 'Start Your Business the Right Way',
          description: 'Our Company Formation service ensures your new business begins life on secure, compliant and strategically sound foundations. Whether you\'re starting your first company, restructuring a group or forming a business for investment purposes, we make the process smooth, clear and fully supported.',
        }}
        rightContent={{
          stats: [
            { value: '30+', label: 'Years Experience' },
            { value: 'Expert', label: 'Guidance' },
          ],
        }}
        imageUrl="https://imagedelivery.net/W93NbEGaswuledAsk5GMeA/e4fbc641-7cad-4640-4403-da9347af0e00/public"
      />

      {/* Related Services Links */}
      <div className="bg-gray-50 py-24">
        <div className="max-w-6xl mx-auto px-4 space-y-6">
          <div className="bg-white rounded-2xl border border-gray-200 p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="space-y-2">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                  Ongoing Secretarial Support
                </h3>
                <p className="text-base text-gray-600 max-w-2xl">
                  After incorporation, our Company Secretarial service ensures smooth, ongoing compliance with all statutory obligations.
                </p>
              </div>
              <Link
                href="/services/company-secretarial"
                className="inline-flex items-center justify-center px-8 py-3 bg-[#01458f] text-white rounded-full text-sm font-medium hover:bg-[#013a75] transition-all duration-200 whitespace-nowrap"
              >
                Company Secretarial
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-gray-200 p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="space-y-2">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                  Strategic Business Advisory
                </h3>
                <p className="text-base text-gray-600 max-w-2xl">
                  Our Business Advisory service provides strategic guidance to help your new company grow and succeed.
                </p>
              </div>
              <Link
                href="/services/business-advisory"
                className="inline-flex items-center justify-center px-8 py-3 bg-[#01458f] text-white rounded-full text-sm font-medium hover:bg-[#013a75] transition-all duration-200 whitespace-nowrap"
              >
                Business Advisory
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
                Build strong foundations
              </h2>

              <p className="text-white/90 text-base md:text-lg -mb-2">
                Expert company formation with strategic foresight
              </p>

              <div className="flex flex-col md:flex-row items-center gap-4">
                <a href="/contact" className="relative inline-flex items-center justify-center px-32 py-2 bg-white text-gray-900 rounded-full text-base md:text-lg font-semibold hover:shadow-2xl hover:shadow-white/30 transition-all duration-300 overflow-hidden group">
                  <div className="absolute inset-0 -z-10 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-md backdrop-saturate-150" />
                  <div className="absolute inset-0 -z-20 bg-gradient-to-br from-white/30 via-white/10 to-white/30 rounded-full opacity-0 group-hover:opacity-40 transition-all duration-300" />
                  <div className="absolute inset-0 -z-30 bg-white rounded-full transition-all duration-300 group-hover:bg-white/95" />
                  <span className="relative z-10">Get Started</span>
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
        <ServiceBenefits title="Why Choose Our Company Formation Service?" items={benefits} knowledgeIconUrl="https://imagedelivery.net/W93NbEGaswuledAsk5GMeA/c5cea02a-0117-439d-07d1-4ca5e4d1c400/public" knowledgeIconIndex={1} />
      </div>

      <div id="testimonials">
        <ServiceTestimonials
          title="Client Testimonials"
          subtitle="Hear from founders and directors we've supported with company formation"
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
                Ready to start your business<br />the right way?
              </h2>

              <a href="/contact" className="relative inline-flex items-center justify-center px-32 py-2 bg-white text-gray-900 rounded-full text-base md:text-lg font-semibold hover:shadow-2xl hover:shadow-white/30 transition-all duration-300 overflow-hidden group">
                <div className="absolute inset-0 -z-10 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-md backdrop-saturate-150" />
                <div className="absolute inset-0 -z-20 bg-gradient-to-br from-white/30 via-white/10 to-white/30 rounded-full opacity-0 group-hover:opacity-40 transition-all duration-300" />
                <div className="absolute inset-0 -z-30 bg-white rounded-full transition-all duration-300 group-hover:bg-white/95" />
                <span className="relative z-10">Begin Your Journey</span>
              </a>

              <p className="text-white/90 text-sm md:text-base">
                Complete company formation with expert guidance
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
          title="Company Formation FAQs"
          subtitle="Common questions about forming a limited company"
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
