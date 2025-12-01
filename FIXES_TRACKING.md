# Fixes Tracking Document - Live Progress

**Started**: 2025-12-01
**Status**: In Progress

---

## ✅ COMPLETED

### Phase 1: Quick Wins
- [x] Changed slogan from long text to 'Est. 1995'
- [x] Reduced logo size by 5% (60px → 57px)
- [x] Changed all 'Enquire Now' buttons to 'Contact Us'
- [x] Changed 'ICAEW Certified' to 'ICAEW Chartered' (4 locations)
- [x] Fixed address to '1190A-1192' in CTASimple component
- [x] Removed LinkedIn from footer social links

### Phase 2: Navigation Updates
- [x] Created Financial Services sector page (complete with 8/4/3/6 pattern)
- [x] Added Financial Services to SectorsDropdown (top navigation)
- [x] Added Financial Services to BottomBar (floating navigation)
- [x] Added Financial Services to Footer (alphabetized all)
- [x] Added Financial Services to CommandMenu (search)
- [x] Removed "Other" sector from all navigation menus
- [x] Alphabetized Footer services and sectors lists

### Phase 3: Text & Content Updates
- [x] Renamed "Insights" to "Insight" in all navigation (Header, Footer, CommandMenu)
- [x] Updated page titles and headings to use "Insight"

### Phase 4: Content Pages
- [x] Updated Who We Are founder message (comprehensive new text)
- [x] Updated founder credentials to: Raza Samar BA(Hons) MBA BFP FCA
- [x] Personal Tax page: Removed Pension & Retirement Planning service
- [x] Personal Tax page: Updated FAQ #2 (deadline with 2024/25 example)
- [x] Personal Tax page: Updated FAQ #5 (pricing starts from £120 + VAT)

### Phase 5: Insight System
- [ ]

---

## 🔄 IN PROGRESS

**Current Phase**: Preparing Phase 2 - Sectors & Navigation Updates
**Last Completed**: Phase 1 - Quick Wins (ALL DONE ✓)

---

## ⏸️ BLOCKED / NEED INFO

1. **MTD Logos**: Need correct Making Tax Digital logos for IntegrationSection
2. **Privacy/Cookies Content**: Need legal content for new pages

---

## 📋 DECISIONS MADE

1. **URL Change**: YES - Change `/insights` to `/insight` across site
2. **Financial Services**: Create following existing sector pattern with British English
3. **Search**: Already implemented, just needs to be visible/accessible
4. **Address**: Fix to `1190A-1192` (not 1194)

---

## 🎯 CURRENT PHASE: PHASE 1 - QUICK WINS

### Task 1: Change slogan to 'Est. 1995'
- [ ] File: `components/home/Hero.tsx`
- [ ] Find current text
- [ ] Replace with 'Est. 1995'

### Task 2: Change 'Enquire Now' to 'Contact Us' globally
- [ ] Search all files for 'Enquire Now'
- [ ] Replace with 'Contact Us'
- [ ] Verify consistency

### Task 3: Change 'ICAEW Certified' to 'ICAEW Chartered'
- [ ] Search for 'ICAEW Certified'
- [ ] Replace with 'ICAEW Chartered'

### Task 4: Fix address to 1190A-1192
- [ ] Find address references
- [ ] Update to correct format

### Task 5: Remove LinkedIn from footer
- [ ] File: `components/layout/Footer.tsx`
- [ ] Remove LinkedIn social link

### Task 6: UK English - 'PERSONALIZED' to 'PERSONALISED'
- [ ] Global search for US spellings
- [ ] Replace with UK English

---

## 📝 NOTES

- Maintaining glassmorphic design system
- Following 8/4/3/6 component patterns
- British English throughout
- Testing after each section
