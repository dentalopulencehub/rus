'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { useMemo } from 'react';
import { useContactForm } from '@/components/contact/ContactFormContext';

interface ServiceHeroProps {
  title: string;
  subtitle: string;
  description: string;
  imageUrl?: string;
  primaryCta?: {
    text: string;
    href: string;
  };
  secondaryCta?: {
    text: string;
    href: string;
  };
}

export function ServiceHero({
  title,
  subtitle,
  description,
  imageUrl,
  primaryCta = { text: 'Get Started', href: '/contact' },
  secondaryCta = { text: 'About Us', href: '/who-we-are' }
}: ServiceHeroProps) {
  const pathname = usePathname();
  const { openModal } = useContactForm();

  const breadcrumbs = useMemo(() => {
    const segments = pathname.split('/').filter(Boolean);
    const items = [{ label: 'Home', href: '/' }];

    let currentPath = '';
    segments.forEach((segment) => {
      currentPath += `/${segment}`;
      const label = segment
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
      items.push({ label, href: currentPath });
    });

    return items;
  }, [pathname]);

  // Generate schema markup
  const schemaMarkup = useMemo(() => ({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      item: `https://rus.co.uk${item.href}`
    }))
  }), [breadcrumbs]);

  return (
    <section className="relative w-full bg-[#F0F7FF] overflow-hidden">
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />

      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-10 bg-cover bg-center"
        style={{ backgroundImage: 'url(https://imagedelivery.net/W93NbEGaswuledAsk5GMeA/5ee11fdf-aac0-4c26-0f5e-026a2df87900/public)' }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start md:items-center md:min-h-screen pt-24 pb-16 md:py-32">
          {/* Left - Text Content */}
          <div className="space-y-8 order-1 lg:order-1">
            {/* Breadcrumbs - Minimal */}
            <nav aria-label="Breadcrumb" className="flex items-center space-x-2 text-sm">
              {breadcrumbs.map((item, index) => {
                const isLast = index === breadcrumbs.length - 1;
                return (
                  <div key={item.href} className="flex items-center">
                    {index > 0 && (
                      <svg className="w-4 h-4 text-gray-400 mx-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                      </svg>
                    )}
                    {isLast ? (
                      <span className="text-gray-600 font-medium">{item.label}</span>
                    ) : (
                      <Link href={item.href} className="text-[#01458f] hover:underline">
                        {item.label}
                      </Link>
                    )}
                  </div>
                );
              })}
            </nav>

            {/* Main Title */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight tracking-tight uppercase">
              {title}
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
              {subtitle}
            </p>

            {/* Description */}
            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              {description}
            </p>

            {/* Hero Image - Mobile Only (appears here between description and buttons) */}
            {imageUrl && (
              <div className="relative h-[300px] lg:hidden rounded-2xl overflow-hidden bg-white shadow-lg border border-gray-200/50">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={imageUrl}
                  alt={title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            {/* CTA Buttons */}
            <div className="flex flex-col md:flex-row items-stretch md:items-start gap-3 md:gap-4 pt-4">
              <button
                onClick={openModal}
                className="inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-3 bg-gray-900 text-white rounded-full text-sm md:text-sm font-medium hover:bg-gray-800 transition-all duration-200 shadow-sm w-full md:w-48 min-h-[48px] md:min-h-[44px]"
              >
                {primaryCta.text}
              </button>
              <a
                href={secondaryCta.href}
                className="inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-3 bg-white text-gray-900 rounded-full text-sm md:text-sm font-medium border border-gray-200 hover:border-gray-300 transition-all duration-200 w-full md:w-48 min-h-[48px] md:min-h-[44px]"
              >
                {secondaryCta.text}
              </a>
            </div>
          </div>

          {/* Right - Hero Image - Desktop/Tablet Only */}
          {imageUrl && (
            <div className="hidden lg:block relative md:h-[600px] lg:h-[700px] pr-0 md:pr-8 order-2 lg:order-2">
              <div className="absolute inset-0 rounded-2xl overflow-hidden bg-white shadow-lg border border-gray-200/50">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={imageUrl}
                  alt={title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
