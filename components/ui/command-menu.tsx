'use client';

import { useState, useEffect } from 'react';
import { Command } from 'cmdk';
import { useRouter } from 'next/navigation';

export function CommandMenu() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const handleNavigate = (href: string) => {
    setOpen(false);
    router.push(href);
  };

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  return (
    <>
      {/* Search Button */}
      <button
        onClick={() => setOpen(true)}
        className="inline-flex items-center justify-center gap-2 px-3 py-2 rounded-lg text-sm text-gray-700 hover:text-[#01458f] hover:bg-gray-50 transition-all duration-200 min-w-[44px] min-h-[44px] sm:min-w-0 sm:min-h-0"
        aria-label="Search"
      >
        <svg className="w-5 h-5 sm:w-4 sm:h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <span className="hidden sm:inline font-medium">Search</span>
        <kbd className="hidden lg:inline-block px-1.5 py-0.5 text-xs bg-gray-100 rounded border border-gray-200">⌘K</kbd>
      </button>

      {/* Command Palette */}
      {open && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm" onClick={() => setOpen(false)}>
          <div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[calc(100%-2rem)] sm:w-full max-w-2xl mx-4" onClick={(e) => e.stopPropagation()}>
            <Command className="bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden">
              <div className="flex items-center border-b border-gray-200 px-4">
                <svg className="w-5 h-5 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <Command.Input
                  placeholder="Search services, sectors, or pages..."
                  className="flex-1 px-3 py-4 text-sm sm:text-base bg-transparent outline-none placeholder:text-gray-400"
                />
              </div>
              <Command.List className="max-h-[60vh] sm:max-h-[400px] overflow-y-auto p-2">
                <Command.Empty className="py-6 text-center text-sm text-gray-500">No results found.</Command.Empty>

                <Command.Group heading="Services" className="text-sm font-bold text-gray-900 px-2 py-3 pt-2">
                  <CommandItem href="/services/taxation-services" onSelect={handleNavigate}>
                    <span>Taxation Services</span>
                  </CommandItem>
                  <CommandItem href="/services/accounting-bookkeeping" onSelect={handleNavigate}>
                    <span>Accounting & Bookkeeping</span>
                  </CommandItem>
                  <CommandItem href="/services/audit-assurance" onSelect={handleNavigate}>
                    <span>Audit & Assurance</span>
                  </CommandItem>
                  <CommandItem href="/services/business-advisory" onSelect={handleNavigate}>
                    <span>Business Advisory</span>
                  </CommandItem>
                  <CommandItem href="/services/company-secretarial" onSelect={handleNavigate}>
                    <span>Company Secretarial</span>
                  </CommandItem>
                  <CommandItem href="/services/company-formation" onSelect={handleNavigate}>
                    <span>Company Formation</span>
                  </CommandItem>
                  <CommandItem href="/services/payroll" onSelect={handleNavigate}>
                    <span>Payroll</span>
                  </CommandItem>
                  <CommandItem href="/services/hmrc-nca-investigations" onSelect={handleNavigate}>
                    <span>HMRC & NCA Investigations</span>
                  </CommandItem>
                  <CommandItem href="/services/forensic-accounting" onSelect={handleNavigate}>
                    <span>Forensic Accounting</span>
                  </CommandItem>
                </Command.Group>

                <Command.Group heading="Sectors" className="text-sm font-bold text-gray-900 px-2 py-3 mt-4">
                  <CommandItem href="/sectors/charities-not-for-profit" onSelect={handleNavigate}>
                    <span>Charities & Not-for-profit</span>
                  </CommandItem>
                  <CommandItem href="/sectors/construction" onSelect={handleNavigate}>
                    <span>Construction</span>
                  </CommandItem>
                  <CommandItem href="/sectors/contractors-professional-services" onSelect={handleNavigate}>
                    <span>Contractors & Professional Services</span>
                  </CommandItem>
                  <CommandItem href="/sectors/creative-media" onSelect={handleNavigate}>
                    <span>Creative & Media</span>
                  </CommandItem>
                  <CommandItem href="/sectors/education-academies" onSelect={handleNavigate}>
                    <span>Education & Academies</span>
                  </CommandItem>
                  <CommandItem href="/sectors/healthcare" onSelect={handleNavigate}>
                    <span>Healthcare</span>
                  </CommandItem>
                  <CommandItem href="/sectors/hospitality-leisure" onSelect={handleNavigate}>
                    <span>Hospitality & Leisure</span>
                  </CommandItem>
                  <CommandItem href="/sectors/information-technology" onSelect={handleNavigate}>
                    <span>Information Technology</span>
                  </CommandItem>
                  <CommandItem href="/sectors/property-services" onSelect={handleNavigate}>
                    <span>Property Services</span>
                  </CommandItem>
                  <CommandItem href="/sectors/retail" onSelect={handleNavigate}>
                    <span>Retail</span>
                  </CommandItem>
                  <CommandItem href="/sectors/solicitors" onSelect={handleNavigate}>
                    <span>Solicitors</span>
                  </CommandItem>
                  <CommandItem href="/sectors/other" onSelect={handleNavigate}>
                    <span>Other</span>
                  </CommandItem>
                </Command.Group>

                <Command.Group heading="Pages" className="text-sm font-bold text-gray-900 px-2 py-3 mt-4">
                  <CommandItem href="/who-we-are" onSelect={handleNavigate}>
                    <span>Who We Are</span>
                  </CommandItem>
                  <CommandItem href="/insights" onSelect={handleNavigate}>
                    <span>Insights</span>
                  </CommandItem>
                  <CommandItem href="/contact" onSelect={handleNavigate}>
                    <span>Contact</span>
                  </CommandItem>
                </Command.Group>
              </Command.List>
            </Command>
          </div>
        </div>
      )}
    </>
  );
}

function CommandItem({ href, onSelect, children }: { href: string; onSelect: (href: string) => void; children: React.ReactNode }) {
  return (
    <Command.Item
      value={href}
      onSelect={() => onSelect(href)}
      className="group relative overflow-hidden flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm cursor-pointer hover:bg-gray-50 hover:shadow-sm aria-selected:bg-gray-50 transition-all duration-200"
    >
      {/* Background Image - Fades in on Hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none bg-cover bg-center"
        style={{ backgroundImage: 'url(https://imagedelivery.net/W93NbEGaswuledAsk5GMeA/5ee11fdf-aac0-4c26-0f5e-026a2df87900/public)' }}
      />

      <div className="relative z-10 text-gray-900 group-hover:text-[#01458f] transition-colors duration-200 font-medium">
        {children}
      </div>
    </Command.Item>
  );
}
