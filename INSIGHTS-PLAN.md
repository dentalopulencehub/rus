# RUS Insights Blog - Implementation Plan

## Overview
World-class blog system with smart tagging to show relevant insights on service pages.

---

## 1. STRUCTURE & ARCHITECTURE

### File Structure
```
/app/insights/
├── page.tsx                          # Main insights listing page
├── [slug]/
│   └── page.tsx                      # Individual blog post page
└── [category]/
    └── page.tsx                      # Category-filtered listing page

/components/insights/
├── InsightCard.tsx                   # Blog post card component
├── InsightHero.tsx                   # Hero section for insights page
├── CategoryFilter.tsx                # Category filter pills
├── FeaturedInsights.tsx              # Featured posts carousel
├── RelatedInsights.tsx               # Related posts sidebar
├── SearchBar.tsx                     # Search functionality
├── InsightContent.tsx                # Blog post content renderer
├── AuthorBio.tsx                     # Author profile card
└── SmartInsightPreview.tsx           # SMART TAGGING COMPONENT (shows on service pages)

/lib/
├── insights-data.ts                  # ✅ Already created
└── insights-helpers.ts               # Smart tagging logic
```

---

## 2. SMART TAGGING SYSTEM

### Concept
Each blog post has a `relatedServices` array that links it to specific service pages:
- When you visit `/services/taxation-services/inheritance-tax`
- The page shows blog posts tagged with `/services/taxation-services/inheritance-tax`
- This creates a dynamic, relevant content experience

### How It Works

#### Step 1: Tag Blog Posts (in insights-data.ts)
```typescript
{
  title: 'Inheritance Tax Planning: 7 Strategies',
  relatedServices: [
    '/services/taxation-services/inheritance-tax',  // Shows on IHT page
    '/services/taxation-services',                   // Shows on main tax page
  ]
}
```

#### Step 2: Service Pages Call Smart Component
```typescript
// In /app/services/taxation-services/inheritance-tax/page.tsx
<SmartInsightPreview currentPath="/services/taxation-services/inheritance-tax" limit={3} />
```

#### Step 3: Component Filters & Displays
The `SmartInsightPreview` component:
1. Gets the current page path
2. Filters blog posts where `relatedServices` includes that path
3. Shows the 3 most relevant (by views/date)
4. Displays them in cards at the bottom of the page

### Smart Tagging Logic (Priority Order)

```
1. EXACT MATCH: Blog post tags `/services/taxation-services/inheritance-tax`
   → Show on Inheritance Tax page

2. PARENT MATCH: Blog post tags `/services/taxation-services`
   → Show on Business Tax, Personal Tax, Inheritance Tax pages

3. CATEGORY MATCH: Blog category is "Tax Insights"
   → Show on all taxation service pages as fallback

4. TAG MATCH: Blog tags include "inheritance tax", "IHT", "estate planning"
   → Show as secondary matches
```

### Example Mapping

#### Service Page → Related Blog Posts

**`/services/taxation-services/business-tax`** shows:
- "Spring Budget 2024" (exact match: relatedServices includes this path)
- "R&D Tax Credits Guide" (exact match)
- "Making Tax Digital for VAT" (parent match: /services/taxation-services)

**`/sectors/healthcare/medical`** shows:
- "GP NHS Pension Planning" (exact match)
- "Healthcare Sector Tax Changes" (parent match: /sectors/healthcare)
- "Medical Practice Valuations" (category: Sector Specific)

**`/services/audit-assurance`** shows:
- "New Audit Standards 2024" (exact match)
- "Charity Audit Requirements" (parent match)
- Falls back to "Accounting Updates" category if no direct matches

---

## 3. BLOG POST DATA STRUCTURE

### Each Post Must Have:
```typescript
{
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;              // Full HTML
  category: InsightCategory;
  author: InsightAuthor;
  publishedAt: string;
  readTime: number;
  featuredImage: string;
  featured: boolean;
  trending: boolean;
  views: number;
  tags: string[];

  // SMART TAGGING KEY:
  relatedServices: [            // Array of service/sector page paths
    '/services/taxation-services/business-tax',
    '/services/taxation-services',
    '/sectors/healthcare'
  ],

  seo: {
    metaTitle: string;
    metaDescription: string;
    canonicalUrl: string;
  }
}
```

---

## 4. INSIGHTS LISTING PAGE FEATURES

