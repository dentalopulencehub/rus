'use client';

import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';

const services = [
  {
    name: 'Taxation Services',
    slug: 'taxation-services',
    description: 'Expert tax planning and compliance',
  },
  {
    name: 'Accounting & Bookkeeping',
    slug: 'accounting-bookkeeping',
    description: 'Comprehensive financial management',
  },
  {
    name: 'Audit & Assurance',
    slug: 'audit-assurance',
    description: 'Independent audit services',
  },
  {
    name: 'Payroll Services',
    slug: 'payroll-services',
    description: 'Efficient payroll processing',
  },
  {
    name: 'Business Advisory',
    slug: 'business-advisory',
    description: 'Strategic business guidance',
  },
  {
    name: 'HMRC & NCA Investigations',
    slug: 'hmrc-nca-investigations',
    description: 'Tax investigation support',
  },
  {
    name: 'Company Secretarial',
    slug: 'company-formation-secretarial',
    description: 'Company setup and compliance',
  },
];

export function ServicesDropdown2() {
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
        Individual
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
        <div className="dropdown-menu absolute top-full left-0 mt-4 w-[620px] rounded-xl shadow-xl border border-gray-200/50 bg-white/95 backdrop-blur-lg overflow-hidden z-50">
          <div className="p-3 grid grid-cols-2 gap-2">
            {services.map((service, index) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="dropdown-item block px-3 py-2.5 rounded transition-all duration-100"
                style={{ animationDelay: `${index * 30}ms` }}
              >
                <div className="font-medium text-sm text-gray-900">
                  {service.name}
                </div>
                <div className="text-xs text-gray-500 mt-0.5">
                  {service.description}
                </div>
              </Link>
            ))}
          </div>
          <div className="border-t border-gray-100 bg-gray-50/50">
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
                Trusted by 10,000 UK businesses
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
