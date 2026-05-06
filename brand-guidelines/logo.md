# RUS Chartered Accountants - Logo Brand Guidelines

## Logo Files

All logos live in `/public/`. SVG is the canonical format — always prefer SVG over raster.

| File | Purpose | Where used |
|---|---|---|
| `RUS logo.svg` | Primary header logo | `Header.tsx`, favicon source |
| `Footer logo final.svg` | Final footer logo | `Footer.tsx` |
| `Footer logo.svg` | Footer logo (legacy) | — |
| `Rus Accountancy Logo .svg` | Long-form alternative mark | — |
| `favicon.svg` | Browser tab icon (copy of `RUS logo.svg`) | `app/layout.tsx` metadata |

---

## Favicon

Set in `app/layout.tsx` via `metadata.icons`. Source is `public/favicon.svg`.

```ts
icons: {
  icon: [{ url: '/favicon.svg', type: 'image/svg+xml' }],
  shortcut: '/favicon.svg',
  apple: '/favicon.svg',
}
```

If `/favicon.svg` is updated, the new icon appears immediately on next deploy — no cache busting needed for SVG favicons in modern browsers.

---

## Logo Usage Rules

1. **Always use SVG.** Never embed PNG/JPG of the logo unless absolutely required (e.g. some email clients).
2. **Minimum size:** 24px height for digital, 10mm for print, to preserve mark legibility.
3. **Clear space:** Maintain padding equal to the height of the "R" character around the logo on all sides.
4. **Backgrounds:**
   - Light backgrounds: use the standard logo as-is.
   - Dark backgrounds: use the white/inverted version (footer variant).
   - Photographic backgrounds: place inside a white rounded panel for clarity.
5. **Do not:**
   - Stretch, skew or rotate the logo.
   - Recolour the mark (only the brand blue `#01458f` and white variants are permitted).
   - Add drop shadows or effects.
   - Place text directly adjacent — respect clear space.

---

## Co-branding & Accreditations

The site references the following third-party marks. These are **not** part of the RUS brand and follow each provider's own brand rules.

| File | Provider | Where used |
|---|---|---|
| `icaew-logo.svg` | ICAEW (Institute of Chartered Accountants in England and Wales) | Footer, Who We Are |
| `Sage-logo_svg 1.svg` | Sage | Software partners section |
| `Xero logo 1x1.svg` | Xero | Software partners section |

When displaying co-branding marks alongside the RUS logo, equalise heights and respect each brand's clear-space rules.

---

## Filename Hygiene
Several legacy logo files contain spaces (`Footer logo final.svg`, `RUS logo.svg`). When referencing in code, either:
- URL-encode the space as `%20` in plain href/src attributes, or
- Use Next.js `<Image>` which handles encoding automatically, or
- Rename to kebab-case (`rus-logo.svg`) — preferred for new assets.

The favicon file `public/favicon.svg` was created with a clean filename specifically to avoid encoding issues in `metadata.icons`.
