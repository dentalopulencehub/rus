'use client';

import Link from 'next/link';
import { ContactTrigger } from '@/components/contact/ContactTrigger';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative mt-auto overflow-hidden border-t border-white/5">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#01458f] via-[#0052cc] to-[#01458f]">
        {/* Blur Circles */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl animate-pulse-subtle" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl animate-pulse-subtle" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-10 mb-16">
            {/* Company Info */}
            <div className="md:col-span-2 lg:col-span-2">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/Rus Accountancy Logo .svg"
                alt="RUS Chartered Accountants"
                className="h-16 w-auto mb-5 [filter:drop-shadow(0_0_20px_rgba(255,255,255,0.3))]"
              />
              <p className="text-sm text-white/80 mb-5 leading-relaxed">
                Established accountants providing expert financial guidance for over 30 years.
                Birmingham-based, serving businesses across the UK.
              </p>
              <div className="space-y-1 text-sm text-white/70 mb-6">
                <p className="font-medium text-white/90 mb-1.5">Birmingham Office</p>
                <p>1190A-1194 Stratford Road</p>
                <p>Hall Green, Birmingham</p>
                <p>B28 8AB</p>
              </div>

              {/* Certifications */}
              <div className="flex flex-wrap gap-2">
                <div className="px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-xs text-white/90 font-medium hover:bg-white/15 transition-colors duration-200">
                  ICAEW Certified
                </div>
                <div className="px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-xs text-white/90 font-medium hover:bg-white/15 transition-colors duration-200">
                  Making Tax Digital
                </div>
              </div>
            </div>

            {/* Corporate Services */}
            <div className="lg:col-span-1">
              <h3 className="text-xs font-semibold text-white/90 uppercase tracking-wider mb-5">
                Corporate Services
              </h3>
              <ul className="space-y-2.5">
                <li>
                  <Link href="/services/taxation-services" className="text-sm text-white/70 hover:text-white hover:translate-x-0.5 transition-all duration-200 inline-block">
                    Taxation Services
                  </Link>
                </li>
                <li>
                  <Link href="/services/accounting-bookkeeping" className="text-sm text-white/70 hover:text-white hover:translate-x-0.5 transition-all duration-200 inline-block">
                    Accounting & Bookkeeping
                  </Link>
                </li>
                <li>
                  <Link href="/services/audit-assurance" className="text-sm text-white/70 hover:text-white hover:translate-x-0.5 transition-all duration-200 inline-block">
                    Audit & Assurance
                  </Link>
                </li>
                <li>
                  <Link href="/services/payroll-services" className="text-sm text-white/70 hover:text-white hover:translate-x-0.5 transition-all duration-200 inline-block">
                    Payroll Services
                  </Link>
                </li>
                <li>
                  <Link href="/services/business-advisory" className="text-sm text-white/70 hover:text-white hover:translate-x-0.5 transition-all duration-200 inline-block">
                    Business Advisory
                  </Link>
                </li>
              </ul>
            </div>

            {/* Individual Services */}
            <div className="lg:col-span-1">
              <h3 className="text-xs font-semibold text-white/90 uppercase tracking-wider mb-5">
                Individual Services
              </h3>
              <ul className="space-y-2.5">
                <li>
                  <Link href="/services/personal-tax" className="text-sm text-white/70 hover:text-white hover:translate-x-0.5 transition-all duration-200 inline-block">
                    Personal Tax Returns
                  </Link>
                </li>
                <li>
                  <Link href="/services/self-assessment" className="text-sm text-white/70 hover:text-white hover:translate-x-0.5 transition-all duration-200 inline-block">
                    Self-Assessment
                  </Link>
                </li>
                <li>
                  <Link href="/services/tax-planning" className="text-sm text-white/70 hover:text-white hover:translate-x-0.5 transition-all duration-200 inline-block">
                    Tax Planning
                  </Link>
                </li>
                <li>
                  <Link href="/services/estate-planning" className="text-sm text-white/70 hover:text-white hover:translate-x-0.5 transition-all duration-200 inline-block">
                    Estate Planning
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div className="lg:col-span-1">
              <h3 className="text-xs font-semibold text-white/90 uppercase tracking-wider mb-5">
                Company
              </h3>
              <ul className="space-y-2.5">
                <li>
                  <Link href="/who-we-are" className="text-sm text-white/70 hover:text-white hover:translate-x-0.5 transition-all duration-200 inline-block">
                    Who We Are
                  </Link>
                </li>
                <li>
                  <Link href="/sectors" className="text-sm text-white/70 hover:text-white hover:translate-x-0.5 transition-all duration-200 inline-block">
                    Sectors
                  </Link>
                </li>
                <li>
                  <Link href="/insights" className="text-sm text-white/70 hover:text-white hover:translate-x-0.5 transition-all duration-200 inline-block">
                    Insights
                  </Link>
                </li>
                <li>
                  <ContactTrigger className="text-sm text-white/70 hover:text-white hover:translate-x-0.5 transition-all duration-200 inline-block">
                    Contact
                  </ContactTrigger>
                </li>
                <li>
                  <a href="#" className="text-sm text-white/70 hover:text-white hover:translate-x-0.5 transition-all duration-200 inline-block">
                    Client Portal
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div className="lg:col-span-1">
              <h3 className="text-xs font-semibold text-white/90 uppercase tracking-wider mb-5">
                Legal
              </h3>
              <ul className="space-y-2.5">
                <li>
                  <Link href="/terms" className="text-sm text-white/70 hover:text-white hover:translate-x-0.5 transition-all duration-200 inline-block">
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="text-sm text-white/70 hover:text-white hover:translate-x-0.5 transition-all duration-200 inline-block">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/cookies" className="text-sm text-white/70 hover:text-white hover:translate-x-0.5 transition-all duration-200 inline-block">
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div className="lg:col-span-1">
              <h3 className="text-xs font-semibold text-white/90 uppercase tracking-wider mb-5">
                Get in Touch
              </h3>
              <ul className="space-y-2.5">
                <li>
                  <a href="tel:01217771200" className="text-sm text-white/70 hover:text-white transition-colors duration-200 flex items-center gap-2 group">
                    <svg className="w-4 h-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    0121 777 1200
                  </a>
                </li>
                <li>
                  <a href="mailto:info@rus.co.uk" className="text-sm text-white/70 hover:text-white transition-colors duration-200 flex items-center gap-2 group">
                    <svg className="w-4 h-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    info@rus.co.uk
                  </a>
                </li>
              </ul>

              {/* Social Media */}
              <div className="mt-7">
                <p className="text-xs font-semibold text-white/90 uppercase tracking-wider mb-4">
                  Follow Us
                </p>
                <div className="flex gap-2.5">
                  <a href="#" className="w-9 h-9 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-white/20 hover:scale-110 transition-all duration-200" aria-label="LinkedIn">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                  <a href="#" className="w-9 h-9 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-white/20 hover:scale-110 transition-all duration-200" aria-label="Twitter">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Partner Logos */}
          <div className="border-t border-white/10 pt-10 pb-10">
            <p className="text-xs text-white/60 uppercase tracking-wider text-center mb-8 font-medium">
              Seamless Integration With
            </p>
            <div className="flex items-center justify-center gap-10 md:gap-14 flex-wrap">
              <img src="https://vectorwiki.com/images/D6yvF__sage-accounting.svg" alt="Sage" className="h-7 brightness-0 invert opacity-50 hover:opacity-90 transition-opacity duration-300" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/f/f7/Xero_software_logo.svg" alt="Xero" className="h-6 brightness-0 invert opacity-50 hover:opacity-90 transition-opacity duration-300" />
              <img src="https://seeklogo.com/images/Q/quickbooks-logo-15BADDEFBA-seeklogo.com.png" alt="QuickBooks" className="h-7 brightness-0 invert opacity-50 hover:opacity-90 transition-opacity duration-300" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/a/af/FreeAgent_logo.svg" alt="FreeAgent" className="h-5 brightness-0 invert opacity-50 hover:opacity-90 transition-opacity duration-300" />
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/10 pt-10 pb-2">
            {/* Legal Links */}
            <div className="flex flex-wrap items-center justify-center gap-5 mb-6">
              <Link href="/privacy" className="text-xs text-white/60 hover:text-white/90 transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-white/60 hover:after:w-full after:transition-all after:duration-300">
                Privacy Policy
              </Link>
              <span className="text-white/30">•</span>
              <Link href="/terms" className="text-xs text-white/60 hover:text-white/90 transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-white/60 hover:after:w-full after:transition-all after:duration-300">
                Terms & Conditions
              </Link>
              <span className="text-white/30">•</span>
              <Link href="/cookies" className="text-xs text-white/60 hover:text-white/90 transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-white/60 hover:after:w-full after:transition-all after:duration-300">
                Cookie Policy
              </Link>
            </div>

            {/* Copyright */}
            <p className="text-xs text-white/60 text-center mb-5">
              © {currentYear} RUS & Company (UK) Ltd. • Company No: 3833778 • VAT Reg: GB 754 1385 28
            </p>

            {/* ICAEW Notice */}
            <p className="text-xs text-white/50 text-center leading-relaxed max-w-3xl mx-auto">
              Registered to carry out company Audit work in the UK by The Institute of Chartered Accountants in England & Wales (ICAEW).
              RUS & Company is committed to providing professional, reliable, and transparent accounting services.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
