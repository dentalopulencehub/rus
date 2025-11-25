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
              <h2 className="text-4xl font-bold text-gray-900 leading-tight">
                {leftContent.title}
              </h2>
              {/* Accent Line */}
              <div className="w-16 h-[3px] bg-[#01458f]"></div>
            </div>

            {/* Description */}
            <p className="text-lg text-gray-600 leading-relaxed">
              {leftContent.description}
            </p>

            {/* Benefits - Inside Container - Minimal Clean */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <div className="space-y-0">
                <div className="group cursor-pointer py-3 border-b border-gray-100">
                  <h3 className="text-sm font-medium text-gray-900">Proactive Tax Planning</h3>
                  <p className="text-xs text-gray-500 mt-0.5">We identify opportunities before they pass</p>
                </div>

                <div className="group cursor-pointer py-3 border-b border-gray-100">
                  <h3 className="text-sm font-medium text-gray-900">HMRC Compliance</h3>
                  <p className="text-xs text-gray-500 mt-0.5">Stay fully compliant with all deadlines</p>
                </div>

                <div className="group cursor-pointer py-3">
                  <h3 className="text-sm font-medium text-gray-900">Clear Communication</h3>
                  <p className="text-xs text-gray-500 mt-0.5">No jargon, just straightforward advice</p>
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
