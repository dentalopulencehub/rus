'use client';

import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';

const sectors = [
  {
    name: 'Charities & Not-for-profit',
    slug: 'charities-not-for-profit',
    description: 'Charitable organizations',
  },
  {
    name: 'Construction',
    slug: 'construction',
    description: 'Construction and building services',
  },
  {
    name: 'Contractors & Professional Services',
    slug: 'contractors-professional-services',
    description: 'Self-employed and contract workers',
  },
  {
    name: 'Creative & Media',
    slug: 'creative-media',
    description: 'Creative industries and media',
  },
  {
    name: 'Education & Academies',
    slug: 'education-academies',
    description: 'Schools and educational institutions',
  },
  {
    name: 'Financial Services',
    slug: 'financial-services',
    description: 'Insurance, brokerage and financial firms',
  },
  {
    name: 'Healthcare',
    slug: 'healthcare',
    description: 'Medical practices and healthcare providers',
  },
  {
    name: 'Hospitality & Leisure',
    slug: 'hospitality-leisure',
    description: 'Hotels, restaurants and leisure',
  },
  {
    name: 'Information Technology',
    slug: 'information-technology',
    description: 'IT services and technology companies',
  },
  {
    name: 'Property Services',
    slug: 'property-services',
    description: 'Real estate and property management',
  },
  {
    name: 'Retail',
    slug: 'retail',
    description: 'Shops and retail businesses',
  },
  {
    name: 'Solicitors',
    slug: 'solicitors',
    description: 'Legal practices and law firms',
  },
];

export function SectorsDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 150);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      ref={dropdownRef}
    >
      {/* Trigger Button */}
      <button
        className="nav-link inline-flex items-center gap-1.5"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        Sectors
        <svg
          className={`w-3.5 h-3.5 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="dropdown-menu absolute top-full -left-[108px] mt-4 w-[620px] rounded-xl shadow-xl border-2 border-gray-200/50 overflow-hidden z-50 isolate">
          {/* Layer 3: Solid background (bottom layer) */}
          <div className="absolute inset-0 bg-white rounded-xl" />

          {/* Layer 2: Gradient shimmer */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/5 rounded-xl" />

          {/* Layer 1: Glassmorphic backdrop */}
          <div className="absolute inset-0 before:absolute before:inset-0 before:backdrop-blur-xl before:backdrop-saturate-150" />

          <div className="relative z-10 p-3 grid grid-cols-2 gap-2">
            {sectors.map((sector, index) => (
              <Link
                key={sector.slug}
                href={`/sectors/${sector.slug}`}
                className="dropdown-item relative block px-3 py-2.5 rounded-lg border-2 border-transparent hover:border-[#01458f]/60 transition-all duration-300 group overflow-hidden"
              >
                {/* Blue Glass Prism Background - Fades in on Hover */}
                <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 100" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id={`sector-prism-gradient-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#01458f" stopOpacity="0.08" />
                        <stop offset="50%" stopColor="#0052cc" stopOpacity="0.12" />
                        <stop offset="100%" stopColor="#2684ff" stopOpacity="0.06" />
                      </linearGradient>
                      <filter id={`sector-glass-blur-${index}`}>
                        <feGaussianBlur in="SourceGraphic" stdDeviation="1" />
                      </filter>
                    </defs>
                    {/* Prism Shapes */}
                    <polygon points="0,0 80,0 40,100" fill={`url(#sector-prism-gradient-${index})`} filter={`url(#sector-glass-blur-${index})`} opacity="0.7" />
                    <polygon points="80,0 160,0 120,100 40,100" fill={`url(#sector-prism-gradient-${index})`} filter={`url(#sector-glass-blur-${index})`} opacity="0.5" />
                    <polygon points="160,0 200,0 200,100 120,100" fill={`url(#sector-prism-gradient-${index})`} filter={`url(#sector-glass-blur-${index})`} opacity="0.6" />
                    {/* Glass shine overlay */}
                    <rect x="0" y="0" width="200" height="30" fill="white" opacity="0.1" />
                  </svg>
                </div>

                {/* Layer 1: Glassmorphic backdrop with blur and saturation */}
                <div className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition-all duration-300 before:absolute before:inset-0 before:backdrop-blur-md before:backdrop-saturate-150" />

                {/* Layer 2: Colored gradient background */}
                <div className="absolute inset-0 -z-20 bg-gradient-to-br from-[#01458f]/15 via-[#0052cc]/10 to-[#01458f]/15 rounded-lg opacity-0 group-hover:opacity-30 transition-all duration-300" />

                {/* Layer 3: Solid background base */}
                <div className="absolute inset-0 -z-30 bg-white rounded-lg transition-all duration-300 group-hover:bg-white/80" />

                <div className="relative z-10 font-medium text-sm text-gray-900">
                  {sector.name}
                </div>
                <div className="relative z-10 text-xs text-gray-500 mt-0.5">
                  {sector.description}
                </div>
              </Link>
            ))}
          </div>
          <div className="relative z-10 border-t border-gray-100 bg-gray-50/50">
            {/* Contact Options */}
            <div className="px-3 pt-2.5 pb-2">
              <Link
                href="/contact"
                className="block w-full text-xs font-medium text-[#01458f] bg-white hover:shadow-[0_0_0_1px_#01458f] px-4 py-2 rounded-lg transition-all duration-100 inline-flex items-center justify-center gap-1.5 border border-[#01458f]"
              >
                Book Consultation
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Trust Signal */}
            <div className="px-3 pb-2.5 pt-0">
              <p className="text-xs text-gray-600 flex items-center justify-center gap-1.5">
                <svg className="w-3.5 h-3.5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Trusted by more than 7,000 UK businesses and individuals
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
