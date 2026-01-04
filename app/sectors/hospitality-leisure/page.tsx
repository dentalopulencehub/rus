import { Metadata } from 'next';
import { ServiceHero } from '@/components/services/ServiceHero';
import { WhoWeHelp } from '@/components/services/WhoWeHelp';
import { ServiceOverview } from '@/components/services/ServiceOverview';
import { ServiceBenefits } from '@/components/services/ServiceBenefits';
import { ServiceTestimonials } from '@/components/services/ServiceTestimonials';
import { ServiceFAQ } from '@/components/services/ServiceFAQ';
import { InsightsPreview } from '@/components/home/InsightsPreview';
import { StickyMiniNav } from '@/components/services/StickyMiniNav';

export const metadata: Metadata = {
  title: 'Hospitality Accountants Birmingham | Restaurant, Hotel & Pub Accounting | RUS',
  description: 'Expert accountants for restaurants, hotels, pubs, cafés and leisure businesses. EPOS integration, stock management, VAT advice, payroll services. Birmingham hospitality accountants.',
  keywords: [
    'restaurant accountants Birmingham',
    'hospitality accountants UK',
    'hotel accountants Birmingham',
    'pub accountants',
    'café accountants',
    'EPOS accounting integration',
    'hospitality VAT advice',
    'leisure business accountants',
  ],
  openGraph: {
    title: 'Hospitality & Leisure Accountants | RUS Chartered Accountants',
    description: 'Expert accountants for restaurants, hotels, bars and leisure businesses.',
    type: 'website',
  },
  alternates: {
    canonical: 'https://rus.co.uk/sectors/hospitality-leisure',
  },
};

