import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://rus.co.uk';

  // Core pages
  const corePages = [
    '',
    '/who-we-are',
    '/contact',
    '/insights',
    '/services',
    '/sectors',
    '/terms',
  ];

  // Service pages
  const servicePages = [
    '/services/accounting-bookkeeping',
    '/services/accounting-bookkeeping/digital-accounting-software',
    '/services/audit-assurance',
    '/services/business-advisory',
    '/services/company-formation',
    '/services/company-secretarial',
    '/services/forensic-accounting',
    '/services/hmrc-nca-investigations',
    '/services/payroll',
    '/services/taxation-services',
  ];

  // Sector pages
  const sectorPages = [
    '/sectors/charities-not-for-profit',
    '/sectors/construction',
    '/sectors/contractors-professional-services',
    '/sectors/creative-media',
    '/sectors/education-academies',
    '/sectors/healthcare',
    '/sectors/hospitality-leisure',
    '/sectors/information-technology',
    '/sectors/other',
    '/sectors/property-services',
    '/sectors/retail',
    '/sectors/solicitors',
  ];

  // Combine all pages
  const allPages = [...corePages, ...servicePages, ...sectorPages];

  return allPages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: page === '' ? 1.0 : page.startsWith('/services') || page.startsWith('/sectors') ? 0.8 : 0.7,
  }));
}
