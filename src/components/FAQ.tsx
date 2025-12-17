"use client";

import { useState } from "react";

const faqs = [
  {
    question: "How often should I clean my air ducts?",
    answer: "We recommend cleaning your air ducts every 3-5 years. However, you may need more frequent cleaning if you have pets, allergies, recent home renovations, or notice excessive dust in your home."
  },
  {
    question: "How do I know if my dryer vent is clogged?",
    answer: "Signs of a clogged dryer vent include: clothes taking longer than one cycle to dry, the dryer feeling very hot to the touch, a burning smell when the dryer runs, excessive lint around the dryer, and the vent hood flap not opening properly."
  },
  {
    question: "Do you service all of Los Angeles County?",
    answer: "Yes! We provide services throughout Los Angeles County, including Los Angeles, Long Beach, Santa Monica, Pasadena, Glendale, Burbank, and all surrounding areas. We also serve Orange, Riverside, and San Bernardino Counties."
  },
  {
    question: "Do you offer chimney cleaning and inspection in one visit?",
    answer: "Yes, we can perform both chimney cleaning and inspection in a single visit. In fact, we always inspect the chimney before cleaning to identify any issues that need attention."
  },
  {
    question: "How long does a typical air duct cleaning take?",
    answer: "A typical residential air duct cleaning takes 2-4 hours, depending on the size of your home and the condition of your ductwork. Larger homes or heavily contaminated systems may take longer."
  },
  {
    question: "Are your technicians licensed and insured?",
    answer: "Yes, all our technicians are fully licensed and insured. We carry comprehensive liability insurance to protect you and your property during our service."
  },
  {
    question: "Do you offer free estimates?",
    answer: "Yes! We provide free estimates for all our services. Call us at 424-424-1579 or fill out our online form, and we'll give you a clear, upfront quote with no hidden fees."
  },
  {
    question: "What is creosote and why is it dangerous?",
    answer: "Creosote is a tar-like substance that builds up inside your chimney when you burn wood. It's highly flammable and is the leading cause of chimney fires. Regular chimney cleaning removes creosote buildup to keep your home safe."
  },
  {
    question: "Can dirty air ducts affect my health?",
    answer: "Yes, dirty air ducts can circulate dust, allergens, mold spores, and other contaminants throughout your home. This can aggravate allergies, asthma, and other respiratory conditions. Clean ducts mean cleaner, healthier air."
  },
  {
    question: "Do you work with both residential and commercial properties?",
    answer: "Yes, we serve both residential homes and commercial businesses across Southern California. Our team has experience with all types and sizes of HVAC systems and chimneys."
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
