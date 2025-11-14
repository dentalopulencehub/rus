'use client';

import { useState, useEffect } from 'react';
import { Command } from 'cmdk';
import Link from 'next/link';

export function CommandMenu() {
  const [open, setOpen] = useState(false);

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
        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm text-gray-700 hover:bg-[rgba(5,21,36,0.06)] transition-colors"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <span className="hidden sm:inline">Search</span>
        <kbd className="hidden lg:inline-block px-1.5 py-0.5 text-xs bg-gray-100 rounded border border-gray-200">⌘K</kbd>
      </button>

      {/* Command Palette */}
      {open && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm" onClick={() => setOpen(false)}>
          <div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl" onClick={(e) => e.stopPropagation()}>
            <Command className="bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden">
              <div className="flex items-center border-b border-gray-200 px-4">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <Command.Input
                  placeholder="Search services, sectors, or pages..."
                  className="flex-1 px-3 py-4 text-base bg-transparent outline-none placeholder:text-gray-400"
                />
              </div>
              <Command.List className="max-h-[400px] overflow-y-auto p-2">
                <Command.Empty className="py-6 text-center text-sm text-gray-500">No results found.</Command.Empty>

                <Command.Group heading="Services" className="text-xs font-semibold text-gray-500 px-2 py-2">
                  <CommandItem href="/services/taxation-services" onSelect={() => setOpen(false)}>
                    <span>Taxation Services</span>
                  </CommandItem>
                  <CommandItem href="/services/accounting-bookkeeping" onSelect={() => setOpen(false)}>
                    <span>Accounting & Bookkeeping</span>
                  </CommandItem>
                  <CommandItem href="/services/audit-assurance" onSelect={() => setOpen(false)}>
                    <span>Audit & Assurance</span>
                  </CommandItem>
                  <CommandItem href="/services/payroll-services" onSelect={() => setOpen(false)}>
                    <span>Payroll Services</span>
                  </CommandItem>
                </Command.Group>

                <Command.Group heading="Sectors" className="text-xs font-semibold text-gray-500 px-2 py-2 mt-2">
                  <CommandItem href="/sectors/charities-not-for-profit" onSelect={() => setOpen(false)}>
                    <span>Charities & Not-for-profit</span>
                  </CommandItem>
                  <CommandItem href="/sectors/corporate" onSelect={() => setOpen(false)}>
                    <span>Corporate</span>
                  </CommandItem>
                  <CommandItem href="/sectors/healthcare" onSelect={() => setOpen(false)}>
                    <span>Healthcare</span>
                  </CommandItem>
                  <CommandItem href="/sectors/retail" onSelect={() => setOpen(false)}>
                    <span>Retail</span>
                  </CommandItem>
                </Command.Group>

                <Command.Group heading="Pages" className="text-xs font-semibold text-gray-500 px-2 py-2 mt-2">
                  <CommandItem href="/who-we-are" onSelect={() => setOpen(false)}>
                    <span>Who We Are</span>
                  </CommandItem>
                  <CommandItem href="/insights" onSelect={() => setOpen(false)}>
                    <span>Insights</span>
                  </CommandItem>
                  <CommandItem href="/contact" onSelect={() => setOpen(false)}>
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

function CommandItem({ href, onSelect, children }: { href: string; onSelect: () => void; children: React.ReactNode }) {
  return (
    <Command.Item
      value={href}
      onSelect={onSelect}
      className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm cursor-pointer hover:bg-gray-100 aria-selected:bg-gray-100"
    >
      <Link href={href} className="flex-1">
        {children}
      </Link>
    </Command.Item>
  );
}
