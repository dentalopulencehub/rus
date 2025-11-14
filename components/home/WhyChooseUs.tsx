import Image from 'next/image';

type Benefit = {
  title: string;
  description: string;
  iconType: 'image';
  iconSrc: string;
};

const benefits: Benefit[] = [
  {
    title: 'TAILORED SERVICE',
    description: 'Personalised solutions to meet your unique needs',
    iconType: 'image',
    iconSrc: '/jewelry.png',
  },
  {
    title: 'TRANSPARENT FEES',
    description: 'Clear fee structure with no hidden costs',
    iconType: 'image',
    iconSrc: '/information.png',
  },
  {
    title: 'EXPERT GUIDANCE',
    description: 'Precise up-to-date advice and planning',
    iconType: 'image',
    iconSrc: '/security.png',
  },
  {
    title: 'FUTURE READY',
    description: 'Making financial management quicker, easier and more accurate',
    iconType: 'image',
    iconSrc: '/community-outreach.png',
  },
];

export function WhyChooseUs() {
  return (
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
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center justify-center text-center p-4 md:p-8 rounded-xl border border-gray-200/50 bg-[#BBDEFB] transition-all duration-200 hover:shadow-lg hover:border-[#01458f]/30 min-h-[280px] md:min-h-[320px]"
            >
              {/* Icon - Large and Centered */}
              <div className="mb-4 md:mb-8">
                <Image
                  src={benefit.iconSrc}
                  alt={benefit.title}
                  width={96}
                  height={96}
                  className="w-16 h-16 md:w-24 md:h-24 object-contain"
                />
              </div>

              {/* Title */}
              <h3 className="text-xs md:text-sm font-bold text-gray-900 mb-2 tracking-wide uppercase">
                {benefit.title}
              </h3>

              {/* Description */}
              <p className="text-xs text-gray-700 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
