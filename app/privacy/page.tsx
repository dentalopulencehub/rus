import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy | RUS Chartered Accountants',
  description: 'Privacy policy for RUS Chartered Accountants. Learn how we collect, use, and protect your personal data in accordance with UK GDPR.',
  robots: {
    index: true,
    follow: false,
  },
  alternates: {
    canonical: 'https://rus.co.uk/privacy',
  },
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-[#01458f] to-[#0052cc] text-white pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Privacy Policy</h1>
          <p className="text-lg text-white/90">Last updated: December 2025</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="prose prose-lg max-w-none">

          {/* Introduction */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-8">
            <p className="text-gray-700 leading-relaxed mb-4">
              RUS & Company (UK) Ltd ("we", "us", or "our") is committed to protecting and respecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your personal information when you visit our website <a href="https://rus.co.uk" className="text-[#01458f] hover:underline">https://rus.co.uk</a> or engage our professional services.
            </p>
            <p className="text-gray-700 leading-relaxed">
              This policy complies with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018. Please read this policy carefully to understand our practices regarding your personal data.
            </p>
          </div>

          {/* Section 1 */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <span className="flex items-center justify-center w-10 h-10 rounded-full bg-[#01458f]/10 text-[#01458f] text-lg font-bold">1</span>
              Who We Are
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed pl-6 border-l-2 border-[#01458f]/20">
              <p><strong>Data Controller:</strong> RUS & Company (UK) Ltd</p>
              <p><strong>Company Number:</strong> 03833778</p>
              <p><strong>Registered Address:</strong> 1190A-1192 Stratford Road, Hall Green, Birmingham, B28 8AB</p>
              <p><strong>Email:</strong> <a href="mailto:info@rus.co.uk" className="text-[#01458f] hover:underline">info@rus.co.uk</a></p>
              <p><strong>Phone:</strong> <a href="tel:01217771200" className="text-[#01458f] hover:underline">0121 777 1200</a></p>
              <p><strong>ICO Registration Number:</strong> Z9265066</p>
            </div>
          </div>

          {/* Section 2 */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <span className="flex items-center justify-center w-10 h-10 rounded-full bg-[#01458f]/10 text-[#01458f] text-lg font-bold">2</span>
              Information We Collect
            </h2>
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <div className="pl-6 border-l-2 border-[#01458f]/20">
                <p className="font-semibold mb-3">We collect and process the following categories of personal data:</p>

                <div className="space-y-4">
                  <div>
                    <p className="font-medium text-gray-900 mb-2">Identity Data:</p>
                    <p>Name, title, date of birth, National Insurance number</p>
                  </div>

                  <div>
                    <p className="font-medium text-gray-900 mb-2">Contact Data:</p>
                    <p>Postal address, email address, telephone numbers</p>
                  </div>

                  <div>
                    <p className="font-medium text-gray-900 mb-2">Financial Data:</p>
                    <p>Bank account details, income information, tax records, business accounts</p>
                  </div>

                  <div>
                    <p className="font-medium text-gray-900 mb-2">Technical Data:</p>
                    <p>IP address, browser type, device information, usage data</p>
                  </div>

                  <div>
                    <p className="font-medium text-gray-900 mb-2">Communication Data:</p>
                    <p>Information from correspondence, enquiries, and meetings</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 3 */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <span className="flex items-center justify-center w-10 h-10 rounded-full bg-[#01458f]/10 text-[#01458f] text-lg font-bold">3</span>
              How We Use Your Information
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed pl-6 border-l-2 border-[#01458f]/20">
              <p>We process your personal data for the following purposes:</p>
              <ul className="space-y-2 ml-6">
                <li className="flex gap-2"><span className="text-[#01458f]">•</span> To provide accounting, tax, audit, and advisory services</li>
                <li className="flex gap-2"><span className="text-[#01458f]">•</span> To comply with legal and regulatory obligations</li>
                <li className="flex gap-2"><span className="text-[#01458f]">•</span> To respond to enquiries and communicate with clients</li>
                <li className="flex gap-2"><span className="text-[#01458f]">•</span> To maintain accurate client records</li>
                <li className="flex gap-2"><span className="text-[#01458f]">•</span> To improve our website and services</li>
                <li className="flex gap-2"><span className="text-[#01458f]">•</span> To send service-related communications</li>
              </ul>
            </div>
          </div>

          {/* Section 4 */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <span className="flex items-center justify-center w-10 h-10 rounded-full bg-[#01458f]/10 text-[#01458f] text-lg font-bold">4</span>
              Legal Basis for Processing
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed pl-6 border-l-2 border-[#01458f]/20">
              <p>We process your personal data under the following legal bases:</p>
              <ul className="space-y-3 ml-6">
                <li className="flex gap-2"><span className="text-[#01458f] font-bold">•</span><span><strong>Contract:</strong> Processing is necessary to perform our professional services</span></li>
                <li className="flex gap-2"><span className="text-[#01458f] font-bold">•</span><span><strong>Legal Obligation:</strong> To comply with statutory requirements including HMRC, Companies House, and ICAEW</span></li>
                <li className="flex gap-2"><span className="text-[#01458f] font-bold">•</span><span><strong>Legitimate Interests:</strong> To maintain client relationships, improve services, and prevent fraud</span></li>
                <li className="flex gap-2"><span className="text-[#01458f] font-bold">•</span><span><strong>Consent:</strong> For marketing communications (where applicable)</span></li>
              </ul>
            </div>
          </div>

          {/* Section 5 */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <span className="flex items-center justify-center w-10 h-10 rounded-full bg-[#01458f]/10 text-[#01458f] text-lg font-bold">5</span>
              Data Sharing and Disclosure
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed pl-6 border-l-2 border-[#01458f]/20">
              <p>We may share your personal data with:</p>
              <ul className="space-y-2 ml-6">
                <li className="flex gap-2"><span className="text-[#01458f]">•</span> HM Revenue & Customs (HMRC)</li>
                <li className="flex gap-2"><span className="text-[#01458f]">•</span> Companies House</li>
                <li className="flex gap-2"><span className="text-[#01458f]">•</span> Professional indemnity insurers</li>
                <li className="flex gap-2"><span className="text-[#01458f]">•</span> IT and cloud service providers</li>
                <li className="flex gap-2"><span className="text-[#01458f]">•</span> Legal and professional advisers (where necessary)</li>
                <li className="flex gap-2"><span className="text-[#01458f]">•</span> Other third parties with your consent or as required by law</li>
              </ul>
              <p className="mt-4">We do not sell your personal data to third parties.</p>
            </div>
          </div>

          {/* Section 6 */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <span className="flex items-center justify-center w-10 h-10 rounded-full bg-[#01458f]/10 text-[#01458f] text-lg font-bold">6</span>
              Data Retention
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed pl-6 border-l-2 border-[#01458f]/20">
              <p>We retain your personal data for as long as necessary to:</p>
              <ul className="space-y-2 ml-6">
                <li className="flex gap-2"><span className="text-[#01458f]">•</span> Fulfil the purposes for which it was collected</li>
                <li className="flex gap-2"><span className="text-[#01458f]">•</span> Comply with legal, regulatory, and professional obligations</li>
                <li className="flex gap-2"><span className="text-[#01458f]">•</span> Defend legal claims</li>
              </ul>
              <p className="mt-4">Under UK tax law and professional requirements, we typically retain client records for a minimum of 6 years from the end of the accounting period. Some records may be retained for longer periods where required by law or regulation.</p>
            </div>
          </div>

          {/* Section 7 */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <span className="flex items-center justify-center w-10 h-10 rounded-full bg-[#01458f]/10 text-[#01458f] text-lg font-bold">7</span>
              Your Rights
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed pl-6 border-l-2 border-[#01458f]/20">
              <p>Under UK GDPR, you have the following rights:</p>
              <ul className="space-y-3 ml-6">
                <li className="flex gap-2"><span className="text-[#01458f] font-bold">•</span><span><strong>Right of Access:</strong> Request a copy of your personal data</span></li>
                <li className="flex gap-2"><span className="text-[#01458f] font-bold">•</span><span><strong>Right to Rectification:</strong> Correct inaccurate or incomplete data</span></li>
                <li className="flex gap-2"><span className="text-[#01458f] font-bold">•</span><span><strong>Right to Erasure:</strong> Request deletion of your data (subject to legal requirements)</span></li>
                <li className="flex gap-2"><span className="text-[#01458f] font-bold">•</span><span><strong>Right to Restriction:</strong> Limit how we use your data</span></li>
                <li className="flex gap-2"><span className="text-[#01458f] font-bold">•</span><span><strong>Right to Data Portability:</strong> Receive your data in a structured format</span></li>
                <li className="flex gap-2"><span className="text-[#01458f] font-bold">•</span><span><strong>Right to Object:</strong> Object to processing based on legitimate interests</span></li>
                <li className="flex gap-2"><span className="text-[#01458f] font-bold">•</span><span><strong>Right to Withdraw Consent:</strong> Where processing is based on consent</span></li>
              </ul>
              <p className="mt-4">To exercise these rights, please contact us at <a href="mailto:info@rus.co.uk" className="text-[#01458f] hover:underline">info@rus.co.uk</a> or call <a href="tel:01217771200" className="text-[#01458f] hover:underline">0121 777 1200</a>.</p>
            </div>
          </div>

          {/* Section 8 */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <span className="flex items-center justify-center w-10 h-10 rounded-full bg-[#01458f]/10 text-[#01458f] text-lg font-bold">8</span>
              Data Security
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed pl-6 border-l-2 border-[#01458f]/20">
              <p>We implement appropriate technical and organisational measures to protect your personal data against unauthorised access, alteration, disclosure, or destruction. These include:</p>
              <ul className="space-y-2 ml-6">
                <li className="flex gap-2"><span className="text-[#01458f]">•</span> Secure IT systems and encrypted communications</li>
                <li className="flex gap-2"><span className="text-[#01458f]">•</span> Access controls and password protection</li>
                <li className="flex gap-2"><span className="text-[#01458f]">•</span> Regular security assessments and staff training</li>
                <li className="flex gap-2"><span className="text-[#01458f]">•</span> Secure physical storage of documents</li>
              </ul>
            </div>
          </div>

          {/* Section 9 */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <span className="flex items-center justify-center w-10 h-10 rounded-full bg-[#01458f]/10 text-[#01458f] text-lg font-bold">9</span>
              Cookies and Website Analytics
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed pl-6 border-l-2 border-[#01458f]/20">
              <p>Our website uses cookies to improve user experience and analyse website performance. For detailed information about the cookies we use and how to manage them, please see our <Link href="/cookies" className="text-[#01458f] hover:underline font-medium">Cookies Policy</Link>.</p>
            </div>
          </div>

          {/* Section 10 */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <span className="flex items-center justify-center w-10 h-10 rounded-full bg-[#01458f]/10 text-[#01458f] text-lg font-bold">10</span>
              Changes to This Policy
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed pl-6 border-l-2 border-[#01458f]/20">
              <p>We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any significant changes by posting the updated policy on our website with a revised "Last updated" date.</p>
            </div>
          </div>

          {/* Section 11 */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <span className="flex items-center justify-center w-10 h-10 rounded-full bg-[#01458f]/10 text-[#01458f] text-lg font-bold">11</span>
              Complaints
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed pl-6 border-l-2 border-[#01458f]/20">
              <p>If you have concerns about how we handle your personal data, please contact us first. You also have the right to lodge a complaint with the Information Commissioner's Office (ICO):</p>
              <p className="mt-4">
                <strong>Information Commissioner's Office</strong><br />
                Wycliffe House<br />
                Water Lane<br />
                Wilmslow<br />
                Cheshire SK9 5AF<br />
                <br />
                Tel: 0303 123 1113<br />
                Website: <a href="https://ico.org.uk" className="text-[#01458f] hover:underline" target="_blank" rel="noopener noreferrer">www.ico.org.uk</a>
              </p>
            </div>
          </div>

          {/* Footer CTA */}
          <div className="bg-gradient-to-br from-[#E8F4FF] to-[#D4E9FF] rounded-2xl p-8 text-center">
            <p className="text-gray-700 mb-4">
              <strong>Questions about your data?</strong>
            </p>
            <p className="text-gray-600 mb-6">
              Our team is here to help with any privacy-related enquiries.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 bg-white text-[#01458f] font-medium rounded-full hover:bg-gray-50 transition-colors duration-200 shadow-sm"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
