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
  title: 'Education Accountants Birmingham | Academy Trusts & Schools | RUS',
  description: 'Specialist accountants for schools, academy trusts, MATs and training providers. Academy audits, budget forecasting, funding compliance, ESFA reporting. Birmingham education accountants.',
  keywords: [
    'academy accountants Birmingham',
    'school accountants UK',
    'MAT accountants Birmingham',
    'academy trust audits',
    'ESFA compliance accountants',
    'education funding accountants',
    'academy budget management',
    'teachers pension accountants',
  ],
  openGraph: {
    title: 'Education & Academy Accountants | RUS Chartered Accountants',
    description: 'Specialist accountants for schools, academy trusts and education providers.',
    type: 'website',
  },
  alternates: {
    canonical: 'https://rus.co.uk/sectors/education-academies',
  },
};

// Education Services - EXACTLY 8 for design consistency
const educationServices = [
  {
    title: 'Academy Year-End Accounts & ESFA Compliance',
    description: 'Year-end accounts compliant with ESFA and academy regulations, budgeting, financial planning, internal controls reviews and restricted fund management for academies and academy trusts',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    title: 'VAT Advisory for Private Tuition Fees',
    description: 'Expert guidance on recent VAT changes affecting private tuition, regulated vs unregulated activities, correct VAT application across courses and invoicing system updates',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2z" />
      </svg>
    ),
  },
  {
    title: 'Digital Accounting for Educational Institutions',
    description: 'Cloud-based accounting systems for multi-stream income, enrolment fees, recurring payments, course revenue tracking and digital platform integrations',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Payroll for Teaching Staff & Tutors',
    description: 'Complex payroll management for permanent teaching staff, casual tutors, contractor educators, auto-enrolment pensions and pension compliance for education sector',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: 'Budgeting & Cashflow Planning for Academic Cycles',
    description: 'Financial planning aligned to academic years, student enrollment cycles, cashflow forecasting for term-based income and expense management across teaching periods',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    title: 'Funding & Grant Reporting',
    description: 'Support with restricted funds, ESFA reporting, grant accounting compliance, funding submissions and financial reporting to education authorities and regulators',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <circle cx="12" cy="12" r="9" />
        <text x="12" y="17" fontSize="12" fill="currentColor" stroke="none" textAnchor="middle" fontWeight="bold">£</text>
      </svg>
    ),
  },
  {
    title: 'Online Training & E-Learning Business Support',
    description: 'Specialist support for online course creators, subscription platforms, hybrid training businesses, VAT on digital services, global revenue models and R&D tax relief',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
  },
  {
    title: 'Private Tuition Centre & Independent School Accounting',
    description: 'Accounts, tax compliance, VAT for group tuition, payroll for tutors and admin staff, growth planning and multi-centre expansion support for private education providers',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
];

