'use client';

import { Phone, DollarSign, Truck, ClipboardCheck } from 'lucide-react';

interface ProcessStepsProps {
  className?: string;
}

export default function ProcessSteps({ className }: ProcessStepsProps) {
  const steps = [
    {
      icon: <Phone className="w-8 h-8" />,
      title: "1. Contact Us",
      description: "Call us or fill out our quick quote form with your vehicle details. We'll respond instantly with a competitive offer.",
      color: "bg-blue-500"
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "2. Accept Our Offer",
      description: "If you're happy with our quote, we'll schedule a convenient pickup time that works for you.",
      color: "bg-green-500"
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: "3. Free Pickup",
      description: "Our team arrives at the agreed time with free towing. No hidden fees or extra charges.",
      color: "bg-purple-500"
    },
    {
      icon: <ClipboardCheck className="w-8 h-8" />,
      title: "4. Get Paid",
      description: "Receive instant cash payment on the spot. We handle all paperwork and transfer of ownership.",
      color: "bg-orange-500"
    }
  ];

  return (
    <section className={className}>
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">How Our Process Works</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          We've made selling your scrap car as simple as possible. Just four easy steps
          and you'll have cash in hand - usually on the same day!
        </p>
      </div>

      <div className="relative">
        {/* Timeline Line */}
        <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 -translate-x-1/2"></div>

        {/* Steps */}
        <div className="space-y-12">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className={`lg:flex ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-8`}>
                {/* Content */}
                <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>

                {/* Icon */}
                <div className="hidden lg:flex w-20 justify-center">
                  <div className={`w-12 h-12 rounded-full ${step.color} text-white flex items-center justify-center`}>
                    {step.icon}
                  </div>
                </div>

                {/* Mobile Icon */}
                <div className="lg:hidden flex items-center space-x-4 mb-4">
                  <div className={`w-12 h-12 rounded-full ${step.color} text-white flex items-center justify-center`}>
                    {step.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold">{step.title}</h3>
                  </div>
                </div>

                <div className="flex-1"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-12 text-center bg-blue-50 p-8 rounded-lg">
        <h3 className="text-2xl font-bold mb-4">No Hassle, No Obligations</h3>
        <p className="text-gray-600 mb-6">
          Get a quote now - there's absolutely no obligation to proceed. We pride ourselves on
          transparent pricing and honest service.
        </p>
        <div className="inline-flex items-center justify-center space-x-2 text-blue-600 font-semibold">
          <Phone className="w-5 h-5" />
          <span>Call 0477 080 980 for an Instant Quote</span>
        </div>
      </div>
    </section>
  );
}