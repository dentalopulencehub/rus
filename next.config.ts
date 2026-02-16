import type { NextConfig } from 'next';
import path from 'path';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  outputFileTracingRoot: path.join(__dirname),
  images: {
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'imagedelivery.net',
        pathname: '/W93NbEGaswuledAsk5GMeA/**',
      },
      {
        protocol: 'https',
        hostname: 'imagedelivery.net',
        pathname: '/323c464c8747c7110b8060cae23df989/**',
      },
    ],
  },
};

export default nextConfig;
