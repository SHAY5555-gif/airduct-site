// Resources Teaser Section - links to full resources page
import Link from "next/link";

export default function ResourcesTeaser() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-blue-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Helpful Resources
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Want to learn more about air quality, dryer vent safety, and chimney care?
            We've compiled trusted resources from the EPA, NADCA, NFPA, CSIA, and more
            to help you make informed decisions about your home.
          </p>
          <Link
            href="/resources"
            className="btn-primary inline-block"
          >
            View Resources
          </Link>
        </div>
      </div>
    </section>
  );
}
