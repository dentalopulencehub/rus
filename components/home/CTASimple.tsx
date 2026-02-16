'use client';

import { useContactForm } from '@/components/contact/ContactFormContext';

interface CTASimpleProps {
  heading?: string;
  supportingText?: string;
  buttonText?: string;
}

export function CTASimple({
  heading = "Ready to take control of your tax affairs?",
  supportingText = "Expert tax advice tailored to your needs",
  buttonText = "Contact Us",
}: CTASimpleProps) {
  const { openModal } = useContactForm();

  return (
    <section className="w-full flex items-center justify-center bg-white px-4 py-24 pt-32">
      <div className="max-w-6xl mx-auto w-full">
        {/* Blue card with animated flowing lines */}
        <div className="relative bg-gradient-to-br from-[#01458f] to-[#0052cc] rounded-3xl overflow-hidden px-8 md:px-16 py-20 md:py-28">

          {/* Dense flowing contour lines */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 1200 600"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="lg" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
                <stop offset="20%" stopColor="#ffffff" stopOpacity="1" />
                <stop offset="80%" stopColor="#ffffff" stopOpacity="1" />
                <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
              </linearGradient>
            </defs>

            <style>{`
              @keyframes wave {
                0%, 100% { transform: translateY(0px); }
                50% { transform: translateY(-8px); }
              }
              .w { animation: wave 20s ease-in-out infinite; }
              .w:nth-child(odd) { animation-direction: reverse; }
              .w:nth-child(3n) { animation-duration: 24s; }
              .w:nth-child(5n) { animation-duration: 18s; }
              .w:nth-child(7n) { animation-duration: 22s; }
            `}</style>

            <g stroke="url(#lg)" fill="none" strokeWidth="1.5" opacity="0.12">
              <path className="w" d="M-50,20 Q300,26 600,18 T1250,22" />
              <path className="w" d="M-50,38 Q300,43 600,36 T1250,40" />
              <path className="w" d="M-50,56 Q300,60 600,54 T1250,58" />
              <path className="w" d="M-50,74 Q300,77 600,72 T1250,76" />
              <path className="w" d="M-50,92 Q300,94 600,90 T1250,94" />
              <path className="w" d="M-50,110 Q300,112 600,108 T1250,112" />
              <path className="w" d="M-50,128 Q300,129 600,126 T1250,130" />
              <path className="w" d="M-50,146 Q300,146 600,144 T1250,148" />
              <path className="w" d="M-50,164 Q300,163 600,162 T1250,166" />
              <path className="w" d="M-50,182 Q300,180 600,180 T1250,184" />
              <path className="w" d="M-50,200 Q300,197 600,198 T1250,202" />
              <path className="w" d="M-50,218 Q300,214 600,216 T1250,220" />
              <path className="w" d="M-50,236 Q300,231 600,234 T1250,238" />
              <path className="w" d="M-50,254 Q300,248 600,252 T1250,256" />
              <path className="w" d="M-50,272 Q300,265 600,270 T1250,274" />
              <path className="w" d="M-50,290 Q300,282 600,288 T1250,292" />
              <path className="w" d="M-50,308 Q300,299 600,306 T1250,310" />
              <path className="w" d="M-50,326 Q300,316 600,324 T1250,328" />
              <path className="w" d="M-50,344 Q300,333 600,342 T1250,346" />
              <path className="w" d="M-50,362 Q300,350 600,360 T1250,364" />
              <path className="w" d="M-50,380 Q300,367 600,378 T1250,382" />
              <path className="w" d="M-50,398 Q300,384 600,396 T1250,400" />
              <path className="w" d="M-50,416 Q300,401 600,414 T1250,418" />
              <path className="w" d="M-50,434 Q300,418 600,432 T1250,436" />
              <path className="w" d="M-50,452 Q300,435 600,450 T1250,454" />
              <path className="w" d="M-50,470 Q300,452 600,468 T1250,472" />
              <path className="w" d="M-50,488 Q300,469 600,486 T1250,490" />
              <path className="w" d="M-50,506 Q300,486 600,504 T1250,508" />
              <path className="w" d="M-50,524 Q300,503 600,522 T1250,526" />
              <path className="w" d="M-50,542 Q300,520 600,540 T1250,544" />
              <path className="w" d="M-50,560 Q300,537 600,558 T1250,562" />
              <path className="w" d="M-50,578 Q300,554 600,576 T1250,580" />
              <path className="w" d="M-50,596 Q300,571 600,594 T1250,598" />
            </g>
          </svg>

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center text-center space-y-6">
            {/* Main Heading */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight">
              {heading}
            </h2>

            {/* CTA Button */}
            <button
              onClick={openModal}
              className="inline-flex items-center justify-center px-8 py-3 bg-white text-gray-900 rounded-full text-sm font-medium hover:shadow-2xl hover:shadow-white/30 transition-all duration-300"
            >
              {buttonText}
            </button>

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
