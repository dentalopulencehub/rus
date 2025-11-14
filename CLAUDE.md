# RUS Chartered Accountants - Website

## Project Overview
Modern website for RUS Chartered Accountants, a reputable firm of Chartered Accountants, Registered Auditors and Tax Advisors based in Birmingham.

**Client:** RUS Chartered Accountants (established 20+ years)
**Location:** Hall Green, West Midlands, Birmingham
**Target:** 2-week MVP, wireframe structure first
**Tech Stack:** Next.js (latest), TypeScript, PostgreSQL
**Current Phase:** Documentation & Planning
**Design Reference:** Atlassian Design System (toggle bar style)

## Code Standards

### General
- Functional components only
- TypeScript strict mode
- 2-space indentation
- 100-character line limit
- Meaningful variable names
- Comment complex logic

### Event Handlers
- All events prefixed with 'handle' (handleClick, handleSubmit)

### Data Format
- All dates in ISO format (parsing consistency)
- All IDs are UUIDs (AI-friendly)
- Event structure designed for MCP tools
- Metadata fields for AI context

## Architecture Decisions

### Database
- PostgreSQL
- ISO dates everywhere
- Data structure optimized for MCP tools
- Metadata fields for AI context enrichment

### AI Integration
- MCP-ready architecture
- UUID identifiers for AI-friendly references
- Structured data formats for consistent parsing

### Memory Structure
- `CLAUDE.md` - Root context (this file)
- `CLAUDE.local.md` - Personal notes (gitignored)
- `context/` - Project context files (state, decisions, schema)
- `components/CLAUDE.md` - Component-specific context
- All context files kept under 200 lines

## Environment Variables

```env
DATABASE_URL=postgresql://localhost/rus_accountancy
PORT=3000
```

## Current Sprint

### Day 1: Setup & Documentation
- [x] Create memory structure
- [x] All files created with headers
- [x] *.local.md files in .gitignore
- [ ] Document site structure and requirements
- [ ] Define component architecture

### Day 2: Wireframe Structure
- [ ] Set up Next.js project (latest version)
- [ ] Create blank page layouts
- [ ] Implement navigation structure
- [ ] Build section components (no content)

### Day 3: Component Development
- [ ] Hero section
- [ ] Services/Industry section
- [ ] Toggle bar (Atlassian-style)
- [ ] Reviews slider
- [ ] CTA sections

## Acceptance Criteria
- ✓ CLAUDE.md exists in root
- ✓ Under 500 lines (currently ~30)
- ✓ Claude Code loads it automatically
- ✓ Test: Ask Claude 'what database are we using?' → PostgreSQL

## Development Workflow
- Create feature branches from main
- Use conventional commits (feat:, fix:, docs:)
- Run tests before committing
- Review code before merging

## Security Practices
- Never commit API keys or secrets
- Validate all user inputs
- Use environment variables for configuration
- Implement proper authentication and authorization
