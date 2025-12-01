'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { InsightPost } from '@/lib/insights-data';
import { formatDate } from '@/lib/insights-helpers';
import { TableOfContents } from './TableOfContents';
import { StickyShareButtons } from './StickyShareButtons';

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
            <div className="mb-4">
              <span className={`inline-block px-4 py-2 rounded-full text-sm font-medium ${post.category.color}`}>
                {post.category.name}
              </span>
            </div>

            {/* Tags */}
            {post.tags.length > 0 && (
              <div className="mb-6 flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center px-3 py-1 bg-gray-100 text-gray-700 rounded-md text-xs font-medium hover:bg-gray-200 transition-colors"
                  >
                    <svg className="w-3 h-3 mr-1.5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                    </svg>
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {/* Title */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight break-words">
              {post.title}
            </h1>

            {/* Meta Info - Author Only */}
            <div className="flex items-center gap-3 pb-6 border-b border-gray-200">
              <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center font-medium text-gray-600 flex-shrink-0">
                {post.author.name.split(' ').map(n => n[0]).join('')}
              </div>
              <div>
                <p className="font-medium text-gray-900">{post.author.name}</p>
                <p className="text-sm text-gray-500">{post.author.role}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area with Sidebar Layout */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-8">
            {/* Table of Contents & Share Buttons - Desktop Sidebar */}
            <aside className="hidden lg:block lg:col-span-3">
              <div className="sticky top-24 space-y-6 max-h-[calc(100vh-7rem)] overflow-y-auto">
                <TableOfContents contentRef={contentRef} />
                <StickyShareButtons title={post.title} url={fullUrl} />
              </div>
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
