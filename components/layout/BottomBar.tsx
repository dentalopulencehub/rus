'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ContactTrigger } from '@/components/contact/ContactTrigger';

type MenuItem = {
  label: string;
  href?: string;
  submenu?: { label: string; href: string }[];
};

const menuItems: MenuItem[] = [
  {
    label: 'Services',
    submenu: [
      { label: 'Taxation Services', href: '/services/taxation-services' },
      { label: 'Accounting & Bookkeeping', href: '/services/accounting-bookkeeping' },
      { label: 'Audit & Assurance', href: '/services/audit-assurance' },
      { label: 'Business Advisory', href: '/services/business-advisory' },
      { label: 'Company Secretarial', href: '/services/company-secretarial' },
      { label: 'Company Formation', href: '/services/company-formation' },
      { label: 'Payroll', href: '/services/payroll' },
      { label: 'HMRC & NCA Investigations', href: '/services/hmrc-nca-investigations' },
      { label: 'Forensic Accounting', href: '/services/forensic-accounting' },
    ],
  },
  {
    label: 'Sectors',
    submenu: [
      { label: 'Charities & Not-for-profit', href: '/sectors/charities-not-for-profit' },
      { label: 'Construction', href: '/sectors/construction' },
      { label: 'Contractors & Professional Services', href: '/sectors/contractors-professional-services' },
      { label: 'Creative & Media', href: '/sectors/creative-media' },
      { label: 'Education & Academies', href: '/sectors/education-academies' },
      { label: 'Financial Services', href: '/sectors/financial-services' },
      { label: 'Healthcare', href: '/sectors/healthcare' },
      { label: 'Hospitality & Leisure', href: '/sectors/hospitality-leisure' },
      { label: 'Information Technology', href: '/sectors/information-technology' },
      { label: 'Property Services', href: '/sectors/property-services' },
      { label: 'Retail', href: '/sectors/retail' },
      { label: 'Solicitors', href: '/sectors/solicitors' },
    ],
  },
  { label: 'Who We Are', href: '/who-we-are' },
];

