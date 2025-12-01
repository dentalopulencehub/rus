# Systematic Fixes Plan - RUS Website Updates

## Overview
Comprehensive list of fixes organized by section with clear milestones and checkboxes.

---

## 🎯 SECTION 1: HERO/BANNER (Homepage)

### 1.1 Logo Size
- [ ] Reduce logo in banner by 5%
- **File**: `components/home/Hero.tsx` or `components/layout/Header.tsx`
- **Action**: Adjust width/height by 5%

### 1.2 Slogan Text
- [ ] Replace 'Trusted chartered accountants serving Birmingham businesses since 1995.'
- [ ] New text: 'Est. 1995'
- **File**: `components/home/Hero.tsx`
- **Action**: Update subtitle text

### 1.3 Button Text
- [ ] Change 'Enquire Now' to 'Contact Us' globally across site
- **Files**: Multiple components (Hero, CTAs, etc.)
- **Action**: Global search and replace

---

## 🏢 SECTION 2: SECTORS MENU & NAVIGATION

### 2.1 Add Financial Services Sector
- [ ] Create Financial Services sector page
- [ ] Content: Financial services, Insurance Industry, Brokerage firms (mortgage brokers)
- [ ] Add to top navigation dropdown
- [ ] Add to bottom bar navigation
- [ ] Add to footer navigation
- **Files**:
  - `app/sectors/financial-services/page.tsx` (new)
  - `components/layout/SectorsDropdown.tsx`
  - `components/layout/BottomBar.tsx`
  - `components/layout/Footer.tsx`

### 2.2 Remove 'Other' Sector
- [ ] Remove from top navigation dropdown
- [ ] Remove from bottom bar navigation
- [ ] Remove from footer
- [ ] Delete or hide sector page file
- **Files**:
  - `components/layout/SectorsDropdown.tsx`
  - `components/layout/BottomBar.tsx`
  - `components/layout/Footer.tsx`
  - `app/sectors/other/page.tsx` (remove/hide)

### 2.3 Alphabetize Footer Sections
- [ ] Sort services alphabetically
- [ ] Sort sectors alphabetically
- **File**: `components/layout/Footer.tsx`

---

## 🎨 SECTION 3: HOMEPAGE VISUAL FIXES

### 3.1 Trust Box Font
- [ ] Fix font for 'Your trusted accountancy Partner' in box above Trustpilot
- **File**: Likely `components/home/CompanyIntro.tsx` or similar
- **Action**: Apply consistent heading font

### 3.2 Blue Box Text
- [ ] Change 'ICAEW Certified' to 'ICAEW Chartered'
- **File**: Search for "ICAEW Certified" across components
- **Action**: Update text

### 3.3 MTD Section Fixes
- [ ] Get correct MTD logos
- [ ] Link 'Find out more' to MTD segment
- [ ] Change 'Enquire now' button to open enquiry form (not contact page)
- **File**: `components/home/IntegrationSection.tsx` or MTD component
- **Actions**:
  - Update logo sources
  - Fix link href
  - Change button to trigger ContactModal

### 3.4 Tax Affairs CTA Section
- [ ] Change 'Enquire Now' to open enquiry form (not contact page)
- [ ] Fix address: Change to '1190A-1192' (not 1194)
- **Files**: Multiple CTA components
- **Actions**:
  - Update button to trigger modal
  - Fix address constant/prop

---

## 🦶 SECTION 4: FOOTER IMPROVEMENTS

### 4.1 Logo Alignment
- [ ] Align footer logo to start at same position as 'established accountants providing...' paragraph
- **File**: `components/layout/Footer.tsx`
- **Action**: Adjust padding/margin

### 4.2 ICAEW Logo Size
- [ ] Increase ICAEW logo size in footer
- **File**: `components/layout/Footer.tsx`
- **Action**: Increase width/height

