'use client';

import Link from 'next/link';

interface CTASimpleProps {
  heading?: string;
  supportingText?: string;
  buttonText?: string;
  buttonHref?: string;
}

export function CTASimple({
  heading = "Ready to take control of your tax affairs?",
  supportingText = "Expert tax advice tailored to your needs",
  buttonText = "Contact Us",
  buttonHref = "/contact"
}: CTASimpleProps) {
  return (
    <section className="w-full flex items-center justify-center bg-white px-4 py-24 pt-32">
      <div className="max-w-6xl mx-auto w-full">
        {/* Blue gradient card with growth curves */}
        <div className="relative bg-gradient-to-br from-[#01458f] to-[#0052cc] rounded-3xl overflow-hidden px-8 md:px-16 py-20 md:py-28">
          {/* SVG Background - Converging Growth (5 Curves with Depth) */}
          <svg
            className="absolute top-0 left-0 w-full h-full pointer-events-none"
            viewBox="0 0 1000 500"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ zIndex: 0, opacity: 0.12 }}
          >
            {/* Curve 1 (Bottom) - Thickest, deepest swoop */}
            <path
              d="M 0,490 Q 320,600 1000,90"
              stroke="#FFFFFF"
              strokeWidth="2"
              fill="none"
            />
            {/* Curve 2 - Second layer */}
            <path
              d="M 0,410 Q 380,520 1000,85"
              stroke="#FFFFFF"
              strokeWidth="1.75"
              fill="none"
            />
            {/* Curve 3 (Middle) - Medium weight */}
            <path
              d="M 0,330 Q 440,420 1000,80"
              stroke="#FFFFFF"
              strokeWidth="1.5"
              fill="none"
            />
            {/* Curve 4 - Second from top */}
            <path
              d="M 0,250 Q 500,320 1000,75"
              stroke="#FFFFFF"
              strokeWidth="1.25"
              fill="none"
            />
            {/* Curve 5 (Top) - Thinnest, gentlest curve */}
            <path
              d="M 0,170 Q 560,220 1000,70"
              stroke="#FFFFFF"
              strokeWidth="1"
              fill="none"
            />
          </svg>

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center text-center space-y-6">
            {/* Main Heading */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight">
              {heading}
            </h2>

            {/* CTA Button */}
            <Link
              href={buttonHref}
              className="relative inline-flex items-center justify-center px-8 py-3 bg-white text-gray-900 rounded-full text-sm font-medium hover:shadow-2xl hover:shadow-white/30 transition-all duration-300 overflow-hidden group"
            >
              {/* Layer 1: Glassmorphic backdrop */}
              <div className="absolute inset-0 -z-10 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-md backdrop-saturate-150" />

              {/* Layer 2: Gradient shimmer */}
              <div className="absolute inset-0 -z-20 bg-gradient-to-br from-white/30 via-white/10 to-white/30 rounded-full opacity-0 group-hover:opacity-40 transition-all duration-300" />

              {/* Layer 3: Solid background */}
              <div className="absolute inset-0 -z-30 bg-white rounded-full transition-all duration-300 group-hover:bg-white/95" />

              <span className="relative z-10">{buttonText}</span>
            </Link>

            {/* Supporting Text */}
            <p className="text-white/90 text-sm md:text-base">
              {supportingText}
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
