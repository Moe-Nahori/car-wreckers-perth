import { DollarSign, Truck, Briefcase, ClipboardCheck, Users, Shield } from 'lucide-react';

const benefits = [
  {
    icon: DollarSign,
    title: 'Competitive Rates',
    description: 'Best market prices for all types of commercial vehicles.',
  },
  {
    icon: Truck,
    title: 'All Vehicles Accepted',
    description: 'From vans to trucks, we handle all commercial vehicles.',
  },
  {
    icon: Briefcase,
    title: 'Business-Friendly',
    description: 'Flexible scheduling to minimize business disruption.',
  },
  {
    icon: ClipboardCheck,
    title: 'Proper Documentation',
    description: 'Complete paperwork handling for business compliance.',
  },
  {
    icon: Users,
    title: 'Fleet Services',
    description: 'Specialized in handling multiple vehicle removals.',
  },
  {
    icon: Shield,
    title: 'Fully Compliant',
    description: 'Licensed commercial vehicle removal service.',
  },
];

export default function Benefits() {
  return (
    <section className="py-12 bg-gray-50" id="benefits">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Commercial Vehicle Removal Benefits
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div 
                key={index}
                className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <Icon className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}