import { BorderBeam } from '@/components/ui/border-beam';

export function Hero() {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center bg-[#F0F7FF] px-4 pt-24 pb-16 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 opacity-10 bg-cover bg-center"
        style={{ backgroundImage: 'url(https://imagedelivery.net/W93NbEGaswuledAsk5GMeA/5ee11fdf-aac0-4c26-0f5e-026a2df87900/public)' }}
      />

      <div className="relative z-10 max-w-5xl mx-auto w-full">
        <div className="flex flex-col items-center text-center space-y-12">
          {/* Top - Content */}
          <div className="space-y-6">
            {/* Main Title - Uppercase */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight tracking-tight uppercase">
              An Anchor of Stability <br className="hidden md:block" />
              in a Sea of Complexity.
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Est. 1995
            </p>

            {/* CTA Buttons - Vercel Style */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-2 bg-gray-900 text-white rounded-full text-sm font-medium hover:bg-gray-800 transition-all duration-200 shadow-sm w-40"
              >
                Contact Us
              </a>
              <a
                href="/services"
                className="inline-flex items-center justify-center px-8 py-2 bg-white text-gray-900 rounded-full text-sm font-medium border border-gray-200 hover:border-gray-300 transition-all duration-200 w-40"
              >
                Our Services
              </a>
            </div>
          </div>

          {/* Bottom - Hero Image */}
          <div className="relative w-full max-w-4xl">
            <div className="relative w-full aspect-[16/6] rounded-xl border border-gray-200/50 shadow-lg overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://imagedelivery.net/W93NbEGaswuledAsk5GMeA/775191b2-9e3a-4ad1-ddbc-4922cd4cf600/public"
                alt="RUS Accountancy Services"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
