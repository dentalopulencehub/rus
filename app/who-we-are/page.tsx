"use client";

import { WhyChooseUs } from "@/components/home/WhyChooseUs";

export default function WhoWeArePage() {
  return (
    <main className="overflow-x-hidden bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-gray-900 mb-6 tracking-tight">
            Who We Are
          </h1>
          <div className="w-16 h-[3px] bg-[#01458f] mb-12"></div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-8 tracking-tight">
            About Us
          </h2>

          <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
            <p>
              Established in 1995, RUS Chartered Accountants are a trusted team of Chartered Accountants,
              Registered Auditors and Tax Advisors based in Birmingham. With over 30 years of experience
              supporting businesses and individuals across the West Midlands and beyond, we are proud to
              deliver proactive, tailored advice that helps our clients thrive in a competitive financial landscape.
            </p>

            <p>
              As an independent firm, we are committed to building long-standing relationships based on clarity,
              expertise, and results. Whether you're a start-up, a growing SME, or an established company seeking
              expert compliance and strategic insight, we provide the professional support you need to move
              forward with confidence.
            </p>

            <p>
              Our firm is built on a highly skilled team of qualified accountants with a wide range of specialisms,
              enabling us to provide expert support across diverse sectors and financial challenges. From complex
              tax planning to regulatory audit work and day-to-day business advisory, every client benefits from
              dedicated professionals who understand their unique needs.
            </p>

            <p>
              In a fast-moving digital age, we stand at the forefront of modern accounting technology and
              cloud-based solutions, ensuring accuracy, efficiency, and real-time financial insight. While fully
              embracing innovative systems and digital transformation, our clients also benefit from the depth of
              knowledge and extensive experience that only decades in the industry can provide.
            </p>
          </div>
        </div>
      </section>

      {/* Founder's Message */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4 tracking-tight">
              Message from Our Founder
            </h2>
            <p className="text-xl text-[#01458f] font-light">Raza Hussain, FCA MBA</p>
            <p className="text-sm text-gray-600">Founder & Managing Director</p>
          </div>

          <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
            <p>
              When I founded RUS Chartered Accountants in 1995, I wanted to create more than just another
              accountancy firm. I aimed to build a practice that genuinely guided clients towards long-term
              financial success.
            </p>

            <p>
              My own career began as a graduate, moving on to Articled Clerk in a medium-to-large firm of
              Chartered Accountants and Registered Auditors, which has since become part of one of the Big Four
              global accountancy practices. I started in the Audit department and gained experience auditing
              large listed and non-listed PLC companies with turnovers in excess of £100m.
            </p>

            <p>
              Those early years were instrumental, teaching me the value of precision, professional discipline,
              and strategic thinking at the highest level. Later, I moved to a smaller, three-partner firm of
              Chartered Accountants, where I worked with SME businesses from a compliance and audit perspective.
            </p>

            <p>
              I also completed my postgraduate Master's in Business Administration, in addition to becoming a
              Fellow member of the Institute of Chartered Accountants in England & Wales. This further
              strengthened my understanding of how financial decisions shape organizations, growth, and leadership.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* First CTA */}
      <section className="w-full flex items-center justify-center bg-white px-4 py-24">
        <div className="max-w-6xl mx-auto w-full">
          <div className="relative bg-gradient-to-br from-[#01458f] to-[#0052cc] rounded-3xl overflow-hidden px-8 md:px-16 py-20 md:py-28">
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
                Ready to partner with experienced<br />chartered accountants?
              </h2>

              <p className="text-white/90 text-base md:text-lg -mb-2">
                Let's discuss how we can support your business with expert<br />accounting, tax and audit services
              </p>

              <a href="/contact" className="relative inline-flex items-center justify-center px-32 py-2 bg-white text-gray-900 rounded-full text-base md:text-lg font-semibold hover:shadow-2xl hover:shadow-white/30 transition-all duration-300 overflow-hidden group">
                <div className="absolute inset-0 -z-10 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-md backdrop-saturate-150" />
                <div className="absolute inset-0 -z-20 bg-gradient-to-br from-white/30 via-white/10 to-white/30 rounded-full opacity-0 group-hover:opacity-40 transition-all duration-300" />
                <div className="absolute inset-0 -z-30 bg-white rounded-full transition-all duration-300 group-hover:bg-white/95" />
                <span className="relative z-10">Get in Touch</span>
              </a>

              <p className="text-white/90 text-sm md:text-base">
                Over 30 years of trusted expertise in Birmingham
              </p>

              <div className="flex flex-col items-center justify-center gap-3 text-white/70 text-sm mt-4">
                <div className="flex flex-col md:flex-row items-center gap-3 md:gap-6">
                  <a href="tel:01217771200" className="flex items-center gap-2 hover:text-white transition-colors duration-200">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span>0121 777 1200</span>
                  </a>
                  <a href="mailto:info@rus.co.uk" className="flex items-center gap-2 hover:text-white transition-colors duration-200">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span>info@rus.co.uk</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
