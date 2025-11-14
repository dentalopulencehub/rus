# sitemap.md - Site Structure

> Complete site navigation and page structure. Keep under 200 lines.

## Site Navigation

### Main Pages
1. Home (/)
2. Who We Are (/who-we-are)
3. Sectors (/sectors)
4. Services (/services)
5. Insights (/insights) - Blog
6. Contact (/contact)
7. Portal (external link - TBD)

## Home Page Structure

### Sections (in order)
1. **Hero**
   - Main headline
   - Subheadline
   - Primary CTA

2. **Services/Industry Overview**
   - Grid or card layout
   - Links to main services

3. **Toggle Bar**
   - Modern, clean design
   - Atlassian-style: rounded with hover outline effect
   - Reference: https://atlassian.design/

4. **Who You Are**
   - Brief introduction
   - Link to full "Who We Are" page

5. **Google Reviews Slider**
   - Carousel/slider component
   - Client testimonials from Google reviews

6. **CTA Section**
   - Call to action
   - Contact/consultation prompt

7. **Why Choose Us**
   - Key differentiators
   - Benefits/features

8. **Insights Preview**
   - Latest blog posts/articles
   - Link to full Insights page

9. **Our Partners**
   - Partner logos (placeholders for now)
   - Grid layout

## Sectors Page (/sectors)

### Subsections
1. Healthcare
2. Contractors & Professional Services
3. Retail
4. Property Services
5. Solicitors
6. Charities & Not-for-profit
7. Owner Managed Businesses (SME)
8. Private Individuals
9. Corporate
10. Education & Academies
11. Creative & Media

**Note:** Each sector should have its own dedicated page or section
- URL structure: `/sectors/[sector-slug]`

## Services Page (/services)

### Subsections
1. Taxation Services
2. Accounting & Bookkeeping
3. Audit & Assurance
4. Payroll Services
5. Business Advisory
6. Company Formation & Secretarial

**Note:** Each service should have its own dedicated page or section
- URL structure: `/services/[service-slug]`

## Insights Page (/insights)

Blog/articles listing page

### Features
- Article grid/list
- Categories/filtering
- Search functionality
- Pagination
- Individual article pages: `/insights/[slug]`

## Contact Page (/contact)

### Elements
- Contact form
- Company information
- Address
- Phone/email
- Map (optional)
- Opening hours (optional)

## Who We Are Page (/who-we-are)

### Content
- Company history (20+ years)
- Team information
- Values/mission
- Accreditations

## Navigation Structure

### Header
- Logo
- Main navigation links
- Portal link (external)
- Mobile menu toggle

### Footer
- Quick links
- Contact information
- Social media (if applicable)
- Legal links (Privacy Policy, Terms)
- Accreditations/memberships

## URL Routing

```
/ (home)
/who-we-are
/sectors
  /sectors/healthcare
  /sectors/contractors-professional-services
  /sectors/retail
  /sectors/property-services
  /sectors/solicitors
  /sectors/charities-not-for-profit
  /sectors/owner-managed-businesses
  /sectors/private-individuals
  /sectors/corporate
  /sectors/education-academies
  /sectors/creative-media
/services
  /services/taxation-services
  /services/accounting-bookkeeping
  /services/audit-assurance
  /services/payroll-services
  /services/business-advisory
  /services/company-formation-secretarial
/insights
  /insights/[article-slug]
/contact
/portal (external link)
```

## Notes
- All pages should follow consistent layout/template
- Responsive design required
- Accessibility standards (WCAG 2.1 AA)
- SEO optimization for each page
- Brand guidelines to be applied later
