'use client';

import { useState, useMemo } from 'react';
import { InsightPost, insightCategories } from '@/lib/insights-data';
import { InsightCard } from './InsightCard';
import { Search } from 'lucide-react';

interface InsightsPageClientProps {
  posts: InsightPost[];
}

export function InsightsPageClient({ posts }: InsightsPageClientProps) {
  const [searchQuery, setSearchQuery] = useState('');

  // Filter posts based on search query
  const filteredPosts = useMemo(() => {
    if (!searchQuery.trim()) return posts;

    const query = searchQuery.toLowerCase();
    return posts.filter(post =>
      post.title.toLowerCase().includes(query) ||
      post.excerpt.toLowerCase().includes(query) ||
      post.tags.some(tag => tag.toLowerCase().includes(query)) ||
      post.category.name.toLowerCase().includes(query)
    );
  }, [posts, searchQuery]);

  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full bg-gradient-to-b from-[#F0F7FF] to-white overflow-hidden pt-32 pb-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 tracking-tight">
            EXPERT INSIGHTS
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Tax advice, business guidance and industry updates from Birmingham's trusted chartered accountants
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search articles by title, topic, or tag..."
                className="w-full pl-12 pr-4 py-4 text-base border-2 border-gray-200 rounded-full focus:border-[#01458f] focus:outline-none focus:ring-2 focus:ring-[#01458f]/20 transition-all bg-white shadow-sm"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-600"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
            </div>
          </div>

          {/* Category Pills */}
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="/insights"
              className="px-4 py-2 rounded-full bg-[#01458f] text-white text-sm font-medium hover:bg-[#013a75] transition-colors"
            >
              All Insights
            </a>
            {insightCategories.map((category) => (
              <a
                key={category.id}
                href={`#${category.slug}`}
                className="px-4 py-2 rounded-full text-sm font-medium border border-gray-300 hover:border-[#01458f] hover:text-[#01458f] transition-colors"
              >
                {category.name}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* All Posts */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-light italic text-gray-900">
              {searchQuery ? 'Search Results' : 'Latest Insight'}
            </h2>
            {searchQuery && (
              <p className="text-sm text-gray-600">
                Found {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''}
              </p>
            )}
          </div>

          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPosts.map((post) => (
                <InsightCard key={post.id} post={post} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gray-100 flex items-center justify-center">
                <Search className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No articles found</h3>
              <p className="text-gray-600 mb-6">
                Try adjusting your search or browse all articles below
              </p>
              <button
                onClick={() => setSearchQuery('')}
                className="inline-flex items-center justify-center px-6 py-3 bg-[#01458f] text-white rounded-full hover:bg-[#013a75] transition-colors"
              >
                Clear Search
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Need Expert Accounting Advice?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Our team of chartered accountants is here to help with all your tax, accounting and business needs.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-3 bg-gray-900 text-white rounded-full text-sm font-medium hover:bg-gray-800 transition-all duration-200 shadow-sm"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </>
  );
}
