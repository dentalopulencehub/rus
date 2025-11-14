'use client';

import { useRef, useState, useEffect } from 'react';

const placeholderReviews = [
  {
    name: 'John Smith',
    rating: 5,
    date: '2 weeks ago',
    text: 'Excellent service! The team at RUS Accountants provided expert guidance on our tax planning. Highly professional and responsive.',
    avatar: 'JS',
  },
  {
    name: 'Sarah Johnson',
    rating: 5,
    date: '1 month ago',
    text: 'Been using RUS for 5 years now. They handle everything from bookkeeping to year-end accounts. Couldn\'t recommend them more highly.',
    avatar: 'SJ',
  },
  {
    name: 'Michael Brown',
    rating: 5,
    date: '3 months ago',
    text: 'Very knowledgeable team. They helped us navigate complex VAT issues and saved us a significant amount. Great value for money.',
    avatar: 'MB',
  },
  {
    name: 'Emma Wilson',
    rating: 5,
    date: '1 month ago',
    text: 'Professional, efficient, and always available when we need advice. RUS has been instrumental in our business growth.',
    avatar: 'EW',
  },
  {
    name: 'David Lee',
    rating: 5,
    date: '2 months ago',
    text: 'Outstanding accountancy firm. They go above and beyond to ensure everything is compliant and optimized for our business.',
    avatar: 'DL',
  },
  {
    name: 'Rachel Green',
    rating: 5,
    date: '3 weeks ago',
    text: 'Switched to RUS last year and haven\'t looked back. Clear communication and proactive advice that actually saves us money.',
    avatar: 'RG',
  },
];

export function ReviewsSlider() {
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

    const scrollAmount = 400;
    container.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-3">
            <svg viewBox="0 0 24 24" className="w-8 h-8">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
              Google Reviews
            </h2>
          </div>
          <div className="flex items-center gap-2 mb-1">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-yellow-400 fill-current">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>
            <span className="text-gray-700 text-sm font-semibold">5.0</span>
            <span className="text-gray-500 text-sm">· 50+ reviews</span>
          </div>
        </div>

        {/* Horizontal Scrolling Reviews Container */}
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
            {placeholderReviews.map((review, index) => (
              <div
                key={index}
                className="flex-none w-[380px] snap-start"
              >
                <div className="h-full min-h-[280px] p-8 rounded-2xl border border-gray-200 bg-gradient-to-br from-white to-gray-50 hover:shadow-xl hover:border-gray-300 transition-all duration-300 flex flex-col">
                  {/* Quote Icon */}
                  <div className="mb-4">
                    <svg className="w-8 h-8 text-[#01458f]/20" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/>
                    </svg>
                  </div>

                  {/* Review Text */}
                  <p className="text-base text-gray-700 leading-relaxed mb-6 flex-grow">
                    "{review.text}"
                  </p>

                  {/* Divider */}
                  <div className="border-t border-gray-200 mb-4"></div>

                  {/* Footer */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      {/* Avatar */}
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#01458f] to-[#0052cc] flex items-center justify-center text-white font-bold text-sm shadow-md">
                        {review.avatar}
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 text-sm">{review.name}</h3>
                        <p className="text-xs text-gray-500">{review.date}</p>
                      </div>
                    </div>

                    {/* Rating */}
                    <div className="flex gap-0.5">
                      {[...Array(review.rating)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 text-yellow-400 fill-current">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
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
