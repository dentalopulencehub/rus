'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

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
  const isSingle = items.length === 1;
  const gridCols = items.length === 4 ? 'md:grid-cols-4' : 'md:grid-cols-3';

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

        {isSingle ? (
          // Featured horizontal card for single sub-service
          <div className="max-w-3xl mx-auto">
            {items.map((item) => (
              <Link
                key={item.slug}
                href={`${basePath}/${item.slug}`}
                className="group relative overflow-hidden flex items-center gap-6 p-8 rounded-2xl border border-gray-200 bg-white transition-all duration-300 hover:shadow-lg hover:border-[#01458f]/30"
              >
                {/* Background Image - Fades in on Hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none bg-cover bg-center"
                  style={{ backgroundImage: 'url(https://imagedelivery.net/W93NbEGaswuledAsk5GMeA/5ee11fdf-aac0-4c26-0f5e-026a2df87900/public)' }}
                />

                <motion.div
                  className="relative z-10 flex-shrink-0 text-[#01458f] bg-[#01458f]/5 group-hover:bg-[#01458f]/10 rounded-xl p-5 transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                >
                  {item.icon}
                </motion.div>

                <div className="relative z-10 flex-1 min-w-0">
                  <h3 className="text-xl md:text-2xl font-medium text-gray-900 group-hover:text-[#01458f] transition-colors duration-200 mb-2">
                    {item.name}
                  </h3>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <svg
                  className="relative z-10 flex-shrink-0 w-6 h-6 text-gray-400 group-hover:text-[#01458f] transition-all duration-300 group-hover:translate-x-1"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </Link>
            ))}
          </div>
        ) : (
          <div className={`grid grid-cols-1 gap-6 ${gridCols}`}>
            {items.map((item) => (
              <Link
                key={item.slug}
                href={`${basePath}/${item.slug}`}
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

                {/* Small curvy arrow - bottom right corner, south-east pointing */}
                <svg
                  className="absolute bottom-4 right-4 z-10 w-4 h-4 text-gray-400 group-hover:text-[#01458f] opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1 group-hover:translate-y-1"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M7 7l10 10M17 7v10H7" />
                </svg>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
