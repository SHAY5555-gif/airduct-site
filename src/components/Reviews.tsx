export default function Reviews() {
  const reviews = [
    {
      name: "Jennifer M.",
      location: "Orlando, FL",
      text: "The video inspection was eye-opening! They showed me exactly what was in my ducts before and after cleaning. My allergies have improved dramatically since the service.",
      rating: 5
    },
    {
      name: "Robert K.",
      location: "Tampa, FL",
      text: "After Hurricane season our ducts were full of debris. They cleaned everything thoroughly and explained how Florida's humidity affects HVAC systems. Very knowledgeable!",
      rating: 5
    },
    {
      name: "Patricia L.",
      location: "Jacksonville, FL",
      text: "Called them for chimney cleaning and was impressed by their professionalism. They arrived on time, did a Level 2 inspection with video, and fixed a water leak I didn't even know about!",
      rating: 5
    },
    {
      name: "David S.",
      location: "Miami, FL",
      text: "Best AC duct cleaning service in South Florida! They reduced my energy bill by over $100/month. The $50 off made it an amazing deal.",
      rating: 5
    },
    {
      name: "Michelle R.",
      location: "Sarasota, FL",
      text: "Professional team that respects your home. They wore shoe covers, cleaned up everything, and the air quality improvement was immediate. 100% recommend!",
      rating: 5
    },
    {
      name: "Thomas B.",
      location: "Gainesville, FL",
      text: "They explained the mold issue in my ducts was common in Florida. Cleaned everything with HEPA filtration and gave me tips for prevention. Worth every penny!",
      rating: 5
    }
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers have to say about our services.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 mb-4 italic">"{review.text}"</p>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-800 font-bold">{review.name.charAt(0)}</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{review.name}</p>
                  <p className="text-sm text-gray-500">{review.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
