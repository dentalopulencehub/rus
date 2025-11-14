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
  {
    name: 'Croner',
    icon: <FinancePartnerIcons.croner />,
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
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gray-100 rounded-full mb-6">
                <span className="text-xs font-medium text-gray-600">Seamless Integration</span>
              </div>

              {/* Headline */}
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light italic text-gray-900 mb-4 leading-tight tracking-tight">
                Connect your favorite accounting software
              </h2>

              {/* Description */}
              <p className="text-base text-gray-600 mb-8 leading-relaxed">
                We integrate seamlessly with leading accounting platforms to streamline your financial operations and provide expert advice tailored to your business needs.
              </p>

              {/* CTA Button - Vercel Style */}
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-2 bg-gray-900 text-white rounded-full text-sm font-medium hover:bg-gray-800 transition-all duration-200 shadow-sm"
              >
                Get Started
              </Link>
            </div>

            {/* Right Side - Partner Cards Row */}
            <div className="flex justify-center gap-2">
              {partners.map((partner) => (
                <div
                  key={partner.name}
                  className="group relative overflow-hidden flex flex-col items-center justify-center text-center p-2 rounded-lg border border-gray-200 bg-white hover:border-[#01458f] transition-all duration-200 hover:shadow-sm w-24 h-24"
                >
                  {/* Glassy Background SVG */}
                  <svg
                    className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      <linearGradient id={`gradient-${partner.name}`} x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#01458f" stopOpacity="0.04" />
                        <stop offset="50%" stopColor="#01458f" stopOpacity="0.02" />
                        <stop offset="100%" stopColor="#01458f" stopOpacity="0.06" />
                      </linearGradient>
                      <radialGradient id={`radial-${partner.name}`}>
                        <stop offset="0%" stopColor="#01458f" stopOpacity="0.08" />
                        <stop offset="70%" stopColor="#01458f" stopOpacity="0.02" />
                        <stop offset="100%" stopColor="#01458f" stopOpacity="0" />
                      </radialGradient>
                    </defs>
                    <circle cx="50%" cy="50%" r="40%" fill={`url(#radial-${partner.name})`} />
                    <rect width="100%" height="100%" fill={`url(#gradient-${partner.name})`} />
                  </svg>

                  {/* Content */}
                  <div className="relative z-10 w-full h-full flex items-center justify-center">
                    {partner.icon}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
