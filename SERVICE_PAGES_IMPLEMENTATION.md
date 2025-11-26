# Service Pages Implementation Plan

## Overview
Each service page needs customised content specific to that service. We must avoid generic/reused content and ensure British English throughout.

## Reusable Components Structure
All pages use the same component structure, but with **service-specific content**:

1. **ServiceHero** - Title, subtitle, description (MUST be service-specific)
2. **WhoWeHelp / Core Services** - **EXACTLY 8 service items with icons** (for design consistency)
3. **ServiceOverview** - Overview content (MUST be service-specific)
4. **SubcategoriesGrid** - Links to sub-pages (ONLY if service has multiple sub-pages)
   - **IMPORTANT**: If service has only ONE sub-page (like MTD for Bookkeeping), create a direct link card or featured section instead
5. **ServiceBenefits** - **EXACTLY 4 benefit cards** (for design consistency)
6. **ServiceTestimonials** - **EXACTLY 3 client testimonials** (MUST be service-specific)
7. **CTA Section** - MUST be customised per service
8. **ServiceFAQ** - **EXACTLY 6 FAQs** (MUST be service-specific)
9. **InsightsPreview** - Reusable (same for all)
10. **StickyMiniNav** - Same structure, custom section IDs

## CRITICAL: Component Consistency Standards

**Must be consistent across ALL service pages:**

| Component | Required Count | Purpose |
|-----------|----------------|---------|
| **Core Services (WhoWeHelp)** | **8 items** | Main services offered (2x4 grid on desktop) |
| **Benefits (ServiceBenefits)** | **4 items** | Key advantages (2x2 grid on desktop) |
| **Testimonials** | **3 items** | Client social proof (carousel/3-column) |
| **FAQs** | **6 items** | Common questions (accordion) |

**Why these numbers?**
- **8 Core Services**: Perfect for 2x4 grid layout on desktop (lg:grid-cols-8), maintains visual balance and comprehensive coverage
- **4 Benefits**: Perfect for 2x2 grid layout on desktop, highlights key advantages
- **3 Testimonials**: Allows proper carousel/grid display
- **6 FAQs**: Comprehensive coverage without overwhelming users

**ALWAYS implement with these exact counts for design consistency across all service pages.**

## Section ID Framework for Sticky Navigation

Every service page MUST use consistent section IDs for sticky navigation:

```tsx
const miniNavLinks = [
  { label: 'Services', href: '#services' },      // Always first
  { label: 'Benefits', href: '#benefits' },      // Always included
  { label: 'Testimonials', href: '#testimonials' }, // Always included
  { label: 'FAQs', href: '#faqs' },              // Always included
  { label: 'Insights', href: '#insights' },      // Always last
];
```

**Required `id` attributes on page:**
```tsx
<div id="services">        // Core services / WhoWeHelp section
<div id="benefits">        // ServiceBenefits section
<div id="testimonials">    // ServiceTestimonials section
<div id="faqs">            // ServiceFAQ section
<div id="insights">        // InsightsPreview section
```

**Page structure template:**
```tsx
export default function ServicePage() {
  return (
    <>
      <ServiceHero {...} />

      <div id="services">
        <WhoWeHelp {...} />
      </div>

      <ServiceOverview {...} />

      {/* Optional: SubcategoriesGrid or featured sub-page */}

      <div id="benefits">
        <ServiceBenefits {...} />
      </div>

      <div id="testimonials">
        <ServiceTestimonials {...} />
      </div>

      {/* Custom CTA Section */}

      <div id="faqs">
        <ServiceFAQ {...} />
      </div>

      <div id="insights">
        <InsightsPreview />
      </div>

      <StickyMiniNav links={miniNavLinks} />
    </>
  );
}
```

---

## Service-Specific CTA Content

### Taxation Services
```
Ready to take control of your tax affairs?
Expert tax advice tailored to your needs
[Enquire Now button]
+ Contact details
```

### Accounting & Bookkeeping
```
Ready to streamline your financial management?
Professional accounting support designed for your business
[Get Started button]
+ Contact details
```

### Audit & Assurance
```
Ready to strengthen your financial integrity?
Independent audit services you can trust
[Speak to an Auditor button]
+ Contact details
```

### Business Advisory
```
Ready to take your business to the next level?
Strategic advice to support sustainable growth
[Book a Consultation button]
+ Contact details
```

### Company Secretarial
```
Ready to ensure full company compliance?
Expert company secretarial support at your fingertips
[Get Support button]
+ Contact details
```

### Company Formation
```
Ready to start your business the right way?
Complete company formation with expert guidance
[Begin Your Journey button]
+ Contact details
```

