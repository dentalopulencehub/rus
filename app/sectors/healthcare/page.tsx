import { Metadata } from 'next';
import Link from 'next/link';
import { ServiceHero } from '@/components/services/ServiceHero';
import { SubcategoriesGrid } from '@/components/services/SubcategoriesGrid';
import { WhoWeHelp } from '@/components/services/WhoWeHelp';
import { ServiceOverview } from '@/components/services/ServiceOverview';
import { ServiceBenefits } from '@/components/services/ServiceBenefits';
import { ServiceTestimonials } from '@/components/services/ServiceTestimonials';
import { ServiceFAQ } from '@/components/services/ServiceFAQ';
import { FAQSchema } from '@/components/seo/FAQSchema';
import { TaxationBenefits } from '@/components/services/TaxationBenefits';
import { InsightsPreview } from '@/components/home/InsightsPreview';
import { StickyMiniNav } from '@/components/services/StickyMiniNav';
import { CTASimple } from '@/components/home/CTASimple';

// Healthcare Subcategories
const healthcareSubcategories = [
  {
    name: 'Medical',
    slug: 'medical',
    description: 'Specialist accountancy for GPs, consultants, locums and medical practitioners',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    name: 'Dental',
    slug: 'dental',
    description: 'Tailored accounting services for dental practices, associates and orthodontists',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    name: 'Pharma',
    slug: 'pharma',
    description: 'Comprehensive support for pharmacy owners, superintendents and locum pharmacists',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
  },
  {
    name: 'Optical',
    slug: 'optical',
    description: 'Expert accounting for opticians, optometrists and optical practice owners',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
  },
];

export const metadata: Metadata = {
  title: 'Healthcare Accountants Birmingham | GP, Dental & Medical Practice Accounting | RUS',
  description: 'Specialist accountants for healthcare professionals. GP practice accounts, NHS pensions, dental practice accounting, medical tax planning. 30+ years healthcare expertise. Birmingham based.',
  keywords: [
    'GP accountants Birmingham',
    'healthcare accountants UK',
    'dental practice accountants',
    'NHS pension accountants',
    'medical practice accounting',
    'locum GP accountant',
    'PCN accounting',
    'practice manager accountants',
    'consultant accountants UK',
  ],
  openGraph: {
    title: 'Healthcare Sector Accountants | RUS Chartered Accountants',
    description: 'Specialist accountants for healthcare professionals with over 30 years experience.',
    type: 'website',
  },
  alternates: {
    canonical: 'https://rus.co.uk/sectors/healthcare',
  },
};

// Healthcare Services - EXACTLY 8 for design consistency
const healthcareServices = [
  {
    title: 'Accounts & Tax Compliance',
    description: 'Year-end accounts, partnership tax returns, self-assessment preparation and complete tax compliance for GPs, consultants and healthcare practitioners',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    title: 'NHS Pensions & Superannuation',
    description: 'Expert support with Locum form A & B guidance, annual superannuation certificates, Type 1 and Type 2 forms and pension tax charge planning',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: 'Practice Financial Management',
    description: 'Cashflow forecasting, budgeting, drawings planning, partner profit allocations, bookkeeping and payroll for GP practices and healthcare businesses',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Partnership & Structure Advice',
    description: 'Strategic guidance on partner changes, mergers, incorporations, share structures and business structure planning for medical partnerships',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: 'PCN Accounting & Reporting',
    description: 'Primary Care Network financial statements, income tracking and allocation, claim management, ARRS payroll and governance support',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    title: 'Private Practice Support',
    description: 'Accounts, tax planning, VAT guidance and business structure advice for private medical practitioners, consultants and independent clinics',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Succession Planning & Practice Sales',
    description: 'Strategic succession planning, practice valuations, buying and selling support for GP practices, dental surgeries, opticians and pharmacies',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    ),
  },
  {
    title: 'Regulatory Compliance & VAT',
    description: 'Healthcare-specific regulatory guidance, VAT advice for medical and optical services, CQC compliance support and sector reporting requirements',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
];

