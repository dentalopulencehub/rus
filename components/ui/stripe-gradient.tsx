'use client';

import { useEffect, useRef } from 'react';

interface StripeGradientProps {
  className?: string;
  id?: string;
  colors?: [string, string, string, string];
}

export function StripeGradient({
  className,
  id = 'gradient-canvas',
  colors = ['#BBDEFB', '#0052cc', '#01458f', '#F0F7FF'],
}: StripeGradientProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const gradientRef = useRef<any>(null);

  useEffect(() => {
    let mounted = true;

    async function init() {
      if (!canvasRef.current || !mounted) return;

      const { Gradient } = await import('@/lib/gradient.js');
      if (!mounted) return;

      const gradient = new Gradient();
      gradientRef.current = gradient;
      gradient.initGradient(`#${id}`);
    }

    init();

    return () => {
      mounted = false;
      if (gradientRef.current) {
        gradientRef.current.pause();
        gradientRef.current.disconnect();
      }
    };
  }, [id]);

  return (
    <canvas
      id={id}
      ref={canvasRef}
      aria-hidden="true"
      className={className}
      style={{
        // @ts-expect-error -- CSS custom properties
        '--gradient-color-1': colors[0],
        '--gradient-color-2': colors[1],
        '--gradient-color-3': colors[2],
        '--gradient-color-4': colors[3],
      }}
    />
  );
}
