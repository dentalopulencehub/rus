# Medical Page & IR35 Blog Implementation Plan

**Date**: 2025-12-05
**Project**: RUS Chartered Accountants Website
**Status**: Ready for Approval

---

## Overview

This document outlines the implementation plan for updates to the Medical page and creation of a new IR35 blog post for the insights section.

---

## Current Structure Analysis

### Files Involved
- **Medical Page**: `/app/sectors/healthcare/medical/page.tsx`
- **FAQ Component**: `/components/services/ServiceFAQ.tsx`
- **Insights Data**: `/lib/insights-data.ts`

### Component Architecture
- Medical page uses `ServiceFAQ` component for FAQ sections
- `ServiceFAQ` is a client-side component with expand/collapse functionality
- Insights system stores all blog posts in `/lib/insights-data.ts` as TypeScript objects

---

## Issue #1: FAQ Answer Visibility Problem

### Current Problem
**Location**: `/components/services/ServiceFAQ.tsx` - Line 74

```tsx
className={`transition-all duration-200 ease-in-out ${
  openIndex === index
    ? 'max-h-96 opacity-100'  // ← PROBLEM: Limited to 384px height
    : 'max-h-0 opacity-0'
}`}
```

**Issue**: Long FAQ answers are cut off at 384px (max-h-96) with no scroll functionality, making content invisible.

### Solution
Change `max-h-96` to `max-h-[2000px]` or higher to accommodate longer answers while maintaining smooth animation:

```tsx
className={`transition-all duration-200 ease-in-out ${
  openIndex === index
    ? 'max-h-[2000px] opacity-100'  // ← SOLUTION: Allow full content
    : 'max-h-0 opacity-0'
}`}
```

**File to Edit**: `/components/services/ServiceFAQ.tsx`
**Line**: 74
**Change**: `max-h-96` → `max-h-[2000px]`

---

## Issue #2: Medical Page Content Updates

### Change 1: Replace "Private Practitioners" with "Private Clinics" in Dropdown FAQ

**Location**: `/app/sectors/healthcare/medical/page.tsx` - Lines 167-183

**Current Code**:
```tsx
{
  title: 'Private Practitioners',
  description: 'Business structure planning and tax compliance for private medical practices',
  icon: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>
  ),
},
```

**Action**: This entry is in the `whoCaterTo` array. Note that "Private Clinics" already exists at lines 176-183. Need to REPLACE "Private Practitioners" entry (lines 167-174) text only.

**Changes Required**:
- Line 167: `title: 'Private Practitioners',` → `title: 'Private Clinics',`
- Line 168: `description: 'Business structure planning and tax compliance for private medical practices',` → `description: 'Financial management and compliance for private medical clinics and healthcare facilities',`

**Note**: Keep the icon the same (person icon is appropriate).

---

### Change 2: Update NHS Pension Section Title

**Location**: `/app/sectors/healthcare/medical/page.tsx` - Lines 186-260 (nhsPensions array)

**Current Code** (Line 188):
```tsx
{
  title: 'NHS Pension Scheme Guidance',
  description: 'Expert advice on NHS pension schemes and contribution calculations',
  // ... icon
},
```

**Change Required**:
- Line 188: `title: 'NHS Pension Scheme Guidance',` → `title: 'Locum form A & B guidance',`
- Line 189: Update description to match new title:
  `description: 'Expert guidance on completing Locum form A & B for NHS pension purposes',`

---

### Change 3: Update NHS Pension FAQ Answer

**Location**: `/app/sectors/healthcare/medical/page.tsx` - Line 318-320

**Current Code**:
```tsx
{
  question: 'Do you specialise in NHS pension and superannuation support?',
  answer: 'Yes. We provide expert NHS Pension Scheme guidance, including annual superannuation certificates, Type 1 and Type 2 forms, pension contribution calculations and pension tax charge planning. Our team ensures your contributions are correct, deadlines are met and your pension position is fully understood.',
},
```

