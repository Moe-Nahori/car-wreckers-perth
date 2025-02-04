'use client';

import { Card, CardContent } from '@/components/ui/card';

interface AcceptedVehiclesProps {
  className?: string;
}

export default function AcceptedVehicles({ className }: AcceptedVehiclesProps) {
  const vehicles = [
    {
      type: "Old & Unused Cars",
      description: "Vehicles that have been sitting idle or are too old to run efficiently",
      examples: ["Non-running vehicles", "Old family cars", "Vintage vehicles"]
    },
    {
      type: "Accident Damaged",
      description: "Cars that have been in accidents or have significant damage",
      examples: ["Collision damaged", "Fire damaged", "Flood affected"]
    },
    {
      type: "Mechanical Issues",
      description: "Vehicles with major mechanical problems",
      examples: ["Engine failures", "Transmission issues", "Electrical problems"]
    },
    {
      type: "End of Life Vehicles",
      description: "Cars that have reached the end of their usable life",
      examples: ["High mileage vehicles", "Rust damaged", "Beyond repair"]
    },
    {
      type: "Commercial Vehicles",
      description: "All types of commercial and business vehicles",
      examples: ["Vans", "Utes", "Light trucks"]
    },
    {
      type: "Any Make & Model",
      description: "We accept all vehicle brands and models",
      examples: ["Luxury cars", "Economy vehicles", "Sports cars"]
    }
  ];

  return (
    <section className={className}>
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Types of Vehicles We Accept</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          We accept all types of vehicles regardless of their condition. If you're unsure about your vehicle,
          just give us a call - chances are we'll take it!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {vehicles.map((vehicle, index) => (
          <Card key={index}>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-3">{vehicle.type}</h3>
              <p className="text-gray-600 mb-4">{vehicle.description}</p>
              <ul className="space-y-2">
                {vehicle.examples.map((example, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                    {example}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-8 text-center bg-blue-50 p-6 rounded-lg">
        <h3 className="text-xl font-semibold mb-2">Not Sure If We'll Accept Your Vehicle?</h3>
        <p className="text-gray-600">
          Don't worry! We accept almost any vehicle in any condition. Contact us for a quick assessment
          and get cash for your car today. Free pickup available across Perth.
        </p>
      </div>
    </section>
  );
}