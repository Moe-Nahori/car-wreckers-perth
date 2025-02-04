'use client';

import React from 'react';

interface PartsCategory {
  category: string;
  items: string[];
}

const commonParts: PartsCategory[] = [
  {
    category: "Engine Parts",
    items: ["Complete Engines", "Transmissions", "Alternators", "Starters", "Radiators", "Fuel Pumps", "ECUs"]
  },
  {
    category: "Body Parts",
    items: ["Doors", "Bonnets", "Bumpers", "Mirrors", "Lights", "Panels", "Windows"]
  },
  {
    category: "Interior Parts",
    items: ["Seats", "Dashboards", "Consoles", "Steering Wheels", "Electronics", "Trim", "Air Bags"]
  }
];

const PartsCategoriesSection: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 mb-12 md:mb-16">
      <h2 className="text-3xl font-bold mb-8 text-center">Available Parts</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {commonParts.map((category) => (
          <div key={category.category} className="text-center">
            <h3 className="text-xl font-semibold mb-4">{category.category}</h3>
            <ul className="space-y-2 text-gray-600">
              {category.items.map((item) => (
                <li key={item} className="hover:text-blue-600 transition-colors cursor-pointer">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PartsCategoriesSection;