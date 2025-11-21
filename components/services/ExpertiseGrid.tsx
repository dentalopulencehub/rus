interface ExpertiseItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface ExpertiseGridProps {
  title: string;
  items: ExpertiseItem[];
}

export function ExpertiseGrid({ title, items }: ExpertiseGridProps) {
  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light italic text-gray-900 mb-3 tracking-tight">
            {title}
          </h2>
        </div>

        {/* Grid - 4 columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {items.map((item, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center justify-start text-center p-6 rounded-xl border border-gray-200/50 bg-white transition-all duration-200 hover:shadow-lg hover:border-[#01458f]/30"
            >
              {/* Icon */}
              <div className="mb-4 text-[#01458f]">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-xs md:text-sm font-bold text-gray-900 mb-2 tracking-wide uppercase leading-tight">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-xs text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
