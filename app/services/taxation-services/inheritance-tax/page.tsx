import { Metadata } from 'next';
import Link from 'next/link';
import { ServiceHero } from '@/components/services/ServiceHero';
import { WhoWeHelp } from '@/components/services/WhoWeHelp';
import { ServiceOverview } from '@/components/services/ServiceOverview';
import { ServiceBenefits } from '@/components/services/ServiceBenefits';
import { ServiceTestimonials } from '@/components/services/ServiceTestimonials';
import { ServiceFAQ } from '@/components/services/ServiceFAQ';
import { FAQSchema } from '@/components/seo/FAQSchema';
import { SmartInsightPreview } from '@/components/insights/SmartInsightPreview';
import { CTASimple } from '@/components/home/CTASimple';
import { StickyMiniNav } from '@/components/services/StickyMiniNav';

export const metadata: Metadata = {
  title: 'Inheritance Tax Planning Birmingham | IHT Advice & Estate Planning | RUS',
  description: 'Expert inheritance tax planning to protect your estate. IHT mitigation, trusts, lifetime gifts and estate planning strategies from experienced chartered accountants.',
  keywords: [
    'inheritance tax planning',
    'IHT advice Birmingham',
    'estate planning UK',
    'inheritance tax mitigation',
    'trusts and estates',
    'lifetime gifts',
    'nil rate band',
    'business property relief',
  ],
  openGraph: {
    title: 'Inheritance Tax Planning | RUS Chartered Accountants',
    description: 'Expert inheritance tax planning to protect your estate.',
    type: 'website',
  },
  alternates: {
    canonical: 'https://rus.co.uk/services/taxation-services/inheritance-tax',
  },
};

// Inheritance Tax Services - EXACTLY 8 for design consistency
const inheritanceTaxServices = [
  {
    title: 'Estate Planning & IHT Strategy',
    description: 'Comprehensive estate planning to minimise inheritance tax liability and ensure your wealth passes to your chosen beneficiaries',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    title: 'Lifetime Gifting Strategies',
    description: 'Strategic use of annual exemptions, gifts out of income and seven-year rules to reduce your taxable estate',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
      </svg>
    ),
  },
  {
    title: 'Trusts & Will Planning',
    description: 'Establishing trusts, discretionary settlements and will structures to protect assets and minimise IHT exposure',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: 'Business Property Relief',
    description: 'Maximising BPR on qualifying business assets, shares in unquoted trading companies and family businesses',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    title: 'Residence Nil Rate Band',
    description: 'Optimising use of the residence nil rate band when passing your family home to direct descendants',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    title: 'Agricultural Property Relief',
    description: 'Securing APR on farms, agricultural land and qualifying agricultural property to reduce IHT liability',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Pension & Life Assurance Planning',
    description: 'Strategic use of pensions and life policies written in trust to provide IHT-free wealth transfer',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: 'IHT Return Preparation & Compliance',
    description: 'Accurate preparation of IHT400 returns, probate valuations and HMRC compliance following a bereavement',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
];

// Benefits - EXACTLY 4 for design consistency
const benefits = [
  {
    title: 'Protect Your Family Legacy',
    description: 'Strategic planning to ensure your wealth passes to your loved ones, not HMRC',
    icon: (
      // eslint-disable-next-line @next/next/no-img-element
      <img src="https://imagedelivery.net/W93NbEGaswuledAsk5GMeA/504bd974-8936-4098-eb4c-9a50067c0900/public" alt="Protect Your Family Legacy" className="w-20 h-20 md:w-24 md:h-24" />
    ),
  },
  {
    title: 'Experienced Estate Planners',
    description: 'Decades of experience helping families navigate complex inheritance tax rules',
    icon: (
      // eslint-disable-next-line @next/next/no-img-element
      <img src="https://imagedelivery.net/W93NbEGaswuledAsk5GMeA/cd599fb0-6498-4d2d-c78f-5a72a0ee5800/public" alt="Experienced Estate Planners" className="w-20 h-20 md:w-24 md:h-24" />
    ),
  },
  {
    title: 'Holistic Wealth Planning',
    description: 'IHT planning integrated with wider financial, business and succession strategies',
    icon: (
      // eslint-disable-next-line @next/next/no-img-element
      <img src="https://imagedelivery.net/W93NbEGaswuledAsk5GMeA/f796cefc-8777-4677-95c2-71bb44b0ac00/public" alt="Holistic Wealth Planning" className="w-20 h-20 md:w-24 md:h-24" />
    ),
  },
  {
    title: 'Clear, Practical Guidance',
    description: 'Complex tax rules explained clearly with actionable strategies tailored to your goals',
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
    name: 'Elizabeth Morgan',
    role: 'Business Owner',
    content: 'RUS helped us establish a family trust and restructure our business to minimise IHT. Their knowledge of business property relief saved our family hundreds of thousands. We cannot thank them enough.',
    rating: 5,
  },
  {
    name: 'Richard Thompson',
    role: 'Retired Professional',
    content: 'The inheritance tax planning advice from RUS gave us complete peace of mind. They explained complex rules clearly and provided a tailored strategy to protect our estate for our children.',
    rating: 5,
  },
  {
    name: 'Margaret Stevens',
    role: 'Executor',
    content: 'Following a bereavement, RUS handled the entire IHT return process professionally and compassionately. They liaised with HMRC, valued the estate accurately and made a difficult time much easier.',
    rating: 5,
  },
];

