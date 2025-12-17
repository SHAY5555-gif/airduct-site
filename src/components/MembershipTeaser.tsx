// Membership Teaser Section - links to full membership page
import Link from "next/link";

export default function MembershipTeaser() {
  const benefits = [
    "Annual system checkups",
    "Dryer vent cleaning",
    "Chimney safety checks (if applicable)",
    "Priority scheduling",
    "Member discounts on cleaning and repairs",
  ];

  return (
    <section className="section-padding bg-blue-900 text-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Clean Air & Safety Membership
              </h2>
              <p className="text-blue-100 text-lg mb-6">
                Protect your home year-round with our comprehensive membership program.
                Members enjoy annual checkups, priority service, and exclusive discounts.
              </p>
              <ul className="space-y-3 mb-8">
                {benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/membership"
                className="btn-secondary inline-block"
              >
                Want to become a member? Learn more
              </Link>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Year-Round Protection</h3>
                <p className="text-blue-100 text-sm">
                  Keep your home's air quality systems in top condition with regular professional maintenance and priority support when you need it.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