### Hero Section
- Large title: "Expert Insights from RUS"
- Subtitle: "Tax advice, business guidance and industry updates"
- Search bar front and center

### Featured Posts Section
- 2-3 featured posts in cards
- Large images, excerpt preview
- "Featured" badge

### Category Filter Pills
- All Categories (default)
- Tax Insights
- Business Advice
- Accounting Updates
- Sector Specific
- Legislation Updates
- Firm News

### Main Content Grid
- 3-column grid on desktop
- Each card shows:
  - Featured image
  - Category badge (colored)
  - Title
  - Excerpt (truncated to 2 lines)
  - Author name + photo
  - Read time
  - Published date
  - View count

### Sidebar (Optional)
- Popular Posts (top 5 by views)
- Recent Posts (latest 5)
- Categories list with count
- Tags cloud

### Pagination
- Load more button
- Or infinite scroll (better UX)

---

## 5. INDIVIDUAL BLOG POST PAGE FEATURES

### Layout
```
┌─────────────────────────────────────────────────────────┐
│                    Hero Image                           │
│                                                          │
├──────────────────────┬──────────────────────────────────┤
│                      │                                   │
│   Main Content       │   Sidebar                         │
│   (70% width)        │   (30% width)                     │
│                      │                                   │
│   - Title            │   - Author Bio                    │
│   - Meta             │   - Categories                    │
│   - Full Content     │   - Tags                          │
│   - Author Profile   │   - Share Buttons                 │
│                      │   - Related Posts (3)             │
│                      │                                   │
└──────────────────────┴──────────────────────────────────┘
│                    Related Insights (3 cards)            │
└──────────────────────────────────────────────────────────┘
│                    Comments (future)                     │
└──────────────────────────────────────────────────────────┘
```

### Components
1. **Hero Section**
   - Full-width featured image
   - Category badge
   - Title (H1)
   - Excerpt
   - Author name, date, read time

2. **Main Content**
   - Rendered HTML content
   - Properly styled headings, lists, quotes
   - Table of contents for long posts (auto-generated from H2/H3)

3. **Author Bio Card**
   - Photo
   - Name, role
   - Short bio
   - Qualifications
   - "View all posts by Author" link

4. **Related Posts**
   - 3 blog posts
   - Same category OR shared tags
   - Sorted by views

5. **SEO Elements**
   - Schema.org Article markup
   - OpenGraph tags
   - Twitter cards
   - Canonical URL
   - Breadcrumbs

---

## 6. SMART TAGGING IMPLEMENTATION

### Helper Function (insights-helpers.ts)
```typescript
export function getInsightsForService(servicePath: string, limit: number = 3) {
  const allPosts = insightPosts;

  // 1. EXACT MATCH (highest priority)
  const exactMatches = allPosts.filter(post =>
    post.relatedServices?.includes(servicePath)
  );

  // 2. PARENT MATCH (e.g., /services/taxation-services matches /services/taxation-services/business-tax)
  const parentPath = servicePath.split('/').slice(0, -1).join('/');
  const parentMatches = allPosts.filter(post =>
    post.relatedServices?.includes(parentPath)
  );

  // 3. TAG MATCH (based on page keywords)
  const pathKeywords = extractKeywordsFromPath(servicePath);
  const tagMatches = allPosts.filter(post =>
    post.tags.some(tag => pathKeywords.includes(tag.toLowerCase()))
  );

  // Combine and deduplicate
  const combined = [...exactMatches, ...parentMatches, ...tagMatches];
  const unique = Array.from(new Set(combined.map(p => p.id)))
    .map(id => combined.find(p => p.id === id)!);

  // Sort by views and limit
  return unique
    .sort((a, b) => b.views - a.views)
    .slice(0, limit);
}

function extractKeywordsFromPath(path: string): string[] {
  // /services/taxation-services/inheritance-tax
  // → ['taxation', 'services', 'inheritance', 'tax']
  return path
    .split('/')
    .filter(Boolean)
    .flatMap(segment => segment.split('-'))
    .map(word => word.toLowerCase());
}
```

### Component Usage on Service Pages
```typescript
// At the bottom of EVERY service/sector page:
import { SmartInsightPreview } from '@/components/insights/SmartInsightPreview';

export default function InheritanceTaxPage() {
  return (
    <>
      {/* ... existing page content ... */}

      {/* SMART INSIGHTS - Shows relevant blog posts */}
      <SmartInsightPreview
        currentPath="/services/taxation-services/inheritance-tax"
        title="Related Tax Insights"
        limit={3}
      />
    </>
  );
}
```

