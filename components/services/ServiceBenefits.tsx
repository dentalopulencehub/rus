interface BenefitItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface ServiceBenefitsProps {
  title: string;
  items: BenefitItem[];
}

export function ServiceBenefits({ title, items }: ServiceBenefitsProps) {
  return (
    <section className="py-24 px-4 bg-gray-100">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-3 tracking-tight">
            {title}
          </h2>
        </div>

        {/* 4 Cards Inline */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {items.map((item, index) => (
            <div
              key={index}
              className={`relative flex flex-col items-center justify-center text-center p-4 md:p-8 rounded-xl border border-gray-200/50 transition-all duration-200 hover:shadow-lg hover:border-[#01458f]/30 min-h-[280px] md:min-h-[320px] ${
                index === 3 ? 'bg-[#0047AB]' : 'bg-[#BBDEFB]'
              }`}
            >
              {/* Icon - Large and Centered */}
              <div className="mb-4 md:mb-8 text-[#01458f]">
                {index === 3 ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src="/wallet-with-coins--clean-minimal-fintech-design--r 1.svg"
                    alt="Transparent Fees"
                    className="w-16 h-16 md:w-20 md:h-20"
                  />
                ) : (
                  item.icon
                )}
              </div>

              {/* Title */}
              <h3 className={`text-xs md:text-sm font-bold mb-2 tracking-wide uppercase whitespace-pre-line ${
                index === 3 ? 'text-white' : 'text-gray-900'
              }`}>
                {item.title}
              </h3>

              {/* Description */}
              <p className={`text-xs leading-relaxed ${
                index === 3 ? 'text-white/90' : 'text-gray-700'
              }`}>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
