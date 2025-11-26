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

export const metadata: Metadata = {
  title: 'Forensic Accounting Services Birmingham | Expert Witness Reports | RUS',
  description: 'Specialist forensic accounting for fraud investigations, financial disputes, matrimonial cases, business valuations. Expert witness reports for litigation. Birmingham forensic accountants.',
  keywords: [
    'forensic accounting Birmingham',
    'fraud investigation accountants',
    'expert witness reports',
    'business valuation litigation',
    'matrimonial financial disputes',
    'financial dispute resolution',
    'loss of earnings calculations',
    'forensic audit UK',
  ],
  openGraph: {
    title: 'Forensic Accounting Services | RUS Chartered Accountants',
    description: 'Specialist forensic accounting investigating financial irregularities and providing expert analysis.',
    type: 'website',
  },
  alternates: {
    canonical: 'https://rus.co.uk/services/forensic-accounting',
  },
};

// Comprehensive Forensic Accounting Services - EXACTLY 8 for design consistency
const forensicServices = [
  {
    title: 'Fraud Investigation & Detection',
    description: 'Detailed reviews to identify fraudulent activity including misappropriation of assets, false invoicing, payroll fraud, procurement irregularities and falsified accounting records',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
  },
  {
    title: 'Financial Dispute Resolution',
    description: 'Forensic support during commercial disputes including contractual disagreements, partnership disputes, director/shareholder conflicts and breach of fiduciary duty claims',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
      </svg>
    ),
  },
  {
    title: 'Matrimonial & Family Law Cases',
    description: 'Assessment and investigation of hidden assets, undisclosed income, business valuations and lifestyle analysis for divorce or separation cases, supporting fair settlements',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    title: 'Business Valuations for Litigation',
    description: 'Independent business valuation reports for court proceedings, partnership disputes, divorce settlements and shareholder conflicts—evidence-based, transparent and professionally compliant',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    title: 'Loss of Earnings & Compensation',
    description: 'Clear and accurate assessments for personal injury claims, professional negligence cases and business interruption claims, evaluating historical data and projected earnings',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Forensic Review of Accounting Records',
    description: 'Full forensic review to reconstruct records, quantify losses or discrepancies, identify sources of error and provide remedial recommendations when irregularities are identified',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    title: 'Expert Witness Reports',
    description: 'Independent, accurate and authoritative expert witness reports suitable for court, tribunals, mediation or arbitration, with availability for expert testimony',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: 'Asset Tracing & Recovery',
    description: 'Specialist asset tracing services to locate hidden or diverted assets, supporting litigation, divorce proceedings and fraud investigations with comprehensive evidence gathering',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
];

