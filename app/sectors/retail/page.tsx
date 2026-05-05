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
  title: 'Retail Accountants Birmingham | E-Commerce & Online Sellers | Amazon, Shopify | RUS',
  description: 'Expert accountants for retailers. Shopify, Amazon FBA, eBay specialists. E-commerce accounting, stock management, marketplace VAT compliance. Birmingham retail accountants.',
  keywords: [
    'retail accountants Birmingham',
    'e-commerce accountants UK',
    'Shopify accountants',
    'Amazon FBA accountants',
    'eBay seller accountants',
    'online retail accounting',
    'marketplace VAT compliance',
    'stock management accountants',
  ],
  openGraph: {
    title: 'Retail Sector Accountants | RUS Chartered Accountants',
    description: 'Expert accountants for online retailers, high street shops and multi-channel businesses.',
    type: 'website',
  },
  alternates: {
    canonical: 'https://rus.co.uk/sectors/retail',
  },
};

// Retail Services - EXACTLY 8 for design consistency
const retailServices = [
  {
    title: 'E-Commerce Accounting',
    description: 'Digital accounting for Shopify, WooCommerce, Etsy and online stores with platform integration, multi-currency support and marketplace fee reconciliation',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: 'Marketplace Seller Support',
    description: 'Specialist accounting for Amazon FBA/FBM, eBay, TikTok Shop sellers including complex fee structures, VAT compliance and multi-platform reporting',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
    ),
  },
  {
    title: 'Stock Management & Valuation',
    description: 'Inventory management, stock valuation, margin and GP analysis, supplier invoice processing and integration with stock control systems',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
  },
  {
    title: 'Retail VAT Compliance',
    description: 'VAT advice for multi-channel retailers including online sales, international VAT rules, OSS/IOSS schemes, marketplace VAT and platform fees',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
  {
    title: 'EPOS & Till Integration',
    description: 'Seamless integration with EPOS systems for physical stores, till reconciliation, cash management and real-time sales reporting',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Retail Payroll Services',
    description: 'Weekly or monthly payroll, automated payslips via employee apps, auto-enrolment pensions, holiday pay and variable hours management',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: 'Seasonal Cashflow Planning',
    description: 'Cashflow forecasting for seasonal demand, peak trading analysis, stock financing and working capital management',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    title: 'Multi-Channel Financial Reporting',
    description: 'Unified financial reporting across online, marketplace and in-store sales channels with consolidated performance analysis',
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
    title: '30+ Years Retail Sector Experience',
    description: 'Three decades supporting online retailers, high street shops and multi-channel retail businesses',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
  {
    title: 'E-Commerce Platform Specialists',
    description: 'Expert integration with Shopify, Amazon, eBay, WooCommerce and all major retail platforms',
    icon: (
      // eslint-disable-next-line @next/next/no-img-element
      <img src="https://imagedelivery.net/W93NbEGaswuledAsk5GMeA/4ad2a4fe-547a-4cf6-d1f1-04191365c300/public" alt="E-Commerce Platform Specialists" className="w-20 h-20 md:w-24 md:h-24" />
    ),
  },
  {
    title: 'Multi-Channel VAT Expertise',
    description: 'Comprehensive guidance on complex VAT rules for online, marketplace and international sales',
    icon: (
      // eslint-disable-next-line @next/next/no-img-element
      <img src="https://imagedelivery.net/W93NbEGaswuledAsk5GMeA/6a486339-8e63-493b-82da-796de2612400/public" alt="Multi-Channel VAT Expertise" className="w-20 h-20 md:w-24 md:h-24" />
    ),
  },
  {
    title: 'Real-Time Financial Insights',
    description: 'Cloud-based accounting providing live visibility of sales, margins and cashflow across all channels',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
];

// Testimonials
const testimonials = [
  {
    name: 'Client',
    role: 'Shopify E-commerce Founder',
    content: "RUS transformed our e-commerce accounting. Their Shopify integration is seamless, VAT advice is brilliant and their understanding of online retail has been invaluable as we've grown from a small start-up to a six-figure business.",
    rating: 5,
  },
  {
    name: 'Client',
    role: 'Amazon FBA Seller',
    content: 'Managing Amazon fees, FBA costs and international VAT was overwhelming until we started working with RUS. They handle everything efficiently and provide clear monthly reports. Our accounts have never been more organised.',
    rating: 5,
  },
  {
    name: 'Client',
    role: 'Multi-Channel Retailer',
    content: 'We sell online, on eBay and in our high street shop. RUS brings all our sales channels together into one clear financial picture. Their retail expertise and support with EPOS integration has been outstanding.',
    rating: 5,
  },
];

// FAQs
const faqs = [
  {
    question: 'Can you integrate with Shopify, Amazon and other e-commerce platforms?',
    answer: 'Yes. We integrate with all major e-commerce platforms including Shopify, WooCommerce, Amazon Seller Central, eBay Managed Payments, Etsy, Squarespace and BigCommerce. We also connect with payment processors like PayPal, Stripe and Klarna. This integration automates transaction recording, reduces manual data entry and provides real-time financial visibility across all your sales channels.',
  },
  {
    question: 'How do you handle VAT for online and marketplace sellers?',
    answer: 'VAT for online retailers can be complex, especially when selling internationally or through marketplaces. We advise on standard vs reduced rate items, VAT on digital sales, international VAT rules (OSS/IOSS schemes), marketplace facilitator VAT and platform fee treatments. We ensure your VAT returns are accurate, compliant and take advantage of available simplifications and reliefs.',
  },
  {
    question: 'Do you support Amazon FBA and FBM sellers?',
    answer: 'Absolutely. We specialise in Amazon seller accounting, managing the complexities of FBA fees, storage costs, advertising expenses, returns, refunds and multi-marketplace sales. We integrate directly with Amazon Seller Central to automate transaction recording and provide clear profitability analysis after all Amazon fees and costs.',
  },
  {
    question: 'Can you help with stock management and inventory valuation?',
    answer: 'Yes. We support retail businesses with stock control, inventory valuation (FIFO, weighted average or standard cost), margin and GP analysis and integration with stock management systems. Accurate stock valuation is essential for understanding true profitability, and we ensure your stock records align with your accounting and tax reporting.',
  },
  {
    question: 'How do you handle multi-channel retail accounting?',
    answer: 'Many retailers sell across multiple channels — online stores, marketplaces and physical shops. We unify all sales data into a single accounting system, providing consolidated financial reporting that shows performance across each channel. This gives you complete visibility of sales, costs, margins and cashflow regardless of where your transactions originate.',
  },
  {
    question: 'Do you provide payroll services for retail businesses?',
    answer: 'Yes. We manage payroll for retail businesses of all sizes, including weekly or monthly payroll cycles, automated payslips via employee apps, auto-enrolment pensions, holiday pay calculations, variable hours and rota changes. We understand the staffing challenges retailers face and provide flexible, reliable payroll support tailored to your needs.',
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

export default function RetailSectorPage() {
  return (
    <>
      <ServiceHero
        title="Retail Sector Accountancy"
        subtitle="Specialist accountants for online retailers, high street shops and multi-channel retail businesses"
        description="The retail sector has transformed dramatically in recent years, with rapid growth in e-commerce, multi-platform selling and hybrid business models. Whether you run an online store, operate through platforms like Amazon and eBay, or manage a physical shop on the high street, you face unique financial and operational challenges — from managing stock and margins to dealing with complex VAT rules and fast-moving customer demands."
        imageUrl="https://imagedelivery.net/W93NbEGaswuledAsk5GMeA/75ae737c-b98a-4968-cc73-c3e5e513de00/public"
      />

      <div id="services">
        <WhoWeHelp
          title="Specialist Accountants for Retail Businesses"
          subtitle="With over 30 years of experience supporting retail businesses, we provide clear, reliable and sector-specific accountancy services designed to help you stay profitable, compliant and able to grow with confidence"
          clientTypes={retailServices}
          bgColor="bg-gradient-to-br from-[#01458f] to-[#0052cc]"
          darkMode={true}
        />
      </div>

      <ServiceOverview
        leftContent={{
          title: 'Supporting Retailers Across All Channels',
          description: 'From e-commerce start-ups to established high street retailers, we provide dependable accounting expertise that supports growth, profitability and financial clarity. With specialist knowledge in online retail, marketplace selling and multi-channel operations, we help you navigate the sector with confidence.',
        }}
        rightContent={{
          stats: [
            { value: '30+', label: 'Years Experience' },
            { value: '400+', label: 'Retail Clients' },
          ],
        }}
        imageUrl="https://imagedelivery.net/W93NbEGaswuledAsk5GMeA/f8e101dd-a644-4910-c6b8-78150bfe5e00/public"
      />

      <CTASimple
        heading="Expert accounting for retail businesses"
        supportingText="Specialist support for online, marketplace and high street retailers"
        buttonText="Get Started"
      />

      <div id="benefits">
        <ServiceBenefits title="Why Retail Businesses Choose Us" items={benefits} knowledgeIconUrl="https://imagedelivery.net/W93NbEGaswuledAsk5GMeA/f9011462-d707-49f5-82f3-4af3fa191400/public" knowledgeIconIndex={0} />
      </div>

      <div id="testimonials">
        <ServiceTestimonials
          title="Client Testimonials"
          subtitle="Hear from retail businesses we support across the UK"
          testimonials={testimonials}
        />
      </div>

      <CTASimple
        heading="Ready to grow your retail business?"
        supportingText="Over 30 years of retail sector accounting expertise"
        buttonText="Contact Us Today"
      />

      <div id="faqs">
        <ServiceFAQ
          title="Retail Sector FAQs"
          subtitle="Common questions about our retail accountancy services"
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
