export default function HowItWorks() {
  const steps = [
    {
      number: 1,
      title: "Contact Us",
      description: "Call us or fill out the quick quote form - it takes less than 2 minutes!",
    },
    {
      number: 2,
      title: "Get Your Offer",
      description: "We'll provide you with the best cash offer for your vehicle instantly.",
    },
    {
      number: 3,
      title: "Get Paid",
      description: "Accept our offer and get paid on the spot - we'll tow your car away for free!",
    },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step) => (
            <div key={step.number} className="text-center">
              <div className="w-16 h-16 bg-blue-900 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                {step.number}
              </div>
              <h3 className="font-bold text-xl mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}