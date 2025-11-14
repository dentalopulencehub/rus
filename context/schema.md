# schema.md - Data Structures

> Document database schemas, types, and data models. Keep under 200 lines.

## Database Configuration

```env
DATABASE_URL=postgresql://localhost/rus_accountancy
```

## Schema Principles

### Identifiers
- All IDs are UUIDs (AI-friendly)
- Format: `id UUID PRIMARY KEY DEFAULT gen_random_uuid()`

### Timestamps
- All dates in ISO 8601 format
- Fields: `created_at`, `updated_at`
- Type: `TIMESTAMP WITH TIME ZONE`

### Metadata
- Metadata fields for AI context enrichment
- Flexible JSON structure for extensibility

## Core Types

### TypeScript Standards
```typescript
// UUIDs
type UUID = string;

// ISO Dates
type ISODate = string;

// Slugs for URLs
type Slug = string;

// Base Entity
interface BaseEntity {
  id: UUID;
  createdAt: ISODate;
  updatedAt: ISODate;
}
```

## Database Schema

### Main Tables

**Sectors** - Service industry categories
```typescript
interface Sector extends BaseEntity {
  name: string;
  slug: Slug;
  description?: string;
  content?: string;
  metaTitle?: string;
  metaDescription?: string;
}
```

**Services** - Service offerings
```typescript
interface Service extends BaseEntity {
  name: string;
  slug: Slug;
  description?: string;
  content?: string;
  icon?: string;
  metaTitle?: string;
  metaDescription?: string;
}
```

**Blog Posts** - Insights articles
```typescript
interface BlogPost extends BaseEntity {
  title: string;
  slug: Slug;
  excerpt?: string;
  content: string;
  author?: string;
  publishedAt?: ISODate;
  featuredImage?: string;
  metaTitle?: string;
  metaDescription?: string;
}
```

**Contact Submissions** - Form submissions
```typescript
interface ContactSubmission {
  id: UUID;
  name: string;
  email: string;
  phone?: string;
  subject?: string;
  message: string;
  status: 'new' | 'read' | 'replied' | 'archived';
  createdAt: ISODate;
}
```

**Reviews** - Google reviews
```typescript
interface Review {
  id: UUID;
  authorName: string;
  rating: 1 | 2 | 3 | 4 | 5;
  reviewText: string;
  reviewDate: ISODate;
  source: 'google' | 'manual';
  createdAt: ISODate;
}
```

## API Response Format

```typescript
interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: {
    message: string;
    code: string;
  };
  metadata?: Record<string, unknown>;
}
```

## Seed Data

### Initial Sectors
1. Healthcare
2. Contractors & Professional Services
3. Retail
4. Property Services
5. Solicitors
6. Charities & Not-for-profit
7. Owner Managed Businesses (SME)
8. Private Individuals
9. Corporate
10. Education & Academies
11. Creative & Media

### Initial Services
1. Taxation Services
2. Accounting & Bookkeeping
3. Audit & Assurance
4. Payroll Services
5. Business Advisory
6. Company Formation & Secretarial

## Notes
- Database schema designed for CMS-like content management
- All content can be updated without code changes
- MCP-compatible structure for AI integration
- SEO fields built into each content type
