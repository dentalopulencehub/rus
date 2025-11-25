'use client';

import { motion } from 'framer-motion';

interface SubcategoryItem {
  name: string;
  slug: string;
  description: string;
  icon: React.ReactNode;
}

interface SubcategoriesGridProps {
  title: string;
  subtitle: string;
  items: SubcategoryItem[];
  basePath: string;
}

export function SubcategoriesGrid({ title, subtitle, items, basePath }: SubcategoriesGridProps) {
  return (
    <section id="services" className="py-24 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-light italic text-gray-900 mb-3 tracking-tight">
            {title}
          </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((item) => (
            <div
              key={item.slug}
              className="group relative overflow-hidden flex flex-col items-center justify-center text-center p-4 rounded-xl border border-gray-200 bg-white transition-all duration-200 hover:shadow-sm aspect-square"
            >
              {/* Background Image - Fades in on Hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-300 pointer-events-none bg-cover bg-center"
                style={{ backgroundImage: 'url(https://imagedelivery.net/W93NbEGaswuledAsk5GMeA/5ee11fdf-aac0-4c26-0f5e-026a2df87900/public)' }}
              />

              <motion.div
                className="relative z-10 text-gray-700 group-hover:text-[#01458f] mb-4 transition-colors duration-200"
                whileHover={{ scale: 1.05, y: -2 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {item.icon}
              </motion.div>

              <h3 className="relative z-10 text-sm font-medium text-gray-900 group-hover:text-[#01458f] transition-colors duration-200">
                {item.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
