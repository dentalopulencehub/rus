'use client';

import { useEffect, useRef } from 'react';

// Major cities worldwide connecting to UK
const arcsData = [
  // North America
  { startLat: 40.7128, startLng: -74.0060, endLat: 52.4862, endLng: -1.8904, name: 'New York' },
  { startLat: 34.0522, startLng: -118.2437, endLat: 51.5074, endLng: -0.1278, name: 'Los Angeles' },
  { startLat: 43.6532, startLng: -79.3832, endLat: 52.4862, endLng: -1.8904, name: 'Toronto' },
  // Europe
  { startLat: 48.8566, startLng: 2.3522, endLat: 51.5074, endLng: -0.1278, name: 'Paris' },
  { startLat: 52.5200, startLng: 13.4050, endLat: 52.4862, endLng: -1.8904, name: 'Berlin' },
  { startLat: 41.9028, startLng: 12.4964, endLat: 51.5074, endLng: -0.1278, name: 'Rome' },
  // Middle East
  { startLat: 25.2048, startLng: 55.2708, endLat: 52.4862, endLng: -1.8904, name: 'Dubai' },
  // Asia
  { startLat: 1.3521, startLng: 103.8198, endLat: 51.5074, endLng: -0.1278, name: 'Singapore' },
  { startLat: 35.6762, startLng: 139.6503, endLat: 52.4862, endLng: -1.8904, name: 'Tokyo' },
  { startLat: 22.3193, startLng: 114.1694, endLat: 51.5074, endLng: -0.1278, name: 'Hong Kong' },
  // Australia
  { startLat: -33.8688, startLng: 151.2093, endLat: 52.4862, endLng: -1.8904, name: 'Sydney' },
  { startLat: -37.8136, startLng: 144.9631, endLat: 51.5074, endLng: -0.1278, name: 'Melbourne' },
];

export function GlobeWithArcs() {
  const globeEl = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!globeEl.current) return;

    let globe: any;
    let animationFrame: number;
    let resizeHandler: (() => void) | null = null;

    // Dynamically import globe.gl (browser-only)
    import('globe.gl').then((Globe) => {
      if (!globeEl.current) return;

      globe = Globe.default()(globeEl.current)
        .globeImageUrl('//unpkg.com/three-globe/example/img/earth-blue-marble.jpg')
        .backgroundColor('rgba(0,0,0,0)')
        .showAtmosphere(true)
        .atmosphereColor('#BBDEFB') // Light blue brand color
        .atmosphereAltitude(0.25)
        // Arcs - brand blue, slower animation
        .arcsData(arcsData)
        .arcColor(() => 'rgba(1, 69, 143, 0.6)') // Brand blue with transparency
        .arcDashLength(0.9)
        .arcDashGap(0.4)
        .arcDashAnimateTime(4000) // Slower - 4 seconds instead of 2
        .arcStroke(0.8)
        .arcAltitudeAutoScale(0.2)
        // Points at endpoints - GitHub style subtle dots
        .pointsData([
          // UK cities - brand blue, larger
          { lat: 52.4862, lng: -1.8904, size: 0.8, color: '#01458f', name: 'Birmingham' },
          { lat: 51.5074, lng: -0.1278, size: 0.7, color: '#01458f', name: 'London' },
          { lat: 53.4808, lng: -2.2426, size: 0.5, color: '#01458f', name: 'Manchester' },
          { lat: 55.9533, lng: -3.1883, size: 0.5, color: '#01458f', name: 'Edinburgh' },
          // International cities - very subtle
          ...arcsData.map(arc => ({ lat: arc.startLat, lng: arc.startLng, size: 0.3, color: 'rgba(148, 163, 184, 0.4)' }))
        ])
        .pointAltitude(0.01)
        .pointColor('color')
        .pointRadius('size')
        // Camera position - look from north down at UK (for bottom-half visibility)
        .pointOfView({
          lat: 80, // Look from far north down at UK
          lng: -2,
          altitude: 1.3 // Closer for better detail
        }, 0);

      // Very slow rotation keeping UK visible in top half
      let angle = 0;
      const rotationSpeed = 0.03; // Very slow, GitHub style

      const animate = () => {
        if (!globe) return;
        angle += rotationSpeed;
        globe.pointOfView({
          lat: 80, // Look from north so UK is in upper hemisphere (visible when bottom is cut)
          lng: -2 + angle * 0.015, // Very subtle rotation
          altitude: 1.3
        });
        animationFrame = requestAnimationFrame(animate);
      };

      // Start animation after a delay
      setTimeout(() => {
        animate();
      }, 1000);

      // Handle resize
      resizeHandler = () => {
        if (globeEl.current && globe) {
          globe.width(globeEl.current.offsetWidth);
          globe.height(globeEl.current.offsetHeight);
        }
      };

      window.addEventListener('resize', resizeHandler);
      resizeHandler();
    }).catch((err) => {
      console.error('Failed to load globe:', err);
    });

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
      if (resizeHandler) {
        window.removeEventListener('resize', resizeHandler);
      }
      if (globe) {
        try {
          globe.pauseAnimation?.();
          globe._destructor?.();
        } catch (e) {
          console.error('Error destroying globe:', e);
        }
      }
    };
  }, []);

  return (
    <div
      ref={globeEl}
      className="w-full h-full"
      style={{
        width: '100%',
        height: '100%',
        minHeight: '400px'
      }}
    />
  );
}
