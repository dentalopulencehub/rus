# RUS Brand Animation - Remotion Script

## Overview
**Duration:** 5.5 seconds (165 frames @ 30fps)
**Resolution:** 1920x1080 (16:9)
**Background:** White (#ffffff)
**Style:** Minimal, corporate, premium. Silent (no audio).

---

## Required Assets

### Fonts (load via Google Fonts in Remotion)
- **Fira Sans Condensed** (weights: 300, 400, 700)
- **Inter** (weight: 400)

### Logo
```
https://imagedelivery.net/W93NbEGaswuledAsk5GMeA/85daba7e-8f6f-42ea-772c-15a7bea6dd00/public
```

### Colors
```ts
const BRAND = {
  primary: '#01458f',
  dark: '#002d5c',
  white: '#ffffff',
  gray900: '#111111',
  gray600: '#626f86',
  gray50: '#f9fafb',
  accent: '#0052cc',
};
```

---

## Animation Timeline

### Phase 1: Accent Lines Draw In (0.0s - 1.0s | Frames 0-30)

Three thin horizontal lines draw in from center outward, staggered.

```
Frame 0-10:   Line 1 (top) draws from center → 120px wide, color #01458f, 2px height
Frame 5-15:   Line 2 (middle) draws from center → 80px wide, color #01458f/60, 1.5px height
Frame 10-20:  Line 3 (bottom) draws from center → 100px wide, color #01458f/30, 1px height
Frame 20-30:  All three lines hold, subtle pulse (scale 1.0 → 1.02 → 1.0)
```

**Implementation:**
```tsx
// Each line: centered on screen, draws via width interpolation
const line1Width = interpolate(frame, [0, 10], [0, 120], {
  extrapolateRight: 'clamp',
  easing: Easing.out(Easing.cubic),
});
```

**Position:** All lines centered vertically in the frame, spaced 20px apart.

---

### Phase 2: Lines Converge into Logo (1.0s - 2.5s | Frames 30-75)

The three lines move upward and fade as the RUS logo fades + scales in.

```
Frame 30-45:  Lines translate upward 60px and fade to opacity 0
Frame 35-60:  Logo fades in from opacity 0 → 1, scales from 0.92 → 1.0
Frame 60-75:  Logo holds, settles with a very subtle overshoot (scale 1.0 → 1.01 → 1.0)
```

**Implementation:**
```tsx
// Logo entrance
const logoOpacity = interpolate(frame, [35, 55], [0, 1], {
  extrapolateRight: 'clamp',
  easing: Easing.out(Easing.cubic),
});
const logoScale = spring({
  frame: frame - 35,
  fps: 30,
  config: { damping: 15, stiffness: 120, mass: 0.8 },
});
```

**Logo placement:** Centered horizontally, slightly above vertical center (40% from top). Max width 400px.

---

### Phase 3: Tagline Text Reveal (2.5s - 3.8s | Frames 75-114)

The three brand words appear below the logo, staggered.

```
Frame 75-85:   Blue accent line draws beneath logo (64px wide, 3px, #01458f)
Frame 85-95:   "Professional." fades in + translateY from 15px → 0
Frame 92-102:  "Competent." fades in + translateY from 15px → 0
Frame 99-109:  "Integral." fades in + translateY from 15px → 0
Frame 109-114: All three words hold
```

**Typography:**
```css
font-family: 'Fira Sans Condensed', sans-serif;
font-weight: 300; /* Light */
font-size: 28px;
letter-spacing: 0.15em;
text-transform: uppercase;
color: #111111;
```

**Layout:** Three words in a horizontal row, separated by generous spacing (60px gaps), centered below the accent line.

**Implementation:**
```tsx
// Staggered word entrance
const words = ['Professional.', 'Competent.', 'Integral.'];
words.map((word, i) => {
  const startFrame = 85 + (i * 7); // 7 frame stagger
  const opacity = interpolate(frame, [startFrame, startFrame + 10], [0, 1], {
    extrapolateRight: 'clamp',
    easing: Easing.out(Easing.cubic),
  });
  const translateY = interpolate(frame, [startFrame, startFrame + 10], [15, 0], {
    extrapolateRight: 'clamp',
    easing: Easing.out(Easing.cubic),
  });
});
```

---

### Phase 4: Subtitle Fade (3.8s - 4.8s | Frames 114-144)

A supporting line fades in beneath the tagline.

```
Frame 114-130: "Chartered Accountants | Birmingham" fades in, opacity 0 → 1
Frame 130-144: Everything holds, settled
```

**Typography:**
```css
font-family: 'Fira Sans Condensed', sans-serif;
font-weight: 400;
font-size: 16px;
letter-spacing: 0.1em;
text-transform: uppercase;
color: #626f86; /* gray-600 */
```

**Position:** Centered, 30px below the tagline words.

---

### Phase 5: Hold & Breathe (4.8s - 5.5s | Frames 144-165)

Everything is in place. Subtle breathing animation.

```
Frame 144-165: Entire composition gently scales 1.0 → 1.005 → 1.0 (one cycle)
               Very subtle, almost imperceptible. Premium feel.
```

**Implementation:**
```tsx
const breathe = interpolate(
  frame,
  [144, 155, 165],
  [1, 1.005, 1],
  { extrapolateRight: 'clamp' }
);
```

---

## Complete Composition Layout

```
┌──────────────────────────────────────────┐
│                                          │
│                                          │
│              [RUS LOGO]                  │  ← 40% from top
│           ─────────────                  │  ← Blue accent line (64px)
│                                          │
│   Professional.  Competent.  Integral.   │  ← Tagline row
│                                          │
│     Chartered Accountants | Birmingham   │  ← Subtitle
│                                          │
│                                          │
│                                          │
└──────────────────────────────────────────┘
```

---

## Remotion Component Structure

```
src/
  Root.tsx                    # RegisterRoot
  compositions/
    BrandReveal.tsx          # Main composition (1920x1080, 30fps, 165 frames)
  components/
    AccentLines.tsx          # Phase 1: Three drawing lines
    LogoReveal.tsx           # Phase 2: Logo fade + scale
    TaglineReveal.tsx        # Phase 3: Three staggered words
    SubtitleReveal.tsx       # Phase 4: Supporting text
  constants/
    brand.ts                 # Colors, fonts, sizing constants
```

---

## Easing Reference

| Element | Easing | Why |
|---------|--------|-----|
| Line draw | `Easing.out(Easing.cubic)` | Fast start, smooth deceleration |
| Logo scale | `spring({ damping: 15, stiffness: 120 })` | Natural, satisfying settle |
| Word fade | `Easing.out(Easing.cubic)` | Smooth, professional |
| Breathe | Linear interpolation | Gentle, barely perceptible |

---

## Export Settings
- **Format:** MP4 (H.264) for general use, WebM for web
- **Also export:** GIF (lower quality, for previews)
- **Transparent version:** ProRes 4444 or WebM with alpha (for overlays)

---

## Variations to Consider
1. **Dark version:** #002d5c background, white text/logo
2. **Square (1080x1080):** For Instagram/social posts
3. **Vertical (1080x1920):** For Stories/Reels
4. **Short (3s):** Skip Phase 1, start with logo reveal directly
