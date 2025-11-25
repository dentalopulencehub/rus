# RUS Chartered Accountants - Typography Brand Guidelines

## Overview
Our typography system is designed to match the professional, condensed aesthetic of the RUS brand logo while maintaining excellent readability across all digital platforms.

---

## Font Families

### Primary Font: Fira Sans Condensed
**Usage:** Headings, navigation, UI elements
**Rationale:** Matches the condensed, humanist style of "Chartered Accountants" text in the RUS logo
**Weights Available:** 200 (Extra Light), 300 (Light), 400 (Normal), 500 (Medium), 600 (Semibold), 700 (Bold)

**Implementation:**
```css
font-family: var(--font-fira-sans-condensed), sans-serif;
```

### Secondary Font: Inter
**Usage:** Body text, longer content
**Rationale:** Excellent readability for extended reading
**Implementation:**
```css
font-family: var(--font-inter), sans-serif;
```

---

## Typography Hierarchy

### H1 - Page Titles
**Font:** Fira Sans Condensed
**Weight:** 400 (Normal)
**Letter Spacing:** -0.025em (tracking-tight)
**Color:** #111
**Transform:** None (natural case)
**Sizes:**
- Mobile: `text-4xl` (2.25rem / 36px)
- Tablet: `text-5xl` (3rem / 48px)
- Desktop: `text-6xl` to `text-8xl` (3.75rem to 6rem / 60px to 96px)

**Usage:** Hero titles, main page headings

**Example:**
```tsx
<h1 className="text-6xl md:text-7xl lg:text-8xl text-gray-900 leading-tight tracking-tighter">
  Taxation Services
</h1>
```

---

### H2 - Section Titles
**Font:** Fira Sans Condensed
**Weight:** 400 (Normal)
**Letter Spacing:** -0.025em (tracking-tight)
**Color:** #111
**Transform:** None (natural case)
**Sizes:**
- Mobile: `text-3xl` (1.875rem / 30px)
- Desktop: `text-4xl` (2.25rem / 36px)

**Usage:** Major section headings throughout the site

**Example:**
```tsx
<h2 className="text-3xl md:text-4xl text-gray-900 mb-3 tracking-tight">
  Who We Help
</h2>
```

---

### H3 - Subsection Titles
**Font:** Fira Sans Condensed
**Weight:** 400 (Normal)
**Letter Spacing:** -0.025em (tracking-tight)
**Color:** #111
**Transform:** None (natural case)
**Sizes:** `text-xl` to `text-2xl` (1.25rem to 1.5rem / 20px to 24px)

**Usage:** Card titles, component headings

**Example:**
```tsx
<h3 className="text-xl text-gray-900 mb-2 leading-tight">
  Business Tax Compliance
</h3>
```

---

### H4, H5, H6 - Small Headings
**Font:** Fira Sans Condensed
**Weight:** 400 (Normal)
**Letter Spacing:** Normal
**Color:** #111
**Transform:** None

**Usage:** Minor headings, labels

---

### Body Text - Paragraphs
**Font:** Inter (for readability) or Fira Sans Condensed
**Weight:** 400 (Normal)
**Color:** #626f86 (text-gray-600)
**Sizes:**
- Small: `text-sm` (0.875rem / 14px)
- Base: `text-base` (1rem / 16px)
- Large: `text-lg` (1.125rem / 18px)
- XL: `text-xl` (1.25rem / 20px)

**Example:**
```tsx
<p className="text-base md:text-lg text-gray-600 leading-relaxed">
  Body content goes here
</p>
```

**Apply Inter font for long-form content:**
```tsx
<p className="font-body text-base text-gray-600 leading-relaxed">
  Long-form body content with better readability
</p>
```

---

### Special Cases

#### Uppercase Small Titles (Benefits/Features)
**Font:** Fira Sans Condensed
**Weight:** 700 (Bold) - Exception to maintain visual hierarchy in small cards
**Transform:** UPPERCASE
**Tracking:** `tracking-wide`
**Size:** `text-xs` to `text-sm`

**Usage:** Small card titles, feature labels, benefit headings

**Example:**
```tsx
<h3 className="text-xs md:text-sm font-bold text-gray-900 mb-2 tracking-wide uppercase">
  QUALIFIED SPECIALISTS
</h3>
```

#### Italic Light Titles (Special Sections)
**Font:** Fira Sans Condensed
**Weight:** 300 (Light)
**Style:** Italic
**Usage:** Featured section titles, special callouts

**Example:**
```tsx
<h2 className="text-3xl md:text-4xl font-light italic text-gray-900 mb-3 tracking-tight">
  Our Taxation Expertise
</h2>
```

---

## Color System

### Text Colors

