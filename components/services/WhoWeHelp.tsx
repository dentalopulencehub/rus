'use client';

import { motion } from 'framer-motion';

interface ClientType {
  name?: string;
  title?: string;
  description?: string;
  icon: React.ReactNode;
}

interface WhoWeHelpProps {
  title?: string;
  subtitle?: string;
  clientTypes: ClientType[];
  bgColor?: string;
  darkMode?: boolean;
}

export function WhoWeHelp({
  title = "Who We Help",
  subtitle = "Tailored tax support for diverse clients",
  clientTypes,
  bgColor = "bg-white",
  darkMode = false
}: WhoWeHelpProps) {
  return (
    <section id="expertise" className={`py-24 px-4 ${bgColor}`}>
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className={`text-3xl md:text-4xl font-light italic mb-3 tracking-tight ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            {title}
          </h2>
          <p className={`text-base max-w-2xl mx-auto ${darkMode ? 'text-white/90' : 'text-gray-600'}`}>
            {subtitle}
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
          {clientTypes.map((client, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className={`group relative overflow-hidden flex flex-col items-center justify-center text-center p-4 rounded-xl transition-all duration-200 aspect-square ${
                darkMode
                  ? 'bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/15'
                  : 'border border-gray-200 bg-white hover:shadow-sm'
              }`}
            >
              {/* Background Image - Fades in on Hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-300 pointer-events-none bg-cover bg-center"
                style={{ backgroundImage: 'url(https://imagedelivery.net/W93NbEGaswuledAsk5GMeA/5ee11fdf-aac0-4c26-0f5e-026a2df87900/public)' }}
              />

              <motion.div
                className={`relative z-10 mb-3 transition-colors duration-200 ${
                  darkMode
                    ? 'text-white group-hover:text-white'
                    : 'text-gray-700 group-hover:text-[#01458f]'
                }`}
                whileHover={{ scale: 1.05, y: -2 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {client.icon}
              </motion.div>

              <h3 className={`relative z-10 text-xs font-medium transition-colors duration-200 ${
                darkMode
                  ? 'text-white group-hover:text-white'
                  : 'text-gray-900 group-hover:text-[#01458f]'
              }`}>
                {client.title || client.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