export function BottomBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [expandedItems, setExpandedItems] = useState<string[]>([]);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const toggleExpanded = (label: string) => {
    setExpandedItems((prev) =>
      prev.includes(label) ? prev.filter((item) => item !== label) : [...prev, label]
    );
  };

  const handleClose = () => {
    setIsMenuOpen(false);
    // Reset expanded items after animation completes
    setTimeout(() => setExpandedItems([]), 300);
  };

  return (
    <>
      {/* Bottom Navigation Bar */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 w-auto">
        <div className="relative bg-[#01458f]/90 backdrop-blur-xl rounded-full shadow-lg border border-white/20 px-5 py-1.5 flex items-center justify-center gap-5 overflow-hidden">
          {/* Glassmorphic Overlay Layer */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/5 pointer-events-none" />
          {/* Content Layer */}
          <div className="relative z-10 flex items-center justify-center gap-5 w-full">
          {/* Home - Desktop only */}
          <Link
            href="/"
            className="hidden lg:flex flex-col items-center gap-0 py-0.5 px-2.5 text-white/90 hover:text-white transition-colors group"
            aria-label="Home"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            <span className="text-[8px] font-medium mt-0.5">Home</span>
          </Link>

          {/* Menu */}
          <button
            onClick={() => setIsMenuOpen(true)}
            className="flex flex-col items-center gap-0 py-0.5 px-2.5 text-white/90 hover:text-white transition-colors group"
            aria-label="Menu"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <span className="text-[8px] font-medium mt-0.5">Menu</span>
          </button>

          {/* Call - Mobile only */}
          <a
            href="tel:01217771200"
            className="lg:hidden flex flex-col items-center gap-0 py-0.5 px-2.5 text-white/90 hover:text-white transition-colors group"
            aria-label="Call us"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span className="text-[8px] font-medium mt-0.5">Call</span>
          </a>

          {/* Enquiry */}
          <ContactTrigger className="flex flex-col items-center gap-0 py-0.5 px-2.5 text-white/90 hover:text-white transition-colors group">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span className="text-[8px] font-medium mt-0.5">Enquiry</span>
          </ContactTrigger>
          </div>
        </div>
      </div>

      {/* Menu Bottom Sheet - Client Only */}
      {isMounted && (
        <>
          {/* Menu Bottom Sheet Overlay */}
          {isMenuOpen && (
            <div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 animate-in fade-in duration-200"
              onClick={handleClose}
            />
          )}

          {/* Menu Bottom Sheet */}
          <div
            className={`fixed bottom-0 left-0 right-0 z-50 bg-gradient-to-b from-gray-50 to-white rounded-t-3xl shadow-2xl transition-all duration-300 ease-out ${
              isMenuOpen ? 'translate-y-0' : 'translate-y-full'
            }`}
            style={{ height: '85vh' }}
          >
        <div className="h-full flex flex-col">
          {/* Handle Bar */}
          <div className="flex justify-center pt-3 pb-1 flex-shrink-0">
            <div className="w-10 h-1 bg-gray-300/80 rounded-full" />
          </div>

          {/* Menu Header */}
          <div className="px-6 py-4 flex-shrink-0 bg-white/60 backdrop-blur-sm">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Navigation</h3>
                <p className="text-xs text-gray-500 mt-0.5">Explore our services</p>
              </div>
              <button
                onClick={handleClose}
                className="p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
                aria-label="Close menu"
              >
                <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          {/* Menu Items - Scrollable */}
          <nav className="flex-1 overflow-y-auto px-4 py-2 pb-safe">
            <div className="space-y-1 pb-6">
              {menuItems.map((item, index) => (
                <div key={index}>
                  {/* Main Menu Item */}
                  {item.href ? (
                    <Link
                      href={item.href}
                      onClick={handleClose}
                      className="relative flex items-center justify-between px-4 py-3.5 rounded-xl border-2 border-gray-200/50 hover:border-[#01458f]/60 hover:shadow-[#01458f]/20 hover:shadow-lg active:scale-98 transition-all duration-300 group overflow-hidden"
                    >
                      {/* Layer 1: Glassmorphic backdrop with blur and saturation */}
                      <div className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition-all duration-300 before:absolute before:inset-0 before:backdrop-blur-md before:backdrop-saturate-150" />

                      {/* Layer 2: Colored gradient background */}
                      <div className="absolute inset-0 -z-20 bg-gradient-to-br from-[#01458f]/30 via-[#0052cc]/20 to-[#01458f]/30 rounded-xl opacity-0 group-hover:opacity-30 transition-all duration-300" />

                      {/* Layer 3: Solid background base */}
                      <div className="absolute inset-0 -z-30 bg-white rounded-xl transition-all duration-300 group-hover:bg-white/80" />
                      <span className="relative z-10 text-sm font-medium text-gray-900 group-hover:text-[#01458f] transition-colors">
                        {item.label}
                      </span>
                      <svg className="relative z-10 w-4 h-4 text-gray-400 group-hover:text-[#01458f] transition-all group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  ) : (
                    <div className="relative rounded-xl border-2 border-gray-200/50 hover:border-[#01458f]/60 hover:shadow-[#01458f]/20 hover:shadow-lg shadow-sm overflow-hidden transition-all duration-300 group">
                      {/* Layer 1: Glassmorphic backdrop */}
                      <div className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition-all duration-300 before:absolute before:inset-0 before:backdrop-blur-md before:backdrop-saturate-150" />

                      {/* Layer 2: Colored gradient background */}
                      <div className="absolute inset-0 -z-20 bg-gradient-to-br from-[#01458f]/30 via-[#0052cc]/20 to-[#01458f]/30 rounded-xl opacity-0 group-hover:opacity-30 transition-all duration-300" />

                      {/* Layer 3: Solid background base */}
                      <div className="absolute inset-0 -z-30 bg-white rounded-xl transition-all duration-300 group-hover:bg-white/80" />

                      {/* Item with Submenu */}
                      <button
                        onClick={() => toggleExpanded(item.label)}
                        className="relative w-full flex items-center justify-between px-4 py-3.5 transition-colors overflow-hidden"
                      >
                        <span className="relative z-10 text-sm font-medium text-gray-900 group-hover:text-[#01458f] transition-colors">
                          {item.label}
                        </span>
                        <div className="relative z-10 flex items-center gap-2">
                          <span className="text-xs text-gray-400 font-medium">
                            {item.submenu?.length}
                          </span>
                          <svg
                            className={`w-4 h-4 text-gray-400 group-hover:text-[#01458f] transition-all duration-300 ${
                              expandedItems.includes(item.label) ? 'rotate-180' : 'rotate-0'
                            }`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </button>

                      {/* Submenu */}
                      <div
                        className={`transition-all duration-300 ease-in-out ${
                          expandedItems.includes(item.label) ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                        }`}
                      >
                        <div className="border-t border-gray-100 bg-gradient-to-b from-gray-50/50 to-white px-3 py-2">
                          <div className="space-y-1">
                            {item.submenu?.map((subitem) => (
                              <Link
                                key={subitem.href}
                                href={subitem.href}
                                onClick={handleClose}
                                className="relative flex items-center px-3 py-2.5 rounded-lg border-2 border-transparent hover:border-[#01458f]/40 hover:shadow-sm transition-all duration-300 group overflow-hidden"
                              >
                                {/* Layer 1: Glassmorphic backdrop */}
                                <div className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition-all duration-300 before:absolute before:inset-0 before:backdrop-blur-md before:backdrop-saturate-150" />

                                {/* Layer 2: Colored gradient background */}
                                <div className="absolute inset-0 -z-20 bg-gradient-to-br from-[#01458f]/20 via-[#0052cc]/10 to-[#01458f]/20 rounded-lg opacity-0 group-hover:opacity-30 transition-all duration-300" />

                                {/* Layer 3: Solid background base */}
                                <div className="absolute inset-0 -z-30 bg-white rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300" />
                                <div className="relative z-10 w-1.5 h-1.5 rounded-full bg-[#01458f]/40 group-hover:bg-[#01458f] mr-3 transition-colors" />
                                <span className="relative z-10 text-sm text-gray-700 group-hover:text-[#01458f] font-medium transition-colors">
                                  {subitem.label}
                                </span>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Bottom Padding for Safe Area */}
            <div className="h-8" />
          </nav>
        </div>
      </div>
        </>
      )}
    </>
  );
}
