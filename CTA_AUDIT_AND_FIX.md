# CTA Audit & Standardization Plan

## Current State Analysis

### Pages Using CTASimple Component (Correct ✅)
1. **Taxation Services** - Uses `<CTASimple />` component
2. **Audit & Assurance** - Uses `<CTASimple />` component

### Pages With Custom CTAs (Need Fixing ❌)
3. **Accounting & Bookkeeping** - Custom blue gradient box with 2 buttons
4. **Business Advisory** - Custom dark gradient sections
5. **Company Secretarial** - Custom dark gradient sections
6. **Company Formation** - Custom dark gradient sections
7. **Payroll** - Custom blue gradient box with 2 buttons
8. **HMRC & NCA Investigations** - Custom dark gradient sections
9. **Forensic Accounting** - Custom dark gradient sections

## Standard CTA Pattern

All service pages should follow the same 2-CTA structure:

### CTA #1 (After ServiceOverview, Before Benefits)
- **Component**: Blue gradient box (like CTASimple but service-specific)
- **Structure**:
  - White background section wrapper
  - Blue gradient rounded box with geometric patterns
  - Service-specific heading (large, bold)
  - Supporting text
  - **SINGLE white button** with glassmorphic layers
  - Contact details (phone, email, address)

### CTA #2 (After Testimonials, Before FAQs)
- **Component**: Blue gradient box (simpler version)
- **Structure**:
  - White background section wrapper
  - Blue gradient rounded box with geometric patterns
  - Action-focused heading
  - Supporting text
  - **SINGLE white button**
  - NO contact details (cleaner)

## Required Changes

### Fix All Custom CTAs
Replace all custom dark gradient sections and dual-button CTAs with the standardized blue gradient box pattern.

### Ensure Consistency
- Same geometric SVG pattern across all pages
- Same button styling (single white button with 3-layer glassmorphic effect)
- Same spacing and typography
- Service-specific copy only

### Button Text Standards
- CTA #1: "Get Started", "Enquire Now", or "Get a Quote"
- CTA #2: "Contact Us Today", "Get in Touch", or "Schedule Consultation"

## Implementation Checklist

- [x] Fix Accounting & Bookkeeping CTAs - COMPLETED
- [ ] Fix Business Advisory CTAs - Needs 2 CTAs (blue gradient box pattern)
- [ ] Fix Company Secretarial CTAs - Needs 2 CTAs (blue gradient box pattern)
- [ ] Fix Company Formation CTAs - Needs 2 CTAs (blue gradient box pattern)
- [ ] Fix Payroll CTAs - Needs 2 CTAs (convert dual-button to single-button)
- [ ] Fix HMRC & NCA Investigations CTAs - Needs 2 CTAs (convert dark gradient to blue gradient box)
- [ ] Fix Forensic Accounting CTAs - Needs 2 CTAs (convert dark gradient to blue gradient box)
- [ ] Verify all CTAs match the standard pattern
- [ ] Test visual consistency across all pages

## Pattern Applied
✅ **Accounting & Bookkeeping** now has:
- CTA #1: Before Benefits (blue gradient box, single button, contact details)
- CTA #2: Before FAQs (blue gradient box, single button, NO contact details)
