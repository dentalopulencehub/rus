'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ServicesDropdown } from './ServicesDropdown';
import { SectorsDropdown } from './SectorsDropdown';
import { CommandMenu } from '@/components/ui/command-menu';
import { useScrollPosition } from '@/hooks/useScrollPosition';
import { cn } from '@/lib/utils';

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isScrolled = useScrollPosition(50);

  const handleToggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out",
      isScrolled ? "py-2 px-4" : "py-6 px-4"
    )}>
      <nav className={cn(
        "h-16 max-w-6xl mx-auto px-6 rounded-xl transition-all duration-300 ease-out flex items-center",
        isScrolled
          ? "header-glass border border-gray-200/50 shadow-sm"
          : "bg-transparent border border-transparent"
      )}>
        <div className="w-full grid grid-cols-[auto_1fr_auto] items-center gap-4">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center hover:opacity-80 transition-opacity duration-200"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/Rus Accountancy Logo .svg"
              alt="RUS Chartered Accountants"
              className="h-16 w-auto"
            />
          </Link>

          {/* Desktop Navigation - Center */}
          <ul className="hidden lg:flex items-center justify-center gap-1">
            <li>
              <ServicesDropdown />
            </li>
            <li>
              <SectorsDropdown />
            </li>
            <li>
              <Link
                href="/who-we-are"
                className="nav-link"
              >
                Who We Are
              </Link>
            </li>
            <li>
              <Link
                href="/insights"
                className="nav-link"
              >
                Insights
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="nav-link"
              >
                Contact
              </Link>
            </li>
          </ul>

          {/* Trailing Actions */}
          <div className="flex items-center gap-2">
            <CommandMenu />
            <a
              href="#"
              className="hidden md:inline-flex items-center justify-center px-6 py-1.5 rounded-full text-sm font-medium text-white bg-gray-900 hover:bg-gray-800 transition-all duration-200 shadow-sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              Portal
            </a>

            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden p-2 rounded hover:bg-[rgba(5,21,36,0.06)] active:bg-[rgba(11,18,14,0.14)] transition-colors duration-100 ease-out focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2684ff]"
              onClick={handleToggleMenu}
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

      </nav>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="header-glass lg:hidden mt-2 mx-4 rounded-xl border border-gray-200/50 shadow-lg">
          <ul className="px-4 py-3 space-y-1">
              <li>
                <Link
                  href="/services"
                  className="nav-link-mobile"
                  onClick={handleToggleMenu}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/sectors"
                  className="nav-link-mobile"
                  onClick={handleToggleMenu}
                >
                  Sectors
                </Link>
              </li>
              <li>
                <Link
                  href="/who-we-are"
                  className="nav-link-mobile"
                  onClick={handleToggleMenu}
                >
                  Who We Are
                </Link>
              </li>
              <li>
                <Link
                  href="/insights"
                  className="nav-link-mobile"
                  onClick={handleToggleMenu}
                >
                  Insights
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="nav-link-mobile"
                  onClick={handleToggleMenu}
                >
                  Contact
                </Link>
              </li>
              <li className="pt-2 border-t border-gray-200">
                <a
                  href="#"
                  className="block px-6 py-1.5 rounded-full text-sm font-medium text-white bg-gray-900 hover:bg-gray-800 text-center transition-all duration-200 shadow-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Portal
                </a>
              </li>
          </ul>
        </div>
      )}
    </header>
  );
}
