"use client";

import { useState } from "react";

const faqs = [
  {
    question: "What areas do you service in Southern California?",
    answer: "We provide services throughout Los Angeles County, Orange County, Riverside County, and San Bernardino County. This includes Los Angeles, Long Beach, Santa Monica, Pasadena, Glendale, Burbank, Anaheim, Irvine, and all surrounding communities."
  },
  {
    question: "Are your technicians licensed and insured?",
    answer: "Yes, all our technicians are fully licensed and insured. We carry comprehensive liability insurance to protect you and your property during service. We've been serving Southern California since 2015 with a commitment to professional, quality work."
  },
  {
    question: "Do you offer free estimates?",
    answer: "Yes! We provide free estimates for all our services. Call us at 424-424-1579 or fill out our online form, and we'll give you a clear, upfront quote with no hidden fees or surprise charges."
  },
  {
    question: "How often should I clean my air ducts?",
    answer: "We recommend cleaning air ducts every 3-5 years for most homes. However, you may need more frequent cleaning if you have pets, allergies, smokers in the home, recent renovations, or notice excessive dust or musty odors."
  },
  {
    question: "How do I know if my dryer vent needs cleaning?",
    answer: "Warning signs include: clothes taking longer than one cycle to dry, the dryer feeling very hot, a burning smell when running, excessive lint around the dryer, and the vent hood flap not opening properly. We recommend annual dryer vent cleaning for fire prevention."
  },
  {
    question: "Do you offer same-day or emergency service?",
    answer: "Yes, we offer same-day appointments when available and 24/7 emergency service for urgent situations like chimney fires or safety concerns. Call 424-424-1579 to check availability."
  },
  {
    question: "What is your workmanship guarantee?",
    answer: "We stand behind our work with a 30-day workmanship guarantee. If you're not satisfied with our service, we'll come back and make it right at no additional charge."
  },
  {
    question: "Do you provide before and after photos?",
    answer: "Yes, we document every job with time-stamped before and after photos showing the condition of your ducts, vents, or chimney. This ensures transparency and lets you see exactly what we cleaned and the results achieved."
  },
  {
    question: "Do you work with both residential and commercial properties?",
    answer: "Yes, we serve both residential homes and commercial businesses across Southern California. Our team has experience with all types and sizes of HVAC systems and chimneys."
  },
  {
    question: "How much does air duct cleaning cost?",
    answer: "Most single-system homes in Southern California pay $300-$700 for a complete HVAC duct cleaning, depending on home size, vent count, and duct condition. We provide detailed quotes upfront with no hidden fees. Call for a free estimate."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Air Duct & Chimney FAQs
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Got questions? We've got answers. Here are the most common questions we receive from customers.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border-b border-gray-200">
              <button
                className="w-full py-5 flex items-center justify-between text-left"
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              >
                <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                <svg
                  className={`w-5 h-5 text-gray-500 flex-shrink-0 transition-transform ${
                    openIndex === idx ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === idx && (
                <div className="pb-5 text-gray-600">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
