import Image from 'next/image';

interface TaxationBenefitsProps {
  title: string;
  description: string;
}

export function TaxationBenefits({ title, description }: TaxationBenefitsProps) {
  const benefits = [
    {
      title: "Maintain Accurate, Real-Time Financial Records on Their Behalf",
      description: "By managing and reconciling their accounts throughout the year, you ensure every figure is correct, every receipt is captured, and their tax position is always clear and compliant.",
    },
    {
      title: "Proactively Monitor Key Filing and Payment Deadlines",
      description: "You keep track of all HMRC dates—self-assessment, corporation tax, VAT and PAYE—making sure nothing is missed and clients avoid unnecessary penalties or last-minute stress.",
    },
    {
      title: "Identify and Maximise All Relevant Allowances and Reliefs",
      description: "You review their financial activity and ensure they claim every allowable deduction, relief and incentive available, helping them legally reduce their tax liability and improve overall efficiency.",
    },
    {
      title: "Provide Strategic Tax Planning Before Major Decisions",
      description: "By advising clients ahead of key actions—such as buying or selling assets, restructuring a business, or taking dividends—you help them make informed and tax-efficient decisions.",
    },
    {
      title: "Implement Digital Accounting Systems to Enhance Compliance",
      description: "You set up and manage cloud accounting tools and Making Tax Digital–ready platforms, giving clients transparent, up-to-date financial information and reducing the risk of errors.",
    },
  ];

  return (
    <section className="py-32 px-4 bg-[#01458f]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl text-white mb-3 tracking-tight">
            {title}
          </h2>
          <p className="text-base md:text-lg text-white/80 max-w-2xl mx-auto">
            {description}
          </p>
        </div>

        {/* Bento Grid - 6-column system for perfect alignment */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-3">
          {/* Top Row - 2 Cards (each spans 3 columns = 50% width) */}
          {benefits.slice(0, 2).map((benefit, index) => (
            <div
              key={index}
              className="md:col-span-3 bg-[#F6F6F6] rounded-lg border border-gray-200/50 p-16 min-h-[420px] flex flex-col hover:shadow-xl transition-all duration-300 relative overflow-hidden"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-4 leading-tight relative z-10">
                {benefit.title}
              </h3>
              <p className="text-base text-gray-600 leading-relaxed relative z-10">
                {benefit.description}
              </p>

              {/* Add Cloudflare Image to first card only - positioned absolutely */}
              {index === 0 && (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-3/4">
                  <Image
                    src="https://imagedelivery.net/W93NbEGaswuledAsk5GMeA/48bb38ad-6bb4-4e51-d30d-859e9b038100/public"
                    alt="Financial Records Management"
                    width={500}
                    height={500}
                    unoptimized
                    className="w-full h-auto rounded-lg"
                  />
                </div>
              )}

              {/* Add Cloudflare Image to second card - positioned absolutely */}
              {index === 1 && (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20">
                  <img
                    src="/deadlines-image.svg"
                    alt="Monitor Filing and Payment Deadlines"
                    width="601"
                    height="195"
                    className="rounded-lg"
                    style={{
                      maxWidth: '100%',
                      height: 'auto'
                    }}
                  />
                </div>
              )}
            </div>
          ))}

          {/* Bottom Row - 3 Cards (each spans 2 columns = 33% width) */}
          {benefits.slice(2).map((benefit, index) => (
            <div
              key={index + 2}
              className="md:col-span-2 bg-[#F6F6F6] rounded-lg border border-gray-200/50 p-16 min-h-[420px] flex flex-col hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-4 leading-tight">
                {benefit.title}
              </h3>
              <p className="text-base text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
