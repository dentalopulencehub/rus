// Smart Tagging & Helper Functions for Insights

import { insightPosts, InsightPost } from './insights-data';

/**
 * SMART TAGGING: Get relevant insights for a specific service/sector page
 * Priority order:
 * 1. Exact match: Blog post explicitly tags this page path
 * 2. Parent match: Blog post tags parent category
 * 3. Tag match: Blog tags overlap with page keywords
 */
export function getInsightsForService(servicePath: string, limit: number = 3): InsightPost[] {
  const allPosts = insightPosts;

  // 1. EXACT MATCH (highest priority)
  const exactMatches = allPosts.filter(post =>
    post.relatedServices?.includes(servicePath)
  );

  // 2. PARENT MATCH
  // e.g., if servicePath is /services/taxation-services/business-tax
  // parent is /services/taxation-services
  const pathSegments = servicePath.split('/').filter(Boolean);
  const parentMatches: InsightPost[] = [];

  if (pathSegments.length > 2) {
    const parentPath = '/' + pathSegments.slice(0, -1).join('/');
    const matches = allPosts.filter(post =>
      post.relatedServices?.includes(parentPath) &&
      !exactMatches.find(p => p.id === post.id) // Avoid duplicates
    );
    parentMatches.push(...matches);
  }

  // 3. TAG MATCH (based on page keywords)
  const pathKeywords = extractKeywordsFromPath(servicePath);
  const tagMatches = allPosts.filter(post => {
    const alreadyMatched = exactMatches.find(p => p.id === post.id) ||
                           parentMatches.find(p => p.id === post.id);
    if (alreadyMatched) return false;

    return post.tags.some(tag =>
      pathKeywords.some(keyword => tag.toLowerCase().includes(keyword))
    );
  });

  // Combine all matches
  const combined = [...exactMatches, ...parentMatches, ...tagMatches];

  // Sort by views (most popular first) and limit
  return combined
    .sort((a, b) => b.views - a.views)
    .slice(0, limit);
}

/**
 * Extract keywords from a URL path for tag matching
 * /services/taxation-services/inheritance-tax
 * → ['taxation', 'services', 'inheritance', 'tax']
 */
function extractKeywordsFromPath(path: string): string[] {
  return path
    .split('/')
    .filter(Boolean)
    .flatMap(segment => segment.split('-'))
    .map(word => word.toLowerCase())
    .filter(word => word.length > 2); // Ignore very short words
}

/**
 * Format date for display
 * "2024-03-15" → "15 March 2024"
 */
export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });
}

/**
 * Calculate time ago
 * "2024-03-15" → "2 weeks ago"
 */
export function timeAgo(dateString: string): string {
  const date = new Date(dateString);
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  if (diffDays === 0) return 'Today';
  if (diffDays === 1) return 'Yesterday';
  if (diffDays < 7) return `${diffDays} days ago`;
  if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`;
  if (diffDays < 365) return `${Math.floor(diffDays / 30)} months ago`;
  return `${Math.floor(diffDays / 365)} years ago`;
}

/**
 * Generate reading time estimate
 * Assumes average reading speed of 200 words per minute
 */
export function estimateReadTime(content: string): number {
  const text = content.replace(/<[^>]*>/g, ''); // Strip HTML
  const wordCount = text.split(/\s+/).length;
  return Math.ceil(wordCount / 200);
}

/**
 * Truncate text to specified length with ellipsis
 */
export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength).trim() + '...';
}

/**
 * Generate excerpt from HTML content if not provided
 */
export function generateExcerpt(htmlContent: string, maxLength: number = 160): string {
  // Strip HTML tags
  const text = htmlContent.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
  return truncateText(text, maxLength);
}
