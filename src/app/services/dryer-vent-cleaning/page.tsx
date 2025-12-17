import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

const PHONE = "424-424-1579";

export const metadata: Metadata = {
  title: "Dryer Vent Cleaning | West Coast Air Duct and Chimney Services",
  description: "Professional dryer vent cleaning in Southern California. Prevent fires, reduce drying time, and save energy. Same-day service. Call 424-424-1579.",
};

export default function DryerVentCleaningPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white pt-20 pb-16">
        <div className="container-custom">
          <div className="max-w-3xl">
            <Link href="/#services" className="text-blue-300 hover:text-white mb-6 inline-flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Services
            </Link>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Dryer Vent Cleaning Services
            </h1>
            <p className="text-xl text-blue-100 mb-6">
              Prevent dryer fires and improve efficiency with professional dryer vent cleaning.
            </p>
            <a href={`tel:${PHONE}`} className="btn-secondary inline-block text-lg py-4 px-8">
              Call {PHONE} for Free Estimate
            </a>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-xl mb-12">
            <div className="flex items-start gap-4">
              <svg className="w-8 h-8 text-red-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              <div>
                <h3 className="text-lg font-bold text-red-800 mb-2">Fire Safety Warning</h3>
                <p className="text-red-700">
                  According to the U.S. Fire Administration, clothes dryers cause an estimated 2,900 home fires each year. The leading cause? Failure to clean the dryer vent. Don't become a statistic.
                </p>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Clean Your Dryer Vent?</h2>
              <p className="text-gray-600 mb-4">
                Every time you run your dryer, lint escapes the lint trap and accumulates in your dryer vent. Over time, this buildup restricts airflow, causing your dryer to work harder and creating a serious fire hazard.
              </p>
              <p className="text-gray-600 mb-4">
                Our professional dryer vent cleaning service removes all lint, debris, and blockages from your vent, from the dryer to the outside exhaust. This keeps your home safe and your dryer running efficiently.
              </p>
              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Signs Your Dryer Vent Needs Cleaning:</h3>
              <ul className="space-y-3">
                {[
                  "Clothes take longer than one cycle to dry",
                  "Dryer gets very hot during operation",
                  "Burning smell when dryer is running",
                  "Excessive lint around the dryer",
                  "Vent hood flap doesn't open when dryer runs",
                  "It's been over a year since last cleaning"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-6">
              <div className="relative h-64 rounded-xl overflow-hidden">
                <Image
                  src="/images/dryer-vent-lint.png"
                  alt="Lint buildup in dryer vent"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-64 rounded-xl overflow-hidden">
                <Image
                  src="/images/dryer-vent-before-after.png"
                  alt="Before and after dryer vent cleaning"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Benefits of Dryer Vent Cleaning</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center bg-white p-8 rounded-xl shadow-sm">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Fire Prevention</h3>
              <p className="text-gray-600">Dramatically reduce the risk of a dryer fire in your home.</p>
            </div>
            <div className="text-center bg-white p-8 rounded-xl shadow-sm">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Faster Drying</h3>
              <p className="text-gray-600">Clothes dry in one cycle when airflow is unrestricted.</p>
            </div>
            <div className="text-center bg-white p-8 rounded-xl shadow-sm">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Energy Savings</h3>
              <p className="text-gray-600">Lower energy bills when your dryer runs efficiently.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-blue-900 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-6">Protect Your Home from Dryer Fires</h2>
          <p className="text-xl text-blue-200 mb-10 max-w-2xl mx-auto">
            Schedule professional dryer vent cleaning today. We recommend cleaning your dryer vent at least once per year.
          </p>
          <a href={`tel:${PHONE}`} className="btn-secondary inline-block text-lg py-4 px-8">
            Call {PHONE} Now
          </a>
        </div>
      </section>
    </>
  );
}
