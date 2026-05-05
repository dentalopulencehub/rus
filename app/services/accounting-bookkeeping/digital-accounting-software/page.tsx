import { Metadata } from 'next';
import { ServiceHero } from '@/components/services/ServiceHero';
import { WhoWeHelp } from '@/components/services/WhoWeHelp';
import { ServiceOverview } from '@/components/services/ServiceOverview';
import { ServiceBenefits } from '@/components/services/ServiceBenefits';
import { ServiceTestimonials } from '@/components/services/ServiceTestimonials';
import { ServiceFAQ } from '@/components/services/ServiceFAQ';
import { CTASimple } from '@/components/home/CTASimple';
import { InsightsPreview } from '@/components/home/InsightsPreview';
import { StickyMiniNav } from '@/components/services/StickyMiniNav';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Making Tax Digital Software Birmingham | MTD Compliant Accounting | RUS',
  description: 'MTD compliant cloud accounting software services. Xero, QuickBooks, Sage, FreeAgent setup and training. Digital VAT submissions, real-time reporting. Birmingham MTD accountants.',
  keywords: [
    'Making Tax Digital Birmingham',
    'MTD compliant software',
    'Xero setup Birmingham',
    'QuickBooks accountants',
    'Sage cloud accounting',
    'FreeAgent accountants',
    'digital VAT filing',
    'MTD compliance UK',
    'cloud accounting Birmingham',
  ],
  openGraph: {
    title: 'Making Tax Digital Software Services | RUS Chartered Accountants',
    description: 'MTD compliant cloud accounting solutions keeping your business fully compliant with HMRC digital requirements.',
    type: 'website',
  },
  alternates: {
    canonical: 'https://rus.co.uk/services/accounting-bookkeeping/digital-accounting-software',
  },
};

// Our Digital Accounting Services
const digitalServices = [
  {
    title: 'MTD Setup',
    description: 'MTD-compliant software setup with Xero, QuickBooks, Sage and FreeAgent',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: 'Real-Time Reporting',
    description: 'Live dashboards, cashflow forecasts and automated bank feeds',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    title: 'Automated Bookkeeping',
    description: 'Reduce manual data entry and manage day-to-day tasks more efficiently',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
  },
  {
    title: 'Digital VAT',
    description: 'Secure, accurate digital VAT filings directly through HMRC-recognised software',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: 'Training & Support',
    description: 'Tailored training, onboarding and year-round support from qualified accountants',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    title: 'Integrations',
    description: 'Link accounting software to payment systems, CRM and stock systems',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z" />
      </svg>
    ),
  },
];

// Benefits - EXACTLY 4 for design consistency
const benefits = [
  {
    title: 'MTD Compliance',
    description: 'Extensive experience in cloud accounting and Making Tax Digital compliance',
    icon: (
      // eslint-disable-next-line @next/next/no-img-element
      <img src="https://imagedelivery.net/W93NbEGaswuledAsk5GMeA/a48ad60d-8d95-4a0a-a4cd-8d24f7280a00/public" alt="MTD Compliance" className="w-20 h-20 md:w-24 md:h-24" />
    ),
  },
  {
    title: 'Qualified Guidance',
    description: 'Expert guidance from fully qualified accountants',
    icon: (
      // eslint-disable-next-line @next/next/no-img-element
      <img src="https://imagedelivery.net/W93NbEGaswuledAsk5GMeA/cd599fb0-6498-4d2d-c78f-5a72a0ee5800/public" alt="Qualified Guidance" className="w-20 h-20 md:w-24 md:h-24" />
    ),
  },
  {
    title: 'Secure Software',
    description: 'Secure, HMRC-recognised software solutions for complete peace of mind',
    icon: (
      // eslint-disable-next-line @next/next/no-img-element
      <img src="https://imagedelivery.net/W93NbEGaswuledAsk5GMeA/2a910602-85e8-48a6-bba0-ddecd0369400/public" alt="Secure Software" className="w-20 h-20 md:w-24 md:h-24" />
    ),
  },
  {
    title: 'Future-Proof',
    description: 'Stay compliant and future-proof your finances with modern cloud systems',
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
    name: 'Client',
    role: 'Manufacturing Director',
    content: 'RUS set up our Xero system and migrated all our data seamlessly. The real-time reporting has been a game-changer for our business, and we\'re fully MTD compliant.',
    rating: 5,
  },
  {
    name: 'Client',
    role: 'Business Owner',
    content: 'The training and support we received was excellent. The team explained everything clearly, and now we have complete confidence using QuickBooks for all our accounting needs.',
    rating: 5,
  },
];

