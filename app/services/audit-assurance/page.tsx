import { Metadata } from 'next';
import Link from 'next/link';
import { ServiceHero } from '@/components/services/ServiceHero';
import { WhoWeHelp } from '@/components/services/WhoWeHelp';
import { ServiceOverview } from '@/components/services/ServiceOverview';
import { ServiceBenefits } from '@/components/services/ServiceBenefits';
import { ServiceTestimonials } from '@/components/services/ServiceTestimonials';
import { ServiceFAQ } from '@/components/services/ServiceFAQ';
import { CTASimple } from '@/components/home/CTASimple';
import { InsightsPreview } from '@/components/home/InsightsPreview';
import { StickyMiniNav } from '@/components/services/StickyMiniNav';

export const metadata: Metadata = {
  title: 'Audit & Assurance Services Birmingham | Statutory, Charity & SRA Audits | RUS',
  description: 'ICAEW registered auditors providing statutory audits, charity audits, SRA audits and assurance services. Independent, transparent reporting. 30+ years experience. Birmingham, UK.',
  keywords: [
    'audit services Birmingham',
    'statutory audit UK',
    'charity audit',
    'SRA audit solicitors',
    'ICAEW auditors Birmingham',
    'assurance services',
    'independent examination',
    'academy audit',
    'financial audit UK',
  ],
  openGraph: {
    title: 'Audit & Assurance Services | RUS Chartered Accountants',
    description: 'Independent audit and assurance services for UK businesses, charities, and professional practices.',
    type: 'website',
  },
  alternates: {
    canonical: 'https://rus.co.uk/services/audit-assurance',
  },
};

// Our Key Audit Services - EXACTLY 6 services from source document
const auditServices = [
  {
    title: 'Statutory Audits',
    description: 'For companies required to meet statutory audit thresholds, we deliver a meticulous and compliant audit that meets all legal and regulatory standards. Our approach is efficient, transparent and designed to minimise disruption to your operations',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: 'Charity Audits & Independent Examinations',
    description: 'We specialise in audits and independent examinations for charities, trusts and not-for-profit organisations. Our service ensures compliance with the Charities Act, Charity Commission requirements and applicable accounting frameworks such as SORP (FRS 102)',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    title: 'Solicitors Regulation Authority (SRA) Audits',
    description: 'We undertake SRA Accounts Rules audits for solicitors, legal practices and law firms. Our specialist knowledge ensures your client money handling procedures meet regulatory obligations, with a focus on accuracy, risk management and efficient process controls',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
      </svg>
    ),
  },
  {
    title: 'Assurance Reviews',
    description: 'For organisations not requiring a full audit, we offer assurance reviews that provide a reliable, independent assessment of financial information. This includes limited assurance reports, internal controls reviews and agreed-upon procedures tailored to your needs',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: 'Internal Controls & Systems Evaluation',
    description: 'Our auditors assess the effectiveness of your financial systems, identifying vulnerabilities and offering practical improvements to strengthen internal control environments',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
  },
  {
    title: 'Reporting for Stakeholders',
    description: 'We provide clear, concise and informative reports that give stakeholders confidence in your financial position, governance and compliance frameworks',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
];

