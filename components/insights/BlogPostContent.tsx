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

            {/* Title */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight break-words overflow-wrap-anywhere hyphens-auto">
              {post.title}
            </h1>
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
