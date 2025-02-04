import { Card } from "@/components/ui/card";
import { Truck, DollarSign, Clock, Shield, Recycle, Phone } from 'lucide-react';

export default function Benefits() {
  const benefits = [
    {
      icon: DollarSign,
      title: "Top Dollar Paid",
      description: "Get up to $9,999 cash for your car. We offer some of the most competitive rates in Perth."
    },
    {
      icon: Truck,
      title: "Free Towing",
      description: "Complimentary car removal service across all Perth suburbs. No hidden fees."
    },
    {
      icon: Clock,
      title: "Same Day Service",
      description: "Quick response times with same-day cash payment and car collection."
    },
    {
      icon: Shield,
      title: "Licensed & Insured",
      description: "Fully licensed car buyer with comprehensive insurance coverage for your peace of mind."
    },
    {
      icon: Recycle,
      title: "Eco-Friendly",
      description: "Environmentally responsible car disposal with up to 85% of materials recycled."
    },
    {
      icon: Phone,
      title: "24/7 Support",
      description: "Round-the-clock customer service to assist you with any queries."
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Why Choose Our Cash for Cars Service
          </h2>
          <p className="text-lg text-gray-600">
            Experience a hassle-free car selling process with Perth's most trusted car buyer.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Card key={index} className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}