'use client';

export default function ServiceAreas() {
  const areas = [
    'Bellevue', 'Midland', 'Malaga', 'Welshpool', 'Osborne Park',
    'Cannington', 'Joondalup', 'Fremantle', 'Rockingham', 'Armadale',
    'Bayswater', 'Victoria Park', 'Morley', 'Bibra Lake'
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-6">Car Removal Service Areas</h2>
        <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
          We offer free car removal services across all Perth metropolitan areas. Our team provides quick and reliable service to the following locations and surrounding suburbs:
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {areas.map((area) => (
            <div 
              key={area}
              className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center"
            >
              <span className="text-gray-700">{area}</span>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-600 mt-8">
          Don't see your area listed? Contact us anyway - we likely service your location!
        </p>
      </div>
    </section>
  );
}