import { CheckCircle2 } from 'lucide-react';

const steps = [
  {
    title: 'Contact Us',
    description: 'Call or submit our quote form with your accident vehicle details.',
  },
  {
    title: 'Vehicle Assessment',
    description: 'Get a fair valuation based on damage extent and salvageable parts.',
  },
  {
    title: 'Free Pickup',
    description: 'We will safely tow your damaged vehicle at no cost to you.',
  },
  {
    title: 'Instant Payment',
    description: 'Receive immediate cash payment upon collection.',
  },
];

export default function ProcessSteps() {
  return (
    <section className="py-12" id="process">
      <h2 className="text-3xl font-bold text-center mb-12">Our Accident Car Removal Process</h2>
      
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