// Benefits - EXACTLY 4 for design consistency
const benefits = [
  {
    title: 'Sector-Wide Forensic Expertise',
    description: 'Experienced forensic accountants with proven expertise across all industries and case types',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
  {
    title: 'Independent & Unbiased Analysis',
    description: 'Objective, evidence-based analysis you can rely on for court proceedings and dispute resolution',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
  },
  {
    title: 'Court-Ready Reporting',
    description: 'Clear, concise and authoritative reports suitable for court, tribunals, mediation and arbitration',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    title: 'Complete Confidentiality',
    description: 'Discreet, professional service with full confidentiality throughout every investigation and engagement',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
  },
];

// Testimonials
const testimonials = [
  {
    name: 'Helen Winters',
    role: 'Partner, Winters & Associates Solicitors',
    content: 'RUS provided exceptional forensic accounting support during a complex commercial dispute. Their expert witness report was clear, thorough and instrumental in achieving a favourable settlement for our client. Their professionalism throughout was outstanding.',
    rating: 5,
  },
  {
    name: 'Marcus Taylor',
    role: 'Finance Director, Taylor Industries Ltd',
    content: 'When we suspected internal fraud, RUS conducted a comprehensive forensic investigation. Their meticulous analysis uncovered the full extent of the issue and provided the evidence we needed. Their discretion and expertise were invaluable throughout a difficult situation.',
    rating: 5,
  },
  {
    name: 'Claire Roberts',
    role: 'Managing Director, Roberts Property Group',
    content: 'The forensic accounting team supported us through a partnership dispute with detailed financial analysis and an independent business valuation. Their court-ready reporting and clear explanations gave us complete confidence during the proceedings.',
    rating: 5,
  },
];

// FAQs
const faqs = [
  {
    question: 'What is forensic accounting?',
    answer: 'Forensic accounting is the specialist application of accounting skills to investigate financial irregularities, disputes and legal matters. It involves detailed analysis of financial records to uncover fraud, quantify losses, trace assets, value businesses for litigation and provide expert evidence for court proceedings. Our forensic accountants combine technical expertise with investigative skills to deliver independent, evidence-based findings.',
  },
  {
    question: 'When might I need forensic accounting services?',
    answer: 'Forensic accounting is needed in situations such as suspected fraud or financial irregularities within a business, commercial disputes requiring financial evidence, divorce or separation cases involving hidden assets or business valuations, shareholder or partnership disputes, insurance claims, professional negligence cases, or when expert witness testimony is required for court proceedings or tribunals.',
  },
  {
    question: 'Can you act as an expert witness in court?',
    answer: 'Yes. We prepare independent expert witness reports suitable for court, tribunals, mediation and arbitration. Our reports are evidence-based, authoritative and comply with all professional standards. Where required, we are also available to provide expert testimony in court to explain our findings and answer questions from legal representatives and the court.',
  },
  {
    question: 'How long does a forensic accounting investigation take?',
    answer: 'The duration depends on the complexity of the case, the volume of financial records involved and the nature of the investigation. Simple reviews may be completed within weeks, whilst complex fraud investigations or large-scale disputes can take several months. We provide realistic timescales at the outset and work efficiently to deliver findings as quickly as possible without compromising thoroughness or accuracy.',
  },
  {
    question: 'Is your forensic accounting service confidential?',
    answer: 'Yes. Complete confidentiality is fundamental to our forensic accounting service. We work discreetly and ensure all findings, documentation and communications are handled with the highest level of confidentiality and professionalism. This applies whether we are acting for individuals, businesses, legal teams or regulatory bodies.',
  },
  {
    question: 'How much does forensic accounting cost?',
    answer: 'Costs depend on the complexity and scope of the investigation or case. We provide transparent fee estimates at the outset based on the specific requirements of your matter. For litigation support and expert witness services, fees are typically based on time spent on analysis, reporting and court attendance. Contact us to discuss your case and receive a tailored quote.',
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

export default function ForensicAccountingPage() {
  return (
    <>
      <ServiceHero
        title="Forensic Accounting"
        subtitle="Specialist forensic accounting services designed to investigate financial irregularities, support legal cases and provide clear, independent expert analysis"
        description="Forensic accounting plays a crucial role in uncovering financial discrepancies, identifying fraud, supporting disputes and providing evidence-based clarity in complex situations. Whether you are facing a commercial dispute, suspected wrongdoing, matrimonial proceedings or require an expert report, our forensic accounting service offers meticulous analysis, precise reporting and independent expertise."
      />

      <div id="services">
        <WhoWeHelp
          title="Comprehensive Forensic Accounting Services"
          subtitle="Reliable, confidential and objective forensic work for individuals, businesses, legal professionals and regulatory bodies"
          clientTypes={forensicServices}
        />
      </div>

      <ServiceOverview
        leftContent={{
          title: 'Clarity, Accuracy and Independent Expertise',
          description: 'We combine technical expertise with attention to detail, ensuring every investigation is conducted with precision and care. Our approach includes detailed analysis of financial records, examination of internal controls, cross-checking evidence from multiple sources and data-driven findings supported by clear explanations.',
        }}
        rightContent={{
          stats: [
            { value: '30+', label: 'Years Experience' },
            { value: '100%', label: 'Confidential Service' },
          ],
        }}
      />

      {/* First CTA - Expert Support */}
      <section className="py-20 md:py-32 px-4 md:px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent"></div>

        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight">
                Need expert forensic<br />accounting support?
              </h2>
              <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
                Our forensic accounting team provides the clarity and certainty needed to resolve even the most complex financial matters.
              </p>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
              <a
                href="/contact"
                className="relative inline-flex items-center justify-center px-32 py-2 bg-white text-gray-900 rounded-full text-base md:text-lg font-semibold hover:shadow-2xl hover:shadow-white/30 transition-all duration-300 overflow-hidden group"
              >
                <span className="relative z-10">Discuss Your Case</span>
              </a>

              <a
                href="/who-we-are"
                className="relative inline-flex items-center justify-center px-32 py-2 bg-transparent text-white rounded-full text-base md:text-lg font-semibold border-2 border-white/30 hover:border-white/60 hover:bg-white/10 transition-all duration-300"
              >
                <span className="relative z-10">Learn More</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <div id="benefits">
        <ServiceBenefits title="Why Choose Our Forensic Accounting Services?" items={benefits} />
      </div>

      <div id="testimonials">
        <ServiceTestimonials
          title="Client Testimonials"
          subtitle="Hear from clients we've supported with forensic accounting investigations"
          testimonials={testimonials}
        />
      </div>

      {/* Second CTA - Contact */}
      <section className="py-20 md:py-32 px-4 md:px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent"></div>

        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight">
                Require forensic accounting<br />or expert witness services?
              </h2>
              <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
                Contact us today for confidential, professional support tailored to your specific case.
              </p>
            </div>

            <div className="flex flex-col items-center gap-6">
              <a
                href="/contact"
                className="relative inline-flex items-center justify-center px-32 py-2 bg-white text-gray-900 rounded-full text-base md:text-lg font-semibold hover:shadow-2xl hover:shadow-white/30 transition-all duration-300 overflow-hidden group"
              >
                <span className="relative z-10">Contact Us Today</span>
              </a>

              <div className="flex flex-col md:flex-row items-center gap-6 text-white/80">
                <a href="tel:01217771200" className="flex items-center gap-2 hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>0121 777 1200</span>
                </a>
                <a href="mailto:info@rus.co.uk" className="flex items-center gap-2 hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>info@rus.co.uk</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div id="faqs">
        <ServiceFAQ
          title="Forensic Accounting FAQs"
          subtitle="Common questions about our forensic accounting services"
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
