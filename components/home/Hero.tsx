import { BorderBeam } from '@/components/ui/border-beam';

export function Hero() {
  return (
    <section className="min-h-screen w-full flex items-center justify-center bg-[#F0F7FF] px-4 pt-24 pb-16">
      <div className="max-w-5xl mx-auto w-full">
        <div className="flex flex-col items-center text-center space-y-12">
          {/* Top - Content */}
          <div className="space-y-6">
            {/* Main Title - Uppercase */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight tracking-tight uppercase">
              Anchored in Integrity. Driven by Expertise.
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Trusted chartered accountants serving Birmingham businesses since 1995.
            </p>

            {/* CTA Buttons - Vercel Style */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-2 bg-gray-900 text-white rounded-full text-sm font-medium hover:bg-gray-800 transition-all duration-200 shadow-sm"
              >
                Get Started
              </a>
              <a
                href="/services"
                className="inline-flex items-center justify-center px-8 py-2 bg-white text-gray-900 rounded-full text-sm font-medium border border-gray-200 hover:border-gray-300 transition-all duration-200"
              >
                Our Services
              </a>
            </div>
          </div>

          {/* Bottom - Image Placeholder Banner */}
          <div className="relative w-full max-w-4xl">
            <div className="relative w-full aspect-[16/6] rounded-xl border border-gray-200/50 bg-gradient-to-br from-gray-100 to-gray-50 shadow-lg overflow-hidden">
              {/* Decorative Elements */}
              <div className="absolute top-8 right-8 w-32 h-32 bg-[#01458f]/5 rounded-full blur-3xl" />
              <div className="absolute bottom-8 left-8 w-40 h-40 bg-[#0052cc]/5 rounded-full blur-3xl" />

              {/* Grid Pattern Overlay */}
              <div
                className="absolute inset-0 opacity-[0.02]"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                  backgroundSize: '60px 60px',
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
