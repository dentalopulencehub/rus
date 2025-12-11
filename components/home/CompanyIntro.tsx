'use client';

import Link from 'next/link';
import dynamic from 'next/dynamic';
import { Globe } from '@/components/ui/globe';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

const ChartComponent = dynamic(
  () => import('recharts').then((mod) => {
    const { Area, Tooltip, ResponsiveContainer, Line, ComposedChart } = mod;
    return ({ data }: { data: any[] }) => {
      return (
        <ResponsiveContainer width="100%" height={160}>
          <ComposedChart
            data={data}
            margin={{ top: 10, right: 5, left: 5, bottom: 25 }}
          >
            <defs>
              {/* Clients Gradient - Primary */}
              <linearGradient id="colorClients" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#01458f" stopOpacity={0.28}/>
                <stop offset="50%" stopColor="#01458f" stopOpacity={0.12}/>
                <stop offset="100%" stopColor="#0165ff" stopOpacity={0}/>
              </linearGradient>

              {/* Revenue Gradient - Secondary */}
              <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#64748b" stopOpacity={0.15}/>
                <stop offset="50%" stopColor="#64748b" stopOpacity={0.06}/>
                <stop offset="100%" stopColor="#94a3b8" stopOpacity={0}/>
              </linearGradient>

              {/* Enhanced glow for primary line */}
              <filter id="glowClients">
                <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                <feFlood floodColor="#01458f" floodOpacity="0.4" result="glowColor"/>
                <feComposite in="glowColor" in2="coloredBlur" operator="in" result="coloredGlow"/>
                <feMerge>
                  <feMergeNode in="coloredGlow"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>

            <Tooltip
              contentStyle={{
                backgroundColor: 'rgba(255, 255, 255, 0.98)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                border: '1px solid rgba(1, 69, 143, 0.1)',
                borderRadius: '8px',
                fontSize: '10px',
                padding: '8px 12px',
                boxShadow: '0 4px 12px rgba(1, 69, 143, 0.12), 0 2px 4px rgba(0, 0, 0, 0.08)',
              }}
              labelStyle={{
                color: '#6b7280',
                fontWeight: 600,
                fontSize: '9px',
                marginBottom: '4px',
                textTransform: 'uppercase',
                letterSpacing: '0.8px',
                borderBottom: '1px solid #e5e7eb',
                paddingBottom: '4px',
                display: 'block'
              }}
              itemStyle={{
                fontSize: '10px',
                padding: '2px 0',
                fontWeight: 600
              }}
              cursor={{
                stroke: '#01458f',
                strokeWidth: 1,
                strokeOpacity: 0.15,
                strokeDasharray: '4 4'
              }}
              animationDuration={150}
              animationEasing="ease-out"
            />

            {/* Revenue - Background layer with fluctuation */}
            <Area
              type="natural"
              dataKey="revenue"
              stroke="#64748b"
              strokeWidth={2.2}
              fill="url(#colorRevenue)"
              animationDuration={2000}
              animationEasing="ease-in-out"
              dot={false}
              strokeOpacity={0.6}
              name="Revenue"
              isAnimationActive={true}
            />

            {/* Clients - Primary foreground with glow and more fluctuation */}
            <Area
              type="natural"
              dataKey="clients"
              stroke="#01458f"
              strokeWidth={3}
              fill="url(#colorClients)"
              animationDuration={2200}
              animationEasing="ease-in-out"
              dot={false}
              name="Clients"
              isAnimationActive={true}
              filter="url(#glowClients)"
            />
          </ComposedChart>
        </ResponsiveContainer>
      );
    };
  }),
  { ssr: false, loading: () => <div className="h-[160px] w-full bg-gray-100 animate-pulse rounded-lg" /> }
);

