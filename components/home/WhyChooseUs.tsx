type Benefit = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

const benefits: Benefit[] = [
  {
    title: 'TAILORED SERVICE',
    description: 'Personalised solutions to meet your unique needs',
    icon: (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src="https://imagedelivery.net/W93NbEGaswuledAsk5GMeA/697dfae1-43b0-4a3d-a34a-c50b0dd61500/public"
        alt="Tailored Service"
        className="w-20 h-20 md:w-24 md:h-24"
      />
    ),
  },
  {
    title: 'TRANSPARENT FEES',
    description: 'Clear fee structure with no hidden costs',
    icon: (
      <svg className="w-20 h-20 md:w-24 md:h-24" fill="none" stroke="white" viewBox="0 0 24 24" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: 'EXPERT GUIDANCE',
    description: 'Precise up-to-date advice and planning',
    icon: (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src="https://imagedelivery.net/W93NbEGaswuledAsk5GMeA/5ba000e9-3677-4be6-8d08-4cc8b5086b00/public"
        alt="Expert Guidance"
        className="w-20 h-20 md:w-24 md:h-24"
      />
    ),
  },
  {
    title: 'FUTURE READY',
    description: 'Embracing innovative technology and forward-thinking strategies',
    icon: (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src="https://imagedelivery.net/W93NbEGaswuledAsk5GMeA/c5cea02a-0117-439d-07d1-4ca5e4d1c400/public"
        alt="Future Ready"
        className="w-20 h-20 md:w-24 md:h-24"
      />
    ),
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-24 px-4 bg-gray-100">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-3 tracking-tight">
            Why Choose RUS Chartered Accountants
          </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            Personal service from accountants who truly understand UK businesses - we know your business by name, not by number
          </p>
        </div>

        {/* 4 Cards Inline */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center justify-center text-center p-4 md:p-8 rounded-xl border border-gray-200/50 bg-[#0047AB] transition-all duration-200 hover:shadow-lg hover:border-[#01458f]/30 min-h-[280px] md:min-h-[320px]"
            >
              {/* Icon - Large and Centered */}
              <div className="mb-4 md:mb-8">
                {benefit.icon}
              </div>

              {/* Title */}
              <h3 className="text-xs md:text-sm font-bold text-white mb-2 tracking-wide uppercase">
                {benefit.title}
              </h3>

              {/* Description */}
              <p className="text-xs text-white/90 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
