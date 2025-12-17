const PHONE = "424-424-1579";

export default function HowItWorks() {
  const steps = [
    {
      number: "1",
      title: "Call or Request Service Online",
      description: `Give us a call at ${PHONE} or fill out our online form. We'll discuss your needs and answer any questions.`
    },
    {
      number: "2",
      title: "Fast Scheduling & Free Estimate",
      description: "We'll schedule a convenient time and provide upfront pricing. No surprises, no hidden fees."
    },
    {
      number: "3",
      title: "Professional Service",
      description: "Our trained technician arrives on time, explains the plan, and completes the job with care and expertise."
    },
    {
      number: "4",
      title: "Final Walkthrough & Clean-Up",
      description: "We show you what was done, answer questions, and leave your home clean. Your satisfaction is our priority."
    }
  ];

  return (
    <section className="section-padding bg-blue-900 text-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How It Works
          </h2>
          <p className="text-lg text-blue-200 max-w-2xl mx-auto">
            Getting your air ducts or chimney serviced is easy. Here's what to expect when you work with us.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <div key={idx} className="relative">
              <div className="w-14 h-14 bg-orange-500 rounded-full flex items-center justify-center text-2xl font-bold mb-4">
                {step.number}
              </div>
              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute top-7 left-14 w-full h-0.5 bg-blue-700" />
              )}
              <h3 className="text-xl font-bold mb-2">{step.title}</h3>
              <p className="text-blue-200">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href={`tel:${PHONE}`}
            className="btn-secondary inline-block text-lg py-4 px-8"
          >
            Call {PHONE} to Get Started
          </a>
        </div>
      </div>
    </section>
  );
}