const data = [
  { period: 'Q1 2020', clients: 4000, revenue: 3600 },
  { period: 'Q2 2020', clients: 4300, revenue: 3900 },
  { period: 'Q3 2020', clients: 4500, revenue: 4300 },
  { period: 'Q4 2020', clients: 4800, revenue: 4500 },
  { period: 'Q1 2021', clients: 5000, revenue: 4900 },
  { period: 'Q2 2021', clients: 5400, revenue: 5100 },
  { period: 'Q3 2021', clients: 5600, revenue: 5500 },
  { period: 'Q4 2021', clients: 6000, revenue: 5700 },
  { period: 'Q1 2022', clients: 6300, revenue: 6100 },
  { period: 'Q2 2022', clients: 6700, revenue: 6300 },
  { period: 'Q3 2022', clients: 6900, revenue: 6800 },
  { period: 'Q4 2022', clients: 7400, revenue: 7000 },
  { period: 'Q1 2023', clients: 7700, revenue: 7500 },
  { period: 'Q2 2023', clients: 8200, revenue: 7800 },
  { period: 'Q3 2023', clients: 8600, revenue: 8300 },
  { period: 'Q4 2023', clients: 9100, revenue: 8600 },
  { period: 'Q1 2024', clients: 9500, revenue: 9200 },
  { period: 'Q2 2024', clients: 10000, revenue: 9500 },
  { period: 'Q3 2024', clients: 10400, revenue: 10100 },
  { period: 'Q4 2024', clients: 10900, revenue: 10400 },
  { period: 'Q1 2025', clients: 11300, revenue: 11000 },
  { period: 'Q2 2025', clients: 11800, revenue: 11500 },
];

function CountUpNumber({ end, duration = 3000 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number | null = null;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      setCount(Math.floor(progress * end));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, end, duration]);

  return <span ref={ref}>{count}</span>;
}

