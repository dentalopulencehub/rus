import Link from 'next/link';
import { OrbitingCircles } from '@/components/ui/orbiting-circles';
import { FinancePartnerIcons } from '@/components/icons/finance-partners';

export function CTASection() {
  return (
    <section className="min-h-screen w-full flex items-center justify-center bg-[#01458f] px-4 py-24">
      <div className="max-w-6xl mx-auto w-full">
        {/* White minimal CTA card with border matching header */}
        <div className="bg-white rounded-xl border border-gray-200/50 shadow-lg p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - CTA Content */}
            <div className="text-left">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gray-100 rounded-full mb-6">
                <span className="text-xs font-medium text-gray-600">Trusted by businesses</span>
              </div>

              {/* Headline */}
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight tracking-tight">
                Finance made simple, growth made possible
              </h2>

              {/* Description */}
              <p className="text-base text-gray-600 mb-8 leading-relaxed">
                Connect your favorite accounting software and get expert advice tailored to your business needs.
              </p>

              {/* CTA Button - Vercel Style */}
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-2.5 bg-gray-900 text-white rounded-lg text-sm font-medium hover:bg-gray-800 transition-all duration-200 shadow-sm"
              >
                Get started
              </Link>
            </div>

            {/* Right Side - Orbiting Circles */}
            <div className="relative flex items-center justify-center min-h-[400px]">
              <div className="relative w-full h-full flex items-center justify-center">
                {/* Center Circle */}
                <div className="absolute w-16 h-16 rounded-full bg-gradient-to-br from-[#01458f] to-[#0052cc] shadow-lg flex items-center justify-center z-10">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>

                {/* Inner Circle - Fast rotation */}
                <OrbitingCircles iconSize={50} radius={90} duration={20} path>
                  <FinancePartnerIcons.xero />
                  <FinancePartnerIcons.quickbooks />
                  <FinancePartnerIcons.sage />
                </OrbitingCircles>

                {/* Outer Circle - Slow rotation, reverse direction */}
                <OrbitingCircles iconSize={50} radius={150} duration={30} reverse path>
                  <FinancePartnerIcons.freeagent />
                  <FinancePartnerIcons.croner />
                </OrbitingCircles>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