### 4.3 Text Clarity
- [ ] Make footer text more white and consistent throughout
- **File**: `components/layout/Footer.tsx`
- **Action**: Adjust text-white opacity classes

### 4.4 Missing Services & Sectors
- [ ] Audit current footer links
- [ ] Add all 9 services (alphabetically)
- [ ] Add all 12 sectors (alphabetically, without 'Other')
- **File**: `components/layout/Footer.tsx`

### 4.5 Back to Top Button
- [ ] Remove 'back to top ===' text
- [ ] Add white arrow icon (like insights section)
- **File**: `components/layout/Footer.tsx`
- **Action**: Replace text with arrow icon component

### 4.6 Social Links
- [ ] Remove LinkedIn from footer
- **File**: `components/layout/Footer.tsx`

---

## 📄 SECTION 5: LEGAL PAGES

### 5.1 Create Privacy Page
- [ ] Create `/privacy/page.tsx`
- [ ] Write privacy policy content
- [ ] Add to footer navigation

### 5.2 Create Cookies Page
- [ ] Create `/cookies/page.tsx`
- [ ] Write cookies policy content
- [ ] Add to footer navigation

### 5.3 Clean Up Terms Links
- [ ] Review terms placement (top/bottom consistency)
- [ ] Ensure proper styling

---

## 💼 SECTION 6: PERSONAL TAX PAGE

### 6.1 Remove Pension Box
- [ ] Remove 'Pension & Retirement planning' service box
- **File**: `app/services/taxation-services/personal-tax/page.tsx`
- **Action**: Remove component/section

### 6.2 Update FAQ Answer #2
- [ ] Replace with new deadline text (31 January details)
- **File**: `app/services/taxation-services/personal-tax/page.tsx`
- **Text**:
```
The deadline for online self-assessment returns is 31 January following the end of
the tax year (5 April). For example, the 2024/25 tax year runs from 6 April 2024 to 5
April 2025, with the filing deadline of 31 January 2026. Payment of any tax due is
also required by 31 January. We ensure your return is filed on time and help you plan
for tax payments in advance.
```

### 6.3 Update FAQ Answer #5
- [ ] Replace with new pricing text
- **File**: `app/services/taxation-services/personal-tax/page.tsx`
- **Text**:
```
Our fees are fixed and agreed upfront based on the complexity of your tax affairs. A
straightforward self-assessment return typically starts from as little as £120 + VAT.
More complex returns involving rental income, capital gains, foreign income or
multiple income sources are priced individually. We provide a clear quote before
commencing work. For more information, please contact us for a no-obligation
discussion.
```

### 6.4 UK English Fix
- [ ] Change 'PERSONALIZED SERVICE' to 'PERSONALISED SERVICE'
- [ ] Audit entire site for US spellings (organize → organise, etc.)
- **File**: `app/services/taxation-services/personal-tax/page.tsx`
- **Action**: Global UK English audit

---

## 👔 SECTION 7: WHO WE ARE PAGE

