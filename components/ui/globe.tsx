'use client';

import createGlobe from 'cobe';
import { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

export function Globe({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let phi = 0;
    let width = 0;

    if (!canvasRef.current) return;

    const onResize = () => {
      if (canvasRef.current) {
        width = canvasRef.current.offsetWidth;
      }
    };
    window.addEventListener('resize', onResize);
    onResize();

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: 600 * 2,
      height: 600 * 2,
      phi: 0,
      theta: 0.3,
      dark: 0,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [1, 1, 1],
      markerColor: [0.01, 0.27, 0.56],
      glowColor: [1, 1, 1],
      markers: [
        // Birmingham
        { location: [52.4862, -1.8904], size: 0.08 },
        // London
        { location: [51.5074, -0.1278], size: 0.06 },
      ],
      onRender: (state) => {
        state.phi = phi;
        phi += 0.003;
        state.width = width * 2;
        state.height = width * 2;
      },
    });

    setTimeout(() => {
      if (canvasRef.current) {
        canvasRef.current.style.opacity = '1';
      }
    }, 0);

    return () => {
      globe.destroy();
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={cn('w-full h-full opacity-0 transition-opacity duration-500', className)}
      style={{
        width: '100%',
        height: '100%',
        maxWidth: '100%',
        aspectRatio: '1',
        contain: 'layout paint size',
      }}
    />
  );
}
