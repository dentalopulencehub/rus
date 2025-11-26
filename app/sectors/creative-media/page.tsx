import { Metadata } from 'next';
import { ServiceHero } from '@/components/services/ServiceHero';
import { WhoWeHelp } from '@/components/services/WhoWeHelp';
import { ServiceOverview } from '@/components/services/ServiceOverview';
import { ServiceBenefits } from '@/components/services/ServiceBenefits';
import { ServiceTestimonials } from '@/components/services/ServiceTestimonials';
import { ServiceFAQ } from '@/components/services/ServiceFAQ';
import { InsightsPreview } from '@/components/home/InsightsPreview';
import { StickyMiniNav } from '@/components/services/StickyMiniNav';

export const metadata: Metadata = {
  title: 'Creative & Media Accountants Birmingham | Agencies, Freelancers | RUS',
  description: 'Expert accountants for creative professionals, agencies, production companies and freelancers. Project accounting, tax planning, creative tax reliefs. Birmingham creative sector accountants.',
  keywords: [
    'creative accountants Birmingham',
    'media agency accountants',
    'freelancer accountants UK',
    'production company accountants',
    'creative tax relief',
    'marketing agency accountants',
    'digital agency accountants Birmingham',
    'film production accountants',
  ],
  openGraph: {
    title: 'Creative & Media Sector Accountants | RUS Chartered Accountants',
    description: 'Expert accountants for creative agencies, production companies and freelance creatives.',
    type: 'website',
  },
  alternates: {
    canonical: 'https://rus.co.uk/sectors/creative-media',
  },
};

