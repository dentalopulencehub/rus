# decisions.md - Technical Choices

> Document architectural decisions, tech stack choices, and rationale. Keep under 200 lines.

## Tech Stack

### Core
- **Framework:** Next.js (latest version)
- **Language:** TypeScript (strict mode)
- **Database:** PostgreSQL
- **Runtime:** Node.js
- **Styling:** TBD (awaiting brand guidelines)

### Design Reference
- **UI Components:** Atlassian Design System inspiration
- **Toggle Bar:** Rounded with hover outline effect (Atlassian-style)
- **Reference:** https://atlassian.design/

### Architecture Patterns
- Functional components only
- ISO dates everywhere (parsing consistency)
- UUID identifiers (AI-friendly)
- Event handlers prefixed with 'handle' (handleClick, handleSubmit)
- Server components by default (Next.js App Router)
- Client components only when interactivity needed

### Development Phase
- **Phase 1:** Wireframe structure (blank sections, no content)
- **Phase 2:** Component implementation with best practices
- **Phase 3:** Content population and styling (with brand guidelines)

## Next.js Decisions

### App Router vs Pages Router
- **Choice:** App Router (Next.js 13+)
- **Rationale:** Latest Next.js paradigm, better performance, React Server Components

### Routing Structure
- `/` - Home page
- `/who-we-are` - About page
- `/sectors/[slug]` - Dynamic sector pages
- `/services/[slug]` - Dynamic service pages
- `/insights` - Blog listing
- `/insights/[slug]` - Individual blog posts
- `/contact` - Contact page
- External portal link in navigation

### Data Fetching
- Server Components for static content
- Client Components for interactive features (reviews slider, toggle bar, forms)
- API routes for form submissions and dynamic data

## Database Decisions

### Purpose
- Blog/insights content management
- Contact form submissions
- Potential future CMS integration

### Identifiers
- **Choice:** UUIDs
- **Rationale:** AI-friendly, globally unique, no coordination needed

### Date Format
- **Choice:** ISO 8601
- **Rationale:** Consistent parsing, timezone handling, AI-compatible

### Schema Design
- Data structure optimized for MCP tools
- Metadata fields for AI context enrichment
- Blog posts, sectors, services as database entities

## AI Integration

### MCP Architecture
- **Choice:** MCP-ready from day 1
- **Rationale:** Future-proof for AI agent integration

### Data Formats
- Structured data formats for consistent parsing
- UUID identifiers for AI-friendly references

## Code Organization

### Memory Structure
- `CLAUDE.md` at root for project context
- `CLAUDE.local.md` for personal notes (gitignored)
- `context/` directory for structured documentation
- Component-specific CLAUDE.md files
- All context files under 200 lines

### Code Standards
- 2-space indentation
- 100-character line limit
- Meaningful variable names
- Comment complex logic
- Functional programming patterns preferred

## Development Workflow
- Feature branches from main
- Conventional commits (feat:, fix:, docs:)
- Run tests before committing
- Review code before merging

## Component Strategy

### Home Page Components
1. **Hero** - Server Component with static content
2. **ServicesOverview** - Server Component, grid layout
3. **ToggleBar** - Client Component (interactive, Atlassian-style)
4. **CompanyIntro** - Server Component
5. **ReviewsSlider** - Client Component (carousel functionality)
6. **CTASection** - Server Component with link
7. **WhyChooseUs** - Server Component, feature list
8. **InsightsPreview** - Server Component, fetches latest posts
9. **PartnersSection** - Server Component, logo grid

### Shared Components
- **Header/Navigation** - Client Component (mobile menu)
- **Footer** - Server Component
- **Layout** - Server Component wrapper

## Styling Decisions

### Approach
- TBD - awaiting brand guidelines
- Options: Tailwind CSS, CSS Modules, styled-components
- Must support: responsive design, hover effects, animations

### Design System Reference
- Atlassian Design System for UI patterns
- Rounded corners, subtle shadows
- Hover outline effects
- Clean, modern aesthetic

## Environment
- Environment variables for all configuration
- Never commit secrets or API keys
- `.env.local` for local development
- Production environment variables in deployment platform

## Accessibility & SEO
- WCAG 2.1 AA compliance
- Semantic HTML
- Meta tags for all pages
- OpenGraph tags for social sharing
- Sitemap.xml generation
- Robots.txt configuration