// Benefits - EXACTLY 4 for design consistency
const benefits = [
  {
    title: 'Over 30 Years\nHealthcare Expertise',
    description: 'Three decades supporting medical, dental, optical and pharmacy professionals across the UK',
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
      // eslint-disable-next-line @next/next/no-img-element
      <img src="https://imagedelivery.net/W93NbEGaswuledAsk5GMeA/0e632d3f-00c8-43b5-23ac-f6adbe4e1300/public" alt="NHS & Private Income Specialists" className="w-20 h-20 md:w-24 md:h-24" />
    ),
  },
  {
    title: 'Pensions & Superannuation Experts',
    description: 'Accurate NHS pension support, superannuation certificates and pension tax planning',
    icon: (
      // eslint-disable-next-line @next/next/no-img-element
      <img src="https://imagedelivery.net/W93NbEGaswuledAsk5GMeA/cd599fb0-6498-4d2d-c78f-5a72a0ee5800/public" alt="Pensions & Superannuation Experts" className="w-20 h-20 md:w-24 md:h-24" />
    ),
  },
  {
    title: 'Tailored Tax Planning for Medical Professionals',
    description: 'Customised tax strategies designed specifically for healthcare practitioners across all sectors',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
];

// Testimonials
const testimonials = [
  {
    name: 'Dr Sarah Mitchell',
    role: 'GP Partner, Greenfield Medical Practice',
    content: 'RUS has supported our practice for over 15 years. Their understanding of NHS structures, partnership accounting and pension compliance is exceptional. They provide clear, practical advice that helps us make informed decisions.',
    rating: 5,
  },
  {
    name: 'Dr James Chen',
    role: 'Consultant Orthopaedic Surgeon',
    content: 'Managing private practice income alongside NHS employment can be complex. RUS makes it straightforward. Their tax planning advice has been invaluable, and their knowledge of consultant-specific financial matters is first-class.',
    rating: 5,
  },
  {
    name: 'Emily Roberts',
    role: 'Practice Manager, Riverside Dental Surgery',
    content: 'The team at RUS understands the dental sector inside out. From practice accounts to buying and selling advice, their support has been professional, reliable and genuinely helpful. I would not hesitate to recommend them.',
    rating: 5,
  },
];

// FAQs
const faqs = [
  {
    question: 'Do you specialise in NHS pension and superannuation support?',
    answer: 'Yes. We provide expert NHS Pension Scheme guidance, including annual superannuation certificates, Type 1 and Type 2 forms, pension contribution calculations, assistance with locum form A & B and pension tax charge planning. Our team ensures your contributions are correct, deadlines are met and your pension position is fully understood.',
  },
  {
    question: 'Can you support GP practices with partnership changes and mergers?',
    answer: 'Absolutely. We provide strategic advice on partner admissions and retirements, profit-sharing arrangements, partnership agreements, practice mergers and incorporations. Our experience with GP partnerships ensures smooth transitions, clear documentation and tax-efficient structures that protect all parties involved.',
  },
  {
    question: 'Do you provide accountancy services for private clinics?',
    answer: 'Yes. We provide comprehensive accountancy and tax services for private medical clinics, including accounts preparation, VAT compliance, payroll management for clinic staff, business structure advice, financial forecasting and budgeting, regulatory compliance support and strategic tax planning. Our expertise covers independent clinics, specialist treatment centres and multi-location private healthcare facilities, ensuring your clinic operates efficiently and remains fully compliant with all financial and regulatory requirements.',
  },
  {
    question: 'Do you provide guidance on what expenditure I can claim for as a medic?',
    answer: (
      <>
        Yes. We provide comprehensive guidance on allowable expenditure for medical professionals, including professional subscriptions and indemnity insurance, medical equipment and instruments, uniform and protective clothing, continuing professional development and training courses, professional journals and reference materials, home office expenses and mileage claims. Our team ensures you claim all eligible expenses whilst remaining fully compliant with <Link href="/services/hmrc-nca-investigations" className="text-[#01458f] underline hover:text-[#013a75] transition-colors">HMRC regulations</Link>, maximising your tax efficiency and avoiding unnecessary queries.
      </>
    ),
  },
  {
    question: 'Do you support healthcare professionals with buying and selling practices?',
    answer: (
      <>
        Yes. We provide <Link href="/services/business-advisory" className="text-[#01458f] underline hover:text-[#013a75] transition-colors">practice valuations</Link>, due diligence, negotiation support and structured exit planning for GP practices, dental surgeries, opticians and pharmacies. Whether you are buying into a partnership, selling your share or acquiring a practice, we guide you through the financial and tax implications to ensure a smooth, well-planned transaction.
      </>
    ),
  },
  {
    question: 'What experience do you have with dental, optical and pharmacy accounting?',
    answer: (
      <>
        We have over 30 years of experience supporting dental practices, opticians and pharmacies with accounts, <Link href="/services/taxation-services" className="text-[#01458f] underline hover:text-[#013a75] transition-colors">tax planning</Link>, VAT advice, NHS contract compliance and practice sales. Our sector knowledge covers associate arrangements, private and mixed-income models, regulatory requirements and business structure planning tailored to each healthcare discipline.
      </>
    ),
  },
];

