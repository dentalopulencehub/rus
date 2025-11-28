"use client";

import { useState } from "react";
import { ContactFormInline } from "@/components/contact/ContactFormInline";

export default function ContactPage() {
  const [activeView, setActiveView] = useState<"details" | "form">("form");

  return (
    <main className="overflow-x-hidden bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#01458f]/10 rounded-full mb-6">
            <svg className="w-5 h-5 text-[#01458f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span className="text-sm font-medium text-[#01458f]">We're here to help</span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-gray-900 mb-6 tracking-tight">
            Contact Us
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl leading-relaxed">
            Get in touch with our team of Chartered Accountants. We're here to help with all your accounting, tax, and audit needs.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-4 bg-gradient-to-b from-white via-gray-50/30 to-white">
        <div className="max-w-6xl mx-auto space-y-8">
          {/* Contact Cards - 3 in a row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Office Card */}
            <div className="group bg-white border border-gray-200 rounded-xl p-8 hover:border-gray-300 transition-colors duration-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-[#01458f]/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-[#01458f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Office</p>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed">
                1190A-1192 Stratford Road<br />
                Hall Green<br />
                <span className="font-medium text-gray-900">Birmingham B28 8AB</span>
              </p>
            </div>

            {/* Phone Card */}
            <div className="group bg-white border border-gray-200 rounded-xl p-8 hover:border-gray-300 transition-colors duration-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-[#01458f]/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-[#01458f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Phone</p>
              </div>
              <a href="tel:01217771200" className="text-base font-semibold text-gray-900 hover:text-[#01458f] transition-colors duration-200 inline-block">
                0121 777 1200
              </a>
              <p className="text-xs text-gray-500 mt-2">Mon-Fri, 9AM-5:30PM</p>
            </div>

            {/* Email Card */}
            <div className="group bg-white border border-gray-200 rounded-xl p-8 hover:border-gray-300 transition-colors duration-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-[#01458f]/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-[#01458f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Email</p>
              </div>
              <a href="mailto:info@rus.co.uk" className="text-base font-semibold text-gray-900 hover:text-[#01458f] transition-colors duration-200 inline-block break-all">
                info@rus.co.uk
              </a>
              <p className="text-xs text-gray-500 mt-2">We reply within 24 hours</p>
            </div>
          </div>

          {/* Opening Hours - Full width below */}
          <div className="bg-white border border-gray-200/80 rounded-xl p-8 hover:shadow-lg hover:shadow-[#01458f]/5 transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-[#01458f]/10 flex items-center justify-center">
                <svg className="w-5 h-5 text-[#01458f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Opening Hours</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
              <div className="text-center">
                <p className="text-xs text-gray-500 mb-2">Monday</p>
                <p className="text-sm font-semibold text-gray-900">9:00 AM – 5:30 PM</p>
              </div>
              <div className="text-center">
                <p className="text-xs text-gray-500 mb-2">Tuesday</p>
                <p className="text-sm font-semibold text-gray-900">9:00 AM – 5:30 PM</p>
              </div>
              <div className="text-center">
                <p className="text-xs text-gray-500 mb-2">Wednesday</p>
                <p className="text-sm font-semibold text-gray-900">9:00 AM – 5:30 PM</p>
              </div>
              <div className="text-center">
                <p className="text-xs text-gray-500 mb-2">Thursday</p>
                <p className="text-sm font-semibold text-gray-900">9:00 AM – 5:30 PM</p>
              </div>
              <div className="text-center">
                <p className="text-xs text-gray-500 mb-2">Friday</p>
                <p className="text-sm font-semibold text-gray-900">9:00 AM – 5:30 PM</p>
              </div>
              <div className="text-center">
                <p className="text-xs text-gray-400 mb-2">Saturday</p>
                <p className="text-sm font-medium text-gray-400">Closed</p>
              </div>
              <div className="text-center">
                <p className="text-xs text-gray-400 mb-2">Sunday</p>
                <p className="text-sm font-medium text-gray-400">Closed</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Options with Toggle */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-8 tracking-tight">
              How Can We Help?
            </h2>

            {/* Brand Toggle Bar */}
            <div className="flex justify-center">
              <div className="inline-flex p-1 bg-gray-100 rounded-full">
                <button
                  onClick={() => setActiveView("form")}
                  className={`relative overflow-hidden px-8 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                    activeView === "form"
                      ? "bg-[#01458f] text-white shadow-sm"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  <span className="relative z-10">Detailed Enquiry</span>
                </button>
                <button
                  onClick={() => setActiveView("details")}
                  className={`relative overflow-hidden px-8 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                    activeView === "details"
                      ? "bg-[#01458f] text-white shadow-sm"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  <span className="relative z-10">Quick Contact</span>
                </button>
              </div>
            </div>
          </div>

          {/* Quick Contact View - Form Visible by Default */}
          {activeView === "details" && (
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-200 p-10 shadow-lg">
              <div className="mb-8">
                <h3 className="text-2xl font-medium text-gray-900 mb-3">Quick Contact</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
              </div>

              {/* Quick Contact Form - Always Visible */}
              <div className="bg-white rounded-xl border border-gray-200 p-8">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-900 mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#01458f] focus:ring-2 focus:ring-[#01458f]/20 outline-none transition-all"
                        placeholder="John Smith"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#01458f] focus:ring-2 focus:ring-[#01458f]/20 outline-none transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-900 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#01458f] focus:ring-2 focus:ring-[#01458f]/20 outline-none transition-all"
                      placeholder="0121 777 1200"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-900 mb-2">
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#01458f] focus:ring-2 focus:ring-[#01458f]/20 outline-none transition-all resize-none"
                      placeholder="Tell us how we can help you..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full md:w-auto inline-flex items-center justify-center px-8 py-3 bg-[#01458f] text-white rounded-full text-sm font-medium hover:bg-[#013a75] hover:shadow-lg transition-all duration-300"
                  >
                    Send Message
                  </button>
                </form>

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <p className="text-sm text-gray-600 text-center mb-3">
                    Or contact us directly
                  </p>
                  <div className="flex items-center justify-center gap-6">
                    <a href="tel:01217771200" className="text-sm text-[#01458f] hover:underline font-medium">
                      0121 777 1200
                    </a>
                    <span className="text-gray-300">|</span>
                    <a href="mailto:info@rus.co.uk" className="text-sm text-[#01458f] hover:underline font-medium">
                      info@rus.co.uk
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Detailed Enquiry View - Form Embedded Directly */}
          {activeView === "form" && (
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-200 p-10 shadow-lg">
              <div className="mb-8">
                <h3 className="text-2xl font-medium text-gray-900 mb-3">Detailed Enquiry</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  For comprehensive enquiries about our services, complete our detailed form below. This helps us understand your specific requirements and connect you with the right specialist.
                </p>
              </div>

              {/* Embedded Contact Form */}
              <div className="bg-white rounded-xl border border-gray-200 p-8">
                <ContactFormInline />
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Google Maps Section */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-8 tracking-tight">
            Our Location
          </h2>
          <div className="h-[500px] rounded-2xl overflow-hidden shadow-xl border border-gray-200 mb-8">
            <iframe
              src="https://maps.google.com/maps?q=1190A-1192%20Stratford%20Road,%20Hall%20Green,%20Birmingham%20B28%208AB&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="RUS Chartered Accountants Location"
            ></iframe>
          </div>

          {/* Access Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <p className="text-xs text-gray-400 uppercase tracking-wider mb-3">Parking</p>
              <p className="text-sm text-gray-900">Free on-site parking available for all clients</p>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <p className="text-xs text-gray-400 uppercase tracking-wider mb-3">Public Transport</p>
              <p className="text-sm text-gray-900">Direct train access from Birmingham city centre</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full flex items-center justify-center bg-gray-50 px-4 py-24">
        <div className="max-w-6xl mx-auto w-full">
          <div className="relative bg-gradient-to-br from-[#01458f] to-[#0052cc] rounded-3xl overflow-hidden px-8 md:px-16 py-20 md:py-28 shadow-xl">
            <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
              <path d="M 600 -100 Q 800 100 850 300" stroke="white" strokeWidth="2" fill="none" />
              <circle cx="750" cy="150" r="80" stroke="white" strokeWidth="1.5" fill="none" />
              <path d="M 700 50 L 850 80 L 820 200" stroke="white" strokeWidth="1.5" fill="none" />
              <path d="M 650 120 L 750 100 L 730 180 L 640 190 Z" stroke="white" strokeWidth="1" fill="none" />
              <path d="M -50 400 Q 100 450 200 480" stroke="white" strokeWidth="2" fill="none" />
              <circle cx="100" cy="420" r="60" stroke="white" strokeWidth="1.5" fill="none" />
              <path d="M 50 380 L 180 400 L 160 480" stroke="white" strokeWidth="1.5" fill="none" />
              <line x1="400" y1="50" x2="500" y2="80" stroke="white" strokeWidth="1" opacity="0.5" />
              <line x1="300" y1="400" x2="400" y2="420" stroke="white" strokeWidth="1" opacity="0.5" />
              <circle cx="500" cy="60" r="30" stroke="white" strokeWidth="1" fill="none" opacity="0.4" />
            </svg>

            <div className="relative z-10 flex flex-col items-center text-center space-y-6">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight">
                Prefer to speak to someone?
              </h2>

              <p className="text-white/90 text-base md:text-lg">
                Our team is ready to help with your accounting needs
              </p>

              <a href="tel:01217771200" className="relative inline-flex items-center justify-center px-32 py-2 bg-white text-gray-900 rounded-full text-base md:text-lg font-semibold hover:shadow-2xl hover:shadow-white/30 transition-all duration-300 overflow-hidden group">
                <div className="absolute inset-0 -z-10 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-md backdrop-saturate-150" />
                <div className="absolute inset-0 -z-20 bg-gradient-to-br from-white/30 via-white/10 to-white/30 rounded-full opacity-0 group-hover:opacity-40 transition-all duration-300" />
                <div className="absolute inset-0 -z-30 bg-white rounded-full transition-all duration-300 group-hover:bg-white/95" />
                <span className="relative z-10">Call 0121 777 1200</span>
              </a>

              <p className="text-white/90 text-sm md:text-base">
                Monday - Friday: 9:00 AM - 5:30 PM
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
