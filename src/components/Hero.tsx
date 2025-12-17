import Image from "next/image";

const PHONE = "424-424-1579";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-blue-900 to-blue-800 text-white">
      <div className="absolute inset-0 opacity-20">
        <Image
          src="/images/family-clean-air.png"
          alt="Family enjoying clean air in their home"
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="relative container-custom py-12 md:py-20">
        <div className="max-w-3xl">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
            Air Duct & Chimney Services in Los Angeles, Orange, Riverside & San Bernardino Counties
          </h1>
          <p className="text-lg md:text-xl text-blue-100 mb-6">
            Professional air duct cleaning, duct repairs, dryer vent cleaning, and chimney services for safer, cleaner air in your home.
          </p>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-6 inline-block">
            <p className="text-blue-200 text-sm mb-1">Call now for a free estimate</p>
            <a
              href={`tel:${PHONE}`}
              className="text-3xl md:text-4xl font-bold text-white hover:text-orange-300 transition-colors"
            >
              {PHONE}
            </a>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <a
              href={`tel:${PHONE}`}
              className="btn-secondary text-center text-lg py-4 px-8"
            >
              Call Now
            </a>
            <a
              href="#contact"
              className="bg-white text-blue-800 font-semibold py-4 px-8 rounded-lg text-center hover:bg-gray-100 transition-colors"
            >
              Request Service Online
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-sm">Fully Licensed & Insured</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-sm">Serving 4 SoCal Counties</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-sm">Honest Up-Front Pricing</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-sm">Residential & Commercial</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
