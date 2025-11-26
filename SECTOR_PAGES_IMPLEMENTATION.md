# Sector Pages Implementation Guide

## Overview
This document provides comprehensive guidelines for creating all sector pages for RUS Chartered Accountants. All pages must follow consistent structure, British English, and SEO best practices.

## Critical Standards

### Component Consistency
| Component | Required Count | Purpose |
|-----------|----------------|---------|
| **Key Services (WhoWeHelp)** | **8 items** | Services tailored to sector (2x4 grid) |
| **Benefits (ServiceBenefits)** | **4 items** | Why we're specialists (2x2 grid) |
| **Testimonials** | **3 items** | Client social proof from sector |
| **FAQs** | **6 items** | Sector-specific questions |

### Page Structure
```
1. ServiceHero (sector intro)
2. WhoWeHelp (8 key services for this sector)
3. ServiceOverview (sector expertise + stats)
4. [Optional: Featured Services/Insights specific to sector]
5. CTA #1 (blue gradient box - before Benefits)
6. ServiceBenefits (4 benefits - why choose us for this sector)
7. ServiceTestimonials (3 testimonials from sector clients)
8. CTA #2 (blue gradient box - before FAQs)
9. ServiceFAQ (6 FAQs about sector services)
10. InsightsPreview (related insights)
11. StickyMiniNav (section links)
```

### Section IDs (for StickyMiniNav)
```typescript
#services     // WhoWeHelp section
#benefits     // ServiceBenefits section
#testimonials // ServiceTestimonials section
#faqs         // ServiceFAQ section
#insights     // InsightsPreview section
```

## CTA Pattern (CRITICAL)

### CTA #1 (Before Benefits)
```tsx
<section className="w-full flex items-center justify-center bg-white px-4 py-24">
  <div className="max-w-6xl mx-auto w-full">
    <div className="relative bg-gradient-to-br from-[#01458f] to-[#0052cc] rounded-3xl overflow-hidden px-8 md:px-16 py-20 md:py-28">
      {/* Geometric Pattern Background - EXACT SAME SVG */}
      <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
        <path d="M 600 -100 Q 800 100 850 300" stroke="white" strokeWidth="2" fill="none" />
        <circle cx="750" cy="150" r="80" stroke="white" strokeWidth="1.5" fill="none" />
        <path d="M 700 50 L 850 80 L 820 200" stroke="white" strokeWidth="1.5" fill="none" />
        <path d="M 650 120 L 750 100 L 730 180 L 640 190 Z" stroke="white" strokeWidth="1" fill="none" />
        <path d="M -50 400 Q 100 450 200 480" stroke="white" strokeWidth="2" fill="none" />
        <circle cx="100" cy="420" r="60" stroke="white" strokeWidth="1.5" fill="none" />
        <path d="M 50 380 L 180 400 L 160 480" stroke="white" strokeWidth="1.5" fill="none" />
        <line x1="400" y1="50" x2="500" y2="80" stroke="white" strokeWidth="1" opacity="0.5" />
        <line x1="300" y1="400" x2="400" y2="420" stroke="white" strokeWidth="1" opacity="0.5" />
        <circle cx="500" cy="60" r="30" stroke="white" strokeWidth="1" fill="none" opacity="0.4" />
      </svg>

      <div className="relative z-10 flex flex-col items-center text-center space-y-6">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight">
          Sector-specific heading<br />goes here
        </h2>

        <Link href="/contact" className="relative inline-flex items-center justify-center px-32 py-2 bg-white text-gray-900 rounded-full text-base md:text-lg font-semibold hover:shadow-2xl hover:shadow-white/30 transition-all duration-300 overflow-hidden group">
          <div className="absolute inset-0 -z-10 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-md backdrop-saturate-150" />
          <div className="absolute inset-0 -z-20 bg-gradient-to-br from-white/30 via-white/10 to-white/30 rounded-full opacity-0 group-hover:opacity-40 transition-all duration-300" />
          <div className="absolute inset-0 -z-30 bg-white rounded-full transition-all duration-300 group-hover:bg-white/95" />
          <span className="relative z-10">Get Started</span>
        </Link>

        <p className="text-white/90 text-sm md:text-base">
          Supporting text for the CTA
        </p>

        {/* Contact Details */}
        <div className="flex flex-col items-center justify-center gap-3 text-white/70 text-sm mt-4">
          <div className="flex flex-col md:flex-row items-center gap-3 md:gap-6">
            <a href="tel:01217771200" className="flex items-center gap-2 hover:text-white transition-colors duration-200">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>0121 777 1200</span>
            </a>
            <span className="hidden md:inline">•</span>
            <a href="mailto:info@rus.co.uk" className="flex items-center gap-2 hover:text-white transition-colors duration-200">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>info@rus.co.uk</span>
            </a>
          </div>
          <div className="flex items-center gap-2 text-center">
            <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span>1190A-1194 Stratford Road, Hall Green, Birmingham, B28 8AB</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
```

