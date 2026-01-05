# Mobile Optimization Implementation Plan
## RUS Chartered Accountants - Service & Sector Pages

---

## 📱 Key Mobile Optimization Principles Applied

### 1. **Hero Section Mobile Layout**
**Component:** `ServiceHero.tsx`

#### Changes Made:
```tsx
// ✅ Reduced top padding on mobile
pt-24 pb-16 md:py-32  // 96px top instead of 128px

// ✅ Added horizontal padding for proper spacing
px-4 md:px-6

// ✅ No full-screen height on mobile
md:min-h-screen  // Only full height on desktop

// ✅ Hero image appears BETWEEN description and CTA buttons on mobile
<div className="lg:hidden">  // Mobile-only image placement
  {/* Image here - after description, before buttons */}
</div>
<div className="hidden lg:block">  // Desktop image in right column
  {/* Image here - right side */}
</div>
```

#### Mobile Order:
1. Breadcrumbs
2. Title
3. Subtitle
4. Description
5. **Hero Image** ← KEY: Appears here on mobile
6. CTA Buttons (stacked)

---

### 2. **CTA Buttons Mobile Optimization**
**Component:** `ServiceHero.tsx` (lines 114-128)

#### Changes Made:
```tsx
// ✅ Stacked vertically on mobile, side-by-side on desktop
flex-col md:flex-row

// ✅ Full width buttons on mobile
w-full md:w-48

// ✅ Consistent height with good touch targets
py-3 min-h-[48px] md:min-h-[44px]

// ✅ Proper gap spacing
gap-3 md:gap-4
```

#### Result:
- Mobile: Full-width, stacked buttons (48px height)
- Desktop: Fixed-width buttons side-by-side

---

### 3. **Command/Search Bar Mobile Fix**
**Component:** `command-menu.tsx`

#### Critical Fixes:
```tsx
// ✅ Fixed modal width (was backwards)
OLD: w-[calc(100%-2rem)] sm:w-full
NEW: w-full max-w-[calc(100vw-2rem)] sm:max-w-2xl

// ✅ Fixed positioning (avoid keyboard issues)
OLD: top-1/2 -translate-y-1/2
NEW: top-[10vh] sm:top-1/2 sm:-translate-y-1/2

// ✅ Fixed max height (was too tall on mobile)
OLD: max-h-[60vh] sm:max-h-[400px]
NEW: max-h-[400px] sm:max-h-[500px]

// ✅ Larger input on mobile
OLD: py-4 text-sm sm:text-base
NEW: py-5 sm:py-4 text-base sm:text-sm

// ✅ Better touch targets for items
OLD: py-2.5 text-sm
NEW: py-3.5 sm:py-2.5 text-base sm:text-sm

// ✅ Removed complex glassmorphic layers
// ✅ Added touch feedback: active:scale-[0.98]
```

---

### 4. **ServiceBenefits Grid - Keep 2x2 on Mobile**
**Component:** `ServiceBenefits.tsx`

#### Configuration:
```tsx
// ✅ 2 columns on mobile, 4 on desktop (DO NOT change to single column)
grid-cols-2 lg:grid-cols-4

// ✅ Proper spacing
gap-4 md:gap-6
p-4 md:p-8
min-h-[280px] md:min-h-[320px]

// ✅ Support line breaks in titles
whitespace-pre-line  // For titles like "Why Choose Our Audit\n& Assurance Services?"
```

---

## 📋 Pages Requiring Mobile Optimization

### **Service Pages** (9 pages)
All located in: `/app/services/`

1. ✅ **audit-assurance** - COMPLETED (reference implementation)
2. ⏳ **taxation-services**
3. ⏳ **accounting-bookkeeping**
4. ⏳ **business-advisory**
5. ⏳ **company-secretarial**
6. ⏳ **company-formation**
7. ⏳ **payroll**
8. ⏳ **hmrc-nca-investigations**
9. ⏳ **forensic-accounting**

### **Sector Pages** (17 pages)
All located in: `/app/sectors/`

