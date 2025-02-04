'use client';

import { CreditCard, Clock, MapPin, Truck, Recycle, Phone } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface BenefitsProps {
  className?: string;
}

export default function Benefits({ className }: BenefitsProps) {
  const benefits = [
    {
      icon: <CreditCard className="w-8 h-8 text-blue-500" />,
      title: "Instant Cash Payments",
      description: "Get paid on the spot - up to $9,999 for your vehicle."
    },
    {
      icon: <Clock className="w-8 h-8 text-blue-500" />,
      title: "Same Day Pickup",
      description: "Fast and efficient service when you need it."
    },
    {
      icon: <Truck className="w-8 h-8 text-blue-500" />,
      title: "Free Towing",
      description: "No hidden fees or charges for vehicle removal."
    },
    {
      icon: <MapPin className="w-8 h-8 text-blue-500" />,
      title: "Perth-Wide Service",
      description: "We cover all metropolitan areas in Perth."
    },
    {
      icon: <Recycle className="w-8 h-8 text-blue-500" />,
      title: "Eco-Friendly",
      description: "Responsible recycling and disposal practices."
    },
    {
      icon: <Phone className="w-8 h-8 text-blue-500" />,
      title: "Easy Process",
      description: "Simple and straightforward from quote to pickup."
    }
  ];

  return (
    <section className={className}>
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Benefits of Our Service</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Experience a hassle-free car removal service with these great benefits.
          We make it easy to turn your unwanted vehicle into cash.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {benefits.map((benefit, index) => (
          <Card key={index}>
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-50 p-3 rounded-lg">
                  {benefit.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}