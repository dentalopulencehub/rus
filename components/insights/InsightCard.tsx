import Link from 'next/link';
import { InsightPost } from '@/lib/insights-data';
import { formatDate } from '@/lib/insights-helpers';

interface InsightCardProps {
  post: InsightPost;
}

export function InsightCard({ post }: InsightCardProps) {
  return (
    <Link
      href={`/insights/${post.slug}`}
      className="group flex flex-col bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300"
    >
      {/* Featured Image */}
      <div className="relative h-48 overflow-hidden bg-gray-100">
        <img
          src={post.featuredImage}
          alt={post.featuredImageAlt}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${post.category.color}`}>
            {post.category.name}
          </span>
        </div>
        {/* Featured/Trending Badges */}
        {post.featured && (
          <div className="absolute top-4 right-4">
            <span className="px-3 py-1 rounded-full text-xs font-medium bg-amber-500 text-white">
              Featured
            </span>
          </div>
        )}
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

        {/* Tags */}
        {post.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-4">
            {post.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center px-2 py-0.5 bg-gray-50 text-gray-600 rounded text-[10px] font-medium"
              >
                #{tag}
              </span>
            ))}
            {post.tags.length > 3 && (
              <span className="inline-flex items-center px-2 py-0.5 text-gray-400 text-[10px]">
                +{post.tags.length - 3} more
              </span>
            )}
          </div>
        )}

        {/* Meta */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div className="flex items-center gap-3">
            {/* Author Avatar */}
            <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-xs font-medium text-gray-600">
              {post.author.name.split(' ').map(n => n[0]).join('')}
            </div>
            <div className="text-sm">
              <p className="font-medium text-gray-900">{post.author.name}</p>
              <p className="text-gray-500 text-xs">{formatDate(post.publishedAt)}</p>
            </div>
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
