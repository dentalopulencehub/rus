'use client';

import Link from 'next/link';
import { ServicesDropdown } from './ServicesDropdown';
import { SectorsDropdown } from './SectorsDropdown';
import { CommandMenu } from '@/components/ui/command-menu';
import { useScrollPosition } from '@/hooks/useScrollPosition';
import { cn } from '@/lib/utils';

export function Header() {
  const isScrolled = useScrollPosition(50);

  return (
    <header className={cn(
      "fixed left-0 right-0 top-0 z-50 transition-all duration-300 ease-out",
      isScrolled ? "py-2 px-4" : "py-4 px-4"
    )}>
      <nav className="relative h-[75px] max-w-6xl mx-auto px-4 md:px-8 rounded-xl shadow-lg transition-all duration-300 ease-out flex items-center">
        {/* Layer 1: Glassmorphic backdrop with blur and saturation */}
        <div className="absolute inset-0 -z-10 rounded-xl overflow-hidden before:absolute before:inset-0 before:backdrop-blur-xl before:backdrop-saturate-150" />

        {/* Layer 2: Colored gradient background */}
        <div className="absolute inset-0 -z-20 bg-gradient-to-br from-white/10 via-transparent to-white/5 rounded-xl overflow-hidden" />

        {/* Layer 3: Solid background base */}
        <div className="absolute inset-0 -z-30 bg-white/70 rounded-xl overflow-hidden" />

        <div className="relative z-10 w-full grid grid-cols-[auto_1fr_auto] items-center gap-2 md:gap-4">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center hover:opacity-80 transition-opacity duration-200"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/RUS logo.svg"
              alt="RUS Chartered Accountants"
              className="h-[57px] w-auto"
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
              <Link href="/contact" className="nav-link">
                Contact
              </Link>
            </li>
          </ul>

          {/* Trailing Actions */}
          <div className="flex items-center gap-2 justify-end">
            <CommandMenu />
          </div>
        </div>
      </nav>
    </header>
  );
}
