export default function ProcessSteps() {
  const steps = [
    {
      step: 1,
      title: "Contact Us",
      description: "Call us or fill out our online quote form with your car details"
    },
    {
      step: 2,
      title: "Get Your Quote",
      description: "Receive an instant cash offer based on your car's details"
    },
    {
      step: 3,
      title: "Schedule Pickup",
      description: "Choose a convenient time for free car removal"
    },
    {
      step: 4,
      title: "Get Paid",
      description: "Get instant cash payment when we collect your car"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Simple 4-Step Process
          </h2>
          <p className="text-lg text-gray-600">
            We've made selling your car as easy as possible. Get cash for your car in just four simple steps!
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {steps.map((step) => (
            <div key={step.step} className="text-center">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                {step.step}
              </div>
              <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}