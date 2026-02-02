'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface StickyMiniNavProps {
  links: Array<{
    label: string;
    href: string;
  }>;
}

export function StickyMiniNav({ links }: StickyMiniNavProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      // Show as soon as user starts scrolling
      setIsVisible(window.scrollY > 50);

      // Determine active section - find the section closest to the top of viewport
      const sections = links
        .map(link => link.href.replace('#', ''))
        .filter(href => href); // Filter out non-hash links

      let closestSection = '';
      let closestDistance = Infinity;

      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Calculate distance from top of viewport (accounting for header)
          const distance = Math.abs(rect.top - 100);

          // If this section is in viewport and closer than previous
          if (rect.top <= window.innerHeight && rect.bottom >= 0 && distance < closestDistance) {
            closestDistance = distance;
            closestSection = section;
          }
        }
      });

      if (closestSection) {
        setActiveSection(closestSection);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Check initial state
    return () => window.removeEventListener('scroll', handleScroll);
  }, [links]);

  const handleLinkClick = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.getElementById(href.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <nav
      className={`fixed right-6 bottom-20 md:top-1/2 md:-translate-y-1/2 md:bottom-auto z-40 transition-all duration-500 ease-out ${
        isVisible ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 translate-x-12 scale-95 pointer-events-none'
      }`}
      style={{
        transitionTimingFunction: isVisible ? 'cubic-bezier(0.34, 1.56, 0.64, 1)' : 'ease-out'
      }}
      aria-label="Table of contents"
    >
      <div
        className={`relative border-2 border-white/20 shadow-lg transition-all duration-300 overflow-hidden ${
          isExpanded ? 'px-3 py-2 rounded-xl' : 'p-2 rounded-full'
        }`}
      >
        {/* Layer 1: Glassmorphic backdrop */}
        <div className="absolute inset-0 -z-10 before:absolute before:inset-0 before:backdrop-blur-xl before:backdrop-saturate-150" />

        {/* Layer 2: Gradient shimmer */}
        <div className={`absolute inset-0 -z-20 bg-gradient-to-br from-white/10 via-transparent to-white/5 ${isExpanded ? 'rounded-xl' : 'rounded-full'}`} />

        {/* Layer 3: Solid background */}
        <div className={`absolute inset-0 -z-30 bg-white/70 ${isExpanded ? 'rounded-xl' : 'rounded-full'}`} />

        <div className="relative z-10">
        {/* Toggle Button */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className={`flex items-center gap-1.5 text-xs font-medium text-gray-600 hover:text-gray-900 transition-colors ${
            isExpanded ? 'mb-2' : ''
          }`}
          aria-expanded={isExpanded}
          aria-label="Toggle table of contents"
        >
          <div className={`w-5 h-5 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors ${
            isExpanded ? '' : 'bg-gray-50'
          }`}>
            <ChevronRight
              className={`w-3 h-3 transition-transform duration-200 ${
                isExpanded ? 'rotate-90' : ''
              }`}
            />
          </div>
          {isExpanded && <span className="text-xs">Navigate</span>}
        </button>

        {/* Navigation Links - Minimal */}
        {isExpanded && (
          <ul className="space-y-1">
            {links.map((link) => {
              const isActive = `#${activeSection}` === link.href;
              const isExternal = !link.href.startsWith('#');

              return (
                <li key={link.href}>
                  {isExternal ? (
                    <Link
                      href={link.href}
                      className={`flex items-center gap-1.5 text-xs py-1 px-2 rounded-md transition-all duration-150 ${
                        isActive
                          ? 'bg-[#01458f] text-white font-medium'
                          : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                      }`}
                    >
                      <span className={`w-1 h-1 rounded-full flex-shrink-0 ${
                        isActive ? 'bg-white' : 'bg-gray-400'
                      }`} />
                      <span className="truncate">{link.label}</span>
                    </Link>
                  ) : (
                    <button
                      onClick={() => handleLinkClick(link.href)}
                      className={`w-full flex items-center gap-1.5 text-xs py-1 px-2 rounded-md transition-all duration-150 text-left ${
                        isActive
                          ? 'bg-[#01458f] text-white font-medium'
                          : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                      }`}
                    >
                      <span className={`w-1 h-1 rounded-full flex-shrink-0 ${
                        isActive ? 'bg-white' : 'bg-gray-400'
                      }`} />
                      <span className="truncate">{link.label}</span>
                    </button>
                  )}
                </li>
              );
            })}
          </ul>
        )}

        {/* Minimal progress dots when collapsed */}
        {!isExpanded && (
          <div className="flex flex-col gap-1.5 mt-2">
            {links.map((link, index) => {
              const isActive = `#${activeSection}` === link.href;
              return (
                <button
                  key={link.href}
                  onClick={() => handleLinkClick(link.href)}
                  className="group relative"
                  title={link.label}
                  aria-label={link.label}
                >
                  <span className={`block w-1 h-1 rounded-full transition-all duration-200 ${
                    isActive
                      ? 'bg-[#01458f] scale-150'
                      : 'bg-gray-300 group-hover:bg-gray-400 group-hover:scale-125'
                  }`} />
                </button>
              );
            })}
          </div>
        )}
        </div>
      </div>
    </nav>
  );
}
