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
              When I founded RUS Chartered Accountants in 1995, I wanted to
              create more than just another accountancy firm. I aimed to
              build a practice that genuinely guided clients towards
              long-term financial success—one shaped by real experience,
              hard-earned insight, and a deep understanding of what
              businesses need to thrive.
            </p>

            <div className="w-12 h-px bg-gray-200 my-8" />

            <p>
              My own career began as a graduate, moving on to Articled Clerk
              in a medium-to-large firm of Chartered Accountants and
              Registered Auditors, which has since become part of one of the
              Big Four global accountancy practices. I started in the Audit
              department and gained experience auditing large listed and
              non-listed PLC companies with turnovers in excess of £100m.
              Those early years were instrumental, teaching me the value of
              precision, professional discipline, and strategic thinking at
              the highest level. Later, I moved to a smaller, three-partner
              firm of Chartered Accountants, where I worked with SME
              businesses from a compliance and audit perspective. I also
              completed my postgraduate Master&apos;s in Business
              Administration, in addition to becoming a Fellow member of the
              Institute of Chartered Accountants in England & Wales. This
              further strengthened my understanding of how financial
              decisions shape organisations, growth, and leadership.
            </p>

            <div className="w-12 h-px bg-gray-200 my-8" />

            <p>
              RUS Chartered Accountants, as a firm, is, in many ways, a
              reflection of that journey. Our success story is built on
              dedication, resilience, and a commitment to doing things
              properly—qualities that now form the blueprint we use to
              support our clients. We understand the obstacles businesses
              face because we&apos;ve overcome many of them ourselves. That
              experience allows us to guide clients with clarity, confidence,
              and practical solutions that create meaningful results.
            </p>

            <div className="w-12 h-px bg-gray-200 my-8" />

            <p>
              Today, our substantial team—including a group of qualified
              accountants—brings together specialist knowledge, sector
              expertise, and a modern, digital approach that ensures our
              clients remain fully supported in an ever-changing financial
              landscape. We are proud to be a trusted partner to businesses
              and individuals across the UK, helping them make informed
              decisions and achieve sustainable growth.
            </p>

            <div className="w-12 h-px bg-gray-200 my-8" />

            <p>
              Thank you for taking the time to learn more about us. I hope
              my story inspires confidence in the support and guidance RUS
              Chartered Accountants can offer you on your own financial
              journey.
            </p>
          </div>

          {/* Pull Quote - Horizontal below text */}
          <div className="bg-gray-50 rounded-xl p-10 mt-12">
            <span className="text-6xl text-[#01458f]/30 leading-none block mb-6">
              &ldquo;
            </span>
            <p className="text-xl italic font-light text-gray-700 leading-relaxed mb-8">
              We understand the obstacles businesses face because we&apos;ve
              overcome many of them ourselves. That experience allows us to
              guide clients with clarity, confidence, and practical solutions.
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