// 4 Key Benefits
const benefits = [
  {
    title: 'Over 30 Years Education Sector Experience',
    description: 'Three decades supporting schools, academies, training providers and educational institutions with specialist accountancy, compliance and financial planning services.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
  {
    title: 'VAT, Tuition Income & Multi-Stream Funding Specialists',
    description: 'Deep understanding of education VAT rules, tuition fee treatment, grant accounting, restricted funds and ESFA compliance requirements.',
    icon: (
      // eslint-disable-next-line @next/next/no-img-element
      <img src="https://imagedelivery.net/W93NbEGaswuledAsk5GMeA/0e632d3f-00c8-43b5-23ac-f6adbe4e1300/public" alt="VAT, Tuition Income & Funding Specialists" className="w-20 h-20 md:w-24 md:h-24" />
    ),
  },
  {
    title: 'Academy Trusts & Digital Training Provider Expertise',
    description: 'Specialist support for academies, multi-academy trusts, online learning platforms, e-learning businesses and hybrid educational delivery models.',
    icon: (
      // eslint-disable-next-line @next/next/no-img-element
      <img src="https://imagedelivery.net/W93NbEGaswuledAsk5GMeA/cd599fb0-6498-4d2d-c78f-5a72a0ee5800/public" alt="Academy Trusts & Digital Training Expertise" className="w-20 h-20 md:w-24 md:h-24" />
    ),
  },
  {
    title: 'Strategic Planning for Growth & Financial Sustainability',
    description: 'Budgeting aligned to academic cycles, cashflow planning for enrollment periods, and strategic financial guidance for multi-centre expansion and long-term sustainability.',
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
    name: 'Dr Elizabeth Thompson',
    role: 'Principal, Greenwood Academy Trust',
    content: 'RUS has supported our academy trust for over seven years. Their understanding of ESFA requirements, restricted fund accounting and academy financial reporting is exceptional. They provide clarity and confidence to our trustees.',
    rating: 5,
  },
  {
    name: 'Michael Harrison',
    role: 'Director, Harrison Educational Services Ltd',
    content: 'When VAT rules on private tuition changed, RUS guided us through the implications with clear, practical advice. They helped us update our invoicing, restructure our courses and remain fully compliant. Invaluable support.',
    rating: 5,
  },
  {
    name: 'Sarah Collins',
    role: 'Founder, LearnOnline Digital Training Platform',
    content: 'Building a subscription-based e-learning business brought complex VAT and international income challenges. RUS set up our digital accounting, advised on VAT for digital services and helped us claim R&D tax relief. Brilliant team.',
    rating: 5,
  },
];

// 6 Frequently Asked Questions
const faqs = [
  {
    question: 'What are the specific accounting requirements for academy trusts?',
    answer: 'Academy trusts must comply with the Academies Financial Handbook, ESFA (Education and Skills Funding Agency) requirements and Charities SORP. This includes preparing annual accounts that clearly show restricted and unrestricted funds, comply with academy accounting standards, include a trustees\' report and governance statement, and are audited if income exceeds certain thresholds. Academy accounts must be submitted to ESFA by specific deadlines. We prepare fully compliant academy accounts, advise on financial controls, support with budget management and ensure all regulatory reporting meets ESFA standards.',
  },
  {
    question: 'How have recent VAT changes affected private tuition and schools?',
    answer: 'Recent changes to VAT treatment of education services have affected many private education providers. Generally, tuition delivered by eligible bodies (registered schools, colleges, universities) remains VAT-exempt. However, some private tuition, online courses and training may now be subject to VAT depending on provider status, course type and accreditation. Understanding whether courses are regulated (typically exempt) or unregulated (potentially taxable) is crucial. We assess your specific activities, advise on correct VAT treatment, support with registration if required, and ensure invoicing and bookkeeping systems reflect current VAT rules.',
  },
  {
    question: 'How should educational institutions handle restricted funds and grants?',
    answer: 'Educational organisations often receive restricted funding (grants, bursaries, specific purpose donations) that must be accounted for separately from general unrestricted funds. You must track restricted income and expenditure by fund, demonstrate funds are spent according to restrictions, maintain clear audit trails for funders and regulators, and report fund movements in annual accounts. This is particularly important for academies receiving government grants and charities receiving restricted donations. We implement fund accounting systems, ensure proper tracking, prepare compliant financial reports and support with funder reporting requirements.',
  },
  {
    question: 'What payroll considerations apply to teaching staff and casual tutors?',
    answer: 'Educational payroll can be complex due to permanent teaching staff on salary scales, casual or hourly-paid tutors and lecturers, visiting educators working across multiple institutions, and pension scheme requirements (Teachers\' Pension Scheme for schools, auto-enrolment for others). You must determine whether tutors are employees or self-employed, apply correct PAYE treatment, manage auto-enrolment obligations, handle pension contributions, and process payroll aligned to academic calendars. We provide specialist education payroll services, advise on employment status, manage pension compliance and handle seasonal fluctuations in staffing.',
  },
  {
    question: 'How can online training providers optimise their tax position?',
    answer: 'Online training and e-learning businesses can benefit from several tax planning opportunities including R&D tax credits if developing innovative learning platforms or content delivery systems, capital allowances on technology and equipment purchases, optimal business structure (limited company often beneficial for digital businesses), expense claims on software, platforms, content creation, marketing and contractors, and careful VAT planning for digital services sold internationally. We advise on the most tax-efficient structure, identify available reliefs, maximise expense claims and ensure compliance with digital services VAT rules.',
  },
  {
    question: 'What financial planning should education providers do across academic years?',
    answer: 'Education businesses face unique cashflow challenges with income concentrated around enrollment periods, expenses spread across the academic year, seasonal fluctuations in student numbers, and timing differences between fee collection and course delivery. Effective planning requires budgeting aligned to academic terms, cashflow forecasting accounting for enrollment cycles, reserves for quieter periods, tax planning for variable income, and fee structure analysis to ensure sustainable margins. We provide financial planning tailored to academic cycles, cashflow forecasting, budgeting support and strategic financial guidance for sustainable growth.',
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

export default function EducationAcademiesSectorPage() {
  return (
    <>
      <ServiceHero
        title="Education & Academies Sector Accountancy"
        subtitle="Specialist accountants for schools, academies, training providers and education-focused organisations"
        description="The education and training sector is undergoing rapid change — from evolving VAT rules on private tuition to the growth of online learning, private colleges and professional development platforms. With increasing regulation, varied income models, funding requirements and complex tax considerations, strong financial management has never been more important."
        imageUrl="https://imagedelivery.net/W93NbEGaswuledAsk5GMeA/4ec66efb-b81c-41ba-d304-6c6de0a94c00/public"
      />

      <div id="services">
        <WhoWeHelp
          title="Specialist Accountants for Educational Institutions"
          subtitle="With over 30 years of experience supporting educational organisations, we provide sector-specific accountancy, tax and advisory services to help you stay compliant, financially stable and well prepared for future growth"
          clientTypes={educationServices}
          bgColor="bg-gradient-to-br from-[#01458f] to-[#0052cc]"
          darkMode={true}
        />
      </div>

      <ServiceOverview
        leftContent={{
          title: 'Supporting Education Providers\nto Deliver Excellence',
          description: 'From academies to online training platforms, we provide dependable accounting expertise that supports ESFA compliance, VAT planning and sustainable growth. With specialist knowledge in education funding, tuition income and academy regulations, we help you navigate the sector with confidence.',
        }}
        rightContent={{
          stats: [
            { value: '30+', label: 'Years Experience' },
            { value: '180+', label: 'Education Clients' },
          ],
        }}
        imageUrl="https://imagedelivery.net/W93NbEGaswuledAsk5GMeA/a324d777-dda3-485e-7a1d-e506019f5b00/public"
      />

      <CTASimple
        heading="Expert accounting for schools and academies"
        supportingText="Specialist ESFA compliance, academy accounting and education VAT support"
        buttonText="Get Started"
      />

      <div id="benefits">
        <ServiceBenefits title="Why Education Providers Choose Us" items={benefits} knowledgeIconUrl="https://imagedelivery.net/W93NbEGaswuledAsk5GMeA/3323978e-14d0-4f56-668d-332badb0ce00/public" knowledgeIconIndex={0} />
      </div>

      <div id="testimonials">
        <ServiceTestimonials
          title="Client Testimonials"
          subtitle="Hear from schools, academies and training providers we support across the UK"
          testimonials={testimonials}
        />
      </div>

      <CTASimple
        heading="Ready to enhance academy financial management?"
        supportingText="Over 30 years of education sector accounting and ESFA compliance expertise"
        buttonText="Contact Us Today"
      />

      <div id="faqs">
        <ServiceFAQ
          title="Education Sector FAQs"
          subtitle="Common questions about our education and academy accountancy services"
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
