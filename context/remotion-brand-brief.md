# RUS Chartered Accountants - Brand Brief for Remotion Agent

## Company
**RUS Chartered Accountants** - Established 1995, Birmingham, UK
Chartered Accountants, Registered Auditors & Tax Advisors

## Brand Tagline
**Professional. Competent. Integral.**

## Brand Personality
Premium, minimal, corporate. Think Apple/Stripe/Atlassian. Clean, confident, trustworthy. Not flashy, not playful. Authoritative but approachable.

---

## Color Palette

| Token | Hex | Usage |
|-------|-----|-------|
| **Primary Blue** | `#01458f` | Main brand color, CTAs, accents |
| **Dark Blue** | `#002d5c` | Gradient endpoints, footer, depth |
| **Light Blue** | `#0052cc` | Gradient secondary, hover states |
| **Hero Background** | `#F0F7FF` | Very light blue tint |
| **White** | `#ffffff` | Backgrounds, cards |
| **Gray 50** | `#f9fafb` | Alternating section backgrounds |
| **Gray 900** | `#111111` | Headings, primary text |
| **Gray 600** | `#626f86` | Body text, descriptions |
| **Gray 400** | `#9ca3af` | Subtle text, captions |

### Gradient (used in CTA sections)
```css
background: linear-gradient(to bottom right, #01458f, #0052cc);
```

### Blue Accent Line (used as dividers)
```css
width: 64px; height: 3px; background: #01458f;
```

---

## Typography

### Primary Font: Frutiger 57 Condensed
- **Fallback:** Fira Sans Condensed (Google Fonts), Barlow Condensed
- **Usage:** ALL headings, navigation, UI elements, logo text
- **Characteristic:** Condensed, humanist sans-serif. Matches the "Chartered Accountants" text in the RUS logo
- **Default weight:** 400 (Normal) for headings
- **Letter spacing:** -0.025em (tight) for headings

**For Remotion:** Use `Fira Sans Condensed` from Google Fonts as the primary font (Frutiger is a licensed font). It's the closest match.

### Secondary Font: Inter
- **Usage:** Body text, longer paragraphs
- **Available from:** Google Fonts

### Typography Rules
- Headings: weight 400, tracking-tight, color #111
- Body: weight 400, color #626f86
- Small uppercase labels: weight 700, tracking-wide, uppercase
- NO bold on large headings
- NO uppercase on large headings

---

## Logo

### Logo File (SVG - for website)
```
/public/RUS logo.svg
```
- Header display height: 57px
- The logo contains the text "RUS" in large bold letters with "CHARTERED ACCOUNTANTS" beneath and "REGISTERED AUDITORS & TAX ADVISORS" below that

### Logo Image (PNG - hosted on Cloudflare)
```
https://imagedelivery.net/W93NbEGaswuledAsk5GMeA/85daba7e-8f6f-42ea-772c-15a7bea6dd00/public
```
Use this for the Remotion animation (PNG renders better in video).

### Logo Layout
The logo is a **vertical stack**:
1. **"RUS"** - Large, bold, navy blue (#01458f)
2. **"CHARTERED ACCOUNTANTS"** - Smaller, condensed, below
3. **"REGISTERED AUDITORS & TAX ADVISORS"** - Smallest line, below

---

## Key Brand Stats (for animation content)
- `30+` Years of Trusted Expertise
- `7,000+` Businesses & Individuals Served
- `ICAEW` Regulated & Registered Audit Firm
- Founded: 1995
- Location: Birmingham, UK

---

## Visual Design Patterns

### Card Style
- White background, rounded-lg (8px radius)
- Blue top accent border: `border-top: 3px solid #01458f`
- OR blue left accent border: `border-left: 3px solid #01458f`
- Subtle shadow, hover: shadow-lg

### Section Rhythm
Alternating backgrounds: white -> gray-50 -> white -> gray-50 -> blue gradient CTA

### Background Decoration (CTA sections)
Thin white SVG curves (opacity 12%) sweeping across the blue gradient background. 5 converging growth curves from bottom-left to top-right.

---

## Design Reference
- **Atlassian Design System** (toggle bar style)
- **Apple** (whitespace, typography hierarchy)
- **Stripe** (clean gradients, minimal cards)

---

## What to Avoid
- Emojis
- Playful or casual tone
- Bright/saturated colors outside the palette
- Heavy drop shadows or 3D effects
- Rounded/bubbly shapes
- Stock photo aesthetics