// Hospitality Services - EXACTLY 8 for design consistency
const hospitalityServices = [
  {
    title: 'Year-End Accounts & Tax Compliance',
    description: 'Comprehensive year-end accounts and tax returns for limited companies, partnerships, sole traders and hospitality groups, ensuring all industry-specific considerations are properly reflected.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    title: 'Till Reconciliation & EPOS Integration',
    description: 'Seamless integration with Xero, QuickBooks and Sage, connecting your EPOS systems, till data and stock management for real-time financial visibility and automated bookkeeping.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Stock Control & Cost Management',
    description: 'Detailed cost of sales analysis, food and beverage gross profit monitoring, supplier cost reviews and inventory control to help you maintain tight margins in a competitive market.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
  },
  {
    title: 'Payroll & Workforce Management',
    description: 'Weekly or monthly payroll for shift workers, holiday pay calculations, auto-enrolment pensions, timesheet integration and employee payslip app access for your hospitality team.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: 'VAT Advice & Compliance',
    description: 'Expert guidance on hospitality VAT complexities including standard vs reduced rates, food and alcohol VAT, takeaway vs dine-in rules, service charges, gratuities and flat rate schemes.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2z" />
      </svg>
    ),
  },
  {
    title: 'Cashflow & Margin Management',
    description: 'Detailed wage-to-revenue ratio analysis, trend reporting, seasonal cashflow forecasting and budgeting support to help you maintain profitability in tight-margin environments.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
  {
    title: 'Growth & Expansion Advisory',
    description: 'Financial modelling for new sites, funding support, investor packs, business restructuring advice, profitability reviews and performance benchmarking for multi-site expansion.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Business Acquisitions & Sales',
    description: 'Financial due diligence, valuations, goodwill assessment, EPOS and margin data review, tax-efficient deal structuring, cashflow projections and exit planning support.',
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
    title: 'Over 30 Years Hospitality & Leisure Expertise',
    description: 'Three decades supporting restaurants, hotels, pubs, cafés, leisure facilities and hospitality groups with specialist accounting, tax and compliance advice.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
  {
    title: 'EPOS & Stock Control Specialists',
    description: 'Deep understanding of till systems, EPOS integration, stock management, supplier reconciliation and high-volume transaction processing for hospitality businesses.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>
    ),
  },
  {
    title: 'Fast-Paced Operational Support',
    description: 'Clear, practical guidance tailored to fast-moving hospitality environments with seasonal demand, staffing complexities and tight margin management requirements.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: 'Growth & Multi-Site Expansion Guidance',
    description: 'Strategic financial modelling, performance benchmarking, profitability reviews and funding support for businesses scaling from single sites to multi-location operations.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
];

// 3 Client Testimonials
const testimonials = [
  {
    name: 'James Richardson',
    role: 'Owner, The Green Kitchen Restaurant Group',
    content: 'RUS Accountancy transformed our financial oversight across all three venues. Their EPOS integration and margin analysis gave us the clarity we needed to improve profitability. Outstanding hospitality sector expertise.',
    rating: 5,
  },
  {
    name: 'Sophie Campbell',
    role: 'General Manager, Harborne Hotel & Spa',
    content: 'Managing payroll for 45 staff across different departments was complex until we partnered with RUS. Their team understands hospitality operations and delivers reliable, timely support every month.',
    rating: 5,
  },
  {
    name: 'Marcus Bennett',
    role: 'Director, FitLife Leisure Centres',
    content: 'From cashflow forecasting to expansion planning, RUS has supported our growth from one gym to five sites. Their strategic advice and sector knowledge have been invaluable to our success.',
    rating: 5,
  },
];

// 6 Frequently Asked Questions
const faqs = [
  {
    question: 'How do you handle VAT on takeaway versus dine-in sales?',
    answer: 'We provide specialist guidance on hospitality VAT treatment, ensuring correct application of standard rate (20%) for dine-in restaurant meals and zero-rate for eligible cold takeaway food. We help you configure EPOS systems to track sales correctly, manage mixed sales scenarios, and ensure VAT returns accurately reflect your business model. Our experience covers restaurants, cafés, pubs and catering businesses with complex VAT requirements.',
  },
  {
    question: 'Can you help with till reconciliation and cash handling procedures?',
    answer: 'Yes, we specialise in EPOS integration and till reconciliation for hospitality businesses. We connect your till systems with accounting software like Xero or QuickBooks, automate daily sales recording, and establish robust cash handling procedures. This includes variance analysis, staff accountability controls, and real-time visibility of takings across single or multiple sites.',
  },
  {
    question: 'How should tips and service charges be accounted for?',
    answer: 'We advise on the correct accounting and tax treatment of tips, gratuities and service charges under current HMRC rules. This includes distinguishing between voluntary tips, mandatory service charges, and tronc arrangements, ensuring proper VAT treatment, PAYE and National Insurance compliance, and transparent allocation to staff. We help establish compliant systems that protect both your business and employees.',
  },
  {
    question: 'Do you provide cashflow forecasting for seasonal hospitality businesses?',
    answer: 'Absolutely. We understand hospitality businesses often face seasonal demand fluctuations, event-driven peaks, and quieter trading periods. We provide detailed cashflow forecasting that accounts for seasonal patterns, helps you plan for wage costs during busy periods, manage supplier payments, and ensure sufficient working capital throughout the year. This is particularly valuable for hotels, coastal venues, and event-based businesses.',
  },
  {
    question: 'Can you support buying or selling a restaurant, pub or hotel?',
    answer: 'Yes, we provide comprehensive support for hospitality business acquisitions and sales. This includes financial due diligence, reviewing historical EPOS and margin data, goodwill and asset valuations, structuring deals tax-efficiently, preparing cashflow projections for lenders, and advising on post-acquisition integration. Our sector experience helps you negotiate confidently and achieve successful outcomes.',
  },
  {
    question: 'How do you help manage staff costs and payroll for shift workers?',
    answer: 'We provide tailored payroll solutions for hospitality businesses with variable shift patterns, high staff turnover, and complex rota systems. This includes weekly or monthly payroll processing, timesheet integration, holiday pay calculations, auto-enrolment pensions, statutory payments, and employee self-service apps for payslip access. We also monitor wage-to-revenue ratios to help you maintain optimal staff cost control.',
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

export default function HospitalityLeisurePage() {
  return (
    <>
      <ServiceHero
        title="Hospitality & Leisure Sector Accountancy"
        subtitle="Specialist accountants for restaurants, cafés, hotels, bars, leisure businesses and hospitality operators"
        description="The hospitality and leisure industry is one of the most dynamic and fast-moving sectors in the UK — but it also faces intense financial pressures. Rising costs, fluctuating demand, staffing challenges, stock control, multi-stream revenue and strict regulatory compliance all make strong financial management essential."
        imageUrl="https://imagedelivery.net/W93NbEGaswuledAsk5GMeA/5df867d0-d40c-4737-e407-1ac682f2ae00/public"
      />

      <div id="services">
        <WhoWeHelp
          title="Specialist Accountants for Hospitality & Leisure Businesses"
          subtitle="With over 30 years of experience supporting hospitality businesses, we understand the realities of day-to-day operations and the strategic demands of running a successful venue. Whether you manage a single site, multiple locations or a growing leisure brand, we provide clear, practical and sector-focused financial support"
          clientTypes={hospitalityServices}
          bgColor="bg-gradient-to-br from-[#01458f] to-[#0052cc]"
          darkMode={true}
        />
      </div>

      <ServiceOverview
        leftContent={{
          title: 'Supporting Hospitality Success\nAcross All Venues',
          description: 'From independent restaurants to multi-site hotel groups, we provide dependable accounting expertise that supports profitability, compliance and growth. With specialist knowledge in EPOS integration, stock control and hospitality-specific VAT, we help you navigate the sector with confidence.',
        }}
        rightContent={{
          stats: [
            { value: '30+', label: 'Years Experience' },
            { value: '350+', label: 'Hospitality Clients' },
          ],
        }}
        imageUrl="https://imagedelivery.net/W93NbEGaswuledAsk5GMeA/ba91546f-931f-4f2e-a712-8d1b4c89bf00/public"
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
                Expert accounting for<br />hospitality businesses
              </h2>

              <a href="/contact" className="relative inline-flex items-center justify-center px-32 py-2 bg-white text-gray-900 rounded-full text-base md:text-lg font-semibold hover:shadow-2xl hover:shadow-white/30 transition-all duration-300 overflow-hidden group">
                <div className="absolute inset-0 -z-10 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-md backdrop-saturate-150" />
                <div className="absolute inset-0 -z-20 bg-gradient-to-br from-white/30 via-white/10 to-white/30 rounded-full opacity-0 group-hover:opacity-40 transition-all duration-300" />
                <div className="absolute inset-0 -z-30 bg-white rounded-full transition-all duration-300 group-hover:bg-white/95" />
                <span className="relative z-10">Get Started</span>
              </a>

              <p className="text-white/90 text-sm md:text-base">
                Professional hospitality accounting for restaurants, hotels, pubs, cafés and leisure businesses
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
        <ServiceBenefits title="Why Hospitality Businesses Choose Us" items={benefits} knowledgeIconUrl="https://imagedelivery.net/W93NbEGaswuledAsk5GMeA/c5cea02a-0117-439d-07d1-4ca5e4d1c400/public" knowledgeIconIndex={0} />
      </div>

      <div id="testimonials">
        <ServiceTestimonials
          title="Client Testimonials"
          subtitle="Hear from hospitality and leisure businesses we support across the UK"
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
                Ready to increase<br />hospitality profitability?
              </h2>

              <a href="/contact" className="relative inline-flex items-center justify-center px-32 py-2 bg-white text-gray-900 rounded-full text-base md:text-lg font-semibold hover:shadow-2xl hover:shadow-white/30 transition-all duration-300 overflow-hidden group">
                <div className="absolute inset-0 -z-10 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-md backdrop-saturate-150" />
                <div className="absolute inset-0 -z-20 bg-gradient-to-br from-white/30 via-white/10 to-white/30 rounded-full opacity-0 group-hover:opacity-40 transition-all duration-300" />
                <div className="absolute inset-0 -z-30 bg-white rounded-full transition-all duration-300 group-hover:bg-white/95" />
                <span className="relative z-10">Contact Us Today</span>
              </a>

              <p className="text-white/90 text-sm md:text-base">
                Over 30 years of hospitality and leisure sector accounting expertise
              </p>
            </div>
          </div>
        </div>
      </section>

      <div id="faqs">
        <ServiceFAQ
          title="Hospitality & Leisure FAQs"
          subtitle="Common questions about our hospitality and leisure accountancy services"
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
