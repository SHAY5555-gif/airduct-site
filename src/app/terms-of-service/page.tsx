import type { Metadata } from "next";
import { BreadcrumbSchema } from "@/components/JsonLd";

const PHONE = "424-424-1579";
const BRAND_NAME = "West Coast Air Duct and Chimney Services";
const WEBSITE_URL = "airductchimeny.com";

export const metadata: Metadata = {
  title: `Terms of Service | ${BRAND_NAME}`,
  description: "Terms of Service for West Coast Air Duct and Chimney Services. Read our terms and conditions for using our website and services.",
};

export default function TermsOfServicePage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: "Terms of Service", url: "/terms-of-service" }
      ]} />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-12">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Terms of Service
            </h1>
            <p className="text-blue-100">
              Last updated: December 2024
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto prose prose-gray">
            <div className="bg-white rounded-xl shadow-sm p-8 space-y-8">

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Agreement to Terms</h2>
                <p className="text-gray-600 leading-relaxed">
                  By accessing or using the website of {BRAND_NAME} ({WEBSITE_URL}) or by requesting our services, you agree to be bound by these Terms of Service. If you do not agree with these terms, please do not use our website or services.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Services</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {BRAND_NAME} provides air duct cleaning, chimney cleaning, chimney repair, dryer vent cleaning, and related services ("Services") for residential and commercial properties in Southern California.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  All services are subject to availability and our service area. We reserve the right to refuse service at our discretion.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Appointments and Scheduling</h2>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Appointments are scheduled based on availability and are not guaranteed until confirmed by our team.</li>
                  <li>You must provide accurate contact and property information when scheduling services.</li>
                  <li>You or an authorized adult (18+) must be present at the property during the service appointment.</li>
                  <li>We request at least 24 hours notice for cancellations or rescheduling. Repeated no-shows may result in cancellation fees.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Pricing and Payment</h2>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Prices quoted are estimates based on the information provided. Final pricing may vary based on actual conditions found during service.</li>
                  <li>We will inform you of any additional charges before proceeding with work that exceeds the original estimate.</li>
                  <li>Payment is due upon completion of services unless other arrangements have been made in writing.</li>
                  <li>We accept cash, checks, and major credit cards.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Warranties and Guarantees</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We stand behind our work and offer the following:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Workmanship is guaranteed for 30 days from the date of service.</li>
                  <li>If you are not satisfied with our work, contact us within 30 days and we will return to address the issue at no additional charge.</li>
                  <li>Warranties do not cover damage caused by customer misuse, neglect, or pre-existing conditions not caused by our work.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Customer Responsibilities</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  By using our services, you agree to:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Provide safe access to the work areas</li>
                  <li>Disclose any known hazards or conditions that may affect our work</li>
                  <li>Ensure pets are secured during the service appointment</li>
                  <li>Clear access paths to HVAC systems, vents, chimneys, and dryers as needed</li>
                  <li>Provide accurate information about your property and systems</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Limitation of Liability</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  To the fullest extent permitted by law:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>{BRAND_NAME} shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from the use of our services.</li>
                  <li>Our total liability for any claim arising from our services shall not exceed the amount paid for the specific service giving rise to the claim.</li>
                  <li>We are not responsible for pre-existing conditions, code violations, or damage not caused by our work.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Website Use</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  When using our website, you agree to:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Use the website only for lawful purposes</li>
                  <li>Not attempt to gain unauthorized access to any part of the website</li>
                  <li>Not use the website in any way that could damage or impair its functionality</li>
                  <li>Provide accurate information when submitting forms or requests</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Intellectual Property</h2>
                <p className="text-gray-600 leading-relaxed">
                  All content on this website, including text, graphics, logos, and images, is the property of {BRAND_NAME} or its content suppliers and is protected by copyright and other intellectual property laws. You may not reproduce, distribute, or create derivative works from this content without our express written permission.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Indemnification</h2>
                <p className="text-gray-600 leading-relaxed">
                  You agree to indemnify and hold harmless {BRAND_NAME}, its employees, contractors, and agents from any claims, damages, losses, or expenses arising from your violation of these Terms of Service or your use of our services.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Governing Law</h2>
                <p className="text-gray-600 leading-relaxed">
                  These Terms of Service shall be governed by and construed in accordance with the laws of the State of California, without regard to its conflict of law provisions. Any disputes arising from these terms shall be resolved in the courts of Los Angeles County, California.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to Terms</h2>
                <p className="text-gray-600 leading-relaxed">
                  We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting to the website. Your continued use of our website or services after any changes constitutes acceptance of the modified terms.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Severability</h2>
                <p className="text-gray-600 leading-relaxed">
                  If any provision of these Terms of Service is found to be unenforceable or invalid, that provision shall be limited or eliminated to the minimum extent necessary so that the remaining provisions remain in full force and effect.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
                <p className="text-gray-600 leading-relaxed">
                  If you have questions about these Terms of Service, please contact us at:
                </p>
                <div className="mt-4 bg-gray-50 p-4 rounded-lg">
                  <p className="font-semibold text-gray-900">{BRAND_NAME}</p>
                  <p className="text-gray-600">Phone: <a href={`tel:${PHONE}`} className="text-blue-800 hover:underline">{PHONE}</a></p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}
