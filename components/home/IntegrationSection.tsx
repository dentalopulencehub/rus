"use client";

import Link from 'next/link';
import { FinancePartnerIcons } from '@/components/icons/finance-partners';

const partners = [
  {
    name: 'Sage',
    icon: <FinancePartnerIcons.sage />,
  },
  {
    name: 'Xero',
    icon: <FinancePartnerIcons.xero />,
  },
  {
    name: 'QuickBooks',
    icon: <FinancePartnerIcons.quickbooks />,
  },
  {
    name: 'FreeAgent',
    icon: <FinancePartnerIcons.freeagent />,
  },
];

export function IntegrationSection() {

  return (
    <section className="min-h-screen w-full flex items-center justify-center bg-[#01458f] px-4 py-24">
      <div className="max-w-6xl mx-auto w-full">
        {/* White minimal card with border */}
        <div className="bg-white rounded-xl border border-gray-200/50 shadow-lg p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Content */}
            <div className="text-left">
              {/* Badge */}
              <div className="mb-6">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white border border-[#01458f] rounded-full">
                  <span className="text-xs font-medium text-black">Making Tax Digital</span>
                </div>
              </div>

              {/* Headline */}
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light italic text-gray-900 mb-4 leading-tight tracking-tight">
                Connect your accounting software seamlessly
              </h2>

              {/* Description */}
              <p className="text-base text-gray-600 mb-8 leading-relaxed">
                We integrate seamlessly with leading online accounting platforms to streamline your financial operations, ensure you are Making Tax Digital compliant, and provide expert advice tailored to your business needs.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-start gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-2 bg-gray-900 text-white rounded-full text-sm font-medium hover:bg-gray-800 transition-all duration-200 shadow-sm"
                >
                  Find out more
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-2 bg-white text-black rounded-full text-sm font-medium border border-[#01458f] hover:bg-gray-50 transition-all duration-200"
                >
                  Enquiry Now
                </Link>
              </div>
            </div>

            {/* Right Side - Partner Logos in 2x2 Grid */}
            <div className="grid grid-cols-2 gap-6 items-center justify-items-center">
              {partners.map((partner) => (
                <div
                  key={partner.name}
                  className="flex items-center justify-center w-32 h-20"
                >
                  {partner.icon}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
