"use client";

import { LeafyGreen, Recycle, Car, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function EnvironmentalCommitment() {
  const stats = [
    { figure: "85%", label: "Parts Recycled", icon: <Recycle className="h-8 w-8" /> },
    { figure: "1000+", label: "Trees Saved Yearly", icon: <LeafyGreen className="h-8 w-8" /> },
    { figure: "5000+", label: "Cars Recycled Annually", icon: <Car className="h-8 w-8" /> },
    { figure: "100%", label: "Eco-Compliant", icon: <Award className="h-8 w-8" /> },
  ];

  const processes = [
    {
      title: "Vehicle Assessment",
      description: "Each vehicle is thoroughly inspected to maximize recyclable components."
    },
    {
      title: "Fluid Recovery",
      description: "Safe extraction and recycling of all vehicle fluids including oil, coolant, and fuel."
    },
    {
      title: "Parts Dismantling",
      description: "Careful removal of reusable parts to minimize waste and maximize recycling."
    },
    {
      title: "Metal Recovery",
      description: "Systematic separation of different metals for efficient recycling."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-green-800 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Environmental Commitment</h1>
          <p className="text-xl md:text-2xl max-w-2xl">
            At iCar Wreckers Perth, we're dedicated to sustainable auto recycling and environmental preservation.
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4 text-green-600">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.figure}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Eco-Friendly Process</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {processes.map((process, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4">{process.title}</h3>
                <p className="text-gray-600">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Environmental Impact */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Environmental Impact</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-600 mb-6">
              Our eco-friendly car recycling practices help reduce landfill waste, minimize carbon emissions, and conserve natural resources. By choosing iCar Wreckers Perth, you're contributing to a more sustainable future.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <LeafyGreen className="h-6 w-6 text-green-600 mr-4 mt-1" />
                <span>Reduction in mining for new materials through parts recycling</span>
              </li>
              <li className="flex items-start">
                <LeafyGreen className="h-6 w-6 text-green-600 mr-4 mt-1" />
                <span>Prevention of soil and water contamination through proper fluid disposal</span>
              </li>
              <li className="flex items-start">
                <LeafyGreen className="h-6 w-6 text-green-600 mr-4 mt-1" />
                <span>Lower carbon footprint through efficient recycling processes</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-green-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to Recycle Your Car?</h2>
          <p className="text-xl mb-8">Choose eco-friendly car disposal with Perth's leading green car wreckers.</p>
          <Button asChild className="bg-white text-green-800 hover:bg-gray-100">
            <Link href="/quote">Get an Instant Quote</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}