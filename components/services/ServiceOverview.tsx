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
  imageUrl?: string;
  benefits?: Array<{
    title: string;
    description: string;
  }>;
}

export function ServiceOverview({ leftContent, rightContent, imageUrl, benefits }: ServiceOverviewProps) {
  // Default benefits (current text - no changes)
  const defaultBenefits = [
    {
      title: 'Maintaining Compliance',
      description: 'Stay fully compliant with all HMRC requirements'
    },
    {
      title: 'Reducing Liabilities',
      description: 'Strategic planning to minimise your tax burden'
    },
    {
      title: 'Protecting Long-Term Financial Wellbeing',
      description: 'Securing your financial future with expert guidance'
    }
  ];

  const displayBenefits = benefits || defaultBenefits;

  return (
    <section className="py-24 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-end">
          {/* Left - Content */}
          <div className="space-y-8">
            {/* Main Title - No Icon */}
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-gray-900 leading-tight">
                {leftContent.title.split('\n').map((line, index, array) => (
                  <span key={index}>
                    {line}
                    {index < array.length - 1 && <br />}
                  </span>
                ))}
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
                {displayBenefits.map((benefit, index) => (
                  <div
                    key={index}
                    className={`group cursor-pointer py-3 ${
                      index < displayBenefits.length - 1 ? 'border-b border-gray-100' : ''
                    }`}
                  >
                    <h3 className="text-sm font-medium text-gray-900">{benefit.title}</h3>
                    <p className="text-xs text-gray-500 mt-0.5">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right - Image Container */}
          <div className="relative h-[540px] flex items-center justify-center">
            <div className="w-full h-full rounded-2xl bg-white border border-gray-200 overflow-hidden">
              {imageUrl ? (
                /* eslint-disable-next-line @next/next/no-img-element */
                <img
                  src={imageUrl}
                  alt="Professional illustration"
                  className="w-full h-full object-cover scale-110"
                />
              ) : (
                <div className="w-full h-full bg-gray-100 flex flex-col items-center justify-center">
                  <svg
                    className="w-16 h-16 text-gray-300 mb-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <span className="text-gray-400 text-sm font-medium">Image placeholder</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