// Mini navigation links
const miniNavLinks = [
  { label: 'Subcategories', href: '#subcategories' },
  { label: 'Services', href: '#services' },
  { label: 'Benefits', href: '#benefits' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'FAQs', href: '#faqs' },
  { label: 'Insights', href: '#insights' },
];

export default function HealthcareSectorPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <ServiceHero
        title="Accountants for Healthcare Professionals"
        subtitle="Over 30 years supporting medical professionals"
        description="For more than three decades, we have developed a strong specialist interest in the healthcare sector, supporting medical professionals and healthcare businesses with tailored accountancy, tax and advisory services. Our in-depth understanding of the financial, regulatory and commercial challenges faced by healthcare providers allows us to deliver precise guidance and long-standing value to our clients."
        imageUrl="https://imagedelivery.net/W93NbEGaswuledAsk5GMeA/36dca29e-efa0-4cbe-90ff-4ddd5e461f00/public"
      />

      <div id="services">
        <WhoWeHelp
          title="Specialist Healthcare Accounting Services"
          subtitle="Healthcare professionals face unique financial challenges. Our experienced team provides comprehensive support across all aspects of healthcare accounting and tax planning."
          clientTypes={healthcareServices}
          bgColor="bg-gradient-to-br from-[#01458f] to-[#0052cc]"
          darkMode={true}
        />
      </div>

      <div id="subcategories">
        <SubcategoriesGrid
          title="Our Healthcare Services"
          subtitle="Explore our dedicated healthcare service pages below"
          items={healthcareSubcategories}
          basePath="/sectors/healthcare"
        />
      </div>

      <TaxationBenefits
        title="Comprehensive Healthcare Accounting Support"
        description="Our healthcare accounting services provide specialist support tailored to medical professionals, ensuring accurate financial management, NHS compliance, and strategic guidance to help your practice thrive."
      />

      <ServiceOverview
        leftContent={{
          title: 'Supporting Healthcare Providers\nWith Confidence',
          description: 'The healthcare sector is constantly evolving, and so are the challenges that come with it. Our long-standing experience means we understand the pressures faced by clinicians, practice owners and healthcare businesses — and we provide the financial insight needed to stay compliant, profitable and well-prepared for the future.',
        }}
        rightContent={{
          stats: [
            { value: '30+', label: 'Years Experience' },
            { value: '1000+', label: 'Healthcare Clients' },
          ],
        }}
        imageUrl="https://imagedelivery.net/W93NbEGaswuledAsk5GMeA/8e155de6-3d1e-4f70-3144-b8b2d9df8f00/public"
      />

      <CTASimple
        heading="Expert accounting for healthcare professionals"
        supportingText="Tailored financial support for medical, dental, optical and pharmacy professionals"
        buttonText="Get Started"
      />

      <div id="benefits">
        <ServiceBenefits title="Why Healthcare Professionals Choose Us" items={benefits} knowledgeIconUrl="https://imagedelivery.net/W93NbEGaswuledAsk5GMeA/f9011462-d707-49f5-82f3-4af3fa191400/public" knowledgeIconIndex={0} />
      </div>

      <div id="testimonials">
        <ServiceTestimonials
          title="Client Testimonials"
          subtitle="Hear from healthcare professionals we support across the UK"
          testimonials={testimonials}
        />
      </div>

      <CTASimple
        heading="Ready to work with specialist healthcare accountants?"
        supportingText="Three decades of dedicated healthcare sector experience"
        buttonText="Contact Us Today"
      />

      <div id="faqs">
        <ServiceFAQ
          title="Healthcare Sector FAQs"
          subtitle="Common questions about our healthcare accountancy services"
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
