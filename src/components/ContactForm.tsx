"use client";

import { useState } from "react";

const PHONE = "424-424-1579";
const FORMSPREE_ENDPOINT = "https://formspree.io/f/xwvkyllj";

const services = [
  "Air Duct Cleaning",
  "Duct Repair",
  "Dryer Vent Cleaning",
  "System Inspections",
  "Chimney Installation",
  "Chimney Repairs",
  "Chimney Cleaning",
  "Other"
];

const counties = [
  "Los Angeles County",
  "Orange County",
  "Riverside County",
  "San Bernardino County"
];

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    county: "",
    service: "",
    message: "",
    contactPreference: "call",
    interestedInFinancing: false
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");

    try {
      const submissionData: Record<string, string> = {
        name: formData.name,
        phone: formData.phone,
        county: formData.county,
        service: formData.service,
        message: formData.message || "No additional message",
        contactPreference: formData.contactPreference,
        interestedInFinancing: formData.interestedInFinancing ? "Yes" : "No"
      };

      if (formData.email) {
        submissionData.email = formData.email;
      }

      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(submissionData)
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        const data = await response.json();
        setError(data.error || "Something went wrong. Please try again.");
      }
    } catch {
      setError("Failed to submit form. Please try again or call us directly.");
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <section className="section-padding bg-gray-50" id="contact">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Thank You!
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              We've received your request and will get back to you shortly. For immediate assistance, call us at:
            </p>
            <a
              href={`tel:${PHONE}`}
              className="text-3xl font-bold text-blue-800 hover:text-blue-600"
            >
              {PHONE}
            </a>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="section-padding bg-gray-50" id="contact">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Request Air Duct or Chimney Service
            </h2>
            <p className="text-lg text-gray-600">
              Tell us what you need, and we'll get back to you quickly. Or call us now at{" "}
              <a href={`tel:${PHONE}`} className="text-blue-800 font-semibold hover:underline">
                {PHONE}
              </a>
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone *
                </label>
                <input
                  type="tel"
                  id="phone"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email (optional)
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div>
                <label htmlFor="county" className="block text-sm font-medium text-gray-700 mb-2">
                  County *
                </label>
                <select
                  id="county"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={formData.county}
                  onChange={(e) => setFormData({ ...formData, county: e.target.value })}
                >
                  <option value="">Select your county</option>
                  {counties.map((county) => (
                    <option key={county} value={county}>{county}</option>
                  ))}
                </select>
              </div>

              <div className="md:col-span-2">
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                  Service Needed *
                </label>
                <select
                  id="service"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                >
                  <option value="">Select a service</option>
                  {services.map((service) => (
                    <option key={service} value={service}>{service}</option>
                  ))}
                </select>
              </div>

              <div className="md:col-span-2">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  What's going on with your system?
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Describe your situation or any specific concerns..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Contact Preference
                </label>
                <div className="flex gap-4">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="contactPreference"
                      value="call"
                      checked={formData.contactPreference === "call"}
                      onChange={(e) => setFormData({ ...formData, contactPreference: e.target.value })}
                      className="w-4 h-4 text-blue-800"
                    />
                    <span className="text-gray-700">I prefer a call</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="contactPreference"
                      value="text"
                      checked={formData.contactPreference === "text"}
                      onChange={(e) => setFormData({ ...formData, contactPreference: e.target.value })}
                      className="w-4 h-4 text-blue-800"
                    />
                    <span className="text-gray-700">I prefer a text</span>
                  </label>
                </div>
              </div>

              <div className="md:col-span-2">
                <label className="flex items-center gap-3 cursor-pointer bg-green-50 p-4 rounded-lg border border-green-200 hover:bg-green-100 transition-colors">
                  <input
                    type="checkbox"
                    checked={formData.interestedInFinancing}
                    onChange={(e) => setFormData({ ...formData, interestedInFinancing: e.target.checked })}
                    className="w-5 h-5 text-green-600 rounded border-gray-300 focus:ring-green-500"
                  />
                  <div>
                    <span className="text-gray-900 font-medium">I'm interested in financing options</span>
                    <p className="text-sm text-gray-600 mt-0.5">We offer flexible payment plans for qualifying projects</p>
                  </div>
                </label>
              </div>
            </div>

            {error && (
              <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
                {error}
              </div>
            )}

            <div className="mt-8">
              <button
                type="submit"
                disabled={submitting}
                className="w-full btn-primary text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {submitting ? "Sending..." : "Request Service"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
