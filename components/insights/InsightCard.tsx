import Link from 'next/link';
import { InsightPost } from '@/lib/insights-data';
import { formatDate } from '@/lib/insights-helpers';
import { InsightCardVisual } from './InsightCardVisual';

interface InsightCardProps {
  post: InsightPost;
}

export function InsightCard({ post }: InsightCardProps) {
  return (
    <Link
      href={`/insights/${post.slug}`}
      className="group flex flex-col bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300"
    >
      {/* Featured Visual */}
      <div className="relative h-48 overflow-hidden">
        <InsightCardVisual
          slug={post.slug}
          categorySlug={post.category.slug}
          className="w-full h-full group-hover:scale-105 transition-transform duration-300"
        />
        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${post.category.color}`}>
            {post.category.name}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6">
        {/* Title */}
        <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-[#01458f] transition-colors line-clamp-2">
          {post.title}
        </h3>

        {/* Excerpt */}
        <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-1">
          {post.excerpt}
        </p>

        {/* Meta */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div className="text-sm text-gray-500">
            {formatDate(post.publishedAt)}
          </div>

          {/* Read Time */}
          <div className="text-sm text-gray-500">
            {post.readTime} min read
          </div>
        </div>
      </div>
    </Link>
  );
}
