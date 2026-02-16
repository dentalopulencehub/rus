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
import { CTASimple } from '@/components/home/CTASimple';
import { StickyMiniNav } from '@/components/services/StickyMiniNav';

export const metadata: Metadata = {
  title: 'Business Tax Services Birmingham | Corporation Tax & VAT | RUS',
  description: 'Expert business tax services for UK companies. Corporation tax, VAT, R&D tax credits, business tax planning and HMRC compliance. Birmingham-based chartered accountants.',
  keywords: [
    'business tax services',
    'corporation tax UK',
    'VAT advice Birmingham',
    'R&D tax credits',
    'business tax planning',
    'company tax returns',
    'HMRC compliance',
    'capital allowances',
  ],
  openGraph: {
    title: 'Business Tax Services | RUS Chartered Accountants',
    description: 'Expert business tax services for UK companies.',
    type: 'website',
  },
  alternates: {
    canonical: 'https://rus.co.uk/services/taxation-services/business-tax',
  },
};

// Business Tax Services - EXACTLY 8 for design consistency
const businessTaxServices = [
  {
    title: 'Corporation Tax Planning',
    description: 'Strategic tax planning to minimise corporation tax liabilities while ensuring full HMRC compliance and maximising tax efficiency',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    title: 'VAT Compliance & Advice',
    description: 'Comprehensive VAT support including registration, returns, planning, partial exemption, international VAT and Making Tax Digital compliance',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    title: 'R&D Tax Credits',
    description: 'Maximise innovation relief through R&D tax credit claims, ensuring you receive every pound you are entitled to for qualifying expenditure',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    title: 'Capital Allowances',
    description: 'Identify and claim capital allowances on qualifying assets, plant and machinery to reduce taxable profits and improve cashflow',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Company Tax Returns',
    description: 'Accurate and timely CT600 preparation and filing, ensuring compliance with all HMRC requirements and avoiding penalties',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Tax Efficient Remuneration',
    description: 'Strategic planning of salary, dividends, bonuses and benefits to optimise tax efficiency for directors and shareholders',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Group & International Tax',
    description: 'Expert advice on group relief, transfer pricing, cross-border transactions and international tax structures',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'HMRC Enquiries & Disputes',
    description: 'Professional representation and support during HMRC investigations, enquiries and disputes to protect your interests',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
];

// Benefits - EXACTLY 4 for design consistency
const benefits = [
  {
    title: 'Proactive Tax Planning',
    description: 'Forward-thinking strategies to minimise tax liabilities and maximise commercial opportunities',
    icon: (
      // eslint-disable-next-line @next/next/no-img-element
      <img src="https://imagedelivery.net/W93NbEGaswuledAsk5GMeA/086d91c1-d009-4a85-b151-ffd206733500/public" alt="Proactive Tax Planning" className="w-20 h-20 md:w-24 md:h-24" />
    ),
  },
  {
    title: 'HMRC Compliance Experts',
    description: 'Ensuring full compliance with all tax legislation and HMRC requirements',
    icon: (
      // eslint-disable-next-line @next/next/no-img-element
      <img src="https://imagedelivery.net/W93NbEGaswuledAsk5GMeA/a48ad60d-8d95-4a0a-a4cd-8d24f7280a00/public" alt="HMRC Compliance Experts" className="w-20 h-20 md:w-24 md:h-24" />
    ),
  },
  {
    title: 'Sector Specialists',
    description: 'Deep knowledge across multiple industries including healthcare, retail and professional services',
    icon: (
      // eslint-disable-next-line @next/next/no-img-element
      <img src="https://imagedelivery.net/W93NbEGaswuledAsk5GMeA/cd599fb0-6498-4d2d-c78f-5a72a0ee5800/public" alt="Sector Specialists" className="w-20 h-20 md:w-24 md:h-24" />
    ),
  },
  {
    title: 'Clear, Practical Advice',
    description: 'Tax advice delivered in plain English, helping you make informed business decisions',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
      </svg>
    ),
  },
];

// Testimonials
const testimonials = [
  {
    name: 'Sarah Thompson',
    role: 'Director, Thompson Engineering Ltd',
    content: 'RUS helped us claim R&D tax credits we did not even know we were entitled to. Their expertise in business tax has saved us thousands and their advice is always practical and easy to understand.',
    rating: 5,
  },
  {
    name: 'Michael Chen',
    role: 'CEO, Digital Innovations Group',
    content: 'The team at RUS provides exceptional corporation tax planning. They are proactive, knowledgeable and always find ways to optimise our tax position legally and ethically. Highly recommended.',
    rating: 5,
  },
  {
    name: 'Amanda Roberts',
    role: 'Finance Director, Roberts Retail Ltd',
    content: 'We have worked with RUS for VAT compliance and business tax planning for over 10 years. Their service is professional, reliable and they genuinely care about helping our business succeed.',
    rating: 5,
  },
];

