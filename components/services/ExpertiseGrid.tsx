'use client';

import { motion } from 'framer-motion';

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
    <section className="relative py-24 px-4 bg-[#F9FAFB] overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl text-gray-900 tracking-tight">
            {title}
          </h2>
        </div>

        {/* Grid - 4 columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              className="group relative h-full flex flex-col items-start text-left p-6 bg-white border border-gray-200 shadow-sm rounded-2xl transition-all duration-300 ease-out hover:border-blue-200/60 hover:shadow-lg hover:-translate-y-1 cursor-pointer"
            >
              {/* Ghost Arrow - Top Right */}
              <div className="absolute top-5 right-5 opacity-0 -translate-x-2 translate-y-2 transition-all duration-300 ease-out group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7m0 0H7m10 0v10" />
                </svg>
              </div>

              {/* Icon Container - "Squircle" Style with Fill Effect */}
              <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center mb-6 text-[#01458f] transition-all duration-300 group-hover:scale-110 group-hover:bg-[#01458f] group-hover:text-white group-hover:border-transparent">
                <div className="w-6 h-6">
                  {item.icon}
                </div>
              </div>

              {/* Title */}
              <h3 className="font-sans text-lg font-semibold text-gray-900 mb-2 leading-tight tracking-tight transition-colors group-hover:text-[#01458f]">
                {item.title}
              </h3>

              {/* Description */}
              <p className="font-body text-sm text-gray-500 leading-relaxed transition-colors group-hover:text-gray-700">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
