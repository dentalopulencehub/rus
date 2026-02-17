"use client";

import { useState, FormEvent } from "react";
import { ContactFormInline } from "@/components/contact/ContactFormInline";

export default function ContactPage() {
  const [activeView, setActiveView] = useState<"details" | "form">("form");

  // Quick contact form state
  const [quickFormData, setQuickFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleQuickContactSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const response = await fetch('/api/contact-quick', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(quickFormData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }

      setIsSubmitted(true);
      setQuickFormData({ name: "", email: "", phone: "", message: "" });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    } catch (error) {
      console.error('Quick contact form error:', error);
      setSubmitError(error instanceof Error ? error.message : 'Failed to send message');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleQuickFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setQuickFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <main className="overflow-x-hidden bg-white">
      {/* Hero Section with Contact Info */}
      <section className="relative pt-32 pb-20 px-4 bg-gradient-to-br from-[#01458f] to-[#0052cc] overflow-hidden">
        {/* Flowing contour lines */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          viewBox="0 0 1200 600"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="contact-lg" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
              <stop offset="20%" stopColor="#ffffff" stopOpacity="1" />
              <stop offset="80%" stopColor="#ffffff" stopOpacity="1" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
            </linearGradient>
          </defs>
          <style>{`
            @keyframes contactWave {
              0%, 100% { transform: translateY(0px); }
              50% { transform: translateY(-8px); }
            }
            .cw { animation: contactWave 20s ease-in-out infinite; }
            .cw:nth-child(odd) { animation-direction: reverse; }
            .cw:nth-child(3n) { animation-duration: 24s; }
            .cw:nth-child(5n) { animation-duration: 18s; }
            .cw:nth-child(7n) { animation-duration: 22s; }
          `}</style>
          <g stroke="url(#contact-lg)" fill="none" strokeWidth="1.5" opacity="0.12">
            <path className="cw" d="M-50,20 Q300,26 600,18 T1250,22" />
            <path className="cw" d="M-50,56 Q300,60 600,54 T1250,58" />
            <path className="cw" d="M-50,92 Q300,94 600,90 T1250,94" />
            <path className="cw" d="M-50,128 Q300,129 600,126 T1250,130" />
            <path className="cw" d="M-50,164 Q300,163 600,162 T1250,166" />
            <path className="cw" d="M-50,200 Q300,197 600,198 T1250,202" />
            <path className="cw" d="M-50,236 Q300,231 600,234 T1250,238" />
            <path className="cw" d="M-50,272 Q300,265 600,270 T1250,274" />
            <path className="cw" d="M-50,308 Q300,299 600,306 T1250,310" />
            <path className="cw" d="M-50,344 Q300,333 600,342 T1250,346" />
            <path className="cw" d="M-50,380 Q300,367 600,378 T1250,382" />
            <path className="cw" d="M-50,416 Q300,401 600,414 T1250,418" />
            <path className="cw" d="M-50,452 Q300,435 600,450 T1250,454" />
            <path className="cw" d="M-50,488 Q300,469 600,486 T1250,490" />
            <path className="cw" d="M-50,524 Q300,503 600,522 T1250,526" />
            <path className="cw" d="M-50,560 Q300,537 600,558 T1250,562" />
            <path className="cw" d="M-50,596 Q300,571 600,594 T1250,598" />
          </g>
        </svg>

        <div className="relative z-10 max-w-6xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight">
              Get in Touch
            </h1>
            <p className="text-lg md:text-xl text-white/85 max-w-2xl mx-auto leading-relaxed">
              Expert accounting, tax, and audit advice from
              Birmingham&apos;s trusted chartered accountants
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8">
            {/* Visit */}
            <div className="bg-white/10 border border-white/20 backdrop-blur-sm rounded-xl p-6 text-center">
              <div className="w-10 h-10 rounded-full bg-white/15 flex items-center justify-center mx-auto mb-3">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <p className="text-xs font-semibold text-white/60 uppercase tracking-wider mb-2">
                Visit Us
              </p>
              <p className="text-sm text-white/90 leading-relaxed">
                1190A-1192 Stratford Road<br />
                Hall Green, Birmingham B28 8AB
              </p>
            </div>

            {/* Call */}
            <div className="bg-white/10 border border-white/20 backdrop-blur-sm rounded-xl p-6 text-center">
              <div className="w-10 h-10 rounded-full bg-white/15 flex items-center justify-center mx-auto mb-3">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <p className="text-xs font-semibold text-white/60 uppercase tracking-wider mb-2">
                Call Us
              </p>
              <a
                href="tel:01217771200"
                className="text-base font-semibold text-white hover:text-white/80 transition-colors duration-200 inline-block"
              >
                0121 777 1200
              </a>
            </div>

            {/* Email */}
            <div className="bg-white/10 border border-white/20 backdrop-blur-sm rounded-xl p-6 text-center">
              <div className="w-10 h-10 rounded-full bg-white/15 flex items-center justify-center mx-auto mb-3">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <p className="text-xs font-semibold text-white/60 uppercase tracking-wider mb-2">
                Email Us
              </p>
              <a
                href="mailto:info@rus.co.uk"
                className="text-base font-semibold text-white hover:text-white/80 transition-colors duration-200 inline-block"
              >
                info@rus.co.uk
              </a>
              <p className="text-xs text-white/50 mt-1">We reply within 24 hours</p>
            </div>
          </div>

          {/* Condensed Opening Hours */}
          <div className="flex items-center justify-center gap-2.5 text-white text-base md:text-lg font-medium">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Mon–Fri: 9:00 AM – 5:30 PM</span>
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
                {isSubmitted ? (
                  <div className="py-8 text-center space-y-4">
                    <div className="flex justify-center">
                      <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
                        <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                    <h3 className="text-2xl font-light italic text-gray-900">Message sent successfully!</h3>
                    <p className="text-gray-600">We'll get back to you soon. Check your email for confirmation.</p>
                  </div>
                ) : (
                  <form onSubmit={handleQuickContactSubmit} className="space-y-6">
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
                          value={quickFormData.name}
                          onChange={handleQuickFormChange}
                          disabled={isSubmitting}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#01458f] focus:ring-2 focus:ring-[#01458f]/20 outline-none transition-all disabled:bg-gray-50 disabled:cursor-not-allowed"
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
                          value={quickFormData.email}
                          onChange={handleQuickFormChange}
                          disabled={isSubmitting}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#01458f] focus:ring-2 focus:ring-[#01458f]/20 outline-none transition-all disabled:bg-gray-50 disabled:cursor-not-allowed"
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
                        value={quickFormData.phone}
                        onChange={handleQuickFormChange}
                        disabled={isSubmitting}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#01458f] focus:ring-2 focus:ring-[#01458f]/20 outline-none transition-all disabled:bg-gray-50 disabled:cursor-not-allowed"
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
                        value={quickFormData.message}
                        onChange={handleQuickFormChange}
                        disabled={isSubmitting}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#01458f] focus:ring-2 focus:ring-[#01458f]/20 outline-none transition-all resize-none disabled:bg-gray-50 disabled:cursor-not-allowed"
                        placeholder="Tell us how we can help you..."
                      ></textarea>
                    </div>

                    {submitError && (
                      <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                        <p className="text-sm text-red-700">{submitError}</p>
                        <p className="text-sm text-red-600 mt-1">
                          Please try again or contact us at <a href="mailto:info@rus.co.uk" className="underline">info@rus.co.uk</a>
                        </p>
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full md:w-auto inline-flex items-center justify-center px-8 py-3 bg-[#01458f] text-white rounded-full text-sm font-medium hover:bg-[#013a75] hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </>
                      ) : (
                        'Send Message'
                      )}
                    </button>
                  </form>
                )}

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
