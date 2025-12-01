'use client';

import { useEffect, useState } from 'react';

interface TOCItem {
  id: string;
  text: string;
  level: number;
}

interface TableOfContentsProps {
  contentRef: React.RefObject<HTMLDivElement>;
}

export function TableOfContents({ contentRef }: TableOfContentsProps) {
  const [tableOfContents, setTableOfContents] = useState<TOCItem[]>([]);
  const [activeSection, setActiveSection] = useState('');

  // Generate table of contents from content headings
  useEffect(() => {
    if (contentRef.current) {
      const headings = contentRef.current.querySelectorAll('h2, h3');
      const toc: TOCItem[] = [];
      const usedIds = new Set<string>();

      headings.forEach((heading) => {
        const text = heading.textContent || '';
        const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

        // Ensure unique IDs by appending a number if duplicate
        let uniqueId = id;
        let counter = 1;
        while (usedIds.has(uniqueId)) {
          uniqueId = `${id}-${counter}`;
          counter++;
        }

        usedIds.add(uniqueId);
        heading.id = uniqueId;
        toc.push({
          id: uniqueId,
          text,
          level: parseInt(heading.tagName[1]),
        });
      });

      setTableOfContents(toc);
    }
  }, [contentRef]);

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (contentRef.current) {
        const sections = contentRef.current.querySelectorAll('h2, h3');
        let currentSection = '';

        sections.forEach((section) => {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 100) {
            currentSection = section.id;
          }
        });

        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [contentRef]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const y = element.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  if (tableOfContents.length === 0) return null;

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
      <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
        Table of Contents
      </h3>
      <nav className="space-y-2 max-h-[calc(100vh-200px)] overflow-y-auto">
        {tableOfContents.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className={`block w-full text-left text-sm transition-all duration-200 hover:text-[#01458f] break-words ${
              item.level === 3 ? 'pl-4' : ''
            } ${
              activeSection === item.id
                ? 'text-[#01458f] font-medium border-l-2 border-[#01458f] pl-3'
                : 'text-gray-600'
            }`}
          >
            {item.text}
          </button>
        ))}
      </nav>
    </div>
  );
}
