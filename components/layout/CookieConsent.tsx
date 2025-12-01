'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { X } from 'lucide-react';

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    // Check if user has already accepted cookies
    const hasAccepted = localStorage.getItem('rus-cookie-consent');
    if (!hasAccepted) {
      // Show banner after 1 second delay
      setTimeout(() => setIsVisible(true), 1000);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('rus-cookie-consent', 'accepted');
    handleClose();
  };

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsVisible(false);
      setIsClosing(false);
    }, 300);
  };

  if (!isVisible) return null;

  return (
    <div
      className={`fixed bottom-24 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-3rem)] max-w-4xl transition-all duration-300 ${
        isClosing ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
      }`}
    >
      {/* Enhanced Glassmorphic Container - matching top menu */}
      <div className="relative">
        {/* Premium glass background - same as top menu */}
        <div className="absolute inset-0 bg-white/[0.85] backdrop-blur-xl rounded-xl border border-[#01458f]/20 shadow-[0_8px_32px_rgba(1,69,143,0.12)]" />

        {/* Subtle gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-white/20 rounded-xl pointer-events-none" />

        {/* Content */}
        <div className="relative px-6 py-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">

            {/* Text Content - Compact */}
            <div className="flex-1 space-y-1">
              <h3 className="text-lg font-semibold text-gray-900">
                We value your privacy
              </h3>
              <p className="text-sm text-gray-600 leading-snug">
                We use essential cookies to ensure our website functions properly.{' '}
                <Link
                  href="/privacy"
                  className="text-[#01458f] hover:text-[#0052cc] font-medium underline underline-offset-2 transition-colors"
                >
                  Privacy Policy
                </Link>
                {' · '}
                <Link
                  href="/cookies"
                  className="text-[#01458f] hover:text-[#0052cc] font-medium underline underline-offset-2 transition-colors"
                >
                  Cookie Policy
                </Link>
                {' · '}
                <Link
                  href="/terms"
                  className="text-[#01458f] hover:text-[#0052cc] font-medium underline underline-offset-2 transition-colors"
                >
                  Terms
                </Link>
              </p>
            </div>

            {/* Action Buttons - Minimal */}
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <button
                onClick={handleAccept}
                className="flex-1 sm:flex-none px-5 py-2 bg-[#01458f] text-white text-sm font-medium rounded-full hover:bg-[#0052cc] transition-colors duration-200 shadow-sm"
              >
                Accept
              </button>
              <button
                onClick={handleClose}
                className="flex-shrink-0 p-2 text-gray-400 hover:text-gray-600 transition-colors rounded-lg hover:bg-gray-100/50"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Subtle bottom accent */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#01458f]/10 to-transparent rounded-b-xl" />
      </div>
    </div>
  );
}
