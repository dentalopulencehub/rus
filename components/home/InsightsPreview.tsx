'use client';

import { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import { getHomePageInsights, formatDate } from '@/lib/insights-helpers';

const FinanceSVG = ({ type }: { type: string }) => {
  switch (type) {
    case 'tax':
      return (
        <svg className="w-full h-full" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="taxGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#01458f" stopOpacity="0.25"/>
              <stop offset="50%" stopColor="#BBDEFB" stopOpacity="0.15"/>
              <stop offset="100%" stopColor="#01458f" stopOpacity="0.08"/>
            </linearGradient>
            <linearGradient id="taxGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#BBDEFB" stopOpacity="0.3"/>
              <stop offset="100%" stopColor="#01458f" stopOpacity="0.12"/>
            </linearGradient>
          </defs>
          {/* Floating abstract shapes - glassmorphism */}
          <ellipse cx="70" cy="60" rx="35" ry="40" fill="url(#taxGrad1)" transform="rotate(-25 70 60)" opacity="0.6"/>
          <ellipse cx="130" cy="140" rx="40" ry="35" fill="url(#taxGrad2)" transform="rotate(35 130 140)" opacity="0.5"/>
          {/* Abstract percentage - deconstructed */}
          <circle cx="65" cy="65" r="12" fill="none" stroke="#01458f" strokeWidth="2" opacity="0.35"/>
          <circle cx="135" cy="135" r="12" fill="none" stroke="#01458f" strokeWidth="2" opacity="0.35"/>
          <path d="M70 70 L130 130" stroke="#01458f" strokeWidth="2" strokeLinecap="round" opacity="0.3" strokeDasharray="4 4"/>
          {/* Floating geometric accents */}
          <rect x="45" y="45" width="22" height="22" rx="4" fill="#BBDEFB" opacity="0.25" transform="rotate(-15 56 56)"/>
          <rect x="133" y="133" width="22" height="22" rx="4" fill="#01458f" opacity="0.2" transform="rotate(20 144 144)"/>
          {/* Abstract rings */}
          <circle cx="100" cy="100" r="55" fill="none" stroke="#01458f" strokeWidth="0.5" opacity="0.15" strokeDasharray="8 8"/>
          {/* Accent dots - color pops */}
          <circle cx="65" cy="65" r="3" fill="#01458f" opacity="0.6"/>
          <circle cx="135" cy="135" r="3" fill="#BBDEFB" opacity="0.8"/>
          <circle cx="50" cy="100" r="2" fill="#01458f" opacity="0.5"/>
          <circle cx="150" cy="100" r="2" fill="#BBDEFB" opacity="0.7"/>
        </svg>
      );

    case 'growth':
      return (
        <svg className="w-full h-full" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="growthGrad1" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#BBDEFB" stopOpacity="0.35"/>
              <stop offset="100%" stopColor="#01458f" stopOpacity="0.2"/>
            </linearGradient>
            <linearGradient id="growthGrad2" x1="50%" y1="100%" x2="50%" y2="0%">
              <stop offset="0%" stopColor="#01458f" stopOpacity="0.15"/>
              <stop offset="100%" stopColor="#BBDEFB" stopOpacity="0.25"/>
            </linearGradient>
          </defs>
          {/* Abstract layered shapes - growth concept */}
          <path d="M30 160 Q60 140 90 130 L90 170 Q60 165 30 170 Z" fill="url(#growthGrad1)" opacity="0.6"/>
          <path d="M70 160 Q95 120 120 100 L120 170 Q95 160 70 170 Z" fill="#BBDEFB" opacity="0.4"/>
          <path d="M110 160 Q130 90 150 60 L150 170 Q130 155 110 170 Z" fill="url(#growthGrad2)" opacity="0.5"/>
          {/* Abstract trend curve - organic */}
          <path d="M25 150 Q70 110 120 70 T175 30" stroke="#01458f" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.35" strokeDasharray="3 3"/>
          <path d="M25 150 Q70 110 120 70 T175 30" stroke="#01458f" strokeWidth="3" strokeLinecap="round" fill="none" opacity="0.25"/>
          {/* Floating accent circles */}
          <circle cx="175" cy="30" r="8" fill="#01458f" opacity="0.3"/>
          <circle cx="175" cy="30" r="14" fill="none" stroke="#01458f" strokeWidth="1" opacity="0.2"/>
          {/* Abstract arrow element */}
          <path d="M165 15 L175 30 L165 25 Z" fill="#BBDEFB" opacity="0.5"/>
          {/* Accent highlights - trend points */}
          <circle cx="25" cy="150" r="3" fill="#BBDEFB" opacity="0.7"/>
          <circle cx="70" cy="110" r="3" fill="#01458f" opacity="0.6"/>
          <circle cx="120" cy="70" r="3" fill="#BBDEFB" opacity="0.8"/>
          <circle cx="175" cy="30" r="4" fill="#01458f" opacity="0.7"/>
        </svg>
      );

    case 'digital':
      return (
        <svg className="w-full h-full" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="digitalGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#BBDEFB" stopOpacity="0.4"/>
              <stop offset="100%" stopColor="#01458f" stopOpacity="0.15"/>
            </linearGradient>
            <radialGradient id="digitalRadial">
              <stop offset="0%" stopColor="#01458f" stopOpacity="0.2"/>
              <stop offset="100%" stopColor="#01458f" stopOpacity="0"/>
            </radialGradient>
          </defs>
          {/* Central glow */}
          <circle cx="100" cy="100" r="70" fill="url(#digitalRadial)"/>
          {/* Abstract floating nodes */}
          <circle cx="100" cy="50" r="18" fill="url(#digitalGrad1)" opacity="0.7"/>
          <circle cx="60" cy="120" r="14" fill="#BBDEFB" opacity="0.35"/>
          <circle cx="140" cy="120" r="14" fill="#BBDEFB" opacity="0.35"/>
          <circle cx="100" cy="155" r="11" fill="#01458f" opacity="0.25"/>
          {/* Connecting mesh - organic */}
          <path d="M100 68 Q80 85 60 120" stroke="#01458f" strokeWidth="0.8" opacity="0.2" fill="none"/>
          <path d="M100 68 Q120 85 140 120" stroke="#01458f" strokeWidth="0.8" opacity="0.2" fill="none"/>
          <path d="M60 134 Q80 145 100 155" stroke="#01458f" strokeWidth="0.8" opacity="0.2" fill="none"/>
          <path d="M140 134 Q120 145 100 155" stroke="#01458f" strokeWidth="0.8" opacity="0.2" fill="none"/>
          {/* Abstract geometric overlays */}
          <rect x="85" y="35" width="30" height="30" rx="6" fill="none" stroke="#01458f" strokeWidth="1" opacity="0.2" transform="rotate(15 100 50)"/>
          <polygon points="95,25 105,25 100,15" fill="#BBDEFB" opacity="0.4"/>
          {/* Floating particles with color accents */}
          <circle cx="75" cy="75" r="3" fill="#01458f" opacity="0.5"/>
          <circle cx="125" cy="85" r="2.5" fill="#BBDEFB" opacity="0.7"/>
          <circle cx="85" cy="140" r="2.5" fill="#01458f" opacity="0.4"/>
          {/* Node highlights */}
          <circle cx="100" cy="50" r="4" fill="#01458f" opacity="0.6"/>
          <circle cx="60" cy="120" r="3" fill="#BBDEFB" opacity="0.6"/>
          <circle cx="140" cy="120" r="3" fill="#01458f" opacity="0.5"/>
        </svg>
      );

    case 'cashflow':
      return (
        <svg className="w-full h-full" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="flowGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#01458f" stopOpacity="0.22"/>
              <stop offset="100%" stopColor="#BBDEFB" stopOpacity="0.18"/>
            </linearGradient>
            <linearGradient id="flowGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#BBDEFB" stopOpacity="0.28"/>
              <stop offset="100%" stopColor="#01458f" stopOpacity="0.12"/>
            </linearGradient>
          </defs>
          {/* Abstract fluid waves - organic motion */}
          <path d="M0 90 Q50 60 100 85 T200 90" fill="url(#flowGrad1)" opacity="0.5"/>
          <path d="M0 115 Q50 85 100 110 T200 115" fill="url(#flowGrad2)" opacity="0.4"/>
          <path d="M0 140 Q50 110 100 135 T200 140" fill="#BBDEFB" opacity="0.25"/>
          {/* Layered abstract blocks - glassmorphism */}
          <rect x="50" y="30" width="100" height="18" rx="9" fill="url(#flowGrad1)" opacity="0.6"/>
          <rect x="60" y="53" width="80" height="18" rx="9" fill="url(#flowGrad2)" opacity="0.5"/>
          <rect x="70" y="76" width="60" height="18" rx="9" fill="#01458f" opacity="0.15"/>
          {/* Abstract currency representation */}
          <circle cx="100" cy="162" r="22" fill="none" stroke="#01458f" strokeWidth="1" opacity="0.25"/>
          <circle cx="100" cy="162" r="15" fill="#BBDEFB" opacity="0.12"/>
          <path d="M95 155 Q100 152 105 155" stroke="#01458f" strokeWidth="1.5" opacity="0.3" fill="none"/>
          <path d="M95 169 Q100 172 105 169" stroke="#01458f" strokeWidth="1.5" opacity="0.3" fill="none"/>
          <line x1="100" y1="156" x2="100" y2="168" stroke="#01458f" strokeWidth="2" opacity="0.35"/>
          {/* Flow accent dots */}
          <circle cx="50" cy="60" r="2.5" fill="#BBDEFB" opacity="0.7"/>
          <circle cx="100" cy="85" r="2.5" fill="#01458f" opacity="0.6"/>
          <circle cx="150" cy="62" r="2" fill="#BBDEFB" opacity="0.6"/>
          {/* Layer edge highlights */}
          <circle cx="145" cy="39" r="2" fill="#01458f" opacity="0.5"/>
          <circle cx="135" cy="62" r="2" fill="#BBDEFB" opacity="0.7"/>
        </svg>
      );

    case 'investment':
      return (
        <svg className="w-full h-full" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="investGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#01458f" stopOpacity="0.28"/>
              <stop offset="100%" stopColor="#BBDEFB" stopOpacity="0.12"/>
            </linearGradient>
            <linearGradient id="investGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#BBDEFB" stopOpacity="0.35"/>
              <stop offset="100%" stopColor="#01458f" stopOpacity="0.15"/>
            </linearGradient>
            <linearGradient id="investGrad3" x1="50%" y1="0%" x2="50%" y2="100%">
              <stop offset="0%" stopColor="#01458f" stopOpacity="0.2"/>
              <stop offset="100%" stopColor="#BBDEFB" stopOpacity="0.25"/>
            </linearGradient>
          </defs>
          {/* Abstract segmented circle - deconstructed */}
          <circle cx="100" cy="100" r="60" fill="none" stroke="#01458f" strokeWidth="0.5" opacity="0.12" strokeDasharray="10 5"/>
          {/* Floating segments */}
          <path d="M100 100 L100 40 A60 60 0 0 1 151.96 70 L100 100" fill="url(#investGrad1)" opacity="0.6"/>
          <path d="M100 100 L151.96 70 A60 60 0 0 1 151.96 130 L100 100" fill="url(#investGrad2)" opacity="0.5"/>
          <path d="M100 100 L151.96 130 A60 60 0 0 1 100 160 L100 100" fill="#01458f" opacity="0.15"/>
          <path d="M100 100 L100 160 A60 60 0 0 1 48.04 130 L100 100" fill="url(#investGrad3)" opacity="0.4"/>
          <path d="M100 100 L48.04 130 A60 60 0 0 1 48.04 70 L100 100" fill="#BBDEFB" opacity="0.28"/>
          <path d="M100 100 L48.04 70 A60 60 0 0 1 100 40 L100 100" fill="#01458f" opacity="0.22"/>
          {/* Center glassmorphic element */}
          <circle cx="100" cy="100" r="35" fill="white" opacity="0.85"/>
          <circle cx="100" cy="100" r="26" fill="none" stroke="#01458f" strokeWidth="0.5" opacity="0.25"/>
          <circle cx="100" cy="100" r="18" fill="none" stroke="#BBDEFB" strokeWidth="0.5" opacity="0.3" strokeDasharray="2 2"/>
          {/* Abstract growth symbol */}
          <path d="M90 95 L100 82 L110 95" stroke="#01458f" strokeWidth="2" opacity="0.35" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
          <line x1="100" y1="82" x2="100" y2="110" stroke="#01458f" strokeWidth="1.5" opacity="0.25"/>
          {/* Segment accent dots */}
          <circle cx="100" cy="40" r="3" fill="#01458f" opacity="0.6"/>
          <circle cx="151.96" cy="70" r="2.5" fill="#BBDEFB" opacity="0.7"/>
          <circle cx="151.96" cy="130" r="2.5" fill="#01458f" opacity="0.5"/>
          <circle cx="100" cy="160" r="2.5" fill="#BBDEFB" opacity="0.6"/>
          <circle cx="48.04" cy="130" r="2.5" fill="#01458f" opacity="0.5"/>
          <circle cx="48.04" cy="70" r="2.5" fill="#BBDEFB" opacity="0.7"/>
        </svg>
      );

    default:
      return null;
  }
};

export function InsightsPreview() {
  const insights = getHomePageInsights(5);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    const container = scrollContainerRef.current;
    if (!container) return;

    setCanScrollLeft(container.scrollLeft > 0);
    setCanScrollRight(
      container.scrollLeft < container.scrollWidth - container.clientWidth - 10
    );
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    checkScroll();
    container.addEventListener('scroll', checkScroll);
    window.addEventListener('resize', checkScroll);

    return () => {
      container.removeEventListener('scroll', checkScroll);
      window.removeEventListener('resize', checkScroll);
    };
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const scrollAmount = 450;
    container.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="mb-12 flex items-end justify-between">
          <div>
            <h2 className="text-3xl md:text-4xl font-light italic text-gray-900 mb-3 tracking-tight">
              Financial Insights & Updates
            </h2>
            <p className="text-base text-gray-600 max-w-2xl">
              Stay informed with expert advice, industry updates, and practical financial guidance
            </p>
          </div>
          <Link
            href="/insights"
            className="hidden md:inline-flex items-center gap-2 text-sm font-medium text-[#01458f] hover:text-[#0052cc] transition-colors"
          >
            View all insights
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        {/* Horizontal Scrolling Insights Container */}
        <div className="relative -mx-4 px-4">
          {/* Left Scroll Button */}
          {canScrollLeft && (
            <button
              onClick={() => scroll('left')}
              className="absolute left-8 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white border border-gray-200 shadow-lg flex items-center justify-center hover:bg-gray-50 hover:shadow-xl transition-all duration-200"
              aria-label="Scroll left"
            >
              <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )}

          {/* Right Scroll Button */}
          {canScrollRight && (
            <button
              onClick={() => scroll('right')}
              className="absolute right-8 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white border border-gray-200 shadow-lg flex items-center justify-center hover:bg-gray-50 hover:shadow-xl transition-all duration-200"
              aria-label="Scroll right"
            >
              <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )}

          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto py-6 scroll-smooth snap-x snap-mandatory hide-scrollbar"
          >
            {insights.map((insight) => (
              <Link
                key={insight.slug}
                href={`/insights/${insight.slug}`}
                className="group flex-none w-[420px] snap-start"
              >
                <div className="h-full min-h-[480px] rounded-2xl border border-gray-200 bg-white hover:shadow-2xl hover:border-[#01458f] transition-all duration-300 overflow-hidden flex flex-col">
                  {/* SVG Illustration - Large and Prominent */}
                  <div className="h-56 bg-gradient-to-br from-gray-50 to-white flex items-center justify-center border-b border-gray-100 group-hover:from-[#BBDEFB]/20 group-hover:to-white transition-all duration-300">
                    <div className="w-48 h-48 group-hover:scale-110 transition-transform duration-300">
                      <FinanceSVG type={insight.homePageDisplay?.svgType || 'tax'} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8 flex flex-col flex-grow">
                    {/* Category Badge */}
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gray-100 rounded-full mb-4 self-start group-hover:bg-[#BBDEFB] transition-colors duration-300">
                      <span className="text-xs font-medium text-gray-700">{insight.category.name}</span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-gray-900 mb-3 leading-snug group-hover:text-[#01458f] transition-colors duration-300">
                      {insight.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-sm text-gray-600 leading-relaxed mb-6 flex-grow">
                      {insight.excerpt}
                    </p>

                    {/* Divider */}
                    <div className="border-t border-gray-200 mb-4 group-hover:border-[#01458f]/30 transition-colors duration-300"></div>

                    {/* Footer */}
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span>{formatDate(insight.publishedAt)}</span>
                      <span>{insight.readTime} min read</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* View all link for mobile */}
        <div className="md:hidden mt-8 text-center">
          <Link
            href="/insights"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#01458f] hover:text-[#0052cc] transition-colors"
          >
            View all insights
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>

      <style jsx>{`
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
