import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getPostBySlug, getRelatedPosts } from '@/lib/insights-data';
import { InsightCard } from '@/components/insights/InsightCard';
import { ReadingProgress } from '@/components/insights/ReadingProgress';
import { ScrollToTop } from '@/components/insights/ScrollToTop';
import { BlogPostContent } from '@/components/insights/BlogPostContent';

interface InsightPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: InsightPostPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const post = getPostBySlug(resolvedParams.slug);

  if (!post) {
    return {
      title: 'Post Not Found | RUS Chartered Accountants',
    };
  }

  return {
    title: post.seo?.metaTitle || `${post.title} | RUS Insights`,
    description: post.seo?.metaDescription || post.excerpt,
    keywords: post.tags,
    authors: [{ name: post.author.name }],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      authors: [post.author.name],
      images: [
        {
          url: post.featuredImage,
          width: 1200,
          height: 630,
          alt: post.featuredImageAlt,
        },
      ],
    },
    alternates: {
      canonical: post.seo?.canonicalUrl || `https://rus.co.uk/insights/${post.slug}`,
    },
  };
}

export default async function InsightPostPage({ params }: InsightPostPageProps) {
  const resolvedParams = await params;
  const post = getPostBySlug(resolvedParams.slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedPosts(post, 3);

  // Schema.org Article markup
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    image: {
      '@type': 'ImageObject',
      url: post.featuredImage,
      width: 1200,
      height: 630,
    },
    datePublished: post.publishedAt,
    dateModified: post.updatedAt || post.publishedAt,
    author: {
      '@type': 'Person',
      name: post.author.name,
      jobTitle: post.author.role,
    },
    publisher: {
      '@type': 'Organization',
      name: 'RUS Chartered Accountants',
      url: 'https://rus.co.uk',
      logo: {
        '@type': 'ImageObject',
        url: 'https://rus.co.uk/RUS logo.svg',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://rus.co.uk/insights/${post.slug}`,
    },
    keywords: post.tags.join(', '),
    articleSection: post.category.name,
    inLanguage: 'en-GB',
  };

  const fullUrl = `https://rus.co.uk/insights/${post.slug}`;

  return (
    <>
      {/* Reading Progress Bar */}
      <ReadingProgress />

      {/* Scroll to Top Button */}
      <ScrollToTop />

      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* Hero Image */}
      <section className="relative w-full h-[400px] bg-gray-900">
        <img
          src={post.featuredImage}
          alt={post.featuredImageAlt}
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </section>

      {/* Blog Post Content with TOC Sidebar */}
      <BlogPostContent post={post} fullUrl={fullUrl} />

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-light italic text-gray-900 mb-8 text-center">
              Related Insights
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost) => (
                <InsightCard key={relatedPost.id} post={relatedPost} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Need Expert Advice on {post.category.name}?
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
