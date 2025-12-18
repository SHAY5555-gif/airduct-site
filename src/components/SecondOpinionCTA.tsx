import Link from "next/link";

export default function SecondOpinionCTA() {
  return (
    <section className="section-padding bg-orange-50">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Already Have a Quote? Get a Free Second Opinion
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Already have a quote from another company? Upload it and we'll give you a free second opinion. We'll review your estimate and let you know if the scope and pricing looks fair.
          </p>
          <Link
            href="/second-opinion"
            className="btn-secondary inline-block text-lg py-4 px-8"
          >
            Get a Second Opinion
          </Link>
        </div>
      </div>
    </section>
  );
}
