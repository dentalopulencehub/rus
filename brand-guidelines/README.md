# RUS Chartered Accountants - Brand Guidelines

This folder is the source of truth for the visual brand system used across the RUS website.

## Contents

| File | Covers |
|---|---|
| [`typography.md`](./typography.md) | Font families, hierarchy, weights, responsive type |
| [`colors.md`](./colors.md) | Brand blue, neutral system, design tokens, accessibility |
| [`logo.md`](./logo.md) | Logo files, favicon, usage rules, co-branding |
| [`spacing-and-layout.md`](./spacing-and-layout.md) | Containers, section rhythm, radii, shadows, breakpoints |

## Quick reference

- **Brand blue:** `#01458f`
- **Body text:** `#292a2e`
- **Primary heading font:** Frutiger 57Cn (with Fira Sans Condensed fallback)
- **Body font:** Inter
- **Logo:** `/public/RUS logo.svg`
- **Favicon:** `/public/favicon.svg`

## Implementation
All tokens are defined in `app/globals.css` under `:root`. Tailwind extensions live in `tailwind.config.ts`.

When adding new components, prefer existing tokens over hardcoded values. If a value isn't covered here, raise it for inclusion before introducing a new one.
