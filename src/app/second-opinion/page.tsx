"use client";

import { useState, useRef } from "react";
import PageHero from "@/components/PageHero";
import GoBackButton from "@/components/GoBackButton";

const PHONE = "424-424-1579";

export default function SecondOpinionPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    description: "",
  });
  const [file, setFile] = useState<File | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      // Allow images and PDFs up to 10MB
      if (selectedFile.size > 10 * 1024 * 1024) {
        alert("File size must be under 10MB");
        return;
      }
      const allowedTypes = ["image/jpeg", "image/png", "image/webp", "application/pdf"];
      if (!allowedTypes.includes(selectedFile.type)) {
        alert("Please upload a JPG, PNG, WebP image or PDF file");
        return;
      }
      setFile(selectedFile);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Create FormData for submission
    const submitData = new FormData();
    submitData.append("name", formData.name);
    submitData.append("phone", formData.phone);
    submitData.append("description", formData.description);
    submitData.append("type", "second-opinion");
    if (file) {
      submitData.append("estimate", file);
    }

    // In production, this would send to an API endpoint
    // For now, log the submission
    console.log("Second Opinion Form submitted:", {
      ...formData,
      file: file?.name,
    });

    // TODO: Send to API endpoint for email delivery
    // Example: await fetch('/api/second-opinion', { method: 'POST', body: submitData });

    setIsSubmitting(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <>
        <PageHero
          title="Second Opinion on Estimate"
          subtitle="Get an honest assessment of your existing quote from another company"
        />
        <section className="section-padding">
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
                We've received your estimate for review. One of our technicians will review it and get back to you by call or text within 24 hours.
              </p>
              <p className="text-gray-600 mb-8">
                For immediate assistance, call us at:
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
      </>
    );
  }

  return (
    <>
      <PageHero
        title="Second Opinion on Estimate"
        subtitle="Get an honest assessment of your existing quote from another company"
      />

      <section className="section-padding">
        <div className="container-custom">
          <GoBackButton />

          <div className="max-w-3xl mx-auto">
            <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-r-lg mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-2">
                Already have a quote from another company?
              </h2>
              <p className="text-gray-700">
                Upload it and we'll give you a free second opinion. We'll review the scope of work and pricing, then reach out to discuss whether the quote seems fair and what we might do differently.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
              <div className="space-y-6">
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
                  <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                    Describe the project and what the quote covers
                  </label>
                  <textarea
                    id="description"
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Tell us about the work that was quoted, your concerns, or any questions you have about the estimate..."
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Upload Competitor Estimate (Photo or PDF)
                  </label>
                  <div
                    className={`border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-colors ${
                      file ? "border-green-500 bg-green-50" : "border-gray-300 hover:border-blue-500"
                    }`}
                    onClick={() => fileInputRef.current?.click()}
                  >
                    <input
                      type="file"
                      ref={fileInputRef}
                      onChange={handleFileChange}
                      accept=".jpg,.jpeg,.png,.webp,.pdf"
                      className="hidden"
                    />
                    {file ? (
                      <div className="flex items-center justify-center gap-3">
                        <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <div className="text-left">
                          <p className="font-medium text-gray-900">{file.name}</p>
                          <p className="text-sm text-gray-500">
                            {(file.size / 1024 / 1024).toFixed(2)} MB
                          </p>
                        </div>
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            setFile(null);
                            if (fileInputRef.current) {
                              fileInputRef.current.value = "";
                            }
                          }}
                          className="text-red-600 hover:text-red-800 ml-4"
                        >
                          Remove
                        </button>
                      </div>
                    ) : (
                      <>
                        <svg className="w-12 h-12 text-gray-400 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                        </svg>
                        <p className="text-gray-700 mb-1">Click to upload or drag and drop</p>
                        <p className="text-sm text-gray-500">JPG, PNG, WebP or PDF (max 10MB)</p>
                      </>
                    )}
                  </div>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-sm text-blue-800">
                    <strong>What happens next?</strong> We'll review your estimate and respond by call or text within 24 hours to discuss our findings and answer any questions.
                  </p>
                </div>
              </div>

              <div className="mt-8">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Submitting..." : "Submit for Second Opinion"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
