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
  title: 'Optical Accountants Birmingham | Optician & Optometrist Accounting | RUS',
  description: 'Specialist accountants for optical practices and optometrists. Optician practice accounts, NHS contract compliance, optical practice valuations. 30+ years optical expertise.',
  keywords: [
    'optical accountants Birmingham',
    'optician accountants UK',
    'optometrist accountants',
    'optical practice accounting',
    'NHS optical contract accounting',
    'optical practice valuations',
    'dispensing optician accounting',
  ],
  openGraph: {
    title: 'Optical Accountants | RUS Chartered Accountants',
    description: 'Specialist accountants for optical practices and optometrists with over 30 years experience.',
    type: 'website',
  },
  alternates: {
    canonical: 'https://rus.co.uk/sectors/healthcare/optical',
  },
};

const opticalServices = [
  {
    title: 'Optical Practice Accounting',
    description: 'Complete accounting services for optical practices including year-end accounts, bookkeeping, payroll and compliance support',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    title: 'NHS & Private Income',
    description: 'Specialist support for mixed NHS and private optical practices including GOS contract tracking and private fee optimization',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <circle cx="12" cy="12" r="9" />
        <text x="12" y="17" fontSize="12" fill="currentColor" stroke="none" textAnchor="middle" fontWeight="bold">£</text>
      </svg>
    ),
  },
  {
    title: 'Optical Practice Valuations',
    description: 'Professional optical practice valuations, due diligence support and strategic advice for buying and selling optician businesses',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    ),
  },
  {
    title: 'Optometrist Tax Planning',
    description: 'Strategic tax planning for optometrists including self-employed vs limited company comparisons and pension optimization',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Stock & Inventory Management',
    description: 'Accounting support for optical stock management, frame and lens inventory valuations and stock control systems',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    ),
  },
  {
    title: 'Multiple Practice Ownership',
    description: 'Strategic support for optical groups and multiple practice owners including consolidation and expansion planning',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: 'VAT & Regulatory Compliance',
    description: 'VAT advice for optical services, regulatory compliance support and GOC guidance for optical practices',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
  {
    title: 'Partnership & Succession Planning',
    description: 'Strategic advice on partner admissions and retirements, succession planning and exit strategies for optical practices',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
];

const benefits = [
  {
    title: '30+ Years Optical Expertise',
    description: 'Three decades supporting optical practices, optometrists and dispensing opticians across the UK',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
  {
    title: 'NHS & Private Specialists',
    description: 'Deep understanding of GOS contracts, NHS frameworks and private optical fee structures',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Practice Sale Experience',
    description: 'Proven track record with optical practice valuations and successful business transactions',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    ),
  },
  {
    title: 'Regulatory Knowledge',
    description: 'Optical-specific regulatory understanding and GOC compliance support',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
];

const testimonials = [
  {
    name: 'Optical Practice Owner',
    role: 'Independent Optician, West Midlands',
    content: 'RUS has been our accountant for many years. Their knowledge of optical accounting, NHS contracts and VAT is excellent. They always provide practical advice and support when we need it.',
    rating: 5,
  },
];

const faqs = [
  {
    question: 'Do you specialise in optical practice accounting?',
    answer: 'Yes. We have over 30 years of experience supporting optical practices with accounts preparation, tax planning, NHS contract compliance and practice valuations. Our sector knowledge covers stock management, VAT advice and regulatory requirements specific to opticians.',
  },
  {
    question: 'Can you help with buying or selling an optical practice?',
    answer: (
      <>
        Absolutely. We provide <Link href="/services/business-advisory" className="text-[#01458f] underline hover:text-[#013a75] transition-colors">optical practice valuations</Link>, due diligence, negotiation support and structured exit planning. Whether you are buying or selling an optical practice, we guide you through the financial and regulatory implications.
      </>
    ),
  },
  {
    question: 'Do you support optometrists with accounting and tax?',
    answer: 'Yes. We help optometrists with self-assessment tax returns, self-employed vs limited company comparisons, expense optimization and tax planning. Our tailored approach ensures you maximize tax efficiency whilst meeting all compliance requirements.',
  },
  {
    question: 'Can you help with multiple optical practice ownership?',
    answer: 'Yes. We support optical groups and multiple practice owners with consolidated accounts, expansion planning, efficiency optimization and strategic business advice tailored to the optical sector.',
  },
];

const miniNavLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Benefits', href: '#benefits' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'FAQs', href: '#faqs' },
  { label: 'Insights', href: '#insights' },
];

export default function OpticalAccountingPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <ServiceHero
        title="Accountants for Optical Practices"
        subtitle="Expert support for opticians and practice owners"
        description="For over 30 years, we have provided specialist accounting, tax and advisory services to optical practice owners, optometrists and dispensing opticians across the UK. Our deep understanding of NHS optical contracts and regulatory requirements ensures you receive expert guidance tailored to the optical sector."
        imageUrl="https://imagedelivery.net/W93NbEGaswuledAsk5GMeA/e2bc1309-876a-4074-842e-599b666cc900/public"
      />

      <div id="services">
        <WhoWeHelp
          title="Specialist Optical Accounting Services"
          subtitle="Optical practices face unique financial and regulatory challenges.\nOur experienced team provides comprehensive support across all aspects of optical accounting and tax planning."
          clientTypes={opticalServices}
          bgColor="bg-gradient-to-br from-[#01458f] to-[#0052cc]"
          darkMode={true}
        />
      </div>

      <ServiceOverview
        leftContent={{
          title: 'Supporting Optical Professionals\nWith Confidence',
          description: 'Whether you are an optical practice owner, optometrist, dispensing optician or managing multiple practices, we understand the financial complexities you face. Our specialist team provides clear, practical guidance to help you stay compliant, maximise profitability and plan for growth.',
        }}
        rightContent={{
          stats: [
            { value: '30+', label: 'Years Experience' },
            { value: '80+', label: 'Optical Clients' },
          ],
        }}
        imageUrl="https://imagedelivery.net/W93NbEGaswuledAsk5GMeA/898991f7-cb47-467e-b6fa-5aa89153ee00/public"
      />

      <ServiceFAQ
        title="Who We Support"
        subtitle="Specialized accounting support for optical professionals at every stage"
        faqs={[
          {
            question: 'Locum Optometrists',
            answer: (
              <>
                <p className="mb-4">Locum optometrists often work across multiple practices and income streams, making accurate financial management essential. We support locums with:</p>
                <ul className="space-y-2 mb-4">
                  <li>• Setup advice including Limited Vs Self-Employed comparisons</li>
                  <li>• Company formations and advice on share structures</li>
                  <li>• Self-assessment tax returns</li>
                  <li>• Accounts preparation</li>
                  <li>• Remuneration (salary/dividend) advice for company users</li>
                  <li>• Digital accounting solutions - to get you MTD Ready</li>
                  <li>• Guidance on allowable expenses, equipment and travel</li>
                  <li>• VAT considerations for locum work</li>
                </ul>
                <p>Our aim is to simplify your financial obligations and help you maximise the benefits of locum work.</p>
              </>
            ),
          },
          {
            question: 'Optical Practices',
            answer: (
              <>
                <p className="mb-4">Independent optician practices face the dual complexity of clinical services and retail operations. We provide comprehensive support, including:</p>
                <ul className="space-y-2 mb-6">
                  <li>• Year-end accounts and tax returns</li>
                  <li>• Digital accounting systems and bookkeeping</li>
                  <li>• Payroll for clinical and retail staff</li>
                  <li>• Cashflow forecasting and budgeting</li>
                  <li>• Stock, sales and margin analysis</li>
                  <li>• Advice on managing mixed NHS and private income</li>
                  <li>• Strategic planning for growth, expansion or incorporation</li>
                  <li>• VAT compliance services</li>
                </ul>
                <h4 className="font-bold text-lg mb-2">Specialist VAT Advice — Partial Exemption</h4>
                <p className="mb-2">VAT for opticians is uniquely complex due to the combination of:</p>
                <ul className="space-y-2 mb-4">
                  <li>• VAT-exempt eye examinations</li>
                  <li>• VAT-able dispensing and retail sales</li>
                  <li>• GOS income, private fees and product sales</li>
                </ul>
                <p className="mb-2">We offer specialist guidance on:</p>
                <ul className="space-y-2 mb-4">
                  <li>• Partial exemption methods</li>
                  <li>• Apportionment calculations</li>
                  <li>• HMRC compliance</li>
                  <li>• Reviewing or improving your current VAT treatment</li>
                  <li>• Optimising VAT recovery where possible</li>
                </ul>
                <p>Our expertise helps practices stay compliant while ensuring their VAT position is as efficient as possible.</p>
              </>
            ),
          },
          {
            question: 'Buying or Selling an Opticians Practice',
            answer: (
              <>
                <p className="mb-4">When it comes to planning for the future of your optical practice, we're here to help. Whether you need a detailed business plan, a professional valuation, or guidance through the acquisition or sale of a practice, our team of experienced ophthalmic accountants and business advisors will support you at every stage.</p>
                <p className="mb-4">If you're looking to purchase a practice, we can support you with securing finance, preparing lending packs and sourcing funding to help turn your plans into reality. If you're preparing to sell, we can work with you well in advance to ensure your practice is structured, valued and presented in a way that maximises your outcome when the time is right.</p>
                <p className="mb-2">Our services include:</p>
                <ul className="space-y-2 mb-4">
                  <li>• Financial due diligence</li>
                  <li>• Practice valuation guidance</li>
                  <li>• Cashflow forecasting and business modelling for finance applications</li>
                  <li>• Reviewing NHS GOS income and retail performance</li>
                  <li>• Assessing staffing and overhead costs</li>
                  <li>• Tax-efficient structuring of the acquisition or sale</li>
                  <li>• Capital allowances and equipment considerations</li>
                  <li>• Exit planning and Business Asset Disposal Relief (where qualifying)</li>
                </ul>
                <p>Our role is to provide clarity, reduce risk and ensure you make informed decisions at every stage of the transaction.</p>
              </>
            ),
          },
        ]}
      />

      <div id="benefits">
        <ServiceBenefits title="Why Optical Professionals Choose Us" items={benefits} />
      </div>

      <div id="testimonials">
        <ServiceTestimonials
          title="Client Testimonials"
          subtitle="Hear from optical professionals we support across the UK"
          testimonials={testimonials}
        />
      </div>

      <CTASimple
        heading="Ready to work with specialist optical accountants?"
        supportingText="Three decades of optical sector expertise"
        buttonText="Get Started"
      />

      <div id="faqs">
        <ServiceFAQ
          title="Optical Accounting FAQs"
          subtitle="Common questions about our optical accounting services"
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
