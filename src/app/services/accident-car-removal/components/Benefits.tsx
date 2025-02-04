import { DollarSign, Truck, Clock, ShieldCheck, Award, Phone } from 'lucide-react';

const benefits = [
  {
    icon: DollarSign,
    title: 'Maximum Value',
    description: 'Get the best price for your accident-damaged vehicle based on salvageable parts.',
  },
  {
    icon: Truck,
    title: 'Free Towing',
    description: 'Professional towing service included at no extra cost.',
  },
  {
    icon: Clock,
    title: 'Quick Removal',
    description: 'Same-day removal service available across Perth.',
  },
  {
    icon: ShieldCheck,
    title: 'Safe & Legal',
    description: 'Fully licensed and insured accident vehicle removal.',
  },
  {
    icon: Award,
    title: 'Expert Team',
    description: 'Specialized in handling accident-damaged vehicles.',
  },
  {
    icon: Phone,
    title: '24/7 Support',
    description: 'Round-the-clock assistance for accident vehicle removal.',
  },
];

export default function Benefits() {
  return (
    <section className="py-12 bg-gray-50" id="benefits">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Benefits of Our Accident Car Removal Service
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