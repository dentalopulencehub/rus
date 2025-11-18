'use client';

import createGlobe from 'cobe';
import { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

export function Globe({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    // Fixed position to show UK as focal point - no rotation
    const phi = 0.95; // Centered on UK latitude
    let width = 0;
    let markerSize = 0.1;
    let animationFrame = 0;

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
      phi: 0.95, // UK latitude focus
      theta: 0.05, // UK longitude focus
      dark: 0,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [1, 1, 1],
      markerColor: [0.01, 0.27, 0.56], // Brand blue for UK markers
      glowColor: [1, 1, 1],
      markers: [
        // Birmingham - pulsating marker (headquarters)
        { location: [52.4862, -1.8904], size: markerSize },
        // London - pulsating marker
        { location: [51.5074, -0.1278], size: markerSize * 0.8 },
        // Manchester
        { location: [53.4808, -2.2426], size: markerSize * 0.65 },
        // Edinburgh
        { location: [55.9533, -3.1883], size: markerSize * 0.65 },
      ],
      onRender: (state) => {
        state.phi = phi;
        state.width = width * 2;
        state.height = width * 2;

        // Smooth pulsating animation for UK markers
        animationFrame += 0.015;
        const pulse = Math.sin(animationFrame) * 0.03;
        markerSize = 0.1 + pulse;

        // Update all marker sizes for synchronized pulsating effect
        if (state.markers) {
          state.markers[0].size = markerSize; // Birmingham
          state.markers[1].size = markerSize * 0.8; // London
          state.markers[2].size = markerSize * 0.65; // Manchester
          state.markers[3].size = markerSize * 0.65; // Edinburgh
        }
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
