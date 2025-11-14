import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

const services = [
  'taxation-services',
  'accounting-bookkeeping',
  'audit-assurance',
  'payroll-services',
  'business-advisory',
  'company-formation-secretarial',
];

interface ServicePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;

  return {
    title: `${slug.replace(/-/g, ' ')} | Services | RUS Chartered Accountants`,
    description: `Expert ${slug.replace(/-/g, ' ')} from RUS Chartered Accountants`,
  };
}

export async function generateStaticParams() {
  return services.map((slug) => ({
    slug,
  }));
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;

  if (!services.includes(slug)) {
    notFound();
  }

  const serviceName = slug.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase());

  return (
    <div className="min-h-screen w-full flex items-center justify-center">
      <h1 className="text-2xl">Service Detail Page Placeholder: {serviceName}</h1>
    </div>
  );
}
