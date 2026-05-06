# RUS Chartered Accountants - Colour Brand Guidelines

## Overview
The RUS colour system is built around a single, confident brand blue with a neutral system designed for clarity, readability and trust — appropriate for a chartered accountancy.

---

## Brand Colours

### Primary Brand Blue
The signature RUS blue used for headings, CTAs, links, navigation accents and the bottom navigation bar.

| Token | Value | Usage |
|---|---|---|
| `--brand-primary` | `#01458f` | Primary brand colour. Buttons, links, headings, focus states. |
| `--brand-primary-subtle` | `rgba(1, 69, 143, 0.04)` | Very subtle background tints (cards, hovers). |
| `--brand-primary-hovered` | `rgba(1, 69, 143, 0.06)` | Hover states on subtle surfaces. |

**Hex:** `#01458F`
**RGB:** `1, 69, 143`
**HSL:** `211°, 99%, 28%`

### Brand Blue — Extended Tints
Used in gradients (e.g. CTA panels, glassmorphism nav).

| Hex | Usage |
|---|---|
| `#01458f` | Primary |
| `#013a75` | Hover / pressed state on primary |
| `#0052cc` | Lighter brand accent (gradient endpoint) |

---

## Neutral System (Atlassian-inspired Design Tokens)

| Token | Value | Usage |
|---|---|---|
| `--ds-text` | `#292a2e` | Default body text colour. |
| `--ds-text-subtle` | `#626f86` | Secondary text, captions, metadata. |
| `--ds-background-neutral-subtle` | `transparent` | Default card/section background. |
| `--ds-background-neutral-subtle-hovered` | `rgba(5, 21, 36, 0.06)` | Hover state on neutral surfaces. |
| `--ds-background-neutral-subtle-pressed` | `rgba(11, 18, 14, 0.14)` | Pressed/active state. |

### Foundational Neutrals
| Token | Value | Usage |
|---|---|---|
| `--foreground` | `#000000` | Pure black for top-level text and the brand mark. |
| `--background` | `#ffffff` | Default page background. |

---

## Tailwind Greys (used throughout)
The site uses Tailwind's default grey scale for borders, surfaces and subdued text.

| Tailwind | Hex | Common Usage |
|---|---|---|
| `gray-50` | `#f9fafb` | Section backgrounds (subtle) |
| `gray-100` | `#f3f4f6` | Card backgrounds, dividers |
| `gray-200` | `#e5e7eb` | Borders |
| `gray-400` | `#9ca3af` | Disabled / placeholder icons |
| `gray-600` | `#4b5563` | Body text on light surfaces |
| `gray-700` | `#374151` | Stronger body text |
| `gray-900` | `#111827` | Headings |

---

## Glassmorphism Tokens
Used in the floating bottom navigation bar.

| Token | Value | Usage |
|---|---|---|
| `--nav-glass` | `0 0% 100% / 0.15` | Semi-transparent white pane background (HSL). |
| `--nav-border` | `0 0% 100% / 0.8` | Subtle white border around the glass pane. |

---

## Usage Rules

1. **Brand blue `#01458f` is the only brand colour.** Do not introduce additional brand hues — extend through tints and shades only.
2. **Body text** must be `--ds-text` (`#292a2e`) on white, never pure black for paragraphs.
3. **Pure black** (`#000`) is reserved for the logo mark and large headlines where maximum contrast is intentional.
4. **Hover states** on primary actions: darken to `#013a75` or use `bg-[#01458f]/90`.
5. **Borders** default to `gray-200`; never use brand blue for default borders.
6. **Backgrounds** alternate between `white` and `gray-50` for section rhythm — avoid mid-grey backgrounds.

---

## Accessibility
- `#01458f` on `#ffffff` → contrast ratio **8.95:1** ✓ AAA
- `#292a2e` on `#ffffff` → contrast ratio **15.4:1** ✓ AAA
- `#626f86` on `#ffffff` → contrast ratio **5.13:1** ✓ AA (use only for non-essential metadata)

All combinations meet WCAG 2.1 AA at minimum; brand blue meets AAA on white backgrounds.
