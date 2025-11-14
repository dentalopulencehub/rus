'use client';

import Link from 'next/link';

export function BottomBar() {
  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 w-auto">
      <div className="bg-[#01458f] rounded-full shadow-lg border border-white/10 px-6 py-2 flex items-center justify-center gap-8">
        <Link
          href="/"
          className="text-white/90 hover:text-white transition-colors"
          aria-label="Home"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
        </Link>
        <Link
          href="/services"
          className="text-sm font-medium text-white/90 hover:text-white transition-colors"
        >
          Services
        </Link>
        <Link
          href="/contact"
          className="text-sm font-medium text-white/90 hover:text-white transition-colors"
        >
          Contact
        </Link>
      </div>
    </div>
  );
}
