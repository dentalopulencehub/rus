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
          <div className="relative z-10 flex flex-col items-center text-center space-y-8">
            {/* Main Heading */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight">
              Streamline. Optimize. Succeed
            </h2>

            {/* CTA Button */}
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 rounded-full text-base md:text-lg font-semibold hover:bg-gray-50 transition-all duration-200"
            >
              Book Your Free Consultation
            </Link>

            {/* Supporting Text */}
            <p className="text-white/90 text-sm md:text-base">
              Expert advice tailored to your business needs
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
