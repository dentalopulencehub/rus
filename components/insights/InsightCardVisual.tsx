import {
  generateShapes,
  getPalette,
  gradientAngle,
  hashSlug,
  type ShapeDescriptor,
} from '@/lib/insight-visual-utils';

interface InsightCardVisualProps {
  slug: string;
  categorySlug: string;
  className?: string;
}

function renderShape(
  shape: ShapeDescriptor,
  palette: ReturnType<typeof getPalette>,
  prefix: string,
  index: number,
) {
  const colors = [palette.accent[0], palette.accent[1], palette.stroke];
  const fill = colors[shape.colorIndex];

  switch (shape.type) {
    case 'ellipse':
      return (
        <ellipse
          key={`${prefix}-e-${index}`}
          cx={shape.x}
          cy={shape.y}
          rx={shape.rx}
          ry={shape.ry}
          fill={fill}
          opacity={shape.opacity}
          transform={`rotate(${shape.rotation} ${shape.x} ${shape.y})`}
        />
      );

    case 'circle-outline':
      return (
        <circle
          key={`${prefix}-co-${index}`}
          cx={shape.x}
          cy={shape.y}
          r={shape.rx}
          fill="none"
          stroke={fill}
          strokeWidth="1"
          strokeDasharray="6 4"
          opacity={shape.opacity}
        />
      );

    case 'dot':
      return (
        <circle
          key={`${prefix}-d-${index}`}
          cx={shape.x}
          cy={shape.y}
          r={shape.rx}
          fill={fill}
          opacity={shape.opacity}
        />
      );

    case 'arc':
      return (
        <path
          key={`${prefix}-a-${index}`}
          d={`M ${shape.x - shape.rx} ${shape.y} A ${shape.rx} ${shape.ry} 0 0 1 ${shape.x + shape.rx} ${shape.y}`}
          fill="none"
          stroke={fill}
          strokeWidth="1"
          strokeDasharray="4 3"
          opacity={shape.opacity}
          transform={`rotate(${shape.rotation} ${shape.x} ${shape.y})`}
        />
      );

    case 'line': {
      const dx = Math.cos((shape.rotation * Math.PI) / 180) * shape.rx;
      const dy = Math.sin((shape.rotation * Math.PI) / 180) * shape.rx;
      return (
        <line
          key={`${prefix}-l-${index}`}
          x1={shape.x - dx * 0.5}
          y1={shape.y - dy * 0.5}
          x2={shape.x + dx * 0.5}
          y2={shape.y + dy * 0.5}
          stroke={fill}
          strokeWidth="0.8"
          opacity={shape.opacity}
          strokeLinecap="round"
        />
      );
    }

    default:
      return null;
  }
}

export function InsightCardVisual({
  slug,
  categorySlug,
  className,
}: InsightCardVisualProps) {
  const palette = getPalette(categorySlug);
  const shapes = generateShapes(slug, categorySlug);
  const angle = gradientAngle(slug);
  const prefix = `iv-${(hashSlug(slug) % 100000).toString(36)}`;

  // Convert angle to x1,y1,x2,y2 for SVG linearGradient
  const rad = ((angle - 90) * Math.PI) / 180;
  const x1 = 50 - Math.cos(rad) * 50;
  const y1 = 50 - Math.sin(rad) * 50;
  const x2 = 50 + Math.cos(rad) * 50;
  const y2 = 50 + Math.sin(rad) * 50;

  return (
    <svg
      className={className}
      viewBox="0 0 400 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label={`${categorySlug.replace(/-/g, ' ')} illustration`}
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient
          id={`${prefix}-bg`}
          x1={`${x1}%`}
          y1={`${y1}%`}
          x2={`${x2}%`}
          y2={`${y2}%`}
        >
          <stop offset="0%" stopColor={palette.bg[0]} />
          <stop offset="100%" stopColor={palette.bg[1]} />
        </linearGradient>
        <radialGradient
          id={`${prefix}-depth`}
          cx="65%"
          cy="40%"
          r="60%"
        >
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.08" />
          <stop offset="100%" stopColor="#000000" stopOpacity="0.06" />
        </radialGradient>
      </defs>

      {/* 1. Gradient background */}
      <rect width="400" height="200" fill={`url(#${prefix}-bg)`} />

      {/* 2. Geometric primitives */}
      {shapes.map((shape, i) => renderShape(shape, palette, prefix, i))}

      {/* 3. Depth overlay */}
      <rect
        width="400"
        height="200"
        fill={`url(#${prefix}-depth)`}
      />
    </svg>
  );
}
