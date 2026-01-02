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
  title: 'Charity Accountants Birmingham | Charity Audits & SORP Compliance | RUS',
  description: 'Specialist accountants for charities and not-for-profit organisations. Charity audits, independent examinations, SORP accounts, Gift Aid, trustee reporting. Birmingham charity accountants.',
  keywords: [
    'charity accountants Birmingham',
    'charity audit UK',
    'SORP accountants',
    'independent examination',
    'Gift Aid accountants',
    'trustee accounts',
    'charity commission compliance',
    'not-for-profit accountants',
  ],
  openGraph: {
    title: 'Charity & Not-for-Profit Accountants | RUS Chartered Accountants',
    description: 'Specialist accountants for charities, social enterprises and not-for-profit organisations.',
    type: 'website',
  },
  alternates: {
    canonical: 'https://rus.co.uk/sectors/charities-not-for-profit',
  },
};

// Charity Services - EXACTLY 8 for design consistency
const charityServices = [
  {
    title: 'Charity Tax Returns (CT600)',
    description: 'Full compliance with HMRC filing obligations, clear reporting on trading and non-primary purpose income, identification of tax-exempt activities and claims for charitable reliefs',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    title: 'Charity Gift Aid Returns',
    description: 'Preparation and submission of Gift Aid claims, review of donor records, GASDS guidance, and support to maximise Gift Aid recovery safely and compliantly',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Charity Payroll Services',
    description: 'Fully managed payroll processing, auto-enrolment pensions, restricted fund allocation, grant-funded post support and payslip administration for charity staff and volunteers',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: 'Charity Audits',
    description: 'Independent statutory audits compliant with Charity Commission requirements, thorough financial controls review, governance assessment and clear trustee reporting',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: 'Independent Examinations',
    description: 'Cost-effective independent examinations for charities below audit thresholds, SORP compliance review, trustee assurance and financial control improvements',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: 'Statutory Accounts (SORP Compliance)',
    description: 'Charity accounts compliant with Charities SORP (FRS 102), Charity Commission guidance, fund accounting principles and trustee reporting requirements',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    title: 'Fund Accounting & Bookkeeping',
    description: 'Digital accounting systems for restricted and unrestricted funds, multi-income stream tracking, grant reporting and cloud-based fund management',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
      </svg>
    ),
  },
  {
    title: 'Trading Subsidiaries Advice',
    description: 'Structure advice for charity trading arms, tax planning, group accounts support and Gift Aid donation strategies to ensure compliance and tax efficiency',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
];

