export function OrganizationSchema() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'AccountingService',
    '@id': 'https://rus.co.uk/#organization',
    name: 'RUS Chartered Accountants',
    alternateName: 'RUS Accountants',
    url: 'https://rus.co.uk',
    logo: 'https://rus.co.uk/logo.png',
    description: 'Chartered Accountants, Registered Auditors and Tax Advisors based in Birmingham with over 30 years of experience serving businesses across the UK.',
    telephone: '+441217771200',
    email: 'info@rus.co.uk',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '1190A-1194 Stratford Road',
      addressLocality: 'Hall Green',
      addressRegion: 'Birmingham',
      postalCode: 'B28 8AB',
      addressCountry: 'GB'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '52.4362',
      longitude: '-1.8642'
    },
    areaServed: [
      {
        '@type': 'City',
        name: 'Birmingham'
      },
      {
        '@type': 'AdministrativeArea',
        name: 'West Midlands'
      },
      {
        '@type': 'Country',
        name: 'United Kingdom'
      }
    ],
    priceRange: '££',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '17:30'
      }
    ],
    sameAs: [
      'https://www.linkedin.com/company/rus-chartered-accountants',
      'https://find-and-update.company-information.service.gov.uk/company/02826942'
    ],
    memberOf: {
      '@type': 'Organization',
      name: 'Institute of Chartered Accountants in England and Wales',
      alternateName: 'ICAEW'
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Accounting Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Accounting & Bookkeeping',
            description: 'Professional accounting and bookkeeping services'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Taxation Services',
            description: 'Expert tax advice and compliance support'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Audit & Assurance',
            description: 'Independent audit and assurance services'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Payroll Services',
            description: 'Complete payroll management and compliance'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Business Advisory',
            description: 'Strategic business advisory and planning'
          }
        }
      ]
    }
  };

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://rus.co.uk/#localbusiness',
    name: 'RUS Chartered Accountants',
    image: 'https://rus.co.uk/logo.png',
    url: 'https://rus.co.uk',
    telephone: '+441217771200',
    email: 'info@rus.co.uk',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '1190A-1194 Stratford Road',
      addressLocality: 'Hall Green',
      addressRegion: 'Birmingham',
      postalCode: 'B28 8AB',
      addressCountry: 'GB'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '52.4362',
      longitude: '-1.8642'
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '17:30'
      }
    ],
    priceRange: '££'
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
    </>
  );
}
