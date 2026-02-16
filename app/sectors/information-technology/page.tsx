import { Metadata } from 'next';
import { ServiceHero } from '@/components/services/ServiceHero';
import { WhoWeHelp } from '@/components/services/WhoWeHelp';
import { ServiceOverview } from '@/components/services/ServiceOverview';
import { ServiceBenefits } from '@/components/services/ServiceBenefits';
import { ServiceTestimonials } from '@/components/services/ServiceTestimonials';
import { ServiceFAQ } from '@/components/services/ServiceFAQ';
import { InsightsPreview } from '@/components/home/InsightsPreview';
import { StickyMiniNav } from '@/components/services/StickyMiniNav';
import { CTASimple } from '@/components/home/CTASimple';

export const metadata: Metadata = {
  title: 'IT & Tech Accountants Birmingham | Software, SaaS & Startups | R&D Tax Credits | RUS',
  description: 'Expert accountants for tech startups, software developers, SaaS businesses and IT consultants. R&D tax credits, share schemes, investor reporting. Birmingham tech accountants.',
  keywords: [
    'tech startup accountants Birmingham',
    'SaaS accountants UK',
    'software developer accountants',
    'R&D tax credits Birmingham',
    'IT consultant accountants',
    'tech company accountants',
    'startup CFO services Birmingham',
    'venture capital accounting',
  ],
  openGraph: {
    title: 'IT & Technology Sector Accountants | RUS Chartered Accountants',
    description: 'Expert accountants for tech startups, SaaS businesses and IT professionals.',
    type: 'website',
  },
  alternates: {
    canonical: 'https://rus.co.uk/sectors/information-technology',
  },
};

