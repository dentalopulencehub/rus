import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Cookies Policy | RUS Chartered Accountants',
  description: 'Learn about how RUS Chartered Accountants uses cookies on our website in compliance with UK PECR and GDPR regulations.',
  robots: {
    index: true,
    follow: false,
  },
  alternates: {
    canonical: 'https://rus.co.uk/cookies',
  },
};

export default function CookiesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-[#01458f] to-[#0052cc] text-white pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Cookies Policy</h1>
          <p className="text-lg text-white/90">Last updated: December 2025</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="prose prose-lg max-w-none">

          {/* Introduction */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-8">
            <p className="text-gray-700 leading-relaxed mb-4">
              This Cookies Policy explains how RUS & Company (UK) Ltd ("we", "us", or "our") uses cookies and similar technologies on our website <a href="https://rus.co.uk" className="text-[#01458f] hover:underline">https://rus.co.uk</a>.
            </p>
            <p className="text-gray-700 leading-relaxed">
              This policy complies with the Privacy and Electronic Communications Regulations 2003 (PECR) and the UK General Data Protection Regulation (UK GDPR).
            </p>
          </div>

          {/* Section 1 */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <span className="flex items-center justify-center w-10 h-10 rounded-full bg-[#01458f]/10 text-[#01458f] text-lg font-bold">1</span>
              What Are Cookies?
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed pl-6 border-l-2 border-[#01458f]/20">
              <p>Cookies are small text files that are placed on your device (computer, smartphone, or tablet) when you visit a website. Cookies are widely used to make websites work more efficiently and provide information to website owners.</p>
              <p>Cookies can be "persistent" (remain on your device until deleted or they expire) or "session" (deleted when you close your browser).</p>
            </div>
          </div>

          {/* Section 2 */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <span className="flex items-center justify-center w-10 h-10 rounded-full bg-[#01458f]/10 text-[#01458f] text-lg font-bold">2</span>
              How We Use Cookies
            </h2>
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <div className="pl-6 border-l-2 border-[#01458f]/20">
                <p className="mb-4">We use the following types of cookies on our website:</p>

                <div className="space-y-6">
                  {/* Strictly Necessary */}
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                      <span className="flex items-center justify-center w-6 h-6 rounded-full bg-green-100 text-green-600 text-xs font-bold">✓</span>
                      Strictly Necessary Cookies
                    </h3>
                    <p className="mb-3"><strong>Purpose:</strong> Essential for the website to function. These enable core functionality such as security, network management, and accessibility.</p>
                    <p className="mb-3"><strong>Examples:</strong> Session management, security features, accessibility preferences</p>
                    <p className="mb-3"><strong>Legal Basis:</strong> These cookies are necessary to provide services you have requested and do not require consent under PECR</p>
                    <p><strong>Duration:</strong> Session or up to 1 year</p>
                  </div>

                  {/* Performance/Analytics */}
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                      <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-100 text-blue-600 text-xs font-bold">i</span>
                      Performance and Analytics Cookies
                    </h3>
                    <p className="mb-3"><strong>Purpose:</strong> Help us understand how visitors interact with our website by collecting anonymous information about pages visited, time spent, and navigation paths.</p>
                    <p className="mb-3"><strong>Examples:</strong> Google Analytics cookies (anonymized IP addresses)</p>
                    <p className="mb-3"><strong>Legal Basis:</strong> These cookies require your consent before being placed on your device</p>
                    <p><strong>Duration:</strong> Up to 2 years</p>
                  </div>

                  {/* Functionality */}
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                      <span className="flex items-center justify-center w-6 h-6 rounded-full bg-purple-100 text-purple-600 text-xs font-bold">⚙</span>
                      Functionality Cookies
                    </h3>
                    <p className="mb-3"><strong>Purpose:</strong> Remember your preferences and choices (such as language preferences, cookie consent settings) to provide enhanced functionality.</p>
                    <p className="mb-3"><strong>Examples:</strong> Cookie consent preferences, accessibility settings</p>
                    <p className="mb-3"><strong>Legal Basis:</strong> These cookies improve user experience and require your consent</p>
                    <p><strong>Duration:</strong> Up to 1 year</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 3 */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <span className="flex items-center justify-center w-10 h-10 rounded-full bg-[#01458f]/10 text-[#01458f] text-lg font-bold">3</span>
              Third-Party Cookies
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed pl-6 border-l-2 border-[#01458f]/20">
              <p>Some cookies are placed by third-party services that appear on our pages. We do not control these cookies and you should check the relevant third-party website for more information:</p>
              <ul className="space-y-2 ml-6 mt-4">
                <li className="flex gap-2"><span className="text-[#01458f]">•</span><strong>Google Analytics:</strong> For website analytics (anonymized). <a href="https://policies.google.com/privacy" className="text-[#01458f] hover:underline" target="_blank" rel="noopener noreferrer">Privacy Policy</a></li>
              </ul>
            </div>
          </div>

          {/* Section 4 */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <span className="flex items-center justify-center w-10 h-10 rounded-full bg-[#01458f]/10 text-[#01458f] text-lg font-bold">4</span>
              Managing Your Cookie Preferences
            </h2>
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <div className="pl-6 border-l-2 border-[#01458f]/20">
                <p className="mb-4"><strong>Cookie Consent:</strong> When you first visit our website, you will see a cookie consent banner. You can accept all cookies, reject non-essential cookies, or customise your preferences.</p>

                <div className="bg-blue-50 rounded-lg p-6 my-6">
                  <p className="font-medium text-gray-900 mb-3">You can change your cookie preferences at any time by:</p>
                  <ul className="space-y-2 ml-6">
                    <li className="flex gap-2"><span className="text-[#01458f]">•</span> Clicking the "Cookie Settings" link in the footer of our website</li>
                    <li className="flex gap-2"><span className="text-[#01458f]">•</span> Managing cookies through your browser settings (see below)</li>
                  </ul>
                </div>

                <p className="mb-4"><strong>Browser Settings:</strong> Most web browsers allow you to control cookies through their settings. However, if you block all cookies (including strictly necessary ones), you may not be able to access all or parts of our website.</p>

                <div className="mt-6">
                  <p className="font-medium text-gray-900 mb-3">Here's how to manage cookies in popular browsers:</p>
                  <ul className="space-y-2 ml-6">
                    <li className="flex gap-2"><span className="text-[#01458f]">•</span><a href="https://support.google.com/chrome/answer/95647" className="text-[#01458f] hover:underline" target="_blank" rel="noopener noreferrer">Google Chrome</a></li>
                    <li className="flex gap-2"><span className="text-[#01458f]">•</span><a href="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop" className="text-[#01458f] hover:underline" target="_blank" rel="noopener noreferrer">Mozilla Firefox</a></li>
                    <li className="flex gap-2"><span className="text-[#01458f]">•</span><a href="https://support.apple.com/en-gb/guide/safari/sfri11471/mac" className="text-[#01458f] hover:underline" target="_blank" rel="noopener noreferrer">Apple Safari</a></li>
                    <li className="flex gap-2"><span className="text-[#01458f]">•</span><a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" className="text-[#01458f] hover:underline" target="_blank" rel="noopener noreferrer">Microsoft Edge</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Section 5 */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <span className="flex items-center justify-center w-10 h-10 rounded-full bg-[#01458f]/10 text-[#01458f] text-lg font-bold">5</span>
              Changes to This Policy
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed pl-6 border-l-2 border-[#01458f]/20">
              <p>We may update this Cookies Policy from time to time to reflect changes in technology, legislation, our operations, or for other operational, legal, or regulatory reasons. We will notify you of any significant changes by updating the "Last updated" date at the top of this policy.</p>
            </div>
          </div>

          {/* Section 6 */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <span className="flex items-center justify-center w-10 h-10 rounded-full bg-[#01458f]/10 text-[#01458f] text-lg font-bold">6</span>
              Contact Us
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed pl-6 border-l-2 border-[#01458f]/20">
              <p>If you have questions about our use of cookies or this policy, please contact us:</p>
              <p className="mt-4">
                <strong>RUS & Company (UK) Ltd</strong><br />
                1190A-1192 Stratford Road<br />
                Hall Green, Birmingham<br />
                B28 8AB<br />
                <br />
                Email: <a href="mailto:info@rus.co.uk" className="text-[#01458f] hover:underline font-medium">info@rus.co.uk</a><br />
                Phone: <a href="tel:01217771200" className="text-[#01458f] hover:underline font-medium">0121 777 1200</a>
              </p>
              <p className="mt-4">
                For more information about cookies and how to manage them, visit <a href="https://www.aboutcookies.org" className="text-[#01458f] hover:underline" target="_blank" rel="noopener noreferrer">www.aboutcookies.org</a> or <a href="https://www.allaboutcookies.org" className="text-[#01458f] hover:underline" target="_blank" rel="noopener noreferrer">www.allaboutcookies.org</a>.
              </p>
            </div>
          </div>

          {/* Footer CTA */}
          <div className="bg-gradient-to-br from-[#E8F4FF] to-[#D4E9FF] rounded-2xl p-8 text-center">
            <p className="text-gray-900 mb-4">
              <strong>Questions about cookies?</strong>
            </p>
            <p className="text-gray-700 mb-6">
              Our team is here to help with any enquiries about our cookie usage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3 bg-[#01458f] text-white font-semibold rounded-full hover:bg-[#0052cc] transition-all duration-200 shadow-md hover:shadow-lg"
              >
                Contact Us
              </Link>
              <Link
                href="/privacy"
                className="inline-flex items-center justify-center px-8 py-3 bg-white text-[#01458f] font-semibold rounded-full border-2 border-[#01458f] hover:bg-[#01458f] hover:text-white transition-all duration-200 shadow-md hover:shadow-lg"
              >
                View Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
