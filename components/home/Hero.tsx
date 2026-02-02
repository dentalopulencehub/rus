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
          {/* Top - Title */}
          <div className="space-y-6">
            {/* Main Title - Uppercase */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight tracking-tight uppercase">
              An Anchor of Stability <br />
              in a Sea of Complexity.
            </h1>

            {/* CTA Buttons - Desktop Only */}
            <div className="hidden md:flex flex-row items-center justify-center gap-3 pt-4">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-2 bg-[#01458f]/90 backdrop-blur-xl backdrop-saturate-150 text-white rounded-full text-sm font-medium hover:bg-[#01458f] hover:shadow-lg transition-all duration-200 shadow-sm w-40 border border-white/20"
              >
                Contact Us
              </a>
              <a
                href="/who-we-are"
                className="inline-flex items-center justify-center px-8 py-2 bg-white text-[#01458f] rounded-full text-sm font-medium border border-[#01458f]/20 hover:border-[#01458f]/40 hover:shadow-md transition-all duration-200 w-40"
              >
                About Us
              </a>
            </div>
          </div>

          {/* Middle - Hero Image */}
          <div className="relative w-full max-w-4xl">
            <div className="relative w-full aspect-[16/6] rounded-xl border border-gray-200/50 shadow-lg overflow-hidden bg-white">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://imagedelivery.net/W93NbEGaswuledAsk5GMeA/49e6164c-98fc-49df-b91d-651777866100/public"
                alt="RUS Accountancy Office"
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Bottom - CTA Buttons Mobile Only (below image) */}
          <div className="flex md:hidden flex-row items-center justify-center gap-3 -mt-6">
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-2 bg-[#01458f]/90 backdrop-blur-xl backdrop-saturate-150 text-white rounded-full text-sm font-medium hover:bg-[#01458f] hover:shadow-lg transition-all duration-200 shadow-sm w-40 border border-white/20"
            >
              Contact Us
            </a>
            <a
              href="/who-we-are"
              className="inline-flex items-center justify-center px-8 py-2 bg-white text-[#01458f] rounded-full text-sm font-medium border border-[#01458f]/20 hover:border-[#01458f]/40 hover:shadow-md transition-all duration-200 w-40"
            >
              About Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
