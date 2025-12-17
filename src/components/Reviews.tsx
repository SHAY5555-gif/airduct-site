export default function Reviews() {
  const reviews = [
    {
      name: "Maria H.",
      location: "Los Angeles",
      text: "Amazing service! They cleaned our air ducts and the difference in air quality was noticeable immediately. Very professional team.",
      rating: 5
    },
    {
      name: "James T.",
      location: "Orange County",
      text: "Had them clean our dryer vent after we noticed our dryer taking forever. They found a huge lint buildup - glad we called before it became a fire hazard!",
      rating: 5
    },
    {
      name: "Sarah K.",
      location: "Riverside",
      text: "Great chimney inspection and cleaning service. They explained everything and showed me pictures of the work. Very thorough.",
      rating: 5
    },
    {
      name: "Michael R.",
      location: "San Bernardino",
      text: "Honest pricing and quality work. No upselling or surprise charges. Would definitely recommend to anyone in the area.",
      rating: 5
    },
    {
      name: "Linda P.",
      location: "Pasadena",
      text: "We've used them twice now - once for duct cleaning and once for chimney repair. Both times excellent service and results.",
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
