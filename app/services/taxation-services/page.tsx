import { Metadata } from 'next';
import Link from 'next/link';
import { ServiceHero } from '@/components/services/ServiceHero';
import { ServiceOverview } from '@/components/services/ServiceOverview';
import { SubcategoriesGrid } from '@/components/services/SubcategoriesGrid';
import { WhoWeHelp } from '@/components/services/WhoWeHelp';
import { ServiceBenefits } from '@/components/services/ServiceBenefits';
import { ServiceTestimonials } from '@/components/services/ServiceTestimonials';
import { CTASimple } from '@/components/home/CTASimple';
import { ServiceFAQ } from '@/components/services/ServiceFAQ';
import { FAQSchema } from '@/components/seo/FAQSchema';
import { TaxationBenefits } from '@/components/services/TaxationBenefits';
import { InsightsPreview } from '@/components/home/InsightsPreview';
import { StickyMiniNav } from '@/components/services/StickyMiniNav';

export const metadata: Metadata = {
  title: 'Taxation Services | Expert Tax Advice & Compliance | RUS Chartered Accountants',
  description: 'Expert tax advice and compliance support for individuals and businesses across the UK. Strategic tax planning, HMRC support, VAT advice, and comprehensive taxation services from qualified specialists.',
  keywords: [
    'taxation services UK',
    'business tax advice',
    'personal tax returns',
    'inheritance tax planning',
    'corporation tax',
    'VAT advice',
    'HMRC support',
    'tax compliance',
    'capital gains tax',
    'tax planning Birmingham',
    'chartered accountants tax services',
  ],
  openGraph: {
    title: 'Taxation Services | RUS Chartered Accountants',
    description: 'Expert tax advice and compliance support for individuals and businesses across the UK.',
    type: 'website',
  },
};