// FAQs
const faqs = [
  {
    question: 'What is corporation tax and when is it due?',
    answer: 'Corporation tax is charged on company profits. The current rate is 25% for profits over £250,000 and 19% for profits up to £50,000 (with marginal relief between). Corporation tax returns (CT600) must be filed within 12 months of your accounting period end, and tax is due 9 months and 1 day after the period end. We ensure your returns are accurate, timely and fully compliant.',
  },
  {
    question: 'Can you help with R&D tax credit claims?',
    answer: (
      <>
        Yes. We have extensive experience preparing R&D tax credit claims for businesses developing new products, processes or services. Our team identifies qualifying expenditure, prepares technical reports and liaises with HMRC to maximise your claim. R&D relief can deliver significant <Link href="/services/business-advisory" className="text-[#01458f] underline hover:text-[#013a75] transition-colors">cashflow benefits</Link> and reduce your corporation tax liability substantially.
      </>
    ),
  },
  {
    question: 'Do you provide VAT advice and compliance support?',
    answer: 'Absolutely. We support businesses with VAT registration, quarterly returns, Making Tax Digital compliance, partial exemption, international VAT and VAT planning. Whether you need routine compliance support or strategic advice on complex VAT issues, our team provides clear, practical guidance tailored to your business.',
  },
  {
    question: 'How can you help reduce our business tax liability?',
    answer: 'We use proactive tax planning to identify opportunities including capital allowances, R&D tax credits, group relief, tax-efficient remuneration strategies and timing of income and expenditure. Our approach is designed to minimise tax legally and ethically while ensuring full HMRC compliance and supporting your wider commercial objectives.',
  },
  {
    question: 'What is included in your corporation tax service?',
    answer: (
      <>
        Our service includes preparation of your CT600 corporation tax return, tax computations, analysis of taxable profits, identification of reliefs and allowances, strategic tax planning advice and full HMRC filing. We also provide ongoing support for <Link href="/services/payroll" className="text-[#01458f] underline hover:text-[#013a75] transition-colors">PAYE and payroll taxes</Link>, ensuring your business remains compliant across all tax obligations.
      </>
    ),
  },
  {
    question: 'Can you represent us during an HMRC tax enquiry?',
    answer: 'Yes. We provide professional representation during HMRC enquiries, investigations and disputes. Our team liaises directly with HMRC, prepares necessary documentation and defends your position robustly while maintaining positive working relationships with tax authorities. We aim to resolve matters efficiently and favourably, minimising disruption to your business.',
  },
];

// Mini navigation links
const miniNavLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Benefits', href: '#benefits' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'FAQs', href: '#faqs' },
  { label: 'Insights', href: '#insights' },
];

export default function BusinessTaxPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <ServiceHero
        title="Business Tax Services"
        subtitle="Expert tax planning and compliance for UK businesses"
        description="We provide comprehensive business tax services designed to minimise your tax liabilities, ensure HMRC compliance and support your commercial objectives. Our experienced team delivers proactive tax planning, accurate returns and strategic advice across corporation tax, VAT, R&D tax credits and all business tax matters."
        imageUrl="https://imagedelivery.net/W93NbEGaswuledAsk5GMeA/ed068751-333a-470e-e059-2ac0d889a700/public"
      />

      <div id="services">
        <WhoWeHelp
          title="Comprehensive Business Tax Solutions"
          subtitle="From corporation tax and VAT to R&D credits and international tax, we provide expert guidance across all business tax matters."
          clientTypes={businessTaxServices}
        />
      </div>

      <ServiceOverview
        leftContent={{
          title: 'Proactive Tax Planning for UK Businesses',
          description: 'Tax legislation is complex and constantly changing. Our team stays ahead of these changes, ensuring you benefit from every available relief and allowance while maintaining full compliance with HMRC requirements. We provide clear, practical advice that supports your business goals.',
        }}
        rightContent={{
          stats: [
            { value: '30+', label: 'Years Experience' },
            { value: '500+', label: 'Business Clients' },
          ],
        }}
        imageUrl="https://imagedelivery.net/W93NbEGaswuledAsk5GMeA/3b6ae246-9b1d-43b2-954e-96c7ea20bf00/public"
      />

      <CTASimple
        heading="Reduce your business tax with expert planning"
        supportingText="Corporation tax, VAT, R&D credits and comprehensive business tax support"
        buttonText="Get Started"
      />

      <div id="benefits">
        <ServiceBenefits title="Why Choose RUS for Business Tax" items={benefits} />
      </div>

      <div id="testimonials">
        <ServiceTestimonials
          title="Client Testimonials"
          subtitle="Hear from businesses we support across the UK"
          testimonials={testimonials}
        />
      </div>

      <CTASimple
        heading="Ready for expert business tax advice?"
        supportingText="Trusted business tax specialists for over 30 years"
        buttonText="Contact Us Today"
      />

      <div id="faqs">
        <ServiceFAQ
          title="Business Tax FAQs"
          subtitle="Common questions about our business tax services"
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
