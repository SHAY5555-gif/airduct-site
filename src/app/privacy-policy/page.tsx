import type { Metadata } from "next";

const PHONE = "424-424-1579";
const BRAND_NAME = "West Coast Air Duct and Chimney Services";
const WEBSITE_URL = "westcoastairduct.com";

export const metadata: Metadata = {
  title: `Privacy Policy | ${BRAND_NAME}`,
  description: "Privacy Policy for West Coast Air Duct and Chimney Services. Learn how we collect, use, and protect your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-12">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Privacy Policy
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
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
                <p className="text-gray-600 leading-relaxed">
                  {BRAND_NAME} ("we," "our," or "us") respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website ({WEBSITE_URL}) or use our services.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Information We Collect</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We may collect information about you in various ways, including:
                </p>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Personal Information</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  When you contact us or request a service, we may collect:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
                  <li>Name</li>
                  <li>Phone number</li>
                  <li>Email address</li>
                  <li>Service address</li>
                  <li>Service preferences and requests</li>
                </ul>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Automatically Collected Information</h3>
                <p className="text-gray-600 leading-relaxed">
                  When you visit our website, we may automatically collect certain information about your device, including your IP address, browser type, operating system, referring URLs, and information about how you interact with our website.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Use Your Information</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We use the information we collect to:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Provide, operate, and maintain our services</li>
                  <li>Respond to your inquiries and service requests</li>
                  <li>Schedule and perform services at your property</li>
                  <li>Send you service reminders and follow-up communications</li>
                  <li>Improve our website and services</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Information Sharing</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We do not sell, trade, or rent your personal information to third parties. We may share your information in the following circumstances:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li><strong>Service Providers:</strong> We may share information with third-party vendors who help us operate our business (e.g., scheduling software, payment processors)</li>
                  <li><strong>Legal Requirements:</strong> We may disclose information if required by law or in response to valid legal requests</li>
                  <li><strong>Business Transfers:</strong> In the event of a merger, sale, or transfer of assets, your information may be transferred to the acquiring entity</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Cookies and Tracking Technologies</h2>
                <p className="text-gray-600 leading-relaxed">
                  Our website may use cookies and similar tracking technologies to improve your browsing experience and analyze website traffic. You can control cookies through your browser settings. Disabling cookies may affect some features of our website.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Security</h2>
                <p className="text-gray-600 leading-relaxed">
                  We implement reasonable security measures to protect your personal information from unauthorized access, use, or disclosure. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Rights</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Depending on your location, you may have certain rights regarding your personal information, including:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>The right to access your personal information</li>
                  <li>The right to correct inaccurate information</li>
                  <li>The right to request deletion of your information</li>
                  <li>The right to opt out of marketing communications</li>
                </ul>
                <p className="text-gray-600 leading-relaxed mt-4">
                  To exercise any of these rights, please contact us using the information below.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">California Privacy Rights</h2>
                <p className="text-gray-600 leading-relaxed">
                  If you are a California resident, you have additional rights under the California Consumer Privacy Act (CCPA), including the right to know what personal information we collect, the right to delete your information, and the right to opt out of the sale of your personal information. We do not sell personal information.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Children's Privacy</h2>
                <p className="text-gray-600 leading-relaxed">
                  Our services are not directed to children under 13 years of age. We do not knowingly collect personal information from children under 13. If we learn we have collected personal information from a child under 13, we will delete that information.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to This Policy</h2>
                <p className="text-gray-600 leading-relaxed">
                  We may update this Privacy Policy from time to time. The updated version will be indicated by the "Last updated" date at the top of this page. We encourage you to review this Privacy Policy periodically.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
                <p className="text-gray-600 leading-relaxed">
                  If you have questions about this Privacy Policy or our privacy practices, please contact us at:
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
