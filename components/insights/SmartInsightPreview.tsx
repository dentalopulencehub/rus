'use client';

import { getInsightsForService } from '@/lib/insights-helpers';
import { InsightCard } from './InsightCard';

interface SmartInsightPreviewProps {
  currentPath: string;
  title?: string;
  limit?: number;
}

export function SmartInsightPreview({
  currentPath,
  title = 'Related Insights',
  limit = 3
}: SmartInsightPreviewProps) {
  // Get relevant insights using smart tagging
  const relevantInsights = getInsightsForService(currentPath, limit);

  // Don't render if no relevant insights found
  if (relevantInsights.length === 0) {
    return null;
  }

  return (
    <section className="py-24 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-light italic text-gray-900 mb-3 tracking-tight">
            {title}
          </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto mb-8">
            Expert advice and updates from our specialist team
          </p>
          <a
            href="/insights"
            className="inline-flex items-center gap-2 text-[#01458f] hover:text-[#013a75] font-medium transition-colors"
          >
            View all insights
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        {/* Insights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {relevantInsights.map((post) => (
            <InsightCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
