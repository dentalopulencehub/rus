"use client";

import Link from 'next/link';
import Image from 'next/image';

const partners = [
  {
    name: 'Sage',
    logo: '/Sage (2).svg',
    size: 'small',
  },
  {
    name: 'Xero',
    logo: '/Xero (1).svg',
    size: 'small',
  },
  {
    name: 'QuickBooks',
    logo: '/Quickbooks (2).svg',
    size: 'normal',
  },
  {
    name: 'FreeAgent',
    logo: '/Freeagent (3).svg',
    size: 'normal',
  },
];

export function IntegrationSection() {

  return (
    <section className="min-h-screen w-full flex items-center justify-center bg-[#01458f] px-4 py-24">
      <div className="max-w-6xl mx-auto w-full">
        {/* White minimal card with border */}
        <div className="bg-white rounded-xl border border-gray-200/50 shadow-lg p-6 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Mobile: Reordered Content Stack */}
            <div className="flex flex-col lg:hidden">
              {/* Badge - Centered on Mobile */}
              <div className="mb-4 flex justify-center">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white border border-[#01458f] rounded-full">
                  <span className="text-xs font-medium text-black">Making Tax Digital</span>
                </div>
              </div>

              {/* Headline - Centered on Mobile */}
              <h2 className="text-2xl font-light italic text-gray-900 mb-6 leading-tight tracking-tight text-center">
                Connect your accounting software seamlessly
              </h2>

              {/* Logos - Mobile Priority */}
              <div className="grid grid-cols-2 gap-x-2 gap-y-1 mb-6">
                {partners.map((partner, index) => (
                  <div
                    key={partner.name}
                    className={`flex items-center justify-center w-full h-24 ${
                      index < 2 ? 'mt-3' : '-mt-3'
                    }`}
                  >
                    <Image
                      src={partner.logo}
                      alt={`${partner.name} logo`}
                      width={partner.size === 'small' ? 140 : 180}
                      height={partner.size === 'small' ? 70 : 90}
                      className={`object-contain ${partner.size === 'small' ? 'w-3/4 h-3/4' : 'w-full h-full'}`}
                    />
                  </div>
                ))}
              </div>

              {/* Short Description */}
              <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                Seamless integration with leading accounting platforms for MTD compliance and expert financial advice.
              </p>

              {/* CTA Buttons - Full Width */}
              <div className="flex flex-col gap-3">
                <Link
                  href="/contact"
                  className="w-full inline-flex items-center justify-center px-8 py-3 bg-gray-900 text-white rounded-full text-sm font-medium hover:bg-gray-800 transition-all duration-200 shadow-sm"
                >
                  Find out more
                </Link>
                <Link
                  href="/contact"
                  className="w-full inline-flex items-center justify-center px-8 py-3 bg-white text-black rounded-full text-sm font-medium border border-[#01458f] hover:bg-gray-50 transition-all duration-200"
                >
                  Contact Us
                </Link>
              </div>
            </div>

            {/* Desktop: Original Layout */}
            <div className="hidden lg:block text-left">
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
                  Contact Us
                </Link>
              </div>
            </div>

            {/* Right Side - Partner Logos (Desktop Only) */}
            <div className="hidden lg:grid grid-cols-2 gap-x-2 gap-y-1 items-center justify-items-center">
              {partners.map((partner, index) => (
                <div
                  key={partner.name}
                  className={`flex items-center justify-center w-48 h-32 ${
                    index < 2 ? 'mt-4' : '-mt-4'
                  }`}
                >
                  <Image
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    width={partner.size === 'small' ? 150 : 192}
                    height={partner.size === 'small' ? 100 : 128}
                    className={`object-contain ${partner.size === 'small' ? 'w-3/4 h-3/4' : 'w-full h-full'}`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