// Creative Media Services - EXACTLY 8 for design consistency
const creativeServices = [
  {
    title: 'Accounts & Tax Returns',
    description: 'Comprehensive accounts and tax compliance for freelancers, sole traders, limited companies and creative agencies with multi-platform income streams',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    title: 'Multi-Platform Income Reporting',
    description: 'Accurate reporting for YouTube, TikTok, Instagram, Twitch, Patreon, OnlyFans, Spotify, streaming royalties, licensing marketplaces and international earnings',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
  },
  {
    title: 'Digital Bookkeeping & Cloud Accounting',
    description: 'Cloud-based accounting systems designed for creatives with irregular income, variable expenses and project-based work patterns',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'VAT Advice for Creative Industry',
    description: 'Expert VAT guidance for digital services, international VAT considerations, reverse charge rules and VAT thresholds for high-earning content creators',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2z" />
      </svg>
    ),
  },
  {
    title: 'Expense Optimisation & Allowable Costs',
    description: 'Maximise tax relief on travel, equipment and technology, software subscriptions, studio or workspace costs, production expenses and content creation costs',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Cashflow Planning & Budgeting',
    description: 'Essential financial planning for creatives with variable or seasonal income, helping you manage irregular earnings and plan for tax payments',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
  {
    title: 'Business Structure & Incorporation Advice',
    description: 'Strategic advice on whether to remain self-employed or operate through a limited company for tax efficiency, growth and professional credibility',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Brand Partnership & Sponsorship Income',
    description: 'Compliance and reporting for sponsorships, brand deals, affiliate marketing, paid collaborations and subscription platform income',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
];

// 4 Key Benefits
const benefits = [
  {
    title: 'Over 30 Years Supporting Evolving Industries',
    description: 'Three decades helping businesses adapt to change, from traditional creative industries to modern digital media, content creation and multi-platform earning models.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
  {
    title: 'Digital Media Income & Creative Tax Specialists',
    description: 'Deep understanding of sponsorships, brand deals, streaming royalties, subscription platforms, affiliate marketing and international digital earnings tax treatment.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    title: 'Multi-Platform & International Earnings Expertise',
    description: 'Specialist advice for income from YouTube, TikTok, Patreon, Spotify and other platforms, including international tax considerations and multi-currency earnings.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Freelancers, Companies & Agencies Supported',
    description: 'Support for individual content creators, freelance creatives, limited companies and growing creative agencies across all digital and traditional media sectors.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM14 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 16a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-3zM14 16a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1h-4a1 1 0 01-1-1v-3z" />
      </svg>
    ),
  },
];

// 3 Client Testimonials
const testimonials = [
  {
    name: 'Alex Morgan',
    role: 'Content Creator & YouTuber (300K+ subscribers)',
    content: 'RUS completely transformed how I manage my income from YouTube, sponsorships and Patreon. They understand multi-platform earnings and helped me optimise my tax position while staying fully compliant. Couldn\'t recommend them more highly.',
    rating: 5,
  },
  {
    name: 'Sophie Chen',
    role: 'Freelance Designer & Illustrator',
    content: 'Managing irregular freelance income across multiple clients and platforms used to stress me out. RUS set up a simple cloud accounting system and handles all my tax returns. They speak my language and genuinely understand creative work.',
    rating: 5,
  },
  {
    name: 'Marcus Bennett',
    role: 'Director, Catalyst Creative Agency',
    content: 'As our agency scaled from two founders to fifteen employees, RUS provided the financial guidance we needed. Their expertise in digital media income, VAT and growth planning has been crucial to our success.',
    rating: 5,
  },
];

// 6 Frequently Asked Questions
const faqs = [
  {
    question: 'How is income from YouTube, TikTok and social media taxed?',
    answer: 'Income from content creation, advertising revenue, brand partnerships and sponsorships is taxable as self-employment income if you\'re a sole trader, or as company income if you operate through a limited company. You must report all earnings including AdSense payments, brand deals, affiliate commissions and platform subscriptions. HMRC treats this as trading income, not employment, so you\'re responsible for calculating and paying tax through self-assessment. We help you track earnings across multiple platforms, identify allowable expenses, calculate tax liabilities and ensure accurate reporting to HMRC.',
  },
  {
    question: 'What expenses can content creators and freelance creatives claim?',
    answer: 'Content creators and freelance creatives can claim allowable business expenses including camera equipment, computers and technology, editing software and subscriptions (Adobe, Final Cut Pro), props and production materials, travel for content creation, workspace costs (home office or studio rent), internet and phone bills, professional fees and services, and training or courses to improve skills. Expenses must be wholly and exclusively for business purposes. We help you identify all eligible expenses, maintain proper records and maximise tax relief while ensuring HMRC compliance.',
  },
  {
    question: 'How do I handle tax on international platform income like from US companies?',
    answer: 'Many digital platforms (YouTube, Twitch, Patreon) are US-based and may withhold US tax on your earnings. However, the UK-US tax treaty typically allows you to reclaim this withholding by filing a W-8BEN form confirming UK tax residency. You must still declare all gross income (before any US withholding) on your UK tax return and can often claim credit for any US tax paid. Platforms usually pay in US dollars, so you must convert earnings to GBP using HMRC exchange rates. We handle multi-currency income reporting, foreign tax credit claims and ensure you\'re not paying tax twice on the same earnings.',
  },
  {
    question: 'When do content creators need to register for VAT?',
    answer: 'You must register for VAT if your taxable turnover exceeds £90,000 in any 12-month period (2024/25 threshold). For content creators, this includes sponsorship income, brand partnership fees, consultation services and digital product sales. However, some income may be outside the scope of UK VAT (e.g., advertising revenue from US platforms). VAT registration brings administrative burden but also allows you to reclaim VAT on business expenses. We advise on whether your income is VAT-able, when to register voluntarily for early reclaims, and handle all VAT compliance to minimise administrative burden.',
  },
  {
    question: 'Should I operate as self-employed or set up a limited company?',
    answer: 'Self-employment is simpler for lower earnings (under £30,000-£40,000), with straightforward tax returns and minimal compliance. However, limited companies typically offer lower tax rates on higher profits through salary and dividend strategies, better credibility with brands and agencies, limited liability protection, and easier access to business finance. The trade-off is increased administration and Companies House filing requirements. We model both scenarios for your expected income, advise on the most tax-efficient structure, handle company formation if beneficial, and support whichever structure you choose.',
  },
  {
    question: 'How is royalty and licensing income taxed for creative professionals?',
    answer: 'Royalty income from music streaming, book sales, image licensing or other intellectual property is taxable as trading or professional income if it relates to your trade (e.g., a musician\'s streaming royalties). If you receive royalties as a one-off from past work, it may be taxed differently. UK tax may be deducted at source on some royalties, which you can offset against your tax bill. International royalties may have foreign tax withheld under treaty rules. We ensure accurate reporting of all royalty types, advise on tax treatment, handle foreign tax credits, and identify relevant reliefs to minimise your tax liability.',
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

export default function CreativeMediaSectorPage() {
  return (
    <>
      <ServiceHero
        title="Creative & Media Sector Accountancy"
        subtitle="Specialist accountants for creatives, digital professionals and modern content-driven businesses"
        description="The creative and digital media landscape has changed dramatically in recent years. With huge growth in online content creation, digital marketing, streaming platforms, social media monetisation and freelance creative work, income sources are more diverse — and more complex — than ever before. We understand the financial challenges and unique tax considerations facing today\'s creative professionals."
      />

      <div id="services">
        <WhoWeHelp
          title="Specialist Accountants for Creative & Media Professionals"
          subtitle="Whether you're generating revenue through brand partnerships, advertising, royalties, digital sales or multiple freelance contracts, we provide tailored, industry-specific support designed to bring clarity and confidence to your finances"
          clientTypes={creativeServices}
        />
      </div>

      <ServiceOverview
        leftContent={{
          title: 'Supporting Creative Success in the Digital Age',
          description: 'From individual content creators to creative agencies, we provide dependable accounting expertise that supports compliance, tax efficiency and growth. With specialist knowledge in multi-platform income, digital media tax and international earnings, we help you navigate the creative sector with confidence.',
        }}
        rightContent={{
          stats: [
            { value: '30+', label: 'Years Experience' },
            { value: '250+', label: 'Creative Clients' },
          ],
        }}
      />

      {/* First CTA */}
      <section className="w-full flex items-center justify-center bg-white px-4 py-24 pt-32">
        <div className="max-w-6xl mx-auto w-full">
          <div className="relative bg-gradient-to-br from-[#01458f] to-[#0052cc] rounded-3xl overflow-hidden px-8 md:px-16 py-20 md:py-28">
            <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
              <path d="M 600 -100 Q 800 100 850 300" stroke="white" strokeWidth="2" fill="none" />
              <circle cx="750" cy="150" r="80" stroke="white" strokeWidth="1.5" fill="none" />
              <path d="M 700 50 L 850 80 L 820 200" stroke="white" strokeWidth="1.5" fill="none" />
              <path d="M 650 120 L 750 100 L 730 180 L 640 190 Z" stroke="white" strokeWidth="1" fill="none" />
              <path d="M -50 400 Q 100 450 200 480" stroke="white" strokeWidth="2" fill="none" />
              <circle cx="100" cy="420" r="60" stroke="white" strokeWidth="1.5" fill="none" />
              <path d="M 50 380 L 180 400 L 160 480" stroke="white" strokeWidth="1.5" fill="none" />
              <line x1="400" y1="50" x2="500" y2="80" stroke="white" strokeWidth="1" opacity="0.5" />
              <line x1="300" y1="400" x2="400" y2="420" stroke="white" strokeWidth="1" opacity="0.5" />
              <circle cx="500" cy="60" r="30" stroke="white" strokeWidth="1" fill="none" opacity="0.4" />
            </svg>

            <div className="relative z-10 flex flex-col items-center text-center space-y-6">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight">
                Expert accounting for<br />creative professionals
              </h2>

              <a href="/contact" className="relative inline-flex items-center justify-center px-32 py-2 bg-white text-gray-900 rounded-full text-base md:text-lg font-semibold hover:shadow-2xl hover:shadow-white/30 transition-all duration-300 overflow-hidden group">
                <div className="absolute inset-0 -z-10 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-md backdrop-saturate-150" />
                <div className="absolute inset-0 -z-20 bg-gradient-to-br from-white/30 via-white/10 to-white/30 rounded-full opacity-0 group-hover:opacity-40 transition-all duration-300" />
                <div className="absolute inset-0 -z-30 bg-white rounded-full transition-all duration-300 group-hover:bg-white/95" />
                <span className="relative z-10">Get Started</span>
              </a>

              <p className="text-white/90 text-sm md:text-base">
                Specialist support for content creators, freelancers, agencies and digital media professionals
              </p>

              <div className="flex flex-col items-center justify-center gap-3 text-white/70 text-sm mt-4">
                <div className="flex flex-col md:flex-row items-center gap-3 md:gap-6">
                  <a href="tel:01217771200" className="flex items-center gap-2 hover:text-white transition-colors duration-200">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span>0121 777 1200</span>
                  </a>
                  <span className="hidden md:inline">•</span>
                  <a href="mailto:info@rus.co.uk" className="flex items-center gap-2 hover:text-white transition-colors duration-200">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span>info@rus.co.uk</span>
                  </a>
                </div>
                <div className="flex items-center gap-2 text-center">
                  <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>1190A-1194 Stratford Road, Hall Green, Birmingham, B28 8AB</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div id="benefits">
        <ServiceBenefits title="Why Creative Professionals Choose Us" items={benefits} />
      </div>

      <div id="testimonials">
        <ServiceTestimonials
          title="Client Testimonials"
          subtitle="Hear from creative and media professionals we support across the UK"
          testimonials={testimonials}
        />
      </div>

      {/* Second CTA */}
      <section className="w-full flex items-center justify-center bg-white px-4 py-24">
        <div className="max-w-6xl mx-auto w-full">
          <div className="relative bg-gradient-to-br from-[#01458f] to-[#0052cc] rounded-3xl overflow-hidden px-8 md:px-16 py-20 md:py-28">
            <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
              <path d="M 600 -100 Q 800 100 850 300" stroke="white" strokeWidth="2" fill="none" />
              <circle cx="750" cy="150" r="80" stroke="white" strokeWidth="1.5" fill="none" />
              <path d="M 700 50 L 850 80 L 820 200" stroke="white" strokeWidth="1.5" fill="none" />
              <path d="M 650 120 L 750 100 L 730 180 L 640 190 Z" stroke="white" strokeWidth="1" fill="none" />
              <path d="M -50 400 Q 100 450 200 480" stroke="white" strokeWidth="2" fill="none" />
              <circle cx="100" cy="420" r="60" stroke="white" strokeWidth="1.5" fill="none" />
              <path d="M 50 380 L 180 400 L 160 480" stroke="white" strokeWidth="1.5" fill="none" />
              <line x1="400" y1="50" x2="500" y2="80" stroke="white" strokeWidth="1" opacity="0.5" />
              <line x1="300" y1="400" x2="400" y2="420" stroke="white" strokeWidth="1" opacity="0.5" />
              <circle cx="500" cy="60" r="30" stroke="white" strokeWidth="1" fill="none" opacity="0.4" />
            </svg>

            <div className="relative z-10 flex flex-col items-center text-center space-y-6">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight">
                Ready to support<br />creative business growth?
              </h2>

              <a href="/contact" className="relative inline-flex items-center justify-center px-32 py-2 bg-white text-gray-900 rounded-full text-base md:text-lg font-semibold hover:shadow-2xl hover:shadow-white/30 transition-all duration-300 overflow-hidden group">
                <div className="absolute inset-0 -z-10 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-md backdrop-saturate-150" />
                <div className="absolute inset-0 -z-20 bg-gradient-to-br from-white/30 via-white/10 to-white/30 rounded-full opacity-0 group-hover:opacity-40 transition-all duration-300" />
                <div className="absolute inset-0 -z-30 bg-white rounded-full transition-all duration-300 group-hover:bg-white/95" />
                <span className="relative z-10">Contact Us Today</span>
              </a>

              <p className="text-white/90 text-sm md:text-base">
                Over 30 years supporting creative industries and digital media professionals
              </p>
            </div>
          </div>
        </div>
      </section>

      <div id="faqs">
        <ServiceFAQ
          title="Creative & Media FAQs"
          subtitle="Common questions about our creative and digital media accountancy services"
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