### Payroll
```
Ready to simplify your payroll management?
Accurate, compliant payroll services for UK businesses
[Get a Quote button]
+ Contact details
```

### HMRC & NCA Investigations
```
Need expert support during an investigation?
Professional representation when it matters most
[Get Urgent Help button]
+ Contact details
```

### Forensic Accounting
```
Need clarity in complex financial matters?
Expert forensic analysis you can rely on
[Discuss Your Case button]
+ Contact details
```

---

## Testimonial Guidelines

Each service must have **3 unique testimonials** that specifically reference that service:

### Good Example (Accounting):
```
"The bookkeeping and accounts service from RUS has transformed how we manage our finances..."
- Sarah Mitchell, Managing Director, Tech Solutions Ltd
```

### Bad Example (Generic):
```
"RUS provides great service..."
- John Smith, Business Owner
```

**Requirements:**
- Name must be realistic and varied
- Role must be specific
- Company name included
- Content must mention the specific service
- Rating: 5 stars
- British spelling throughout

---

## FAQ Requirements

Each service needs **6 service-specific FAQs**:

### Structure:
1. **What** question - "What is [service]?" or "What does [service] involve?"
2. **When** question - "When do I need [service]?"
3. **How** question - "How does [service] work?" or "How long does it take?"
4. **Who** question - "Who needs [service]?"
5. **Why** question - "Why choose [your service]?"
6. **Cost/Process** question - "What do I need to provide?" or "How much does it cost?"

### British English in FAQs:
- Use "whilst" not "while" (formal contexts)
- Use "organised" not "organized"
- Use "specialise" not "specialize"
- Use "maximise" not "maximize"
- Use "HMRC" not "IRS"
- Use "limited company" not "corporation"

---

## Benefits Section Customisation

Each service should have **EXACTLY 4 unique benefits** specific to that service (for design consistency).

### Example for Accounting & Bookkeeping:
✅ "Qualified accountants with extensive experience"
✅ "Clear, accurate and timely financial reporting"
✅ "Cost-effective outsourcing"
✅ "Cloud-based systems for improved transparency"

### Example for Payroll:
✅ "Fully managed and compliant payroll"
✅ "Secure employee payslip app access"
✅ "Automated bank payment instructions"
✅ "CIS and P11D specialists"

### Example for Audit & Assurance:
✅ "Experienced auditors with sector-specific expertise"
✅ "Independent, transparent and insightful reporting"
✅ "Risk-focused approach enhancing governance"
✅ "Efficient processes minimising disruption"

**Benefit Card Structure:**
```tsx
{
  title: 'Short Heading (3-5 words)',
  description: 'Brief explanation (8-12 words)',
  icon: <svg>...</svg>
}
```

---

## Internal Linking Strategy

### Within Service Pages:
1. **Parent → Sub-page** links (e.g., Accounting & Bookkeeping → MTD)
2. **Related service** links (e.g., Business Advisory → Company Formation)
3. **Sector** links where relevant (e.g., Healthcare mentions in multiple services)

### Best Practice:
```tsx
// Good - contextual link
"For help with company formation, visit our
<Link href="/services/company-formation">Company Formation page</Link>"

// Bad - generic
"Click here for more info"
```

### Cross-linking opportunities:
- Accounting → Taxation
- Business Advisory → Company Formation
- Payroll → CIS (within payroll)
- Company Formation → Company Secretarial
- All services → HMRC Investigations (as protection)

---

## Navigation & Footer Updates

**CRITICAL**: Every new service page MUST be added to:
1. ✅ Header navigation (desktop dropdown)
2. ✅ Mobile menu
3. ✅ Footer services column
4. ✅ Services overview page (if it exists)

### Main Navigation Structure (Desktop Dropdown):
```
Services
├── Taxation Services
│   ├── Business Tax
│   ├── Personal Tax
│   └── Inheritance Tax
├── Accounting & Bookkeeping
│   └── Digital Accounting Software (MTD)
├── Audit & Assurance
├── Business Advisory
├── Company Secretarial
├── Company Formation
├── Payroll
├── HMRC & NCA Investigations
└── Forensic Accounting
```

**Files to update:**
- `/components/layout/Header.tsx` - Desktop dropdown menu
- `/components/layout/MobileMenu.tsx` - Mobile navigation
- `/components/layout/Footer.tsx` - Footer services column

### Footer Services Column:
- List all 9 main services
- Show popular sub-pages (3 tax sub-pages, MTD)
- "View All Services" link

### Mobile Menu Structure:
Must match desktop structure exactly
- Same service hierarchy
- Same sub-page links
- Collapsible sections for services with sub-pages

