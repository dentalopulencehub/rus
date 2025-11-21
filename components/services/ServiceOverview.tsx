interface ServiceOverviewProps {
  leftContent: {
    title: string;
    description: string;
  };
  rightContent: {
    stats: Array<{
      value: string;
      label: string;
    }>;
  };
}

export function ServiceOverview({ leftContent, rightContent }: ServiceOverviewProps) {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          {/* Left - Content */}
          <div className="space-y-8 pl-2">
            {/* Main Title - No Icon */}
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl text-gray-900 tracking-tight">
                {leftContent.title}
              </h2>
              {/* Accent Line */}
              <div className="w-16 h-[3px] bg-[#01458f]"></div>
            </div>

            {/* Description */}
            <p className="text-lg text-gray-600 leading-relaxed">
              {leftContent.description}
            </p>

            {/* Divider Line */}
            <div className="w-full h-[1px] bg-gray-200"></div>

            {/* Sub-services / Benefits */}
            <div className="space-y-6 pt-4">
              <div className="flex items-start gap-4 group cursor-pointer pb-6 border-b border-gray-200">
                <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center flex-shrink-0 group-hover:bg-[#01458f] transition-colors duration-300">
                  <svg className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-base font-semibold text-gray-900 mb-1 group-hover:text-[#01458f] transition-colors duration-300">Business Tax Compliance</h3>
                  <p className="text-sm text-gray-600">Corporation tax, VAT, and strategic planning for businesses</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group cursor-pointer pb-6 border-b border-gray-200">
                <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center flex-shrink-0 group-hover:bg-[#01458f] transition-colors duration-300">
                  <svg className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-base font-semibold text-gray-900 mb-1 group-hover:text-[#01458f] transition-colors duration-300">Personal Tax Planning</h3>
                  <p className="text-sm text-gray-600">Self-assessment and tax-efficient strategies for individuals</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group cursor-pointer">
                <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center flex-shrink-0 group-hover:bg-[#01458f] transition-colors duration-300">
                  <svg className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-base font-semibold text-gray-900 mb-1 group-hover:text-[#01458f] transition-colors duration-300">Inheritance Tax Strategy</h3>
                  <p className="text-sm text-gray-600">Estate planning and wealth transfer optimisation</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Animated SVG Placeholder */}
          <div className="relative h-[500px] flex items-center justify-center pr-8">
            <div className="w-full h-full rounded-2xl bg-white border border-gray-200 flex items-center justify-center">
              {/* Placeholder for animated SVG */}
              <div className="text-center space-y-4">
                <div className="w-24 h-24 mx-auto rounded-full bg-gray-100 flex items-center justify-center">
                  <svg className="w-12 h-12 text-gray-400 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <p className="text-sm text-gray-500">Animated SVG Placeholder</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
