# RUS Chartered Accountants - Spacing & Layout Guidelines

## Layout Containers

Default content width across the site:

| Width | Tailwind class | Usage |
|---|---|---|
| Standard | `max-w-6xl mx-auto` | Most page sections, sub-service grids |
| Narrow | `max-w-4xl mx-auto` | Long-form text (insights, FAQs) |
| Featured | `max-w-3xl mx-auto` | Single-item featured cards |
| Full | `max-w-7xl mx-auto` | Hero sections only |

All containers use horizontal padding `px-4` on mobile (already applied at section level).

---

## Section Vertical Rhythm

Standard padding for top-level page sections:

| Class | Usage |
|---|---|
| `py-24` | Default for major content sections |
| `py-16` | Smaller sections, secondary content |
| `py-12` | Compact sections (stats, breadcrumbs) |
| `py-8` | Tight utility sections |

Alternate `bg-white` and `bg-gray-50` between adjacent sections for visual rhythm. Never two grey sections in a row.

---

## Component Spacing

### Card padding
| Card type | Padding |
|---|---|
| Standard subcategory tile | `p-4` |
| Featured horizontal card | `p-8` |
| FAQ item | `p-6` |
| Testimonial | `p-6 md:p-8` |

### Gap between grid items
- Subcategory grids: `gap-6`
- Stat panels: `gap-4`
- Feature lists: `gap-3`

---

## Border Radius

| Token | Value | Usage |
|---|---|---|
| `--ds-border-radius` | `4px` | Atlassian-style inputs and buttons |
| `rounded-xl` | `12px` | Standard cards |
| `rounded-2xl` | `16px` | Featured cards, large surfaces |
| `rounded-3xl` | `24px` | Bottom sheets, hero panels |
| `rounded-full` | — | Pills, avatars, glass nav |

---

## Shadows
Use sparingly. Default UI is flat with subtle borders rather than shadows.

| Class | Usage |
|---|---|
| `shadow-sm` | Subtle hover lift on cards |
| `shadow-lg` | Featured card hover |
| `shadow-2xl` | Bottom sheet, modals |

---

## Mobile Considerations

- All sections must be visually clean down to **375px width**.
- The fixed `BottomBar` reserves ~80px at the bottom of the viewport — `<main>` already has `pb-16` to account for this.
- Avoid horizontal scroll: `overflow-x-hidden` is applied on `<html>` and `<body>`.
- Touch targets: minimum 44×44 px for any interactive element on mobile.

---

## Responsive Breakpoints (Tailwind defaults)

| Prefix | Min width | Typical use |
|---|---|---|
| `sm:` | 640px | Two-column layouts begin |
| `md:` | 768px | Most multi-column grids |
| `lg:` | 1024px | Desktop nav, hero side-by-side |
| `xl:` | 1280px | Wider hero treatments |
