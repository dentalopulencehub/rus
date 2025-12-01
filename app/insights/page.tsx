import type { Metadata } from 'next';
import { insightPosts } from '@/lib/insights-data';
import { InsightsPageClient } from '@/components/insights/InsightsPageClient';

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

  return <InsightsPageClient posts={allPosts} />;
}
