const PHONE = "424-424-1579";

export default function FinancingSection() {
  return (
    <section className="section-padding bg-gradient-to-br from-green-50 to-blue-50">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Financing Available for Bigger Projects
            </h2>
            <p className="text-lg text-gray-600">
              Big air duct or chimney jobs don't always fit into a single paycheck. That's why West Coast Air Duct and Chimney Services offers flexible financing options on qualifying projects, so you can get the work done now and spread payments out over time.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-10">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                What We Can Offer
              </h3>
              <p className="text-gray-600 text-sm mb-4">(depending on your approval)</p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Flexible monthly payment plans</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Promotional options like 0% interest for up to 12 months on approved credit</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">No prepayment penalties - pay off early anytime</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Fast, secure online application with a decision in minutes</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                How It Works
              </h3>
              <ol className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-blue-800 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">1</span>
                  <span className="text-gray-700">Tell us about your project (air duct cleaning, chimney work, repairs, etc.)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-blue-800 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">2</span>
                  <span className="text-gray-700">We walk you through available financing options during your estimate</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-blue-800 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">3</span>
                  <span className="text-gray-700">You pick the plan that fits your budget and we schedule the work</span>
                </li>
              </ol>
            </div>
          </div>

          <div className="bg-blue-900 text-white rounded-xl p-6 text-center">
            <p className="text-lg mb-4">
              Want to learn more about financing? Mention it when you call or check the box for "I'm interested in financing options" on our contact form.
            </p>
            <a
              href={`tel:${PHONE}`}
              className="btn-secondary inline-block text-lg py-3 px-8"
            >
              Call {PHONE}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
