import { StripeGradient } from '@/components/ui/stripe-gradient';

export function Hero() {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center px-4 pt-24 pb-16 overflow-hidden">
      {/* Stripe WebGL gradient mesh — full hero background */}
      <StripeGradient
        id="gradient-hero"
        className="absolute inset-0 w-full h-full"
        colors={['#BBDEFB', '#0052cc', '#01458f', '#F0F7FF']}
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
                className="inline-flex items-center justify-center px-8 py-2 bg-white/90 backdrop-blur-sm text-[#01458f] rounded-full text-sm font-medium border border-white/40 hover:bg-white hover:shadow-md transition-all duration-200 w-40"
              >
                About Us
              </a>
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
