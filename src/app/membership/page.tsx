import Link from "next/link";
import type { Metadata } from "next";
import { BreadcrumbSchema } from "@/components/JsonLd";

const PHONE = "424-424-1579";
const BRAND_NAME = "West Coast Air Duct and Chimney Services";

export const metadata: Metadata = {
  title: `Clean Air & Safety Membership | ${BRAND_NAME}`,
  description: "Join our membership program for priority scheduling, exclusive discounts, annual inspections, and peace of mind. Call 424-424-1579 to learn more.",
};

const benefits = [
  {
    title: "Priority Scheduling",
    description: "Members get moved to the front of the line for appointments, including same-day and emergency service requests.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Exclusive Discounts",
    description: "Enjoy special member-only pricing on all services, repairs, and additional work. Savings add up fast!",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Annual Inspection Included",
    description: "Your membership includes a comprehensive annual inspection of your air ducts and/or chimney system.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "No Emergency Service Fees",
    description: "Members never pay extra for emergency or after-hours service calls. Your rate stays the same, 24/7.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
      </svg>
    ),
  },
  {
    title: "Maintenance Reminders",
    description: "We'll remind you when it's time for service, so you never have to worry about forgetting important maintenance.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
      </svg>
    ),
  },
  {
    title: "Transferable Membership",
    description: "Moving? Your membership can be transferred to the new homeowner, adding value when you sell your home.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
];

const faqs = [
  {
    question: "How do I sign up for membership?",
    answer: "Simply call us at 424-424-1579 and let us know you're interested in our Clean Air & Safety Membership. We'll walk you through the options and get you signed up right away.",
  },
  {
    question: "Can I use my membership benefits right away?",
    answer: "Yes! Your membership benefits are active immediately upon enrollment. You can schedule your annual inspection and start enjoying priority scheduling right away.",
  },
  {
    question: "What's included in the annual inspection?",
    answer: "Your annual inspection includes a thorough examination of your air duct system or chimney (depending on your membership tier). We'll check for damage, buildup, efficiency issues, and safety concerns, then provide you with a detailed report.",
  },
  {
    question: "Can I cancel my membership?",
    answer: "Yes, you can cancel your membership at any time. We don't believe in locking customers into contracts they don't want. However, most members find the savings and peace of mind well worth it!",
  },
  {
    question: "Is there a contract or commitment?",
    answer: "Our membership is billed annually with no long-term contract required. You can renew or cancel at the end of each membership year.",
  },
];

export default function MembershipPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: "Membership", url: "/membership" }
      ]} />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-16">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Clean Air & Safety Membership
            </h1>
            <p className="text-xl text-blue-100 mb-6">
              Join our membership program for priority service, exclusive discounts, annual inspections, and complete peace of mind.
            </p>
            <a href={`tel:${PHONE}`} className="btn-secondary inline-block text-lg py-4 px-8">
              Call {PHONE} to Join Today
            </a>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Member Benefits
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our membership program is designed to give you priority access, savings, and peace of mind. Here's what you get as a member:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center text-blue-800 mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Getting started with our membership program is simple.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-800 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  1
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Call Us</h3>
                <p className="text-gray-600 text-sm">
                  Give us a call at {PHONE} and tell us you're interested in membership.
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-800 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  2
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Choose Your Plan</h3>
                <p className="text-gray-600 text-sm">
                  We'll explain the membership options and help you choose the best fit.
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-800 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  3
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Start Saving</h3>
                <p className="text-gray-600 text-sm">
                  Enjoy immediate access to all member benefits and schedule your first inspection.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who Benefits */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Who Benefits from Membership?
              </h2>
              <p className="text-gray-600 mb-6">
                Our membership program is perfect for homeowners who want to:
              </p>
              <ul className="space-y-4">
                {[
                  "Stay on top of regular maintenance without the hassle",
                  "Save money on services throughout the year",
                  "Get priority access when they need urgent help",
                  "Protect their home and family with regular inspections",
                  "Avoid unexpected repair costs with preventive care"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-blue-50 p-8 rounded-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Ready to Join?</h3>
              <p className="text-gray-600 mb-6">
                Call us today to learn more about membership options and pricing. Our team will help you choose the plan that's right for your home.
              </p>
              <a href={`tel:${PHONE}`} className="btn-primary w-full text-center block">
                Call {PHONE}
              </a>
              <p className="text-gray-500 text-sm text-center mt-4">
                Or <Link href="/#contact" className="text-blue-800 hover:underline">request a callback</Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div key={idx} className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="font-bold text-gray-900 mb-2">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-blue-900 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">Join the Clean Air & Safety Family</h2>
          <p className="text-xl text-blue-200 mb-8 max-w-2xl mx-auto">
            Get priority service, exclusive savings, and peace of mind. Call today to learn more about membership.
          </p>
          <a href={`tel:${PHONE}`} className="btn-secondary inline-block text-lg py-4 px-8">
            Call {PHONE} to Join
          </a>
        </div>
      </section>
    </>
  );
}
