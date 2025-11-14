import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

const sectors = [
  'healthcare',
  'contractors-professional-services',
  'retail',
  'property-services',
  'solicitors',
  'charities-not-for-profit',
  'owner-managed-businesses',
  'private-individuals',
  'corporate',
  'education-academies',
  'creative-media',
];

interface SectorPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: SectorPageProps): Promise<Metadata> {
  const { slug } = await params;

  return {
    title: `${slug.replace(/-/g, ' ')} | Sectors | RUS Chartered Accountants`,
    description: `Specialist accountancy services for ${slug.replace(/-/g, ' ')} sector`,
  };
}

export async function generateStaticParams() {
  return sectors.map((slug) => ({
    slug,
  }));
}

export default async function SectorDetailPage({ params }: SectorPageProps) {
  const { slug } = await params;

  if (!sectors.includes(slug)) {
    notFound();
  }

  const sectorName = slug.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase());

  return (
    <div className="min-h-screen w-full flex items-center justify-center">
      <h1 className="text-2xl">Sector Detail Page Placeholder: {sectorName}</h1>
    </div>
  );
}