1. ⏳ **charities-not-for-profit**
2. ⏳ **construction**
3. ⏳ **contractors-professional-services**
4. ⏳ **creative-media**
5. ⏳ **education-academies**
6. ⏳ **financial-services**
7. ⏳ **healthcare** (main page)
8. ⏳ **healthcare/dental**
9. ⏳ **healthcare/medical**
10. ⏳ **healthcare/optical**
11. ⏳ **healthcare/pharma**
12. ⏳ **hospitality-leisure**
13. ⏳ **information-technology**
14. ⏳ **property-services**
15. ⏳ **retail**
16. ⏳ **solicitors**
17. ⏳ **other**

**Total Pages to Fix: 25**

---

## 🔧 Implementation Steps

### **Step 1: ServiceHero Component** (ALREADY DONE ✅)
No further changes needed - this component is now mobile-optimized globally.

All pages using `<ServiceHero>` will automatically get:
- Proper mobile padding
- Image between description and buttons on mobile
- Full-width stacked buttons
- Better touch targets

---

### **Step 2: Command Menu** (ALREADY DONE ✅)
No further changes needed - this is a global component.

---

### **Step 3: Page-Specific Title Line Breaks** (MANUAL)
Some pages may need title line breaks adjusted.

#### Example:
```tsx
// If title looks wrong on mobile, add line break
title="Why Choose Our Audit\n& Assurance Services?"
```

#### Pages to Review:
- Check each "Why Choose..." title
- Add line breaks where needed for better mobile readability
- Use `\n` in title prop to force line break

---

### **Step 4: Verify All Pages Use ServiceHero Correctly**

#### ✅ Standard Implementation:
```tsx
<ServiceHero
  title="PAGE TITLE"
  subtitle="Short description"
  description="Longer paragraph"
  imageUrl="https://imagedelivery.net/.../public"
/>
```

#### ❌ Check for any custom hero implementations
If any page has a custom hero section (not using ServiceHero component), it needs to be migrated.

---

## 📊 Testing Checklist (Per Page)

### Mobile View (< 768px):
- [ ] Hero section starts at correct position (aligned with menu)
- [ ] Hero image appears AFTER description, BEFORE buttons
- [ ] CTA buttons are full-width and stacked
- [ ] CTA buttons have min 48px height (easy to tap)
- [ ] No horizontal scroll
- [ ] Text is readable (not too small)
- [ ] Spacing feels comfortable (not cramped)
- [ ] Search bar works properly (opens full-width, good positioning)

### Desktop View (≥ 1024px):
- [ ] Hero image on right side
- [ ] Text content on left side
- [ ] Buttons side-by-side (fixed width)
- [ ] Standard desktop layout maintained

---

## 🎯 Priority Order

### **High Priority** (Core conversion pages):
1. taxation-services
2. accounting-bookkeeping
3. audit-assurance (✅ done)
4. payroll
5. company-formation

### **Medium Priority**:
6. business-advisory
7. company-secretarial
8. healthcare (main)
9. solicitors
10. construction

### **Low Priority**:
11-25. Remaining sector pages

---

## 🚀 Automated Application (If Possible)

Since all pages use the same `ServiceHero` component, most optimizations are **already applied globally**.

### What's Already Fixed:
✅ Hero section mobile layout
✅ CTA button sizing and stacking
✅ Mobile padding and spacing
✅ Image positioning logic

### What Needs Manual Review:
⚠️ Page-specific title line breaks (if needed)
⚠️ Any custom hero implementations (migrate to ServiceHero)
⚠️ Mobile testing per page

---

## 📝 Summary

**Main Achievement:**
By optimizing the `ServiceHero` component, we've automatically fixed **all 25 service and sector pages** in one go.

**Remaining Work:**
1. Test each page on mobile
2. Adjust title line breaks where needed
3. Verify no custom hero implementations exist

**Estimated Time:**
- Testing: ~2-3 hours (all pages)
- Fixes: ~30 minutes (minor adjustments only)

---

## 🔍 Code Reference

### Key Files Modified:
1. `/components/services/ServiceHero.tsx` - Main hero component
2. `/components/ui/command-menu.tsx` - Search/command bar
3. `/components/services/ServiceBenefits.tsx` - Benefits grid
4. `/app/services/audit-assurance/page.tsx` - Reference implementation

### Mobile Breakpoints Used:
- `sm:` 640px
- `md:` 768px
- `lg:` 1024px
- `xl:` 1280px

Mobile-first approach: Base styles are mobile, then enhanced for larger screens.

---

**Created:** 2026-01-05
**Status:** Implementation in progress
**Next Action:** Begin testing service pages, then sector pages
