'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { carMakeGroups } from '@/data/carMakes';

export function CarMakesNav() {
  const [expandedGroup, setExpandedGroup] = useState<string | null>(null);

  const toggleGroup = (groupName: string) => {
    setExpandedGroup(expandedGroup === groupName ? null : groupName);
  };

  return (
    <nav className="bg-white border-b">
      <div className="max-w-7xl mx-auto px-4">
        <ul className="flex flex-wrap">
          {carMakeGroups.map((group) => (
            <li key={group.name} className="relative group">
              <button
                onClick={() => toggleGroup(group.name)}
                className="flex items-center px-4 py-3 hover:bg-gray-50 text-gray-700"
              >
                {group.name}
                {expandedGroup === group.name ? (
                  <ChevronUp className="w-4 h-4 ml-1" />
                ) : (
                  <ChevronDown className="w-4 h-4 ml-1" />
                )}
              </button>
              
              {expandedGroup === group.name && (
                <div className="absolute z-50 left-0 mt-1 w-64 bg-white shadow-lg rounded-lg overflow-hidden">
                  {group.makes.map((make) => (
                    <div key={make.path} className="p-4 hover:bg-gray-50">
                      <Link href={make.path} className="font-medium text-gray-900 hover:text-blue-600">
                        {make.name}
                      </Link>
                      <ul className="mt-2 space-y-1">
                        {make.models.map((model) => (
                          <li key={model.path}>
                            <Link 
                              href={model.path}
                              className="text-sm text-gray-600 hover:text-blue-600 flex justify-between"
                            >
                              <span>{model.name}</span>
                              <span className="text-gray-400">{model.years}</span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default CarMakesNav;