### CTA #2 (Before FAQs)
```tsx
<section className="w-full flex items-center justify-center bg-white px-4 py-24">
  <div className="max-w-6xl mx-auto w-full">
    <div className="relative bg-gradient-to-br from-[#01458f] to-[#0052cc] rounded-3xl overflow-hidden px-8 md:px-16 py-20 md:py-28">
      {/* SAME geometric SVG pattern */}

      <div className="relative z-10 flex flex-col items-center text-center space-y-6">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight">
          Action-focused heading
        </h2>

        <Link href="/contact" className="relative inline-flex items-center justify-center px-32 py-2 bg-white text-gray-900 rounded-full text-base md:text-lg font-semibold hover:shadow-2xl hover:shadow-white/30 transition-all duration-300 overflow-hidden group">
          {/* Same 3-layer glassmorphic button */}
          <span className="relative z-10">Contact Us Today</span>
        </Link>

        <p className="text-white/90 text-sm md:text-base">
          Final supporting text
        </p>

        {/* NO contact details in CTA #2 - keeps it cleaner */}
      </div>
    </div>
  </div>
</section>
```

## British English Standards

### Common US → UK Replacements
- organize → organise
- optimize → optimise
- specialize → specialise
- maximize → maximise
- minimize → minimise
- analyze → analyse
- recognize → recognise

### UK-Specific Terms
- Company (not corporation)
- Limited company (not LLC)
- Director (not officer)
- Shares (not stock)
- Shareholders (not stockholders)
- HMRC (not IRS)
- VAT (not sales tax)
- National Insurance (not social security)
- Solicitor (not attorney in most contexts)
- £ (never $ icons)

### British Spelling Patterns
- -our endings: colour, favour, behaviour
- -ise endings: organise, specialise, authorise
- -yse endings: analyse, paralyse
- -ence endings: defence, offence, licence (noun)

## Sector List

Create pages for the following sectors:

1. **Healthcare** - Medical, Dental, Opticians, Pharmacists
2. **Property Services** - Property developers, landlords, estate agents
3. **Retail** - Independent shops, franchises, e-commerce
4. **Hospitality & Leisure** - Restaurants, hotels, pubs, gyms
5. **Information Technology** - Software companies, IT consultants, SaaS
6. **Charities & Not-for-Profit** - Charities, trusts, social enterprises
7. **Construction** - Contractors, subcontractors, builders
8. **Contractors & Professional Services** - Freelancers, consultants, IR35
9. **Creative & Media** - Agencies, production companies, freelancers
10. **Education & Academies** - Schools, academies, training providers
11. **Solicitors** - Law firms, legal practices
12. **Other** - General businesses not covered above

## Testimonials Guidelines

### Format
```typescript
{
  name: 'Full Name',
  role: 'Job Title, Company Name',
  content: 'Testimonial text mentioning specific service/benefit and positive outcome',
  rating: 5,
}
```

### Best Practices
- Use realistic UK business names
- Include specific details about the service
- Mention tangible benefits or outcomes
- Keep concise (2-3 sentences max)
- Use British English and terminology

## SEO Best Practices

### Title Structure
`[Sector Name] Accountants | RUS Chartered Accountants Birmingham`

### Meta Description
Include:
- Sector name
- Location (Birmingham, UK)
- Key services
- Years of experience
- Clear CTA

### Content Requirements
- H1: Sector-specific page title
- H2: Section headings (services, benefits, etc.)
- Natural keyword usage
- UK location mentions
- Sector-specific terminology
- Internal links to related services

## File Naming Convention

```
/app/sectors/[sector-slug]/page.tsx
```

### Slug Format
- All lowercase
- Hyphen-separated
- No special characters

Examples:
- `healthcare`
- `property-services`
- `hospitality-leisure`
- `contractors-professional-services`

## Mini Navigation Links

Always use the same section links:

```typescript
const miniNavLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Benefits', href: '#benefits' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'FAQs', href: '#faqs' },
  { label: 'Insights', href: '#insights' },
];
```

## Internal Linking Strategy

### Link to Related Services
Each sector page should link to relevant service pages where contextually appropriate.

Examples:
- **Healthcare** → Audit & Assurance (for medical audits), Taxation Services
- **Construction** → Payroll (for CIS), VAT Returns
- **Charities** → Audit & Assurance (charity audits), Company Secretarial

### Link Placement
- In ServiceOverview description
- In featured services section
- In FAQ answers where relevant

## Implementation Checklist

For each sector page:

- [ ] ServiceHero with sector intro
- [ ] 8 key services tailored to sector
- [ ] ServiceOverview with sector expertise
- [ ] CTA #1 with contact details
- [ ] 4 benefits highlighting sector specialization
- [ ] 3 testimonials from sector clients
- [ ] CTA #2 (simpler, no contact details)
- [ ] 6 FAQs addressing sector-specific questions
- [ ] InsightsPreview section
- [ ] StickyMiniNav with correct section links
- [ ] British English throughout
- [ ] Internal links to relevant services
- [ ] Sector-specific copy (no generic text)
- [ ] All section IDs properly set

## Notes

- **NEVER copy-paste between sectors** - each must have unique, sector-specific content
- **ALWAYS use British English** - no American spellings
- **ALWAYS use £ symbols** - never $ for currency icons
- **EXACTLY 8 services, 4 benefits, 3 testimonials, 6 FAQs** - no more, no less
- **Two CTAs per page** - both using the blue gradient box pattern
- **All CTAs must be identical in style** - only the copy changes
