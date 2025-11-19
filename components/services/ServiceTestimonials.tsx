'use client';

import { useRef, useState, useEffect } from 'react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company?: string;
  quote: string;
  featured?: boolean;
}

interface ServiceTestimonialsProps {
  title?: string;
  subtitle?: string;
  testimonials: Testimonial[];
}

export function ServiceTestimonials({
  title = "Client Testimonials",
  subtitle = "Hear from businesses and individuals we've supported",
  testimonials
}: ServiceTestimonialsProps) {
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
    <section className="py-24 bg-gray-50 overflow-visible">
      <div className="max-w-6xl mx-auto px-4 overflow-visible">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 tracking-tight">
            {title}
          </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* Horizontal Scrolling Testimonials Container */}
        <div className="relative overflow-visible">
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
            className="flex gap-6 overflow-x-auto overflow-y-visible py-12 px-1 scroll-smooth snap-x snap-mandatory hide-scrollbar"
          >
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="group flex-none w-[420px] snap-start"
              >
                <div className="h-full min-h-[400px] rounded-2xl border border-gray-200 bg-white hover:shadow-2xl hover:border-[#01458f] transition-all duration-300 flex flex-col p-8">
                  {/* Quote Icon */}
                  <div className="mb-6">
                    <svg className="w-10 h-10 text-[#01458f] opacity-20 group-hover:opacity-30 transition-opacity duration-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>

                  {/* Quote Text */}
                  <div className="flex-grow mb-6">
                    <p className="text-sm text-gray-700 leading-relaxed line-clamp-[12]">
                      {testimonial.quote}
                    </p>
                  </div>

                  {/* Divider */}
                  <div className="border-t border-gray-200 mb-6 group-hover:border-[#01458f]/30 transition-colors duration-300"></div>

                  {/* Client Info */}
                  <div className="space-y-1">
                    <p className="text-base font-bold text-gray-900 group-hover:text-[#01458f] transition-colors duration-300">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-gray-600">
                      {testimonial.role}
                    </p>
                    {testimonial.company && (
                      <p className="text-sm text-gray-500">
                        {testimonial.company}
                      </p>
                    )}
                  </div>

                  {/* Featured Badge */}
                  {testimonial.featured && (
                    <div className="mt-4 inline-flex items-center gap-2 px-3 py-1.5 bg-[#BBDEFB]/30 rounded-full self-start">
                      <svg className="w-3.5 h-3.5 text-[#01458f]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                      <span className="text-xs font-medium text-[#01458f]">Featured Client</span>
                    </div>
                  )}
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