// 4 Key Benefits
const benefits = [
  {
    title: 'Over 30 Years Charity Sector Expertise',
    description: 'Three decades supporting charities, social enterprises, trusts and not-for-profit organisations with specialist accounting, audit and compliance services.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
  {
    title: 'SORP & Fund Accounting Specialists',
    description: 'In-depth understanding of Charities SORP (FRS 102), restricted vs unrestricted funds, grant accounting and Charity Commission reporting requirements.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
  },
  {
    title: 'Trustee Reporting & Governance Support',
    description: 'Clear financial summaries for trustees, governance advice, compliance responsibility guidance and transparent reporting for all stakeholders.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: 'All Sizes - Small Groups to Large Charities',
    description: 'Support for organisations of all sizes, from small community groups and social enterprises to large registered charities with complex structures.',
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
    name: 'Helen Carter',
    role: 'Chair of Trustees, Midlands Community Foundation',
    content: 'RUS Accountancy has supported our foundation for over ten years. Their understanding of charity law, SORP compliance and fund accounting is exceptional. They provide clear, jargon-free advice that helps our trustees make informed decisions.',
    rating: 5,
  },
  {
    name: 'David Thompson',
    role: 'Director, Aspire Social Enterprise',
    content: 'Managing restricted and unrestricted funds was challenging until we partnered with RUS. Their fund accounting expertise and Gift Aid support have strengthened our financial governance and improved our reporting to funders.',
    rating: 5,
  },
  {
    name: 'Sarah Williams',
    role: 'Finance Director, Birmingham Youth Trust',
    content: 'From statutory audits to trustee reporting, RUS delivers professional, reliable support tailored to the charity sector. Their team understands our mission and provides practical guidance that helps us focus on impact.',
    rating: 5,
  },
];

// 6 Frequently Asked Questions
const faqs = [
  {
    question: 'What are the SORP compliance requirements for charities?',
    answer: 'Charities in England and Wales must prepare accounts following the Charities SORP (Statement of Recommended Practice) FRS 102. This includes presenting a Statement of Financial Activities (SOFA), balance sheet, cashflow statement (for larger charities), and trustees\' annual report. The SORP requires clear distinction between restricted, unrestricted and endowment funds, and specific disclosures about grants, donations and charitable activities. We ensure your accounts fully comply with SORP requirements and present financial information clearly for trustees, funders and the Charity Commission.',
  },
  {
    question: 'When does a charity need an audit versus an independent examination?',
    answer: 'The requirement depends on your charity\'s income and assets. Generally, charities with gross income over £1 million require a statutory audit. Charities with income between £25,000 and £1 million typically need an independent examination, unless their governing document requires an audit or they have assets exceeding £3.26 million and income over £250,000. We advise on your specific requirements based on your charity\'s size, structure and governing documents, and provide both audit and independent examination services.',
  },
  {
    question: 'How do we claim Gift Aid on donations?',
    answer: 'Gift Aid allows charities to claim 25p for every £1 donated by UK taxpayers who make valid Gift Aid declarations. We help you establish robust donor record systems, ensure declarations are properly obtained and maintained, prepare and submit Gift Aid claims to HMRC, and advise on the Gift Aid Small Donations Scheme (GASDS) which allows claims on small donations without declarations. Our support ensures you maximise Gift Aid income while maintaining full HMRC compliance.',
  },
  {
    question: 'How should we manage restricted versus unrestricted funds?',
    answer: 'Restricted funds are donations or grants given for specific purposes and must be accounted for separately from unrestricted (general) funds. We help you implement fund accounting systems that track income and expenditure against each restricted fund, ensure compliance with donor restrictions, provide clear reporting to funders and trustees, and identify when funds become spent or require reallocation. Proper fund accounting is essential for transparency, compliance and maintaining donor confidence.',
  },
  {
    question: 'Should our charity set up a trading subsidiary?',
    answer: 'A trading subsidiary may be appropriate if your charity undertakes significant non-primary purpose trading that could put your charitable tax exemptions at risk. Common examples include commercial trading, venue hire, or product sales. We advise on structure options (typically a wholly-owned limited company), tax implications, Gift Aid donation strategies to pass profits to the parent charity, and group accounting requirements. This protects your charity\'s tax status while allowing commercial activities to generate income.',
  },
  {
    question: 'What do we need to report to the Charity Commission?',
    answer: 'Registered charities must file an annual return and accounts with the Charity Commission, with requirements varying by income level. This includes financial information, trustee details, charitable activities, public benefit statement and governance information. Charities with income over £25,000 must submit accounts (independently examined or audited depending on size), while larger charities require full trustees\' annual reports. We prepare compliant accounts and reports that meet all Charity Commission requirements and present your work clearly to stakeholders.',
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

export default function CharitiesNotForProfitPage() {
  return (
    <>
      <ServiceHero
        title="Charities & Not-for-Profit Sector Accountancy"
        subtitle="Specialist accountancy, audit and advisory services for charities, social enterprises and not-for-profit organisations"
        description="Charities and not-for-profit organisations operate under distinct financial, governance and reporting requirements. With over 30 years of experience supporting charitable bodies, community organisations, trusts and not-for-profit entities, we understand the unique challenges you face — from regulatory compliance and trustee reporting to managing restricted funds and preparing statutory accounts in line with SORP."
        imageUrl="https://imagedelivery.net/W93NbEGaswuledAsk5GMeA/5e31adbb-9e22-4216-29fd-72e071c3c600/public"
      />

      <div id="services">
        <WhoWeHelp
          title="Specialist Accountants for Charities & Not-for-Profit Organisations"
          subtitle="Our dedicated team provides clear, accurate and sector-specific support, helping you maintain strong financial governance, demonstrate transparency to stakeholders and focus on delivering impact"
          clientTypes={charityServices}
        />
      </div>

      <ServiceOverview
        leftContent={{
          title: 'Supporting Charities to Deliver Meaningful Impact',
          description: 'From small community groups to large registered charities, we provide dependable accounting and audit expertise that supports compliance, governance and long-term sustainability. With specialist knowledge in SORP, fund accounting and Charity Commission reporting, we help you navigate the sector with confidence.',
        }}
        rightContent={{
          stats: [
            { value: '30+', label: 'Years Experience' },
            { value: '200+', label: 'Charity Clients' },
          ],
        }}
        imageUrl="https://imagedelivery.net/W93NbEGaswuledAsk5GMeA/1eb712cc-bfc2-46e1-7315-3233835f9000/public"
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
                Expert accounting for<br />charities and not-for-profits
              </h2>

              <a href="/contact" className="relative inline-flex items-center justify-center px-32 py-2 bg-white text-gray-900 rounded-full text-base md:text-lg font-semibold hover:shadow-2xl hover:shadow-white/30 transition-all duration-300 overflow-hidden group">
                <div className="absolute inset-0 -z-10 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-md backdrop-saturate-150" />
                <div className="absolute inset-0 -z-20 bg-gradient-to-br from-white/30 via-white/10 to-white/30 rounded-full opacity-0 group-hover:opacity-40 transition-all duration-300" />
                <div className="absolute inset-0 -z-30 bg-white rounded-full transition-all duration-300 group-hover:bg-white/95" />
                <span className="relative z-10">Get Started</span>
              </a>

              <p className="text-white/90 text-sm md:text-base">
                Specialist charity accounting, audits, SORP compliance and Gift Aid support
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
        <ServiceBenefits title="Why Charities Choose Us" items={benefits} />
      </div>

      <div id="testimonials">
        <ServiceTestimonials
          title="Client Testimonials"
          subtitle="Hear from charities and not-for-profit organisations we support across the UK"
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
                Ready to strengthen<br />financial governance?
              </h2>

              <a href="/contact" className="relative inline-flex items-center justify-center px-32 py-2 bg-white text-gray-900 rounded-full text-base md:text-lg font-semibold hover:shadow-2xl hover:shadow-white/30 transition-all duration-300 overflow-hidden group">
                <div className="absolute inset-0 -z-10 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-md backdrop-saturate-150" />
                <div className="absolute inset-0 -z-20 bg-gradient-to-br from-white/30 via-white/10 to-white/30 rounded-full opacity-0 group-hover:opacity-40 transition-all duration-300" />
                <div className="absolute inset-0 -z-30 bg-white rounded-full transition-all duration-300 group-hover:bg-white/95" />
                <span className="relative z-10">Contact Us Today</span>
              </a>

              <p className="text-white/90 text-sm md:text-base">
                Over 30 years of charity and not-for-profit sector accounting expertise
              </p>
            </div>
          </div>
        </div>
      </section>

      <div id="faqs">
        <ServiceFAQ
          title="Charity & Not-for-Profit FAQs"
          subtitle="Common questions about our charity accountancy and audit services"
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
