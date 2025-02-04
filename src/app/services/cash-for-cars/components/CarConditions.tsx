import { Card } from "@/components/ui/card";
import { Check } from 'lucide-react';

export default function CarConditions() {
  const conditions = [
    {
      title: "Used Cars",
      description: "All makes and models in running condition",
      items: [
        "Regular used cars",
        "High mileage vehicles",
        "Old but running cars",
        "Aging fleet vehicles",
        "Second-hand cars"
      ]
    },
    {
      title: "Damaged Cars",
      description: "Vehicles with various types of damage",
      items: [
        "Accident damaged",
        "Fire damage",
        "Flood affected",
        "Mechanical issues",
        "Structural damage"
      ]
    },
    {
      title: "End-of-Life Vehicles",
      description: "Cars no longer suitable for road use",
      items: [
        "Non-running vehicles",
        "Written-off cars",
        "Scrap vehicles",
        "Deregistered cars",
        "Unroadworthy vehicles"
      ]
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            We Buy Cars in Any Condition
          </h2>
          <p className="text-lg text-gray-600">
            From perfectly running used cars to completely damaged vehicles, we accept them all and pay top dollar!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {conditions.map((condition, index) => (
            <Card key={index} className="p-6">
              <h3 className="font-semibold text-xl mb-2">{condition.title}</h3>
              <p className="text-gray-600 mb-4">{condition.description}</p>
              <ul className="space-y-2">
                {condition.items.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-500" />
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}