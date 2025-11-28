'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { InsightPost } from '@/lib/insights-data';
import { formatDate } from '@/lib/insights-helpers';
import { TableOfContents } from './TableOfContents';
import { ShareButtons } from './ShareButtons';

interface BlogPostContentProps {
  post: InsightPost;
  fullUrl: string;
}

export function BlogPostContent({ post, fullUrl }: BlogPostContentProps) {
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <>
      {/* Article Header */}
      <section className="relative -mt-32 px-4 pb-8">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-12">
            {/* Breadcrumbs */}
            <nav className="flex items-center gap-2 text-xs md:text-sm mb-4 text-gray-500 overflow-x-auto">
              <Link href="/" className="hover:text-[#01458f] transition-colors whitespace-nowrap">Home</Link>
              <span>/</span>
              <Link href="/insights" className="hover:text-[#01458f] transition-colors whitespace-nowrap">Insights</Link>
              <span>/</span>
              <span className="text-[#01458f] truncate">{post.category.name}</span>
            </nav>

            {/* Category Badge */}
            <div className="mb-6">
              <span className={`inline-block px-4 py-2 rounded-full text-sm font-medium ${post.category.color}`}>
                {post.category.name}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight break-words">
              {post.title}
            </h1>

            {/* Meta Info - Author Only */}
            <div className="space-y-4 pb-6 border-b border-gray-200">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center font-medium text-gray-600 flex-shrink-0">
                  {post.author.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <p className="font-medium text-gray-900">{post.author.name}</p>
                  <p className="text-sm text-gray-500">{post.author.role}</p>
                </div>
              </div>

              {/* Share Buttons */}
              <div className="pt-4">
                <ShareButtons title={post.title} url={fullUrl} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area with Sidebar Layout */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-8">
            {/* Table of Contents - Desktop Sidebar */}
            <aside className="hidden lg:block lg:col-span-3">
              <TableOfContents contentRef={contentRef} />
            </aside>

            {/* Main Content */}
            <main className="lg:col-span-9">
              <div
                ref={contentRef}
                className="prose prose-lg max-w-none"
              >
                <div dangerouslySetInnerHTML={{ __html: post.content }} />
              </div>

              {/* Tags */}
              {post.tags.length > 0 && (
                <div className="mt-12 pt-8 border-t border-gray-200">
                  <h3 className="text-sm font-medium text-gray-700 mb-4">Related Topics:</h3>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 transition-colors"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Author Bio */}
              <div className="mt-12 p-8 bg-gray-50 rounded-xl">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center text-lg font-medium text-gray-600 flex-shrink-0">
                    {post.author.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">About {post.author.name}</h3>
                    <p className="text-sm text-gray-600 mb-2">{post.author.role}</p>
                    <p className="text-gray-700 text-sm">{post.author.bio}</p>
                    {post.author.qualifications && post.author.qualifications.length > 0 && (
                      <p className="text-sm text-gray-600 mt-2">
                        <strong>Qualifications:</strong> {post.author.qualifications.join(', ')}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </section>
    </>
  );
}
