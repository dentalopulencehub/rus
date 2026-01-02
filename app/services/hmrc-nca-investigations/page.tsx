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
  title: 'HMRC & NCA Investigations Support Birmingham | Tax Investigation Cover | RUS',
  description: 'Expert support for HMRC enquiries and NCA investigations. Professional representation, disclosure support, tax investigation insurance. Protect your interests with experienced Birmingham accountants.',
  keywords: [
    'HMRC investigation support',
    'tax enquiry representation Birmingham',
    'NCA investigation accountants',
    'tax investigation cover',
    'HMRC disclosure services',
    'tax compliance checks',
    'VAT investigation support',
    'CIS investigation help',
  ],
  openGraph: {
    title: 'HMRC & NCA Investigation Support | RUS Chartered Accountants',
    description: 'Expert support and representation for HMRC enquiries and NCA investigations.',
    type: 'website',
  },
  alternates: {
    canonical: 'https://rus.co.uk/services/hmrc-nca-investigations',
  },
};

// Our HMRC & NCA Investigation Services - 6 services from source document
const investigationServices = [
  {
    title: 'HMRC Enquiries & Compliance Checks',
    description: 'We handle all types of HMRC enquiries, including Self-assessment investigations, Corporation Tax enquiries, VAT inspections, PAYE and payroll compliance checks, CIS verification reviews and Director and shareholder enquiries. We manage correspondence, provide responses, gather evidence and negotiate directly with HMRC on your behalf, ensuring the most efficient and favourable outcome',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    title: 'Tax Irregularity & Disclosure Support',
    description: 'If historical irregularities exist, we guide clients through HMRC disclosure facilities such as The Digital Disclosure Service (DDS), The Let Property Campaign, Offshore disclosures and Voluntary disclosures. We help you make a clear, accurate and complete disclosure, minimising penalties and demonstrating cooperation',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: 'VAT, PAYE & CIS Disputes',
    description: 'We support clients during disputes over VAT reclaims or assessments, PAYE/NIC discrepancies, CIS deduction issues, Misclassification of workers and Penalty appeals. We provide representation, review HMRC findings and present evidence to defend your position',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
      </svg>
    ),
  },
  {
    title: 'Director & Shareholder Investigations',
    description: 'We provide strategic guidance for directors under scrutiny for tax, remuneration or dividend issues, ensuring compliance and protecting personal interests',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
  },
  {
    title: 'Assistance With NCA Financial Crime Investigations',
    description: 'NCA enquiries can involve serious financial allegations such as Money laundering, Suspicious activity reports (SARs), Unexplained Wealth Orders (UWOs), Proceeds of crime investigations and Fraud and tax evasion connections. We work with specialist legal partners where necessary to ensure coordinated, accurate and robust representation, guiding clients through every stage of the process',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
  },
  {
    title: 'Tax Investigation Cover (Insurance)',
    description: 'Insurance protection covering professional fees during HMRC enquiries. This includes cover for self-assessment, Corporation Tax, PAYE, VAT, CIS and IR35 investigations. Our fees are fully covered during an investigation, with no unexpected costs and immediate expert support available',
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
    title: 'Extensive HMRC & NCA Experience',
    description: 'Proven track record dealing directly with HMRC and NCA investigators across all types of enquiries',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
  {
    title: 'Accurate Documentation Handling',
    description: 'Meticulous preparation and compliant handling of all documentation, responses and evidence submissions',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    title: 'Strong Negotiation Skills',
    description: 'Skilled negotiation to minimise penalties, resolve disputes and achieve the most favourable outcomes',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: 'Tax Investigation Cover Available',
    description: 'Optional insurance protection against professional fees, ensuring immediate expert support without cost concerns',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
];

// Testimonials
const testimonials = [
  {
    name: 'James Richardson',
    role: 'Managing Director, Richardson Properties Ltd',
    content: 'When we received an HMRC enquiry letter, RUS stepped in immediately. Their knowledge and professionalism throughout the investigation gave us complete confidence. The matter was resolved efficiently with minimal disruption.',
    rating: 5,
  },
  {
    name: 'Sarah Thompson',
    role: 'Director, Thompson Construction Services',
    content: 'The team handled our CIS compliance check with exceptional expertise. They managed all correspondence with HMRC, kept us fully informed and achieved a swift resolution. Their Tax Investigation Cover also gave us valuable peace of mind.',
    rating: 5,
  },
  {
    name: 'David Chen',
    role: 'Senior Partner, Chen & Associates',
    content: 'RUS provided outstanding support during a complex VAT dispute. Their strategic approach, attention to detail and strong negotiation skills resulted in a significantly reduced penalty. I would not hesitate to recommend their services.',
    rating: 5,
  },
];

// FAQs
const faqs = [
  {
    question: 'What should I do if I receive an HMRC enquiry letter?',
    answer: (
      <>
        Contact us immediately upon receiving any correspondence from <a href="https://www.gov.uk/government/organisations/hm-revenue-customs" target="_blank" rel="noopener noreferrer" className="text-[#01458f] underline hover:text-[#013a75] transition-colors">HMRC</a>. Early professional advice is essential. Do not ignore the letter or attempt to respond without guidance. We will review the enquiry, explain what it means, advise on the best course of action and manage all communication with HMRC on your behalf to ensure the matter is handled correctly from the start.
      </>
    ),
  },
  {
    question: 'What is Tax Investigation Cover and do I need it?',
    answer: 'Tax Investigation Cover is insurance that protects you from the professional fees associated with an HMRC enquiry. Even if you have done nothing wrong, defending your position during an investigation can be expensive. This cover ensures our fees are fully paid during an enquiry, providing immediate access to expert support without cost concerns. We recommend this for all clients who want complete peace of mind.',
  },
  {
    question: 'How long does an HMRC investigation typically take?',
    answer: 'The duration varies depending on the type and complexity of the investigation. Simple compliance checks may be resolved within weeks, whilst full enquiries can take several months or longer. We work efficiently to provide HMRC with all necessary information promptly, aiming to bring the matter to a swift resolution whilst ensuring your interests are fully protected.',
  },
  {
    question: 'Can you help with historical tax irregularities?',
    answer: (
      <>
        Yes. If you have discovered historical tax errors or omissions, we can guide you through HMRC disclosure facilities such as the Digital Disclosure Service (DDS), <Link href="/sectors/property-services" className="text-[#01458f] underline hover:text-[#013a75] transition-colors">Let Property Campaign</Link> or voluntary disclosure routes. Making a proactive, accurate and complete disclosure demonstrates cooperation with HMRC and typically results in reduced penalties compared to HMRC discovering the issue independently.
      </>
    ),
  },
  {
    question: 'What is an NCA investigation and how is it different from HMRC?',
    answer: (
      <>
        The <a href="https://www.nationalcrimeagency.gov.uk/" target="_blank" rel="noopener noreferrer" className="text-[#01458f] underline hover:text-[#013a75] transition-colors">National Crime Agency (NCA)</a> handles serious financial crime investigations including money laundering, proceeds of crime, Unexplained Wealth Orders (UWOs) and fraud with potential criminal implications. These investigations are more serious than typical HMRC tax enquiries. We provide specialist support for NCA matters and work with legal partners where necessary to ensure coordinated, robust representation throughout the process.
      </>
    ),
  },
  {
    question: 'How much does your investigation support service cost?',
    answer: 'Costs depend on the complexity and duration of the investigation. For clients with Tax Investigation Cover, our professional fees during an HMRC enquiry are fully covered by the insurance. For those without cover, we provide transparent fee estimates at the outset. Contact us for a quote tailored to your specific circumstances and investigation type.',
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

export default function HMRCNCAInvestigationsPage() {
  return (
    <>
      <ServiceHero
        title="HMRC & NCA Investigations"
        subtitle="Expert support and representation for individuals and businesses facing HMRC or National Crime Agency (NCA) investigations"
        description="An enquiry from HMRC or the NCA can be stressful, time-consuming and potentially costly. Whether it's a routine compliance check, a full-scale tax investigation or a criminal enquiry, having professional guidance is essential. We provide comprehensive support, ensuring that your rights are protected, your position is clearly represented and the investigation is handled efficiently and accurately."
        imageUrl="https://imagedelivery.net/W93NbEGaswuledAsk5GMeA/a9758f88-317f-47b2-6460-bb13aefa2f00/public"
      />

      <div id="services">
        <WhoWeHelp
          title="Our HMRC & NCA Investigation Services"
          subtitle="Experienced assistance across a wide range of HMRC and NCA matters, delivered with clarity, discretion and confidence"
          clientTypes={investigationServices}
        />
      </div>

      <ServiceOverview
        leftContent={{
          title: 'Expert Support When You Need It Most',
          description: 'If you have received an enquiry letter, a compliance check notice or formal communication from HMRC or the NCA, early professional advice is essential. We provide clear, reliable and confidential support designed to reduce stress, protect your interests and bring your matter to a swift and efficient resolution.',
        }}
        rightContent={{
          stats: [
            { value: '30+', label: 'Years Experience' },
            { value: '100%', label: 'Confidential Service' },
          ],
        }}
        imageUrl="https://imagedelivery.net/W93NbEGaswuledAsk5GMeA/ffa9cf17-855e-4b72-e6c3-35e22a92ab00/public"
      />

      {/* First CTA - Tax Investigation Cover Quote */}
      <section className="py-20 md:py-32 px-4 md:px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent"></div>

        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight">
                Protect yourself with<br />Tax Investigation Cover
              </h2>
              <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
                Insurance protection covering professional fees during HMRC enquiries. Get immediate expert support without cost concerns.
              </p>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
              <a
                href="/contact"
                className="relative inline-flex items-center justify-center px-32 py-2 bg-white text-gray-900 rounded-full text-base md:text-lg font-semibold hover:shadow-2xl hover:shadow-white/30 transition-all duration-300 overflow-hidden group"
              >
                <span className="relative z-10">Get a Quote</span>
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
        <ServiceBenefits title="Why Choose Our HMRC & NCA Investigation Support?" items={benefits} />
      </div>

      <div id="testimonials">
        <ServiceTestimonials
          title="Client Testimonials"
          subtitle="Hear from clients we've supported through HMRC and NCA investigations"
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
                Facing an HMRC or NCA<br />investigation?
              </h2>
              <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
                Early professional advice is essential. Contact us today for confidential, expert support.
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
                <a href="tel:01214440607" className="flex items-center gap-2 hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>0121 444 0607</span>
                </a>
                <a href="mailto:info@rus-cpa.co.uk" className="flex items-center gap-2 hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>info@rus-cpa.co.uk</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div id="faqs">
        <ServiceFAQ
          title="HMRC & NCA Investigations FAQs"
          subtitle="Common questions about our investigation support services"
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
