'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { useMemo } from 'react';

interface ServiceHeroProps {
  title: string;
  subtitle: string;
  description: string;
}

export function ServiceHero({ title, subtitle, description }: ServiceHeroProps) {
  const pathname = usePathname();

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

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center min-h-screen py-32">
          {/* Left - Text Content */}
          <div className="space-y-8 pl-2">
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

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-start gap-4 pt-4">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3 bg-gray-900 text-white rounded-full text-sm font-medium hover:bg-gray-800 transition-all duration-200 shadow-sm w-48"
              >
                Get Tax Advice
              </a>
              <a
                href="#expertise"
                className="inline-flex items-center justify-center px-8 py-3 bg-white text-gray-900 rounded-full text-sm font-medium border border-gray-200 hover:border-gray-300 transition-all duration-200 w-48"
              >
                Our Expertise
              </a>
            </div>
          </div>

          {/* Right - Tall Image Placeholder */}
          <div className="relative h-[600px] lg:h-[700px] pr-8">
            <div className="absolute inset-0 rounded-2xl overflow-hidden bg-gray-200 flex items-center justify-center">
              {/* Placeholder - Will be replaced with actual image */}
              <div className="text-center space-y-2">
                <svg className="w-16 h-16 mx-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <p className="text-sm text-gray-500">Image Placeholder</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
