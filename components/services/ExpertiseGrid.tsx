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
              className="relative flex flex-col items-center justify-start text-center p-6 rounded-xl border-2 border-gray-200/50 hover:border-[#01458f]/60 transition-all duration-300 group overflow-hidden"
            >
              {/* Layer 1: Glassmorphic backdrop */}
              <div className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition-all duration-300 before:absolute before:inset-0 before:backdrop-blur-md before:backdrop-saturate-150" />

              {/* Layer 2: Colored gradient background */}
              <div className="absolute inset-0 -z-20 bg-gradient-to-br from-[#01458f]/20 via-[#0052cc]/10 to-[#01458f]/20 rounded-xl opacity-0 group-hover:opacity-30 transition-all duration-300" />

              {/* Layer 3: Solid background base */}
              <div className="absolute inset-0 -z-30 bg-white rounded-xl transition-all duration-300 group-hover:bg-white/80" />

              {/* Icon */}
              <div className="relative z-10 mb-4 text-[#01458f]">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="relative z-10 text-xs md:text-sm font-bold text-gray-900 mb-2 tracking-wide uppercase leading-tight">
                {item.title}
              </h3>

              {/* Description */}
              <p className="relative z-10 text-xs text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
