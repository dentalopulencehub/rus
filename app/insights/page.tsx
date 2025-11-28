import type { Metadata } from 'next';
import { insightPosts, insightCategories } from '@/lib/insights-data';
import { InsightCard } from '@/components/insights/InsightCard';

export const metadata: Metadata = {
  title: 'Expert Insights & Tax Advice | RUS Chartered Accountants Birmingham',
  description: 'Expert accounting, tax and business advice from Birmingham\'s trusted chartered accountants. Stay informed with insights from our specialist team.',
  keywords: [
    'tax advice Birmingham',
    'accounting insights',
    'business advice UK',
    'chartered accountants blog',
    'tax planning tips',
    'HMRC updates',
    'accounting news'
  ],
  openGraph: {
    title: 'Expert Insights from RUS Chartered Accountants',
    description: 'Tax advice, business guidance and industry updates from Birmingham\'s trusted accountants.',
    type: 'website',
  },
  alternates: {
    canonical: 'https://rus.co.uk/insights',
  },
};

export default function InsightsPage() {
  const allPosts = insightPosts.sort((a, b) =>
    new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );

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

          {/* Category Pills */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
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
          <h2 className="text-3xl font-light italic text-gray-900 mb-8">Latest Insights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allPosts.map((post) => (
              <InsightCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Need Expert Advice?
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
