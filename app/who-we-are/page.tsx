"use client";

import { motion } from "framer-motion";
import { Dancing_Script } from 'next/font/google';

const dancingScript = Dancing_Script({
  subsets: ['latin'],
  weight: ['400', '700']
});

export default function WhoWeArePage() {
  const heroText = [
    { text: "When I founded", color: "text-gray-800" },
    { text: "RUS Chartered Accountants", color: "text-[#01458f]", emphasis: true },
    { text: "in 1995, I wanted to create", color: "text-gray-800" },
    { text: "more than", color: "text-gray-800" },
    { text: "just another", color: "text-gray-800" },
    { text: "accountancy firm.", color: "text-gray-800" },
    { text: "I aimed to build", color: "text-gray-800" },
    { text: "a practice", color: "text-gray-800" },
    { text: "that genuinely", color: "text-[#01458f]", emphasis: true },
    { text: "guided clients", color: "text-gray-800" },
    { text: "towards", color: "text-gray-800" },
    { text: "long-term", color: "text-[#01458f]", emphasis: true },
    { text: "financial success.", color: "text-gray-800" }
  ];

  const careerText1 = [
    { text: "My own career began as a", color: "text-gray-800" },
    { text: "graduate,", color: "text-gray-800" },
    { text: "moving on to", color: "text-gray-800" },
    { text: "Articled Clerk", color: "text-[#01458f]", emphasis: true },
    { text: "in a medium-to-large firm of Chartered Accountants and Registered Auditors, which has since become part of one of the", color: "text-gray-800" },
    { text: "Big Four", color: "text-[#01458f]", emphasis: true },
    { text: "global accountancy practices. I started in the", color: "text-gray-800" },
    { text: "Audit department", color: "text-[#01458f]", emphasis: true },
    { text: "and gained experience auditing large listed and non-listed PLC companies with turnovers in excess of", color: "text-gray-800" },
    { text: "£100m.", color: "text-[#01458f]", emphasis: true }
  ];

  const careerText2 = [
    { text: "Those early years were", color: "text-gray-800" },
    { text: "instrumental,", color: "text-[#01458f]", emphasis: true },
    { text: "teaching me the value of", color: "text-gray-800" },
    { text: "precision,", color: "text-gray-800" },
    { text: "professional discipline,", color: "text-gray-800" },
    { text: "and", color: "text-gray-800" },
    { text: "strategic thinking", color: "text-[#01458f]", emphasis: true },
    { text: "at the highest level. Later, I moved to a smaller, three-partner firm of Chartered Accountants, where I worked with", color: "text-gray-800" },
    { text: "SME businesses", color: "text-[#01458f]", emphasis: true },
    { text: "from a compliance and audit perspective.", color: "text-gray-800" }
  ];

  const careerText3 = [
    { text: "I also completed my postgraduate", color: "text-gray-800" },
    { text: "Master's in Business Administration,", color: "text-[#01458f]", emphasis: true },
    { text: "in addition to becoming a", color: "text-gray-800" },
    { text: "Fellow member", color: "text-[#01458f]", emphasis: true },
    { text: "of the Institute of Chartered Accountants in England & Wales. This further strengthened my understanding of how", color: "text-gray-800" },
    { text: "financial decisions", color: "text-[#01458f]", emphasis: true },
    { text: "shape organizations, growth, and leadership.", color: "text-gray-800" }
  ];

  return (
    <main className="overflow-x-hidden bg-white">
      {/* Hero Section with Magic Text Effect */}
      <section className="min-h-screen flex items-center relative overflow-hidden">
        {/* Subtle background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-[#F0F7FF] to-white opacity-50" />

        {/* Subtle pattern background */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2301458f' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: '60px 60px'
            }}
          />
        </div>

        <div className="container mx-auto px-4 md:px-20 relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
            className="max-w-6xl mx-auto"
          >
            {/* Small accent text */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-[#01458f] text-sm tracking-[0.3em] uppercase mb-8"
            >
              Who We Are
            </motion.p>

            {/* Magic text with blur effect */}
            <h1 className="flex flex-wrap gap-x-3 gap-y-3 mb-16">
              {heroText.map((segment, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    filter: "blur(0px)"
                  }}
                  transition={{
                    delay: index * 0.08,
                    duration: 0.8,
                    ease: [0.215, 0.610, 0.355, 1.000]
                  }}
                  className={`
                    inline-block text-3xl md:text-4xl lg:text-5xl font-light
                    ${segment.color}
                    ${segment.emphasis ? 'font-semibold' : ''}
                  `}
                >
                  {segment.text}
                </motion.span>
              ))}
            </h1>

            {/* Subtle line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 1.2, duration: 1 }}
              className="w-32 h-[2px] bg-[#01458f] mb-12 origin-left"
            />
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-[1px] h-16 bg-gray-300 relative overflow-hidden">
            <motion.div
              animate={{ y: [0, 40, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              className="absolute top-0 w-[1px] h-6 bg-[#01458f]"
            />
          </div>
        </motion.div>
      </section>

      {/* Placeholder Image Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            <div className="relative w-full aspect-[16/6] rounded-xl border border-gray-200/50 shadow-lg overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://imagedelivery.net/W93NbEGaswuledAsk5GMeA/775191b2-9e3a-4ad1-ddbc-4922cd4cf600/public"
                alt="RUS Chartered Accountants Team"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Founder's Story Section */}
      <section className="py-20 md:py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#F0F7FF]/30 to-transparent" />

        <div className="container mx-auto px-4 md:px-20 relative z-10">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
              className="space-y-16"
            >
              {/* Career Text 1 with magic effect */}
              <div className="flex flex-wrap gap-x-2.5 gap-y-2.5">
                {careerText1.map((segment, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                      filter: "blur(0px)"
                    }}
                    transition={{
                      delay: index * 0.06,
                      duration: 0.8,
                      ease: [0.215, 0.610, 0.355, 1.000]
                    }}
                    viewport={{ once: true, margin: "-50px" }}
                    className={`
                      inline-block text-2xl md:text-3xl lg:text-4xl font-light leading-relaxed
                      ${segment.color}
                      ${segment.emphasis ? 'font-semibold' : ''}
                    `}
                  >
                    {segment.text}
                  </motion.span>
                ))}
              </div>

              {/* Career Text 2 with magic effect */}
              <div className="flex flex-wrap gap-x-2.5 gap-y-2.5">
                {careerText2.map((segment, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                      filter: "blur(0px)"
                    }}
                    transition={{
                      delay: index * 0.06,
                      duration: 0.8,
                      ease: [0.215, 0.610, 0.355, 1.000]
                    }}
                    viewport={{ once: true, margin: "-50px" }}
                    className={`
                      inline-block text-2xl md:text-3xl lg:text-4xl font-light leading-relaxed
                      ${segment.color}
                      ${segment.emphasis ? 'font-semibold' : ''}
                    `}
                  >
                    {segment.text}
                  </motion.span>
                ))}
              </div>

              {/* Career Text 3 with magic effect */}
              <div className="flex flex-wrap gap-x-2.5 gap-y-2.5">
                {careerText3.map((segment, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                      filter: "blur(0px)"
                    }}
                    transition={{
                      delay: index * 0.06,
                      duration: 0.8,
                      ease: [0.215, 0.610, 0.355, 1.000]
                    }}
                    viewport={{ once: true, margin: "-50px" }}
                    className={`
                      inline-block text-2xl md:text-3xl lg:text-4xl font-light leading-relaxed
                      ${segment.color}
                      ${segment.emphasis ? 'font-semibold' : ''}
                    `}
                  >
                    {segment.text}
                  </motion.span>
                ))}
              </div>

              {/* Highlighted quote section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
                className="my-16 py-10 px-8 md:px-12 bg-[#01458f]/5 border-l-4 border-[#01458f] rounded-r-lg"
              >
                <p className="text-gray-800 leading-relaxed text-2xl md:text-3xl font-light italic">
                  RUS Chartered Accountants, as a firm, is, in many ways, a reflection of that journey. Our success story is built on dedication, resilience, and a commitment to doing things properly—qualities that now form the blueprint we use to support our clients.
                </p>
              </motion.div>

              {/* Remaining paragraphs */}
              <div className="space-y-8">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  viewport={{ once: true }}
                  className="text-gray-700 leading-relaxed text-xl md:text-2xl font-light"
                >
                  We understand the obstacles businesses face because we've overcome many of them ourselves. That experience allows us to guide clients with clarity, confidence, and practical solutions that create meaningful results.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  viewport={{ once: true }}
                  className="text-gray-700 leading-relaxed text-xl md:text-2xl font-light"
                >
                  Today, our substantial team—including a group of qualified accountants—brings together specialist knowledge, sector expertise, and a modern, digital approach that ensures our clients remain fully supported in an ever-changing financial landscape. We are proud to be a trusted partner to businesses and individuals across the UK, helping them make informed decisions and achieve sustainable growth.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  viewport={{ once: true }}
                  className="mt-12 pt-10 border-t-2 border-[#01458f]/20"
                >
                  <p className="text-gray-800 leading-relaxed text-xl md:text-2xl font-medium">
                    Thank you for taking the time to learn more about us. I hope my story inspires confidence in the support and guidance RUS Chartered Accountants can offer you on your own financial journey.
                  </p>

                  {/* Signature Section */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    viewport={{ once: true }}
                    className="mt-12 flex flex-col items-start"
                  >
                    <div className={`${dancingScript.className} text-5xl md:text-6xl text-[#01458f] mb-2`}>
                      Raza Samar
                    </div>
                    <div className="text-sm md:text-base text-gray-600 font-medium tracking-wide">
                      BA(Hons) MBA BFP FCA
                    </div>
                    <div className="text-sm text-gray-500 mt-1 italic">
                      Founder & Managing Partner
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose RUS - Same as Home Page */}
      <section className="py-24 px-4 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light italic text-gray-900 mb-3 tracking-tight">
              Why Choose RUS Chartered Accountants
            </h2>
            <p className="text-base text-gray-600 max-w-2xl mx-auto">
              Personal service from accountants who truly understand UK businesses - we know your business by name, not by number
            </p>
          </div>

          {/* 4 Cards Inline */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {/* Card 1 - Tailored Service */}
            <div className="relative flex flex-col items-center justify-center text-center p-4 md:p-8 rounded-xl border border-gray-200/50 bg-[#BBDEFB] transition-all duration-200 hover:shadow-lg hover:border-[#01458f]/30 min-h-[280px] md:min-h-[320px]">
              {/* Icon - Large and Centered */}
              <div className="mb-4 md:mb-8 text-[#01458f]">
                <svg className="w-16 h-16 md:w-20 md:h-20" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
                </svg>
              </div>

              {/* Title */}
              <h3 className="text-xs md:text-sm font-bold text-gray-900 mb-2 tracking-wide uppercase">
                TAILORED SERVICE
              </h3>

              {/* Description */}
              <p className="text-xs text-gray-700 leading-relaxed">
                Personalised solutions to meet your unique needs
              </p>
            </div>

            {/* Card 2 - Transparent Fees */}
            <div className="relative flex flex-col items-center justify-center text-center p-4 md:p-8 rounded-xl border border-gray-200/50 bg-[#BBDEFB] transition-all duration-200 hover:shadow-lg hover:border-[#01458f]/30 min-h-[280px] md:min-h-[320px]">
              {/* Icon - Large and Centered */}
              <div className="mb-4 md:mb-8 text-[#01458f]">
                <svg className="w-16 h-16 md:w-20 md:h-20" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>

              {/* Title */}
              <h3 className="text-xs md:text-sm font-bold text-gray-900 mb-2 tracking-wide uppercase">
                TRANSPARENT FEES
              </h3>

              {/* Description */}
              <p className="text-xs text-gray-700 leading-relaxed">
                Clear fee structure with no hidden costs
              </p>
            </div>

            {/* Card 3 - Expert Guidance */}
            <div className="relative flex flex-col items-center justify-center text-center p-4 md:p-8 rounded-xl border border-gray-200/50 bg-[#BBDEFB] transition-all duration-200 hover:shadow-lg hover:border-[#01458f]/30 min-h-[280px] md:min-h-[320px]">
              {/* Icon - Large and Centered */}
              <div className="mb-4 md:mb-8 text-[#01458f]">
                <svg className="w-16 h-16 md:w-20 md:h-20" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                </svg>
              </div>

              {/* Title */}
              <h3 className="text-xs md:text-sm font-bold text-gray-900 mb-2 tracking-wide uppercase">
                EXPERT GUIDANCE
              </h3>

              {/* Description */}
              <p className="text-xs text-gray-700 leading-relaxed">
                Precise up-to-date advice and planning
              </p>
            </div>

            {/* Card 4 - Future Ready */}
            <div className="relative flex flex-col items-center justify-center text-center p-4 md:p-8 rounded-xl border border-gray-200/50 bg-[#BBDEFB] transition-all duration-200 hover:shadow-lg hover:border-[#01458f]/30 min-h-[280px] md:min-h-[320px]">
              {/* Icon - Large and Centered */}
              <div className="mb-4 md:mb-8 text-[#01458f]">
                <svg className="w-16 h-16 md:w-20 md:h-20" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                </svg>
              </div>

              {/* Title */}
              <h3 className="text-xs md:text-sm font-bold text-gray-900 mb-2 tracking-wide uppercase">
                FUTURE READY
              </h3>

              {/* Description */}
              <p className="text-xs text-gray-700 leading-relaxed">
                Embracing innovative technology and forward-thinking strategies
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Team Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-20">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4">
                Meet <span className="font-semibold text-[#01458f]">Our Team</span>
              </h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Qualified professionals dedicated to your success
              </p>
            </motion.div>

            {/* Team Cards Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {/* Raza Samar */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.8 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden flex flex-col items-center justify-center text-center p-6 rounded-xl border border-gray-200 bg-white transition-all duration-200 hover:shadow-sm aspect-square"
              >
                {/* Background Image - Fades in on Hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-300 pointer-events-none bg-cover bg-center"
                  style={{ backgroundImage: 'url(https://imagedelivery.net/W93NbEGaswuledAsk5GMeA/5ee11fdf-aac0-4c26-0f5e-026a2df87900/public)' }}
                />

                <motion.div
                  className="relative z-10 text-gray-700 group-hover:text-[#01458f] mb-3 transition-colors duration-200"
                  whileHover={{ scale: 1.05, y: -2 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </motion.div>
                <h3 className="relative z-10 text-sm font-semibold text-gray-900 mb-1 leading-tight">
                  Raza Samar
                </h3>
                <p className="relative z-10 text-xs text-[#01458f] font-medium mb-2">
                  BA(Hons) MBA BFP FCA
                </p>
                <p className="relative z-10 text-xs text-gray-600 group-hover:text-gray-700 leading-snug transition-colors duration-200">
                  Founder & Managing Partner
                </p>
              </motion.div>

              {/* Team Member 2 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden flex flex-col items-center justify-center text-center p-6 rounded-xl border border-gray-200 bg-white transition-all duration-200 hover:shadow-sm aspect-square"
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-300 pointer-events-none bg-cover bg-center"
                  style={{ backgroundImage: 'url(https://imagedelivery.net/W93NbEGaswuledAsk5GMeA/5ee11fdf-aac0-4c26-0f5e-026a2df87900/public)' }}
                />
                <motion.div
                  className="relative z-10 text-gray-700 group-hover:text-[#01458f] mb-3 transition-colors duration-200"
                  whileHover={{ scale: 1.05, y: -2 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </motion.div>
                <h3 className="relative z-10 text-sm font-semibold text-gray-900 mb-1 leading-tight">
                  Senior Partner
                </h3>
                <p className="relative z-10 text-xs text-[#01458f] font-medium mb-2">
                  FCA ACCA
                </p>
                <p className="relative z-10 text-xs text-gray-600 group-hover:text-gray-700 leading-snug transition-colors duration-200">
                  Tax & Audit Specialist
                </p>
              </motion.div>

              {/* Team Member 3 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden flex flex-col items-center justify-center text-center p-6 rounded-xl border border-gray-200 bg-white transition-all duration-200 hover:shadow-sm aspect-square"
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-300 pointer-events-none bg-cover bg-center"
                  style={{ backgroundImage: 'url(https://imagedelivery.net/W93NbEGaswuledAsk5GMeA/5ee11fdf-aac0-4c26-0f5e-026a2df87900/public)' }}
                />
                <motion.div
                  className="relative z-10 text-gray-700 group-hover:text-[#01458f] mb-3 transition-colors duration-200"
                  whileHover={{ scale: 1.05, y: -2 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </motion.div>
                <h3 className="relative z-10 text-sm font-semibold text-gray-900 mb-1 leading-tight">
                  Client Manager
                </h3>
                <p className="relative z-10 text-xs text-[#01458f] font-medium mb-2">
                  ACA CTA
                </p>
                <p className="relative z-10 text-xs text-gray-600 group-hover:text-gray-700 leading-snug transition-colors duration-200">
                  Client Relations & Advisory
                </p>
              </motion.div>

              {/* Team Member 4 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden flex flex-col items-center justify-center text-center p-6 rounded-xl border border-gray-200 bg-white transition-all duration-200 hover:shadow-sm aspect-square"
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-300 pointer-events-none bg-cover bg-center"
                  style={{ backgroundImage: 'url(https://imagedelivery.net/W93NbEGaswuledAsk5GMeA/5ee11fdf-aac0-4c26-0f5e-026a2df87900/public)' }}
                />
                <motion.div
                  className="relative z-10 text-gray-700 group-hover:text-[#01458f] mb-3 transition-colors duration-200"
                  whileHover={{ scale: 1.05, y: -2 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </motion.div>
                <h3 className="relative z-10 text-sm font-semibold text-gray-900 mb-1 leading-tight">
                  Accountant
                </h3>
                <p className="relative z-10 text-xs text-[#01458f] font-medium mb-2">
                  ACCA
                </p>
                <p className="relative z-10 text-xs text-gray-600 group-hover:text-gray-700 leading-snug transition-colors duration-200">
                  Accounts & Bookkeeping
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
