"use client";

import { cn } from "@/lib/utils";

interface BorderBeamProps {
  size?: number;
  duration?: number;
  delay?: number;
  colorFrom?: string;
  colorTo?: string;
  className?: string;
  borderWidth?: number;
}

export const BorderBeam = ({
  className,
  size = 200,
  duration = 8,
  delay = 0,
  colorFrom = "#3B82F6",
  colorTo = "#60A5FA",
  borderWidth = 1.5,
}: BorderBeamProps) => {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 rounded-[inherit] [border:calc(var(--border-width)*1px)_solid_transparent] ![mask-clip:padding-box,border-box] ![mask-composite:intersect] [mask:linear-gradient(transparent,transparent),linear-gradient(white,white)]",
        className
      )}
      style={
        {
          "--border-width": borderWidth,
        } as React.CSSProperties
      }
    >
      <div
        className="animate-border-beam absolute"
        style={{
          width: `${size}px`,
          aspectRatio: "1",
          background: `conic-gradient(from 0deg, transparent 0%, ${colorFrom} 10%, ${colorTo} 30%, transparent 50%)`,
          animationDuration: `${duration}s`,
          animationDelay: `${delay}s`,
          filter: 'blur(8px)',
          boxShadow: `0 0 20px ${colorFrom}, 0 0 40px ${colorTo}`,
        }}
      />
    </div>
  );
};
