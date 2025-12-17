// Financing Section - with placeholder finance partner logos

export default function Financing() {
  // Placeholder financing partner logos
  const financingPartners = [
    { name: "FinanceCo 1", placeholder: "FC1" },
    { name: "FinanceCo 2", placeholder: "FC2" },
    { name: "FinanceCo 3", placeholder: "FC3" },
    { name: "FinanceCo 4", placeholder: "FC4" },
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-blue-50 to-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Financing Available
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            We understand that air duct cleaning packages, chimney repairs, and installations can be a significant investment.
            That's why we offer flexible financing options to help you get the services you need without straining your budget.
          </p>

          {/* Placeholder financing partner logos */}
          <div className="flex flex-wrap justify-center items-center gap-6 mb-8">
            {financingPartners.map((partner) => (
              <div
                key={partner.name}
                className="w-32 h-16 bg-gray-100 rounded-lg flex items-center justify-center border border-gray-200"
                title={partner.name}
              >
                <span className="text-gray-400 font-medium text-sm">
                  {partner.placeholder}
                </span>
              </div>
            ))}
          </div>

          <p className="text-sm text-gray-500 mb-6">
            Ask about our financing partners when you call for your estimate.
          </p>

          <a
            href="#contact"
            className="btn-primary inline-block"
          >
            Learn about financing options
          </a>
        </div>
      </div>
    </section>
  );
}
