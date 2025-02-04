'use client';

interface ServiceFilterProps {
  services: string[];
  selectedService: string;
  onServiceChange: (service: string) => void;
}

export default function ServiceFilter({ 
  services, 
  selectedService, 
  onServiceChange 
}: ServiceFilterProps) {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold mb-4">Filter by Service</h2>
      <div className="flex flex-wrap gap-3">
        <button 
          className={`px-4 py-2 rounded-full ${
            selectedService === '' 
              ? 'bg-blue-600 text-white' 
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
          onClick={() => onServiceChange('')}
        >
          All Reviews
        </button>
        {services.map((service) => (
          <button
            key={service}
            className={`px-4 py-2 rounded-full ${
              selectedService === service 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
            onClick={() => onServiceChange(service)}
          >
            {service}
          </button>
        ))}
      </div>
    </div>
  );
}