const subcategories = [
  {
    name: 'Business Tax',
    slug: 'business-tax',
    description: 'Professional tax advice to help your business meet HMRC obligations and operate more efficiently',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    name: 'Personal Tax',
    slug: 'personal-tax',
    description: 'Tailored tax planning and self-assessment support for individuals across the UK',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
  },
  {
    name: 'Inheritance Tax',
    slug: 'inheritance-tax',
    description: 'Strategic IHT planning to protect your estate and secure your family\'s financial future',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
];

const expertiseItems = [
  {
    title: 'Business Tax Compliance',
    description: 'Accurate tax returns and strategic planning for businesses',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Personal Tax Planning',
    description: 'Self-assessment and strategic tax efficiency for individuals',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
  },
  {
    title: 'Inheritance Tax Strategy',
    description: 'Estate planning and wealth transfer optimisation',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    title: 'Capital Gains Tax',
    description: 'CGT planning for property, investments and disposals',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
  {
    title: 'Corporation Tax Services',
    description: 'Complete corporation tax compliance and advisory',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    title: 'VAT Advice',
    description: 'Digital VAT filing and Making Tax Digital compliance',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'HMRC Support',
    description: 'Correspondence, enquiries and investigation assistance',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
  {
    title: 'Tax-Efficient Structuring',
    description: 'Strategic structuring for companies and individuals',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
  },
];

const benefits = [
  {
    title: 'QUALIFIED SPECIALISTS',
    description: 'Comprehensive support from qualified tax specialists',
    icon: (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src="https://imagedelivery.net/W93NbEGaswuledAsk5GMeA/8edebfff-e521-427e-be26-660492fa6700/public"
        alt="Qualified specialists"
        className="w-24 h-24 md:w-28 md:h-28"
      />
    ),
  },
  {
    title: 'STRATEGIC PLANNING',
    description: 'Planning tailored to your financial goals',
    icon: (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src="https://imagedelivery.net/W93NbEGaswuledAsk5GMeA/697dfae1-43b0-4a3d-a34a-c50b0dd61500/public"
        alt="Strategic planning"
        className="w-24 h-24 md:w-28 md:h-28"
      />
    ),
  },
  {
    title: 'UP-TO-DATE KNOWLEDGE',
    description: 'Current expertise in UK tax legislation',
    icon: (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src="https://imagedelivery.net/W93NbEGaswuledAsk5GMeA/833eaae9-5cb5-44c0-d5d0-2269ccd15800/public"
        alt="Up-to-date knowledge"
        className="w-20 h-20 md:w-24 md:h-24"
      />
    ),
  },
  {
    title: 'TRANSPARENT FEES',
    description: 'Clear communication and transparent pricing',
    icon: (
      <svg className="w-16 h-16 md:w-20 md:h-20" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
];

const faqs = [
  {
    question: "When do I need to file a tax return?",
    answer: "You must file a Self-Assessment tax return if you're self-employed, a company director, have income from property, or earn over £100,000. The deadline is 31st January for online returns and 31st October for paper returns. We can help ensure you meet all deadlines and claim all available allowances."
  },
  {
    question: "How can I reduce my tax liability legally?",
    answer: "There are numerous legitimate ways to reduce tax, including making pension contributions, claiming all allowable business expenses, utilising ISA allowances, and strategic income timing. Our tax planning service identifies opportunities specific to your situation whilst ensuring full HMRC compliance."
  },
  {
    question: "What is Making Tax Digital (MTD)?",
    answer: "Making Tax Digital is HMRC's initiative requiring businesses to keep digital records and submit VAT returns using compatible software. We provide MTD-compliant solutions and support to ensure your business meets all digital tax requirements without disruption."
  },
  {
    question: "Do I need an accountant for my tax return?",
    answer: (
      <>
        Whilst simple tax returns can be completed yourself, an accountant ensures accuracy, maximises tax efficiency, and provides peace of mind. For self-employed individuals, <Link href="/sectors/property-services" className="text-[#01458f] underline hover:text-[#013a75] transition-colors">landlords</Link>, or anyone with complex affairs, professional support typically saves more in tax than the accountant's fee.
      </>
    ),
  },
  {
    question: "What happens if HMRC investigates my tax affairs?",
    answer: (
      <>
        HMRC enquiries can be stressful and time-consuming. Our <Link href="/services/hmrc-nca-investigations" className="text-[#01458f] underline hover:text-[#013a75] transition-colors">HMRC investigation support service</Link> provides professional representation, handles all correspondence, and ensures your interests are protected throughout the process. We work to resolve matters efficiently whilst minimising any potential liabilities.
      </>
    ),
  },
  {
    question: "How far back can I claim tax relief?",
    answer: "Generally, you can claim tax relief for up to four years from the end of the relevant tax year. This applies to various reliefs including employment expenses, charitable donations, and pension contributions. We can review your circumstances to identify any unclaimed reliefs."
  }
];

const testimonials = [
  {
    id: 1,
    name: "Happy Days Nursery",
    role: "Nursery Management",
    quote: "Happy Days Nursery has worked with RUS Chartered Accountants for over 24 years, and we have consistently found your services to be reliable, professional, and supportive of our evolving needs. Your team has always been responsive and proactive, particularly in assisting us with wages and payroll matters, which has been invaluable in ensuring smooth operations. We would certainly recommend your services to others in the sector.",
    featured: true,
  },
  {
    id: 2,
    name: "Dr Akbar Khattak",
    role: "General Practitioner",
    quote: "RUS has been an invaluable partner in supporting the financial side of our business. Their attention to detail and professionalism have given me real peace of mind. What I appreciate most is their sensitivity when dealing with financial matters and challenging situations, giving me the best advice for our situation. I would strongly recommend RUS to anyone in the industry who wants a practical, trustworthy, proactive accounting firm that truly works alongside you.",
  },
  {
    id: 3,
    name: "Amelia Jamil",
    role: "Dental Office Manager",
    company: "Dental Opulence",
    quote: "RUS Chartered Accountants have been instrumental to our journey at Dental Opulence. We opened as a brand-new squat practice in December 2023, and from the very beginning their guidance was exceptional. They supported us with detailed budgeting and forecast planning, and their help during our CQC application made the entire start-up process far less daunting. The team at RUS genuinely feel like an extension of our own. They are approachable, knowledgeable, and always available when we need support. I cannot recommend them highly enough.",
  },
  {
    id: 4,
    name: "Mrs Tracy Achieng",
    role: "Small Business Owner",
    quote: "Working with this team has been an incredibly positive experience, especially as someone who was completely new to the world of tax returns. From the very beginning, they were compassionate, understanding and patient. They provided a clear, easy-to-use template that I still use today to organise my income and expenses, which has made tax time far less stressful. What stands out most is their attitude when something needs attention or clarification. They treat you like a human being, not just another client or transaction — and that makes all the difference.",
  },
];

const clientTypes = [
  {
    name: 'Self-Employed',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    name: 'Self-Assessment',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    name: 'Professionals',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    name: 'Directors',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    name: 'Landlords',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    name: 'Investors',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
  {
    name: 'High Net Worth',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M14 8c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2h3zm0 0V6m0 2v2m0 0c0 1.105-1.343 2-3 2s-3-.895-3-2m6 0h3M9 16c0-1.105 1.343-2 3-2s3 .895 3 2-1.343 2-3 2h-3zm0 0v2m0-2v-2m0 0c0-1.105 1.343-2 3-2s3 .895 3 2m-6 0H6" />
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth={1.5} fill="none"/>
      </svg>
    ),
  },
];

const miniNavLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Expertise', href: '#expertise' },
  { label: 'Benefits', href: '#benefits' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'FAQs', href: '#faqs' },
  { label: 'Insights', href: '#insights' },
];

export default function TaxationServicesPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <ServiceHero
        title="Taxation Services"
        subtitle="Expert tax advice and compliance support for individuals and businesses across the UK"
        description="Managing tax efficiently is essential for maintaining compliance, reducing liabilities and protecting long-term financial wellbeing. Our specialist Taxation Services provide clear, strategic guidance across all major UK tax areas, helping you stay fully compliant with HMRC whilst making the most of available allowances and planning opportunities."
        imageUrl="https://imagedelivery.net/W93NbEGaswuledAsk5GMeA/7fd3e279-1a9c-4e10-530a-5a3d54366c00/public"
      />

      <div id="services">
        <SubcategoriesGrid
          title="Our Taxation Services"
          subtitle="Explore our dedicated tax service pages below"
          items={subcategories}
          basePath="/services/taxation-services"
        />
      </div>

      <WhoWeHelp
        title="Our Taxation Expertise"
        subtitle=""
        clientTypes={expertiseItems}
        bgColor="bg-gradient-to-br from-[#01458f] to-[#0052cc]"
        darkMode={true}
      />

      <ServiceOverview
        leftContent={{
          title: "Comprehensive Tax Support",
          description: "From business tax obligations and personal tax returns to inheritance tax planning and complex advisory matters, we deliver accurate, timely and proactive support at every stage. Our team of qualified tax specialists combines technical expertise with strategic thinking to help you navigate the complexities of UK taxation."
        }}
        rightContent={{
          stats: [
            { value: "30+", label: "Years Experience" },
            { value: "ICAEW", label: "Chartered" },
          ]
        }}
        imageUrl="https://imagedelivery.net/W93NbEGaswuledAsk5GMeA/5eae8dff-fe0c-4e00-24b8-24089de31f00/public"
      />

      <div id="benefits">
        <TaxationBenefits
          title="Comprehensive Tax Support"
          description="Our taxation services provide clear, strategic guidance across all major UK tax areas, helping you stay fully compliant with HMRC while making the most of available allowances and planning opportunities."
        />
      </div>

      {/* CTA after Comprehensive Tax Support */}
      <section className="w-full flex items-center justify-center bg-white px-4 py-24">
        <div className="max-w-6xl mx-auto w-full">
          <div className="relative bg-gradient-to-br from-[#01458f] to-[#0052cc] rounded-3xl overflow-hidden px-8 md:px-16 py-20 md:py-28">
            {/* SVG Background */}
            <div className="absolute inset-0 w-full h-full opacity-20">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/minimal-modern-hero-background-with-deep-royal-blu 1.svg"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center text-center space-y-6">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight">
                Stay one step ahead of HMRC
              </h2>

              <p className="text-white/90 text-base md:text-lg -mb-2">
                Activate your tax investigation cover
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col md:flex-row items-center gap-4">
                <a
                  href="/contact"
                  className="relative inline-flex items-center justify-center px-32 py-2 bg-white text-gray-900 rounded-full text-base md:text-lg font-semibold hover:shadow-2xl hover:shadow-white/30 transition-all duration-300 overflow-hidden group"
                >
                  {/* Layer 1: Glassmorphic backdrop */}
                  <div className="absolute inset-0 -z-10 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-md backdrop-saturate-150" />

                  {/* Layer 2: Gradient shimmer */}
                  <div className="absolute inset-0 -z-20 bg-gradient-to-br from-white/30 via-white/10 to-white/30 rounded-full opacity-0 group-hover:opacity-40 transition-all duration-300" />

                  {/* Layer 3: Solid background */}
                  <div className="absolute inset-0 -z-30 bg-white rounded-full transition-all duration-300 group-hover:bg-white/95" />

                  <span className="relative z-10">Contact Us</span>
                </a>

                <a
                  href="/who-we-are"
                  className="relative inline-flex items-center justify-center px-8 py-3 bg-gray-900 text-white rounded-full text-sm font-medium hover:shadow-2xl hover:shadow-gray-900/30 transition-all duration-300 overflow-hidden group"
                >
                  {/* Layer 1: Glassmorphic backdrop */}
                  <div className="absolute inset-0 -z-10 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-md backdrop-saturate-150" />

                  {/* Layer 2: Gradient shimmer */}
                  <div className="absolute inset-0 -z-20 bg-gradient-to-br from-gray-800/30 via-gray-700/10 to-gray-800/30 rounded-full opacity-0 group-hover:opacity-40 transition-all duration-300" />

                  {/* Layer 3: Solid background */}
                  <div className="absolute inset-0 -z-30 bg-gray-900 rounded-full transition-all duration-300 group-hover:bg-gray-800" />

                  <span className="relative z-10">Learn More</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ServiceBenefits
        title="Why Choose Our Tax Services?"
        items={benefits}
      />

      <div id="testimonials">
        <ServiceTestimonials
          title="Client Testimonials"
          subtitle="Hear from businesses and individuals we've supported across the UK"
          testimonials={testimonials}
        />
      </div>

      <CTASimple />

      <div id="faqs">
        <ServiceFAQ
          title="Taxation FAQs"
          subtitle="Common questions about our taxation services"
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
