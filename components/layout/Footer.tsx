'use client';

import Link from 'next/link';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/Rus Accountancy Logo .svg"
              alt="RUS Chartered Accountants"
              className="w-72 mb-4"
              style={{ height: 'auto' }}
            />
            <p className="text-sm text-gray-600">
              1190A-1194 Stratford Road
              <br />
              Hall Green
              <br />
              Birmingham
              <br />
              B28 8AB
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/who-we-are" className="hover:underline">
                  Who We Are
                </Link>
              </li>
              <li>
                <Link href="/sectors" className="hover:underline">
                  Sectors
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:underline">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/insights" className="hover:underline">
                  Insights
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/services/taxation-services"
                  className="hover:underline"
                >
                  Taxation Services
                </Link>
              </li>
              <li>
                <Link
                  href="/services/accounting-bookkeeping"
                  className="hover:underline"
                >
                  Accounting & Bookkeeping
                </Link>
              </li>
              <li>
                <Link
                  href="/services/audit-assurance"
                  className="hover:underline"
                >
                  Audit & Assurance
                </Link>
              </li>
              <li>
                <Link
                  href="/services/payroll-services"
                  className="hover:underline"
                >
                  Payroll Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="tel:01217771200" className="hover:underline">
                  0121 777 1200
                </a>
              </li>
              <li>
                <a href="mailto:info@rus.co.uk" className="hover:underline">
                  info@rus.co.uk
                </a>
              </li>
              <li>
                <Link href="/contact" className="hover:underline">
                  Contact Form
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t mt-8 pt-8 text-sm text-gray-600">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p>
              © {currentYear} RUS & Company (UK) Ltd. Company No:
              3833778. VAT Reg: GB 754 1385 28
            </p>
            <div className="flex gap-4">
              <Link href="/privacy" className="hover:underline">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:underline">
                Terms
              </Link>
            </div>
          </div>
          <p className="mt-4 text-xs">
            Registered to carry out company Audit work in the UK by The
            Institute of Chartered Accountants in England & Wales (ICAEW)
          </p>
        </div>
      </div>
    </footer>
  );
}