**New Answer Required**:
```tsx
{
  question: 'Do you specialise in NHS pension and superannuation support?',
  answer: 'Yes. We provide expert NHS Pension Scheme guidance, including annual superannuation certificates, Type 1 and Type 2 forms, pension contribution calculations, assistance with locum form A & B and pension tax charge planning. Our team ensures your contributions are correct, deadlines are met and your pension position is fully understood.',
},
```

**Change**: Insert "assistance with locum form A & B and" after "pension contribution calculations,"

---

### Change 4: Remove PCN Question and Add Expenditure Guidance Question

**Location**: `/app/sectors/healthcare/medical/page.tsx` - Lines 330-337

**Current Code to REMOVE**:
```tsx
{
  question: 'Can you help with Primary Care Network (PCN) accounting?',
  answer: (
    <>
      Yes. We provide PCN financial statements, income tracking and allocation, claim management, budgeting and forecasting, ARRS employment and <Link href="/services/payroll" className="text-[#01458f] underline hover:text-[#013a75] transition-colors">payroll support</Link> and governance advice.
    </>
  ),
},
```

**New Question to ADD**:
```tsx
{
  question: 'Do you provide guidance on what expenditure I can claim for as a medic?',
  answer: 'Yes. We provide comprehensive guidance on allowable expenditure for medical professionals, including home office costs, professional subscriptions, indemnity insurance, training and CPD, medical equipment, travel expenses and other deductible costs. Our team ensures you claim all legitimate expenses while maintaining HMRC compliance and can advise on the specific rules that apply to your situation whether you are a GP partner, locum doctor, consultant or private practitioner.',
},
```

**Note**: The answer above is generated based on typical medical professional expenses. If you need this customized further, let me know.

---

## Issue #3: Create IR35 Blog Post for Insights

### Background
Based on the provided UK IR35 content, we need to create a comprehensive blog post covering:
- What IR35 is
- Key factors determining IR35 status (control, substitution, mutuality of obligation, etc.)
- Contract wording vs working practices
- How to demonstrate self-employment
- Impact on UK contractors

### Implementation Details

**Location**: `/lib/insights-data.ts`

**Action**: Add new post to `insightPosts` array

**Post Details**:
- **ID**: '7' (next available)
- **Slug**: 'ir35-key-factors-employment-status-uk-contractors'
- **Category**: Tax Insights or Sector Specific (recommend: Tax Insights)
- **Author**: Tax Director
- **Tags**: ['IR35', 'contractors', 'employment status', 'HMRC', 'off-payroll', 'intermediaries legislation']
- **Related Services**: ['/sectors/contractors-professional-services', '/services/taxation-services']

### IR35 Blog Post Content Structure

Based on the provided source material, the blog post will cover:

1. **Introduction to IR35**
   - What is IR35 and why was it invented?
   - Off-payroll rules (2017 public sector, 2021 private sector)
   - Contract wording vs working practices

2. **The Three Most Important Factors**
   - Control & Direction
   - Personal Service / Substitution
   - Mutuality of Obligation

3. **Additional Employment Status Factors**
   - Provision of Equipment
   - Financial Risk
   - Basis of Payment
   - Part & Parcel
   - Exclusive Service
   - Intention of the Parties
   - In Business On Your Own Account

4. **Practical Guidance**
   - Contract review importance
   - IR35 insurance recommendations
   - Working practices alignment
   - What to do if selected for HMRC enquiry

5. **Key Takeaways for UK Contractors**
   - Contract review checklist
   - Working practice documentation
   - Professional support recommendations

### Content Length
Approximately 2500-3000 words (similar to Spring Budget post) with comprehensive coverage of all factors.

---

## Implementation Sequence

### Phase 1: Fix FAQ Display Issue ✓
**Priority**: HIGH (affects UX across all FAQ sections)

1. Open `/components/services/ServiceFAQ.tsx`
2. Line 74: Change `max-h-96` to `max-h-[2000px]`
3. Save file

**Estimated Time**: 1 minute

---

### Phase 2: Medical Page Content Updates ✓
**Priority**: HIGH (client-requested changes)

