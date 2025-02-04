import { DollarSign, Clock, Truck, FileCheck, ThumbsUp, Shield } from 'lucide-react';

const benefits = [
  {
    icon: DollarSign,
    title: 'Top Cash Offers',
    description: 'Get the best market value for your old or unwanted car.',
  },
  {
    icon: Clock,
    title: 'Same-Day Service',
    description: 'Quick and efficient removal at your convenience.',
  },
  {
    icon: Truck,
    title: 'Free Towing',
    description: 'No-cost removal service across all Perth suburbs.',
  },
  {
    icon: FileCheck,
    title: 'Simple Process',
    description: 'Hassle-free paperwork and instant payment.',
  },
  {
    icon: ThumbsUp,
    title: 'Any Condition',
    description: 'We accept old cars in any condition or state.',
  },
  {
    icon: Shield,
    title: 'Licensed Service',
    description: 'Fully licensed and professional car removal team.',
  },
];

export default function Benefits() {
  return (
    <section className="py-12 bg-gray-50" id="benefits">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Choose Us for Old Car Removal
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