export function CompanyIntro() {
  return (
    <section className="py-24 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto space-y-4">
        {/* Top - 2 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Card 1 - Title and First Part */}
          <div className="bg-gradient-to-br from-white to-gray-50/50 rounded-xl p-10 border border-gray-200/50 hover:border-gray-300/50 transition-all duration-300 hover:shadow-lg">
            <h2 className="text-4xl font-light italic text-gray-900 mb-4 leading-tight text-center md:text-left">
              Your Trusted<br />
              Accountancy<br />
              Partner
            </h2>
            <p className="text-base text-gray-600 leading-relaxed text-center md:text-left">
              For over 30 years, RUS Chartered Accountants has been serving businesses across the UK with expert accounting, tax, and advisory services.
            </p>
          </div>

          {/* Card 2 - Innovation Meets Experience - Awwwards Style */}
          <div className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-[#01458f] to-gray-900 rounded-xl p-10 border border-white/10 hover:border-white/20 transition-all duration-500 group">
            {/* Animated gradient mesh background */}
            <div className="absolute inset-0 opacity-30">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-cyan-500/20 via-transparent to-transparent animate-pulse"></div>
              <div className="absolute bottom-0 right-0 w-2/3 h-2/3 bg-gradient-to-tl from-purple-500/20 via-transparent to-transparent animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>

            {/* Grid overlay */}
            <div className="absolute inset-0 opacity-[0.03]" style={{
              backgroundImage: 'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)',
              backgroundSize: '20px 20px'
            }}></div>

            {/* Content */}
            <div className="relative z-10 h-full flex flex-col justify-center items-center text-center">
              {/* Main headline */}
              <div className="mb-8">
                <h3 className="text-3xl font-bold text-white leading-tight tracking-tight mb-2 uppercase">
                  PROVEN HERITAGE.<br />
                  <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    MODERN APPROACH.
                  </span>
                </h3>
                <p className="text-sm text-white/60 max-w-xs mx-auto">
                  Three decades of expertise powered by cutting-edge technology
                </p>
              </div>

              {/* Stats - Split display */}
              <div className="flex items-center justify-center gap-12">
                {/* Left - Traditional */}
                <div className="text-center">
                  <div className="text-3xl font-light text-white mb-1">
                    <CountUpNumber end={30} duration={2000} />+
                  </div>
                  <div className="text-xs text-white/50 tracking-wider uppercase">Years</div>
                </div>

                {/* Divider */}
                <div className="w-px h-16 bg-gradient-to-b from-transparent via-white/30 to-transparent"></div>

                {/* Right - Modern */}
                <div className="text-center">
                  <div className="text-3xl font-light bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">ICAEW</div>
                  <div className="text-xs text-cyan-400/60 tracking-wider uppercase">Chartered</div>
                </div>
              </div>

            </div>

            {/* Hover glow effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-radial from-cyan-500/20 via-transparent to-transparent blur-2xl"></div>
            </div>
          </div>
        </div>

        {/* Bottom - 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Trustpilot Badge Card */}
          <div className="relative overflow-hidden bg-gradient-to-br from-white to-gray-50/50 rounded-xl p-6 border border-gray-200/50 hover:border-gray-300/50 transition-all duration-300 hover:shadow-lg flex flex-col items-center justify-center group">
            {/* Decorative elements */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-green-500/5 rounded-full blur-2xl group-hover:bg-green-500/8 transition-all duration-500"></div>
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-green-500/3 rounded-full blur-xl"></div>

            {/* Trustpilot Badge */}
            <div className="relative z-10 w-full flex flex-col items-center justify-center">
              <Image
                src="/Frame 5.svg"
                alt="Trustpilot - Rated Excellent"
                width={300}
                height={120}
                className="w-full max-w-[280px] h-auto"
                priority
              />
            </div>
          </div>

          {/* Card 2 - ICAEW Logo as Card */}
          <div className="relative bg-white rounded-xl p-6 border border-gray-200/50 hover:border-gray-300 hover:shadow-lg transition-all duration-300 flex flex-col items-center justify-center group">
            {/* Subtle decorative elements */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-gray-100/50 rounded-full blur-2xl group-hover:bg-gray-100 transition-all duration-500"></div>

            {/* ICAEW Logo - Cloudflare Image Delivery */}
            <div className="relative z-10 w-full max-w-xs">
              <Image
                src="https://imagedelivery.net/W93NbEGaswuledAsk5GMeA/6b872cbc-f4ae-4919-7a00-5c64cea80f00/public"
                alt="ICAEW Chartered Accountants"
                width={300}
                height={133}
                className="w-full h-auto"
                priority
              />
            </div>

            {/* Line separator and Registered Audit Firm text */}
            <div className="relative z-10 mt-4 pt-4 border-t border-gray-300 w-full max-w-xs text-center">
              <div className="text-gray-600 text-sm font-medium">Registered Audit Firm</div>
            </div>
          </div>

          {/* Card 3 - 30+ Years with Globe - UK Focused */}
          <div className="relative overflow-hidden bg-white rounded-xl p-6 border border-gray-200/50 hover:border-[#01458f]/30 hover:shadow-lg transition-all duration-300 group">
            {/* UK-focused pulsating glow effects - Multiple layers for depth */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-[#01458f]/10 rounded-full blur-3xl animate-pulse-slow"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-[#01458f]/15 rounded-full blur-2xl animate-pulse-slow" style={{ animationDelay: '0.5s' }}></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-[#01458f]/20 rounded-full blur-xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>

            {/* Corner accents */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#01458f]/5 rounded-full blur-2xl animate-pulse-slow" style={{ animationDelay: '1.5s' }}></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#01458f]/5 rounded-full blur-2xl animate-pulse-slow" style={{ animationDelay: '0.75s' }}></div>

            {/* Text at top */}
            <div className="relative z-10 text-center">
              <div className="text-5xl font-bold text-[#01458f] mb-2 tracking-tight">30+</div>
              <div className="text-sm font-semibold text-gray-700 tracking-wide mb-1">Years of Excellence</div>
              <div className="text-xs font-medium text-[#01458f] tracking-wide">Specialists in UK Accounting & Tax Law</div>
            </div>

            {/* Globe below - half cut off, absolutely positioned */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 z-0">
              <div className="w-[400px] h-[400px]">
                <Globe />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