### 7.1 Replace Founder Message
- [ ] Replace current message with new comprehensive text
- [ ] Update credentials to: Raza Samar BA(Hons) MBA BFP FCA
- [ ] Remove 'Raza Hussain' references
- **File**: `app/who-we-are/page.tsx`
- **New Message**:
```
When I founded RUS Chartered Accountants in 1995, I wanted to create more than just another
accountancy firm. I aimed to build a practice that genuinely guided clients towards long-term
financial success—one shaped by real experience, hard-earned insight, and a deep understanding of
what businesses need to thrive.

My own career began as a graduate, moving on to Articled Clerk in a medium-to-large firm of
Chartered Accountants and Registered Auditors, which has since become part of one of the Big Four
global accountancy practices. I started in the Audit department and gained experience auditing large
listed and non-listed PLC companies with turnovers in excess of £100m. Those early years were
instrumental, teaching me the value of precision, professional discipline, and strategic thinking at
the highest level. Later, I moved to a smaller, three-partner firm of Chartered Accountants, where I
worked with SME businesses from a compliance and audit perspective. I also completed my
postgraduate Master's in Business Administration, in addition to becoming a Fellow member of the
Institute of Chartered Accountants in England & Wales. This further strengthened my understanding
of how financial decisions shape organizations, growth, and leadership.

RUS Chartered Accountants, as a firm, is, in many ways, a reflection of that journey. Our success
story is built on dedication, resilience, and a commitment to doing things properly—qualities that
now form the blueprint we use to support our clients. We understand the obstacles businesses face
because we've overcome many of them ourselves. That experience allows us to guide clients with
clarity, confidence, and practical solutions that create meaningful results.

Today, our substantial team—including a group of qualified accountants—brings together specialist
knowledge, sector expertise, and a modern, digital approach that ensures our clients remain fully
supported in an ever-changing financial landscape. We are proud to be a trusted partner to
businesses and individuals across the UK, helping them make informed decisions and achieve
sustainable growth.

Thank you for taking the time to learn more about us. I hope my story inspires confidence in the
support and guidance RUS Chartered Accountants can offer you on your own financial journey.
```

---

## 📰 SECTION 8: INSIGHTS → INSIGHT RENAME

### 8.1 Global Rename
- [ ] Rename all instances of 'Insights' to 'Insight' across website
- **Files**: Multiple (search globally)
- **Locations**:
  - Navigation menus
  - Page titles
  - Component names (may keep as 'Insights' internally)
  - URLs (decide if changing routes)
  - Metadata

### 8.2 Search Functionality
- [ ] Add search button to Insight page
- [ ] Implement search functionality for articles
- **File**: `app/insights/page.tsx`
- **Inspiration**: GP surgery site design

### 8.3 Article Tags System
- [ ] Add visible tags to article cards
- [ ] Add tags to top of individual articles
- **Example Tags**:
  - GP Practice NHS: Taxation, Healthcare, Medical
  - MTD Article: Taxation, Making Tax Digital
- **Files**:
  - `components/insights/InsightCard.tsx`
  - `app/insights/[slug]/page.tsx`

### 8.4 Share Buttons Layout
- [ ] Move share buttons to side of articles
- [ ] Move tags to top of articles
- **File**: `app/insights/[slug]/page.tsx` or article layout

---

## 📊 IMPLEMENTATION STRATEGY

### Phase 1: Quick Wins (High Impact, Low Effort)
1. Text changes (slogan, buttons, ICAEW)
2. Address fix
3. Remove LinkedIn
4. UK English fixes

### Phase 2: Navigation Updates
1. Add Financial Services sector
2. Remove Other sector
3. Update all navigation components
4. Alphabetize footer

### Phase 3: Component Updates
1. Logo sizing
2. Font fixes
3. MTD section
4. Footer improvements

### Phase 4: Content Pages
1. Personal Tax updates
2. Who We Are updates
3. Privacy/Cookies pages

### Phase 5: Insights System
1. Rename to Insight
2. Add search
3. Implement tags
4. Reposition share buttons

---

## ⚠️ PAUSE POINTS (ASK BEFORE PROCEEDING)

1. **URL Changes**: Should 'Insights' route change to 'Insight' or keep as-is?
2. **MTD Logos**: Need source/specification for correct MTD logos
3. **Search Implementation**: What search functionality level? (Simple filter vs. full-text)
4. **Financial Services Content**: Need detailed content for new sector page
5. **Privacy/Cookies Content**: Need legal content or use template?

---

## 📝 NOTES

- All changes maintain existing design system
- Follow established component patterns (8/4/3/6)
- Use British English throughout
- Test navigation links after changes
- Verify mobile responsiveness
- Check accessibility standards

---

**Created**: 2025-12-01
**Status**: Ready for systematic implementation
**Next Action**: Start Phase 1 (Quick Wins)