---

## 7. BLOG POST CREATION WORKFLOW

### For Each New Blog Post:
1. Write content in Markdown/HTML
2. Choose primary category
3. Add descriptive tags
4. **MOST IMPORTANT**: Map to `relatedServices` paths
   - Which service pages is this relevant to?
   - Add 2-4 service/sector page paths
5. Set featured/trending flags
6. Add SEO metadata
7. Choose featured image (Unsplash)

### Example:
```typescript
{
  title: 'New R&D Tax Credit Rules for 2024',
  category: taxInsights,
  tags: ['R&D', 'tax credits', 'innovation', 'HMRC', 'SME'],

  // SMART TAGGING:
  relatedServices: [
    '/services/taxation-services/business-tax',     // Primary
    '/services/taxation-services',                   // Parent
    '/services/business-advisory',                   // Related
  ]
}
```

---

## 8. SEO OPTIMIZATION

### Blog Listing Page
- Title: "Expert Insights & Tax Advice | RUS Chartered Accountants Birmingham"
- Description: "Expert accounting, tax and business advice from Birmingham's trusted chartered accountants. Stay informed with insights from our specialist team."
- Schema: Blog markup

### Individual Post Pages
- Unique meta title (from post.seo.metaTitle)
- Unique description (from post.seo.metaDescription)
- Canonical URL
- Article schema with author, published date, modified date
- Breadcrumbs

### Smart Tagging SEO Benefits
- Internal linking: Blog posts link back to service pages
- Service pages link to blog posts (bidirectional)
- Increases time on site
- Improves topical authority
- More indexed pages with quality content

---

## 9. FUTURE ENHANCEMENTS (Phase 2)

### Advanced Smart Tagging
- AI-powered tag suggestions based on content
- Automatic related service detection
- "Users who read this also read..." recommendations

### Interactive Features
- Comments system (Disqus or custom)
- Newsletter signup at bottom of posts
- Social sharing analytics
- "Was this helpful?" feedback

### Content Features
- Video embeds
- Infographics
- Downloadable PDF guides
- Podcast episodes

### Analytics
- Track which blog posts drive most conversions
- Measure engagement (scroll depth, read time)
- A/B test titles/images
- Heatmaps on blog pages

---

## 10. IMPLEMENTATION ORDER

### Phase 1 (NOW):
1. ✅ Create insights-data.ts (DONE)
2. ✅ Add "Insights" to nav (DONE)
3. Create `/app/insights/page.tsx` - Main listing
4. Create `/app/insights/[slug]/page.tsx` - Individual posts
5. Create blog components (InsightCard, etc)
6. Create `/lib/insights-helpers.ts` - Smart tagging logic
7. Create `SmartInsightPreview.tsx` component
8. Add SmartInsightPreview to ALL service/sector pages

### Phase 2 (Later):
9. Add more blog posts (target: 20+ posts)
10. Implement category pages (`/insights/tax-insights`)
11. Add search functionality
12. Newsletter integration
13. Related posts refinement
14. Analytics tracking

---

## 11. TESTING CHECKLIST

### Functionality
- [ ] All blog posts display correctly
- [ ] Category filtering works
- [ ] Search returns correct results
- [ ] Related posts show relevant content
- [ ] Smart tagging shows correct posts on service pages
- [ ] Pagination works
- [ ] Mobile responsive
- [ ] Images load properly

### SEO
- [ ] Meta tags correct on all pages
- [ ] Schema.org markup validates
- [ ] Canonical URLs correct
- [ ] Breadcrumbs show properly
- [ ] Internal links work
- [ ] No broken links

### Performance
- [ ] Images optimized
- [ ] Page load < 3 seconds
- [ ] No console errors
- [ ] Smooth animations

---

## SUMMARY

This plan creates a **world-class blog system** with:
- 6 initial blog posts with rich content
- Smart tagging that shows relevant posts on service pages
- Beautiful, professional design
- Full SEO optimization
- Scalable architecture for future growth

**Key Innovation**: The smart tagging system creates a dynamic content network where every service page shows relevant blog posts, keeping users engaged and improving SEO through internal linking.

Ready to execute?
