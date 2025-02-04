import { CheckCircle2 } from 'lucide-react';

const steps = [
  {
    title: 'Get in Touch',
    description: 'Contact us through phone or our online quote form with your old car details.',
  },
  {
    title: 'Instant Quote',
    description: 'Receive a competitive quote based on your car make, model, and condition.',
  },
  {
    title: 'Free Removal',
    description: 'We come to your location and tow away your old car at no cost.',
  },
  {
    title: 'Cash Payment',
    description: 'Get paid in cash immediately upon collection of your vehicle.',
  },
];

export default function ProcessSteps() {
  return (
    <section className="py-12" id="process">
      <h2 className="text-3xl font-bold text-center mb-12">How Our Old Car Removal Works</h2>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((step, index) => (
          <div 
            key={index}
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center mb-4">
              <CheckCircle2 className="w-6 h-6 text-green-600 mr-2" />
              <span className="text-sm text-gray-500">Step {index + 1}</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
            <p className="text-gray-600">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}