// FAQs
const faqs = [
  {
    question: 'What are the essential features to look for in accounting software?',
    answer: 'Essential features include: Making Tax Digital (MTD) compliance, automated invoicing and billing, real-time bank integrations, centralised financial dashboards, robust data security, expense and mileage tracking, and integration with payroll systems.',
  },
  {
    question: 'How can accounting software help with UK tax compliance?',
    answer: 'Choose a platform that is natively compatible with HMRC\'s Making Tax Digital (MTD) initiative for VAT and Income Tax. This feature allows you to prepare and submit returns directly to HMRC from within the software, eliminating the risks and errors associated with manual filing. This shifts your focus from a stressful, reactive annual task to a proactive, ongoing process that is audit-ready at all times.',
  },
  {
    question: 'How does cloud accounting benefit my business?',
    answer: 'Move beyond outdated desktop systems and gain real-time financial visibility from anywhere, on any device. Cloud-based software automates routine bookkeeping tasks, from invoicing to bank reconciliation, freeing up valuable time for strategic planning and business growth. This flexibility and automation help you manage cashflow, identify cost-saving opportunities, and make better decisions with up-to-the-minute data.',
  },
  {
    question: 'What are the most important factors for choosing the right software?',
    answer: 'Prioritise a solution that is easy for your team to use, as poor usability leads to low adoption and wasted investment. Look for a platform that can scale with your business and integrates seamlessly with your other systems, such as your CRM or payroll provider, to prevent fragmented data and eliminate manual entry. Always check for robust data security measures and GDPR compliance to protect sensitive financial information.',
  },
  {
    question: 'Which accounting software platforms do you support?',
    answer: 'We work with all major UK accounting platforms including Xero, QuickBooks, Sage and FreeAgent. Our team can help you choose the right platform for your business needs, set it up correctly, and provide ongoing support and training.',
  },
  {
    question: 'Will you migrate my data from my old system?',
    answer: 'Yes. We can migrate your existing financial data from spreadsheets, older desktop software, or legacy systems into your new cloud accounting platform. We ensure the migration is accurate, complete, and that all historical data is preserved correctly.',
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

export default function DigitalAccountingSoftwarePage() {
  return (
    <>
      <ServiceHero
        title="Digital Accounting Software"
        subtitle="Expert cloud accounting solutions that keep your business fully compliant with HMRC's Making Tax Digital regulations"
        description="As HMRC continues to roll out Making Tax Digital, businesses require reliable digital tools and professional support to stay compliant. Our team provides full setup, integration and management of leading MTD-compliant digital accounting software, helping you improve accuracy, streamline your bookkeeping and gain real-time financial insight."
      />

      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4 px-4">
        <div className="max-w-6xl mx-auto">
          <nav className="text-sm">
            <Link href="/services" className="text-gray-600 hover:text-[#01458f]">
              Services
            </Link>
            <span className="mx-2 text-gray-400">/</span>
            <Link href="/services/accounting-bookkeeping" className="text-gray-600 hover:text-[#01458f]">
              Accounting & Bookkeeping
            </Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-gray-900">Digital Accounting Software</span>
          </nav>
        </div>
      </div>

      <div id="services">
        <WhoWeHelp
          title="Our Digital Accounting Services"
          subtitle="Smart, secure and fully MTD-compliant solutions"
          clientTypes={digitalServices}
        />
      </div>

      <ServiceOverview
        leftContent={{
          title: 'Stay Compliant and Future-Proof Your Finances',
          description: 'With HMRC\'s Making Tax Digital programme expanding, now is the time to ensure your business is using reliable, fully compliant digital accounting software. Our service gives you confidence, accuracy and complete visibility over your financial information.',
        }}
        rightContent={{
          stats: [
            { value: '30+', label: 'Years Experience' },
            { value: 'MTD', label: 'Compliant' },
          ],
        }}
      />

      <div id="benefits">
        <ServiceBenefits title="Why Businesses Choose Our Digital Accounting Support" items={benefits} />
      </div>

      <div id="testimonials">
        <ServiceTestimonials
          title="Client Testimonials"
          subtitle="Hear from businesses we've supported with cloud accounting"
          testimonials={testimonials}
        />
      </div>

      <CTASimple />

      <div id="faqs">
        <ServiceFAQ
          title="Making Tax Digital (MTD) FAQs"
          subtitle="Common questions about digital accounting software"
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
