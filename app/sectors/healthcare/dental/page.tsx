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
  title: 'Dental Accountants Birmingham | Dental Practice Accounting | RUS',
  description: 'Specialist accountants for dental professionals. Dental practice accounts, associate arrangements, NHS contract compliance, practice sales. 30+ years dental expertise. Birmingham based.',
  keywords: [
    'dental accountants Birmingham',
    'dental practice accountants',
    'dentist accountants UK',
    'dental associate accounting',
    'orthodontist accountants',
    'dental practice valuations',
    'NHS dental contract accounting',
  ],
  openGraph: {
    title: 'Dental Accountants | RUS Chartered Accountants',
    description: 'Specialist accountants for dental professionals with over 30 years experience.',
    type: 'website',
  },
  alternates: {
    canonical: 'https://rus.co.uk/sectors/healthcare/dental',
  },
};

const dentalServices = [
  {
    title: 'Dental Practice Accounting',
    description: 'Complete accounting services for dental practices including partnership accounts, profit allocation, bookkeeping and year-end compliance',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    title: 'Associate Arrangements',
    description: 'Tax planning and accounting for dental associates including self-employment vs limited company comparisons and expense optimization',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: 'NHS & Private Income',
    description: 'Specialist support for mixed NHS and private dental practices including UDA tracking, contract compliance and private fee optimization',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <circle cx="12" cy="12" r="9" />
        <text x="12" y="17" fontSize="12" fill="currentColor" stroke="none" textAnchor="middle" fontWeight="bold">£</text>
      </svg>
    ),
  },
  {
    title: 'Practice Valuations & Sales',
    description: 'Professional practice valuations, due diligence support and strategic advice for buying and selling dental practices',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    ),
  },
  {
    title: 'Squat Practice Start-ups',
    description: 'Complete support for new dental practice start-ups including budgeting, forecasting, CQC application support and business planning',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
  {
    title: 'VAT & Regulatory Compliance',
    description: 'VAT advice for dental services, regulatory compliance support and CQC guidance for dental practices',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
  {
    title: 'Partnership Planning',
    description: 'Strategic advice on partner admissions and retirements, profit-sharing arrangements and partnership agreements',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    title: 'Specialist Tax Planning',
    description: 'Tax-efficient remuneration strategies, pension planning and capital allowances for dental equipment investment',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
];

const benefits = [
  {
    title: '30+ Years Dental Expertise',
    description: 'Three decades supporting dental practices, associates and orthodontists across the UK',
    icon: (
      // eslint-disable-next-line @next/next/no-img-element
      <img src="https://imagedelivery.net/W93NbEGaswuledAsk5GMeA/5704b5ca-3a45-41f8-52ae-427eadcc4200/public" alt="30+ Years Dental Expertise" className="w-20 h-20 md:w-24 md:h-24" />
    ),
  },
  {
    title: 'NHS & Private Specialists',
    description: 'Deep understanding of NHS contracts, UDA tracking and private fee structures',
    icon: (
      // eslint-disable-next-line @next/next/no-img-element
      <img src="https://imagedelivery.net/W93NbEGaswuledAsk5GMeA/0e632d3f-00c8-43b5-23ac-f6adbe4e1300/public" alt="NHS & Private Specialists" className="w-20 h-20 md:w-24 md:h-24" />
    ),
  },
  {
    title: 'Practice Sale Experience',
    description: 'Proven track record with dental practice valuations and successful transactions',
    icon: (
      // eslint-disable-next-line @next/next/no-img-element
      <img src="https://imagedelivery.net/W93NbEGaswuledAsk5GMeA/03471e51-cc03-4103-0329-b0d81ad82700/public" alt="Practice Sale Experience" className="w-20 h-20 md:w-24 md:h-24" />
    ),
  },
  {
    title: 'Regulatory Knowledge',
    description: 'Dental-specific regulatory understanding and CQC compliance support',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
];

const testimonials = [
  {
    name: 'Amelia Jamil',
    role: 'Dental Office Manager',
    content: 'RUS Chartered Accountants have been instrumental to our journey. We opened as a brand-new squat practice in December 2023, and from the very beginning their guidance was exceptional. They supported us with detailed budgeting and forecast planning, and their help during our CQC application made the entire start-up process far less daunting. The team at RUS genuinely feel like an extension of our own. They are approachable, knowledgeable, and always available when we need support. I cannot recommend them highly enough.',
    rating: 5,
  },
  {
    name: 'Dr Olivia Hayes',
    role: 'Principal Dentist',
    content: 'The team at RUS understands the dental sector inside out. From practice accounts to buying and selling advice, their support has been professional, reliable and genuinely helpful. I would not hesitate to recommend them.',
    rating: 5,
  },
  {
    name: 'Daniel Park',
    role: 'Dental Associate',
    content: "As a self-employed associate, I needed clear advice on tax-efficient structures and what I could legitimately claim. RUS made the whole process simple and gave me confidence that my returns are accurate and optimised.",
    rating: 5,
  },
];

const faqs = [
  {
    question: 'Do you specialise in dental practice accounting?',
    answer: 'Yes. We have over 30 years of experience supporting dental practices with accounts preparation, tax planning, VAT advice, NHS contract compliance and practice sales. Our sector knowledge covers associate arrangements, private and mixed-income models, regulatory requirements and business structure planning.',
  },
  {
    question: 'Can you help with buying or selling a dental practice?',
    answer: (
      <>
        Absolutely. We provide <Link href="/services/business-advisory" className="text-[#01458f] underline hover:text-[#013a75] transition-colors">practice valuations</Link>, due diligence, negotiation support and structured exit planning. Whether you are buying into a partnership or selling your practice, we guide you through the financial and tax implications.
      </>
    ),
  },
  {
    question: 'Do you support dental associates with accounting and tax?',
    answer: 'Yes. We help dental associates with self-assessment tax returns, expense claims, self-employed vs limited company comparisons and tax planning. Our tailored approach ensures you maximize tax efficiency whilst meeting all compliance requirements.',
  },
  {
    question: 'Can you help with squat dental practice start-ups?',
    answer: 'Yes. We provide complete support for new dental practice start-ups including budgeting, cashflow forecasting, CQC application support, business planning and regulatory guidance. Our experience helps you launch successfully and avoid common pitfalls.',
  },
];

const miniNavLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Benefits', href: '#benefits' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'FAQs', href: '#faqs' },
  { label: 'Insights', href: '#insights' },
];

export default function DentalAccountingPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <ServiceHero
        title="Accountants for Dental Practices"
        subtitle="Expert support for dentists and practice owners"
        description="For over 30 years, we have provided specialist accounting, tax and advisory services to dental professionals across the UK. From practice owners and associates to orthodontists and squat practice start-ups, we deliver expert guidance tailored to the dental sector."
        imageUrl="https://imagedelivery.net/W93NbEGaswuledAsk5GMeA/5ab18624-2b25-4161-789c-acfb06f1e600/public"
      />

      <div id="services">
        <WhoWeHelp
          title="Specialist Dental Accounting Services"
          subtitle="Dental practices face unique financial challenges. Our experienced team provides comprehensive support across all aspects of dental accounting and tax planning."
          clientTypes={dentalServices}
          bgColor="bg-gradient-to-br from-[#01458f] to-[#0052cc]"
          darkMode={true}
        />
      </div>

      <ServiceOverview
        leftContent={{
          title: 'Supporting Dental Professionals\nWith Confidence',
          description: 'Whether you are a dental practice owner, associate, orthodontist or starting a new practice, we understand the financial complexities you face. Our specialist team provides clear, practical guidance to help you stay compliant, maximize tax efficiency and plan for growth.',
        }}
        rightContent={{
          stats: [
            { value: '30+', label: 'Years Experience' },
            { value: '200+', label: 'Dental Clients' },
          ],
        }}
        imageUrl="https://imagedelivery.net/W93NbEGaswuledAsk5GMeA/82e4541a-2b0f-46b5-5b5f-14a5ff82ab00/public"
      />

      <ServiceFAQ
        title="Who We Support"
        subtitle="Comprehensive accounting support tailored to every stage of your dental career"
        faqs={[
          {
            question: 'Principal Dentists',
            answer: (
              <>
                <p className="mb-4">Managing the financial side of a dental practice can be demanding, especially when balancing clinical responsibilities and patient care. At RUS, we specialise in dental accountancy, offering a comprehensive and proactive service that takes care of your practice's financial wellbeing while you focus on delivering exceptional dentistry. Our services include:</p>
                <ul className="space-y-2 mb-4">
                  <li>• Year-end accounts and partner/shareholder tax returns</li>
                  <li>• Drawings planning and remuneration strategies</li>
                  <li>• Cashflow forecasting, budgeting and financial planning</li>
                  <li>• Associate pay calculations and compliance</li>
                  <li>• Bookkeeping, payroll and digital accounting systems</li>
                  <li>• VAT advice for mixed NHS/private practices</li>
                  <li>• NHS contract income, UDA/UOA claims and private fee structures</li>
                  <li>• Benchmarking against national and regional performance</li>
                  <li>• Succession, incorporation and long-term planning</li>
                </ul>
                <p>Our aim is to provide stability and clarity, supporting both daily operations and long-term objectives.</p>
              </>
            ),
          },
          {
            question: 'Associate Dentists',
            answer: (
              <>
                <p className="mb-4">With decades of experience, we provide specialist support for dentists progressing into the next stage of their careers as Associates. Our guidance covers everything from tax and accountancy to practice planning, giving you the clarity and confidence needed to grow. By leaving the financial matters to us, you can focus fully on your clinical work — helping you become a true super associate and maximise your potential in modern dentistry. Our services include:</p>
                <ul className="space-y-2 mb-4">
                  <li>• Setup advice including Limited Vs Self-Employed comparisons</li>
                  <li>• Company formations and advice on share structures</li>
                  <li>• Self-assessment tax returns</li>
                  <li>• Accounts preparation</li>
                  <li>• Remuneration (salary/dividend) advice for company users</li>
                  <li>• Digital accounting solutions - to get you MTD Ready</li>
                  <li>• Bookkeeping setup and ongoing support</li>
                  <li>• Allowable expense guidance</li>
                  <li>• Support for associates working across NHS and private settings</li>
                  <li>• National Insurance planning</li>
                  <li>• Pension and investment considerations</li>
                  <li>• Advice for associates preparing to buy into or acquire a practice</li>
                </ul>
                <p>We simplify your financial responsibilities so you can focus on your clinical work.</p>
              </>
            ),
          },
          {
            question: 'Dental Hygienists & Dental Therapists',
            answer: (
              <>
                <p className="mb-4">We offer dedicated support for hygienists and therapists operating on a self-employed basis or within mixed practices. Our services include:</p>
                <ul className="space-y-2 mb-4">
                  <li>• Self-assessment tax returns</li>
                  <li>• Guidance on allowable expenses and consumables</li>
                  <li>• Bookkeeping and digital accounting setup</li>
                  <li>• Advice on contracts, income structures and sessional work</li>
                  <li>• Planning for savings, pensions and tax liabilities</li>
                </ul>
                <p>Whether you split your time across multiple practices or work independently, we ensure your finances are managed smoothly and efficiently.</p>
              </>
            ),
          },
          {
            question: 'Foundation Dentists (DFT) — Supporting Your Transition',
            answer: (
              <>
                <p className="mb-4">Transitioning from Foundation Training to becoming an associate is a key milestone. We offer friendly, practical guidance to help you start your career confidently. Our support includes:</p>
                <ul className="space-y-2 mb-4">
                  <li>• Becoming self-employed and registering correctly</li>
                  <li>• Setting up bookkeeping and record-keeping systems</li>
                  <li>• Advice on allowable expenses in your first year</li>
                  <li>• Digital accounting software setup</li>
                  <li>• First-year tax planning and budgeting</li>
                  <li>• Preparation for your first tax return</li>
                </ul>
                <p>We help you build strong financial habits from the very beginning.</p>
              </>
            ),
          },
          {
            question: 'Buying and Selling Dental Practices',
            answer: (
              <>
                <p className="mb-4">When it comes to buying or selling a dental practice, you need advisors who understand the financial, operational and regulatory complexities of the dental sector. We provide comprehensive support throughout the entire process — from preparing detailed business plans and assessing financial viability, to valuing your practice accurately and negotiating the terms of a sale or acquisition.</p>
                <p className="mb-4">Our experienced dental accountants and business advisors guide you through every stage, including due diligence, funding applications, cashflow forecasting, tax structuring and post-completion planning. Whether you're acquiring your first practice, expanding your portfolio or preparing for a profitable exit, we ensure you make well-informed decisions with confidence and clarity.</p>
                <p className="mb-2">We offer specialist advice for both buyers and sellers of dental practices, including:</p>
                <ul className="space-y-2 mb-4">
                  <li>• Financial due diligence</li>
                  <li>• Practice valuation support</li>
                  <li>• Cashflow projections for bank lending</li>
                  <li>• Structuring the acquisition tax-efficiently</li>
                  <li>• Reviewing NHS contracts and private income streams</li>
                  <li>• Staff cost analysis and associate agreements</li>
                  <li>• Capital allowances and equipment tax relief</li>
                  <li>• Exit planning and utilisation of Business Asset Disposal Relief (BADR where eligible)</li>
                </ul>
                <p>Our insight ensures smoother transactions, clearer valuations and informed decision-making.</p>
              </>
            ),
          },
          {
            question: 'Setting Up a Squat Practice',
            answer: (
              <>
                <p className="mb-4">Launching a squat practice is an exciting opportunity, but it requires careful planning, strong financial foundations and a clear strategy from day one. We specialise in guiding dentists through every stage of setting up a new practice, ensuring you begin with the stability, structure and confidence needed to succeed. Our support includes:</p>
                <ul className="space-y-2 mb-4">
                  <li>• Financial viability declarations for CQC applications</li>
                  <li>• Business plans for lenders and investors</li>
                  <li>• Forecasting, budgeting and breakeven analysis</li>
                  <li>• Cashflow planning for the first 12–36 months</li>
                  <li>• Digital accounting and practice management system setup</li>
                  <li>• Payroll, staffing cost planning and operational budgeting</li>
                </ul>
                <p>Our experience helps new practice owners establish a successful, sustainable dental business from day one.</p>
              </>
            ),
          },
        ]}
      />

      <div id="benefits">
        <ServiceBenefits title="Why Dental Professionals Choose Us" items={benefits} />
      </div>

      <div id="testimonials">
        <ServiceTestimonials
          title="Client Testimonials"
          subtitle="Hear from dental professionals we support across the UK"
          testimonials={testimonials}
        />
      </div>

      <CTASimple
        heading="Ready to work with specialist dental accountants?"
        supportingText="Three decades of dental sector expertise"
        buttonText="Get Started"
      />

      <div id="faqs">
        <ServiceFAQ
          title="Dental Accounting FAQs"
          subtitle="Common questions about our dental accounting services"
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
