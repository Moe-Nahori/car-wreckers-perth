'use client';

import { DollarSign, Clock, Award, Truck, Shield, Recycle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface WhyChooseUsProps {
  className?: string;
}

export default function WhyChooseUs({ className }: WhyChooseUsProps) {
  const reasons = [
    {
      icon: <DollarSign className="w-12 h-12 text-blue-500" />,
      title: "Best Cash Offers",
      description: "Get up to $9,999 cash for your scrap car. We consistently offer the highest prices in Perth."
    },
    {
      icon: <Clock className="w-12 h-12 text-blue-500" />,
      title: "Same Day Service",
      description: "Free pickup within hours of your call. We work around your schedule for maximum convenience."
    },
    {
      icon: <Truck className="w-12 h-12 text-blue-500" />,
      title: "Free Towing",
      description: "No hidden fees or charges. Our free towing service covers all Perth metropolitan areas."
    },
    {
      icon: <Award className="w-12 h-12 text-blue-500" />,
      title: "Licensed & Experienced",
      description: "Over 15 years of experience with all the necessary licenses and insurances."
    },
    {
      icon: <Shield className="w-12 h-12 text-blue-500" />,
      title: "Peace of Mind",
      description: "Professional service with proper documentation and transfer of ownership."
    },
    {
      icon: <Recycle className="w-12 h-12 text-blue-500" />,
      title: "Eco-Friendly",
      description: "Environmentally responsible recycling with over 85% of each vehicle recycled."
    }
  ];

  return (
    <section className={className}>
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Why Choose Our Scrap Car Removal Service?</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          We make selling your scrap car easy, profitable, and environmentally responsible.
          Experience the best car removal service in Perth.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reasons.map((reason, index) => (
          <Card key={index}>
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <div className="bg-blue-50 p-3 rounded-lg">
                  {reason.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{reason.title}</h3>
                  <p className="text-gray-600">{reason.description}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-12 text-center bg-gradient-to-r from-blue-50 to-blue-100 p-8 rounded-lg">
        <h3 className="text-2xl font-bold mb-4">Ready to Turn Your Scrap Car into Cash?</h3>
        <p className="text-lg text-gray-600 mb-6">
          Get an instant quote now and experience our top-rated service.
          We buy any car, in any condition, and make the process hassle-free.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a 
            href="tel:0477080980"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-700 transition"
          >
            Call Now: 0477 080 980
          </a>
          <button
            onClick={() => document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-green-500 text-white px-8 py-3 rounded-lg font-bold hover:bg-green-600 transition"
          >
            Get Instant Quote
          </button>
        </div>
      </div>
    </section>
  );
}