'use client';

import { motion } from 'framer-motion';

const expertiseItems = [
  {
    id: 1,
    title: 'Business Tax Compliance',
    description: 'Corporation tax returns and strategic planning for businesses of all sizes',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    size: 'large', // spans 2 columns
  },
  {
    id: 2,
    title: 'Personal Tax Returns',
    description: 'Self-assessment and strategic tax efficiency for individuals',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
    size: 'medium',
  },
  {
    id: 3,
    title: 'Inheritance Tax Strategy',
    description: 'Estate planning and wealth transfer optimisation',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    size: 'medium',
  },
  {
    id: 4,
    title: 'Capital Gains Tax',
    description: 'CGT planning for property, investments and disposals',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    size: 'small',
  },
  {
    id: 5,
    title: 'VAT & Digital Filing',
    description: 'Making Tax Digital compliance and VAT advisory',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    size: 'small',
  },
  {
    id: 6,
    title: 'HMRC Support',
    description: 'Correspondence, enquiries and investigation assistance',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    size: 'small',
  },
  {
    id: 7,
    title: 'Corporation Tax',
    description: 'Complete corporation tax compliance and advisory',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    size: 'medium',
  },
  {
    id: 8,
    title: 'Tax-Efficient Structuring',
    description: 'Strategic structuring for companies and individuals',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
    size: 'large',
  },
];

export function TaxationExpertiseBento() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-3 tracking-tight">
            Our Taxation Expertise
          </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            Comprehensive tax services covering every aspect of UK taxation
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-fr">
          {expertiseItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`
                group relative overflow-hidden rounded-2xl border border-gray-200 bg-white
                hover:border-[#01458f] hover:shadow-2xl transition-all duration-300
                ${item.size === 'large' ? 'md:col-span-2' : ''}
                ${item.size === 'medium' ? 'md:col-span-1' : ''}
                ${item.size === 'small' ? 'md:col-span-1' : ''}
              `}
            >
              {/* Background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#BBDEFB]/0 to-[#01458f]/0 group-hover:from-[#BBDEFB]/20 group-hover:to-[#01458f]/10 transition-all duration-300" />

              <div className="relative p-8 flex flex-col h-full min-h-[200px]">
                {/* Icon */}
                <div className="mb-6">
                  <div className="w-16 h-16 rounded-xl bg-gray-100 flex items-center justify-center group-hover:bg-[#01458f] transition-all duration-300">
                    <div className="text-gray-600 group-hover:text-white transition-colors duration-300">
                      {item.icon}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#01458f] transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Arrow indicator */}
                <div className="mt-6 flex items-center gap-2 text-sm font-medium text-gray-400 group-hover:text-[#01458f] transition-colors duration-300">
                  <span>Learn more</span>
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
