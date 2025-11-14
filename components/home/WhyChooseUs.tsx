import Image from 'next/image';

type Benefit = {
  title: string;
  description: string;
  iconType: 'image';
  iconSrc: string;
};

const benefits: Benefit[] = [
  {
    title: 'PERSONALIZED SERVICE',
    description: 'Tailored solutions for your unique business needs',
    iconType: 'image',
    iconSrc: '/jewelry.png',
  },
  {
    title: 'PROACTIVE ADVICE',
    description: 'Strategic guidance to grow your business',
    iconType: 'image',
    iconSrc: '/information.png',
  },
  {
    title: 'DATA SECURITY',
    description: 'Your financial data protected with highest standards',
    iconType: 'image',
    iconSrc: '/security.png',
  },
  {
    title: 'UK & GLOBAL REACH',
    description: 'Birmingham-based serving UK and international clients',
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
            Why Choose RUS Accountants
          </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            Trusted expertise, modern solutions, and dedicated service for your business
          </p>
        </div>

        {/* 4 Cards Inline */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center justify-center text-center p-8 rounded-xl border border-gray-200/50 bg-[#BBDEFB] transition-all duration-200 hover:shadow-lg hover:border-[#01458f]/30 min-h-[320px]"
            >
              {/* Icon - Large and Centered */}
              <div className="mb-8">
                <Image
                  src={benefit.iconSrc}
                  alt={benefit.title}
                  width={96}
                  height={96}
                  className="w-24 h-24 object-contain"
                />
              </div>

              {/* Title */}
              <h3 className="text-sm font-bold text-gray-900 mb-2 tracking-wide uppercase">
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