**Primary Text (Headings):**
- `text-gray-900` (#111) - Main headings, high emphasis
- `color: #111` (global CSS)

**Secondary Text (Body):**
- `text-gray-600` (#626f86) - Body text, descriptions
- `text-gray-700` - Medium emphasis text

**Subtle Text:**
- `text-gray-500` - Low emphasis, captions
- `text-gray-400` - Placeholder text

**Brand Accent:**
- `text-[#01458f]` - Links, highlights, hover states
- Use sparingly for calls-to-action and interactive elements

---

## Letter Spacing (Tracking)

**Tight (Headings):**
```css
letter-spacing: -0.025em;
/* Tailwind: tracking-tight or tracking-tighter */
```

**Wide (Small Uppercase Text):**
```css
letter-spacing: 0.05em;
/* Tailwind: tracking-wide */
```

**Normal (Body Text):**
```css
letter-spacing: 0;
/* Default, no class needed */
```

---

## Line Height (Leading)

**Headings:**
- `leading-tight` - Large headings (1.25)
- `leading-snug` - Medium headings (1.375)

**Body Text:**
- `leading-relaxed` - Body paragraphs (1.625)
- `leading-normal` - Standard text (1.5)

---

## Global CSS Implementation

The base typography styles are defined in `app/globals.css`:

```css
/* Section Headers (H1, H2, H3) */
h1, h2, h3 {
  font-family: var(--font-fira-sans-condensed), sans-serif;
  font-weight: 400; /* Normal */
  letter-spacing: -0.025em; /* tracking-tight */
  color: #111;
}

/* Subtitles and body (H4, H5, H6, P) */
h4, h5, h6, p {
  font-family: var(--font-fira-sans-condensed), sans-serif;
  font-weight: 400; /* Normal */
}

/* Body text can optionally use Inter for better readability */
.font-body, body p {
  font-family: var(--font-inter), sans-serif;
}
```

---

## Best Practices

### ✅ DO:
- Use natural case for all headings (not uppercase)
- Apply `font-weight: 400` for main headings (h1, h2, h3)
- Use `tracking-tight` for large headings
- Use Inter font for long-form body content
- Maintain consistent spacing with `leading-relaxed` for body text
- Use `text-gray-900` for headings, `text-gray-600` for body

### ❌ DON'T:
- Add `font-bold` to h1, h2, h3 elements (conflicts with global styles)
- Use uppercase transform on large headings
- Mix multiple font weights within the same component
- Use Fira Sans Condensed for very long paragraphs (use Inter instead)
- Override global typography without documented reason

---

## Component-Specific Guidelines

### Service Hero Titles
- Size: `text-6xl md:text-7xl lg:text-8xl`
- Weight: 400 (inherits from global)
- Spacing: `tracking-tighter`
- No uppercase

### Section Headers
- Size: `text-3xl md:text-4xl`
- Weight: 400 (inherits from global)
- Spacing: `tracking-tight`
- Margin: `mb-3`

### Card Titles (Large)
- Size: `text-xl` to `text-2xl`
- Weight: 400 or 600 (semibold for emphasis)
- Spacing: Default or `tracking-tight`

### Card Titles (Small/Feature Cards)
- Size: `text-xs` to `text-sm`
- Weight: 700 (bold - exception for small uppercase text)
- Transform: UPPERCASE
- Spacing: `tracking-wide`

---

## Responsive Typography

### Mobile-First Approach
Always start with mobile sizes and scale up:

```tsx
<h1 className="text-4xl md:text-5xl lg:text-6xl">
  Title
</h1>
```

### Recommended Breakpoints
- **Mobile:** base size (text-4xl, text-3xl, text-xl)
- **Tablet (md):** +1 size increase (text-5xl, text-4xl, text-2xl)
- **Desktop (lg):** +2 size increase (text-6xl, text-5xl, text-3xl)

---

## Examples from Codebase

### ✅ Correct Implementation

**Service Hero (ServiceHero.tsx):**
```tsx
<h1 className="text-6xl md:text-7xl lg:text-8xl text-gray-900 leading-tight tracking-tighter">
  {title}
</h1>
```

**Section Header (WhoWeHelp.tsx):**
```tsx
<h2 className="text-3xl md:text-4xl text-gray-900 mb-3 tracking-tight">
  Who We Help
</h2>
```

**Body Text:**
```tsx
<p className="text-base md:text-lg text-gray-600 leading-relaxed">
  Description text
</p>
```

### ❌ Incorrect Implementation

**Overriding Global Styles:**
```tsx
<!-- Don't do this -->
<h2 className="text-4xl font-bold text-gray-900">
  Title
</h2>

<!-- Do this instead -->
<h2 className="text-4xl text-gray-900">
  Title
</h2>
```

---

## Testing Typography

### Visual Consistency Checklist
- [ ] All h1, h2, h3 use weight 400 (unless special case)
- [ ] No uppercase transform on large headings
- [ ] Consistent tracking-tight on headings
- [ ] Body text uses text-gray-600
- [ ] Long-form content uses Inter font
- [ ] Proper responsive sizing (mobile → tablet → desktop)

---

## Version History

- **v1.0** (2025-11-21): Initial typography guidelines established
  - Fira Sans Condensed as primary font (weight 400)
  - Inter as body font
  - Removed uppercase transform from headings
  - Standardized font weights across components

---

## Questions or Feedback?

For typography-related questions or suggestions, please:
1. Check this document first
2. Review `app/globals.css` for global styles
3. Check `tailwind.config.ts` for font configuration
4. Consult with the design team for exceptions

---

**Last Updated:** November 21, 2025
**Maintained By:** Development Team