// Benefits - EXACTLY 4 for design consistency
const benefits = [
  {
    title: 'Sector Expertise',
    description: 'Experienced auditors with sector-specific expertise across all industries',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
  {
    title: 'Independent Reporting',
    description: 'Independent, transparent and insightful reporting you can trust',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
  },
  {
    title: 'Risk-Focused Approach',
    description: 'A risk-focused approach that enhances financial governance and controls',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
    ),
  },
  {
    title: 'Efficient Process',
    description: 'Efficient processes designed to minimise disruption to your operations',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
];

// Testimonials
const testimonials = [
  {
    name: 'Rachel Foster',
    role: 'Trustee, Community Foundation',
    content: 'The charity audit from RUS was thorough, professional and extremely supportive. Their team understood our sector and helped us strengthen our financial controls significantly.',
    rating: 5,
  },
  {
    name: 'Michael Stevens',
    role: 'Senior Partner, Stevens & Associates Solicitors',
    content: 'RUS has handled our SRA audit for years. Their knowledge of the SRA Accounts Rules is exceptional, and their service is always efficient and reliable.',
    rating: 5,
  },
  {
    name: 'Victoria Hughes',
    role: 'Finance Director, Hughes Manufacturing Ltd',
    content: 'Our statutory audit was completed smoothly and professionally. The team provided valuable insights that have improved our financial governance and internal processes.',
    rating: 5,
  },
];

// FAQs
const faqs = [
  {
    question: 'When is a statutory audit required?',
    answer: 'Under UK law, a company must have a statutory audit if it meets certain thresholds. Generally, you need an audit if your company has exceeded two or more of the following in the previous two financial years: turnover of more than £10.2 million, balance sheet total of more than £5.1 million, or more than 50 employees. Certain types of organisations such as public limited companies (PLCs) must always have an audit regardless of size.',
  },
  {
    question: 'What is the difference between an audit and an independent examination?',
    answer: 'An audit provides the highest level of assurance on financial statements and involves extensive testing, verification and compliance checking. An independent examination is a lighter-touch review typically used by smaller charities not required to have a full audit. While less detailed than an audit, it still provides valuable independent scrutiny and assurance to stakeholders.',
  },
  {
    question: 'How long does an audit take?',
    answer: 'The duration of an audit depends on the size and complexity of your organisation, the quality of your records, and the type of audit required. A straightforward small company audit may take a few days, while larger or more complex audits can take several weeks. We work efficiently to minimise disruption and keep you informed throughout the process.',
  },
  {
    question: 'What do I need to prepare for an audit?',
    answer: 'You will need to provide year-end financial statements, accounting records, bank statements, invoices, contracts, minutes of board meetings, and any other relevant financial documentation. For charity audits, we also require governance documents and evidence of compliance with the Charities Act. We provide a detailed checklist at the start of each audit to ensure you have everything ready.',
  },
  {
    question: 'Can you audit charities and not-for-profit organisations?',
    answer: (
      <>
        Yes. We specialise in <Link href="/sectors/charities-not-for-profit" className="text-[#01458f] underline hover:text-[#013a75] transition-colors">charity audits</Link> and independent examinations. We understand the Charities SORP (FRS 102), Charity Commission requirements and the unique financial structures within the third sector. Our approach combines regulatory compliance with practical guidance to help charities strengthen governance and transparency.
      </>
    ),
  },
  {
    question: 'Do you provide SRA audits for solicitors?',
    answer: (
      <>
        Yes. We undertake SRA Accounts Rules audits for <Link href="/sectors/solicitors" className="text-[#01458f] underline hover:text-[#013a75] transition-colors">solicitors and law firms</Link>. Our specialist knowledge ensures your client money handling procedures meet regulatory obligations. We provide clear reporting to the SRA and practical recommendations to strengthen compliance and reduce exposure to breaches.
      </>
    ),
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

export default function AuditAssurancePage() {
  return (
    <>
      <ServiceHero
        title="Audit & Assurance"
        subtitle="Independent, accurate and trusted audit and assurance services designed to strengthen financial credibility and support regulatory compliance"
        description="A robust audit provides far more than a statutory requirement—it offers valuable insight into the health, integrity and resilience of your organisation. Our Audit & Assurance services deliver a clear and independent view of your financial position, ensuring transparency, compliance and confidence for stakeholders."
      />

      <div id="services">
        <WhoWeHelp
          title="Our Key Audit Services"
          subtitle="Comprehensive audit and assurance solutions carried out by qualified and experienced auditors"
          clientTypes={auditServices}
        />
      </div>

      <ServiceOverview
        leftContent={{
          title: 'A Trusted Partner in Strengthening Financial Integrity',
          description: 'Our Audit & Assurance service goes beyond statutory requirements. We aim to deliver confidence, clarity and enhanced governance for every organisation we work with. Whether you require a statutory audit, a charity audit or an SRA audit, we provide a professional and reliable service from start to finish.',
        }}
        rightContent={{
          stats: [
            { value: '30+', label: 'Years Experience' },
            { value: 'ICAEW', label: 'Registered Auditors' },
          ],
        }}
      />

      <div id="benefits">
        <ServiceBenefits title="Why Choose Our Audit & Assurance Services?" items={benefits} />
      </div>

      <div id="testimonials">
        <ServiceTestimonials
          title="Client Testimonials"
          subtitle="Hear from organisations we've supported with audit and assurance"
          testimonials={testimonials}
        />
      </div>

      <CTASimple />

      <div id="faqs">
        <ServiceFAQ
          title="Audit & Assurance FAQs"
          subtitle="Common questions about our audit and assurance services"
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
