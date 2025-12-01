'use client';

import Link from 'next/link';
import { ContactTrigger } from '@/components/contact/ContactTrigger';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative mt-auto overflow-hidden">
      {/* Deep Blue Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#01458f] via-[#002d5c] to-[#001428]" />

      {/* Architectural Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px'
        }}
      />

      {/* Vertical Side Grids - Architectural Detail */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent" />
      <div className="absolute left-20 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/5 to-transparent hidden lg:block" />
      <div className="absolute right-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent" />
      <div className="absolute right-20 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/5 to-transparent hidden lg:block" />

      {/* Corner Brackets - Premium Detail */}
      <div className="absolute top-0 left-0 w-32 h-32 border-l-2 border-t-2 border-white/5 pointer-events-none" />
      <div className="absolute top-0 right-0 w-32 h-32 border-r-2 border-t-2 border-white/5 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-32 h-32 border-l-2 border-b-2 border-white/5 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-32 h-32 border-r-2 border-b-2 border-white/5 pointer-events-none" />

      {/* Top Accent Bar */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      {/* Radial Ambient Light */}
      <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-blue-300/[0.02] rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-[1000px] h-[1000px] bg-cyan-300/[0.02] rounded-full blur-3xl" />

      {/* Noise Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.015] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      />

      {/* Content */}
      <div className="relative">
        <div className="max-w-[1600px] mx-auto px-8 sm:px-12 lg:px-20">

          {/* Hero Section - Brand Statement */}
          <div className="pt-20 pb-12">
            <div className="max-w-6xl mx-auto">
              {/* Logo */}
              <div className="space-y-3 flex flex-col items-start">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/Footer logo final.svg"
                  alt="RUS Chartered Accountants"
                  className="h-20 w-auto"
                />

                {/* Since Badge */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-[1px] bg-gradient-to-r from-white/30 to-transparent"></div>
                  <span className="text-[10px] text-white/40 uppercase tracking-[0.4em] font-light">Est. 1995</span>
                </div>
              </div>

              {/* Brand Statement with ICAEW Logo */}
              <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Brand Statement Text */}
                <div className="lg:col-span-8 space-y-2.5">
                  <h2 className="text-2xl lg:text-3xl text-white/90 leading-[1.4] font-light">
                    Established accountants providing expert<br />
                    financial guidance for over<span className="text-white font-normal"> 30 years</span>.
                  </h2>
                  <p className="text-base text-white/70 leading-relaxed font-light">
                    Birmingham-based, serving businesses across the UK<br />
                    with precision, integrity, and forward-thinking solutions.
                  </p>
                </div>

                {/* ICAEW Logo - Inline with text */}
                <div className="lg:col-span-4 flex justify-start items-start lg:pl-8">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://imagedelivery.net/W93NbEGaswuledAsk5GMeA/6b872cbc-f4ae-4919-7a00-5c64cea80f00/public"
                    alt="ICAEW Chartered Accountants"
                    className="h-48 w-auto brightness-0 invert opacity-80 hover:opacity-95 transition-opacity duration-500"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Premium Divider */}
          <div className="relative h-px my-4">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
            <div className="absolute left-1/2 top-0 -translate-x-1/2 w-2 h-2 rounded-full bg-white/10 -translate-y-[3px]"></div>
          </div>

          {/* Navigation Grid */}
          <div className="py-12">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-x-12 gap-y-10 max-w-6xl mx-auto">

              {/* Services - Alphabetically ordered */}
              <div className="space-y-4">
                <h4 className="text-[10px] font-bold text-white/60 uppercase tracking-[0.4em]">
                  Services
                </h4>
                <ul className="space-y-2.5">
                  {[
                    { name: 'Accounting & Bookkeeping', href: '/services/accounting-bookkeeping' },
                    { name: 'Audit & Assurance', href: '/services/audit-assurance' },
                    { name: 'Business Advisory', href: '/services/business-advisory' },
                    { name: 'Company Formation', href: '/services/company-formation' },
                    { name: 'Company Secretarial', href: '/services/company-secretarial' },
                    { name: 'Forensic Accounting', href: '/services/forensic-accounting' },
                    { name: 'HMRC & NCA Investigations', href: '/services/hmrc-nca-investigations' },
                    { name: 'Payroll Services', href: '/services/payroll' },
                    { name: 'Taxation Services', href: '/services/taxation-services' },
                  ].map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="text-sm text-white/60 hover:text-white transition-colors duration-300 font-light block"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Sectors - Alphabetically ordered */}
              <div className="space-y-4">
                <h4 className="text-[10px] font-bold text-white/60 uppercase tracking-[0.4em]">
                  Sectors
                </h4>
                <ul className="space-y-2.5">
                  {[
                    { name: 'Charities & Not-for-profit', href: '/sectors/charities-not-for-profit' },
                    { name: 'Construction', href: '/sectors/construction' },
                    { name: 'Contractors & Professional Services', href: '/sectors/contractors-professional-services' },
                    { name: 'Creative & Media', href: '/sectors/creative-media' },
                    { name: 'Education & Academies', href: '/sectors/education-academies' },
                    { name: 'Financial Services', href: '/sectors/financial-services' },
                    { name: 'Healthcare', href: '/sectors/healthcare' },
                    { name: 'Hospitality & Leisure', href: '/sectors/hospitality-leisure' },
                    { name: 'Information Technology', href: '/sectors/information-technology' },
                    { name: 'Property Services', href: '/sectors/property-services' },
                    { name: 'Retail', href: '/sectors/retail' },
                    { name: 'Solicitors', href: '/sectors/solicitors' },
                  ].map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="text-sm text-white/60 hover:text-white transition-colors duration-300 font-light block"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Company */}
              <div className="space-y-4">
                <h4 className="text-[10px] font-bold text-white/60 uppercase tracking-[0.4em]">
                  Company
                </h4>
                <ul className="space-y-2.5">
                  <li>
                    <Link
                      href="/who-we-are"
                      className="text-sm text-white/40 hover:text-white transition-colors duration-300 font-light block"
                    >
                      Who We Are
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/insights"
                      className="text-sm text-white/40 hover:text-white transition-colors duration-300 font-light block"
                    >
                      Insight
                    </Link>
                  </li>
                  <li>
                    <ContactTrigger className="text-sm text-white/40 hover:text-white transition-colors duration-300 font-light block text-left">
                      Contact
                    </ContactTrigger>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm text-white/40 hover:text-white transition-colors duration-300 font-light block"
                    >
                      Client Portal
                    </a>
                  </li>
                </ul>
              </div>

              {/* Legal */}
              <div className="space-y-4">
                <h4 className="text-[10px] font-bold text-white/60 uppercase tracking-[0.4em]">
                  Legal
                </h4>
                <ul className="space-y-2.5">
                  <li>
                    <Link
                      href="/privacy"
                      className="text-sm text-white/40 hover:text-white transition-colors duration-300 font-light block"
                    >
                      Privacy
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/terms"
                      className="text-sm text-white/40 hover:text-white transition-colors duration-300 font-light block"
                    >
                      Terms
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/cookies"
                      className="text-sm text-white/40 hover:text-white transition-colors duration-300 font-light block"
                    >
                      Cookies
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Social - Single Row */}
              <div className="space-y-4">
                <h4 className="text-[10px] font-bold text-white/60 uppercase tracking-[0.4em]">
                  Follow
                </h4>
                <div className="flex gap-2.5">
                  <a
                    href="#"
                    className="group relative w-10 h-10 rounded-full border border-white/10 bg-white/[0.02] backdrop-blur-sm flex items-center justify-center overflow-hidden transition-all duration-500 hover:scale-105 hover:border-white/30"
                    aria-label="Twitter"
                  >
                    <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <svg className="relative w-3.5 h-3.5 text-white/50 group-hover:text-[#01458f] transition-colors duration-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="group relative w-10 h-10 rounded-full border border-white/10 bg-white/[0.02] backdrop-blur-sm flex items-center justify-center overflow-hidden transition-all duration-500 hover:scale-105 hover:border-white/30"
                    aria-label="Instagram"
                  >
                    <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <svg className="relative w-3.5 h-3.5 text-white/50 group-hover:text-[#01458f] transition-colors duration-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="group relative w-10 h-10 rounded-full border border-white/10 bg-white/[0.02] backdrop-blur-sm flex items-center justify-center overflow-hidden transition-all duration-500 hover:scale-105 hover:border-white/30"
                    aria-label="TikTok"
                  >
                    <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <svg className="relative w-3.5 h-3.5 text-white/50 group-hover:text-[#01458f] transition-colors duration-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Premium Divider */}
          <div className="relative h-px my-4">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
          </div>

          {/* Address Section - Single Line */}
          <div className="py-8">
            <div className="flex flex-wrap items-center justify-center gap-x-2 text-sm text-white/80 font-light">
              <span className="text-white/90">1190A-1194 Stratford Road, Hall Green, Birmingham, B28 8AB, United Kingdom</span>
              <span className="mx-2">•</span>
              <a href="tel:01217771200" className="text-white hover:text-white/80 transition-colors duration-300">
                0121 777 1200
              </a>
              <span className="mx-2">•</span>
              <a href="mailto:info@rus.co.uk" className="text-white hover:text-white/80 transition-colors duration-300">
                info@rus.co.uk
              </a>
            </div>
          </div>

          {/* Premium Divider */}
          <div className="relative h-px my-4">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
          </div>

          {/* Footer Bottom */}
          <div className="pt-8 pb-32">
            <div className="flex flex-col items-center text-center gap-6">

              {/* Copyright & Company Details */}
              <div className="space-y-1.5">
                <p className="text-xs text-white font-light">
                  © {currentYear} RUS & Company (UK) Ltd.
                </p>
                <p className="text-xs text-white/90 font-light">
                  Company No: 3833778 • VAT Reg: GB 754 1385 28
                </p>
                <p className="text-[10px] text-white/80 font-light max-w-2xl leading-relaxed pt-0.5 mx-auto">
                  Registered to carry out company Audit work in the UK by The Institute of Chartered Accountants in England & Wales (ICAEW)
                </p>
              </div>

              {/* Back to Top Link */}
              <a
                href="#"
                onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className="group flex items-center gap-3 text-[10px] text-white/60 hover:text-white transition-all duration-500 uppercase tracking-[0.3em] font-light"
              >
                <span>Back to top</span>
                <div className="flex flex-col gap-0.5">
                  <span className="w-5 h-px bg-white/20 group-hover:w-8 group-hover:bg-white/50 transition-all duration-500"></span>
                  <span className="w-5 h-px bg-white/20 group-hover:w-8 group-hover:bg-white/50 transition-all duration-500 delay-75"></span>
                </div>
              </a>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
