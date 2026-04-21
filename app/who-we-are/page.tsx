"use client";

import { AboutHero } from "@/components/home/AboutHero";
import { CTASimple } from "@/components/home/CTASimple";

export default function WhoWeArePage() {
  return (
    <main className="overflow-x-hidden bg-white">
      {/* Hero Section */}
      <AboutHero />

      {/* Section 1: Company Statement */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <p className="text-2xl md:text-3xl lg:text-4xl font-light text-gray-900 leading-relaxed
            tracking-tight text-center">
            Since 1995, RUS Chartered Accountants has delivered proactive,
            tailored financial guidance to businesses and individuals across
            Birmingham and beyond, building lasting relationships founded on
            clarity, expertise, and results.
          </p>

          <div className="w-16 h-[3px] bg-[#01458f] mx-auto mt-12 mb-16" />

          {/* Stat Blocks */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0">
            {[
              { value: "30+", label: "Years of Trusted Expertise" },
              { value: "7,000+", label: "Businesses & Individuals Served" },
              { value: "ICAEW", label: "Regulated & Registered Audit Firm" },
            ].map((stat, i) => (
              <div
                key={i}
                className={`flex flex-col items-center text-center px-8 ${
                  i !== 2
                    ? "md:border-r md:border-gray-200"
                    : ""
                }`}
              >
                <span className="text-4xl md:text-5xl font-bold text-[#01458f] tracking-tight">
                  {stat.value}
                </span>
                <span className="text-sm text-gray-500 mt-2 uppercase tracking-wider">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2: Our Values */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4 tracking-tight">
              What Defines Us
            </h2>
            <p className="text-base text-gray-500 max-w-xl mx-auto">
              The principles at the heart of everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                word: "Professional",
                description:
                  "Qualified chartered accountants delivering the highest standard " +
                  "of service, backed by decades of industry experience.",
              },
              {
                word: "Competent",
                description:
                  "Deep technical expertise across tax, audit, and advisory, " +
                  "ensuring precise, up-to-date guidance you can rely on.",
              },
              {
                word: "Integral",
                description:
                  "Transparent, ethical practice built on trust. We act with " +
                  "integrity in every client relationship we hold.",
              },
            ].map((value, i) => (
              <div
                key={i}
                className="bg-white border-t-[3px] border-t-[#01458f] rounded-lg p-8
                  shadow-sm hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="text-lg font-bold text-gray-900 uppercase tracking-wider mb-3">
                  {value.word}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Founder's Message */}
      <section className="py-32 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <p className="text-sm font-semibold text-[#01458f] uppercase tracking-widest mb-6">
            Message from Our Founder
          </p>
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-2 tracking-tight">
            Raza Samar
          </h2>
          <p className="text-base text-gray-400 mb-10">
            BA(Hons) MBA BFP FCA | Founder & Managing Director
          </p>

          <div className="text-2xl md:text-3xl lg:text-4xl font-light text-gray-900 leading-relaxed tracking-tight">
            <p>
              When I established RUS Chartered Accountants in 1995, my aim
              was never simply to start another accountancy firm. I wanted
              to build a practice that would genuinely help clients make
              better financial decisions and achieve lasting success. From
              the outset, the focus has been on delivering practical,
              dependable advice shaped by real experience and a clear
              understanding of what businesses need at every stage of their
              journey, from early growth to long-term stability.
            </p>

            <div className="w-12 h-px bg-gray-200 my-8" />

            <p>
              My career began as a graduate trainee before I went on to
              qualify as an Articled Clerk with a large firm of Chartered
              Accountants and Registered Auditors, which later became part
              of one of the Big Four. I started in audit, working with large
              listed and privately owned PLCs with turnovers well in excess
              of £100 million. That experience gave me a strong grounding
              in accuracy, professional standards and strategic financial
              thinking.
            </p>

            <div className="w-12 h-px bg-gray-200 my-8" />

            <p>
              I later moved to a smaller three-partner firm, where I worked
              closely with small and medium-sized businesses on audit and
              compliance matters. During that time, I also completed a
              postgraduate MBA and later became a Fellow of the Institute
              of Chartered Accountants in England and Wales. Both the
              practical and academic sides of my career have played an
              important role in shaping my approach to business, leadership
              and sustainable growth.
            </p>

            <div className="w-12 h-px bg-gray-200 my-8" />

            <p>
              Over the years, I have also had the privilege of contributing
              beyond practice. I served as a Director of the Greater
              Birmingham and Solihull Local Enterprise Partnership
              alongside Andy Street, former Managing Director of John
              Lewis, helping to support regional business growth and
              economic development. In addition, I currently sit on the
              advisory board of an accounting software company, allowing
              me to remain closely involved with innovation and the future
              of the profession.
            </p>

            <div className="w-12 h-px bg-gray-200 my-8" />

            <p>
              In many ways, RUS Chartered Accountants reflects that
              journey. The firm has been built on hard work, consistency
              and a determination to do things properly. Because we
              understand the pressures and challenges that businesses face,
              we are able to provide advice that is not only professional,
              but also practical, commercially minded and grounded in
              experience.
            </p>

            <div className="w-12 h-px bg-gray-200 my-8" />

            <p>
              Today, we are proud to have a strong team of qualified
              accountants with broad experience across a range of sectors,
              and we continue to invest in modern digital systems so that
              our clients receive a flexible, responsive and efficient
              service. We are delighted to support businesses and
              individuals across the UK, helping them make informed
              decisions and plan confidently for the future.
            </p>

            <div className="w-12 h-px bg-gray-200 my-8" />

            <p>
              Thank you for taking the time to learn more about RUS
              Chartered Accountants. I hope this gives you a clearer sense
              of who we are, what we stand for and how we can support you.
            </p>
          </div>

          {/* Pull Quote - Horizontal below text */}
          <div className="bg-gray-50 rounded-xl p-10 mt-12">
            <span className="text-6xl text-[#01458f]/30 leading-none block mb-6">
              &ldquo;
            </span>
            <p className="text-xl italic font-light text-gray-700 leading-relaxed mb-8">
              Because we understand the pressures and challenges that
              businesses face, we are able to provide advice that is not
              only professional, but also practical, commercially minded
              and grounded in experience.
            </p>
            <p className="text-base text-gray-900">
              Raza Samar, Founder
            </p>
          </div>
        </div>
      </section>

      {/* Section 4: Why Choose Us */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-3 tracking-tight">
              Why Choose RUS Chartered Accountants
            </h2>
            <p className="text-base text-gray-500 max-w-2xl mx-auto">
              Personal service from accountants who truly understand UK
              businesses
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Tailored Service",
                description:
                  "Personalised solutions designed around your unique goals " +
                  "and circumstances, not a one-size-fits-all approach.",
              },
              {
                title: "Transparent Fees",
                description:
                  "Clear, upfront fee structure with no hidden costs, so you " +
                  "always know exactly what you're paying for.",
              },
              {
                title: "Expert Guidance",
                description:
                  "Precise, up-to-date advice from qualified chartered " +
                  "accountants with deep technical expertise.",
              },
              {
                title: "Future Ready",
                description:
                  "Embracing innovative technology and cloud-based solutions " +
                  "to keep your finances efficient and accessible.",
              },
            ].map((benefit, i) => (
              <div
                key={i}
                className="bg-white border-l-[3px] border-l-[#01458f] rounded-lg p-6
                  shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: CTA */}
      <CTASimple
        heading="Ready to partner with experienced chartered accountants?"
        supportingText="Let's discuss how we can support your business with expert accounting, tax and audit services"
      />
    </main>
  );
}
