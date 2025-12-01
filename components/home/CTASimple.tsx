'use client';

import Link from 'next/link';

export function CTASimple() {
  return (
    <section className="w-full flex items-center justify-center bg-white px-4 py-24 pt-32">
      <div className="max-w-6xl mx-auto w-full">
        {/* Blue gradient card with geometric pattern */}
        <div className="relative bg-gradient-to-br from-[#01458f] to-[#0052cc] rounded-3xl overflow-hidden px-8 md:px-16 py-20 md:py-28">
          {/* Geometric Pattern Background */}
          <svg
            className="absolute inset-0 w-full h-full opacity-20"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Top right circular arc */}
            <path
              d="M 600 -100 Q 800 100 850 300"
              stroke="white"
              strokeWidth="2"
              fill="none"
            />
            <circle cx="750" cy="150" r="80" stroke="white" strokeWidth="1.5" fill="none" />

            {/* Angular geometric shapes - top right */}
            <path d="M 700 50 L 850 80 L 820 200" stroke="white" strokeWidth="1.5" fill="none" />
            <path d="M 650 120 L 750 100 L 730 180 L 640 190 Z" stroke="white" strokeWidth="1" fill="none" />

            {/* Bottom left abstract shapes */}
            <path
              d="M -50 400 Q 100 450 200 480"
              stroke="white"
              strokeWidth="2"
              fill="none"
            />
            <circle cx="100" cy="420" r="60" stroke="white" strokeWidth="1.5" fill="none" />
            <path d="M 50 380 L 180 400 L 160 480" stroke="white" strokeWidth="1.5" fill="none" />

            {/* Additional geometric accents */}
            <line x1="400" y1="50" x2="500" y2="80" stroke="white" strokeWidth="1" opacity="0.5" />
            <line x1="300" y1="400" x2="400" y2="420" stroke="white" strokeWidth="1" opacity="0.5" />
            <circle cx="500" cy="60" r="30" stroke="white" strokeWidth="1" fill="none" opacity="0.4" />
          </svg>

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center text-center space-y-6">
            {/* Main Heading */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight">
              Ready to take control<br />of your tax affairs?
            </h2>

            {/* CTA Button */}
            <Link
              href="/contact"
              className="relative inline-flex items-center justify-center px-8 py-3 bg-white text-gray-900 rounded-full text-sm font-medium hover:shadow-2xl hover:shadow-white/30 transition-all duration-300 overflow-hidden group"
            >
              {/* Layer 1: Glassmorphic backdrop */}
              <div className="absolute inset-0 -z-10 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-md backdrop-saturate-150" />

              {/* Layer 2: Gradient shimmer */}
              <div className="absolute inset-0 -z-20 bg-gradient-to-br from-white/30 via-white/10 to-white/30 rounded-full opacity-0 group-hover:opacity-40 transition-all duration-300" />

              {/* Layer 3: Solid background */}
              <div className="absolute inset-0 -z-30 bg-white rounded-full transition-all duration-300 group-hover:bg-white/95" />

              <span className="relative z-10">Contact Us</span>
            </Link>

            {/* Supporting Text */}
            <p className="text-white/90 text-sm md:text-base">
              Expert tax advice tailored to your needs
            </p>

            {/* Contact Details */}
            <div className="flex flex-col items-center justify-center gap-3 text-white/70 text-sm mt-4">
              {/* Row 1: Phone and Email */}
              <div className="flex flex-col md:flex-row items-center gap-3 md:gap-6">
                <a
                  href="tel:01217771200"
                  className="flex items-center gap-2 hover:text-white transition-colors duration-200"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>0121 777 1200</span>
                </a>
                <span className="hidden md:inline">•</span>
                <a
                  href="mailto:info@rus.co.uk"
                  className="flex items-center gap-2 hover:text-white transition-colors duration-200"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>info@rus.co.uk</span>
                </a>
              </div>

              {/* Row 2: Address */}
              <div className="flex items-center gap-2 text-center">
                <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>1190A-1192 Stratford Road, Hall Green, Birmingham, B28 8AB</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
