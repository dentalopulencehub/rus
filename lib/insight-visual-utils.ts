// Deterministic generative visual utilities for insight cards

export interface ShapeDescriptor {
  type: 'ellipse' | 'circle-outline' | 'dot' | 'arc' | 'line';
  x: number;
  y: number;
  rx: number;
  ry: number;
  rotation: number;
  opacity: number;
  colorIndex: number; // 0 = accent[0], 1 = accent[1], 2 = stroke
}

export interface CategoryPalette {
  bg: [string, string];       // [dark, light] gradient stops
  accent: [string, string];   // [light, lighter] fill colors
  stroke: string;
}

// djb2 hash — deterministic string → number
export function hashSlug(slug: string): number {
  let hash = 5381;
  for (let i = 0; i < slug.length; i++) {
    hash = ((hash << 5) + hash + slug.charCodeAt(i)) >>> 0;
  }
  return hash;
}

// mulberry32 seeded PRNG — returns 0..1
export function createSeededRandom(seed: number): () => number {
  let s = seed | 0;
  return () => {
    s = (s + 0x6d2b79f5) | 0;
    let t = Math.imul(s ^ (s >>> 15), 1 | s);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export const categoryPalettes: Record<string, CategoryPalette> = {
  'tax-insights': {
    bg: ['#01458f', '#0a5fc2'],
    accent: ['#BBDEFB', '#d4e8fc'],
    stroke: '#0052cc',
  },
  'business-advice': {
    bg: ['#15803d', '#22a55b'],
    accent: ['#bbf7d0', '#d1fae5'],
    stroke: '#16a34a',
  },
  'accounting-updates': {
    bg: ['#7e22ce', '#9333ea'],
    accent: ['#e9d5ff', '#f3e8ff'],
    stroke: '#a855f7',
  },
  'sector-specific': {
    bg: ['#b45309', '#d97706'],
    accent: ['#fde68a', '#fef3c7'],
    stroke: '#f59e0b',
  },
  'legislation-updates': {
    bg: ['#b91c1c', '#dc2626'],
    accent: ['#fecaca', '#fee2e2'],
    stroke: '#ef4444',
  },
  'firm-news': {
    bg: ['#374151', '#4b5563'],
    accent: ['#d1d5db', '#e5e7eb'],
    stroke: '#6b7280',
  },
};

const DEFAULT_PALETTE: CategoryPalette = categoryPalettes['tax-insights'];

export function getPalette(categorySlug: string): CategoryPalette {
  return categoryPalettes[categorySlug] ?? DEFAULT_PALETTE;
}

export function generateShapes(
  slug: string,
  categorySlug: string,
): ShapeDescriptor[] {
  const seed = hashSlug(slug);
  const rand = createSeededRandom(seed);

  const count = 4 + Math.floor(rand() * 3); // 4-6 shapes
  const shapes: ShapeDescriptor[] = [];

  // First shape is always a large soft ellipse anchor (center-right)
  shapes.push({
    type: 'ellipse',
    x: 220 + rand() * 80,
    y: 60 + rand() * 80,
    rx: 60 + rand() * 40,
    ry: 40 + rand() * 30,
    rotation: rand() * 360,
    opacity: 0.12 + rand() * 0.15,
    colorIndex: 0,
  });

  for (let i = 1; i < count; i++) {
    const typeRoll = rand();
    let type: ShapeDescriptor['type'];
    if (typeRoll < 0.3) type = 'ellipse';
    else if (typeRoll < 0.5) type = 'circle-outline';
    else if (typeRoll < 0.7) type = 'dot';
    else if (typeRoll < 0.85) type = 'arc';
    else type = 'line';

    // Bias toward center-right focal area
    const x = 120 + rand() * 220;
    const y = 30 + rand() * 140;

    shapes.push({
      type,
      x,
      y,
      rx: type === 'dot' ? 2 + rand() * 3 : 15 + rand() * 45,
      ry: type === 'dot' ? 2 + rand() * 3 : 10 + rand() * 35,
      rotation: rand() * 360,
      opacity: type === 'dot' ? 0.4 + rand() * 0.35 : 0.1 + rand() * 0.25,
      colorIndex: Math.floor(rand() * 3),
    });
  }

  return shapes;
}

// Gradient angle derived from slug hash (degrees)
export function gradientAngle(slug: string): number {
  return (hashSlug(slug) % 180) + 90; // 90-270 range
}