### Update Checklist for Each New Page:
- [ ] Add to desktop Header dropdown
- [ ] Add to MobileMenu
- [ ] Add to Footer services section
- [ ] Verify links work on both desktop and mobile
- [ ] Test dropdown/collapse behaviour
- [ ] Ensure proper ordering (matches business priority)

---

## To-Do Actions

### Phase 1: Fix Existing Pages
- [ ] Update Accounting & Bookkeeping CTA
- [ ] Update Accounting & Bookkeeping testimonials (verify they're specific enough)
- [ ] Update MTD sub-page CTA
- [ ] Update Audit & Assurance CTA
- [ ] Verify all British English usage

### Phase 2: Create Remaining Pages with Custom Content
- [ ] Business Advisory (with link to Company Formation)
- [ ] Company Secretarial (with link to Company Formation)
- [ ] Company Formation (with links from Advisory & Secretarial)
- [ ] Payroll
- [ ] HMRC & NCA Investigations (with quote form)
- [ ] Forensic Accounting

### Phase 3: Navigation & Footer
- [ ] Update Header navigation
- [ ] Update Footer links
- [ ] Create Services overview/index page
- [ ] Add breadcrumb navigation to all pages

### Phase 4: Internal Linking
- [ ] Add contextual links between related services
- [ ] Add sector links where mentioned
- [ ] Add "Related Services" component (optional)

---

## Content Quality Checklist

Before marking any page as complete, verify:

**Content:**
- [ ] CTA is service-specific (not generic tax CTA)
- [ ] All 3 testimonials mention the specific service
- [ ] All 6 FAQs are relevant to the service
- [ ] British English used throughout (organised, specialise, etc.)
- [ ] NO US dollar ($) icons - use British pounds (£) or generic money icons
- [ ] Icons match the service theme
- [ ] Button text is appropriate (not generic "Enquire Now" everywhere)
- [ ] Overview content is service-specific
- [ ] Contact details included in CTA

**Technical:**
- [ ] All section IDs present (#services, #benefits, #testimonials, #faqs, #insights)
- [ ] Sticky nav links match section IDs
- [ ] Internal links where appropriate (related services)
- [ ] Breadcrumb on sub-pages
- [ ] Imports are correct (no unused imports)

**Navigation:**
- [ ] Service added to Header dropdown menu
- [ ] Service added to Mobile menu
- [ ] Service added to Footer
- [ ] Sub-pages linked from parent page (if applicable)
- [ ] Parent link on sub-page breadcrumb

**Single Sub-Page Handling:**
- [ ] If service has ONLY ONE sub-page, use featured card/section, NOT SubcategoriesGrid
- [ ] Example: Accounting & Bookkeeping → MTD (single sub-page)
- [ ] Use prominent call-to-action card to link to the single sub-page

---

## British English Reference

### Common US → UK Replacements:
- organize → organise
- recognize → recognise
- specialize → specialise
- maximize → maximise
- analyze → analyse
- center → centre
- favor → favour
- color → colour
- honor → honour
- labor → labour
- license (verb) → licence (verb)
- practice (verb) → practise (verb)
- defense → defence
- offense → offence

### UK-Specific Terms:
- Use "limited company" or "Ltd" not "corporation"
- Use "HMRC" not "IRS"
- Use "VAT" not "sales tax"
- Use "NIC" or "National Insurance" not "social security"
- Use "Companies House" not "Secretary of State"
- Use "sole trader" not "sole proprietor"
- Use "employee" and "employer" are same
- Use "PAYE" not "withholding tax"

### CRITICAL - Currency Icons:
**NEVER use US dollar ($) icons in any components or graphics**

✅ **Correct - British Pound:**
```tsx
// Use British Pound symbol
<svg><!-- Pound sterling icon --></svg>
£ symbol for pricing
"Cost-effective solutions" (not mentioning currency)
```

❌ **Wrong - US Dollar:**
```tsx
// Never use dollar signs
<svg><!-- Dollar sign icon --></svg>
$ symbol
```

**Alternative approaches:**
- Use generic "money" or "finance" icons (coins, piggy bank, wallet)
- Use text like "Cost-effective" without currency symbols
- Use percentages for savings (e.g., "Save 20%")
- Use "Competitive pricing" instead of showing currency

---

## Progress Tracker

### Completed:
- ✅ Taxation Services (already existed)
- ✅ Accounting & Bookkeeping (needs CTA update)
- ✅ MTD sub-page (needs CTA update)
- ✅ Audit & Assurance (needs CTA update)

### In Progress:
- ⏳ Business Advisory

### Pending:
- ⬜ Company Secretarial
- ⬜ Company Formation
- ⬜ Payroll
- ⬜ HMRC & NCA Investigations
- ⬜ Forensic Accounting
- ⬜ Navigation updates
- ⬜ Footer updates
- ⬜ Internal linking
