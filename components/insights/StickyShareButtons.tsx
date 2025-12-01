'use client';

import { useState, useEffect } from 'react';
import { Share2, Check, X } from 'lucide-react';

interface StickyShareButtonsProps {
  title: string;
  url: string;
}

export function StickyShareButtons({ title, url }: StickyShareButtonsProps) {
  const [copied, setCopied] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 400px
      setIsVisible(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const shareUrls = {
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`,
    email: `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(url)}`,
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const handleShare = (platform: keyof typeof shareUrls) => {
    if (platform === 'email') {
      window.location.href = shareUrls[platform];
    } else {
      window.open(shareUrls[platform], '_blank', 'width=600,height=400');
    }
    // Close on mobile after sharing
    if (window.innerWidth < 1024) {
      setIsOpen(false);
    }
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Desktop: Share Panel */}
      <div className="hidden lg:block">
        <div className="bg-white/95 backdrop-blur-sm border border-gray-200 rounded-xl p-4 shadow-sm">
          <h3 className="text-[10px] font-semibold text-gray-500 uppercase tracking-wider mb-3">
            Share Article
          </h3>
          <div className="space-y-2">
            {/* Twitter */}
            <button
              onClick={() => handleShare('twitter')}
              className="w-full flex items-center gap-3 px-3 py-2.5 text-sm text-gray-700 hover:bg-gray-50 rounded-lg transition-all group"
            >
              <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-[#1DA1F2] group-hover:text-white transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </div>
              <span>Twitter</span>
            </button>

            {/* Facebook */}
            <button
              onClick={() => handleShare('facebook')}
              className="w-full flex items-center gap-3 px-3 py-2.5 text-sm text-gray-700 hover:bg-gray-50 rounded-lg transition-all group"
            >
              <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-[#1877F2] group-hover:text-white transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </div>
              <span>Facebook</span>
            </button>

            {/* LinkedIn */}
            <button
              onClick={() => handleShare('linkedin')}
              className="w-full flex items-center gap-3 px-3 py-2.5 text-sm text-gray-700 hover:bg-gray-50 rounded-lg transition-all group"
            >
              <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-[#0A66C2] group-hover:text-white transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </div>
              <span>LinkedIn</span>
            </button>

            {/* Email */}
            <button
              onClick={() => handleShare('email')}
              className="w-full flex items-center gap-3 px-3 py-2.5 text-sm text-gray-700 hover:bg-gray-50 rounded-lg transition-all group"
            >
              <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-gray-600 group-hover:text-white transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <span>Email</span>
            </button>

            {/* Copy Link */}
            <button
              onClick={handleCopyLink}
              className="w-full flex items-center gap-3 px-3 py-2.5 text-sm text-gray-700 hover:bg-gray-50 rounded-lg transition-all group"
            >
              <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                copied ? 'bg-green-100 text-green-600' : 'bg-gray-100 group-hover:bg-[#01458f] group-hover:text-white'
              }`}>
                {copied ? (
                  <Check className="w-4 h-4" />
                ) : (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                )}
              </div>
              <span>{copied ? 'Copied!' : 'Copy Link'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile: Floating Action Button */}
      <div className="lg:hidden fixed bottom-20 right-4 z-50">
        {/* Share Menu Panel */}
        {isOpen && (
          <div className="absolute bottom-16 right-0 mb-2 bg-white rounded-2xl shadow-2xl border border-gray-200 p-4 min-w-[200px] animate-in slide-in-from-bottom-2 duration-200">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Share
              </h3>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-4 h-4 text-gray-400" />
              </button>
            </div>
            <div className="space-y-1">
              <button
                onClick={() => handleShare('twitter')}
                className="w-full flex items-center gap-3 px-3 py-2.5 text-sm text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-[#1DA1F2] text-white flex items-center justify-center">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </div>
                <span>Twitter</span>
              </button>
              <button
                onClick={() => handleShare('facebook')}
                className="w-full flex items-center gap-3 px-3 py-2.5 text-sm text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-[#1877F2] text-white flex items-center justify-center">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </div>
                <span>Facebook</span>
              </button>
              <button
                onClick={() => handleShare('linkedin')}
                className="w-full flex items-center gap-3 px-3 py-2.5 text-sm text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-[#0A66C2] text-white flex items-center justify-center">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </div>
                <span>LinkedIn</span>
              </button>
              <button
                onClick={() => handleShare('email')}
                className="w-full flex items-center gap-3 px-3 py-2.5 text-sm text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-gray-600 text-white flex items-center justify-center">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span>Email</span>
              </button>
              <button
                onClick={handleCopyLink}
                className="w-full flex items-center gap-3 px-3 py-2.5 text-sm text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
              >
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  copied ? 'bg-green-500 text-white' : 'bg-[#01458f] text-white'
                }`}>
                  {copied ? (
                    <Check className="w-4 h-4" />
                  ) : (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  )}
                </div>
                <span>{copied ? 'Copied!' : 'Copy Link'}</span>
              </button>
            </div>
          </div>
        )}

        {/* Floating Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 rounded-full bg-[#01458f] text-white shadow-2xl flex items-center justify-center hover:bg-[#0052cc] transition-all duration-200 hover:scale-110 active:scale-95"
          aria-label="Share article"
        >
          <Share2 className="w-6 h-6" />
        </button>
      </div>
    </>
  );
}
