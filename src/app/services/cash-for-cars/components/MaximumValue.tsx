import { Card, CardContent } from "@/components/ui/card";
import { DollarSign, Star, Clock, ThumbsUp } from 'lucide-react';

export default function MaximumValue() {
  const factors = [
    {
      icon: DollarSign,
      title: "Best Market Rates",
      description: "We analyze current market values to offer you the highest possible price for your vehicle"
    },
    {
      icon: Star,
      title: "All Cars Wanted",
      description: "Any make, model, age, or condition - we buy them all at competitive prices"
    },
    {
      icon: Clock,
      title: "Quick & Easy Process",
      description: "Simple valuation process with instant quotes and same-day payments"
    },
    {
      icon: ThumbsUp,
      title: "Guaranteed Purchase",
      description: "We guarantee to buy your car regardless of its condition"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Get Maximum Value for Your Car
          </h2>
          <p className="text-lg text-gray-600">
            We offer the best prices in Perth for all types of vehicles. Our transparent valuation process ensures you get the highest possible value for your car.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {factors.map((factor, index) => {
            const Icon = factor.icon;
            return (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="bg-blue-100 p-3 rounded-lg">
                      <Icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">{factor.title}</h3>
                      <p className="text-gray-600">{factor.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}