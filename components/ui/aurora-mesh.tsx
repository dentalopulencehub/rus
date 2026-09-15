'use client';

import { useRef, useEffect } from 'react';
import {
  Scene,
  OrthographicCamera,
  WebGLRenderer,
  ShaderMaterial,
  PlaneGeometry,
  Mesh,
  Vector2,
} from 'three';

const vertexShader = /* glsl */ `
  void main() { gl_Position = vec4(position, 1.0); }
`;

const fragmentShader = /* glsl */ `
  precision mediump float;
  uniform float u_time;
  uniform vec2 u_resolution;

  vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec3 permute(vec3 x) { return mod289(((x * 34.0) + 1.0) * x); }

  float snoise(vec2 v) {
    const vec4 C = vec4(0.211324865405187, 0.366025403784439,
                       -0.577350269189626, 0.024390243902439);
    vec2 i = floor(v + dot(v, C.yy));
    vec2 x0 = v - i + dot(i, C.xx);
    vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
    vec4 x12 = x0.xyxy + C.xxzz;
    x12.xy -= i1;
    i = mod289(i);
    vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0)) + i.x + vec3(0.0, i1.x, 1.0));
    vec3 m = max(0.5 - vec3(dot(x0, x0), dot(x12.xy, x12.xy), dot(x12.zw, x12.zw)), 0.0);
    m = m * m; m = m * m;
    vec3 x = 2.0 * fract(p * C.www) - 1.0;
    vec3 h = abs(x) - 0.5;
    vec3 ox = floor(x + 0.5);
    vec3 a0 = x - ox;
    m *= 1.79284291400159 - 0.85373472095314 * (a0 * a0 + h * h);
    vec3 g;
    g.x = a0.x * x0.x + h.x * x0.y;
    g.yz = a0.yz * x12.xz + h.yz * x12.yw;
    return 130.0 * dot(m, g);
  }

  void main() {
    vec2 uv = gl_FragCoord.xy / u_resolution;
    float aspect = u_resolution.x / u_resolution.y;
    vec2 uvA = vec2(uv.x * aspect, uv.y);

    // Swirling rotation
    float angle = u_time * 0.015;
    float cs = cos(angle), sn = sin(angle);
    vec2 uvR = vec2(uvA.x * cs - uvA.y * sn, uvA.x * sn + uvA.y * cs);

    // Domain warping
    vec2 w1 = vec2(snoise(uvR * 1.5 + vec2(u_time * 0.03, 0.0)),
                   snoise(uvR * 1.5 + vec2(0.0, u_time * 0.025)));
    vec2 w2 = vec2(snoise(uvR * 2.0 + w1 * 0.6 + vec2(u_time * 0.02, 1.7)),
                   snoise(uvR * 2.0 + w1 * 0.6 + vec2(3.2, u_time * 0.018)));
    vec2 warped = uvR + w2 * 0.35;

    float n1 = snoise(warped * 1.8 + vec2(u_time * 0.04, u_time * 0.03));
    float n2 = snoise(warped * 3.5 + vec2(-u_time * 0.06, u_time * 0.05));
    float n3 = snoise(warped * 7.0 + vec2(u_time * 0.09, -u_time * 0.07));
    float combined = (n1 * 0.5 + n2 * 0.3 + n3 * 0.2) * 0.5 + 0.5;
    combined = combined * 0.7 + uv.y * 0.3;

    // Smooth colour curves
    float t1 = pow(smoothstep(0.15, 0.55, combined), 1.4);
    float t2 = pow(smoothstep(0.40, 0.72, combined), 1.6);
    float t3 = pow(smoothstep(0.55, 0.82, combined), 1.8);
    float t4 = pow(smoothstep(0.70, 0.92, combined), 2.0);
    float t5 = pow(smoothstep(0.78, 1.0,  combined), 1.3);

    vec3 base = vec3(0.941, 0.969, 1.0);
    vec3 color = base;
    color = mix(color, vec3(0.733, 0.871, 0.984), t1 * 0.5);
    color = mix(color, vec3(0.0, 0.322, 0.8),     t2 * 0.2);
    color = mix(color, vec3(0.004, 0.271, 0.561),  t3 * 0.14);
    color = mix(color, vec3(0.0, 0.176, 0.361),    t4 * 0.07);
    color = mix(color, vec3(1.0),                   t5 * 0.25);

    // Radial vignette
    vec2 center = uv - vec2(0.5);
    center.x *= aspect;
    float dist = length(center);
    float vignette = 1.0 - smoothstep(0.3, 1.1, dist) * 0.25;
    color = mix(color, base, 1.0 - vignette);

    gl_FragColor = vec4(color, 1.0);
  }
`;

export function AuroraMesh({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const mobile = typeof window !== 'undefined' &&
      (window.innerWidth < 768 || /Mobi|Android/i.test(navigator.userAgent));
    const maxDpr = mobile ? 1 : Math.min(window.devicePixelRatio, 2);
    const prefersReducedMotion =
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const scene = new Scene();
    const camera = new OrthographicCamera(-1, 1, 1, -1, 0, 1);

    let renderer: WebGLRenderer;
    try {
      renderer = new WebGLRenderer({ canvas, alpha: false, antialias: false });
    } catch {
      canvas.style.display = 'none';
      return;
    }
    renderer.setPixelRatio(maxDpr);

    const uniforms = {
      u_time: { value: 0.0 },
      u_resolution: { value: new Vector2() },
    };

    const material = new ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms,
    });
    const geometry = new PlaneGeometry(2, 2);
    const mesh = new Mesh(geometry, material);
    scene.add(mesh);

    const handleResize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      const w = parent.clientWidth;
      const h = parent.clientHeight;
      renderer.setSize(w, h);
      uniforms.u_resolution.value.set(w * maxDpr, h * maxDpr);
    };
    handleResize();
    window.addEventListener('resize', handleResize);

    let rafId = 0;
    let isVisible = true;
    const speed = mobile ? 0.6 : 1.0;

    const animate = () => {
      if (isVisible) {
        uniforms.u_time.value += 0.016 * speed;
        renderer.render(scene, camera);
      }
      rafId = requestAnimationFrame(animate);
    };

    if (prefersReducedMotion) {
      uniforms.u_time.value = 1.5;
      renderer.render(scene, camera);
    } else {
      rafId = requestAnimationFrame(animate);
    }

    let observer: IntersectionObserver | null = null;
    if (!prefersReducedMotion) {
      observer = new IntersectionObserver(
        ([entry]) => { isVisible = entry.isIntersecting; },
        { threshold: 0.0 }
      );
      observer.observe(canvas);
    }

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('resize', handleResize);
      observer?.disconnect();
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={className ?? 'absolute inset-0 w-full h-full pointer-events-none'}
      style={{ contain: 'layout paint size' }}
    />
  );
}
