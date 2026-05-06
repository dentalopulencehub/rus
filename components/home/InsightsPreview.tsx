'use client';

import { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import { getHomePageInsights, formatDate } from '@/lib/insights-helpers';
import { InsightCardVisual } from '@/components/insights/InsightCardVisual';

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
                className="group flex-none w-[85vw] sm:w-[420px] snap-start touch-manipulation"
              >
                <div className="h-full min-h-[480px] rounded-2xl border border-gray-200 bg-white hover:shadow-2xl hover:border-[#01458f] transition-all duration-300 overflow-hidden flex flex-col">
                  {/* Generative Visual */}
                  <div className="h-56 overflow-hidden">
                    <InsightCardVisual
                      slug={insight.slug}
                      categorySlug={insight.category.slug}
                      className="w-full h-full group-hover:scale-105 transition-transform duration-300"
                    />
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