// FAQs
const faqs = [
  {
    question: 'What is inheritance tax and when is it charged?',
    answer: 'Inheritance tax (IHT) is charged on estates valued above £325,000 (the nil rate band) at 40%. If you leave your main residence to direct descendants, an additional residence nil rate band of up to £175,000 may apply, giving a combined threshold of £500,000 per person (or £1 million for a married couple). IHT is due on death, but can also apply to certain lifetime gifts and trusts. Strategic planning can significantly reduce or eliminate IHT liability.',
  },
  {
    question: 'How can I reduce my inheritance tax liability?',
    answer: (
      <>
        There are numerous IHT planning strategies including making lifetime gifts, using annual exemptions, establishing trusts, maximising business property relief and agricultural property relief, optimising pension contributions and ensuring wills are structured tax-efficiently. The right strategy depends on your personal circumstances, asset types and family objectives. We provide <Link href="/services/business-advisory" className="text-[#01458f] underline hover:text-[#013a75] transition-colors">tailored planning advice</Link> to minimise your IHT exposure legally and effectively.
      </>
    ),
  },
  {
    question: 'What is business property relief and how does it work?',
    answer: 'Business Property Relief (BPR) provides 100% or 50% relief from IHT on qualifying business assets, including shares in unquoted trading companies, business assets used in a partnership or sole trade, and certain AIM-listed shares. To qualify, assets must generally be owned for at least two years before death. BPR is a powerful IHT planning tool for business owners and can substantially reduce or eliminate IHT on business wealth.',
  },
  {
    question: 'Should I use trusts for inheritance tax planning?',
    answer: 'Trusts can be highly effective for IHT planning, allowing you to transfer assets out of your estate while retaining some control and flexibility. Discretionary trusts, life interest trusts and bare trusts each have different IHT treatments and benefits. However, trusts are complex and must be structured correctly to achieve the desired tax outcome. We work alongside solicitors to advise on trust strategies tailored to your circumstances.',
  },
  {
    question: 'What is the seven-year rule for lifetime gifts?',
    answer: 'Gifts made more than seven years before death are generally exempt from IHT. Gifts made within seven years of death may be taxable, but taper relief reduces the IHT charge on gifts made between three and seven years before death. Regular gifts out of income and gifts within annual exemptions (£3,000 per year) are immediately exempt. Strategic lifetime gifting is one of the most effective ways to reduce IHT, but must be planned carefully to avoid unintended consequences.',
  },
  {
    question: 'Can you help prepare IHT returns after a bereavement?',
    answer: 'Yes. We provide compassionate, professional support to executors and families following a bereavement. Our service includes estate valuation, preparation of IHT400 returns (or IHT205 for excepted estates), liaison with HMRC, claiming reliefs and exemptions and ensuring compliance with probate requirements. We handle the entire process, allowing you to focus on family during a difficult time.',
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

export default function InheritanceTaxPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <ServiceHero
        title="Inheritance Tax Planning"
        subtitle="Protect your estate with strategic IHT planning"
        description="Inheritance tax can significantly reduce the wealth you pass to your loved ones. Our experienced team provides comprehensive estate planning and IHT mitigation strategies designed to protect your family legacy. From lifetime gifting and trusts to business property relief and probate support, we deliver clear, practical advice tailored to your personal circumstances."
        imageUrl="https://imagedelivery.net/W93NbEGaswuledAsk5GMeA/9578d060-8377-47d5-91f0-c5e8f580a700/public"
      />

      <div id="services">
        <WhoWeHelp
          title="Comprehensive Inheritance Tax Solutions"
          subtitle="Estate planning, lifetime gifts, trusts and IHT compliance to protect your wealth for future generations."
          clientTypes={inheritanceTaxServices}
        />
      </div>

      <ServiceOverview
        leftContent={{
          title: 'Strategic IHT Planning for Peace of Mind',
          description: 'Inheritance tax rules are complex, but effective planning can substantially reduce or eliminate your IHT liability. We take time to understand your family objectives, asset structure and long-term goals, delivering tailored strategies that protect your wealth and provide complete peace of mind.',
        }}
        rightContent={{
          stats: [
            { value: '30+', label: 'Years Experience' },
            { value: '£100M+', label: 'Estates Protected' },
          ],
        }}
        imageUrl="https://imagedelivery.net/W93NbEGaswuledAsk5GMeA/dfd50117-3f66-4314-3bb3-ca7049cbac00/public"
      />

      <CTASimple
        heading="Protect your estate from inheritance tax"
        supportingText="Strategic IHT planning, trusts, lifetime gifts and comprehensive estate protection"
        buttonText="Get Started"
      />

      <div id="benefits">
        <ServiceBenefits title="Why Choose RUS for IHT Planning" items={benefits} />
      </div>

      <div id="testimonials">
        <ServiceTestimonials
          title="Client Testimonials"
          subtitle="Hear from families we have helped protect their wealth"
          testimonials={testimonials}
        />
      </div>

      <CTASimple
        heading="Ready to protect your family legacy?"
        supportingText="Trusted inheritance tax specialists for over 30 years"
        buttonText="Contact Us Today"
      />

      <div id="faqs">
        <ServiceFAQ
          title="Inheritance Tax FAQs"
          subtitle="Common questions about inheritance tax planning"
          faqs={faqs}
        />
      </div>

      {/* Smart Insights - Shows relevant blog posts for this page */}
      <SmartInsightPreview
        currentPath="/services/taxation-services/inheritance-tax"
        title="Inheritance Tax Insights"
        limit={3}
      />

      <StickyMiniNav links={miniNavLinks} />
    </>
  );
}
