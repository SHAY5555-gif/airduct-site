import Image from "next/image";

export default function WhyClean() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Clean Your Air Ducts & Chimney?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Dirty air ducts and chimneys can impact your health, safety, and energy bills. Regular maintenance protects your family and your home.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-blue-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Health & Comfort</h3>
            <p className="text-gray-600">
              Clean ducts mean fewer allergens, dust particles, and mold spores circulating in your home. Breathe easier and reduce allergy symptoms.
            </p>
          </div>

          <div className="text-center p-6">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Safety & Fire Prevention</h3>
            <p className="text-gray-600">
              Clogged dryer vents and dirty chimneys are leading causes of house fires. Regular cleaning dramatically reduces fire risk.
            </p>
          </div>

          <div className="text-center p-6">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">System Efficiency & Bills</h3>
            <p className="text-gray-600">
              Clean systems run more efficiently, lowering your energy bills. Your HVAC works less hard when air flows freely through clean ducts.
            </p>
          </div>
        </div>

        <div className="bg-gray-50 rounded-2xl p-6 md:p-8 overflow-x-auto">
          <table className="w-full min-w-[500px]">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th className="text-left py-3 px-4 font-bold text-gray-900">Problem</th>
                <th className="text-left py-3 px-4 font-bold text-gray-900">Risk</th>
                <th className="text-left py-3 px-4 font-bold text-gray-900">Our Solution</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200">
                <td className="py-4 px-4 text-gray-700">Dusty / dirty vents</td>
                <td className="py-4 px-4 text-gray-600">Allergies, bad smells, respiratory issues</td>
                <td className="py-4 px-4 text-blue-800 font-medium">Full-system air duct cleaning</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="py-4 px-4 text-gray-700">Clogged dryer vent</td>
                <td className="py-4 px-4 text-gray-600">Fire hazard, long dry times</td>
                <td className="py-4 px-4 text-blue-800 font-medium">Dryer vent cleaning & safety check</td>
              </tr>
              <tr>
                <td className="py-4 px-4 text-gray-700">Damaged chimney</td>
                <td className="py-4 px-4 text-gray-600">Smoke leaks, carbon monoxide risk</td>
                <td className="py-4 px-4 text-blue-800 font-medium">Chimney inspection, repair, cleaning</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-8 items-center">
          <div className="relative h-64 md:h-80 rounded-xl overflow-hidden">
            <Image
              src="/images/duct-before-after.png"
              alt="Before and after air duct cleaning comparison"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative h-64 md:h-80 rounded-xl overflow-hidden">
            <Image
              src="/images/chimney-flue-cleaning.png"
              alt="Before and after chimney flue cleaning"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
