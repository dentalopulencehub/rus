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
          <h2 className="text-3xl md:text-4xl text-gray-900 tracking-tight">
            {title}
          </h2>
        </div>

        {/* 4 Cards Inline */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {items.map((item, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center justify-center text-center p-4 md:p-8 rounded-xl border border-gray-200/50 bg-[#BBDEFB] transition-all duration-200 hover:shadow-lg hover:border-[#01458f]/30 min-h-[280px] md:min-h-[320px]"
            >
              {/* Icon - Large and Centered */}
              <div className="w-12 h-12 md:w-16 md:h-16 mb-4 md:mb-8 text-[#01458f]">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-xs md:text-sm font-bold text-gray-900 mb-2 tracking-wide uppercase">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-xs text-gray-700 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
