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
  title: 'Personal Tax Services Birmingham | Self Assessment & Tax Planning | RUS',
  description: 'Expert personal tax services for individuals across the UK. Self-assessment returns, tax planning, capital gains tax, rental income and HMRC compliance.',
  keywords: [
    'personal tax services',
    'self assessment Birmingham',
    'personal tax planning',
    'capital gains tax',
    'rental income tax',
    'dividend tax',
    'tax return UK',
    'HMRC self assessment',
  ],
  openGraph: {
    title: 'Personal Tax Services | RUS Chartered Accountants',
    description: 'Expert personal tax services for individuals across the UK.',
    type: 'website',
  },
  alternates: {
    canonical: 'https://rus.co.uk/services/taxation-services/personal-tax',
  },
};

// Personal Tax Services - EXACTLY 8 for design consistency
const personalTaxServices = [
  {
    title: 'Self-Assessment Tax Returns',
    description: 'Accurate and timely preparation of self-assessment tax returns for employed, self-employed and mixed-income individuals',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    title: 'Personal Tax Planning',
    description: 'Strategic tax efficiency planning to minimise income tax, optimise allowances and reduce your overall tax liability',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Capital Gains Tax Advice',
    description: 'Expert CGT planning for property sales, share disposals, business assets and investment gains',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
  {
    title: 'Rental Income & Property Tax',
    description: 'Comprehensive tax support for landlords including rental income returns, allowable expenses and property tax planning',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    title: 'Dividend & Investment Income',
    description: 'Tax advice for shareholders and investors on dividend income, investment returns and ISA planning',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'High Earner Tax Strategies',
    description: 'Tailored tax planning for high earners including additional rate tax, pension contributions and tax-efficient structures',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
  },
  {
    title: 'HMRC Investigations Support',
    description: 'Professional representation during HMRC enquiries, self-assessment checks and tax dispute resolution',
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
    title: 'Tax Efficiency Experts',
    description: 'Maximising allowances and reliefs to minimise your personal tax liability',
    icon: (
      // eslint-disable-next-line @next/next/no-img-element
      <img src="https://imagedelivery.net/W93NbEGaswuledAsk5GMeA/5704b5ca-3a45-41f8-52ae-427eadcc4200/public" alt="Tax Efficiency Experts" className="w-20 h-20 md:w-24 md:h-24" />
    ),
  },
  {
    title: 'Fixed Fee Pricing',
    description: 'Transparent, agreed fees with no hidden charges or unexpected costs',
    icon: (
      // eslint-disable-next-line @next/next/no-img-element
      <img src="https://imagedelivery.net/W93NbEGaswuledAsk5GMeA/0e632d3f-00c8-43b5-23ac-f6adbe4e1300/public" alt="Fixed Fee Pricing" className="w-20 h-20 md:w-24 md:h-24" />
    ),
  },
  {
    title: 'Proactive HMRC Compliance',
    description: 'Ensuring your tax returns are accurate, timely and fully compliant',
    icon: (
      // eslint-disable-next-line @next/next/no-img-element
      <img src="https://imagedelivery.net/W93NbEGaswuledAsk5GMeA/a48ad60d-8d95-4a0a-a4cd-8d24f7280a00/public" alt="Proactive HMRC Compliance" className="w-20 h-20 md:w-24 md:h-24" />
    ),
  },
  {
    title: 'Personalized Service',
    description: 'Dedicated tax advice tailored to your individual circumstances and goals',
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
    name: 'Client',
    role: 'Freelance IT Consultant',
    content: 'RUS has handled my self-assessment for 8 years. Their service is excellent - always on time, always finding ways to reduce my tax bill legally. I would not trust anyone else with my personal tax.',
    rating: 5,
  },
  {
    name: 'Client',
    role: 'Property Investor',
    content: 'Managing rental income tax across multiple properties was overwhelming. RUS simplified everything, identified allowable expenses I had missed and saved me considerable amounts in tax. Highly professional team.',
    rating: 5,
  },
  {
    name: 'Client',
    role: 'Company Director',
    content: 'The personal tax planning advice from RUS has been invaluable. They optimised my dividend and salary mix, advised on pension contributions and ensured I pay the right amount of tax - nothing more, nothing less.',
    rating: 5,
  },
];

// FAQs
const faqs = [
  {
    question: 'Who needs to complete a self-assessment tax return?',
    answer: 'You must complete a self-assessment if you are self-employed, a company director, have rental income over £1,000, investment income over £10,000, capital gains above the annual exemption or earn over £100,000. Even if you are not legally required to file, a return can often be beneficial to claim reliefs and refunds. We review your circumstances and advise whether a return is necessary.',
  },
  {
    question: 'When is the self-assessment deadline?',
    answer: 'The deadline for online self-assessment returns is 31 January following the end of the tax year (5 April). For example, the 2024/25 tax year runs from 6 April 2024 to 5 April 2025, with the filing deadline of 31 January 2026. Payment of any tax due is also required by 31 January. We ensure your return is filed on time and help you plan for tax payments in advance.',
  },
  {
    question: 'Can you help reduce my personal tax liability?',
    answer: (
      <>
        Yes. We identify tax-saving opportunities including maximising pension contributions, claiming allowable expenses, using capital gains exemptions, optimising dividend allowances and structuring income tax-efficiently. Our proactive approach ensures you benefit from every available relief while remaining fully compliant with HMRC. For business owners, we also advise on <Link href="/services/taxation-services/business-tax" className="text-[#01458f] underline hover:text-[#013a75] transition-colors">tax-efficient remuneration strategies</Link>.
      </>
    ),
  },
  {
    question: 'Do you provide capital gains tax advice?',
    answer: 'Absolutely. We advise on CGT for property sales, share disposals, business asset sales and investment gains. Our service includes calculating your tax liability, identifying available reliefs (such as private residence relief, business asset disposal relief and investors\' relief), planning the timing of disposals and filing required returns. CGT planning can deliver substantial savings when structured correctly.',
  },
  {
    question: 'What is your fee for preparing a self-assessment return?',
    answer: (
      <>
        Our fees are fixed and agreed upfront based on the complexity of your tax affairs. A straightforward self-assessment return typically starts from as little as £120 + VAT. More complex returns involving rental income, capital gains, foreign income or multiple income sources are priced individually. We provide a clear quote before commencing work. For more information, please <Link href="/contact" className="text-[#01458f] underline hover:text-[#013a75] transition-colors">contact us</Link> for a no-obligation discussion.
      </>
    ),
  },
  {
    question: 'Can you represent me if HMRC opens an enquiry?',
    answer: 'Yes. We provide professional representation during HMRC self-assessment enquiries and investigations. Our team liaises directly with HMRC, prepares supporting documentation, defends your position and works to resolve matters efficiently and favourably. Having experienced tax advisers represent you during an enquiry provides reassurance and protects your interests throughout the process.',
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

export default function PersonalTaxPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <ServiceHero
        title="Personal Tax Services"
        subtitle="Expert self-assessment and tax planning for individuals"
        description="We provide comprehensive personal tax services for individuals across the UK. From self-assessment returns and capital gains tax to rental income and pension planning, our experienced team delivers practical tax advice designed to minimise your tax liability while ensuring full HMRC compliance."
        imageUrl="https://imagedelivery.net/W93NbEGaswuledAsk5GMeA/f2a50e65-e365-4ebb-7e92-7b4e3e4b3700/public"
      />

      <div id="services">
        <WhoWeHelp
          title="Comprehensive Personal Tax Solutions"
          subtitle="Self-assessment, tax planning, capital gains and rental income support for individuals."
          clientTypes={personalTaxServices}
        />
      </div>

      <ServiceOverview
        leftContent={{
          title: 'Tailored Tax Planning for Individuals',
          description: 'Personal tax is complex and ever-changing. Our team provides clear, practical advice tailored to your individual circumstances, helping you navigate tax legislation confidently and ensuring you pay the right amount of tax - nothing more, nothing less.',
        }}
        rightContent={{
          stats: [
            { value: '30+', label: 'Years Experience' },
            { value: '1,000+', label: 'Individual Clients' },
          ],
        }}
        imageUrl="https://imagedelivery.net/W93NbEGaswuledAsk5GMeA/e1acd38d-256f-4078-5377-4ef760858b00/public"
      />

      <CTASimple
        heading="Minimise your personal tax with expert planning"
        supportingText="Self-assessment, capital gains, rental income and comprehensive personal tax support"
        buttonText="Get Started"
      />

      <div id="benefits">
        <ServiceBenefits title="Why Choose RUS for Personal Tax" items={benefits} />
      </div>

      <div id="testimonials">
        <ServiceTestimonials
          title="Client Testimonials"
          subtitle="Hear from individuals we support across the UK"
          testimonials={testimonials}
        />
      </div>

      <CTASimple
        heading="Ready for expert personal tax advice?"
        supportingText="Trusted personal tax specialists for over 30 years"
        buttonText="Contact Us Today"
      />

      <div id="faqs">
        <ServiceFAQ
          title="Personal Tax FAQs"
          subtitle="Common questions about our personal tax services"
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