1. Open `/app/sectors/healthcare/medical/page.tsx`
2. Make the following changes:
   - **Lines 167-168**: Update Private Practitioners to Private Clinics (title + description)
   - **Lines 188-189**: Update NHS Pension Scheme Guidance to Locum form A & B guidance
   - **Line 320**: Insert "assistance with locum form A & B and" into FAQ answer
   - **Lines 330-337**: Remove entire PCN question object
   - **After line 329**: Add new expenditure guidance question object
3. Save file

**Estimated Time**: 5 minutes

---

### Phase 3: Create IR35 Blog Post ✓
**Priority**: MEDIUM (new content creation)

1. Open `/lib/insights-data.ts`
2. Add new post object to `insightPosts` array (after post id: '6')
3. Create comprehensive IR35 content based on provided source
4. Save file

**Estimated Time**: 20-30 minutes (content writing)

---

### Phase 4: Testing & Verification ✓
**Priority**: CRITICAL (ensure no regressions)

1. Run `npm run dev` to start development server
2. Navigate to `/sectors/healthcare/medical` page
3. Verify:
   - FAQ answers display fully without cutoff
   - "Private Clinics" appears in Who We Cater To dropdown
   - NHS pension section shows "Locum form A & B guidance"
   - NHS pension FAQ answer includes locum form A & B mention
   - PCN question is removed
   - New expenditure guidance question appears and displays correctly
4. Navigate to `/insights` page
5. Verify:
   - New IR35 blog post appears in listings
   - Post opens correctly at `/insights/ir35-key-factors-employment-status-uk-contractors`
   - All content renders properly
   - Related posts display correctly
6. Check for TypeScript errors
7. Check for console errors

**Estimated Time**: 10 minutes

---

## Code Changes Summary

### File 1: `/components/services/ServiceFAQ.tsx`
**Lines Changed**: 1
**Type**: Bug fix

```diff
- ? 'max-h-96 opacity-100'
+ ? 'max-h-[2000px] opacity-100'
```

---

### File 2: `/app/sectors/healthcare/medical/page.tsx`
**Lines Changed**: ~15
**Type**: Content updates

**Changes**:
1. Private Practitioners → Private Clinics (title + description)
2. NHS Pension Scheme Guidance → Locum form A & B guidance
3. NHS FAQ answer update (add locum form A & B mention)
4. Remove PCN question
5. Add expenditure guidance question

---

### File 3: `/lib/insights-data.ts`
**Lines Added**: ~350
**Type**: New content

**Changes**:
1. Add new IR35 blog post object to `insightPosts` array

---

## Risk Assessment

### Low Risk Changes ✓
- FAQ component max-height fix (isolated CSS change)
- Text content updates on medical page (no logic changes)

### Medium Risk Changes
- New FAQ question addition (ensure proper TypeScript typing)
- IR35 blog post (ensure all required fields present)

### Mitigation
- Test all changes locally before deployment
- Review TypeScript compilation for errors
- Manually verify all updated content displays correctly
- Check mobile responsiveness of FAQ sections

---

## Rollback Plan

If issues arise:

1. **FAQ Component**: Revert line 74 to `max-h-96`
2. **Medical Page**: Git revert commit or manually restore from this document
3. **IR35 Post**: Remove new post object from array

All changes are non-destructive and easily reversible.

---

## Post-Implementation Checklist

- [ ] FAQ answers display fully without scroll issues
- [ ] Private Clinics appears correctly in dropdown
- [ ] NHS pension section updated correctly
- [ ] NHS FAQ answer includes locum form A & B
- [ ] PCN question removed
- [ ] Expenditure guidance question added and functional
- [ ] IR35 blog post appears in insights
- [ ] IR35 post content renders correctly
- [ ] No TypeScript errors
- [ ] No console errors
- [ ] Mobile view tested
- [ ] All links functional

---

## Notes

- All changes follow existing code patterns and conventions
- TypeScript strict mode compliance maintained
- 2-space indentation preserved
- Component structure unchanged (only content updates)
- SEO metadata included in IR35 post for search optimization

---

## Approval Required

**Status**: AWAITING CLIENT APPROVAL

Please review this implementation plan and confirm:
1. Content changes are accurate and complete
2. IR35 blog post scope is appropriate
3. Ready to proceed with implementation

---

**End of Implementation Plan**