// IT & Tech Services - EXACTLY 8 for design consistency
const itServices = [
  {
    title: 'Year-End Accounts & Tax Compliance',
    description: 'Comprehensive accounts and tax returns for sole traders, IT contractors, start-ups, limited companies and tech groups, ensuring all HMRC requirements are met accurately and efficiently',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    title: 'R&D Tax Relief Claims',
    description: 'Identifying eligible R&D projects, preparing supporting documentation, submitting claims and maximising tax relief within HMRC guidelines for software development and innovation',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    title: 'Digital Accounting & Cloud Software',
    description: 'MTD-compliant cloud platforms including Xero, QuickBooks, Sage and FreeAgent, ideal for project-based or recurring-income technology businesses',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
  },
  {
    title: 'VAT & International Sales Advice',
    description: 'Digital services VAT rules, EU digital sales (OSS schemes), reverse charge VAT, multi-currency bookkeeping and overseas contractor payment guidance',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Payroll & Contractor Management',
    description: 'PAYE management, auto-enrolment pensions, staff benefits (P11D), contractor versus employee classification and payroll for growing tech teams',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: 'Business Strategy & Growth Advisory',
    description: 'Scaling and expansion planning, seed/venture capital funding support, cashflow and runway modelling, M&A due diligence and system optimisation for tech firms',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
  {
    title: 'Subscription Revenue Reporting (SaaS)',
    description: 'MRR/ARR tracking, churn and lifetime value metrics, revenue recognition compliance, multi-currency income tracking and digital product revenue management',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    title: 'IR35 Compliance for IT Contractors',
    description: 'Contract reviews, working practice assessments, IR35 status determination, limited company formation and management for software developers and IT professionals',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
];

// 4 Key Benefits
const benefits = [
  {
    title: 'Over 30 Years Supporting Technology Businesses',
    description: 'Three decades helping IT professionals, software companies, SaaS businesses and tech start-ups with specialist accountancy, R&D tax relief and growth advisory services.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
  {
    title: 'R&D Tax Relief & Innovation Funding Specialists',
    description: 'Expert knowledge in identifying qualifying R&D projects, preparing technical documentation, maximising tax relief claims and supporting innovation funding applications.',
    icon: (
      // eslint-disable-next-line @next/next/no-img-element
      <img src="https://imagedelivery.net/W93NbEGaswuledAsk5GMeA/086d91c1-d009-4a85-b151-ffd206733500/public" alt="R&D Tax Relief & Innovation Funding" className="w-20 h-20 md:w-24 md:h-24" />
    ),
  },
  {
    title: 'SaaS & Subscription Revenue Model Expertise',
    description: 'Deep understanding of recurring revenue models, MRR/ARR reporting, churn metrics, revenue recognition and digital platform income across global markets.',
    icon: (
      // eslint-disable-next-line @next/next/no-img-element
      <img src="https://imagedelivery.net/W93NbEGaswuledAsk5GMeA/4ad2a4fe-547a-4cf6-d1f1-04191365c300/public" alt="SaaS & Subscription Revenue Model" className="w-20 h-20 md:w-24 md:h-24" />
    ),
  },
  {
    title: 'Strategic Support for High-Growth Start-Ups',
    description: 'Seed and venture capital funding support, investor-ready financial models, cashflow and runway planning, EMI share schemes and growth advisory for scaling tech businesses.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
];

// 3 Client Testimonials
const testimonials = [
  {
    name: 'Tom Bradley',
    role: 'Founder & CEO, CloudSync SaaS Platform',
    content: 'RUS helped us navigate rapid growth from seed funding to Series A. Their R&D tax relief claims recovered over £80K, their investor-ready financial models impressed VCs, and their strategic advice has been invaluable. Perfect for scaling tech start-ups.',
    rating: 5,
  },
  {
    name: 'Priya Sharma',
    role: 'Software Developer & IT Contractor',
    content: 'Managing my limited company used to be stressful until I partnered with RUS. Their IR35 contract reviews give me confidence, their dividend planning saves me tax, and they handle all my accounts and VAT. Highly recommended for IT contractors.',
    rating: 5,
  },
  {
    name: 'Mark Richardson',
    role: 'Director, Digital Solutions Agency',
    content: 'As we scaled from five to twenty-five employees, RUS provided the financial infrastructure we needed. From payroll to R&D claims to monthly management accounts, they understand tech businesses and deliver professional, proactive support.',
    rating: 5,
  },
];

// 6 Frequently Asked Questions
const faqs = [
  {
    question: 'What qualifies as R&D for tax relief purposes in the IT sector?',
    answer: 'In technology, R&D tax relief applies to projects seeking to achieve technological advances that are not readily deducible by a competent professional. Qualifying activities include developing new software algorithms or architectures, creating innovative data processing methods, building new digital platforms or services with technical uncertainty, improving system performance beyond current industry capabilities, and overcoming technical challenges without obvious solutions. Routine software development, cosmetic UI changes, or implementing standard technologies typically don\'t qualify. We assess your projects, identify qualifying activities, prepare technical documentation and maximise your R&D claims within HMRC guidelines.',
  },
  {
    question: 'How should SaaS businesses handle subscription revenue recognition?',
    answer: 'SaaS and subscription businesses must recognise revenue in accordance with accounting standards (typically FRS 102 or IFRS 15). Revenue should be recognised as services are delivered over the subscription period, not when cash is received upfront. This requires tracking deferred revenue (unearned income from annual subscriptions), monthly recurring revenue (MRR) and annual recurring revenue (ARR), churn rates and customer lifetime value, and ensuring revenue matches the performance obligation timeline. We implement proper subscription revenue accounting, provide MRR/ARR reporting, ensure compliance with accounting standards and give you accurate financial visibility of your SaaS performance.',
  },
  {
    question: 'How does VAT work for digital services sold internationally?',
    answer: 'Digital services VAT is complex, especially for international sales. Sales to UK consumers are subject to UK VAT (20%). Sales to EU consumers are subject to VAT in the customer\'s country under the One Stop Shop (OSS) scheme, which allows quarterly reporting through a single portal. Sales to non-EU consumers are typically outside the scope of VAT. Reverse charge applies for B2B sales to EU VAT-registered businesses. We advise on VAT registration requirements, manage OSS registrations and returns, ensure correct VAT treatment across markets and handle multi-currency VAT accounting.',
  },
  {
    question: 'Should tech start-ups seek venture capital or bootstrap?',
    answer: 'The decision depends on your growth ambitions, market opportunity and capital requirements. Venture capital suits businesses with high-growth potential requiring significant upfront investment, scalable business models that can achieve rapid user acquisition, markets where first-mover advantage is critical, and founders comfortable with equity dilution and investor involvement. Bootstrapping suits profitable business models with lower capital needs, founders who want to retain full ownership and control, businesses where organic growth is viable, and situations where profitability can fund expansion. We provide financial modelling for both scenarios, support with investor pitch decks and due diligence, and advise on optimal growth funding strategies.',
  },
  {
    question: 'What financial metrics should tech start-ups track?',
    answer: 'Critical metrics for tech start-ups include cash runway (months until cash runs out at current burn rate), monthly recurring revenue (MRR) and ARR for subscription businesses, customer acquisition cost (CAC) versus lifetime value (LTV), gross margin and unit economics, burn rate (monthly cash consumption), churn rate and retention metrics, and revenue growth rate month-over-month and year-over-year. We implement systems to track these metrics, provide monthly reporting with KPI dashboards, benchmark against industry standards and give strategic advice based on your financial performance.',
  },
  {
    question: 'How do IT contractors navigate IR35 regulations?',
    answer: 'IR35 determines whether contractors are genuinely self-employed or should be taxed as employees. For medium/large clients, they assess your status. For small clients, you self-determine. To operate outside IR35, you need genuine business-to-business relationships, contracts showing client engagement not employment terms, right of substitution (ability to send a substitute), financial risk (providing own equipment, no sick pay/holiday pay), and control over how/when/where work is done. We review contracts, assess working practices, advise on risk, support with status determinations and structure arrangements compliantly to maximise tax efficiency while managing IR35 exposure.',
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

export default function InformationTechnologySectorPage() {
  return (
    <>
      <ServiceHero
        title="Information Technology Sector Accountancy"
        subtitle="Specialist accountants for IT professionals, tech start-ups and fast-growing digital businesses"
        description="The IT and technology sector has expanded rapidly in recent years, driven by innovation, digital transformation and the rise of remote and cloud-based solutions. With this growth comes increasing financial complexity — from subscription-based revenue models and R&D tax relief to contractor regulations, international income and scaling challenges."
        imageUrl="https://imagedelivery.net/W93NbEGaswuledAsk5GMeA/10c2fbaf-f72c-4d48-e212-1ca122705400/public"
      />

      <div id="services">
        <WhoWeHelp
          title="Specialist Accountants for Technology Businesses"
          subtitle="With over 30 years of experience supporting technology businesses and IT professionals, we offer specialist accountancy and advisory services designed to meet the needs of a fast-paced, highly competitive industry. Whether you're a freelance developer, a SaaS start-up or a multi-site tech company, we provide clear, strategic and compliant financial guidance"
          clientTypes={itServices}
          bgColor="bg-gradient-to-br from-[#01458f] to-[#0052cc]"
          darkMode={true}
        />
      </div>

      <ServiceOverview
        leftContent={{
          title: 'Supporting Tech Innovation\nWith Financial Clarity',
          description: 'From IT contractors to SaaS scale-ups, we provide dependable accounting expertise that supports R&D tax relief, subscription revenue management and rapid growth. With specialist knowledge in digital services VAT, innovation funding and tech business models, we help you navigate the sector with confidence.',
        }}
        rightContent={{
          stats: [
            { value: '30+', label: 'Years Experience' },
            { value: '350+', label: 'Tech Clients' },
          ],
        }}
        imageUrl="https://imagedelivery.net/W93NbEGaswuledAsk5GMeA/0159623c-922b-41a5-8759-baf313c78200/public"
      />

      <CTASimple
        heading="Expert accounting for technology businesses"
        supportingText="Specialist R&D tax relief, SaaS revenue reporting and tech start-up advisory"
        buttonText="Get Started"
      />

      <div id="benefits">
        <ServiceBenefits title="Why Technology Businesses Choose Us" items={benefits} knowledgeIconUrl="https://imagedelivery.net/W93NbEGaswuledAsk5GMeA/3323978e-14d0-4f56-668d-332badb0ce00/public" knowledgeIconIndex={0} />
      </div>

      <div id="testimonials">
        <ServiceTestimonials
          title="Client Testimonials"
          subtitle="Hear from IT professionals and tech businesses we support across the UK"
          testimonials={testimonials}
        />
      </div>

      <CTASimple
        heading="Ready to scale your technology business?"
        supportingText="Over 30 years of technology sector accounting and R&D tax relief expertise"
        buttonText="Contact Us Today"
      />

      <div id="faqs">
        <ServiceFAQ
          title="Technology Sector FAQs"
          subtitle="Common questions about our IT and tech business accountancy services"
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
